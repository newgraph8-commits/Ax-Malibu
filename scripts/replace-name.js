import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Skip node_modules, .next, and dist directories
    if (file === 'node_modules' || file === '.next' || file === 'dist' || file === '.git') {
      return;
    }
    
    if (stat.isDirectory()) {
      replaceInFiles(filePath);
    } else if (['.tsx', '.ts', '.jsx', '.js', '.md', '.json', '.css'].includes(path.extname(file))) {
      try {
        let content = fs.readFileSync(filePath, 'utf-8');
        if (content.includes('Ax Arctic')) {
          content = content.replace(/Ax Arctic/g, 'Ax Malibu');
          fs.writeFileSync(filePath, content, 'utf-8');
          console.log(`Updated: ${filePath}`);
        }
      } catch (error) {
        // Skip files that can't be read as text
      }
    }
  });
}

console.log('Starting replacement of "Ax Arctic" with "Ax Malibu"...');
replaceInFiles(projectRoot);
console.log('Replacement complete!');
