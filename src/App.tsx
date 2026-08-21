import React, { useState, useEffect } from 'react';
import { Recipe, TabType } from './types';
import { DEFAULT_RECIPES } from './data/defaultRecipes';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { IngredientInputScreen } from './components/IngredientInputScreen';
import { SavedRecipesScreen } from './components/SavedRecipesScreen';
import { RecipeResultScreen } from './components/RecipeResultScreen';
import { NutritionDashboard } from './components/NutritionDashboard';
import { MealPlanScreen } from './components/MealPlanScreen';
import { ProfileScreen } from './components/ProfileScreen';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  // Load and store full list of recipes in localStorage for offline availability
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    try {
      const stored = localStorage.getItem('cooksweet_all_recipes');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const defaultMap = new Map(DEFAULT_RECIPES.map((r) => [r.id, r]));
          // Refresh default recipes with updated high-res images and content
          const updatedList = parsed.map((r: Recipe) => {
            if (defaultMap.has(r.id)) {
              return { ...defaultMap.get(r.id)!, ...r, imageUrl: defaultMap.get(r.id)!.imageUrl };
            }
            return r;
          });
          const existingIds = new Set(updatedList.map((r: Recipe) => r.id));
          const missingDefaults = DEFAULT_RECIPES.filter((r) => !existingIds.has(r.id));
          const combined = [...updatedList, ...missingDefaults];
          try {
            localStorage.setItem('cooksweet_all_recipes', JSON.stringify(combined));
          } catch {}
          return combined;
        }
      }
    } catch (e) {
      console.warn('Failed to load recipes from localStorage:', e);
    }
    // Initialize with default recipes if none stored yet
    try {
      localStorage.setItem('cooksweet_all_recipes', JSON.stringify(DEFAULT_RECIPES));
    } catch (e) {
      console.warn('Failed to store default recipes in localStorage:', e);
    }
    return DEFAULT_RECIPES;
  });

  // Sync recipes list to localStorage whenever recipes update
  useEffect(() => {
    try {
      localStorage.setItem('cooksweet_all_recipes', JSON.stringify(recipes));
    } catch (e) {
      console.warn('Failed to sync recipes to localStorage:', e);
    }
  }, [recipes]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showAiModal, setShowAiModal] = useState<boolean>(false);
  const [contextualView, setContextualView] = useState<'mealplan' | 'nutrition' | null>(null);

  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('cooksweet_saved_ids');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return ['old-delhi-butter-chicken', 'mysore-masala-dosa', 'honey-garlic-salmon', 'spicy-penne-arrabbiata'];
  });

  // Sync saved recipe IDs with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cooksweet_saved_ids', JSON.stringify(savedRecipeIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [savedRecipeIds]);

  // Support direct deep links for shared recipes (e.g. ?recipeId=...)
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const recipeId = urlParams.get('recipeId');
      if (recipeId) {
        const found = recipes.find((r) => r.id === recipeId);
        if (found) {
          setSelectedRecipe(found);
        }
      }
    } catch (e) {
      console.warn('URL parsing error:', e);
    }
  }, [recipes]);

  const handleToggleFavorite = (recipeId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setSavedRecipeIds((prev) =>
      prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]
    );
  };

  const isFavorite = (recipeId: string) => savedRecipeIds.includes(recipeId);

  const savedRecipes = recipes.filter((r) => savedRecipeIds.includes(r.id));

  const handleRecipeGenerated = (newRecipe: Recipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
    setShowAiModal(false);
    setSelectedRecipe(newRecipe);
  };

  const handleNavigate = (tab: TabType) => {
    setSelectedRecipe(null);
    setContextualView(null);
    setShowAiModal(false);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#2C241F] flex flex-col font-sans selection:bg-[#B85C38]/20 selection:text-[#2C241F]">
      {/* If a recipe is actively selected, show full Result screen */}
      {selectedRecipe ? (
        <RecipeResultScreen
          recipe={selectedRecipe}
          onBack={handleBackFromRecipe}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite(selectedRecipe.id)}
        />
      ) : (
        <>
          <Header
            currentTab={currentTab}
            onNavigate={handleNavigate}
            savedCount={savedRecipes.length}
            onOpenKitchenAi={() => setShowAiModal(true)}
          />

          <main className="flex-1">
            {/* Contextual Sub-views accessed from Profile */}
            {contextualView === 'mealplan' ? (
              <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
                <button
                  onClick={() => setContextualView(null)}
                  className="mb-4 text-xs font-semibold text-[#294936] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  ← Back to Profile
                </button>
                <MealPlanScreen
                  recipes={recipes}
                  onSelectRecipe={handleSelectRecipe}
                  onNavigate={handleNavigate}
                />
              </div>
            ) : contextualView === 'nutrition' ? (
              <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
                <button
                  onClick={() => setContextualView(null)}
                  className="mb-4 text-xs font-semibold text-[#294936] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  ← Back to Profile
                </button>
                <NutritionDashboard
                  recipes={recipes}
                  onSelectRecipe={handleSelectRecipe}
                  isStandaloneScreen={true}
                />
              </div>
            ) : (
              /* Primary 4 Sections */
              <>
                {currentTab === 'home' && (
                  <HomeScreen
                    recipes={recipes}
                    onSelectRecipe={handleSelectRecipe}
                    onNavigate={handleNavigate}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={isFavorite}
                    onOpenAiGenerator={() => setShowAiModal(true)}
                  />
                )}

                {currentTab === 'discover' && (
                  <ExploreScreen
                    recipes={recipes}
                    onSelectRecipe={handleSelectRecipe}
                    onNavigate={handleNavigate}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={isFavorite}
                  />
                )}

                {currentTab === 'saved' && (
                  <SavedRecipesScreen
                    savedRecipes={savedRecipes}
                    onSelectRecipe={handleSelectRecipe}
                    onNavigate={handleNavigate}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenAiGenerator={() => setShowAiModal(true)}
                  />
                )}

                {currentTab === 'profile' && (
                  <ProfileScreen
                    savedCount={savedRecipes.length}
                    onNavigate={handleNavigate}
                    onOpenMealPlan={() => setContextualView('mealplan')}
                    onOpenNutrition={() => setContextualView('nutrition')}
                    onOpenKitchenAi={() => setShowAiModal(true)}
                  />
                )}
              </>
            )}
          </main>

          {/* Contextual Kitchen AI Modal Drawer */}
          {showAiModal && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-[#F8F3E8] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DED5C5]">
                <IngredientInputScreen
                  onRecipeGenerated={handleRecipeGenerated}
                  onClose={() => setShowAiModal(false)}
                />
              </div>
            </div>
          )}

          <Navbar
            currentTab={currentTab}
            onSelectTab={handleNavigate}
            savedCount={savedRecipes.length}
          />
        </>
      )}
    </div>
  );
}
