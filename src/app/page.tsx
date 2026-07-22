import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Atlanta | Professional HVAC Cleaning Services',
  description: 'Al Air Duct Cleaning Atlanta offers professional air duct cleaning, dryer vent cleaning, and HVAC services. Improve your indoor air quality today. Call (404) 948-4544 for a free quote.',
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com',
  },
};

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Air Duct Cleaning in Atlanta, Georgia
              </h1>
              <p className="text-xl mb-8 text-primary-50">
                Breathe cleaner, healthier air with Atlanta's trusted air duct cleaning experts. We improve indoor air quality, reduce allergens, and enhance HVAC efficiency for homes and businesses throughout Atlanta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${businessInfo.phoneRaw}`} className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-center">
                  Call {businessInfo.phone}
                </a>
                <Link href="/services" className="btn-secondary text-center">
                  View Our Services
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
              <p className="text-gray-600 mb-6">Fill out the form and we'll contact you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Why Choose Al Air Duct Cleaning Atlanta?</h2>
            <p className="text-lg text-gray-600">
              We are Atlanta's leading air duct cleaning company, committed to improving indoor air quality and ensuring your HVAC system operates at peak efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'NADCA Certified Technicians',
                description: 'Our team follows National Air Duct Cleaners Association standards for thorough, professional cleaning that exceeds industry expectations.',
              },
              {
                title: 'Advanced Equipment',
                description: 'We use state-of-the-art equipment including high-powered vacuums, rotary brushes, and video inspection cameras to ensure complete cleaning.',
              },
              {
                title: 'Improved Air Quality',
                description: 'Remove dust, allergens, mold spores, and contaminants from your air ducts to breathe easier and reduce respiratory issues.',
              },
              {
                title: 'Energy Savings',
                description: 'Clean air ducts improve HVAC efficiency, reducing energy consumption and lowering your monthly utility bills by up to 20%.',
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden fees or surprise charges. We provide upfront, honest pricing with detailed explanations of our services.',
              },
              {
                title: 'Same-Day Service Available',
                description: 'Emergency air duct cleaning services available. We understand urgent needs and work around your schedule.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Our Comprehensive Air Duct Cleaning Services in Atlanta</h2>
            <p className="text-lg text-gray-600">
              From residential homes to commercial buildings, we offer complete HVAC and air duct services to meet all your indoor air quality needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessInfo.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-600 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-primary-600 font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">How Our Air Duct Cleaning Process Works</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Initial Inspection',
                  description: 'We begin with a comprehensive inspection of your air duct system using video camera technology. This allows us to assess the level of contamination, identify any damage, and provide you with an accurate quote. We document the condition of your ducts before cleaning begins.',
                },
                {
                  step: '2',
                  title: 'System Protection',
                  description: 'Before starting the cleaning process, we protect your home by covering furniture, sealing registers, and setting up containment barriers. We treat your property with the utmost respect and care.',
                },
                {
                  step: '3',
                  title: 'Negative Pressure Cleaning',
                  description: 'We attach a powerful HEPA-filtered vacuum system to your ductwork, creating negative pressure that prevents contaminants from spreading. This system captures dust, debris, and allergens as we clean.',
                },
                {
                  step: '4',
                  title: 'Mechanical Agitation',
                  description: 'Using specialized rotary brushes and compressed air tools, we dislodge stuck-on debris, dust, and contaminants from the inner walls of your ductwork. This mechanical agitation ensures a thorough clean.',
                },
                {
                  step: '5',
                  title: 'Sanitization (Optional)',
                  description: 'Upon request, we apply EPA-approved antimicrobial treatments to eliminate mold, bacteria, and odors. This optional service provides additional protection for your indoor air quality.',
                },
                {
                  step: '6',
                  title: 'Final Inspection & Verification',
                  description: 'After cleaning, we perform a final video inspection to verify all contaminants have been removed. We show you before-and-after footage so you can see the dramatic improvement in your air duct cleanliness.',
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-6">
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Residential Air Duct Cleaning in Atlanta</h2>
              <p className="text-lg text-gray-600 mb-4">
                Your home should be a sanctuary of clean, healthy air. Over time, air ducts accumulate dust, pet dander, pollen, and other allergens that circulate throughout your living spaces every time your HVAC system runs.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our residential air duct cleaning service removes these contaminants, creating a healthier environment for your family. This is especially important for households with children, elderly family members, or anyone suffering from allergies, asthma, or respiratory conditions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that every home is unique. Our technicians take the time to assess your specific needs and customize our approach to deliver the best possible results for your Atlanta home.
              </p>
              <Link href="/services/air-duct-cleaning" className="btn-primary">
                Learn About Residential Cleaning
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Signs You Need Air Duct Cleaning</h3>
              <ul className="space-y-4">
                {[
                  'Visible dust or debris around vents and registers',
                  'Musty or stale odors when HVAC runs',
                  'Increased allergy or asthma symptoms',
                  'Uneven heating or cooling in different rooms',
                  'Higher than normal energy bills',
                  'Recent home renovation or construction',
                  'Evidence of rodent or insect infestation',
                  'Mold growth visible in or around ducts',
                ].map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">Commercial Air Duct Cleaning Services</h3>
              <ul className="space-y-4 mb-6">
                {[
                  'Office buildings and corporate facilities',
                  'Retail stores and shopping centers',
                  'Restaurants and food service establishments',
                  'Medical facilities and healthcare centers',
                  'Schools and educational institutions',
                  'Hotels and hospitality venues',
                  'Warehouses and industrial facilities',
                ].map((type) => (
                  <li key={type} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6">Commercial Air Duct Cleaning in Atlanta</h2>
              <p className="text-lg text-gray-600 mb-4">
                Clean air ducts are essential for maintaining a healthy, productive work environment. Poor indoor air quality can lead to increased employee sick days, reduced productivity, and potential liability issues.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our commercial air duct cleaning services are designed to minimize disruption to your business operations. We offer flexible scheduling, including after-hours and weekend appointments, to ensure your business continues running smoothly.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We work with property managers, facility directors, and business owners throughout Atlanta to maintain compliance with air quality standards and create healthier indoor environments for employees and customers.
              </p>
              <Link href="/contact" className="btn-primary">
                Request Commercial Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Understanding Indoor Air Quality in Atlanta</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Indoor Air Quality Matters</h3>
              <p className="text-gray-600 mb-4">
                According to the Environmental Protection Agency (EPA), indoor air can be 2 to 5 times more polluted than outdoor air. In some cases, indoor air quality can be up to 100 times worse than the air outside. This is particularly concerning considering that most Americans spend approximately 90% of their time indoors.
              </p>
              <p className="text-gray-600 mb-4">
                Your air duct system is the respiratory system of your home or building. Every time your HVAC system operates, air circulates through these ducts, picking up dust, allergens, and other contaminants along the way. These particles then get distributed throughout your indoor spaces, affecting the air you breathe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-900">Common Indoor Air Pollutants</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dust and dust mites</li>
                  <li>• Pollen and plant spores</li>
                  <li>• Pet dander and hair</li>
                  <li>• Mold and mildew spores</li>
                  <li>• Bacteria and viruses</li>
                  <li>• Tobacco smoke residue</li>
                  <li>• VOCs from cleaning products</li>
                  <li>• Construction debris</li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-primary-900">Health Impact</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increased allergy symptoms</li>
                  <li>• Asthma exacerbation</li>
                  <li>• Respiratory infections</li>
                  <li>• Headaches and fatigue</li>
                  <li>• Eye, nose, and throat irritation</li>
                  <li>• Difficulty concentrating</li>
                  <li>• Sleep disruptions</li>
                  <li>• Long-term health complications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Air Scrubber Technology for Superior Air Quality</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-center">
              In addition to air duct cleaning, we offer Air Scrubber installation to provide continuous air purification for your Atlanta home or business.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">How Air Scrubbers Work</h3>
              <p className="text-gray-600 mb-4">
                Air Scrubbers use advanced ActivePure® Technology to reduce contaminants and pollutants in the air and on surfaces. This technology was originally developed for NASA and has been proven effective in eliminating up to 99% of airborne and surface contaminants.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    title: 'Reduces Allergens',
                    description: 'Dramatically decreases pollen, dust, and pet dander in your indoor environment.',
                  },
                  {
                    title: 'Eliminates Odors',
                    description: 'Neutralizes cooking smells, pet odors, and other unpleasant scents naturally.',
                  },
                  {
                    title: '24/7 Protection',
                    description: 'Works continuously to scrub air and surfaces clean throughout your home.',
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <h4 className="text-lg font-bold mb-2 text-primary-600">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/services/air-scrubber-installation-replacement" className="btn-primary">
                  Learn More About Air Scrubbers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Dryer Vent Cleaning: Protect Your Atlanta Home</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-3">
                ⚠️ Important Safety Information
              </h3>
              <p className="text-red-800 mb-3">
                According to the U.S. Fire Administration, there are approximately 2,900 dryer fires every year, causing an estimated 5 deaths, 100 injuries, and $35 million in property loss. The leading cause? Failure to clean dryer vents.
              </p>
              <p className="text-red-800">
                Don't become a statistic. Regular dryer vent cleaning is not just about efficiency—it's about safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Warning Signs You Need Dryer Vent Cleaning</h3>
                <ul className="space-y-3">
                  {[
                    'Clothes taking longer than normal to dry',
                    'Dryer becoming extremely hot to the touch',
                    'Burning smell when dryer is running',
                    'Excessive lint around dryer area',
                    'Vent hood flap not opening properly',
                    'Musty odor on clothes after drying',
                  ].map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Benefits of Professional Dryer Vent Cleaning</h3>
                <ul className="space-y-3">
                  {[
                    'Prevent house fires and property damage',
                    'Reduce energy costs by up to 30%',
                    'Extend the life of your dryer',
                    'Improve dryer efficiency and performance',
                    'Eliminate potential carbon monoxide hazards',
                    'Reduce drying time significantly',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/services/dryer-vent-cleaning" className="btn-primary">
                Schedule Dryer Vent Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How often should air ducts be cleaned?',
                answer: 'The National Air Duct Cleaners Association (NADCA) recommends having your air ducts professionally cleaned every 3-5 years. However, you may need more frequent cleaning if you have pets, smokers in the home, recent renovations, or family members with allergies or respiratory conditions.',
              },
              {
                question: 'How long does air duct cleaning take?',
                answer: 'A typical residential air duct cleaning takes 3-5 hours, depending on the size of your home and the complexity of your HVAC system. Commercial properties may require a full day or multiple visits. We work efficiently to minimize disruption to your schedule.',
              },
              {
                question: 'Will air duct cleaning make a mess in my home?',
                answer: 'No. We use high-powered HEPA vacuum systems that create negative pressure, ensuring all dust and debris is captured directly into our equipment. We also protect your floors and furniture with drop cloths and take great care to leave your home as clean as we found it.',
              },
              {
                question: 'How much does air duct cleaning cost in Atlanta?',
                answer: 'The cost varies based on the size of your home, the number of vents, and the condition of your ductwork. Most residential cleanings in Atlanta range from $400-$1,000. We provide free, no-obligation quotes so you know exactly what to expect before we begin work.',
              },
              {
                question: 'Do you offer any guarantees?',
                answer: "Yes! We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with our service, we'll make it right or provide a full refund. Your satisfaction is our top priority.",
              },
              {
                question: 'Can dirty air ducts make you sick?',
                answer: 'Yes, contaminated air ducts can circulate allergens, mold spores, bacteria, and other pollutants that may trigger allergies, asthma, and respiratory issues. Professional air duct cleaning removes these contaminants, creating a healthier indoor environment.',
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary-600 font-semibold hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Breathe Cleaner Air?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Contact Al Air Duct Cleaning Atlanta today for a free quote. Our friendly team is ready to answer your questions and schedule your appointment.
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
