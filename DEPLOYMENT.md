# Deployment Guide - Al Air Duct Cleaning Atlanta

## 📦 GitHub Repository Setup

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `alairductcleaning-atlanta`
3. Description: `Professional air duct cleaning services website for Atlanta, Georgia`
4. Set to **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Step 2: Push Code to GitHub

After creating the repository, run these commands:

```bash
cd /home/vercel-sandbox/alairductcleaning-atlanta

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/alairductcleaning-atlanta.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## 🚀 Deploy to Vercel

### Method 1: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your `alairductcleaning-atlanta` repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

5. **Add Environment Variables**:
   Click **Environment Variables** and add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=your-email@gmail.com
   SMTP_TO=info@alairductcleaning.com
   ```

6. Click **Deploy**

7. Wait for deployment to complete (2-3 minutes)

8. Your site will be live at: `https://alairductcleaning-atlanta.vercel.app`

### Method 2: Using Vercel CLI

If you have Vercel CLI installed:

```bash
cd /home/vercel-sandbox/alairductcleaning-atlanta

# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - What's your project's name? alairductcleaning-atlanta
# - In which directory is your code located? ./
# - Want to override the settings? No

# For production deployment
vercel --prod
```

## 🔧 Post-Deployment Configuration

### 1. Custom Domain Setup

1. Go to your Vercel project dashboard
2. Click **Settings** > **Domains**
3. Add domain: `atlanta.alairductcleaning.com`
4. Follow Vercel's DNS configuration instructions
5. Update DNS records at your domain registrar

### 2. Environment Variables

Make sure to add all SMTP variables in Vercel dashboard:
- Go to **Settings** > **Environment Variables**
- Add each variable for **Production**, **Preview**, and **Development**

### 3. Gmail SMTP Setup (if using Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an **App Password** for "Mail"
4. Use this App Password in `SMTP_PASS` environment variable

## 📋 Verification Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All pages are accessible (About, Services, Contact, etc.)
- [ ] Contact form works (test by submitting)
- [ ] Mobile responsiveness
- [ ] Images load properly
- [ ] Phone number (404) 948-4544 is clickable
- [ ] Schema markup (check with Google Rich Results Test)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

## 🔗 Important URLs

After deployment, these URLs should work:

- Homepage: `https://your-domain.com`
- About: `https://your-domain.com/about`
- Services: `https://your-domain.com/services`
- Air Duct Cleaning: `https://your-domain.com/services/air-duct-cleaning`
- Dryer Vent Cleaning: `https://your-domain.com/services/dryer-vent-cleaning`
- Contact: `https://your-domain.com/contact`
- Sitemap: `https://your-domain.com/sitemap.xml`

## 🐛 Troubleshooting

### Build Fails on Vercel

If build fails, check:
1. All dependencies are in `package.json`
2. Node version compatibility (use Node 18+)
3. Environment variables are set correctly

### Contact Form Not Working

1. Verify SMTP credentials are correct
2. Check Gmail App Password is used (not regular password)
3. Check Vercel function logs for errors

### Images Not Loading

1. Make sure images are in `public/` folder
2. Use proper Next.js `<Image>` component
3. Check image paths are correct

## 📊 Analytics & Monitoring (Optional)

### Add Google Analytics

1. Get your GA4 Measurement ID
2. Add to `src/app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Add Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `atlanta.alairductcleaning.com`
3. Verify ownership (use HTML tag method)
4. Submit sitemap: `https://atlanta.alairductcleaning.com/sitemap.xml`

## 🎯 SEO Optimization Post-Launch

1. **Submit to Google**: Add site to Google Search Console
2. **Local SEO**: Create Google Business Profile
3. **Social Media**: Add Open Graph meta tags (already included)
4. **Performance**: Monitor Core Web Vitals in Vercel Analytics
5. **Monitoring**: Set up uptime monitoring (UptimeRobot, Pingdom, etc.)

## 📞 Support

For issues or questions:
- Check Vercel documentation: https://vercel.com/docs
- Next.js documentation: https://nextjs.org/docs
- Contact support: support@alairductcleaning.com

---

**Project Location**: `/home/vercel-sandbox/alairductcleaning-atlanta/`
**Git Repository**: Ready to push
**Build Status**: ✅ Successful
**Production Ready**: Yes
