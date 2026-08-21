export interface NutritionInfo {
  calories: number;
  protein: number; // in grams
  carbs: number;   // in grams
  fat: number;     // in grams
  fiber: number;   // in grams
  sugar?: number;  // in grams
  sodium?: number; // in mg
}

export interface IngredientSubstitution {
  original: string;
  substitute: string;
  notes?: string;
}

export interface Recipe {
  id: string;
  title: string;
  time: string;
  servings: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | string;
  rating: string;
  category?: 'Breakfast' | 'Lunch' | 'Dinner' | 'Desserts' | 'Vegetarian' | 'Snacks' | string;
  imageUrl: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  calories?: string;
  nutrition?: NutritionInfo;
  substitutions?: IngredientSubstitution[];
  isFavorite?: boolean;
  isQuick?: boolean;
  cuisine?: 'North Indian' | 'South Indian' | 'Indian' | 'Italian' | 'French' | 'Mediterranean' | string;
  region?: 'North India' | 'South India' | 'East India' | 'West India' | 'International' | string;
  state?: string;
  createdAt?: number;
}

export type TabType = 'home' | 'discover' | 'saved' | 'profile';

export interface GenerateRecipeRequest {
  ingredients: string;
  preferences?: {
    dietary?: string;
    maxTime?: string;
    difficulty?: string;
    servings?: string;
  };
}
