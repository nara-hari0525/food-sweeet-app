// Comprehensive authentic Indian recipes generator providing 500 recipes across all states and regions

const CATEGORY_IMAGES = {
  biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop',
  chicken: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1000&auto=format&fit=crop',
  paneer: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop',
  dosa: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000&auto=format&fit=crop',
  idli: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop',
  samosa: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop',
  dal: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop',
  roti: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1000&auto=format&fit=crop',
  street: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1000&auto=format&fit=crop',
  fish: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop',
  sweets: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=1000&auto=format&fit=crop',
  drinks: 'https://images.unsplash.com/photo-1571006687899-73e4a36f5e8b?q=80&w=1000&auto=format&fit=crop',
  chutney: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=1000&auto=format&fit=crop',
  rice: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop',
  mutton: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
  seafood: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000&auto=format&fit=crop'
};

function getSampleImageUrl(category, subcategory, name) {
  const n = (name || '').toLowerCase();
  const c = (category || '').toLowerCase();
  const sc = (subcategory || '').toLowerCase();

  if (n.includes('biryani') || sc.includes('biryani')) return CATEGORY_IMAGES.biryani;
  if (n.includes('dosa')) return CATEGORY_IMAGES.dosa;
  if (n.includes('idli') || n.includes('vada') || n.includes('sambar')) return CATEGORY_IMAGES.idli;
  if (n.includes('paneer') || sc.includes('paneer')) return CATEGORY_IMAGES.paneer;
  if (n.includes('fish') || n.includes('mach') || n.includes('meen') || n.includes('trout') || n.includes('pomfret') || n.includes('ilish') || n.includes('tenga')) return CATEGORY_IMAGES.fish;
  if (n.includes('prawn') || n.includes('crab') || n.includes('squid') || n.includes('shrimp') || n.includes('chingri')) return CATEGORY_IMAGES.seafood;
  if (n.includes('mutton') || n.includes('gosht') || n.includes('lamb') || n.includes('pork') || n.includes('sukka') || n.includes('laal maas') || n.includes('rogan josh') || n.includes('kosha')) return CATEGORY_IMAGES.mutton;
  if (n.includes('chicken') || n.includes('kodi') || n.includes('murgh') || n.includes('tikka') || n.includes('tandoori') || n.includes('korma')) return CATEGORY_IMAGES.chicken;
  if (n.includes('dal') || n.includes('pappu') || n.includes('sambar') || n.includes('rasam') || n.includes('kadhi') || n.includes('dalma') || n.includes('chainsoo') || n.includes('chhole')) return CATEGORY_IMAGES.dal;
  if (n.includes('roti') || n.includes('paratha') || n.includes('naan') || n.includes('kulcha') || n.includes('poori') || n.includes('bhature') || n.includes('luchi') || n.includes('thepla') || n.includes('bhakri')) return CATEGORY_IMAGES.roti;
  if (c.includes('sweets') || c.includes('desserts') || n.includes('halwa') || n.includes('kheer') || n.includes('laddu') || n.includes('jamun') || n.includes('payasam') || n.includes('sandesh') || n.includes('rosogolla') || n.includes('modak') || n.includes('peda') || n.includes('pitha')) return CATEGORY_IMAGES.sweets;
  if (c.includes('drinks') || n.includes('lassi') || n.includes('chai') || n.includes('sherbet') || n.includes('solkadhi') || n.includes('kahwa') || n.includes('sharbat')) return CATEGORY_IMAGES.drinks;
  if (c.includes('street') || n.includes('chaat') || n.includes('puri') || n.includes('pav') || n.includes('pakora') || n.includes('samosa') || n.includes('kachori') || n.includes('dhokla') || n.includes('momo')) return CATEGORY_IMAGES.street;
  if (c.includes('chutney') || c.includes('pickle') || n.includes('pachadi') || n.includes('achar')) return CATEGORY_IMAGES.chutney;
  if (n.includes('rice') || n.includes('pulao') || n.includes('bath') || n.includes('khichdi') || n.includes('pongal') || n.includes('sadham')) return CATEGORY_IMAGES.rice;
  return CATEGORY_IMAGES.chicken;
}

// Master Raw Data Generator
import { rawDishesMaster } from './rawDishesMaster.js';

