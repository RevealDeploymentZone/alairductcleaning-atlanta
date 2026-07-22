#!/usr/bin/env python3
import os
import glob

def fix_quotes_aggressive(content):
    # Replace all possible smart quote variants
    replacements = [
        ('\u2018', "'"),  # Left single quote
        ('\u2019', "'"),  # Right single quote
        ('\u201C', '"'),  # Left double quote
        ('\u201D', '"'),  # Right double quote
        (''', "'"),       # Another variant
        (''', "'"),       # Another variant
        ('"', '"'),       # Another variant
        ('"', '"'),       # Another variant
    ]

    for old, new in replacements:
        content = content.replace(old, new)

    return content

# Find all .tsx files
for filepath in glob.glob('src/**/*.tsx', recursive=True):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content
        content = fix_quotes_aggressive(content)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed: {filepath}')
        else:
            print(f'No changes: {filepath}')
    except Exception as e:
        print(f'Error with {filepath}: {e}')

print('\\nDone!')
