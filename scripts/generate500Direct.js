import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'src', 'data', 'indianRecipes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Master state-by-state culinary database covering 500 authentic recipes
console.log("Compiling master 500 recipes...");
