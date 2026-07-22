import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Blog post data
const blogPosts: Record<string, any> = {
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

      <h3>3. Recent Renovations</h3>
      <p>Construction generates significant dust and debris. If you've recently renovated your home, schedule an air duct cleaning immediately after completion.</p>

      <h3>4. Smokers in the Home</h3>
      <p>Tobacco smoke residue accumulates in air ducts. If anyone smokes indoors, increase cleaning frequency to every 2 years.</p>

      <h3>5. Atlanta's Climate</h3>
      <p>Atlanta's humid climate and high pollen counts mean HVAC systems work year-round. This constant use can lead to faster contaminant buildup, potentially requiring more frequent cleaning than the national average.</p>

      <h2>Signs You Need Cleaning Sooner</h2>
      <ul>
        <li>Visible dust or debris coming from vents</li>
        <li>Musty or moldy odors when HVAC operates</li>
        <li>Increased allergy symptoms indoors</li>
        <li>Unexplained increase in energy bills</li>
        <li>Uneven heating or cooling between rooms</li>
        <li>Excessive dust accumulation on furniture</li>
      </ul>

      <h2>Special Circumstances</h2>
      <h3>New Home Purchase</h3>
      <p>When buying a home, especially an older property, consider scheduling air duct cleaning before moving in. You don't know the previous owner's maintenance history.</p>

      <h3>After Water Damage</h3>
      <p>If your home experiences water damage or flooding, have your air ducts inspected and cleaned promptly. Moisture in ductwork can lead to mold growth.</p>

      <h3>After Pest Infestation</h3>
      <p>If rodents or insects have infiltrated your ductwork, professional cleaning is essential to remove contamination and prevent health risks.</p>

      <h2>Professional vs. DIY</h2>
      <p>While you can change HVAC filters regularly (every 1-3 months), professional duct cleaning requires specialized equipment that homeowners don't typically have. Professional cleaning involves:</p>
      <ul>
        <li>HEPA-filtered negative pressure systems</li>
        <li>Rotary brushes and compressed air tools</li>
        <li>Video inspection equipment</li>
        <li>Access to all ductwork sections</li>
      </ul>

      <h2>Maintenance Between Cleanings</h2>
      <p>To extend the time between professional cleanings:</p>
      <ul>
        <li>Change HVAC filters regularly (every 30-90 days)</li>
        <li>Use high-quality pleated filters (MERV 8-13)</li>
        <li>Vacuum around vents and registers monthly</li>
        <li>Keep your home clean to reduce dust</li>
        <li>Control indoor humidity (30-50%)</li>
        <li>Schedule annual HVAC maintenance</li>
      </ul>

      <h2>Conclusion</h2>
      <p>For most Atlanta homes, air duct cleaning every 3-5 years is sufficient. However, homes with pets, allergies, or other special circumstances may benefit from more frequent service. If you notice any warning signs, don't wait for your scheduled interval—contact a professional for inspection.</p>

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
      <p>If you notice dust, dirt, or debris blowing out of your supply vents when your HVAC system operates, this is a clear sign that your ductwork is contaminated. Your air ducts should deliver clean air, not visible particles.</p>

      <h2>2. Musty or Moldy Odors</h2>
      <p>Unpleasant smells coming from your vents when your heating or cooling system turns on indicate potential mold or mildew growth in your ductwork. Atlanta's humid climate makes this particularly common.</p>

      <h2>3. Excessive Dust in Your Home</h2>
      <p>Do you find yourself dusting more frequently than usual? If dust accumulates on furniture, shelves, and surfaces shortly after cleaning, contaminated air ducts may be the culprit.</p>

      <h2>4. Increased Allergy or Asthma Symptoms</h2>
      <p>If family members experience worsening allergy or asthma symptoms indoors, dirty air ducts circulating allergens, dust mites, and other irritants could be responsible.</p>

      <h2>5. Uneven Heating or Cooling</h2>
      <p>Rooms that are too hot or too cold compared to the rest of your home may indicate blocked or heavily contaminated ductwork restricting proper airflow.</p>

      <h2>6. Higher Energy Bills</h2>
      <p>Unexplained increases in heating and cooling costs often result from HVAC systems working harder due to restricted airflow from dirty ducts.</p>

      <h2>7. Visible Mold Growth</h2>
      <p>If you see mold growth around vent openings, inside ducts (visible with flashlight), or on other HVAC components, immediate professional cleaning is essential.</p>

      <h2>8. Rodent or Insect Infestation</h2>
      <p>Evidence of pests in your ductwork, including droppings, nests, or dead insects, requires immediate attention. These contaminants pose serious health risks.</p>

      <h2>9. Recent Home Renovation</h2>
      <p>Construction generates significant amounts of fine dust that infiltrates ductwork. Even with precautions, renovation projects typically necessitate post-construction duct cleaning.</p>

      <h2>10. It's Been More Than 3-5 Years</h2>
      <p>If you can't remember the last time your air ducts were professionally cleaned—or if they've never been cleaned—it's time to schedule service.</p>

      <h2>What Happens If You Ignore These Signs?</h2>
      <p>Neglecting dirty air ducts can lead to:</p>
      <ul>
        <li>Worsening indoor air quality</li>
        <li>Increased respiratory problems</li>
        <li>Higher energy costs</li>
        <li>Shortened HVAC system lifespan</li>
        <li>More frequent HVAC repairs</li>
        <li>Mold contamination throughout your home</li>
      </ul>

      <h2>Professional Inspection</h2>
      <p>If you notice any of these warning signs, contact Al Air Duct Cleaning Atlanta for a free inspection. Our technicians use video camera equipment to assess your ductwork condition and provide honest recommendations.</p>

      <p>Don't wait until air quality problems affect your family's health or your HVAC system fails. Address these warning signs promptly with professional air duct cleaning.</p>
    `,
  },
  'benefits-of-air-duct-cleaning': {
    title: 'Benefits of Professional Air Duct Cleaning',
    date: '2024-01-05',
    category: 'Health & Safety',
    content: `
      <p>Professional air duct cleaning provides numerous benefits for your home, health, and HVAC system. Here's what you can expect when you invest in this important service.</p>

      <h2>Health Benefits</h2>
      <h3>Improved Indoor Air Quality</h3>
      <p>Clean air ducts mean cleaner air throughout your home. Professional cleaning removes dust, allergens, mold spores, and other contaminants that circulate through your HVAC system.</p>

      <h3>Reduced Allergens</h3>
      <p>Air ducts accumulate common allergens including pollen, pet dander, dust mites, and mold spores. For Atlanta residents dealing with seasonal allergies, clean ducts provide significant relief.</p>

      <h3>Better Respiratory Health</h3>
      <p>Breathing cleaner air reduces the burden on your respiratory system, potentially leading to fewer respiratory infections, reduced asthma attacks, and improved overall health.</p>

      <h2>HVAC Efficiency Benefits</h2>
      <h3>Lower Energy Bills</h3>
      <p>According to the U.S. Department of Energy, 25-40% of energy used for heating and cooling is wasted due to contaminants in HVAC systems. Clean ducts improve efficiency and reduce energy costs.</p>

      <h3>Extended HVAC Lifespan</h3>
      <p>When your HVAC system doesn't have to work as hard due to clean ductwork, it experiences less wear and tear, potentially extending its operational life by years.</p>

      <h3>Fewer Repairs</h3>
      <p>Clean air ducts reduce strain on HVAC components, leading to fewer breakdowns and repair needs over time.</p>

      <h2>Comfort Benefits</h2>
      <h3>More Even Temperatures</h3>
      <p>Clean ducts allow for better airflow distribution, eliminating hot and cold spots throughout your home.</p>

      <h3>Elimination of Odors</h3>
      <p>Professional cleaning removes the source of musty, moldy, or unpleasant odors that can develop in contaminated ductwork.</p>

      <h2>Financial Benefits</h2>
      <h3>Reduced Energy Costs</h3>
      <p>Most homeowners see a reduction in monthly energy bills after professional duct cleaning due to improved HVAC efficiency.</p>

      <h3>Avoided Repair Costs</h3>
      <p>Preventive maintenance through regular duct cleaning helps avoid costly HVAC repairs and premature system replacement.</p>

      <h2>The Professional Difference</h2>
      <p>Professional air duct cleaning delivers results that DIY methods cannot achieve:</p>
      <ul>
        <li>Complete system cleaning from supply to return</li>
        <li>Removal of stuck-on contaminants</li>
        <li>Video documentation of before/after condition</li>
        <li>Proper sanitization when needed</li>
        <li>Identification of ductwork problems</li>
      </ul>

      <h2>What to Expect</h2>
      <p>Professional air duct cleaning typically takes 3-5 hours for most homes and includes:</p>
      <ul>
        <li>Pre-cleaning video inspection</li>
        <li>Protection of your home</li>
        <li>Negative pressure system setup</li>
        <li>Mechanical cleaning of all ductwork</li>
        <li>Register and vent cleaning</li>
        <li>Optional antimicrobial treatment</li>
        <li>Post-cleaning verification</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The benefits of professional air duct cleaning extend far beyond just cleaner air. From health improvements to energy savings to extended HVAC life, this investment pays dividends in multiple ways.</p>

      <p>Ready to experience these benefits in your Atlanta home? Contact Al Air Duct Cleaning Atlanta for a free quote today.</p>
    `,
  },
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Al Air Duct Cleaning Atlanta Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    alternates: {
      canonical: `https://atlanta.alairductcleaning.com/blog/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug];

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

          <div className="prose prose-lg max-w-none">
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
