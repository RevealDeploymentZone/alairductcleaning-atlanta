import Link from 'next/link';
import SimpleContactForm from '@/components/forms/SimpleContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Duct Removal Atlanta | Professional Ductwork Removal Service',
  description: 'Expert air duct removal in Atlanta, GA. Safe removal of old, damaged, or unnecessary ductwork. Call (404) 948-4544 for professional service.',
  keywords: ['air duct removal atlanta', 'ductwork removal', 'hvac duct removal', 'old duct removal'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services/air-duct-removal',
  },
};

export default function AirDuctRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Air Duct Removal',
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
            description: 'Professional air duct removal services for renovations and HVAC upgrades.',
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
                <li>Air Duct Removal</li>
              </ol>
            </nav>
            <h1 className="mb-6">Professional Air Duct Removal in Atlanta</h1>
            <p className="text-xl text-primary-50">
              Safe, efficient removal of old, damaged, or unnecessary ductwork for your home or business renovation project.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">When Do You Need Air Duct Removal?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Air duct removal becomes necessary for various home improvement and HVAC upgrade projects. Whether you're undertaking a major renovation, replacing your HVAC system, or reconfiguring your home's layout, professional air duct removal ensures the job is done safely and efficiently.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-900">Common Reasons for Air Duct Removal</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Complete HVAC system replacement or upgrade</li>
                  <li>• Major home renovation or remodeling</li>
                  <li>• Converting conditioned space to unconditioned (garage, attic)</li>
                  <li>• Room additions requiring ductwork reconfiguration</li>
                  <li>• Removing damaged or contaminated ductwork</li>
                  <li>• Removing old, inefficient ductwork for energy savings</li>
                  <li>• Asbestos-containing duct insulation abatement</li>
                  <li>• Converting to ductless mini-split systems</li>
                  <li>• Addressing severe mold contamination</li>
                  <li>• Home demolition or major structural changes</li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Our Air Duct Removal Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Al Air Duct Cleaning Atlanta, we follow a systematic approach to ensure safe, complete ductwork removal:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Initial Assessment',
                    description: 'We inspect your ductwork system, identify all components, and assess accessibility and potential hazards.',
                  },
                  {
                    title: 'Safety Planning',
                    description: 'We develop a removal plan that addresses asbestos, contamination, structural considerations, and home protection.',
                  },
                  {
                    title: 'Home Protection',
                    description: 'We set up containment barriers, protective covering, and ensure proper ventilation during the removal process.',
                  },
                  {
                    title: 'Systematic Removal',
                    description: 'We carefully disconnect and remove ductwork sections, starting from the farthest points and working back to the main trunk.',
                  },
                  {
                    title: 'Hazardous Material Handling',
                    description: 'If asbestos or other hazardous materials are present, we coordinate with certified abatement contractors.',
                  },
                  {
                    title: 'Structural Repair',
                    description: 'We seal penetrations in walls, floors, or ceilings where ducts passed through, maintaining building envelope integrity.',
                  },
                  {
                    title: 'Disposal',
                    description: 'We responsibly dispose of all removed materials according to local regulations and environmental guidelines.',
                  },
                  {
                    title: 'Final Cleanup',
                    description: 'We thoroughly clean the work area, remove all debris, and leave your home clean and ready for the next phase of your project.',
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

              <h2 className="mb-6 mt-12">Types of Ductwork We Remove</h2>
              <p className="text-lg text-gray-600 mb-6">
                We have experience removing all types of residential and commercial ductwork systems:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: 'Sheet Metal Ductwork',
                    description: 'Galvanized steel, aluminum, or stainless steel rigid ducting systems.',
                  },
                  {
                    title: 'Flexible Ductwork',
                    description: 'Insulated flexible ducts commonly used for branch runs to individual rooms.',
                  },
                  {
                    title: 'Fiberglass Duct Board',
                    description: 'Insulated duct board systems often found in older installations.',
                  },
                  {
                    title: 'Return Air Systems',
                    description: 'Return air plenums, grilles, and ductwork returning air to the HVAC system.',
                  },
                ].map((type) => (
                  <div key={type.title} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12">Safety Considerations</h2>
              <p className="text-lg text-gray-600 mb-4">
                Professional air duct removal requires careful attention to safety. According to the <a href="https://www.epa.gov/asbestos" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Environmental Protection Agency</a>, older ductwork may contain asbestos insulation or other hazardous materials.
              </p>

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-red-900">Safety Hazards We Address</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Asbestos-containing duct insulation (pre-1980s construction)</li>
                  <li>• Mold and biological contamination</li>
                  <li>• Dust and particulate exposure during removal</li>
                  <li>• Structural damage to walls, ceilings, or floors</li>
                  <li>• Electrical hazards near ductwork</li>
                  <li>• Proper disposal of contaminated materials</li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Combined Removal and Installation Services</h2>
              <p className="text-lg text-gray-600 mb-4">
                Most air duct removal projects are part of a larger HVAC upgrade or renovation. We offer combined services for seamless project completion:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Remove old ductwork and install new, efficient system',
                  'Reconfigure ductwork for new floor plans',
                  'Upgrade from old metal ducts to modern insulated systems',
                  'Coordinate with HVAC contractors for system replacement',
                  'Combine with air duct cleaning for retained portions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-gray-600 mb-6">
                Learn more about our <Link href="/services/air-duct-installation" className="text-primary-600 hover:underline">air duct installation services</Link> for complete system replacement.
              </p>

              <h2 className="mb-6 mt-12">Why Choose Professional Air Duct Removal?</h2>
              <p className="text-lg text-gray-600 mb-6">
                While DIY removal might seem appealing, professional service offers significant advantages:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-primary-900 mb-3">Professional Service</h4>
                  <ul className="space-y-2 text-primary-800 text-sm">
                    <li>• Safe handling of hazardous materials</li>
                    <li>• Proper structural repairs</li>
                    <li>• Efficient, fast completion</li>
                    <li>• Complete debris removal</li>
                    <li>• Code-compliant work</li>
                    <li>• Liability insurance protection</li>
                    <li>• Specialized equipment</li>
                  </ul>
                </div>

                <div className="bg-gray-100 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">DIY Removal Risks</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Asbestos exposure risk</li>
                    <li>• Structural damage potential</li>
                    <li>• Time-consuming process</li>
                    <li>• Disposal challenges</li>
                    <li>• Possible code violations</li>
                    <li>• Personal injury risk</li>
                    <li>• Limited access to spaces</li>
                  </ul>
                </div>
              </div>

              <h2 className="mb-6 mt-12">Why Choose Al Air Duct Cleaning Atlanta?</h2>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'Experienced in all types of ductwork removal',
                    'Safety-focused approach with proper equipment',
                    'Licensed and insured for your protection',
                    'Coordinate with asbestos abatement when needed',
                    'Proper disposal of all materials',
                    'Structural repair and sealing included',
                    'Competitive pricing with detailed quotes',
                    'Local Atlanta company serving the community',
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
                  Planning a renovation or HVAC upgrade? Contact us for a free air duct removal quote.
                </p>
                <SimpleContactForm />

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold mb-4">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/air-duct-installation" className="text-primary-600 hover:underline">
                        Air Duct Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/air-duct-cleaning" className="text-primary-600 hover:underline">
                        Air Duct Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/system-evaluation" className="text-primary-600 hover:underline">
                        System Evaluation
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
            <h2 className="text-white mb-6">Need Professional Air Duct Removal?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Contact Al Air Duct Cleaning Atlanta for safe, efficient ductwork removal services.
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
