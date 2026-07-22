import Link from 'next/link';
import "./blog-styles.css";
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  content: string;
  excerpt: string;
}

interface BlogPosts {
  [key: string]: BlogPost;
}

// Blog post data with full detailed content
const blogPosts: BlogPosts = {
  'how-often-should-air-ducts-be-cleaned': {
    title: 'How Often Should Air Ducts Be Cleaned? Complete Guide for Atlanta Homeowners',
    date: '2024-01-15',
    category: 'Maintenance',
    excerpt: 'Learn the recommended frequency for air duct cleaning and signs that indicate your ducts need immediate attention in Atlanta homes.',
    content: `
      <div class="blog-content">
        <p class="lead">One of the most common questions homeowners ask is: "How often should I have my air ducts cleaned?" The answer depends on several factors specific to your home, lifestyle, and Atlanta's unique climate conditions.</p>

        <h2>NADCA Recommendations</h2>
        <p>The <a href="https://nadca.com/" target="_blank" rel="noopener noreferrer" class="external-link">National Air Duct Cleaners Association (NADCA)</a>, the leading industry organization for HVAC cleaning professionals, recommends having your air ducts professionally cleaned every 3-5 years for most homes. However, this is a general guideline, and your specific situation may require more frequent attention.</p>

        <p>According to the <a href="https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned" target="_blank" rel="noopener noreferrer" class="external-link">Environmental Protection Agency (EPA)</a>, while there is no scientific evidence that regular duct cleaning prevents health problems, it does acknowledge that dirty air ducts can contribute to indoor air quality issues, especially in homes with specific circumstances we'll discuss below.</p>

        <div class="info-box">
          <h3>Quick Answer</h3>
          <p><strong>Standard homes:</strong> Every 3-5 years<br>
          <strong>Homes with pets:</strong> Every 2-3 years<br>
          <strong>Allergy sufferers:</strong> Every 2-3 years<br>
          <strong>After renovation:</strong> Immediately<br>
          <strong>Smokers in home:</strong> Every 2 years</p>
        </div>

        <h2>Factors That Affect Air Duct Cleaning Frequency</h2>

        <h3>1. Pets in the Home</h3>
        <p>If you have pets, especially dogs or cats, you should consider cleaning your air ducts every 2-3 years rather than the standard 3-5 year interval. Here's why:</p>
        <ul>
          <li><strong>Pet dander accumulation:</strong> Pet dander is one of the most common indoor allergens and accumulates rapidly in ductwork</li>
          <li><strong>Hair and fur:</strong> Animal hair circulates through your HVAC system and can clog filters and ducts</li>
          <li><strong>Odors:</strong> Pet odors can become trapped in ductwork and recirculate throughout your home</li>
          <li><strong>Multiple pets:</strong> If you have more than one pet, consider even more frequent cleaning</li>
        </ul>

        <h3>2. Allergies or Asthma</h3>
        <p>Family members with respiratory conditions, allergies, or asthma benefit significantly from more frequent air duct cleaning. The <a href="https://www.aafa.org/asthma-allergies/" target="_blank" rel="noopener noreferrer" class="external-link">Asthma and Allergy Foundation of America</a> recognizes indoor air quality as a crucial factor in managing these conditions.</p>

        <p>Consider scheduling professional <a href="/services/air-duct-cleaning" class="internal-link">air duct cleaning</a> every 2-3 years to reduce allergen exposure. Clean ducts can help minimize triggers and improve quality of life for those with respiratory sensitivities.</p>

        <h3>3. Recent Renovations or Remodeling</h3>
        <p>Construction and renovation projects generate enormous amounts of dust and debris. Even with protective measures, fine particles infiltrate your ductwork. If you've recently completed any of the following, schedule air duct cleaning immediately:</p>
        <ul>
          <li>Kitchen or bathroom remodeling</li>
          <li>Flooring installation or removal</li>
          <li>Drywall work or painting</li>
          <li>Major demolition projects</li>
          <li>Home additions or expansions</li>
        </ul>

        <p>Construction dust is particularly problematic because it contains fine particles that regular HVAC filters cannot capture. These particles circulate throughout your home until professionally removed.</p>

        <h3>4. Smokers in the Home</h3>
        <p>Tobacco smoke contains thousands of chemicals that adhere to surfaces, including the interior of your air ducts. If anyone smokes indoors, increase cleaning frequency to every 2 years. Smoke residue:</p>
        <ul>
          <li>Creates persistent odors that are difficult to eliminate</li>
          <li>Leaves a sticky film on duct surfaces that attracts more contaminants</li>
          <li>Continues to release harmful chemicals long after smoking occurs</li>
          <li>Poses health risks to non-smokers in the home</li>
        </ul>

        <h3>5. Atlanta's Unique Climate Challenges</h3>
        <p>Living in Atlanta presents specific challenges that may require more frequent air duct cleaning than the national average:</p>

        <ul>
          <li><strong>High humidity:</strong> Atlanta's humid subtropical climate (averaging 65-70% relative humidity) creates ideal conditions for mold and mildew growth in ductwork</li>
          <li><strong>Severe pollen seasons:</strong> Atlanta consistently ranks among the top 10 worst cities for pollen in the U.S., with heavy tree pollen in spring and ragweed in fall</li>
          <li><strong>Year-round HVAC use:</strong> Unlike northern climates with distinct heating and cooling seasons, Atlanta HVAC systems run nearly year-round, leading to faster contaminant accumulation</li>
          <li><strong>Urban air pollution:</strong> Traffic and industrial activity contribute to particulate matter that enters homes</li>
          <li><strong>Development and construction:</strong> Ongoing construction throughout the metro area increases airborne debris</li>
        </ul>

        <h2>Warning Signs You Need Cleaning Sooner</h2>
        <p>Between scheduled cleanings, watch for these warning signs that indicate immediate professional attention is needed:</p>

        <div class="warning-box">
          <h3>Schedule Immediate Cleaning If You Notice:</h3>
          <ul>
            <li>Visible dust, dirt, or debris blowing from supply vents when HVAC operates</li>
            <li>Musty, moldy, or otherwise unpleasant odors when heating or cooling turns on</li>
            <li>Increased allergy or asthma symptoms indoors compared to outdoors</li>
            <li>Unexplained increase in energy bills without corresponding increase in usage</li>
            <li>Uneven heating or cooling between rooms (hot and cold spots)</li>
            <li>Excessive dust accumulation on furniture shortly after cleaning</li>
            <li>Visible mold growth on vent covers or inside ducts (check with flashlight)</li>
            <li>Noticeable decrease in airflow from vents</li>
            <li>Strange noises coming from ductwork</li>
            <li>Frequent HVAC system cycling or poor performance</li>
          </ul>
        </div>

        <h2>Special Circumstances Requiring Immediate Cleaning</h2>

        <h3>New Home Purchase</h3>
        <p>When buying a home, especially an older property, consider scheduling air duct cleaning before moving in. You cannot know the previous owner's maintenance history or cleaning habits. Many homeowners discover significant contamination when they first inspect purchased homes' ductwork.</p>

        <p>Professional <a href="/services/system-evaluation" class="internal-link">air duct system evaluation</a> should be part of your home inspection process, similar to checking the roof, foundation, and major systems.</p>

        <h3>After Water Damage or Flooding</h3>
        <p>If your home experiences water damage, flooding, or significant leaks, have your air ducts inspected and cleaned promptly. Moisture in ductwork creates ideal conditions for mold growth, which can begin within 24-48 hours of water exposure.</p>

        <p>The <a href="https://www.cdc.gov/mold/faqs.htm" target="_blank" rel="noopener noreferrer" class="external-link">Centers for Disease Control and Prevention (CDC)</a> emphasizes the importance of addressing mold promptly to prevent health issues.</p>

        <h3>After Pest Infestation</h3>
        <p>If rodents, insects, or other pests have infiltrated your ductwork, professional cleaning is essential. Pest contamination poses serious health risks through:</p>
        <ul>
          <li>Droppings and urine</li>
          <li>Nesting materials</li>
          <li>Dead insects or rodents</li>
          <li>Bacteria and pathogens</li>
          <li>Unpleasant odors</li>
        </ul>

        <h3>Move-In to New Construction</h3>
        <p>Even brand new homes benefit from air duct cleaning before occupancy. Construction debris, sawdust, drywall dust, and other materials inevitably enter ductwork during the building process, despite contractors' best efforts to protect systems.</p>

        <h2>Professional vs. DIY: Why Professional Cleaning Matters</h2>
        <p>While homeowners can and should change HVAC filters regularly (every 1-3 months depending on factors discussed above), professional duct cleaning requires specialized equipment and expertise that DIY methods cannot replicate.</p>

        <h3>Professional Equipment Includes:</h3>
        <ul>
          <li><strong>HEPA-filtered negative pressure systems:</strong> Industrial vacuum systems that create negative pressure to prevent contaminant spread</li>
          <li><strong>Rotary brushes and compressed air tools:</strong> Mechanical agitation devices that dislodge stuck-on debris</li>
          <li><strong>Video inspection equipment:</strong> Cameras to document before/after condition and identify problems</li>
          <li><strong>Access to all ductwork sections:</strong> Professional training to access hard-to-reach areas safely</li>
          <li><strong>Proper safety equipment:</strong> Protection from contaminants and hazardous materials</li>
        </ul>

        <p>Learn more about our comprehensive <a href="/services/air-duct-cleaning" class="internal-link">air duct cleaning process</a>.</p>

        <h2>Maintenance Between Professional Cleanings</h2>
        <p>To extend the time between professional cleanings and maintain better indoor air quality year-round, follow these maintenance tips:</p>

        <h3>Regular Filter Changes</h3>
        <p>Change HVAC filters every 30-90 days depending on:</p>
        <ul>
          <li>Number of occupants</li>
          <li>Presence of pets</li>
          <li>Local air quality</li>
          <li>Season (change more frequently during high pollen seasons)</li>
          <li>HVAC usage patterns</li>
        </ul>

        <h3>Use Quality Filters</h3>
        <p>Invest in high-quality pleated filters rated MERV 8-13. While higher MERV ratings capture more particles, ratings above 13 may restrict airflow in some residential systems. Consult your HVAC technician for the appropriate rating for your system.</p>

        <h3>Keep Your Home Clean</h3>
        <p>Regular cleaning reduces dust that enters your HVAC system:</p>
        <ul>
          <li>Vacuum frequently using HEPA-filtered vacuum cleaners</li>
          <li>Dust surfaces with damp cloths to prevent particle redistribution</li>
          <li>Wash bedding weekly in hot water</li>
          <li>Use doormats and remove shoes indoors</li>
          <li>Groom pets regularly, preferably outdoors</li>
        </ul>

        <h3>Control Indoor Humidity</h3>
        <p>Maintain indoor humidity levels between 30-50% to prevent mold growth:</p>
        <ul>
          <li>Use dehumidifiers in humid months (common in Atlanta summers)</li>
          <li>Ensure bathroom and kitchen exhaust fans vent outdoors</li>
          <li>Fix leaks promptly</li>
          <li>Ensure proper attic ventilation</li>
          <li>Consider whole-home dehumidification systems</li>
        </ul>

        <p>Additionally, consider installing an <a href="/services/air-scrubber-installation-replacement" class="internal-link">air scrubber</a> for continuous air purification between cleanings.</p>

        <h3>Schedule Annual HVAC Maintenance</h3>
        <p>Professional HVAC maintenance should occur annually (ideally twice yearly - before heating and cooling seasons). Technicians can:</p>
        <ul>
          <li>Inspect ductwork for visible problems</li>
          <li>Check for leaks and poor connections</li>
          <li>Ensure proper system operation</li>
          <li>Identify potential issues before they become major problems</li>
          <li>Recommend cleaning if necessary</li>
        </ul>

        <h2>Cost Considerations</h2>
        <p>Many homeowners wonder if regular air duct cleaning is worth the investment. Consider these factors:</p>

        <h3>Energy Savings</h3>
        <p>According to the <a href="https://www.energy.gov/" target="_blank" rel="noopener noreferrer" class="external-link">U.S. Department of Energy</a>, 25-40% of energy used for heating and cooling is wasted due to contaminants in HVAC systems. Clean ducts can reduce energy consumption by up to 30%, potentially saving hundreds of dollars annually on utility bills.</p>

        <h3>Extended HVAC Life</h3>
        <p>HVAC systems represent a significant investment, typically costing $3,000-$10,000+ to replace. Regular maintenance, including duct cleaning, can extend system life by 5-10 years, representing thousands in avoided replacement costs.</p>

        <h3>Health Benefits</h3>
        <p>While harder to quantify financially, the health benefits of clean air ducts can reduce:</p>
        <ul>
          <li>Doctor visits and medical expenses</li>
          <li>Missed work or school days</li>
          <li>Medication costs for respiratory conditions</li>
          <li>Discomfort and reduced quality of life</li>
        </ul>

        <h2>Choosing a Professional Air Duct Cleaning Company</h2>
        <p>When selecting a professional for air duct cleaning, look for:</p>
        <ul>
          <li><strong>NADCA certification:</strong> Ensures adherence to industry standards and best practices</li>
          <li><strong>Proper licensing and insurance:</strong> Protects you from liability</li>
          <li><strong>Transparent pricing:</strong> Detailed quotes with no hidden fees</li>
          <li><strong>Video inspection:</strong> Before/after documentation of work performed</li>
          <li><strong>Written guarantees:</strong> Satisfaction guarantees and warranties</li>
          <li><strong>Positive reviews:</strong> Verified customer testimonials</li>
          <li><strong>Experience:</strong> Years in business and local reputation</li>
        </ul>

        <h2>Conclusion</h2>
        <p>For most Atlanta homes, professional air duct cleaning every 3-5 years provides adequate maintenance. However, homes with pets, allergy sufferers, recent renovations, or other special circumstances benefit from more frequent service every 2-3 years.</p>

        <p>Don't wait for visible problems or declining air quality. Proactive maintenance prevents issues and ensures your family breathes clean, healthy air year-round. Atlanta's climate and environmental conditions make regular air duct cleaning even more important for maintaining optimal indoor air quality.</p>

        <p>If you notice any warning signs between scheduled cleanings, don't hesitate to contact a professional for inspection. Many problems caught early are easier and less expensive to address than those allowed to worsen over time.</p>

        <div class="cta-box">
          <h3>Ready to Schedule Your Air Duct Cleaning?</h3>
          <p>At Al Air Duct Cleaning Atlanta, we provide free inspections to assess your specific needs and recommend the appropriate cleaning schedule for your home. Our NADCA-certified technicians use state-of-the-art equipment to ensure thorough, professional cleaning that delivers real results.</p>
          <p><strong>Contact us today at <a href="tel:4049484544">(404) 948-4544</a> to schedule your free consultation.</strong></p>
        </div>

        <h2>Related Services</h2>
        <ul class="related-services">
          <li><a href="/services/dryer-vent-cleaning" class="internal-link">Dryer Vent Cleaning</a> - Prevent fire hazards and improve efficiency</li>
          <li><a href="/services/air-scrubber-installation-replacement" class="internal-link">Air Scrubber Installation</a> - Continuous air purification technology</li>
          <li><a href="/services/air-duct-installation" class="internal-link">Air Duct Installation</a> - New construction and system upgrades</li>
          <li><a href="/services/system-evaluation" class="internal-link">System Evaluation</a> - Comprehensive ductwork assessment</li>
        </ul>
      </div>
    `,
  },
  'signs-your-air-ducts-need-cleaning': {
    title: 'Top 10 Signs Your Air Ducts Need Cleaning',
    date: '2024-01-10',
    category: 'Health & Safety',
    excerpt: 'Discover the warning signs that indicate your air duct system requires professional cleaning to maintain optimal air quality.',
    content: `<p>Blog content coming soon...</p>`,
  },
  'benefits-of-air-duct-cleaning': {
    title: 'Benefits of Professional Air Duct Cleaning',
    date: '2024-01-05',
    category: 'Health & Safety',
    excerpt: 'Explore the health, efficiency, and financial benefits of maintaining clean air ducts in your Atlanta home.',
    content: `<p>Blog content coming soon...</p>`,
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
    title: `${post.title} | Al Air Duct Cleaning Atlanta`,
    description: post.excerpt,
    alternates: {
      canonical: `https://atlanta.alairductcleaning.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{post.title}</h1>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />

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
              Our NADCA-certified technicians are ready to improve your indoor air quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Free Quote
              </Link>
              <a href="tel:4049484544" className="btn-secondary border-white text-white hover:bg-primary-700">
                Call (404) 948-4544
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
