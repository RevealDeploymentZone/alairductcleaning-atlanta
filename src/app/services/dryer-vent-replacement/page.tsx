import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dryer Vent Replacement Atlanta | Professional Installation Service',
  description: 'Expert dryer vent replacement in Atlanta, GA. Improve safety and efficiency with professional dryer vent installation. Call (404) 948-4544 for service.',
  keywords: ['dryer vent replacement atlanta', 'dryer vent installation', 'new dryer vent', 'dryer exhaust replacement'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services/dryer-vent-replacement',
  },
};

export default function DryerVentReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Dryer Vent Replacement',
            provider: {
              '@type': 'LocalBusiness',
              name: businessInfo.name,
              telephone: businessInfo.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Atlanta',
                addressRegion: 'Georgia',
              },
            },
            areaServed: 'Atlanta, Georgia',
            description: 'Professional dryer vent replacement services for improved safety and efficiency.',
          }),
        }}
      />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <nav className="text-primary-100 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>→</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li>→</li>
                <li>Dryer Vent Replacement</li>
              </ol>
            </nav>
            <h1 className="mb-6">Professional Dryer Vent Replacement in Atlanta</h1>
            <p className="text-xl text-primary-50">
              Protect your home and improve dryer efficiency with professional dryer vent replacement from Atlanta's trusted specialists.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">When Does Your Dryer Vent Need Replacement?</h2>
              <p className="text-lg text-gray-600 mb-4">
                According to the <a href="https://www.nfpa.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">National Fire Protection Association (NFPA)</a>, dryers and washing machines were involved in one out of every 22 home structure fires reported to U.S. fire departments in 2010-2014. A significant cause is failure to clean or maintain dryer vents properly.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                While regular <Link href="/services/dryer-vent-cleaning" className="text-primary-600 hover:underline">dryer vent cleaning</Link> is essential, there are situations where complete replacement is necessary to maintain safety and efficiency.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-red-900">Signs You Need Dryer Vent Replacement</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Visible damage, cracks, or holes in the vent duct</li>
                  <li>• Flexible plastic or foil vent (not up to current building codes)</li>
                  <li>• Vent duct is kinked, crushed, or improperly routed</li>
                  <li>• Excessive vent length or too many bends</li>
                  <li>• Vent is disconnected or poorly connected</li>
                  <li>• Pest infestation or nesting inside the vent</li>
                  <li>• Severe lint buildup that cannot be cleaned effectively</li>
                  <li>• Vent materials have deteriorated with age</li>
                  <li>• Improving home before selling</li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Why Proper Dryer Venting Matters</h2>
              <p className="text-lg text-gray-600 mb-4">
                Your dryer vent system does more than just exhaust hot air—it's critical for safety and efficiency. The <a href="https://www.energystar.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">U.S. Department of Energy</a> notes that proper dryer venting can significantly improve appliance efficiency and reduce energy costs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-900 mb-3">Improper Dryer Vent</h4>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• Fire hazard from lint accumulation</li>
                    <li>• Carbon monoxide risk (gas dryers)</li>
                    <li>• Excessive energy consumption</li>
                    <li>• Long drying times</li>
                    <li>• Dryer overheating and damage</li>
                    <li>• Moisture and mold problems</li>
                    <li>• Poor indoor air quality</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-900 mb-3">Proper Dryer Vent</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Significantly reduced fire risk</li>
                    <li>• Safe exhaust of combustion gases</li>
                    <li>• Lower energy bills</li>
                    <li>• Faster drying cycles</li>
                    <li>• Extended dryer lifespan</li>
                    <li>• Prevents moisture damage</li>
                    <li>• Better home air quality</li>
                  </ul>
                </div>
              </div>

              <h2 className="mb-6 mt-12">Our Dryer Vent Replacement Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                Al Air Duct Cleaning Atlanta provides comprehensive dryer vent replacement following building codes and manufacturer specifications:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Initial Inspection',
                    description: 'We thoroughly inspect your existing dryer vent system to identify issues and determine the best replacement solution.',
                  },
                  {
                    title: 'Code Compliance Review',
                    description: 'We ensure your new vent system will meet current building codes and safety standards for your area.',
                  },
                  {
                    title: 'Material Selection',
                    description: 'We use only code-compliant rigid or semi-rigid metal ducting—never flexible plastic or foil.',
                  },
                  {
                    title: 'Optimal Route Planning',
                    description: 'We design the shortest, straightest path for your new vent with minimal bends for maximum efficiency.',
                  },
                  {
                    title: 'Professional Installation',
                    description: 'We remove the old vent and install the new system with proper connections, supports, and sealing.',
                  },
                  {
                    title: 'Exterior Termination',
                    description: 'We install a proper exterior vent hood with a damper to prevent pests and back-drafts.',
                  },
                  {
                    title: 'Testing and Verification',
                    description: 'We test the dryer with the new vent system to ensure proper airflow and operation.',
                  },
                  {
                    title: 'Cleanup and Education',
                    description: 'We clean up all debris and explain proper maintenance to maximize the life of your new vent system.',
                  },
                ].map((step, index) => (
                  <div key={step.title} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12">Dryer Vent Materials and Standards</h2>
              <p className="text-lg text-gray-600 mb-4">
                Modern building codes have specific requirements for dryer vent materials and installation:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-green-900">✓ Approved Materials</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rigid metal duct (aluminum or galvanized steel)</li>
                  <li>• Semi-rigid metal duct for transitions</li>
                  <li>• Smooth interior surface for minimal lint accumulation</li>
                  <li>• Proper vent hood with back-draft damper</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-red-900">✗ Non-Compliant Materials</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Flexible plastic or vinyl duct (extreme fire hazard)</li>
                  <li>• Flexible foil duct (prone to crimping and lint buildup)</li>
                  <li>• PVC or other plastic piping</li>
                  <li>• Duct tape for sealing (degrades with heat)</li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Common Dryer Vent Problems We Fix</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our replacement services address all common dryer vent issues:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    problem: 'Excessive Vent Length',
                    solution: 'We reroute the vent for a shorter, more direct path following code requirements for maximum length.',
                  },
                  {
                    problem: 'Too Many Turns',
                    solution: 'We redesign the vent route to minimize bends, improving airflow and reducing lint accumulation.',
                  },
                  {
                    problem: 'Improper Termination',
                    solution: 'We install proper exterior termination that vents to the outside and prevents pest entry.',
                  },
                  {
                    problem: 'Inadequate Support',
                    solution: 'We properly support and secure the vent duct to prevent sagging and disconnection.',
                  },
                  {
                    problem: 'Non-Compliant Materials',
                    solution: 'We replace old plastic or foil vents with code-compliant rigid metal ducting.',
                  },
                ].map((item) => (
                  <div key={item.problem} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{item.problem}</h3>
                    <p className="text-gray-600"><strong>Our Solution:</strong> {item.solution}</p>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12">Why Choose Al Air Duct Cleaning Atlanta?</h2>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'Licensed and insured dryer vent specialists',
                    'All work meets current building codes',
                    'Quality materials for long-lasting results',
                    'Competitive pricing with detailed quotes',
                    'Same-day service available',
                    'Warranty on installation labor',
                    'Combination cleaning and replacement services',
                    'Local Atlanta company you can trust',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Get Your Free Quote</h3>
                <p className="text-gray-600 mb-6">
                  Need dryer vent replacement? Contact us for a free inspection and quote.
                </p>
                <ContactForm />

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold mb-4">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/dryer-vent-cleaning" className="text-primary-600 hover:underline">
                        Dryer Vent Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/air-duct-cleaning" className="text-primary-600 hover:underline">
                        Air Duct Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/air-duct-installation" className="text-primary-600 hover:underline">
                        Air Duct Installation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Schedule Your Dryer Vent Replacement Today</h2>
            <p className="text-xl text-primary-50 mb-8">
              Don't risk a dryer fire. Contact us today for professional dryer vent replacement in Atlanta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Call {businessInfo.phone}
              </a>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-primary-700">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
