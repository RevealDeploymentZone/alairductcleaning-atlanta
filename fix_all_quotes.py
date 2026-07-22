#!/usr/bin/env python3
import os
import glob
import re

def normalize_quotes_in_tsx(content):
    """
    Normalize all quotes in TSX files:
    - Convert single-quoted strings with apostrophes to double-quoted
    - Properly escape content when switching quote types
    """
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Skip lines that don't have the pattern we care about
        if not (': "' in line or ": '" in line):
            fixed_lines.append(line)
            continue

        # Find all string assignments (key: 'value' or key: "value")
        # Match patterns like: word: 'any content' or word: "any content"
        pattern = r'(\w+):\s*(["\'])((?:(?!\2).|\\.)*)\2'

        def replace_func(match):
            key = match.group(1)
            quote = match.group(2)
            value = match.group(3)

            # Clean up the value first
            # Remove any double escaping
            value = value.replace("\\\\'", "'")
            value = value.replace('\\\\"', '"')
            value = value.replace("\\'", "'")
            value = value.replace('\\"', '"')

            # Check if value contains apostrophes
            if "'" in value:
                # Use double quotes and escape any double quotes in value
                value = value.replace('"', '\\"')
                return f'{key}: "{value}"'
            else:
                # Can use single quotes
                return f"{key}: '{value}'"

        new_line = re.sub(pattern, replace_func, line)
        fixed_lines.append(new_line)

    return '\n'.join(fixed_lines)

# Process all .tsx files
for filepath in glob.glob('src/**/*.tsx', recursive=True):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content
        content = normalize_quotes_in_tsx(content)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed: {filepath}')
    except Exception as e:
        print(f'Error with {filepath}: {e}')

print('Done!')
