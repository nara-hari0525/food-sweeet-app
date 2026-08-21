import fs from 'fs';
import path from 'path';

// Output directory
const outputDir = path.join(process.cwd(), 'src', 'data', 'indianRecipes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Master state-by-state culinary database covering 500 authentic recipes
import { GENERATE_ALL_500_RECIPES } from './all500Data.js';

console.log("Compiling master 500 recipes...");
const recipes = GENERATE_ALL_500_RECIPES();

console.log(`Generated ${recipes.length} authentic Indian recipes.`);

const batch1Path = path.join(outputDir, 'batch1.json');
fs.writeFileSync(batch1Path, JSON.stringify(recipes, null, 2), 'utf-8');

console.log(`Successfully written ${recipes.length} recipes to ${batch1Path}`);
