import Link from 'next/link';
import SimpleContactForm from '@/components/forms/SimpleContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Atlanta | Professional HVAC Duct Cleaning Services',
  description: 'Professional air duct cleaning services in Atlanta, GA. Remove dust, allergens, and contaminants from your HVAC system. Improve indoor air quality. Call (404) 948-4544.',
  keywords: ['air duct cleaning atlanta', 'hvac cleaning atlanta', 'duct cleaning service', 'residential air duct cleaning', 'commercial air duct cleaning'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/services/air-duct-cleaning',
  },
};

export default function AirDuctCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Air Duct Cleaning',
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
            description: 'Professional air duct cleaning services to improve indoor air quality and HVAC efficiency.',
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
                <li>Air Duct Cleaning</li>
              </ol>
            </nav>
            <h1 className="mb-6">Professional Air Duct Cleaning Services in Atlanta</h1>
            <p className="text-xl text-primary-50">
              Improve your indoor air quality and HVAC efficiency with thorough, professional air duct cleaning from Atlanta's trusted experts.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">What Is Air Duct Cleaning?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Air duct cleaning is the process of removing dust, debris, allergens, and contaminants from your home or business's HVAC ductwork. Over time, these particles accumulate in your air ducts and circulate throughout your indoor spaces every time your heating or cooling system operates.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Professional air duct cleaning involves using specialized equipment to thoroughly clean all components of your forced air system, including supply and return ducts, registers, grilles, diffusers, heat exchangers, cooling coils, drip pans, fan motor, fan housing, and the air handling unit itself.
              </p>

              <h2 className="mb-6 mt-12">Why Air Duct Cleaning Is Essential for Atlanta Homes</h2>
              <p className="text-lg text-gray-600 mb-4">
                Atlanta's climate presents unique challenges for indoor air quality. High humidity levels, seasonal pollen from trees and plants, and year-round HVAC operation create the perfect conditions for contaminant buildup in air ducts.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The National Air Duct Cleaners Association (NADCA) recommends professional air duct cleaning every 3-5 years for most homes. However, Atlanta homeowners may benefit from more frequent cleaning due to:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'High pollen counts during spring and fall seasons',
                  'Elevated humidity levels promoting mold growth',
                  'Frequent HVAC system use throughout the year',
                  'Urban air pollution and particulate matter',
                  'Construction and development creating additional airborne debris',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mb-6 mt-12">Health Benefits of Clean Air Ducts</h2>
              <p className="text-lg text-gray-600 mb-4">
                The Environmental Protection Agency (EPA) identifies indoor air quality as one of the top five environmental health risks. Clean air ducts play a crucial role in maintaining healthy indoor air by:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Reducing Allergens and Irritants</h3>
                <p className="text-gray-600 mb-3">
                  Air ducts accumulate common allergens including pollen, dust mites, pet dander, and mold spores. For individuals with allergies, asthma, or other respiratory conditions, these contaminants can trigger symptoms and reduce quality of life.
                </p>
                <p className="text-gray-600">
                  Professional air duct cleaning removes these allergens at the source, providing relief and creating a healthier indoor environment for everyone, especially vulnerable populations such as children, elderly individuals, and those with compromised immune systems.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Eliminating Mold and Mildew</h3>
                <p className="text-gray-600 mb-3">
                  Atlanta's humid climate creates ideal conditions for mold growth in HVAC systems. Mold spores in air ducts can spread throughout your home, causing respiratory issues, allergic reactions, and other health problems.
                </p>
                <p className="text-gray-600">
                  Our air duct cleaning service removes existing mold and addresses moisture issues that contribute to mold growth. We can also apply EPA-approved antimicrobial treatments to prevent future mold development.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Improving Respiratory Health</h3>
                <p className="text-gray-600">
                  Breathing cleaner air reduces the burden on your respiratory system. Many customers report fewer respiratory infections, reduced asthma attacks, better sleep quality, and improved overall well-being after air duct cleaning.
                </p>
              </div>

              <h2 className="mb-6 mt-12">Energy Efficiency and Cost Savings</h2>
              <p className="text-lg text-gray-600 mb-4">
                Beyond health benefits, clean air ducts significantly improve HVAC system efficiency. According to the U.S. Department of Energy, 25-40% of energy used for heating and cooling is wasted due to contaminants in HVAC systems.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dust and debris accumulation forces your HVAC system to work harder to maintain comfortable temperatures, resulting in:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-900 mb-3">Without Regular Cleaning</h4>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li>• 20-30% higher energy bills</li>
                    <li>• Reduced system efficiency</li>
                    <li>• More frequent repairs needed</li>
                    <li>• Shorter HVAC system lifespan</li>
                    <li>• Uneven temperature distribution</li>
                    <li>• Poor airflow and comfort</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-900 mb-3">With Regular Cleaning</h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Lower monthly energy costs</li>
                    <li>• Peak system performance</li>
                    <li>• Fewer breakdowns and repairs</li>
                    <li>• Extended equipment life</li>
                    <li>• Consistent temperatures</li>
                    <li>• Maximum airflow efficiency</li>
                  </ul>
                </div>
              </div>

              <h2 className="mb-6 mt-12">Our Comprehensive Air Duct Cleaning Process</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Al Air Duct Cleaning Atlanta, we follow NADCA standards to ensure thorough, professional cleaning that delivers real results.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Pre-Cleaning Inspection',
                    description: 'We begin with a detailed inspection using video camera technology. This allows us to assess contamination levels, identify any damage, and document the "before" condition of your ductwork.',
                  },
                  {
                    title: 'Home Protection Setup',
                    description: 'We protect your floors, furniture, and belongings with drop cloths and protective coverings. Your home is treated with the utmost care and respect.',
                  },
                  {
                    title: 'Negative Pressure System',
                    description: 'We connect a powerful HEPA-filtered vacuum to your duct system, creating negative pressure that prevents contaminants from escaping into your home during cleaning.',
                  },
                  {
                    title: 'Mechanical Cleaning',
                    description: 'Using specialized brushes, compressed air, and agitation devices, we systematically clean every section of your ductwork, dislodging stuck-on debris and contaminants.',
                  },
                  {
                    title: 'Register and Vent Cleaning',
                    description: 'All supply and return registers are removed, cleaned thoroughly, and reinstalled. This ensures complete system cleaning from start to finish.',
                  },
                  {
                    title: 'Optional Sanitization',
                    description: 'If requested, we apply EPA-approved antimicrobial treatments to eliminate bacteria, mold, and odors, providing an extra layer of protection.',
                  },
                  {
                    title: 'Post-Cleaning Verification',
                    description: "We perform a final video inspection to verify complete cleaning. You'll see before-and-after footage showing the dramatic improvement in your air duct cleanliness.",
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

              <h2 className="mb-6 mt-12">When Should You Schedule Air Duct Cleaning?</h2>
              <p className="text-lg text-gray-600 mb-6">
                While NADCA recommends cleaning every 3-5 years, certain situations warrant immediate air duct cleaning:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-900">Schedule Immediate Cleaning If:</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Visible mold growth inside ducts or on other HVAC components</li>
                  <li>• Ducts are infested with rodents or insects</li>
                  <li>• Ducts are clogged with excessive dust and debris</li>
                  <li>• Recent home renovation or remodeling project</li>
                  <li>• After moving into a new home</li>
                  <li>• Unexplained increase in allergy or asthma symptoms</li>
                  <li>• Musty or unpleasant odors when HVAC runs</li>
                  <li>• After water damage or flooding</li>
                  <li>• Noticeable dust on furniture shortly after cleaning</li>
                </ul>
              </div>

              <h2 className="mb-6 mt-12">Residential Air Duct Cleaning in Atlanta</h2>
              <p className="text-lg text-gray-600 mb-4">
                Our residential air duct cleaning service is designed specifically for Atlanta homeowners. We understand that your home is your most valuable investment, and we treat it accordingly.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you have a small apartment, a large family home, or anything in between, our experienced technicians have the expertise and equipment to handle your air duct cleaning needs. We work efficiently to minimize disruption to your daily routine while delivering exceptional results.
              </p>

              <h2 className="mb-6 mt-12">Commercial Air Duct Cleaning Services</h2>
              <p className="text-lg text-gray-600 mb-4">
                We also provide comprehensive commercial air duct cleaning for businesses throughout Atlanta. Poor indoor air quality in commercial settings can lead to:
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Increased employee sick days and absenteeism</li>
                <li>• Reduced productivity and concentration</li>
                <li>• Customer complaints about air quality</li>
                <li>• Potential liability and compliance issues</li>
                <li>• Higher operational costs due to inefficient HVAC</li>
              </ul>
              <p className="text-lg text-gray-600 mb-6">
                We offer flexible scheduling, including after-hours and weekend appointments, to minimize disruption to your business operations. Our team works discreetly and professionally to ensure your business continues running smoothly.
              </p>

              <h2 className="mb-6 mt-12">Why Choose Al Air Duct Cleaning Atlanta?</h2>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  {[
                    'NADCA-certified technicians with extensive training',
                    'State-of-the-art equipment including HEPA filtration',
                    'Transparent pricing with no hidden fees',
                    '100% satisfaction guarantee on all services',
                    'Fully licensed and insured for your protection',
                    'Local Atlanta company with deep community roots',
                    'Same-day and emergency services available',
                    'Free video inspection and detailed quotes',
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
                  Ready to breathe cleaner air? Contact us today for a free consultation and quote.
                </p>
                <SimpleContactForm />

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/dryer-vent-cleaning" className="text-primary-600 hover:underline">
                        Dryer Vent Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/air-scrubber-installation-replacement" className="text-primary-600 hover:underline">
                        Air Scrubber Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-primary-600 hover:underline">
                        Frequently Asked Questions
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
            <h2 className="text-center mb-12">Frequently Asked Questions About Air Duct Cleaning</h2>

            <div className="space-y-6">
              {[
                {
                  question: 'How much does air duct cleaning cost in Atlanta?',
                  answer: 'The cost of air duct cleaning in Atlanta typically ranges from $400 to $1,000 for most residential properties, depending on the size of your home, number of vents, and system complexity. We provide free, detailed quotes with no obligation.',
                },
                {
                  question: 'How long does the air duct cleaning process take?',
                  answer: 'Most residential air duct cleaning projects take between 3-5 hours. Larger homes or commercial properties may require additional time. We work efficiently to complete the job thoroughly while minimizing disruption to your schedule.',
                },
                {
                  question: 'Will air duct cleaning make a mess in my home?',
                  answer: "No. Our HEPA-filtered negative pressure system ensures all contaminants are captured directly into our equipment. We protect your home with drop cloths and clean up completely before we leave. Your home will be cleaner, not messier, when we're finished.",
                },
                {
                  question: 'How often should I have my air ducts cleaned?',
                  answer: 'NADCA recommends air duct cleaning every 3-5 years for most homes. However, you may need more frequent cleaning if you have pets, allergies, recent renovations, or live in an area with high pollen counts like Atlanta.',
                },
                {
                  question: 'Can air duct cleaning help with allergies?',
                  answer: 'Yes. Professional air duct cleaning removes allergens like pollen, dust mites, pet dander, and mold spores from your HVAC system. Many customers report significant improvement in allergy symptoms after air duct cleaning.',
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
            <h2 className="text-white mb-6">Schedule Your Air Duct Cleaning Today</h2>
            <p className="text-xl text-primary-50 mb-8">
              Don't wait to improve your indoor air quality. Contact Al Air Duct Cleaning Atlanta today for professional, affordable air duct cleaning services.
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
