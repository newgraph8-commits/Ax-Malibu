#!/usr/bin/env python3
import os
import re

# Directory to search
app_dir = "/vercel/share/v0-project/app"

# Count of replacements
total_replacements = 0

# Walk through all files in the app directory
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.jsx') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            
            try:
                # Read the file
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file contains "Ax Arctic"
                if "Ax Arctic" in content:
                    # Replace all instances
                    new_content = content.replace("Ax Arctic", "Ax Malibu")
                    
                    # Count replacements
                    replacements = content.count("Ax Arctic")
                    total_replacements += replacements
                    
                    # Write the file back
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    
                    print(f"Updated {filepath}: {replacements} replacements")
            
            except Exception as e:
                print(f"Error processing {filepath}: {str(e)}")

print(f"\nTotal replacements: {total_replacements}")
