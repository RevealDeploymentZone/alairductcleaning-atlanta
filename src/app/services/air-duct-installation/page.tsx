import Link from 'next/link';
import SimpleContactForm from '@/components/forms/SimpleContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Duct Installation Atlanta | New HVAC Ductwork Installation',
  description: 'Professional air duct installation in Atlanta, GA. Expert ductwork design and installation for new construction and retrofits. Call (404) 948-4544.',
  keywords: ['air duct installation atlanta', 'ductwork installation', 'new hvac ducts', 'duct system installation'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services/air-duct-installation',
  },
};

export default function AirDuctInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Air Duct Installation',
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
            description: 'Professional air duct installation services for residential and commercial properties.',
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
                <li>Air Duct Installation</li>
              </ol>
            </nav>
            <h1 className="mb-6">Professional Air Duct Installation in Atlanta</h1>
            <p className="text-xl text-primary-50">
              Expert ductwork design and installation for new construction, additions, and complete HVAC system replacements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">Why Proper Duct Installation Matters</h2>
              <p className="text-lg text-gray-600 mb-4">
                According to <a href="https://www.energy.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ENERGY STAR</a>, about 20-30% of the air that moves through duct systems is lost due to leaks, holes, and poorly connected ducts. This results in higher utility bills and reduced comfort. Professional air duct installation ensures your HVAC system operates at peak efficiency.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The <a href="https://www.ashrae.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)</a> has established comprehensive standards for duct design and installation. Our installations meet or exceed these industry standards.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-900 mb-3">Poor Installation</h4>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• Up to 30% energy loss</li>
                    <li>• Uneven temperature distribution</li>
                    <li>• Increased utility bills</li>
                    <li>• Excessive system strain</li>
                    <li>• Shortened HVAC lifespan</li>
                    <li>• Poor indoor air quality</li>
                    <li>• Uncomfortable living spaces</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-900 mb-3">Professional Installation</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Maximum energy efficiency</li>
                    <li>• Even temperatures throughout</li>
                    <li>• Lower energy costs</li>
                    <li>• Optimal system performance</li>
                    <li>• Extended equipment life</li>
                    <li>• Better air quality</li>
                    <li>• Enhanced comfort</li>
                  </ul>
                </div>
              </div>

              <h2 className="mb-6 mt-12">When You Need Air Duct Installation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional air duct installation is necessary for various residential and commercial projects:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'New home construction requiring complete duct system',
                  'Room additions and home expansions',
                  'Complete HVAC system replacement',
                  'Converting from baseboard heat to forced air',
                  'Finishing previously unconditioned spaces (basement, attic)',
                  'Commercial build-outs and tenant improvements',
                  'Replacing severely damaged or inadequate ductwork',
                  'Upgrading from old, inefficient duct systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mb-6 mt-12">Our Air Duct Installation Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                Al Air Duct Cleaning Atlanta follows a comprehensive, methodical approach to air duct installation:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Initial Consultation and Assessment',
                    description: 'We evaluate your space, review architectural plans, assess HVAC equipment, and discuss your comfort goals and budget.',
                  },
                  {
                    title: 'Professional Duct Design',
                    description: 'Using Manual D calculations, we design a duct system optimized for your home layout, HVAC capacity, and local climate conditions.',
                  },
                  {
                    title: 'Material Selection',
                    description: 'We specify appropriate materials—rigid sheet metal, flex duct, or duct board—based on application, budget, and performance requirements.',
                  },
                  {
                    title: 'Permits and Approvals',
                    description: 'We obtain necessary building permits and ensure the installation will meet all local building codes and HVAC standards.',
                  },
                  {
                    title: 'Professional Installation',
                    description: 'Our certified technicians install the complete duct system including trunk lines, branch runs, supply registers, return grilles, and all connections.',
                  },
                  {
                    title: 'Sealing and Insulation',
                    description: 'We properly seal all joints and seams with mastic, then insulate ductwork in unconditioned spaces to prevent energy loss.',
                  },
                  {
                    title: 'System Testing and Balancing',
                    description: 'We test the system for leaks, measure airflow at each register, and balance the system to ensure even distribution.',
                  },
                  {
                    title: 'Final Inspection and Approval',
                    description: 'We coordinate building inspector approval and provide you with system documentation and maintenance recommendations.',
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

              <h2 className="mb-6 mt-12">Duct Materials and Options</h2>
              <p className="text-lg text-gray-600 mb-6">
                We install various duct types, each with specific advantages:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Sheet Metal Ductwork',
                    description: 'The gold standard for duct systems. Galvanized steel or aluminum ducts are durable, long-lasting, and maintain excellent airflow. Ideal for main trunk lines and commercial applications.',
                  },
                  {
                    title: 'Flexible Ductwork',
                    description: 'Insulated flex duct is cost-effective and easy to install in tight spaces. Perfect for branch runs to individual rooms. Must be properly supported to prevent sagging and airflow restriction.',
                  },
                  {
                    title: 'Fiberglass Duct Board',
                    description: 'Pre-insulated duct board offers both air distribution and thermal insulation in one product. Quieter than metal ducts and commonly used in commercial applications.',
                  },
                  {
                    title: 'Insulated Metal Ductwork',
                    description: 'Sheet metal ducts with external or internal insulation. Combines the durability of metal with thermal efficiency. Excellent for systems in unconditioned spaces.',
                  },
                ].map((type) => (
                  <div key={type.title} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12">Energy Efficiency Considerations</h2>
              <p className="text-lg text-gray-600 mb-4">
                Modern air duct installation incorporates energy efficiency best practices recommended by ENERGY STAR and the Department of Energy:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Right-sizing ducts based on precise Manual D calculations',
                  'Minimizing duct runs and bends to reduce resistance',
                  'Installing ductwork in conditioned spaces when possible',
                  'Using mastic sealant (not duct tape) for airtight connections',
                  'Insulating all ductwork in unconditioned areas (R-6 or higher)',
                  'Properly supporting flexible ductwork to prevent sagging',
                  'Balancing dampers for optimal airflow distribution',
                  'Installing properly sized return air systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mb-6 mt-12">Commercial Duct Installation</h2>
              <p className="text-lg text-gray-600 mb-4">
                We also provide commercial air duct installation for businesses throughout Atlanta. Commercial projects require specialized expertise in:
              </p>

              <ul className="space-y-3 mb-6 text-gray-600">
                <li>• Large-scale duct system design and installation</li>
                <li>• Code compliance for commercial buildings</li>
                <li>• Coordination with architects and general contractors</li>
                <li>• Zone control systems for different areas</li>
                <li>• After-hours installation to minimize business disruption</li>
                <li>• Fire and smoke damper installation</li>
                <li>• Restaurant hood exhaust systems</li>
              </ul>

              <h2 className="mb-6 mt-12">Why Choose Al Air Duct Cleaning Atlanta?</h2>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'Professional duct design following Manual D standards',
                    'Licensed and insured installation contractors',
                    'Experience with residential and commercial projects',
                    'All work meets local building codes',
                    'High-quality materials for lasting performance',
                    'Comprehensive system testing and balancing',
                    'Competitive pricing with detailed quotes',
                    'Local Atlanta company serving the community since 2005',
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
                  Planning new ductwork installation? Contact us for a free consultation and quote.
                </p>
                <SimpleContactForm />

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold mb-4">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/air-duct-removal" className="text-primary-600 hover:underline">
                        Air Duct Removal
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
            <h2 className="text-white mb-6">Ready for Professional Air Duct Installation?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Contact Al Air Duct Cleaning Atlanta for expert ductwork installation services.
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
