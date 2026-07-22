import Link from 'next/link';
import { businessInfo } from '@/data/businessInfo';

export default function NotFound() {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we could not find the page you are looking for. The page may have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              Go to Homepage
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Contact us for air duct cleaning services in Atlanta
            </p>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="text-primary-600 hover:text-primary-700 font-bold text-xl"
            >
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
