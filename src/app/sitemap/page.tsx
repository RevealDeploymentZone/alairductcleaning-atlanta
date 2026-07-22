import Link from 'next/link';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Al Air Duct Cleaning Atlanta',
  description: 'Complete sitemap of Al Air Duct Cleaning Atlanta website. Find all pages and services.',
};

export default function SitemapPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Site Map</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Main Pages</h2>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-700 hover:text-primary-600">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-primary-600">About Us</Link></li>
                <li><Link href="/services" className="text-gray-700 hover:text-primary-600">Services</Link></li>
                <li><Link href="/faq" className="text-gray-700 hover:text-primary-600">FAQ</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Services</h2>
              <ul className="space-y-2">
                {businessInfo.services.map((service) => (
                  <li key={service.slug}>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="text-gray-700 hover:text-primary-600"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Legal</h2>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-gray-700 hover:text-primary-600">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="text-gray-700 hover:text-primary-600">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Contact Info</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Phone: <a href={`tel:${businessInfo.phoneRaw}`} className="text-primary-600">{businessInfo.phone}</a></li>
                <li>Email: <a href={`mailto:${businessInfo.email}`} className="text-primary-600">{businessInfo.email}</a></li>
                <li>Location: {businessInfo.address.full}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
