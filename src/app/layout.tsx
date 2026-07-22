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
  keywords: ['air duct cleaning atlanta', 'hvac cleaning atlanta', 'dryer vent cleaning', 'air duct installation', 'indoor air quality', 'atlanta air duct service'],
  authors: [{ name: 'Al Air Duct Cleaning Atlanta' }],
  creator: 'Al Air Duct Cleaning Atlanta',
  publisher: 'Al Air Duct Cleaning Atlanta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Air Duct Cleaning Atlanta | Al Air Duct Cleaning',
    description: 'Professional air duct cleaning services in Atlanta, GA. Improve indoor air quality with expert HVAC cleaning.',
    url: 'https://atlanta.alairductcleaning.com',
    siteName: 'Al Air Duct Cleaning Atlanta',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Air Duct Cleaning Atlanta | Al Air Duct Cleaning',
    description: 'Professional air duct cleaning services in Atlanta, GA. Improve indoor air quality.',
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
