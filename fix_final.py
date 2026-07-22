#!/usr/bin/env python3
import os
import glob
import re

def fix_quotes_in_tsx(content):
    """
    Fix quotes in TSX files by converting single-quoted strings with apostrophes
    to double-quoted strings
    """
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Skip if line doesn't contain the pattern we're looking for
        if not ("': '" in line or "description: '" in line or "answer: '" in line or "question: '" in line or "title: '" in line):
            fixed_lines.append(line)
            continue

        # Find all patterns like: key: 'value with ' apostrophes'
        # and convert to: key: "value with ' apostrophes"
        pattern = r"(\w+):\s*'([^']*'[^']*?)'"

        def replace_func(match):
            key = match.group(1)
            value = match.group(2)
            # Convert to double quotes
            return f'{key}: "{value}"'

        new_line = re.sub(pattern, replace_func, line)
        fixed_lines.append(new_line)

    return '\n'.join(fixed_lines)

# Process all .tsx files
for filepath in glob.glob('src/**/*.tsx', recursive=True):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content
        content = fix_quotes_in_tsx(content)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed: {filepath}')
        else:
            print(f'No changes needed: {filepath}')
    except Exception as e:
        print(f'Error with {filepath}: {e}')

print('\\nDone!')
