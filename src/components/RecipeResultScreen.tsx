import React, { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Star,
  Clock,
  ChefHat,
  Users,
  Check,
  Share2,
  Play,
  Flame,
  Sparkles,
  RefreshCw,
  Info,
  Scale,
  Printer,
  FileText,
  Download
} from 'lucide-react';
import { Recipe } from '../types';
import { CookingModeModal } from './CookingModeModal';
import { AndroidShareSheet } from './AndroidShareSheet';
import { NutritionDashboard } from './NutritionDashboard';
import { RecipeCardModal } from './RecipeCardModal';

interface RecipeResultScreenProps {
  recipe: Recipe;
  onBack: () => void;
  onToggleFavorite: (recipeId: string) => void;
  isFavorite: boolean;
}

export const RecipeResultScreen: React.FC<RecipeResultScreenProps> = ({
  recipe,
  onBack,
  onToggleFavorite,
  isFavorite,
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [showCookingModal, setShowCookingModal] = useState(false);
  const [showRecipeCardModal, setShowRecipeCardModal] = useState(false);
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);
  const [servingsScale, setServingsScale] = useState<number>(1);
  const [showSubstitutions, setShowSubstitutions] = useState(true);

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = () => {
    setIsShareSheetOpen(true);
  };

  const handleOpenRecipeCard = () => {
    setShowRecipeCardModal(true);
  };

  const baseServings = parseInt(recipe.servings) || 2;
  const scaledServings = Math.round(baseServings * servingsScale);

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#2C241F] pb-32 animate-fadeIn">
      {/* Top Floating App Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 p-4 max-w-4xl mx-auto flex items-center justify-between pointer-events-none">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-[#FFFDF7]/90 backdrop-blur-md text-[#2C241F] flex items-center justify-center pointer-events-auto hover:bg-[#FFFDF7] transition-all border border-[#DED5C5] cursor-pointer shadow-sm"
          title="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={handleOpenRecipeCard}
            className="h-10 px-3 rounded-full bg-[#FFFDF7]/90 backdrop-blur-md text-[#294936] font-serif font-bold text-xs flex items-center gap-1.5 hover:bg-[#FFFDF7] transition-all border border-[#DED5C5] cursor-pointer shadow-sm"
            title="Export to Recipe Card (PDF / Print)"
          >
            <FileText className="w-4 h-4 text-[#294936]" />
            <span className="hidden sm:inline">Export Card</span>
          </button>
          <button
            onClick={handleOpenRecipeCard}
            className="w-10 h-10 rounded-full bg-[#FFFDF7]/90 backdrop-blur-md text-[#2C241F] flex items-center justify-center hover:bg-[#FFFDF7] transition-all border border-[#DED5C5] cursor-pointer shadow-sm sm:hidden"
            title="Export to Recipe Card"
          >
            <FileText className="w-4 h-4 text-[#294936]" />
          </button>
          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-[#FFFDF7]/90 backdrop-blur-md text-[#2C241F] flex items-center justify-center hover:bg-[#FFFDF7] transition-all border border-[#DED5C5] cursor-pointer shadow-sm"
            title="Share Recipe"
          >
            <Share2 className="w-4 h-4 text-[#294936]" />
          </button>
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-[#DED5C5] cursor-pointer shadow-sm ${
              isFavorite
                ? 'bg-[#B85C38] text-white border-[#B85C38]'
                : 'bg-[#FFFDF7]/90 text-[#2C241F] hover:bg-[#FFFDF7]'
            }`}
            title={isFavorite ? 'Remove from saved' : 'Save recipe'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
          </button>
        </div>
      </div>

      {/* Hero Food Photography Header */}
      <div className="relative h-80 sm:h-96 md:h-[420px] w-full overflow-hidden bg-[#DED5C5]">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F3E8] via-[#F8F3E8]/30 to-transparent" />
      </div>

      {/* Recipe Container Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 relative z-10">
        <div className="bg-[#FFFDF7] border border-[#DED5C5] rounded-3xl p-6 sm:p-8 shadow-sm">
          {/* Category & Rating Badges */}
          <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#294936]/10 text-[#294936] text-xs font-semibold uppercase tracking-wider font-sans">
                {recipe.cuisine || recipe.category || 'Classic Recipe'}
              </span>
              {recipe.state && (
                <span className="px-2.5 py-1 rounded-full bg-[#B85C38]/10 text-[#B85C38] text-xs font-semibold font-sans">
                  {recipe.state}
                </span>
              )}
              {recipe.isQuick && (
                <span className="px-2.5 py-1 rounded-full bg-[#B85C38]/10 text-[#B85C38] text-xs font-semibold flex items-center gap-1 font-sans">
                  <Sparkles className="w-3 h-3" />
                  Quick Dish
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-[#B85C38] bg-[#F8F3E8] px-3 py-1 rounded-full border border-[#DED5C5]">
              <Star className="w-3.5 h-3.5 fill-[#B85C38]" />
              <span>{recipe.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#2C241F] mb-3 leading-tight tracking-tight">
            {recipe.title}
          </h1>

          {/* Story / Description */}
          {recipe.description && (
            <p className="text-sm sm:text-base text-[#766B63] font-serif leading-relaxed mb-6 italic">
              "{recipe.description}"
            </p>
          )}

          {/* Meta Bar: Time, Difficulty, Servings, Energy */}
          <div className="grid grid-cols-4 gap-2 bg-[#F8F3E8] p-3.5 sm:p-4 rounded-2xl border border-[#DED5C5] mb-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#294936] mb-1" />
              <span className="text-xs sm:text-sm font-bold text-[#2C241F] font-serif">{recipe.time}</span>
              <span className="text-[10px] text-[#766B63] uppercase tracking-wider font-sans">Cook Time</span>
            </div>

            <div className="flex flex-col items-center border-l border-[#DED5C5]">
              <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B705C] mb-1" />
              <span className="text-xs sm:text-sm font-bold text-[#2C241F] font-serif">{recipe.difficulty}</span>
              <span className="text-[10px] text-[#766B63] uppercase tracking-wider font-sans">Difficulty</span>
            </div>

            <div className="flex flex-col items-center border-l border-[#DED5C5]">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#294936] mb-1" />
              <span className="text-xs sm:text-sm font-bold text-[#2C241F] font-serif">{scaledServings}</span>
              <span className="text-[10px] text-[#766B63] uppercase tracking-wider font-sans">Servings</span>
            </div>

            <div className="flex flex-col items-center border-l border-[#DED5C5]">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#B85C38] mb-1" />
              <span className="text-xs sm:text-sm font-bold text-[#2C241F] font-serif">
                {recipe.calories || (recipe.nutrition ? `${recipe.nutrition.calories} kcal` : '380 kcal')}
              </span>
              <span className="text-[10px] text-[#766B63] uppercase tracking-wider font-sans">Calories</span>
            </div>
          </div>

          {/* Servings Adjuster & Recipe Card Export Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {/* Servings Adjuster Controls */}
            <div className="flex items-center justify-between bg-[#FFFDF7] p-3.5 rounded-2xl border border-[#DED5C5]">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#294936]" />
                <span className="text-xs font-semibold text-[#2C241F]">Portions:</span>
              </div>
              <div className="flex items-center gap-1">
                {[0.5, 1, 1.5, 2].map((scale) => (
                  <button
                    key={scale}
                    onClick={() => setServingsScale(scale)}
                    className={`px-2 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      servingsScale === scale
                        ? 'bg-[#294936] text-white shadow-xs'
                        : 'bg-[#F8F3E8] text-[#766B63] hover:text-[#2C241F] border border-[#DED5C5]'
                    }`}
                  >
                    {scale}x
                  </button>
                ))}
              </div>
            </div>

            {/* Export to Recipe Card Action Banner */}
            <button
              onClick={handleOpenRecipeCard}
              className="flex items-center justify-between bg-[#294936]/8 hover:bg-[#294936]/12 border border-[#294936]/25 p-3.5 rounded-2xl transition-all cursor-pointer group text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#294936] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#294936] block leading-tight">
                    Export to Recipe Card
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#766B63]">
                    Printable PDF & index card layout
                  </span>
                </div>
              </div>
              <Download className="w-4 h-4 text-[#294936] shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
            </button>
          </div>

          {/* Interactive Checklist Ingredients Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#DED5C5]">
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#2C241F]">
                  Ingredients
                </h2>
                <p className="text-xs text-[#766B63]">
                  Check off items as you gather them from your pantry
                </p>
              </div>
              <span className="text-xs font-semibold text-[#294936] bg-[#294936]/10 px-2.5 py-1 rounded-full">
                {Object.values(checkedIngredients).filter(Boolean).length}/{recipe.ingredients.length} ready
              </span>
            </div>

            <div className="space-y-2.5">
              {recipe.ingredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`p-3.5 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                      isChecked
                        ? 'bg-[#F8F3E8]/70 border-[#DED5C5] text-[#766B63] line-through'
                        : 'bg-[#FFFDF7] border-[#DED5C5] hover:border-[#294936] text-[#2C241F]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 border transition-all ${
                        isChecked
                          ? 'bg-[#294936] border-[#294936] text-white'
                          : 'border-[#6B705C] bg-[#FFFDF7]'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-sm sm:text-base font-serif leading-relaxed select-none">
                      {ing}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ingredient Substitutions & Kitchen Notes */}
          {recipe.substitutions && recipe.substitutions.length > 0 && (
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#F8F3E8] border border-[#DED5C5]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#B85C38]" />
                  <h3 className="font-serif font-bold text-base text-[#2C241F]">
                    Ingredient Substitutions & Notes
                  </h3>
                </div>
                <button
                  onClick={() => setShowSubstitutions(!showSubstitutions)}
                  className="text-xs text-[#294936] font-semibold hover:underline cursor-pointer"
                >
                  {showSubstitutions ? 'Collapse' : 'Expand'}
                </button>
              </div>

              {showSubstitutions && (
                <div className="space-y-2.5 mt-2">
                  {recipe.substitutions.map((sub, i) => (
                    <div key={i} className="bg-[#FFFDF7] p-3 rounded-xl border border-[#DED5C5] text-xs sm:text-sm">
                      <div className="flex items-baseline gap-2 font-medium text-[#2C241F]">
                        <span className="line-through text-[#766B63]">{sub.original}</span>
                        <span className="text-[#B85C38]">➔</span>
                        <span className="font-bold text-[#294936]">{sub.substitute}</span>
                      </div>
                      {sub.notes && (
                        <p className="text-xs text-[#766B63] mt-1 italic">
                          Note: {sub.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step-by-Step Cooking Instructions */}
          <div className="mb-8">
            <div className="mb-4 pb-2 border-b border-[#DED5C5]">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#2C241F]">
                Step-by-Step Instructions
              </h2>
              <p className="text-xs text-[#766B63]">
                Carefully crafted classical culinary directions
              </p>
            </div>

            <div className="space-y-4">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F8F3E8]/50 border border-[#DED5C5]/60">
                  <div className="w-8 h-8 rounded-full bg-[#294936] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-[#2C241F] font-serif leading-relaxed pt-0.5 flex-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition Section */}
          <div className="mt-8 pt-6 border-t border-[#DED5C5]">
            <NutritionDashboard recipe={recipe} />
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar: Start Cooking Button with Warm Terracotta CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-[#FFFDF7]/95 backdrop-blur-md border-t border-[#DED5C5] p-3 sm:p-4">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className={`p-3.5 rounded-xl border border-[#DED5C5] transition-all cursor-pointer ${
              isFavorite
                ? 'bg-[#B85C38] text-white border-[#B85C38]'
                : 'bg-[#F8F3E8] text-[#2C241F] hover:bg-[#DED5C5]'
            }`}
            title={isFavorite ? 'Saved' : 'Save'}
          >
            <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
          </button>

          <button
            onClick={() => setShowCookingModal(true)}
            className="flex-1 py-3.5 px-4 rounded-xl bg-[#B85C38] hover:bg-[#9E4929] text-[#FFFDF7] font-serif font-bold text-base flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer hover:scale-[1.01] active:scale-98"
          >
            <Play className="w-5 h-5 fill-[#FFFDF7]" />
            <span>Start Cooking</span>
          </button>
        </div>
      </div>

      {/* Interactive Cooking Modal */}
      {showCookingModal && (
        <CookingModeModal
          recipe={recipe}
          onClose={() => setShowCookingModal(false)}
        />
      )}

      {/* Android-style Share Sheet */}
      <AndroidShareSheet
        recipe={recipe}
        isOpen={isShareSheetOpen}
        onClose={() => setIsShareSheetOpen(false)}
        onOpenRecipeCard={handleOpenRecipeCard}
      />

      {/* Export to Recipe Card Modal */}
      <RecipeCardModal
        recipe={recipe}
        isOpen={showRecipeCardModal}
        onClose={() => setShowRecipeCardModal(false)}
        initialServingsScale={servingsScale}
      />
    </div>
  );
};