export function GENERATE_ALL_500_RECIPES() {
  console.log(`Processing ${rawDishesMaster.length} master raw recipes...`);

  return rawDishesMaster.map((raw, index) => {
    const prepMinutes = raw.prepMinutes || 15;
    const cookMinutes = raw.cookMinutes || 25;
    const totalMinutes = prepMinutes + cookMinutes;

    const isQuick = totalMinutes <= 25;
    const totalTimeStr = `${totalMinutes} mins`;
    const prepTimeStr = `${prepMinutes} mins`;
    const cookTimeStr = `${cookMinutes} mins`;

    const imageUrl = raw.imageUrl || getSampleImageUrl(raw.category, raw.subcategory, raw.name);

    const allergensList = [];
    const ingStr = JSON.stringify(raw.ingredients || []).toLowerCase();
    if (ingStr.includes('milk') || ingStr.includes('ghee') || ingStr.includes('paneer') || ingStr.includes('curd') || ingStr.includes('yogurt') || ingStr.includes('butter') || ingStr.includes('cream') || ingStr.includes('khoya') || ingStr.includes('mawa')) {
      allergensList.push('Dairy');
    }
    if (ingStr.includes('wheat') || ingStr.includes('maida') || ingStr.includes('semolina') || ingStr.includes('sooji') || ingStr.includes('atta') || ingStr.includes('flour')) {
      allergensList.push('Gluten');
    }
    if (ingStr.includes('peanut') || ingStr.includes('groundnut')) {
      allergensList.push('Peanuts');
    }
    if (ingStr.includes('cashew') || ingStr.includes('almond') || ingStr.includes('pistachio') || ingStr.includes('walnut')) {
      allergensList.push('Tree Nuts');
    }
    if (ingStr.includes('sesame') || ingStr.includes('til')) {
      allergensList.push('Sesame');
    }
    if (ingStr.includes('mustard') || ingStr.includes('sarson')) {
      allergensList.push('Mustard');
    }
    if (ingStr.includes('fish') || ingStr.includes('prawn') || ingStr.includes('shrimp') || ingStr.includes('crab') || ingStr.includes('seafood')) {
      allergensList.push('Fish / Shellfish');
    }

    const tags = Array.from(new Set([
      ...(raw.tags || []),
      raw.vegetarian ? 'vegetarian' : 'non-vegetarian',
      raw.vegan ? 'vegan' : '',
      isQuick ? 'quick-recipe' : '',
      totalMinutes <= 15 ? '15-minute' : '',
      totalMinutes <= 30 ? 'easy-weekday' : '',
      (raw.protein || 10) >= 20 ? 'high-protein' : '',
      (raw.calories || 350) <= 350 ? 'healthy' : '',
      (raw.region || '').toLowerCase().replace(/\s+/g, '-'),
      (raw.state || '').toLowerCase().replace(/\s+/g, '-'),
      (raw.cuisine || '').toLowerCase().replace(/\s+/g, '-'),
      (raw.category || '').toLowerCase().replace(/\s+/g, '-'),
      (raw.spiceLevel || 'Medium').toLowerCase() + '-spice',
    ])).filter(Boolean);

    const searchKeywords = Array.from(new Set([
      raw.name.toLowerCase(),
      ...(raw.alternateNames || []).map((a) => a.toLowerCase()),
      (raw.state || '').toLowerCase(),
      (raw.region || '').toLowerCase(),
      (raw.cuisine || '').toLowerCase(),
      (raw.category || '').toLowerCase(),
      (raw.subcategory || '').toLowerCase(),
      ...(raw.ingredients || []).map((i) => (i.name || '').toLowerCase()),
      ...tags,
      ...(raw.festival || []).map((f) => f.toLowerCase()),
    ]));

    const imagePrompt = raw.imagePrompt || `Authentic ${raw.name} (${raw.alternateNames?.[0] || raw.name}) from ${raw.state}, ${raw.region}. Served in traditional Indian brassware or ceramic bowl with fresh garnishing, warm natural ambient lighting, ultra-high resolution professional culinary photography.`;

    return {
      id: raw.id || `in-recipe-${String(index + 1).padStart(4, '0')}`,
      name: raw.name,
      title: raw.name,
      alternateNames: raw.alternateNames || [],
      description: raw.description,
      region: raw.region,
      state: raw.state,
      cuisine: raw.cuisine,
      category: raw.category,
      subcategory: raw.subcategory,
      vegetarian: !!raw.vegetarian,
      vegan: !!raw.vegan,
      preparationTime: prepTimeStr,
      cookingTime: cookTimeStr,
      totalTime: totalTimeStr,
      time: totalTimeStr,
      servings: raw.servings || 4,
      difficulty: raw.difficulty || 'Medium',
      calories: raw.calories || 350,
      protein: raw.protein || 12,
      carbohydrates: raw.carbohydrates || 45,
      fat: raw.fat || 14,
      fiber: raw.fiber || 5,
      ingredients: raw.ingredients || [],
      stepByStepInstructions: raw.stepByStepInstructions || raw.instructions || [],
      instructions: raw.stepByStepInstructions || raw.instructions || [],
      cookingTips: raw.cookingTips || [
        'Use fresh whole spices and roast them lightly before grinding for peak regional aroma.',
        'Adjust green chillies and red chilli powder to suit your household heat preference.'
      ],
      substitutions: raw.substitutions || [
        { original: 'Ghee', substitute: 'Mustard oil, coconut oil, or neutral vegetable oil', notes: 'Maintains authentic regional aromatics.' }
      ],
      allergens: allergensList.length > 0 ? allergensList : ['None'],
      spiceLevel: raw.spiceLevel || 'Medium',
      tags,
      festival: raw.festival || ['Any Day', 'Traditional Meal'],
      mealType: raw.mealType || ['Lunch', 'Dinner'],
      imagePrompt,
      searchKeywords,
      imageUrl,
      rating: raw.rating || (4.7 + (index % 4) * 0.1).toFixed(1),
      isQuick,
    };
  });
}
