import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dryer Vent Cleaning Atlanta | Prevent Fire Hazards | Professional Service',
  description: 'Professional dryer vent cleaning in Atlanta, GA. Prevent fire hazards, improve dryer efficiency, and reduce energy costs. Call (404) 948-4544 for same-day service.',
  keywords: ['dryer vent cleaning atlanta', 'dryer vent cleaning service', 'lint removal', 'dryer fire prevention'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services/dryer-vent-cleaning',
  },
};

export default function DryerVentCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Dryer Vent Cleaning',
            provider: {
              '@type': 'LocalBusiness',
              name: businessInfo.name,
              telephone: businessInfo.phone,
            },
            areaServed: 'Atlanta, Georgia',
          }),
        }}
      />

      <section className="section-padding bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <nav className="text-red-100 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>→</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li>→</li>
                <li>Dryer Vent Cleaning</li>
              </ol>
            </nav>
            <h1 className="mb-6">Professional Dryer Vent Cleaning in Atlanta</h1>
            <p className="text-xl text-red-50">
              Prevent fire hazards and improve dryer efficiency with professional dryer vent cleaning from Atlanta's experts.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-red-50 border-y-4 border-red-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-red-900 mb-6">⚠️ Critical Safety Information</h2>
              <p className="text-lg text-gray-700 mb-4">
                According to the U.S. Fire Administration, dryers and washing machines cause an average of 15,970 fires annually, resulting in approximately $238 million in property damage. The leading cause is failure to clean dryer vents.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The National Fire Protection Association (NFPA) reports that 34% of dryer fires are caused by failure to clean, making this one of the most preventable fire hazards in your home.
              </p>
              <p className="text-lg font-bold text-red-900">
                Don't become a statistic. Regular dryer vent cleaning is not optional—it's essential for your family's safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">Why Dryer Vent Cleaning Is Critical</h2>
              <p className="text-lg text-gray-600 mb-4">
                Every time you use your dryer, lint passes through the lint trap and accumulates in your dryer vent system. Even if you clean the lint trap after every load, significant amounts of lint still make their way into the vent ductwork.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over time, this lint buildup restricts airflow, causing your dryer to work harder and creating extremely dangerous conditions. Lint is highly flammable, and the combination of heat, reduced airflow, and combustible material creates the perfect recipe for a house fire.
              </p>

              <h2 className="mb-6 mt-12">Warning Signs Your Dryer Vent Needs Cleaning</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <p className="text-yellow-900 font-semibold mb-4">Contact us immediately if you notice any of these warning signs:</p>
                <ul className="space-y-3">
                  {[
                    'Clothes taking longer than 40-50 minutes to dry completely',
                    'Dryer becoming extremely hot to the touch during operation',
                    'Burning smell when dryer is running',
                    'Excessive lint accumulation around the dryer or outside vent',
                    'Vent hood flap not opening properly when dryer operates',
                    'Clothes are hotter than normal at the end of the cycle',
                    'Increased humidity in laundry room during dryer operation',
                    'Dryer shutting off before cycle completes',
                    'Musty odor on clothes after drying cycle',
                    'Visible lint or debris outside the dryer vent',
                  ].map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-yellow-900">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="mb-6 mt-12">The Dangers of Neglected Dryer Vents</h2>

              <h3 className="text-xl font-bold mb-4 text-red-600">Fire Hazard</h3>
              <p className="text-lg text-gray-600 mb-6">
                Lint is one of the most flammable materials in your home. When combined with the high heat generated by your dryer, clogged vents become a serious fire hazard. Dryer fires spread rapidly and can engulf a home in minutes. The U.S. Consumer Product Safety Commission estimates that dryer fires cause 5 deaths, 100 injuries, and millions in property damage annually.
              </p>

              <h3 className="text-xl font-bold mb-4 text-red-600">Carbon Monoxide Poisoning (Gas Dryers)</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you have a gas dryer, blocked vents can cause carbon monoxide to back up into your home instead of being vented outside. Carbon monoxide is an odorless, colorless gas that can cause serious illness or death. Symptoms include headaches, dizziness, nausea, and confusion. Regular dryer vent cleaning is essential for preventing this invisible threat.
              </p>

              <h3 className="text-xl font-bold mb-4 text-red-600">Increased Energy Costs</h3>
              <p className="text-lg text-gray-600 mb-6">
                Clogged dryer vents force your dryer to run longer to achieve the same results. This wastes significant energy and increases your utility bills. According to the Department of Energy, a clogged dryer vent can increase drying time by up to 30% and add $300 or more to annual energy costs. Professional dryer vent cleaning pays for itself through energy savings.
              </p>

              <h3 className="text-xl font-bold mb-4 text-red-600">Premature Dryer Failure</h3>
              <p className="text-lg text-gray-600 mb-6">
                When your dryer works harder due to restricted airflow, it puts excessive strain on the motor, heating element, and other components. This leads to more frequent repairs and significantly shortens your dryer's lifespan. A dryer that should last 10-15 years might fail in just 5-7 years without proper vent maintenance.
              </p>

              <h2 className="mb-6 mt-12">Our Professional Dryer Vent Cleaning Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Al Air Duct Cleaning Atlanta, we use specialized equipment and proven techniques to thoroughly clean your dryer vent system from start to finish.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Initial Inspection',
                    description: 'We begin by inspecting your entire dryer vent system, including the vent line, ductwork, and exterior termination point. We check for damage, proper installation, and assess lint buildup levels.',
                  },
                  {
                    title: 'Dryer Disconnection',
                    description: 'We safely disconnect your dryer from the vent system, ensuring all connections are handled properly and no damage occurs to your appliance or home.',
                  },
                  {
                    title: 'High-Powered Vacuum and Brush System',
                    description: 'Using professional-grade equipment, we insert rotating brushes into the vent line while simultaneously using a high-powered vacuum to capture all lint and debris. This dual-action approach ensures thorough cleaning.',
                  },
                  {
                    title: 'Exterior Vent Cleaning',
                    description: 'We clean the exterior vent termination point, removing any accumulated lint, debris, or obstructions. We also check that the vent flap operates properly.',
                  },
                  {
                    title: 'Ductwork Inspection',
                    description: 'We inspect the condition of your vent ductwork, checking for holes, disconnections, improper materials, or other issues that could affect performance or safety.',
                  },
                  {
                    title: 'Proper Reconnection',
                    description: 'We reconnect your dryer using proper connections and techniques, ensuring airtight seals and optimal performance.',
                  },
                  {
                    title: 'Testing and Verification',
                    description: 'We run your dryer to verify proper airflow, check that the exterior vent is operating correctly, and ensure everything functions as it should.',
                  },
                ].map((step, index) => (
                  <div key={step.title} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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

              <h2 className="mb-6 mt-12">Benefits of Professional Dryer Vent Cleaning</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-900">Safety Benefits</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Dramatically reduced fire risk</li>
                    <li>• Eliminates carbon monoxide hazards</li>
                    <li>• Prevents overheating and component failure</li>
                    <li>• Peace of mind for your family's safety</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Performance Benefits</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Faster drying times (30-50% reduction)</li>
                    <li>• Lower energy bills ($200-$300 annual savings)</li>
                    <li>• Extended dryer lifespan</li>
                    <li>• Softer, fresher-smelling clothes</li>
                  </ul>
                </div>
              </div>

              <h2 className="mb-6 mt-12">How Often Should You Clean Your Dryer Vent?</h2>
              <p className="text-lg text-gray-600 mb-4">
                The U.S. Fire Administration and NFPA recommend having your dryer vent professionally cleaned at least once per year. However, Atlanta households may need more frequent cleaning depending on:
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Frequency of dryer use (high-use households should clean every 6-9 months)</li>
                <li>• Number of people in household</li>
                <li>• Presence of pets (pet hair accelerates lint buildup)</li>
                <li>• Length and configuration of vent duct (longer ducts with bends require more frequent cleaning)</li>
                <li>• Type of materials dried (heavy fabrics create more lint)</li>
              </ul>

              <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Annual Cleaning Schedule Recommendation:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary-600">Every 6 Months:</span>
                    <span>Large families, pet owners, or daily dryer use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary-600">Every 12 Months:</span>
                    <span>Average households with regular dryer use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary-600">Every 18-24 Months:</span>
                    <span>Low-use households or single occupants</span>
                  </li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Atlanta-Specific Considerations</h2>
              <p className="text-lg text-gray-600 mb-4">
                Atlanta's climate and environment present unique challenges for dryer vent maintenance:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'High humidity levels can cause lint to clump and stick more readily',
                  'Pollen and outdoor debris can enter through exterior vents',
                  'Year-round HVAC use means more laundry loads and lint production',
                  'Older Atlanta homes may have longer, more complex vent configurations',
                  'Birds and pests are attracted to warm dryer vents for nesting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mb-6 mt-12">DIY vs. Professional Dryer Vent Cleaning</h2>
              <p className="text-lg text-gray-600 mb-4">
                While you can purchase dryer vent cleaning kits at hardware stores, professional cleaning offers significant advantages:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-bold">Aspect</th>
                      <th className="p-4 text-left font-bold">DIY Cleaning</th>
                      <th className="p-4 text-left font-bold">Professional Cleaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 font-semibold">Equipment</td>
                      <td className="p-4 text-gray-600">Basic brushes, limited reach</td>
                      <td className="p-4 text-gray-600">Professional rotary systems, high-powered vacuums</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-4 font-semibold">Thoroughness</td>
                      <td className="p-4 text-gray-600">May miss sections, especially long vents</td>
                      <td className="p-4 text-gray-600">Complete system cleaning guaranteed</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-semibold">Inspection</td>
                      <td className="p-4 text-gray-600">Limited ability to assess problems</td>
                      <td className="p-4 text-gray-600">Professional inspection identifies issues</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-4 font-semibold">Time Required</td>
                      <td className="p-4 text-gray-600">2-4 hours of your time</td>
                      <td className="p-4 text-gray-600">1-2 hours, done while you relax</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Schedule Service Today</h3>
                <p className="text-gray-600 mb-6">
                  Don't risk a dryer fire. Get your free quote now.
                </p>
                <ContactForm />

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold mb-4">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/dryer-vent-replacement" className="text-primary-600 hover:underline">
                        Dryer Vent Replacement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/air-duct-cleaning" className="text-primary-600 hover:underline">
                        Air Duct Cleaning
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Protect Your Home Today</h2>
            <p className="text-xl text-red-50 mb-8">
              Don't wait for a fire to happen. Schedule professional dryer vent cleaning and protect your Atlanta home and family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${businessInfo.phoneRaw}`} className="btn-primary bg-white text-red-600 hover:bg-gray-100">
                Call {businessInfo.phone}
              </a>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-red-700">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
