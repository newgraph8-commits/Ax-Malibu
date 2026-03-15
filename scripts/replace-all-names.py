import os
import glob

# Define the search and replace strings
search_string = "Ax Arctic"
replace_string = "Ax Malibu"

# Directories to search
directories = [
    "/vercel/share/v0-project/app",
    "/vercel/share/v0-project/components",
]

# File extensions to process
extensions = ["*.tsx", "*.ts", "*.jsx", "*.js", "*.json", "*.md"]

def process_files():
    total_replacements = 0
    
    for directory in directories:
        if not os.path.exists(directory):
            continue
            
        for ext in extensions:
            pattern = os.path.join(directory, "**", ext)
            files = glob.glob(pattern, recursive=True)
            
            for filepath in files:
                # Skip node_modules and scripts folder
                if "node_modules" in filepath or "/scripts/" in filepath:
                    continue
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Count replacements
                    count = content.count(search_string)
                    if count > 0:
                        new_content = content.replace(search_string, replace_string)
                        
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        
                        print(f"Updated {filepath}: {count} replacements")
                        total_replacements += count
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    
    print(f"\nTotal replacements: {total_replacements}")

if __name__ == "__main__":
    process_files()
