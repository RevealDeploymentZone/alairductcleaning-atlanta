#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Push to GitHub: RevealDeploymentZone/alairductcleaning-atlanta"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project directory!"
    echo "Run: cd /home/vercel-sandbox/alairductcleaning-atlanta"
    exit 1
fi

echo "📦 Repository: RevealDeploymentZone/alairductcleaning-atlanta"
echo "🌿 Branch: main"
echo ""

# Ask for GitHub token
echo "🔐 GitHub Personal Access Token chahiye:"
echo ""
echo "Token banana hai? Ye steps follow karo:"
echo "1. https://github.com/settings/tokens/new pe jao"
echo "2. Note: 'Deploy Al Air Duct Cleaning'"
echo "3. Expiration: 30 days (ya apni choice)"
echo "4. Select scope: ✓ repo"
echo "5. Generate token aur copy karo"
echo ""
read -sp "GitHub Token paste karo (typing nahi dikhega): " GITHUB_TOKEN
echo ""
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Token nahi mila!"
    exit 1
fi

echo "✅ Token received"
echo ""
echo "📤 Pushing to GitHub..."
echo ""

# Create credential helper with token
git config credential.helper store

# Push with token
echo "https://RevealDeploymentZone:${GITHUB_TOKEN}@github.com" > ~/.git-credentials

# Try to push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ Successfully pushed to GitHub!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "🔗 GitHub Repository:"
    echo "   https://github.com/RevealDeploymentZone/alairductcleaning-atlanta"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🚀 Ab Vercel pe deploy karo!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. https://vercel.com/new pe jao"
    echo "2. 'Import Git Repository' click karo"
    echo "3. 'RevealDeploymentZone/alairductcleaning-atlanta' select karo"
    echo "4. Deploy button dabao"
    echo ""
    echo "5. Environment Variables add karo:"
    echo "   Settings > Environment Variables"
    echo ""
    echo "   SMTP_HOST=smtp.gmail.com"
    echo "   SMTP_PORT=587"
    echo "   SMTP_USER=your-email@gmail.com"
    echo "   SMTP_PASS=your-app-password"
    echo "   SMTP_FROM=your-email@gmail.com"
    echo "   SMTP_TO=info@alairductcleaning.com"
    echo ""
    echo "6. Redeploy karo!"
    echo ""
    echo "🎉 Done! Website live ho jayegi!"
    echo ""
else
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "❌ Push failed!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Possible issues:"
    echo "  • Token galat hai"
    echo "  • Token ke scopes kam hain (repo scope chahiye)"
    echo "  • Repository private hai aur token ke paas access nahi"
    echo ""
    exit 1
fi

# Clean up credentials
rm -f ~/.git-credentials
git config --unset credential.helper
