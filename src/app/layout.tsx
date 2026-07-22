import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://atlanta.alairductcleaning.com'),
  title: {
    default: 'Air Duct Cleaning Atlanta | Professional HVAC Services | Al Air Duct Cleaning',
    template: '%s | Al Air Duct Cleaning Atlanta',
  },
  description: 'Professional air duct cleaning services in Atlanta, GA. Improve indoor air quality with expert residential & commercial HVAC cleaning. Call (404) 948-4544 for a free quote.',
  keywords: ['air duct cleaning atlanta', 'hvac cleaning atlanta', 'dryer vent cleaning', 'air duct installation', 'indoor air quality', 'atlanta air duct service', 'residential air duct cleaning', 'commercial hvac cleaning', 'air scrubber installation'],
  authors: [{ name: 'Al Air Duct Cleaning Atlanta' }],
  creator: 'Al Air Duct Cleaning Atlanta',
  publisher: 'Al Air Duct Cleaning Atlanta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Air Duct Cleaning Atlanta | Al Air Duct Cleaning',
    description: 'Professional air duct cleaning services in Atlanta, GA. Improve indoor air quality with expert HVAC cleaning.',
    url: 'https://atlanta.alairductcleaning.com',
    siteName: 'Al Air Duct Cleaning Atlanta',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Al Air Duct Cleaning Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Air Duct Cleaning Atlanta | Al Air Duct Cleaning',
    description: 'Professional air duct cleaning services in Atlanta, GA. Improve indoor air quality.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
