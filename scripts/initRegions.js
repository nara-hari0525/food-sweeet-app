import fs from 'fs';
import path from 'path';

const regionsDir = path.join(process.cwd(), 'scripts', 'regions');
if (!fs.existsSync(regionsDir)) {
  fs.mkdirSync(regionsDir, { recursive: true });
}
console.log("Regions directory created.");
