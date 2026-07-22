import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Blog | HVAC Tips & Indoor Air Quality - Atlanta',
  description: 'Expert advice on air duct cleaning, HVAC maintenance, indoor air quality, and home ventilation from Atlanta\'s trusted air duct cleaning professionals.',
  keywords: ['air duct cleaning blog', 'hvac tips', 'indoor air quality', 'atlanta hvac', 'air duct maintenance'],
  alternates: {
    canonical: 'https://atlanta.alairductcleaning.com/blog',
  },
};

// Force rebuild - Blog page active

const blogPosts = [
  {
    slug: 'how-often-should-air-ducts-be-cleaned',
    title: 'How Often Should Air Ducts Be Cleaned?',
    excerpt: 'Learn the recommended frequency for air duct cleaning and signs that indicate your ducts need immediate attention.',
    date: '2024-01-15',
    category: 'Maintenance',
    image: '/blog/air-duct-cleaning-frequency.jpg',
  },
  {
    slug: 'signs-your-air-ducts-need-cleaning',
    title: 'Top 10 Signs Your Air Ducts Need Cleaning',
    excerpt: 'Discover the warning signs that indicate your air duct system requires professional cleaning to maintain optimal air quality.',
    date: '2024-01-10',
    category: 'Health & Safety',
    image: '/blog/signs-ducts-need-cleaning.jpg',
  },
  {
    slug: 'benefits-of-air-duct-cleaning',
    title: 'Benefits of Professional Air Duct Cleaning',
    excerpt: 'Explore the health, efficiency, and financial benefits of maintaining clean air ducts in your Atlanta home.',
    date: '2024-01-05',
    category: 'Health & Safety',
    image: '/blog/benefits-air-duct-cleaning.jpg',
  },
  {
    slug: 'dryer-vent-cleaning-guide',
    title: 'Complete Dryer Vent Cleaning Guide for Atlanta Homeowners',
    excerpt: 'Essential information about dryer vent maintenance, fire prevention, and when to schedule professional cleaning.',
    date: '2023-12-28',
    category: 'Safety',
    image: '/blog/dryer-vent-guide.jpg',
  },
  {
    slug: 'indoor-air-quality-tips',
    title: '15 Tips to Improve Indoor Air Quality in Your Home',
    excerpt: 'Practical advice for Atlanta residents to enhance indoor air quality and create a healthier living environment.',
    date: '2023-12-20',
    category: 'Health & Safety',
    image: '/blog/indoor-air-quality-tips.jpg',
  },
  {
    slug: 'air-scrubber-benefits',
    title: 'Air Scrubber Benefits: Is It Worth the Investment?',
    excerpt: 'Learn how air scrubbers work and whether this advanced air purification technology is right for your home.',
    date: '2023-12-15',
    category: 'Technology',
    image: '/blog/air-scrubber-benefits.jpg',
  },
  {
    slug: 'air-duct-installation-guide',
    title: 'Air Duct Installation: What Atlanta Homeowners Should Know',
    excerpt: 'Essential guide to air duct installation for new homes, additions, and HVAC system replacements.',
    date: '2023-12-10',
    category: 'Installation',
    image: '/blog/duct-installation-guide.jpg',
  },
  {
    slug: 'commercial-air-duct-cleaning',
    title: 'Commercial Air Duct Cleaning: A Complete Guide for Businesses',
    excerpt: 'Why commercial air duct cleaning is essential for Atlanta businesses and how to choose the right service.',
    date: '2023-12-05',
    category: 'Commercial',
    image: '/blog/commercial-duct-cleaning.jpg',
  },
  {
    slug: 'common-hvac-problems',
    title: 'Common HVAC Problems and How to Prevent Them',
    excerpt: 'Identify and prevent the most common HVAC issues that affect Atlanta homes throughout the year.',
    date: '2023-11-28',
    category: 'Maintenance',
    image: '/blog/common-hvac-problems.jpg',
  },
  {
    slug: 'air-duct-cleaning-cost-atlanta',
    title: 'How Much Does Air Duct Cleaning Cost in Atlanta?',
    excerpt: 'Comprehensive pricing guide for air duct cleaning services in Atlanta with tips to get the best value.',
    date: '2023-11-20',
    category: 'Pricing',
    image: '/blog/duct-cleaning-cost.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Air Duct Cleaning & HVAC Blog</h1>
            <p className="text-xl text-primary-50">
              Expert advice, tips, and guides for maintaining healthy indoor air quality and efficient HVAC systems in Atlanta.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Need Professional Air Duct Cleaning?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified technicians is ready to help improve your indoor air quality with professional air duct cleaning services throughout Atlanta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
