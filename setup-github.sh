#!/bin/bash

# GitHub Setup Script for Al Air Duct Cleaning Atlanta
# This script helps you push the code to GitHub

echo "🚀 Al Air Duct Cleaning Atlanta - GitHub Setup"
echo "=============================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git repository not initialized!"
    echo "Run: git init"
    exit 1
fi

echo "✅ Git repository found"
echo ""

# Ask for GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required!"
    exit 1
fi

# Repository name
REPO_NAME="alairductcleaning-atlanta"

echo ""
echo "📦 Repository Details:"
echo "  Username: $GITHUB_USERNAME"
echo "  Repo Name: $REPO_NAME"
echo "  URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Remote 'origin' already exists"
    EXISTING_REMOTE=$(git remote get-url origin)
    echo "  Current remote: $EXISTING_REMOTE"
    echo ""
    read -p "Do you want to replace it? (y/n): " REPLACE_REMOTE

    if [ "$REPLACE_REMOTE" = "y" ] || [ "$REPLACE_REMOTE" = "Y" ]; then
        git remote remove origin
        echo "✅ Removed existing remote"
    else
        echo "❌ Keeping existing remote. Exiting."
        exit 0
    fi
fi

# Add GitHub remote
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git remote add origin "$REPO_URL"

if [ $? -eq 0 ]; then
    echo "✅ Added GitHub remote: $REPO_URL"
else
    echo "❌ Failed to add remote"
    exit 1
fi

echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Create repository on GitHub:"
echo "   https://github.com/new"
echo ""
echo "   - Repository name: $REPO_NAME"
echo "   - Description: Professional air duct cleaning services for Atlanta, GA"
echo "   - Public or Private (your choice)"
echo "   - DO NOT initialize with README"
echo ""
echo "2. After creating the repository, run:"
echo ""
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Then deploy to Vercel:"
echo "   https://vercel.com/new"
echo ""

# Ask if user wants to push now
echo ""
read -p "Have you created the GitHub repository? Push now? (y/n): " PUSH_NOW

if [ "$PUSH_NOW" = "y" ] || [ "$PUSH_NOW" = "Y" ]; then
    echo ""
    echo "🔄 Renaming branch to main..."
    git branch -M main

    echo "📤 Pushing to GitHub..."
    git push -u origin main

    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        echo "🎉 Your code is now on GitHub:"
        echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
        echo ""
        echo "🚀 Next: Deploy to Vercel"
        echo "   https://vercel.com/new"
        echo ""
    else
        echo ""
        echo "❌ Failed to push to GitHub"
        echo ""
        echo "Common issues:"
        echo "  - Repository doesn't exist yet (create it first)"
        echo "  - Authentication required (use GitHub CLI or personal access token)"
        echo "  - Wrong username"
        echo ""
    fi
else
    echo ""
    echo "✅ Setup complete! When ready, run:"
    echo ""
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
fi
