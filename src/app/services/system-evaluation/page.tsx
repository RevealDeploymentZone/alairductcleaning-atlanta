import Link from 'next/link';
import SimpleContactForm from '@/components/forms/SimpleContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Duct System Evaluation Atlanta | HVAC Inspection Service',
  description: 'Professional air duct system evaluation in Atlanta, GA. Comprehensive HVAC ductwork inspection and assessment. Call (404) 948-4544 for inspection.',
  keywords: ['air duct inspection atlanta', 'duct system evaluation', 'hvac assessment', 'ductwork inspection'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services/system-evaluation',
  },
};

export default function SystemEvaluationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Air Duct System Evaluation',
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
            description: 'Comprehensive air duct system evaluation and assessment services.',
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
                <li>System Evaluation</li>
              </ol>
            </nav>
            <h1 className="mb-6">Air Duct System Evaluation in Atlanta</h1>
            <p className="text-xl text-primary-50">
              Comprehensive HVAC ductwork inspection and assessment to optimize performance, efficiency, and indoor air quality.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">What Is an Air Duct System Evaluation?</h2>
              <p className="text-lg text-gray-600 mb-4">
                An air duct system evaluation is a comprehensive inspection and assessment of your entire HVAC ductwork system. Using specialized equipment including video cameras, airflow meters, and diagnostic tools, we thoroughly evaluate the condition, performance, and efficiency of your duct system.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                According to the <a href="https://www.nadca.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">National Air Duct Cleaners Association (NADCA)</a>, regular duct system inspections can identify problems before they become costly repairs and help maintain optimal HVAC performance.
              </p>

              <h2 className="mb-6 mt-12">When You Need a System Evaluation</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-900">Schedule an Evaluation If You Notice:</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Uneven temperatures between rooms</li>
                  <li>• High or increasing energy bills</li>
                  <li>• Excessive dust throughout your home</li>
                  <li>• Reduced airflow from vents</li>
                  <li>• Unusual noises from ductwork</li>
                  <li>• Musty or unpleasant odors when HVAC operates</li>
                  <li>• Recent purchase of older home</li>
                  <li>• Before major HVAC system upgrade</li>
                  <li>• After home renovation or addition</li>
                  <li>• Frequent HVAC repairs needed</li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Our Comprehensive Evaluation Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                Al Air Duct Cleaning Atlanta conducts thorough, professional air duct system evaluations following NADCA standards:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Visual Inspection',
                    description: 'We inspect all accessible ductwork, connections, registers, and grilles for visible damage, disconnections, or deterioration.',
                  },
                  {
                    title: 'Video Camera Inspection',
                    description: 'Using specialized video equipment, we inspect the interior of your ductwork to identify contamination, damage, or obstructions.',
                  },
                  {
                    title: 'Airflow Measurement',
                    description: 'We measure airflow at each supply register and return grille to identify imbalances and restrictions.',
                  },
                  {
                    title: 'Duct Leakage Testing',
                    description: 'We perform duct blaster testing or smoke testing to identify and quantify air leakage in your duct system.',
                  },
                  {
                    title: 'Insulation Assessment',
                    description: 'We evaluate duct insulation in unconditioned spaces to identify energy loss and condensation issues.',
                  },
                  {
                    title: 'Design Evaluation',
                    description: 'We assess whether your duct system is properly sized and designed for your HVAC equipment and home layout.',
                  },
                  {
                    title: 'Indoor Air Quality Assessment',
                    description: 'We evaluate factors affecting indoor air quality including contamination, mold, and ventilation adequacy.',
                  },
                  {
                    title: 'Detailed Report',
                    description: 'We provide a comprehensive written report with findings, photos, recommendations, and priority action items.',
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

              <h2 className="mb-6 mt-12">Common Issues We Identify</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our system evaluations frequently identify these performance-robbing problems:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    issue: 'Duct Leakage',
                    impact: '20-30% energy loss, uneven temperatures, higher bills',
                  },
                  {
                    issue: 'Poor Insulation',
                    impact: 'Condensation, energy waste, mold growth risk',
                  },
                  {
                    issue: 'Disconnected Ducts',
                    impact: 'Severe energy loss, no airflow to affected rooms',
                  },
                  {
                    issue: 'Crushed or Kinked Flex Duct',
                    impact: 'Reduced airflow, poor comfort, system strain',
                  },
                  {
                    issue: 'Undersized Ductwork',
                    impact: 'Insufficient airflow, noisy operation, inefficiency',
                  },
                  {
                    issue: 'Excessive Duct Length',
                    impact: 'Poor airflow, energy waste, uneven temperatures',
                  },
                  {
                    issue: 'Mold Contamination',
                    impact: 'Health risks, poor air quality, odors',
                  },
                  {
                    issue: 'Pest Infestation',
                    impact: 'Contamination, damage, health concerns',
                  },
                ].map((problem) => (
                  <div key={problem.issue} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2 text-red-900">{problem.issue}</h3>
                    <p className="text-gray-600 text-sm"><strong>Impact:</strong> {problem.impact}</p>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12">Benefits of System Evaluation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional air duct system evaluation provides valuable benefits:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Identify hidden problems before they worsen',
                  'Optimize HVAC system efficiency and performance',
                  'Reduce energy costs through identified improvements',
                  'Improve indoor air quality and comfort',
                  'Prioritize maintenance and repair investments',
                  'Extend HVAC equipment lifespan',
                  'Make informed decisions about system upgrades',
                  'Verify proper installation of new systems',
                  'Pre-purchase inspection for home buyers',
                  'Document system condition for insurance or warranty',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mb-6 mt-12">Our Detailed Report</h2>
              <p className="text-lg text-gray-600 mb-4">
                After completing your system evaluation, we provide a comprehensive report including:
              </p>

              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'Executive summary of findings and key issues',
                    'Detailed inspection results for each duct component',
                    'Photos and video documentation of problems',
                    'Airflow measurements and system performance data',
                    'Energy efficiency assessment and calculations',
                    'Prioritized recommendations for improvements',
                    'Cost estimates for recommended services',
                    'Timeline suggestions for addressing issues',
                    'Answers to your questions and concerns',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Pre-Purchase Home Inspections</h2>
              <p className="text-lg text-gray-600 mb-4">
                Buying a home in Atlanta? A professional air duct system evaluation should be part of your due diligence. Our pre-purchase inspection helps you:
              </p>

              <ul className="space-y-3 mb-6 text-gray-600">
                <li>• Understand the condition of the HVAC duct system</li>
                <li>• Identify potential repair costs before closing</li>
                <li>• Negotiate repairs or price adjustments with seller</li>
                <li>• Plan for future maintenance and upgrades</li>
                <li>• Avoid surprises after moving in</li>
              </ul>

              <p className="text-lg text-gray-600 mb-6">
                We work with home buyers, real estate agents, and home inspectors throughout Atlanta to provide thorough duct system evaluations during the purchase process.
              </p>

              <h2 className="mb-6 mt-12">Why Choose Al Air Duct Cleaning Atlanta?</h2>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'NADCA-certified inspection professionals',
                    'State-of-the-art inspection equipment',
                    'Comprehensive, unbiased assessments',
                    'Detailed written reports with photos',
                    'No-pressure recommendations',
                    'Competitive inspection pricing',
                    'Same-day service available',
                    'Local Atlanta company since 2005',
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
                <h3 className="text-2xl font-bold mb-4">Schedule Your Evaluation</h3>
                <p className="text-gray-600 mb-6">
                  Ready to assess your air duct system? Contact us to schedule your comprehensive evaluation.
                </p>
                <SimpleContactForm />

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold mb-4">Related Services</h4>
                  <ul className="space-y-3">
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
                    <li>
                      <Link href="/services/air-scrubber-installation-replacement" className="text-primary-600 hover:underline">
                        Air Scrubber Installation
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
            <h2 className="text-white mb-6">Get Your System Evaluation Today</h2>
            <p className="text-xl text-primary-50 mb-8">
              Contact Al Air Duct Cleaning Atlanta for a professional air duct system evaluation.
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
