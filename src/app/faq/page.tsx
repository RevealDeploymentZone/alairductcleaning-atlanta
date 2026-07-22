import Link from 'next/link';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Air Duct Cleaning Questions | Atlanta',
  description: 'Frequently asked questions about air duct cleaning, dryer vent cleaning, and HVAC services in Atlanta. Get answers from our experts. Call (404) 948-4544.',
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/faq',
  },
};

const faqs = [
  {
    category: 'Air Duct Cleaning',
    questions: [
      {
        q: 'How often should air ducts be cleaned?',
        a: 'The National Air Duct Cleaners Association (NADCA) recommends professional air duct cleaning every 3-5 years for most homes. However, you may need more frequent cleaning if you have pets, smokers, allergies, recent renovations, or live in an area with high pollen counts like Atlanta.',
      },
      {
        q: 'How much does air duct cleaning cost in Atlanta?',
        a: 'Air duct cleaning costs in Atlanta typically range from $400-$1,000 for residential properties, depending on the size of your home, number of vents, system accessibility, and contamination level. We provide free, detailed quotes with no hidden fees.',
      },
      {
        q: 'How long does air duct cleaning take?',
        a: 'Most residential air duct cleaning takes 3-5 hours. Larger homes or systems with heavy contamination may require additional time. Commercial properties may need a full day or multiple visits.',
      },
      {
        q: 'Will air duct cleaning make a mess?',
        a: 'No. We use HEPA-filtered negative pressure systems that capture all dust and debris directly into our equipment. We protect your floors and furniture and leave your home cleaner than we found it.',
      },
      {
        q: 'Can dirty air ducts make you sick?',
        a: 'Yes. Contaminated air ducts circulate allergens, mold spores, bacteria, and other pollutants that can trigger allergies, asthma, and respiratory issues. Many customers report improved health after professional cleaning.',
      },
    ],
  },
  {
    category: 'Dryer Vent Cleaning',
    questions: [
      {
        q: 'How often should dryer vents be cleaned?',
        a: 'The U.S. Fire Administration recommends annual dryer vent cleaning. High-use households, those with pets, or long vent runs may need cleaning every 6 months.',
      },
      {
        q: 'What are signs my dryer vent needs cleaning?',
        a: 'Warning signs include: clothes taking longer to dry, dryer overheating, burning smell, excessive lint around the dryer, vent hood flap not opening, and musty odors on clothes.',
      },
      {
        q: 'Can a clogged dryer vent cause a fire?',
        a: 'Yes. The U.S. Fire Administration reports approximately 2,900 dryer fires annually, causing deaths, injuries, and millions in property damage. Lint buildup is the leading cause.',
      },
    ],
  },
  {
    category: 'Service & Pricing',
    questions: [
      {
        q: 'Do you offer free quotes?',
        a: 'Yes! We provide free, no-obligation quotes for all services. Call (404) 948-4544 or fill out our contact form for a detailed estimate.',
      },
      {
        q: 'Do you offer same-day service?',
        a: 'Yes, we offer same-day service based on availability. Contact us early in the day for the best chance of same-day scheduling.',
      },
      {
        q: 'Do you offer any guarantees?',
        a: 'Absolutely! We stand behind our work with a 100% satisfaction guarantee. If you are not completely happy, we will make it right or provide a full refund.',
      },
      {
        q: 'What areas do you serve?',
        a: 'We serve all of Atlanta, Georgia and surrounding areas including Buckhead, Midtown, Downtown, Decatur, Sandy Springs, and more.',
      },
    ],
  },
  {
    category: 'Process & Equipment',
    questions: [
      {
        q: 'What equipment do you use?',
        a: 'We use professional-grade HEPA-filtered vacuum systems, rotary brushes, compressed air tools, and video inspection cameras. Our equipment meets NADCA standards.',
      },
      {
        q: 'Are your technicians certified?',
        a: 'Yes! Our technicians are NADCA-certified and undergo continuous training on the latest air duct cleaning techniques and technologies.',
      },
      {
        q: 'Do you use chemicals?',
        a: 'We primarily use mechanical cleaning methods. If requested, we can apply EPA-approved antimicrobial treatments to eliminate mold, bacteria, and odors.',
      },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-50">
              Get answers to common questions about air duct cleaning, dryer vent cleaning, and HVAC services in Atlanta.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary-600">{category.category}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIdx) => (
                    <div key={faqIdx} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our friendly team is here to help! Contact us for personalized answers and free quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="btn-primary"
              >
                Call {businessInfo.phone}
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
