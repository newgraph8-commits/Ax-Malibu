#!/bin/bash

# Replace all instances of "Ax Arctic" with "Ax Malibu" in all files
find /vercel/share/v0-project -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.md" -o -name "*.json" -o -name "*.css" \) ! -path "*/node_modules/*" ! -path "*/.next/*" ! -path "*/dist/*" -exec sed -i 's/Ax Arctic/Ax Malibu/g' {} +

echo "Replacement complete! All instances of 'Ax Arctic' have been replaced with 'Ax Malibu'"
