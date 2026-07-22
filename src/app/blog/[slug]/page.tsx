import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  content: string;
}

interface BlogPosts {
  [key: string]: BlogPost;
}

// Blog post data
const blogPosts: BlogPosts = {
  'how-often-should-air-ducts-be-cleaned': {
    title: 'How Often Should Air Ducts Be Cleaned?',
    date: '2024-01-15',
    category: 'Maintenance',
    content: `
      <p>One of the most common questions homeowners ask is: "How often should I have my air ducts cleaned?" The answer depends on several factors specific to your home and lifestyle.</p>

      <h2>NADCA Recommendations</h2>
      <p>The National Air Duct Cleaners Association (NADCA) recommends having your air ducts professionally cleaned every 3-5 years for most homes. However, this is a general guideline, and your home may require more frequent cleaning based on specific circumstances.</p>

      <h2>Factors That Affect Cleaning Frequency</h2>
      <h3>1. Pets in the Home</h3>
      <p>If you have pets, especially dogs or cats, you should consider cleaning your air ducts every 2-3 years. Pet dander, hair, and odors accumulate in ductwork and circulate throughout your home.</p>

      <h3>2. Allergies or Asthma</h3>
      <p>Family members with respiratory conditions benefit from more frequent air duct cleaning. Consider scheduling cleaning every 2-3 years to reduce allergen exposure.</p>

      <h2>Conclusion</h2>
      <p>For most Atlanta homes, air duct cleaning every 3-5 years is sufficient. However, homes with pets, allergies, or other special circumstances may benefit from more frequent service.</p>

      <p>At Al Air Duct Cleaning Atlanta, we provide free inspections to assess your specific needs. Contact us today to schedule your air duct evaluation.</p>
    `,
  },
  'signs-your-air-ducts-need-cleaning': {
    title: 'Top 10 Signs Your Air Ducts Need Cleaning',
    date: '2024-01-10',
    category: 'Health & Safety',
    content: `
      <p>Your air ducts play a crucial role in maintaining indoor air quality and HVAC efficiency. Here are the top 10 warning signs that indicate your air ducts need professional cleaning.</p>

      <h2>1. Visible Dust and Debris</h2>
      <p>If you notice dust, dirt, or debris blowing out of your supply vents when your HVAC system operates, this is a clear sign that your ductwork is contaminated.</p>

      <h2>2. Musty or Moldy Odors</h2>
      <p>Unpleasant smells coming from your vents when your heating or cooling system turns on indicate potential mold or mildew growth in your ductwork.</p>

      <h2>Conclusion</h2>
      <p>If you notice any of these warning signs, contact Al Air Duct Cleaning Atlanta for a free inspection.</p>
    `,
  },
  'benefits-of-air-duct-cleaning': {
    title: 'Benefits of Professional Air Duct Cleaning',
    date: '2024-01-05',
    category: 'Health & Safety',
    content: `
      <p>Professional air duct cleaning provides numerous benefits for your home, health, and HVAC system.</p>

      <h2>Health Benefits</h2>
      <p>Clean air ducts mean cleaner air throughout your home. Professional cleaning removes dust, allergens, mold spores, and other contaminants.</p>

      <h2>HVAC Efficiency Benefits</h2>
      <p>According to the U.S. Department of Energy, 25-40% of energy used for heating and cooling is wasted due to contaminants in HVAC systems.</p>

      <h2>Conclusion</h2>
      <p>Ready to experience these benefits in your Atlanta home? Contact Al Air Duct Cleaning Atlanta for a free quote today.</p>
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Al Air Duct Cleaning Atlanta Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    alternates: {
      canonical: `https://atlanta.alairductcleaning.com/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="py-12">
        <div className="container-custom max-w-4xl">
          <nav className="text-gray-600 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li>→</li>
              <li><Link href="/blog" className="hover:text-primary-600">Blog</Link></li>
              <li>→</li>
              <li className="text-gray-900">{post.title}</li>
            </ol>
          </nav>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link
              href="/blog"
              className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Need Professional Air Duct Cleaning?</h2>
            <p className="text-xl text-primary-50 mb-8">
              Our certified technicians are ready to improve your indoor air quality with professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Free Quote
              </Link>
              <Link href="/services" className="btn-secondary border-white text-white hover:bg-primary-700">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
