# Al Air Duct Cleaning Atlanta Website

Professional air duct cleaning services website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **SEO Optimized** with metadata API and schema markup
- **Responsive Design** - Mobile-first approach
- **Contact Form** with email integration
- **Blog System** with 10 SEO-optimized articles
- **Service Pages** for all offerings
- **Sitemap & Robots.txt** generation

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/alairductcleaning-atlanta.git
cd alairductcleaning-atlanta
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the root directory with SMTP configuration:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=info@alairductcleaning.com
```

## 🏃‍♂️ Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔨 Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── services/        # Service pages
│   │   ├── blog/           # Blog pages
│   │   ├── api/            # API routes
│   │   └── ...             # Other pages
│   ├── components/          # React components
│   │   ├── layout/         # Header, Footer
│   │   ├── forms/          # Contact form
│   │   └── seo/            # Schema components
│   ├── data/               # Business information
│   └── types/              # TypeScript types
├── public/                  # Static assets
└── ...config files
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project and deploy the `.next` folder with `node server.js`.

## 📧 SMTP Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in SMTP_PASS

## 🔍 SEO Features

- Dynamic metadata generation
- OpenGraph and Twitter cards
- Structured data (JSON-LD)
- XML sitemap generation
- Optimized images
- Semantic HTML
- Breadcrumb navigation

## 📞 Contact

Al Air Duct Cleaning Atlanta
Phone: (404) 948-4544
Website: https://atlanta.alairductcleaning.com

## 📄 License

© 2026 Al Air Duct Cleaning Atlanta. All rights reserved.
