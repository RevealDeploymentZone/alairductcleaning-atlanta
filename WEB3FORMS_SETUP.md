# Web3Forms Setup Guide

The contact form now uses Web3Forms - a free, reliable form service that sends emails without SMTP configuration!

## Quick Setup (5 minutes)

### Step 1: Get Your Web3Forms Access Key

1. Go to https://web3forms.com/
2. Enter your email: **info@alhomeservices.us**
3. Click "Create Access Key"
4. Check your email and copy the access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### Step 2: Add Access Key to Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** Your access key from Step 1
   - **Environment:** Production, Preview, Development (check all)
4. Click **Save**

### Step 3: Redeploy

1. Go to **Deployments** tab in Vercel
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## Alternative: Direct Key Method (Quick Test)

If you want to test immediately without environment variables:

1. Open: `src/components/forms/ContactForm.tsx`
2. Find line with: `process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY'`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
4. Commit and push changes

## Features

✅ **No SMTP Configuration Required**
✅ **No Server-Side Code Needed**
✅ **100% Free Forever** (up to 250 submissions/month)
✅ **Email Notifications** to info@alhomeservices.us
✅ **Spam Protection Built-in**
✅ **Works Immediately After Setup**

## How It Works

1. User fills out the contact form
2. Form data is sent directly to Web3Forms API
3. Web3Forms validates and processes the data
4. You receive an email at **info@alhomeservices.us**
5. User sees success message

## Testing

After setup, test the form:
1. Visit your website
2. Fill out the contact form
3. Submit
4. Check **info@alhomeservices.us** for the email
5. Response time: Usually instant, max 1-2 minutes

## Troubleshooting

**Form shows error?**
- Check if access key is correct in Vercel env variables
- Make sure you redeployed after adding the env variable
- Check Web3Forms dashboard for submission logs

**Not receiving emails?**
- Check spam folder
- Verify email address in Web3Forms dashboard
- Make sure access key is activated (check confirmation email)

**Still having issues?**
- Visit Web3Forms dashboard: https://web3forms.com/
- Contact Web3Forms support (they're very responsive!)

## Web3Forms Dashboard

Access your dashboard at: https://web3forms.com/platforms

View:
- Recent form submissions
- Email delivery status
- Usage statistics
- Spam protection logs
