import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Clock,
  Star,
  Sparkles,
  Bookmark,
  Share2,
  ArrowRight,
  Flame,
  UtensilsCrossed,
  ChefHat,
  Play,
  RotateCcw
} from 'lucide-react';
import { Recipe, TabType } from '../types';
import { AndroidShareSheet } from './AndroidShareSheet';

interface HomeScreenProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onNavigate: (tab: TabType) => void;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  isFavorite: (recipeId: string) => boolean;
  onOpenAiGenerator?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  recipes,
  onSelectRecipe,
  onNavigate,
  onToggleFavorite,
  isFavorite,
  onOpenAiGenerator,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shareRecipe, setShareRecipe] = useState<Recipe | null>(null);

  // Time-aware greeting
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning, Chef';
    if (hour < 17) return 'Good afternoon, Chef';
    return 'Good evening, Chef';
  }, []);

  // Continue Cooking & Recently Viewed recipes stored in localStorage
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('cooksweet_recent_ids');
      if (stored) return JSON.parse(stored);
    } catch {}
    return ['old-delhi-butter-chicken', 'mysore-masala-dosa', 'honey-garlic-salmon'];
  });

  const [activeCookingId, setActiveCookingId] = useState<string | null>(() => {
    try {
      return localStorage.getItem('cooksweet_active_cooking') || 'old-delhi-butter-chicken';
    } catch {
      return 'old-delhi-butter-chicken';
    }
  });

  const continueCookingRecipe = useMemo(() => {
    if (!activeCookingId) return null;
    return recipes.find((r) => r.id === activeCookingId) || recipes[0] || null;
  }, [recipes, activeCookingId]);

  const recentlyViewedRecipes = useMemo(() => {
    return recentlyViewedIds
      .map((id) => recipes.find((r) => r.id === id))
      .filter((r): r is Recipe => Boolean(r))
      .slice(0, 4);
  }, [recipes, recentlyViewedIds]);

  const featuredRecipe = recipes[0] || null;

  const recommendedRecipes = useMemo(() => {
    return recipes.slice(1, 7);
  }, [recipes]);

  const quickRecipes = useMemo(() => {
    return recipes.filter((r) => r.isQuick || parseInt(r.time) <= 20).slice(0, 4);
  }, [recipes]);

  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        (r.cuisine && r.cuisine.toLowerCase().includes(q)) ||
        (r.region && r.region.toLowerCase().includes(q)) ||
        (r.state && r.state.toLowerCase().includes(q)) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(q))
    );
  }, [recipes, searchQuery]);

  const handleOpenShare = (recipe: Recipe, e: React.MouseEvent) => {
    e.stopPropagation();
    setShareRecipe(recipe);
  };

  const handleSelectWithRecent = (recipe: Recipe) => {
    try {
      const updated = [recipe.id, ...recentlyViewedIds.filter((id) => id !== recipe.id)].slice(0, 8);
      setRecentlyViewedIds(updated);
      localStorage.setItem('cooksweet_recent_ids', JSON.stringify(updated));
      localStorage.setItem('cooksweet_active_cooking', recipe.id);
      setActiveCookingId(recipe.id);
    } catch {}
    onSelectRecipe(recipe);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 pb-24">
      {/* 1. Interface Header & Greeting */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1">
          <ChefHat className="w-4 h-4 text-[#B85C38]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#B85C38]">
            Home Dashboard
          </span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#2C241F] tracking-tight">
          {greeting}
        </h1>
        <p className="text-xs sm:text-sm text-[#766B63] font-serif mt-0.5">
          What delicious dish would you like to craft in your kitchen today?
        </p>
      </div>

      {/* 2. Compact Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#766B63]">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search recipes, ingredients, or cuisines (e.g. Dosa, Salmon, Paneer)..."
          className="w-full pl-10 pr-10 py-3 bg-[#FFFDF7] text-[#2C241F] placeholder-[#766B63] rounded-2xl border border-[#DED5C5] focus:border-[#294936] focus:outline-none text-sm transition-all shadow-xs font-serif"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-sans text-[#766B63] hover:text-[#2C241F] cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Search Filtered Results View (if typing search) */}
      {searchQuery.trim() ? (
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif font-bold text-lg text-[#2C241F]">
              Search Results ({filteredSearchResults.length})
            </h2>
            <button
              onClick={() => onNavigate('discover')}
              className="text-xs text-[#294936] font-semibold hover:underline cursor-pointer"
            >
              Open in Discover
            </button>
          </div>

          {filteredSearchResults.length === 0 ? (
            <div className="p-8 text-center bg-[#FFFDF7] rounded-2xl border border-[#DED5C5]">
              <p className="font-serif text-[#766B63] text-sm mb-3">No recipes found matching "{searchQuery}".</p>
              <button
                onClick={onOpenAiGenerator || (() => onNavigate('home'))}
                className="px-4 py-2 rounded-xl bg-[#294936] text-[#FFFDF7] text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B85C38]" />
                <span>Create with Kitchen AI</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredSearchResults.map((recipe) => (
                <RecipeCardItem
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={() => handleSelectWithRecent(recipe)}
                  onToggleFavorite={(e) => onToggleFavorite(recipe.id, e)}
                  onShare={(e) => handleOpenShare(recipe, e)}
                  isFav={isFavorite(recipe.id)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* 3. Continue Cooking Banner (Compact & Interactive) */}
          {continueCookingRecipe && (
            <div className="mb-6 bg-[#FFFDF7] border border-[#DED5C5] rounded-2xl p-4 sm:p-4.5 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-[#DED5C5] shrink-0">
                  <img
                    src={continueCookingRecipe.imageUrl}
                    alt={continueCookingRecipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B85C38] flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#B85C38]" />
                    Continue Cooking
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#2C241F] truncate">
                    {continueCookingRecipe.title}
                  </h3>
                  <p className="text-[11px] text-[#766B63] font-sans mt-0.5">
                    {continueCookingRecipe.instructions.length} steps • {continueCookingRecipe.time}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleSelectWithRecent(continueCookingRecipe)}
                className="px-3.5 py-2 rounded-xl bg-[#294936] text-[#FFFDF7] hover:bg-[#203a2b] text-xs font-semibold shrink-0 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Resume</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* 4. Featured Recipe Hero Card (Compact & Premium) */}
          {featuredRecipe && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#294936] font-sans">
                  Featured Cookbook Masterpiece
                </span>
                <button
                  onClick={() => onNavigate('discover')}
                  className="text-xs text-[#6B705C] hover:text-[#294936] font-semibold cursor-pointer font-sans"
                >
                  Explore all
                </button>
              </div>

              <div
                onClick={() => handleSelectWithRecent(featuredRecipe)}
                className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl border border-[#DED5C5] overflow-hidden group cursor-pointer shadow-xs hover:border-[#294936] transition-all grid grid-cols-1 md:grid-cols-12"
              >
                <div className="md:col-span-7 relative h-56 sm:h-64 md:h-full overflow-hidden bg-[#DED5C5]">
                  <img
                    src={featuredRecipe.imageUrl}
                    alt={featuredRecipe.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FFFDF7]/95 text-[#294936] text-xs font-semibold shadow-xs border border-[#DED5C5]">
                      {featuredRecipe.cuisine || featuredRecipe.category || 'Featured'}
                    </span>
                    {featuredRecipe.state && (
                      <span className="px-2.5 py-0.5 rounded-md bg-[#B85C38] text-white text-xs font-semibold shadow-xs">
                        {featuredRecipe.state}
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:col-span-5 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#B85C38]">
                        <Star className="w-3.5 h-3.5 fill-[#B85C38]" />
                        <span>{featuredRecipe.rating}</span>
                        <span className="text-[#766B63] font-normal">•</span>
                        <span className="text-[#766B63] font-normal">{featuredRecipe.time}</span>
                        <span className="text-[#766B63] font-normal">•</span>
                        <span className="text-[#766B63] font-normal">{featuredRecipe.servings} Servings</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => handleOpenShare(featuredRecipe, e)}
                          className="w-7 h-7 rounded-full bg-[#F8F3E8] text-[#2C241F] hover:text-[#294936] flex items-center justify-center border border-[#DED5C5] cursor-pointer"
                          title="Share"
                        >
                          <Share2 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => onToggleFavorite(featuredRecipe.id, e)}
                          className={`w-7 h-7 rounded-full flex items-center justify-center border border-[#DED5C5] cursor-pointer ${
                            isFavorite(featuredRecipe.id)
                              ? 'bg-[#B85C38] text-white border-[#B85C38]'
                              : 'bg-[#F8F3E8] text-[#2C241F]'
                          }`}
                          title="Save recipe"
                        >
                          <Bookmark className={`w-3 h-3 ${isFavorite(featuredRecipe.id) ? 'fill-white' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <h2 className="font-serif font-bold text-lg sm:text-xl text-[#2C241F] group-hover:text-[#294936] transition-colors leading-snug mb-2">
                      {featuredRecipe.title}
                    </h2>

                    {featuredRecipe.description && (
                      <p className="text-xs text-[#766B63] font-serif line-clamp-2 mb-4 leading-relaxed">
                        {featuredRecipe.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#DED5C5] flex items-center justify-between">
                    <span className="text-[11px] text-[#766B63] font-sans">
                      {featuredRecipe.ingredients.length} ingredients • {featuredRecipe.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B85C38] font-sans group-hover:translate-x-1 transition-transform">
                      <span>Cook Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Kitchen AI Assistant Contextual Banner */}
          <div
            onClick={onOpenAiGenerator || (() => onNavigate('discover'))}
            className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#FFFDF7] border border-[#DED5C5] hover:border-[#294936] transition-all cursor-pointer flex items-center justify-between gap-3 group shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#294936] text-[#FFFDF7] flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5 text-[#B85C38]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#2C241F] group-hover:text-[#294936] transition-colors">
                  Have leftover pantry ingredients?
                </h3>
                <p className="text-xs text-[#766B63] font-serif">
                  Let Gemini Kitchen AI draft a bespoke recipe in seconds.
                </p>
              </div>
            </div>

            <span className="px-3 py-1.5 rounded-xl bg-[#F8F3E8] border border-[#DED5C5] text-xs font-semibold text-[#294936] group-hover:bg-[#294936] group-hover:text-white transition-all shrink-0">
              Create
            </span>
          </div>

          {/* 6. Recommended Recipes (Compact Scrollable Row / Grid) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B705C] font-sans block mb-0.5">
                  Hand-Curated Selection
                </span>
                <h2 className="font-serif font-bold text-lg sm:text-xl text-[#2C241F]">
                  Recommended For You
                </h2>
              </div>
              <button
                onClick={() => onNavigate('discover')}
                className="text-xs text-[#294936] font-semibold hover:underline cursor-pointer font-sans"
              >
                View all
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {recommendedRecipes.slice(0, 3).map((recipe) => (
                <RecipeCardItem
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={() => handleSelectWithRecent(recipe)}
                  onToggleFavorite={(e) => onToggleFavorite(recipe.id, e)}
                  onShare={(e) => handleOpenShare(recipe, e)}
                  isFav={isFavorite(recipe.id)}
                />
              ))}
            </div>
          </div>

          {/* 7. Quick Recipes (Under 20 Mins) */}
          {quickRecipes.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B85C38] font-sans block mb-0.5">
                    Fast & Flavorful
                  </span>
                  <h2 className="font-serif font-bold text-lg sm:text-xl text-[#2C241F]">
                    Quick Recipes (≤ 20 Mins)
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                {quickRecipes.map((recipe) => (
                  <CompactRecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelect={() => handleSelectWithRecent(recipe)}
                    onToggleFavorite={(e) => onToggleFavorite(recipe.id, e)}
                    isFav={isFavorite(recipe.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* 8. Recently Viewed */}
          {recentlyViewedRecipes.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-[#766B63]" />
                  <h2 className="font-serif font-bold text-base sm:text-lg text-[#2C241F]">
                    Recently Viewed
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {recentlyViewedRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => handleSelectWithRecent(recipe)}
                    className="bg-[#FFFDF7] border border-[#DED5C5] rounded-xl p-2.5 group cursor-pointer hover:border-[#294936] transition-all flex items-center gap-2.5 shadow-xs"
                  >
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="w-10 h-10 rounded-lg object-cover bg-[#DED5C5] shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-xs text-[#2C241F] group-hover:text-[#294936] transition-colors truncate">
                        {recipe.title}
                      </h4>
                      <span className="text-[10px] text-[#766B63] font-sans block truncate">
                        {recipe.time} • {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Contextual Share Sheet */}
      {shareRecipe && (
        <AndroidShareSheet
          recipe={shareRecipe}
          isOpen={Boolean(shareRecipe)}
          onClose={() => setShareRecipe(null)}
        />
      )}
    </div>
  );
};

// Sub-component: Standard Recipe Card Item
const RecipeCardItem: React.FC<{
  recipe: Recipe;
  onSelect: () => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
  onShare: (e: React.MouseEvent) => void;
  isFav: boolean;
}> = ({ recipe, onSelect, onToggleFavorite, onShare, isFav }) => {
  return (
    <div
      onClick={onSelect}
      className="bg-[#FFFDF7] rounded-2xl border border-[#DED5C5] overflow-hidden group cursor-pointer hover:border-[#294936] transition-all flex flex-col justify-between shadow-xs"
    >
      <div className="relative h-40 w-full overflow-hidden bg-[#DED5C5]">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2.5 left-2.5 flex gap-1">
          <span className="px-2 py-0.5 rounded-md bg-[#FFFDF7]/95 text-[#294936] text-[10px] font-bold shadow-xs border border-[#DED5C5]">
            {recipe.cuisine || recipe.category || 'Recipe'}
          </span>
          {recipe.state && (
            <span className="px-2 py-0.5 rounded-md bg-[#B85C38] text-white text-[10px] font-semibold shadow-xs">
              {recipe.state}
            </span>
          )}
        </div>
        <div className="absolute top-2.5 right-2.5 flex gap-1">
          <button
            onClick={onShare}
            className="w-7 h-7 rounded-full bg-[#FFFDF7]/90 text-[#2C241F] flex items-center justify-center border border-[#DED5C5] shadow-xs cursor-pointer hover:bg-white"
            title="Share"
          >
            <Share2 className="w-3 h-3" />
          </button>
          <button
            onClick={onToggleFavorite}
            className={`w-7 h-7 rounded-full flex items-center justify-center border border-[#DED5C5] shadow-xs cursor-pointer ${
              isFav ? 'bg-[#B85C38] text-white border-[#B85C38]' : 'bg-[#FFFDF7]/90 text-[#2C241F]'
            }`}
            title="Save"
          >
            <Bookmark className={`w-3 h-3 ${isFav ? 'fill-white' : ''}`} />
          </button>
        </div>
      </div>

      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-sans text-[#766B63] mb-1.5">
            <span className="font-semibold text-[#294936]">{recipe.time}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-[#B85C38] font-bold">
              <Star className="w-3 h-3 fill-[#B85C38]" />
              {recipe.rating}
            </span>
            <span>•</span>
            <span>{recipe.servings} Servings</span>
          </div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#2C241F] group-hover:text-[#294936] transition-colors line-clamp-1 leading-snug">
            {recipe.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

// Sub-component: Compact Recipe Card
const CompactRecipeCard: React.FC<{
  recipe: Recipe;
  onSelect: () => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
  isFav: boolean;
}> = ({ recipe, onSelect, onToggleFavorite, isFav }) => {
  return (
    <div
      onClick={onSelect}
      className="bg-[#FFFDF7] rounded-2xl border border-[#DED5C5] overflow-hidden group cursor-pointer hover:border-[#294936] transition-all flex flex-col justify-between shadow-xs"
    >
      <div className="relative h-28 w-full overflow-hidden bg-[#DED5C5]">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <button
            onClick={onToggleFavorite}
            className={`w-6 h-6 rounded-full flex items-center justify-center border border-[#DED5C5] shadow-xs cursor-pointer ${
              isFav ? 'bg-[#B85C38] text-white border-[#B85C38]' : 'bg-[#FFFDF7]/90 text-[#2C241F]'
            }`}
          >
            <Bookmark className={`w-2.5 h-2.5 ${isFav ? 'fill-white' : ''}`} />
          </button>
        </div>
      </div>

      <div className="p-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-sans text-[#766B63] mb-1">
          <span className="font-bold text-[#294936]">{recipe.time}</span>
          <span>•</span>
          <span className="text-[#B85C38] font-semibold flex items-center">
            <Star className="w-2.5 h-2.5 fill-[#B85C38] mr-0.5" />
            {recipe.rating}
          </span>
        </div>
        <h4 className="font-serif font-bold text-xs text-[#2C241F] group-hover:text-[#294936] transition-colors line-clamp-1">
          {recipe.title}
        </h4>
      </div>
    </div>
  );
};
