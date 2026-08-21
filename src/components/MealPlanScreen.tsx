import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Plus,
  Trash2,
  Sparkles,
  Utensils,
  ChevronRight,
  Clock,
  Flame,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Recipe, TabType } from '../types';

interface MealPlanScreenProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onNavigate: (tab: TabType) => void;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const MealPlanScreen: React.FC<MealPlanScreenProps> = ({
  recipes,
  onSelectRecipe,
  onNavigate,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [mealPlan, setMealPlan] = useState<Record<string, { breakfast?: Recipe; lunch?: Recipe; dinner?: Recipe }>>({
    Monday: {
      breakfast: recipes.find((r) => r.category === 'Breakfast') || recipes[1],
      lunch: recipes.find((r) => r.category === 'Lunch') || recipes[3],
      dinner: recipes.find((r) => r.category === 'Dinner') || recipes[0],
    },
    Tuesday: {
      breakfast: recipes[1],
      dinner: recipes[2],
    },
    Wednesday: {
      dinner: recipes[0],
    },
  });

  const activeDayMeals = mealPlan[selectedDay] || {};

  const handleAutoGeneratePlan = () => {
    const newPlan: Record<string, any> = {};
    DAYS.forEach((day, index) => {
      newPlan[day] = {
        breakfast: recipes[(index * 2) % recipes.length],
        lunch: recipes[(index * 3 + 1) % recipes.length],
        dinner: recipes[(index * 5 + 2) % recipes.length],
      };
    });
    setMealPlan(newPlan);
  };

  const removeMeal = (day: string, slot: 'breakfast' | 'lunch' | 'dinner', e: React.MouseEvent) => {
    e.stopPropagation();
    setMealPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [slot]: undefined,
      },
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <CalendarIcon className="w-4 h-4 text-[#B85C38]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B85C38] font-sans">
              Meal Planner
            </span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#2C241F]">
            Weekly Meal Planner
          </h1>
          <p className="text-xs sm:text-sm text-[#766B63] font-serif mt-0.5">
            Organize breakfast, lunch, and dinner courses across the week with balanced nutrition
          </p>
        </div>

        <button
          onClick={handleAutoGeneratePlan}
          className="px-4 py-2.5 rounded-xl bg-[#294936] hover:bg-[#203a2b] text-[#FFFDF7] font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-xs transition-all self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4 text-[#B85C38]" />
          <span>Auto-Plan Weekly Menu</span>
        </button>
      </div>

      {/* Days Tabs Horizontal Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {DAYS.map((day) => {
          const isSelected = selectedDay === day;
          const hasMeals = !!mealPlan[day] && Object.values(mealPlan[day]).filter(Boolean).length > 0;
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans whitespace-nowrap transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#294936] text-[#FFFDF7] border-[#294936] font-semibold shadow-xs'
                  : 'bg-[#FFFDF7] text-[#2C241F] border-[#DED5C5] hover:border-[#6B705C] hover:bg-[#F8F3E8]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>{day}</span>
                {hasMeals && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-[#B85C38]' : 'bg-[#294936]'
                    }`}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Day Meals Cards */}
      <div className="space-y-4">
        {(['breakfast', 'lunch', 'dinner'] as const).map((slot) => {
          const meal = activeDayMeals[slot];
          const slotTitle = slot.charAt(0).toUpperCase() + slot.slice(1);

          return (
            <div
              key={slot}
              className="bg-[#FFFDF7] border border-[#DED5C5] rounded-2xl p-4 sm:p-5 shadow-xs transition-all hover:border-[#294936]"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#DED5C5]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B85C38]" />
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#2C241F]">
                    {slotTitle}
                  </h3>
                </div>

                {meal && (
                  <span className="text-xs text-[#766B63] font-sans">
                    {meal.time} • {meal.calories || '380 kcal'}
                  </span>
                )}
              </div>

              {meal ? (
                <div
                  onClick={() => onSelectRecipe(meal)}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 rounded-xl bg-[#F8F3E8] border border-[#DED5C5] cursor-pointer group hover:bg-[#FFFDF7] transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={meal.imageUrl}
                      alt={meal.title}
                      className="w-16 h-16 rounded-xl object-cover border border-[#DED5C5]"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-[#2C241F] group-hover:text-[#294936] transition-colors line-clamp-1">
                        {meal.title}
                      </h4>
                      <p className="text-xs text-[#766B63] font-sans mt-0.5">
                        {meal.difficulty} • {meal.servings} Servings • {meal.ingredients.length} ingredients
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={(e) => removeMeal(selectedDay, slot, e)}
                      className="p-2 rounded-lg text-[#766B63] hover:text-[#B85C38] hover:bg-[#FFFDF7] transition-colors cursor-pointer"
                      title="Remove from plan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#294936] font-sans">
                      <span>Recipe</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => onNavigate('home')}
                  className="p-6 rounded-xl bg-[#F8F3E8]/50 border border-dashed border-[#DED5C5] text-center cursor-pointer hover:bg-[#F8F3E8] transition-colors group"
                >
                  <Plus className="w-6 h-6 text-[#766B63] group-hover:text-[#294936] mx-auto mb-1 transition-colors" />
                  <p className="text-xs font-semibold text-[#2C241F] font-serif">
                    No dish planned for {slotTitle}
                  </p>
                  <span className="text-[11px] text-[#766B63] font-sans">
                    Tap to browse recipes or generate with AI
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
