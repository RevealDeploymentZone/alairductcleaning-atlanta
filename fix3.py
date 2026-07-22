#!/usr/bin/env python3
import os
import glob
import re

def fix_apostrophes_in_single_quoted_strings(content):
    """
    Fix apostrophes inside single-quoted strings by escaping them
    """
    # This is a simple approach: find patterns like 'text with ' more text'
    # and escape the apostrophes inside

    def escape_apostrophes(match):
        full_match = match.group(0)
        # Replace unescaped apostrophes inside the string
        # The string is delimited by single quotes
        inner_content = full_match[1:-1]  # Remove opening and closing quotes
        # Escape any unescaped apostrophes
        inner_content = inner_content.replace("\\'", "<<<ESCAPED>>>")  # Temporarily mark already escaped
        inner_content = inner_content.replace("'", "\\'")  # Escape unescaped apostrophes
        inner_content = inner_content.replace("<<<ESCAPED>>>", "\\'")  # Restore marked ones
        return "'" + inner_content + "'"

    # Match single-quoted strings
    # This regex finds strings that start with ' and end with ', but may contain ' inside
    pattern = r"'([^'\\]|\\'|\\\\)*'"

    lines = content.split('\n')
    result_lines = []

    for line in lines:
        # Check if line contains problematic patterns
        if "': '" in line or '", ' in line:
            # This line might be in an object/array definition
            # Look for description: 'text' or similar patterns
            match = re.search(r"(description|title|answer|question|name|text|label):\s*'([^']*'[^']*)'", line)
            if match:
                # This line has an apostrophe problem
                # Extract the string part
                key = match.group(1)
                string_content = match.group(2)
                # Escape apostrophes in the content
                fixed_content = string_content.replace("'", "\\'")
                # Replace in the line
                old_pattern = f"{key}: '{string_content}'"
                new_pattern = f"{key}: '{fixed_content}'"
                line = line.replace(old_pattern, new_pattern)

        result_lines.append(line)

    return '\n'.join(result_lines)

# Find all .tsx files
for filepath in glob.glob('src/**/*.tsx', recursive=True):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content
        content = fix_apostrophes_in_single_quoted_strings(content)

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed: {filepath}')
    except Exception as e:
        print(f'Error with {filepath}: {e}')

print('Done!')
