import React, { useState, useMemo } from 'react';
import {
  Compass,
  Search,
  Sparkles,
  Clock,
  Star,
  Bookmark,
  Share2,
  Filter,
  SlidersHorizontal,
  Flame,
  ArrowRight,
  ChevronDown,
  X,
  TrendingUp,
  MapPin,
  CalendarDays
} from 'lucide-react';
import { Recipe, TabType } from '../types';
import { AndroidShareSheet } from './AndroidShareSheet';

interface ExploreScreenProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onNavigate: (tab: TabType) => void;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  isFavorite: (recipeId: string) => boolean;
}

const SMART_CHIPS = [
  'All',
  'Indian',
  'South Indian',
  'North Indian',
  'Quick',
  'Vegetarian',
  'Italian',
  'French'
];

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
  recipes,
  onSelectRecipe,
  onNavigate,
  onToggleFavorite,
  isFavorite,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChip, setSelectedChip] = useState('All');
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<'All' | 'under20' | 'under40'>('All');
  const [shareRecipe, setShareRecipe] = useState<Recipe | null>(null);

  // Active filters count
  const activeFiltersCount =
    (selectedDifficulty !== 'All' ? 1 : 0) + (selectedTimeFilter !== 'All' ? 1 : 0);

  // Smart filtering logic
  const filteredRecipes = useMemo(() => {
    return recipes.filter((r) => {
      // 1. Text search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        (r.description && r.description.toLowerCase().includes(q)) ||
        (r.cuisine && r.cuisine.toLowerCase().includes(q)) ||
        (r.region && r.region.toLowerCase().includes(q)) ||
        (r.state && r.state.toLowerCase().includes(q)) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(q));

      // 2. Smart Chip
      let matchesChip = true;
      if (selectedChip === 'All') {
        matchesChip = true;
      } else if (selectedChip === 'Indian') {
        matchesChip = r.region?.includes('India') || r.cuisine?.includes('Indian') || false;
      } else if (selectedChip === 'North Indian') {
        matchesChip = r.region === 'North India' || r.cuisine === 'North Indian';
      } else if (selectedChip === 'South Indian') {
        matchesChip = r.region === 'South India' || r.cuisine === 'South Indian';
      } else if (selectedChip === 'Quick') {
        matchesChip = Boolean(r.isQuick || parseInt(r.time) <= 20);
      } else if (selectedChip === 'Vegetarian') {
        matchesChip =
          r.category?.toLowerCase() === 'vegetarian' ||
          !r.ingredients.some((i) => /chicken|fish|meat|salmon|shrimp|prawn/i.test(i));
      } else {
        matchesChip = Boolean(r.cuisine && r.cuisine.toLowerCase() === selectedChip.toLowerCase());
      }

      // 3. More filters: Difficulty
      const matchesDifficulty =
        selectedDifficulty === 'All' || r.difficulty === selectedDifficulty;

      // 4. More filters: Time
      let matchesTime = true;
      const mins = parseInt(r.time) || 30;
      if (selectedTimeFilter === 'under20') matchesTime = mins <= 20;
      if (selectedTimeFilter === 'under40') matchesTime = mins <= 40;

      return matchesSearch && matchesChip && matchesDifficulty && matchesTime;
    });
  }, [recipes, searchQuery, selectedChip, selectedDifficulty, selectedTimeFilter]);

  // Section collections
  const popularRecipes = useMemo(() => {
    return [...recipes].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 4);
  }, [recipes]);

  const trendingRecipes = useMemo(() => {
    return recipes.slice(2, 6);
  }, [recipes]);

  const regionalHighlights = useMemo(() => {
    return recipes.filter((r) => r.region === 'North India' || r.region === 'South India').slice(0, 4);
  }, [recipes]);

  const seasonalFestivalRecipes = useMemo(() => {
    return recipes.filter((r) => r.category === 'Desserts' || r.category === 'Dinner').slice(0, 3);
  }, [recipes]);

  const handleOpenShare = (recipe: Recipe, e: React.MouseEvent) => {
    e.stopPropagation();
    setShareRecipe(recipe);
  };

  const handleResetFilters = () => {
    setSelectedChip('All');
    setSelectedDifficulty('All');
    setSelectedTimeFilter('All');
    setSearchQuery('');
  };

  const isBrowsingAll =
    !searchQuery.trim() &&
    selectedChip === 'All' &&
    selectedDifficulty === 'All' &&
    selectedTimeFilter === 'All';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 pb-24">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-1">
          <Compass className="w-4 h-4 text-[#294936]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#294936]">
            Culinary Discovery
          </span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#2C241F] tracking-tight">
          Explore Traditions & Techniques
        </h1>
        <p className="text-xs sm:text-sm text-[#766B63] font-serif mt-0.5">
          Search global culinary disciplines, regional gems, and seasonal master recipes
        </p>
      </div>

      {/* 1. Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#766B63]">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by recipe, cuisine, state, or technique..."
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

      {/* 2. Smart Horizontal Chips + Filter Toggle Button */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowMoreFilters(!showMoreFilters)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-sans font-semibold shrink-0 transition-all cursor-pointer border ${
            showMoreFilters || activeFiltersCount > 0
              ? 'bg-[#294936] text-[#FFFDF7] border-[#294936]'
              : 'bg-[#FFFDF7] text-[#2C241F] border-[#DED5C5] hover:border-[#6B705C]'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#B85C38] text-white text-[9px] font-bold flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>

        {/* Chips */}
        {SMART_CHIPS.map((chip) => {
          const isActive = selectedChip === chip;
          return (
            <button
              key={chip}
              onClick={() => setSelectedChip(chip)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#294936] text-[#FFFDF7] border-[#294936] font-semibold shadow-xs'
                  : 'bg-[#FFFDF7] text-[#2C241F] border-[#DED5C5] hover:border-[#6B705C] hover:bg-[#F8F3E8]'
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      {/* 3. Expandable More Filters Drawer */}
      {showMoreFilters && (
        <div className="mb-6 p-4 rounded-2xl bg-[#FFFDF7] border border-[#DED5C5] animate-fadeIn shadow-xs space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-[#DED5C5]">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#2C241F]">
              Refine Search Criteria
            </span>
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#B85C38] hover:underline font-semibold cursor-pointer"
            >
              Reset all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Difficulty Level */}
            <div>
              <span className="text-[11px] text-[#766B63] font-bold uppercase block mb-1.5">
                Preparation Difficulty
              </span>
              <div className="flex gap-2">
                {(['All', 'Easy', 'Medium', 'Hard'] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium border transition-colors cursor-pointer ${
                      selectedDifficulty === diff
                        ? 'bg-[#294936] text-white border-[#294936]'
                        : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5]'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Cooking Time Limit */}
            <div>
              <span className="text-[11px] text-[#766B63] font-bold uppercase block mb-1.5">
                Maximum Cook Time
              </span>
              <div className="flex gap-2">
                {[
                  { id: 'All', label: 'Any time' },
                  { id: 'under20', label: '≤ 20 mins' },
                  { id: 'under40', label: '≤ 40 mins' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTimeFilter(t.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium border transition-colors cursor-pointer ${
                      selectedTimeFilter === t.id
                        ? 'bg-[#294936] text-white border-[#294936]'
                        : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Display Content: Filter Results vs Discovery Showcase */}
      {!isBrowsingAll ? (
        /* Filtered Grid */
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif font-bold text-lg text-[#2C241F]">
              Dishes Found ({filteredRecipes.length})
            </h2>
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#766B63] hover:text-[#2C241F] font-semibold cursor-pointer"
            >
              Clear filters
            </button>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="p-8 text-center bg-[#FFFDF7] rounded-2xl border border-[#DED5C5]">
              <p className="font-serif text-[#766B63] text-sm mb-3">
                No recipes match your current combination of filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-[#294936] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredRecipes.map((recipe) => (
                <DiscoveryRecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={() => onSelectRecipe(recipe)}
                  onToggleFavorite={(e) => onToggleFavorite(recipe.id, e)}
                  onShare={(e) => handleOpenShare(recipe, e)}
                  isFav={isFavorite(recipe.id)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Default Rich Discovery Showcase */
        <div className="space-y-8">
          {/* A. Popular Recipes Section */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B85C38] font-sans block mb-0.5">
                  Chef Hall of Fame
                </span>
                <h2 className="font-serif font-bold text-lg sm:text-xl text-[#2C241F]">
                  Popular Classics
                </h2>
              </div>
              <span className="text-xs text-[#766B63] font-sans">Top rated</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {popularRecipes.map((recipe) => (
                <DiscoveryRecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={() => onSelectRecipe(recipe)}
                  onToggleFavorite={(e) => onToggleFavorite(recipe.id, e)}
                  onShare={(e) => handleOpenShare(recipe, e)}
                  isFav={isFavorite(recipe.id)}
                />
              ))}
            </div>
          </section>

          {/* B. Trending Recipes */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#294936]" />
                <h2 className="font-serif font-bold text-lg sm:text-xl text-[#2C241F]">
                  Trending Right Now
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {trendingRecipes.map((recipe) => (
                <DiscoveryRecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={() => onSelectRecipe(recipe)}
                  onToggleFavorite={(e) => onToggleFavorite(recipe.id, e)}
                  onShare={(e) => handleOpenShare(recipe, e)}
                  isFav={isFavorite(recipe.id)}
                />
              ))}
            </div>
          </section>

          {/* C. Regional Discovery */}
          <section className="bg-[#FFFDF7] border border-[#DED5C5] rounded-3xl p-5 sm:p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B85C38]" />
                <div>
                  <h2 className="font-serif font-bold text-lg text-[#2C241F]">
                    Regional Culinary Traditions
                  </h2>
                  <p className="text-xs text-[#766B63] font-serif">
                    From North Indian tandoors to South Indian coconut groves
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              {regionalHighlights.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => onSelectRecipe(recipe)}
                  className="bg-[#F8F3E8] rounded-2xl border border-[#DED5C5] p-3 group cursor-pointer hover:border-[#294936] transition-all flex flex-col justify-between"
                >
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-28 rounded-xl object-cover mb-2.5 bg-[#DED5C5]"
                  />
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-sans text-[#766B63] mb-1">
                      <span className="font-bold text-[#B85C38]">{recipe.state || recipe.region}</span>
                      <span>{recipe.time}</span>
                    </div>
                    <h3 className="font-serif font-bold text-xs text-[#2C241F] group-hover:text-[#294936] transition-colors line-clamp-1">
                      {recipe.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* D. Seasonal / Festival Recipes */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-[#294936]" />
                <h2 className="font-serif font-bold text-lg text-[#2C241F]">
                  Seasonal & Festival Specials
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {seasonalFestivalRecipes.map((recipe) => (
                <DiscoveryRecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={() => onSelectRecipe(recipe)}
                  onToggleFavorite={(e) => onToggleFavorite(recipe.id, e)}
                  onShare={(e) => handleOpenShare(recipe, e)}
                  isFav={isFavorite(recipe.id)}
                />
              ))}
            </div>
          </section>
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

const DiscoveryRecipeCard: React.FC<{
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
      <div className="relative h-36 w-full overflow-hidden bg-[#DED5C5]">
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
          >
            <Share2 className="w-3 h-3" />
          </button>
          <button
            onClick={onToggleFavorite}
            className={`w-7 h-7 rounded-full flex items-center justify-center border border-[#DED5C5] shadow-xs cursor-pointer ${
              isFav ? 'bg-[#B85C38] text-white border-[#B85C38]' : 'bg-[#FFFDF7]/90 text-[#2C241F]'
            }`}
          >
            <Bookmark className={`w-3 h-3 ${isFav ? 'fill-white' : ''}`} />
          </button>
        </div>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-sans text-[#766B63] mb-1">
            <span className="font-semibold text-[#294936]">{recipe.time}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-[#B85C38] font-bold">
              <Star className="w-2.5 h-2.5 fill-[#B85C38]" />
              {recipe.rating}
            </span>
            <span>•</span>
            <span>{recipe.servings} Servings</span>
          </div>
          <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C241F] group-hover:text-[#294936] transition-colors line-clamp-1 leading-snug">
            {recipe.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
