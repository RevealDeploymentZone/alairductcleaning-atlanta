#!/usr/bin/env python3
import os
import glob

def fix_quotes(content):
    # Replace smart quotes with regular quotes
    content = content.replace("'", "'")
    content = content.replace("'", "'")
    content = content.replace('"', '"')
    content = content.replace('"', '"')
    return content

# Find all .tsx files in src/app
for filepath in glob.glob('src/app/**/*.tsx', recursive=True):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = fix_quotes(content)

        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f'Fixed: {filepath}')
    except Exception as e:
        print(f'Error with {filepath}: {e}')

print('Done!')
