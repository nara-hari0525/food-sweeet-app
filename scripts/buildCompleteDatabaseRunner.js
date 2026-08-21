import fs from 'fs';
import path from 'path';

// Master data compiler for 500+ Authentic Indian Recipes across 28+ states and all categories
const outputDir = path.join(process.cwd(), 'src', 'data', 'indianRecipes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Master image catalog
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
  if (c.includes('sweets') || c.includes('desserts') || n.includes('halwa') || n.includes('kheer') || n.includes('laddu') || n.includes('jamun') || n.includes('payasam') || n.includes('sandesh') || n.includes('rosogolla') || n.includes('modak') || n.includes('peda') || n.includes('pitha') || n.includes('chhena')) return CATEGORY_IMAGES.sweets;
  if (c.includes('drinks') || n.includes('lassi') || n.includes('chai') || n.includes('sherbet') || n.includes('solkadhi') || n.includes('kahwa') || n.includes('sharbat')) return CATEGORY_IMAGES.drinks;
  if (c.includes('street') || n.includes('chaat') || n.includes('puri') || n.includes('pav') || n.includes('pakora') || n.includes('samosa') || n.includes('kachori') || n.includes('dhokla') || n.includes('momo')) return CATEGORY_IMAGES.street;
  if (c.includes('chutney') || c.includes('pickle') || n.includes('pachadi') || n.includes('achar')) return CATEGORY_IMAGES.chutney;
  if (n.includes('rice') || n.includes('pulao') || n.includes('bath') || n.includes('khichdi') || n.includes('pongal') || n.includes('sadham')) return CATEGORY_IMAGES.rice;
  return CATEGORY_IMAGES.chicken;
}

// Master state-by-state repository
import { MASTER_REGIONS_CATALOG } from './data/masterCatalog.js';

console.log("Compiling master 500 authentic Indian recipes...");

const compiledRecipes = [];
let count = 0;

for (const reg of MASTER_REGIONS_CATALOG) {
  for (const st of reg.states) {
    for (const d of st.dishes) {
      count++;
      const id = `in-recipe-${String(count).padStart(4, '0')}`;
      const prepMins = d.mins ? Math.max(10, Math.floor(d.mins * 0.4)) : 15;
      const cookMins = d.mins ? Math.max(15, Math.ceil(d.mins * 0.6)) : 25;
      const totalMins = prepMins + cookMins;

      const isQuick = totalMins <= 25;
      const totalTimeStr = `${totalMins} mins`;
      const prepTimeStr = `${prepMins} mins`;
      const cookTimeStr = `${cookMins} mins`;

      const imageUrl = d.img || getSampleImageUrl(d.cat, d.sub, d.name);

      const allergensList = [];
      const ingStr = JSON.stringify(d.ings || []).toLowerCase();
      if (ingStr.includes('milk') || ingStr.includes('ghee') || ingStr.includes('paneer') || ingStr.includes('curd') || ingStr.includes('yogurt') || ingStr.includes('butter') || ingStr.includes('cream') || ingStr.includes('khoya') || ingStr.includes('mawa') || ingStr.includes('chhena')) {
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
        ...(d.tags || []),
        d.veg ? 'vegetarian' : 'non-vegetarian',
        d.vegan ? 'vegan' : '',
        isQuick ? 'quick-recipe' : '',
        totalMins <= 15 ? '15-minute' : '',
        totalMins <= 30 ? 'easy-weekday' : '',
        (d.protein || 10) >= 20 ? 'high-protein' : '',
        (d.cal || 350) <= 350 ? 'healthy' : '',
        reg.region.toLowerCase().replace(/\s+/g, '-'),
        st.state.toLowerCase().replace(/\s+/g, '-'),
        st.cuisine.toLowerCase().replace(/\s+/g, '-'),
        d.cat.toLowerCase().replace(/\s+/g, '-'),
        (d.spice || 'Medium').toLowerCase() + '-spice',
      ])).filter(Boolean);

      const searchKeywords = Array.from(new Set([
        d.name.toLowerCase(),
        ...(d.alt || []).map(a => a.toLowerCase()),
        st.state.toLowerCase(),
        reg.region.toLowerCase(),
        st.cuisine.toLowerCase(),
        d.cat.toLowerCase(),
        d.sub.toLowerCase(),
        ...(d.ings || []).map(i => (i.name || '').toLowerCase()),
        ...tags,
        ...(d.fest || []).map(f => f.toLowerCase()),
      ]));

      const imagePrompt = `Authentic ${d.name} (${d.alt?.[0] || d.name}) from ${st.state}, ${reg.region}. Served in traditional Indian ware with fresh garnishing, warm natural lighting, professional high-resolution food photography.`;

      compiledRecipes.push({
        id,
        name: d.name,
        title: d.name,
        alternateNames: d.alt || [],
        description: d.desc,
        region: reg.region,
        state: st.state,
        cuisine: st.cuisine,
        category: d.cat,
        subcategory: d.sub,
        vegetarian: !!d.veg,
        vegan: !!d.vegan,
        preparationTime: prepTimeStr,
        cookingTime: cookTimeStr,
        totalTime: totalTimeStr,
        time: totalTimeStr,
        servings: d.servings || 4,
        difficulty: d.diff || 'Medium',
        calories: d.cal || 350,
        protein: d.protein || 12,
        carbohydrates: d.carbs || Math.max(10, Math.floor((d.cal || 350) * 0.45 / 4)),
        fat: d.fat || Math.max(5, Math.floor((d.cal || 350) * 0.35 / 9)),
        fiber: d.fiber || 5,
        ingredients: (d.ings || []).map(i => ({
          name: i.name,
          quantity: i.quantity || '1',
          unit: i.unit || '',
          optional: !!i.optional
        })),
        stepByStepInstructions: d.steps || [],
        instructions: d.steps || [],
        cookingTips: d.tips || [
          'Use fresh whole spices and roast lightly before grinding for authentic aroma.',
          'Adjust green chillies and red chilli powder to suit your household heat preference.'
        ],
        substitutions: d.subs || [
          { original: 'Ghee / Mustard oil', substitute: 'Neutral vegetable oil', notes: 'Maintains authentic regional aromatics.' }
        ],
        allergens: allergensList.length > 0 ? allergensList : ['None'],
        spiceLevel: d.spice || 'Medium',
        tags,
        festival: d.fest || ['Any Day', 'Traditional Meal'],
        mealType: d.meal || ['Lunch', 'Dinner'],
        imagePrompt,
        searchKeywords,
        imageUrl,
        rating: (4.7 + (count % 4) * 0.1).toFixed(1),
        isQuick,
      });
    }
  }
}

console.log(`Compiled ${compiledRecipes.length} recipes.`);

const batch1Path = path.join(outputDir, 'batch1.json');
fs.writeFileSync(batch1Path, JSON.stringify(compiledRecipes, null, 2), 'utf-8');
console.log(`Successfully saved ${compiledRecipes.length} recipes to ${batch1Path}`);
