import SimpleContactForm from '@/components/forms/SimpleContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Air Duct Cleaning Atlanta | Free Quote',
  description: 'Contact Al Air Duct Cleaning Atlanta for professional HVAC services. Call (404) 948-4544 or request a free quote online. Serving all of Atlanta, GA.',
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/contact',
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      telephone: businessInfo.phone,
      email: businessInfo.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.state,
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-primary-50">
              Get in touch for a free quote or to schedule your air duct cleaning service in Atlanta
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Your Free Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and we will contact you within 24 hours. All fields marked with * are required.
              </p>
              <SimpleContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href={`tel:${businessInfo.phoneRaw}`} className="text-primary-600 hover:text-primary-700 text-lg font-semibold">
                      {businessInfo.phone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Mon-Fri: 7AM-7PM | Sat: 8AM-5PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href={`mailto:${businessInfo.email}`} className="text-primary-600 hover:text-primary-700">
                      {businessInfo.email}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We will respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      {businessInfo.address.full}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">Serving all of Atlanta and surrounding areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">{businessInfo.hours.monday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">{businessInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">{businessInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-3">Emergency Service</h3>
                <p className="text-gray-600">
                  Need immediate assistance? We offer same-day service based on availability. Call us now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
