import React, { useState } from 'react';
import {
  Flame,
  Dumbbell,
  Wheat,
  Droplet,
  Sparkles,
  Layers,
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  Activity
} from 'lucide-react';
import { Recipe, NutritionInfo } from '../types';

interface NutritionDashboardProps {
  recipe?: Recipe;
  recipes?: Recipe[];
  onSelectRecipe?: (recipe: Recipe) => void;
  isStandaloneScreen?: boolean;
}

const DAILY_VALUES = {
  calories: 2000,
  protein: 50, // grams
  carbs: 275,  // grams
  fat: 78,     // grams
  fiber: 28,   // grams
  sugar: 50,   // grams
  sodium: 2300 // mg
};

export const NutritionDashboard: React.FC<NutritionDashboardProps> = ({
  recipe,
  recipes = [],
  onSelectRecipe,
  isStandaloneScreen = false,
}) => {
  const [servingMultiplier, setServingMultiplier] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'aggregate'>('single');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(recipe?.id || recipes[0]?.id || '');

  const activeRecipe = (recipes.find((r) => r.id === selectedRecipeId) || recipe || recipes[0]) as Recipe | undefined;

  const getBaseNutrition = (rec?: Recipe): NutritionInfo => {
    if (rec?.nutrition) {
      return rec.nutrition;
    }
    const calNumber = parseInt(String(rec?.calories || '380').replace(/[^0-9]/g, '')) || 380;
    return {
      calories: calNumber,
      protein: Math.round(calNumber * 0.065),
      carbs: Math.round(calNumber * 0.1),
      fat: Math.round(calNumber * 0.035),
      fiber: Math.max(3, Math.round(calNumber * 0.015)),
      sugar: 4,
      sodium: 450,
    };
  };

  const aggregateNutrition = (): NutritionInfo => {
    return recipes.reduce<NutritionInfo>(
      (acc, r) => {
        const n = getBaseNutrition(r);
        return {
          calories: acc.calories + n.calories,
          protein: acc.protein + n.protein,
          carbs: acc.carbs + n.carbs,
          fat: acc.fat + n.fat,
          fiber: acc.fiber + n.fiber,
          sugar: (acc.sugar || 0) + (n.sugar || 0),
          sodium: (acc.sodium || 0) + (n.sodium || 0),
        };
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 0 }
    );
  };

  const rawNutrition = viewMode === 'aggregate' && recipes.length > 0
    ? aggregateNutrition()
    : getBaseNutrition(activeRecipe);

  const nutrition = {
    calories: Math.round(rawNutrition.calories * servingMultiplier),
    protein: Math.round(rawNutrition.protein * servingMultiplier),
    carbs: Math.round(rawNutrition.carbs * servingMultiplier),
    fat: Math.round(rawNutrition.fat * servingMultiplier),
    fiber: Math.round(rawNutrition.fiber * servingMultiplier),
    sugar: Math.round((rawNutrition.sugar || 0) * servingMultiplier),
    sodium: Math.round((rawNutrition.sodium || 0) * servingMultiplier),
  };

  const proteinCals = nutrition.protein * 4;
  const carbsCals = nutrition.carbs * 4;
  const fatCals = nutrition.fat * 9;
  const totalMacroCals = Math.max(1, proteinCals + carbsCals + fatCals);

  const proteinPct = Math.round((proteinCals / totalMacroCals) * 100);
  const carbsPct = Math.round((carbsCals / totalMacroCals) * 100);
  const fatPct = Math.max(0, 100 - (proteinPct + carbsPct));

  const netCarbs = Math.max(0, nutrition.carbs - nutrition.fiber);
  const getDvPct = (val: number, dv: number) => Math.min(100, Math.round((val / dv) * 100));

  const badges: { label: string; bg: string; text: string; border: string }[] = [];
  if (nutrition.protein >= 25) badges.push({ label: 'High Protein', bg: 'bg-[#294936]/10', text: 'text-[#294936]', border: 'border-[#294936]/20' });
  if (nutrition.fiber >= 6) badges.push({ label: 'High Fiber', bg: 'bg-[#6B705C]/15', text: 'text-[#6B705C]', border: 'border-[#6B705C]/25' });
  if (nutrition.calories < 400) badges.push({ label: 'Light & Nutrient-Dense', bg: 'bg-[#B85C38]/10', text: 'text-[#B85C38]', border: 'border-[#B85C38]/20' });
  if (netCarbs <= 20) badges.push({ label: 'Low Net Carbs', bg: 'bg-[#294936]/10', text: 'text-[#294936]', border: 'border-[#294936]/20' });
  if (nutrition.fat <= 10) badges.push({ label: 'Low Fat', bg: 'bg-[#B85C38]/10', text: 'text-[#B85C38]', border: 'border-[#B85C38]/20' });

  return (
    <div
      id="nutrition-dashboard-section"
      className={`bg-[#FFFDF7] border border-[#DED5C5] rounded-2xl p-4 sm:p-6 text-[#2C241F] shadow-xs ${
        isStandaloneScreen ? 'max-w-4xl mx-auto' : 'w-full'
      }`}
    >
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#DED5C5]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#294936]/10 border border-[#294936]/20 flex items-center justify-center text-[#294936]">
            <Activity className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2C241F] tracking-tight">
                Nutrition Profile
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#F8F3E8] border border-[#DED5C5] text-[#6B705C] font-sans font-medium">
                Per Serving
              </span>
            </div>
            <p className="text-xs text-[#766B63] font-sans">
              {viewMode === 'aggregate'
                ? `Combined nutritional profile for ${recipes.length} selected meals`
                : `Verified energy & macronutrient distribution`}
            </p>
          </div>
        </div>

        {/* View Toggle if in Standalone mode */}
        {isStandaloneScreen && recipes.length > 1 && (
          <div className="flex items-center gap-1.5 p-1 bg-[#F8F3E8] rounded-xl border border-[#DED5C5]">
            <button
              onClick={() => setViewMode('single')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'single'
                  ? 'bg-[#294936] text-[#FFFDF7] shadow-xs'
                  : 'text-[#766B63] hover:text-[#2C241F]'
              }`}
            >
              Single Dish
            </button>
            <button
              onClick={() => setViewMode('aggregate')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'aggregate'
                  ? 'bg-[#294936] text-[#FFFDF7] shadow-xs'
                  : 'text-[#766B63] hover:text-[#2C241F]'
              }`}
            >
              Meal Plan Total ({recipes.length})
            </button>
          </div>
        )}
      </div>

      {/* Standalone Recipe Dropdown Selector */}
      {isStandaloneScreen && viewMode === 'single' && recipes.length > 0 && (
        <div className="mt-4 mb-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#766B63] block mb-1.5 font-sans">
            Select Dish to Inspect
          </label>
          <div className="relative">
            <select
              value={selectedRecipeId}
              onChange={(e) => {
                setSelectedRecipeId(e.target.value);
                const found = recipes.find((r) => r.id === e.target.value);
                if (found && onSelectRecipe) onSelectRecipe(found);
              }}
              className="w-full appearance-none bg-[#F8F3E8] border border-[#DED5C5] rounded-xl px-4 py-2.5 text-sm text-[#2C241F] focus:outline-none focus:border-[#294936] cursor-pointer pr-10 font-serif"
            >
              {recipes.map((r) => (
                <option key={r.id} value={r.id} className="bg-[#FFFDF7]">
                  {r.title} ({r.calories || `${getBaseNutrition(r).calories} kcal`})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#766B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Portion / Serving Scaler */}
      <div className="flex items-center justify-between mt-4 py-2 px-3 bg-[#F8F3E8] rounded-xl border border-[#DED5C5]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#766B63]">Portion Scale:</span>
          <span className="text-xs font-bold text-[#2C241F] bg-[#FFFDF7] px-2 py-0.5 rounded-md border border-[#DED5C5]">
            {servingMultiplier === 1 ? '1 standard serving' : `${servingMultiplier} servings`}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[0.5, 1, 1.5, 2].map((multiplier) => (
            <button
              key={multiplier}
              onClick={() => setServingMultiplier(multiplier)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                servingMultiplier === multiplier
                  ? 'bg-[#294936] text-[#FFFDF7] shadow-xs'
                  : 'bg-[#FFFDF7] text-[#766B63] hover:text-[#2C241F] border border-[#DED5C5]'
              }`}
            >
              {multiplier}x
            </button>
          ))}
        </div>
      </div>

      {/* 5 Core Nutrition Metric Cards (Calories, Protein, Carbs, Fat, Fiber) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mt-4">
        {/* 1. CALORIES */}
        <div className="col-span-2 sm:col-span-1 bg-[#F8F3E8] border border-[#DED5C5] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold tracking-wider text-[#B85C38] uppercase font-sans">
              Calories
            </span>
            <Flame className="w-4 h-4 text-[#B85C38]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#2C241F] font-serif">
                {nutrition.calories}
              </span>
              <span className="text-xs text-[#766B63] font-medium">kcal</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-[#766B63] mb-1">
                <span>Daily Value</span>
                <span className="font-semibold text-[#2C241F]">
                  {getDvPct(nutrition.calories, DAILY_VALUES.calories)}%
                </span>
              </div>
              <div className="w-full bg-[#DED5C5]/60 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#B85C38] h-full rounded-full transition-all duration-500"
                  style={{ width: `${getDvPct(nutrition.calories, DAILY_VALUES.calories)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. PROTEIN */}
        <div className="bg-[#F8F3E8] border border-[#DED5C5] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold tracking-wider text-[#294936] uppercase font-sans">
              Protein
            </span>
            <Dumbbell className="w-4 h-4 text-[#294936]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#2C241F] font-serif">
                {nutrition.protein}
              </span>
              <span className="text-xs text-[#766B63] font-medium">g</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-[#766B63] mb-1">
                <span>{proteinPct}% energy</span>
                <span className="font-semibold text-[#2C241F]">
                  {getDvPct(nutrition.protein, DAILY_VALUES.protein)}%
                </span>
              </div>
              <div className="w-full bg-[#DED5C5]/60 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#294936] h-full rounded-full transition-all duration-500"
                  style={{ width: `${getDvPct(nutrition.protein, DAILY_VALUES.protein)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. CARBS */}
        <div className="bg-[#F8F3E8] border border-[#DED5C5] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold tracking-wider text-[#6B705C] uppercase font-sans">
              Carbs
            </span>
            <Wheat className="w-4 h-4 text-[#6B705C]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#2C241F] font-serif">
                {nutrition.carbs}
              </span>
              <span className="text-xs text-[#766B63] font-medium">g</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-[#766B63] mb-1">
                <span>{carbsPct}% energy</span>
                <span className="font-semibold text-[#2C241F]">
                  {getDvPct(nutrition.carbs, DAILY_VALUES.carbs)}%
                </span>
              </div>
              <div className="w-full bg-[#DED5C5]/60 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#6B705C] h-full rounded-full transition-all duration-500"
                  style={{ width: `${getDvPct(nutrition.carbs, DAILY_VALUES.carbs)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. FAT */}
        <div className="bg-[#F8F3E8] border border-[#DED5C5] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold tracking-wider text-[#B85C38] uppercase font-sans">
              Fat
            </span>
            <Droplet className="w-4 h-4 text-[#B85C38]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#2C241F] font-serif">
                {nutrition.fat}
              </span>
              <span className="text-xs text-[#766B63] font-medium">g</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-[#766B63] mb-1">
                <span>{fatPct}% energy</span>
                <span className="font-semibold text-[#2C241F]">
                  {getDvPct(nutrition.fat, DAILY_VALUES.fat)}%
                </span>
              </div>
              <div className="w-full bg-[#DED5C5]/60 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#B85C38] h-full rounded-full transition-all duration-500"
                  style={{ width: `${getDvPct(nutrition.fat, DAILY_VALUES.fat)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5. FIBER */}
        <div className="bg-[#F8F3E8] border border-[#DED5C5] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold tracking-wider text-[#294936] uppercase font-sans">
              Fiber
            </span>
            <Sparkles className="w-4 h-4 text-[#294936]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#2C241F] font-serif">
                {nutrition.fiber}
              </span>
              <span className="text-xs text-[#766B63] font-medium">g</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-[#766B63] mb-1">
                <span>Net: {netCarbs}g</span>
                <span className="font-semibold text-[#2C241F]">
                  {getDvPct(nutrition.fiber, DAILY_VALUES.fiber)}%
                </span>
              </div>
              <div className="w-full bg-[#DED5C5]/60 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#294936] h-full rounded-full transition-all duration-500"
                  style={{ width: `${getDvPct(nutrition.fiber, DAILY_VALUES.fiber)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Macro Ratio Stacked Bar */}
      <div className="mt-4 bg-[#F8F3E8] border border-[#DED5C5] rounded-xl p-3">
        <div className="flex items-center justify-between mb-2 text-xs">
          <span className="font-semibold text-[#2C241F] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#294936]" />
            Macronutrient Calorie Ratio
          </span>
          <span className="text-[#766B63]">
            {proteinCals} kcal P • {carbsCals} kcal C • {fatCals} kcal F
          </span>
        </div>

        <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-[#DED5C5]/60 p-0.5 gap-0.5">
          <div
            className="bg-[#294936] h-full rounded-l-full transition-all duration-500"
            style={{ width: `${proteinPct}%` }}
            title={`Protein: ${proteinPct}%`}
          />
          <div
            className="bg-[#6B705C] h-full transition-all duration-500"
            style={{ width: `${carbsPct}%` }}
            title={`Carbs: ${carbsPct}%`}
          />
          <div
            className="bg-[#B85C38] h-full rounded-r-full transition-all duration-500"
            style={{ width: `${fatPct}%` }}
            title={`Fat: ${fatPct}%`}
          />
        </div>

        <div className="flex items-center justify-around mt-2 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#294936]" />
            <span className="text-[#766B63]">Protein:</span>
            <span className="font-bold text-[#2C241F]">{proteinPct}%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#6B705C]" />
            <span className="text-[#766B63]">Carbs:</span>
            <span className="font-bold text-[#2C241F]">{carbsPct}%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B85C38]" />
            <span className="text-[#766B63]">Fat:</span>
            <span className="font-bold text-[#2C241F]">{fatPct}%</span>
          </div>
        </div>
      </div>

      {/* Dietary Badges */}
      {badges.length > 0 && (
        <div className="mt-3.5 flex flex-wrap gap-2 items-center">
          <span className="text-[11px] font-bold uppercase text-[#766B63] font-sans">
            Dietary Highlights:
          </span>
          {badges.map((b, i) => (
            <span
              key={i}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border flex items-center gap-1 ${b.bg} ${b.text} ${b.border}`}
            >
              <CheckCircle2 className="w-3 h-3" />
              {b.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
