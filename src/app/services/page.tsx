import Link from 'next/link';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Services Atlanta | HVAC & Dryer Vent Cleaning',
  description: 'Comprehensive air duct cleaning services in Atlanta, GA. Residential & commercial HVAC cleaning, dryer vent cleaning, air scrubber installation, and more. Call (404) 948-4544.',
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Professional Air Duct Cleaning Services in Atlanta</h1>
            <p className="text-xl text-primary-50">
              Comprehensive HVAC and air duct services for homes and businesses throughout Atlanta, Georgia
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer a complete range of air duct and HVAC services to improve your indoor air quality, enhance system efficiency, and protect your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businessInfo.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary-600 hover:shadow-xl transition-all duration-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-primary-600 font-semibold group-hover:underline inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Professional Air Duct Cleaning Matters</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Health Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduces allergens and irritants</li>
                  <li>• Improves respiratory health</li>
                  <li>• Eliminates mold and mildew</li>
                  <li>• Removes bacteria and viruses</li>
                  <li>• Reduces asthma triggers</li>
                  <li>• Creates cleaner living environment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Financial Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lower energy bills</li>
                  <li>• Extended HVAC system life</li>
                  <li>• Reduced repair costs</li>
                  <li>• Improved system efficiency</li>
                  <li>• Better airflow throughout home</li>
                  <li>• Increased property value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Service Process</h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  description: "Contact us for a free phone consultation. We'll discuss your specific needs, answer questions, and provide an honest assessment of what services you need.",
                },
                {
                  step: '2',
                  title: 'Detailed Inspection',
                  description: 'We perform a thorough inspection of your HVAC system and ductwork, using video camera technology when appropriate to document conditions.',
                },
                {
                  step: '3',
                  title: 'Transparent Quote',
                  description: 'You receive a detailed, written quote with no hidden fees. We explain exactly what work will be performed and why.',
                },
                {
                  step: '4',
                  title: 'Professional Service',
                  description: 'Our certified technicians arrive on time with all necessary equipment and complete the work efficiently and thoroughly.',
                },
                {
                  step: '5',
                  title: 'Quality Verification',
                  description: 'We perform a final inspection and walkthrough, showing you the results of our work and answering any questions.',
                },
                {
                  step: '6',
                  title: 'Ongoing Support',
                  description: 'We provide maintenance recommendations and remain available for any follow-up questions or future service needs.',
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-6 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Residential vs. Commercial Services</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Residential Services</h3>
                <p className="text-gray-600 mb-4">
                  Our residential air duct cleaning services are designed for homes of all sizes. We understand that your home is your sanctuary, and we treat it with the respect it deserves.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Single-family homes</li>
                  <li>• Townhouses and condos</li>
                  <li>• Apartments</li>
                  <li>• Multi-unit residential buildings</li>
                </ul>
                <Link href="/contact" className="btn-primary">
                  Get Residential Quote
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Commercial Services</h3>
                <p className="text-gray-600 mb-4">
                  We serve businesses throughout Atlanta with flexible scheduling to minimize disruption to your operations. After-hours and weekend appointments available.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Office buildings</li>
                  <li>• Retail spaces</li>
                  <li>• Restaurants</li>
                  <li>• Medical facilities</li>
                  <li>• Schools</li>
                  <li>• Hotels</li>
                  <li>• Warehouses</li>
                </ul>
                <Link href="/contact" className="btn-primary">
                  Get Commercial Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Contact us today for a free consultation and quote. We're here to answer your questions and help you breathe cleaner air.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Call {businessInfo.phone}
              </a>
              <Link href="/contact" className="btn-primary !bg-transparent !text-white border-2 border-white hover:!bg-white hover:!text-primary-600">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
