import { Recipe } from '../types';

export interface ShareContentData {
  title: string;
  text: string;
  url: string;
  dialogTitle?: string;
  recipe?: Recipe;
}

/**
 * Format structured recipe text suitable for messaging apps, SMS, and clipboard
 */
export function formatRecipeShareText(recipe: Recipe): string {
  const ingredientsList = recipe.ingredients.map((ing) => `• ${ing}`).join('\n');
  const instructionsList = recipe.instructions.map((step, i) => `${i + 1}. ${step}`).join('\n');

  const nutritionLine = recipe.nutrition
    ? `📊 *Nutrition per serving:* ${recipe.nutrition.calories} kcal | ${recipe.nutrition.protein}g Protein | ${recipe.nutrition.carbs}g Carbs | ${recipe.nutrition.fat}g Fat | ${recipe.nutrition.fiber}g Fiber\n\n`
    : recipe.calories ? `🔥 ${recipe.calories}\n\n` : '';

  return `🍳 *${recipe.title}*
⏱️ Prep Time: ${recipe.time} | 👥 Servings: ${recipe.servings} | 📊 Difficulty: ${recipe.difficulty}
⭐ Rating: ${recipe.rating}/5.0 ${recipe.calories ? `| 🔥 ${recipe.calories}` : ''}

${recipe.description ? `"${recipe.description}"\n\n` : ''}${nutritionLine}🛒 *Ingredients:*
${ingredientsList}

👨‍🍳 *Instructions:*
${instructionsList}

✨ Crafted with Cooksweet AI Recipe Companion
${window.location.origin}`;
}

/**
 * Get shareable URL for a recipe
 */
export function getRecipeShareUrl(recipe: Recipe): string {
  const url = new URL(window.location.href);
  url.searchParams.set('recipeId', recipe.id);
  return url.toString();
}

/**
 * Check if Web Share API is available (which invokes Android Intent.ACTION_SEND / system chooser)
 */
export function isNativeShareSupported(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function';
}

/**
 * Check if file sharing is supported
 */
export function isFileShareSupported(files: File[]): boolean {
  if (!isNativeShareSupported() || typeof navigator.canShare !== 'function') {
    return false;
  }
  try {
    return navigator.canShare({ files });
  } catch {
    return false;
  }
}

/**
 * Trigger Android / OS Native Sharesheet via Web Share API
 */
export async function triggerNativeShare(data: {
  title: string;
  text: string;
  url?: string;
  files?: File[];
}): Promise<boolean> {
  if (!isNativeShareSupported()) {
    return false;
  }

  try {
    const sharePayload: ShareData = {
      title: data.title,
      text: data.text,
      url: data.url || window.location.href,
    };

    if (data.files && data.files.length > 0 && isFileShareSupported(data.files)) {
      sharePayload.files = data.files;
    }

    await navigator.share(sharePayload);
    return true;
  } catch (error: any) {
    // AbortError is triggered when user cancels the native share sheet
    if (error?.name === 'AbortError') {
      return true;
    }
    console.warn('Native share error or dismissed:', error);
    return false;
  }
}

/**
 * Build direct app sharing URLs for fallback or direct button taps
 */
export function getAppShareUrls(recipe: Recipe) {
  const text = formatRecipeShareText(recipe);
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(getRecipeShareUrl(recipe));
  const encodedTitle = encodeURIComponent(`Recipe: ${recipe.title} (via Cooksweet)`);

  return {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(`🍳 ${recipe.title}\n\n` + text)}`,
    gmail: `mailto:?subject=${encodedTitle}&body=${encodedText}`,
    sms: `sms:?body=${encodeURIComponent(`Check out this recipe for ${recipe.title}: ${encodedUrl}\n\n` + text.slice(0, 300) + '...')}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this delicious ${recipe.title} recipe made with @Cooksweet!`)}&url=${encodedUrl}`,
  };
}

/**
 * Generate a downloadable .txt or .json recipe file
 */
export function downloadRecipeFile(recipe: Recipe, format: 'txt' | 'json' = 'txt') {
  let content = '';
  let filename = `${recipe.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_recipe.${format}`;
  let mimeType = 'text/plain';

  if (format === 'json') {
    content = JSON.stringify(recipe, null, 2);
    mimeType = 'application/json';
  } else {
    content = formatRecipeShareText(recipe);
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
