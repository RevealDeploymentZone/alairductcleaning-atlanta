# 📧 Gmail SMTP Setup Guide - Contact Form Configuration

## ✅ Email Configuration Complete!

All form submissions will be sent to: **info@alhomeservices.us**

---

## 🔐 Step 1: Create Gmail App Password

⚠️ **Important:** You CANNOT use your regular Gmail password for SMTP. You must create an App Password.

### Instructions:

1. **Go to Google Account Settings:**
   - 👉 https://myaccount.google.com/apppasswords

2. **Sign In:**
   - Use the Gmail account you want to send emails from
   - Example: `yourbusiness@gmail.com`

3. **Create App Password:**
   - **Select app:** "Mail"
   - **Select device:** "Other (Custom name)"
   - **Name:** "Al Air Duct Website" or "Contact Form"
   - Click **Generate**

4. **Copy the Password:**
   - You'll see a 16-character password like: `abcd efgh ijkl mnop`
   - **COPY IT NOW** - you won't see it again!
   - Remove spaces: `abcdefghijklmnop`

---

## 🚀 Step 2: Add to Vercel Environment Variables

After deploying to Vercel:

1. **Go to Vercel Dashboard:**
   - Your Project > **Settings** > **Environment Variables**

2. **Add These 6 Variables:**

   | Variable Name | Value | Environment |
   |--------------|-------|-------------|
   | `SMTP_HOST` | `smtp.gmail.com` | Production, Preview, Development |
   | `SMTP_PORT` | `587` | Production, Preview, Development |
   | `SMTP_USER` | `your-email@gmail.com` | Production, Preview, Development |
   | `SMTP_PASS` | `abcdefghijklmnop` | Production, Preview, Development |
   | `SMTP_FROM` | `your-email@gmail.com` | Production, Preview, Development |
   | `SMTP_TO` | `info@alhomeservices.us` | Production, Preview, Development |

3. **Replace Values:**
   - `SMTP_USER`: Your Gmail address (e.g., `yourbusiness@gmail.com`)
   - `SMTP_PASS`: The 16-character App Password you copied
   - `SMTP_FROM`: Same as SMTP_USER
   - `SMTP_TO`: Already set to `info@alhomeservices.us` ✅

4. **Save** and **Redeploy**:
   - Go to **Deployments** tab
   - Click "..." on latest deployment
   - Select **Redeploy**

---

## 📝 Example Configuration

Here's what your variables should look like:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=mybusiness@gmail.com
SMTP_PASS=abcdefghijklmnop
SMTP_FROM=mybusiness@gmail.com
SMTP_TO=info@alhomeservices.us
```

---

## ✅ Step 3: Test the Contact Form

After deployment:

1. Visit your website
2. Fill out the contact form
3. Submit
4. Check your inbox: **info@alhomeservices.us**
5. You should receive an email within 1-2 minutes!

---

## 🔧 Troubleshooting

### Problem: "Authentication Failed"

**Solution:**
- Make sure you're using the **App Password**, not your regular Gmail password
- Remove any spaces from the App Password
- Verify the Gmail account email is correct

### Problem: "No emails arriving"

**Solution:**
- Check spam/junk folder in info@alhomeservices.us
- Verify SMTP_TO is set to: `info@alhomeservices.us`
- Check Vercel function logs for errors
- Make sure all 6 environment variables are set

### Problem: "App Passwords option not available"

**Solution:**
- Enable 2-Factor Authentication on your Gmail account first
- Go to: https://myaccount.google.com/security
- Enable "2-Step Verification"
- Then App Passwords option will appear

---

## 🎯 What Happens When Someone Submits Form:

1. User fills form on your website
2. Form data sent to Vercel serverless function
3. Nodemailer uses Gmail SMTP to send email
4. Email arrives at: **info@alhomeservices.us**
5. Email contains:
   - Customer name
   - Customer phone
   - Customer email
   - Service requested
   - Message

---

## 📧 Email Example

When someone submits the form, you'll receive:

```
Subject: New Contact Form Submission - Air Duct Cleaning

From: mybusiness@gmail.com
To: info@alhomeservices.us

New Contact Form Submission
============================

Name: John Smith
Phone: (404) 123-4567
Email: john.smith@example.com
Service: Air Duct Cleaning

Message:
I need air duct cleaning for my 3-bedroom house in Atlanta.
When is your earliest availability?
```

---

## 🔒 Security Notes

- **Never commit .env files to GitHub** (already in .gitignore ✅)
- **Keep App Password secret**
- **Only share SMTP credentials through Vercel dashboard**
- **Regenerate App Password if compromised**

---

## 📞 Testing Locally (Optional)

If you want to test on your local machine:

1. Copy `.env.example` to `.env.local`
2. Add your Gmail credentials
3. Run: `npm run dev`
4. Test form at: `http://localhost:3000`

---

## ✨ Quick Setup Checklist

- [ ] Gmail App Password created
- [ ] All 6 environment variables added to Vercel
- [ ] Redeployed after adding variables
- [ ] Tested contact form
- [ ] Received test email at info@alhomeservices.us
- [ ] Added info@alhomeservices.us to safe senders (to avoid spam)

---

## 🎉 Done!

Your contact form is now configured to send all submissions to:

**info@alhomeservices.us**

Customers can reach you through:
- Contact form on website
- Phone: (404) 948-4544
- Email: info@alhomeservices.us

---

## 🆘 Need Help?

If you encounter issues:

1. Check Vercel function logs (Deployments > Click deployment > Functions tab)
2. Verify all environment variables are correct
3. Test with a different email first to isolate the issue
4. Make sure 2FA is enabled on Gmail

---

**Updated:** Email destination set to info@alhomeservices.us ✅
**Status:** Ready for deployment! 🚀
