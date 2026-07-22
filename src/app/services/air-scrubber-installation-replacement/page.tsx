import Link from 'next/link';
import SimpleContactForm from '@/components/forms/SimpleContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Scrubber Installation & Replacement Atlanta | Indoor Air Quality',
  description: 'Professional air scrubber installation and replacement in Atlanta, GA. Improve indoor air quality with advanced air purification technology. Call (404) 948-4544.',
  keywords: ['air scrubber installation atlanta', 'air scrubber replacement', 'indoor air quality', 'air purification system', 'hvac air scrubber'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services/air-scrubber-installation-replacement',
  },
};

export default function AirScrubberPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Air Scrubber Installation and Replacement',
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
            description: 'Professional air scrubber installation and replacement services to improve indoor air quality.',
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
                <li>Air Scrubber Installation & Replacement</li>
              </ol>
            </nav>
            <h1 className="mb-6">Air Scrubber Installation & Replacement in Atlanta</h1>
            <p className="text-xl text-primary-50">
              Transform your indoor air quality with advanced air scrubber technology from Atlanta's trusted HVAC specialists.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">What Is an Air Scrubber?</h2>
              <p className="text-lg text-gray-600 mb-4">
                An air scrubber is an advanced air purification system that installs directly into your HVAC system's ductwork. Unlike traditional air filters that only capture particles, air scrubbers use powerful oxidation technology to actively attack and eliminate airborne contaminants, including viruses, bacteria, mold spores, odors, and volatile organic compounds (VOCs).
              </p>
              <p className="text-lg text-gray-600 mb-6">
                According to the <a href="https://www.epa.gov/indoor-air-quality-iaq" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Environmental Protection Agency</a>, Americans spend approximately 90% of their time indoors, where air pollution levels can be 2-5 times higher than outdoor levels. Air scrubbers address this critical health concern by continuously purifying the air throughout your home or business.
              </p>

              <h2 className="mb-6 mt-12">How Air Scrubbers Work</h2>
              <p className="text-lg text-gray-600 mb-4">
                Air scrubbers utilize advanced oxidation technology, similar to the process used in water purification plants and medical facilities. When installed in your HVAC system, the air scrubber:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Generates ActivePure® Technology',
                    description: 'Creates powerful oxidizers that actively seek out and destroy contaminants',
                  },
                  {
                    title: 'Continuously Purifies Air',
                    description: 'Works 24/7 to clean air throughout your entire home or building',
                  },
                  {
                    title: 'Reduces Surface Contaminants',
                    description: 'Not only cleans air but also reduces contaminants on surfaces like countertops, doorknobs, and furniture',
                  },
                  {
                    title: 'Eliminates Odors',
                    description: 'Removes cooking odors, pet smells, smoke, and other unpleasant indoor odors at the source',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12">Benefits of Air Scrubber Installation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Installing an air scrubber in your Atlanta home or business provides numerous health and comfort benefits:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  'Reduces airborne viruses and bacteria by up to 99%',
                  'Eliminates mold spores and prevents growth',
                  'Removes VOCs from cleaning products and building materials',
                  'Neutralizes cooking and pet odors naturally',
                  'Reduces allergy and asthma triggers',
                  'Protects vulnerable family members',
                  'Creates healthier living environment',
                  'Works continuously without effort',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <h2 className="mb-6 mt-12">Why Atlanta Homes Need Air Scrubbers</h2>
              <p className="text-lg text-gray-600 mb-4">
                Atlanta's unique climate and environmental conditions make air scrubbers particularly valuable for local homeowners:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'High humidity levels that promote mold and mildew growth',
                  'Severe pollen seasons from trees, grass, and ragweed',
                  'Urban air pollution affecting indoor air quality',
                  'Year-round HVAC operation circulating contaminants',
                  'Older homes with potential indoor air quality issues',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mb-6 mt-12">Our Air Scrubber Installation Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                Al Air Duct Cleaning Atlanta provides professional air scrubber installation following manufacturer specifications and industry best practices:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Home Assessment',
                    description: 'We evaluate your HVAC system and indoor air quality needs to recommend the right air scrubber model.',
                  },
                  {
                    title: 'System Compatibility Check',
                    description: 'We verify that your HVAC system is compatible and identify the optimal installation location.',
                  },
                  {
                    title: 'Professional Installation',
                    description: 'Our certified technicians install the air scrubber directly into your ductwork near the HVAC unit.',
                  },
                  {
                    title: 'Electrical Connection',
                    description: 'We connect the air scrubber to your HVAC system so it operates automatically when your system runs.',
                  },
                  {
                    title: 'System Testing',
                    description: 'We thoroughly test the installation to ensure proper operation and optimal performance.',
                  },
                  {
                    title: 'Owner Education',
                    description: 'We explain how your new air scrubber works, maintenance requirements, and what results to expect.',
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

              <h2 className="mb-6 mt-12">Air Scrubber Replacement Services</h2>
              <p className="text-lg text-gray-600 mb-4">
                We also provide air scrubber replacement services for existing units that are no longer functioning properly or have reached the end of their useful life. Signs you may need air scrubber replacement include:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <ul className="space-y-2 text-yellow-800">
                  <li>• Unit no longer turns on or operates intermittently</li>
                  <li>• Visible damage or corrosion to the air scrubber</li>
                  <li>• Return of odors or air quality issues</li>
                  <li>• Indicator lights showing malfunction</li>
                  <li>• Unit is more than 5-7 years old</li>
                  <li>• Upgrading to newer, more efficient technology</li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Maintenance and Care</h2>
              <p className="text-lg text-gray-600 mb-4">
                Air scrubbers require minimal maintenance compared to traditional air purification systems. According to manufacturer recommendations from <a href="https://www.aerusinstitute.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Aerus</a> and similar air scrubber manufacturers, proper maintenance includes:
              </p>

              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Annual inspection by qualified HVAC technician</li>
                <li>• Cleaning of the unit's components as needed</li>
                <li>• Regular HVAC filter changes to prevent dust buildup</li>
                <li>• Verification of proper electrical connections</li>
                <li>• Cell replacement every 1-2 years depending on model</li>
              </ul>

              <p className="text-lg text-gray-600 mb-6">
                We offer maintenance plans that include annual air scrubber inspection along with your regular <Link href="/services/air-duct-cleaning" className="text-primary-600 hover:underline">air duct cleaning</Link> service.
              </p>

              <h2 className="mb-6 mt-12">Why Choose Al Air Duct Cleaning Atlanta?</h2>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'Certified air scrubber installers with extensive training',
                    'Experience with all major air scrubber brands',
                    'Professional installation following manufacturer specifications',
                    'Transparent pricing with no hidden fees',
                    'Same-day installation available',
                    'Comprehensive warranty on installation labor',
                    'Ongoing maintenance and support',
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
                  Interested in air scrubber installation? Contact us for a free consultation.
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
                      <Link href="/services/dryer-vent-cleaning" className="text-primary-600 hover:underline">
                        Dryer Vent Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/air-duct-installation" className="text-primary-600 hover:underline">
                        Air Duct Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-primary-600 hover:underline">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions About Air Scrubbers</h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How much does air scrubber installation cost in Atlanta?',
                  answer: 'Air scrubber installation in Atlanta typically costs between $800 and $2,000 depending on the model and your HVAC system. We provide free quotes with no obligation.',
                },
                {
                  question: 'Will an air scrubber help with allergies?',
                  answer: 'Yes. Air scrubbers actively remove allergens like pollen, dust, pet dander, and mold spores from your indoor air. Many customers report significant improvement in allergy symptoms.',
                },
                {
                  question: 'How long does installation take?',
                  answer: 'Professional air scrubber installation typically takes 2-3 hours. We work efficiently to minimize disruption to your home.',
                },
                {
                  question: 'Do air scrubbers use a lot of electricity?',
                  answer: 'No. Air scrubbers are very energy efficient, typically using less electricity than a standard light bulb. Most models consume less than 100 watts.',
                },
                {
                  question: 'Can I install an air scrubber myself?',
                  answer: 'We strongly recommend professional installation. Air scrubbers must be properly integrated with your HVAC system and require electrical connections. Professional installation ensures optimal performance and maintains manufacturer warranties.',
                },
              ].map((faq) => (
                <div key={faq.question} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Breathe Cleaner Air?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Contact Al Air Duct Cleaning Atlanta today to schedule your air scrubber installation consultation.
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
