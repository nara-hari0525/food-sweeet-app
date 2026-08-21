import React, { useState } from 'react';
import { Bookmark, Clock, Star, Sparkles, Utensils, Share2, ArrowRight } from 'lucide-react';
import { Recipe, TabType } from '../types';
import { AndroidShareSheet } from './AndroidShareSheet';

interface SavedRecipesScreenProps {
  savedRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onNavigate: (tab: TabType) => void;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  onOpenAiGenerator?: () => void;
}

export const SavedRecipesScreen: React.FC<SavedRecipesScreenProps> = ({
  savedRecipes,
  onSelectRecipe,
  onNavigate,
  onToggleFavorite,
  onOpenAiGenerator,
}) => {
  const [shareRecipe, setShareRecipe] = useState<Recipe | null>(null);

  const handleOpenShare = (recipe: Recipe, e: React.MouseEvent) => {
    e.stopPropagation();
    setShareRecipe(recipe);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-28">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Bookmark className="w-4 h-4 text-[#B85C38]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B85C38] font-sans">
              Saved Recipes
            </span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#2C241F]">
            Your Personal Cookbook
          </h1>
          <p className="text-xs sm:text-sm text-[#766B63] font-serif mt-0.5">
            Your private hand-curated culinary library ({savedRecipes.length} {savedRecipes.length === 1 ? 'dish' : 'dishes'})
          </p>
        </div>
      </div>

      {savedRecipes.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-[#FFFDF7] border border-[#DED5C5]">
          <div className="w-16 h-16 rounded-full bg-[#F8F3E8] border border-[#DED5C5] flex items-center justify-center mx-auto mb-4 text-[#766B63]">
            <Bookmark className="w-8 h-8 opacity-60" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#2C241F] mb-2">
            Your personal cookbook is empty
          </h3>
          <p className="text-xs sm:text-sm text-[#766B63] font-serif max-w-sm mx-auto mb-6">
            Tap the bookmark icon on any dish to save it here for instant reference during cooking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('discover')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FFFDF7] hover:bg-[#F8F3E8] text-[#2C241F] border border-[#DED5C5] text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4 text-[#294936]" />
              <span>Discover Recipes</span>
            </button>
            <button
              onClick={onOpenAiGenerator || (() => onNavigate('home'))}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#294936] hover:bg-[#203a2b] text-[#FFFDF7] text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#B85C38]" />
              <span>Generate AI Recipe</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {savedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe)}
              className="bg-[#FFFDF7] rounded-2xl border border-[#DED5C5] overflow-hidden group cursor-pointer hover:border-[#294936] transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#DED5C5]">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#FFFDF7]/95 text-[#294936] text-[11px] font-bold shadow-xs border border-[#DED5C5]">
                    {recipe.cuisine || recipe.category || 'Recipe'}
                  </span>
                  {recipe.state && (
                    <span className="px-2.5 py-0.5 rounded-md bg-[#B85C38] text-white text-[11px] font-semibold shadow-xs">
                      {recipe.state}
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <button
                    onClick={(e) => handleOpenShare(recipe, e)}
                    className="w-8 h-8 rounded-full bg-[#FFFDF7]/90 text-[#2C241F] flex items-center justify-center border border-[#DED5C5] shadow-xs cursor-pointer hover:bg-white"
                    title="Share"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => onToggleFavorite(recipe.id, e)}
                    className="w-8 h-8 rounded-full bg-[#B85C38] text-white flex items-center justify-center border border-[#B85C38] shadow-xs cursor-pointer"
                    title="Remove from saved"
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-white" />
                  </button>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans text-[#766B63] mb-1.5">
                    <span className="font-semibold text-[#294936]">{recipe.time}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-[#B85C38] font-bold">
                      <Star className="w-3 h-3 fill-[#B85C38]" />
                      {recipe.rating}
                    </span>
                    <span>•</span>
                    <span>{recipe.servings} Servings</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#2C241F] group-hover:text-[#294936] transition-colors leading-snug line-clamp-2">
                    {recipe.title}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-[#DED5C5] flex items-center justify-between text-xs">
                  <span className="text-[#766B63]">{recipe.ingredients.length} ingredients</span>
                  <span className="font-bold text-[#294936] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Share sheet */}
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
