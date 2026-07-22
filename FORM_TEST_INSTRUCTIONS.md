# ✅ Contact Form Testing Instructions

## Quick Test (Test Form)

**Test URL:** https://atlanta.alairductcleaning.com/test-form.html

This is a simple test page to verify your contact form is working:

### Steps:
1. Visit: https://atlanta.alairductcleaning.com/test-form.html
2. Fill out the form with test data:
   - Name: Test User
   - Phone: 555-1234
   - Email: your-email@gmail.com (use your own to see it work)
   - Service: Air Duct Cleaning
   - Message: Testing contact form
3. Click "Send Test Email"
4. Check **info@alhomeservices.us** inbox
5. Email should arrive within 1-2 minutes ✅

## Production Form Testing

After test form works, test the actual website forms:

### Homepage Form:
https://atlanta.alairductcleaning.com/

### Contact Page Form:
https://atlanta.alairductcleaning.com/contact

### Service Page Forms:
- https://atlanta.alairductcleaning.com/services/air-duct-cleaning
- https://atlanta.alairductcleaning.com/services/dryer-vent-cleaning
- https://atlanta.alairductcleaning.com/services/air-scrubber-installation-replacement
- And all other service pages...

## What to Check

✅ **Form submits without errors**
✅ **Success message appears**
✅ **Email arrives at info@alhomeservices.us**
✅ **Email contains all form data**

## Email Format

You should receive emails like this:

```
Subject: New Lead: Air Duct Cleaning - John Doe

Service Requested: Air Duct Cleaning

Name: John Doe
Phone: (404) 555-1234
Email: john@example.com

Message:
I need my air ducts cleaned next week.

---
Submitted from: Al Air Duct Cleaning Atlanta Website
```

## Troubleshooting

### Form shows error?
1. Open browser console (F12) and check for error messages
2. Make sure you're connected to internet
3. Try the test form first: /test-form.html

### Email not received?
1. Check spam folder in info@alhomeservices.us
2. Wait 2-3 minutes (sometimes delayed)
3. Verify Web3Forms dashboard: https://web3forms.com/platforms
4. Check if access key is active

### Still not working?
1. Check Vercel deployment logs
2. Verify environment variable is NOT set (we're using hardcoded key)
3. Test with the test-form.html file first

## Web3Forms Dashboard

Access key: `6c4dd6eb-b6b8-44ae-bde9-9d8d739065c8`

Dashboard: https://web3forms.com/platforms

In dashboard you can see:
- All form submissions
- Delivery status
- Error logs (if any)
- Email statistics

## Support

If form still doesn't work after following these steps:
1. Check Web3Forms dashboard for error logs
2. Contact Web3Forms support (they're very responsive)
3. Email address registered: info@alhomeservices.us

---

**Remember:** Test the `/test-form.html` page first! It's the simplest way to verify everything is working.
