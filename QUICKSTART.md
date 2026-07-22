# 🚀 Quick Start Guide

## Deploy to GitHub & Vercel in 5 Minutes

### Option 1: Automated Setup (Recommended)

```bash
cd /home/vercel-sandbox/alairductcleaning-atlanta
./setup-github.sh
```

Follow the prompts and you're done!

---

### Option 2: Manual Setup

#### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Name: `alairductcleaning-atlanta`
3. Click **Create repository**
4. **DO NOT** add README, .gitignore, or license

#### Step 2: Push Code

```bash
cd /home/vercel-sandbox/alairductcleaning-atlanta

# Add your GitHub repo (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/alairductcleaning-atlanta.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to Vercel

1. Go to: https://vercel.com/new
2. Click **Import Git Repository**
3. Select `alairductcleaning-atlanta`
4. Click **Deploy**

#### Step 4: Add Environment Variables

In Vercel dashboard:
1. Go to **Settings** > **Environment Variables**
2. Add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=your-email@gmail.com
   SMTP_TO=info@alairductcleaning.com
   ```
3. Click **Save**
4. Redeploy: Go to **Deployments** > **...** > **Redeploy**

---

## 🎉 Done!

Your website is now live at:
`https://alairductcleaning-atlanta.vercel.app`

### Next Steps:

1. **Custom Domain**:
   - Vercel Dashboard > Settings > Domains
   - Add: `atlanta.alairductcleaning.com`

2. **Test Contact Form**:
   - Submit a test form
   - Check email delivery

3. **Google Search Console**:
   - Add property
   - Submit sitemap: `/sitemap.xml`

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Full Guide: See `DEPLOYMENT.md`

---

**Project Built With:**
- Next.js 15
- TypeScript
- Tailwind CSS
- SEO Optimized
- Mobile Responsive
- Production Ready ✅
