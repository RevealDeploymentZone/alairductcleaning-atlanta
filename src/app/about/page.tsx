import Link from 'next/link';
import { businessInfo } from '@/data/businessInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Professional Air Duct Cleaning Atlanta',
  description: "Learn about Al Air Duct Cleaning Atlanta. We are Atlanta's trusted air duct cleaning experts, committed to improving indoor air quality for homes and businesses.",
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About Al Air Duct Cleaning Atlanta</h1>
            <p className="text-xl text-primary-50">
              Your trusted partner for professional air duct cleaning services in Atlanta, Georgia
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Al Air Duct Cleaning Atlanta was founded with a simple mission: to help Atlanta residents and businesses breathe cleaner, healthier air. We recognized that many homeowners and property managers were unaware of the impact that dirty air ducts have on indoor air quality, energy efficiency, and overall health.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              What started as a small, family-owned operation has grown into one of Atlanta's most trusted air duct cleaning companies. Our growth is built on a foundation of honest service, transparent pricing, and a genuine commitment to improving the lives of our customers.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Today, we're proud to serve hundreds of satisfied customers throughout Atlanta and the surrounding areas. Every job we complete reinforces our reputation for excellence and strengthens our commitment to delivering superior air duct cleaning services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Experienced Professionals',
                description: 'Our technicians are NADCA-certified and undergo continuous training to stay current with the latest air duct cleaning techniques and technologies.',
              },
              {
                title: 'Advanced Equipment',
                description: 'We invest in state-of-the-art equipment including high-powered HEPA vacuums, rotary brushes, and video inspection cameras for thorough cleaning.',
              },
              {
                title: 'Transparent Pricing',
                description: "No hidden fees, no surprise charges. We provide detailed quotes upfront so you know exactly what you're paying for.",
              },
              {
                title: 'Customer Satisfaction',
                description: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
              },
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed and insured for your protection and peace of mind. We treat every property with the utmost care and respect.',
              },
              {
                title: 'Local Expertise',
                description: 'As an Atlanta-based company, we understand the unique air quality challenges facing homes and businesses in our area.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-gray-600 mb-4">
              At Al Air Duct Cleaning Atlanta, we believe that everyone deserves to breathe clean, healthy air. That's why we're committed to delivering the highest quality air duct cleaning services in the industry.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We follow the rigorous standards set by the National Air Duct Cleaners Association (NADCA), which is recognized as the leading authority on HVAC system cleaning. Our adherence to these standards ensures that every job we complete meets or exceeds industry best practices.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Beyond technical expertise, we pride ourselves on exceptional customer service. From your first phone call to the final inspection, we're dedicated to making your experience as smooth and stress-free as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our Values</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Integrity',
                  description: "We believe in honest, straightforward communication. We'll never recommend services you don't need, and we'll always explain exactly what we're doing and why.",
                },
                {
                  title: 'Quality',
                  description: "We refuse to cut corners. Every job receives the same meticulous attention to detail, whether it's a small apartment or a large commercial facility.",
                },
                {
                  title: 'Customer Focus',
                  description: 'Your satisfaction is our top priority. We listen to your concerns, answer your questions, and work around your schedule to minimize disruption.',
                },
                {
                  title: 'Continuous Improvement',
                  description: 'The air duct cleaning industry is constantly evolving. We stay current with the latest technologies, techniques, and best practices to provide you with the best possible service.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary-600">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Atlanta with Pride</h2>
            <p className="text-lg text-gray-600 mb-4">
              As a locally-owned and operated business, we're proud to be part of the Atlanta community. We understand the unique climate and environmental factors that affect indoor air quality in our region, from high humidity levels to seasonal pollen counts.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              This local expertise allows us to provide tailored recommendations and services that address the specific air quality challenges Atlanta homeowners and businesses face. We're not a national franchise following a one-size-fits-all approach—we're your neighbors, invested in the health and well-being of our community.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When you choose Al Air Duct Cleaning Atlanta, you're not just getting a service provider—you're partnering with a local business that cares about your health, your home, and your satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Join hundreds of satisfied customers who trust us for their air duct cleaning needs. Contact us today for a free, no-obligation quote.
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
