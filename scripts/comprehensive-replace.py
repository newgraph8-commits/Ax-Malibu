import os
import re

# Directory to search
search_dir = "/vercel/share/v0-project/app"

# Counter for replacements
total_replacements = 0

# Walk through all files
for root, dirs, files in os.walk(search_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.json', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file contains "Ax Arctic"
                if "Ax Arctic" in content:
                    # Replace all instances
                    new_content = content.replace("Ax Arctic", "Ax Malibu")
                    
                    # Write back if changes were made
                    if new_content != content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        
                        # Count replacements
                        replacements = content.count("Ax Arctic")
                        total_replacements += replacements
                        print(f"Updated {file_path}: {replacements} replacements")
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

print(f"\nTotal replacements made: {total_replacements}")
