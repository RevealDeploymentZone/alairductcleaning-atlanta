#!/usr/bin/env python3
import os
import glob
import re

def fix_quotes_properly(content):
    """
    Convert single-quoted strings with apostrophes to double-quoted strings
    """
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Look for patterns like: key: 'value with apostrophe'
        # Check if line might have this pattern
        if ': "' not in line and ": '" in line:
            # Try to find single-quoted strings that contain apostrophes or escaped quotes
            # Pattern: word: 'anything'
            pattern = r"(\w+):\s*'((?:[^'\\]|\\.)*)'"

            def replace_func(match):
                key = match.group(1)
                value = match.group(2)
                # If value contains \', unescape them for double quotes
                value = value.replace("\\'", "'")
                # Escape any double quotes in the value
                value = value.replace('"', '\\"')
                return f'{key}: "{value}"'

            # Only apply if the string seems to contain apostrophes or escapes
            if "\\'" in line or ("': '" in line and "'" in line[line.index("': '")+4:]):
                new_line = re.sub(pattern, replace_func, line)
                fixed_lines.append(new_line)
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)

    return '\n'.join(fixed_lines)

# Process all .tsx files
for filepath in glob.glob('src/**/*.tsx', recursive=True):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content
        content = fix_quotes_properly(content)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed: {filepath}')
    except Exception as e:
        print(f'Error with {filepath}: {e}')

print('Done!')
