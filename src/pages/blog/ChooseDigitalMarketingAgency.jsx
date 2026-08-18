import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const ChooseDigitalMarketingAgency = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Choose the Right Digital Marketing Agency for Your Business",
    "description": "10 key factors to consider when selecting the right digital marketing agency for your business.",
    "author": {
      "@type": "Person",
      "name": "ADD_AUTHOR_NAME"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DigiSevaks Media Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digisevaks.com/logo.png"
      }
    },
    "datePublished": "2025-03-05",
    "url": "https://digisevaks.com/blog/choose-digital-marketing-agency",
    "keywords": "choose digital marketing agency, digital marketing agency Pune, marketing partner selection"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "How to Choose a Digital Marketing Agency", "item": "https://digisevaks.com/blog/choose-digital-marketing-agency" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="How to Choose a Digital Marketing Agency | DigiSevaks"
        description="10 key factors to consider when selecting the right digital marketing agency for your business."
        keywords="choose digital marketing agency, digital marketing agency Pune, marketing partner selection"
        canonical="https://digisevaks.com/blog/choose-digital-marketing-agency"
        ogTitle="How to Choose a Digital Marketing Agency | DigiSevaks"
        ogDescription="10 key factors to consider when selecting the right digital marketing agency for your business."
        twitterTitle="How to Choose a Digital Marketing Agency | DigiSevaks"
        twitterDescription="10 key factors to consider when selecting the right digital marketing agency for your business."
        schema={[blogPostingSchema, breadcrumbSchema]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark font-body font-semibold transition-colors duration-300">
            ← Back to Blog
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" alt="Choosing Digital Marketing Agency" className="w-full h-96 object-cover" />
        </motion.div>

        {/* Blog Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">Digital Marketing</span>
            <span className="text-gray-500 text-sm font-body">6 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            How to Choose the Right Digital Marketing Agency for Your Business
          </h1>

          {/* E-E-A-T Author Card */}
          <div className="flex items-center gap-4 py-4 my-6 border-y border-gray-200 bg-white/80 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 font-heading">By ADD_AUTHOR_NAME</p>
              <p className="text-xs text-gray-600 font-body">ADD_AUTHOR_BIO</p>
              <p className="text-xs text-gray-500 font-body mt-0.5">Last Updated: March 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-lg max-w-none font-body bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <p className="text-xl text-gray-600 mb-8">Choosing a digital marketing agency is an important decision. The right agency can help your business generate leads, improve online visibility, build a strong brand, and increase conversions.</p>
          <p className="text-gray-600 mb-8">However, with many agencies offering similar services, selecting the right partner can be challenging.</p>
          <p className="text-gray-600 mb-8">Here are some important factors to consider.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">1. Understand Your Business Goals</h2>
          <p className="text-gray-600 mb-8">Before choosing an agency, identify what you actually want to achieve.</p>
          <p className="text-gray-600 mb-8">Your goal could be:</p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2"><li>More leads</li><li>More sales</li><li>Better Google rankings</li><li>Local visibility</li><li>Social media growth</li><li>Website development</li><li>Brand awareness</li><li>Franchise enquiries</li></ul>
          <p className="text-gray-600 mb-8">An agency should create a strategy around your business objectives.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">2. Check Their Services</h2>
          <p className="text-gray-600 mb-8">A strong digital marketing agency should understand multiple areas of online marketing.</p>
          <p className="text-gray-600 mb-8">Depending on your requirements, services may include:</p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2"><li>SEO</li><li>Local SEO</li><li>Google Ads</li><li>Meta Ads</li><li>Social media marketing</li><li>Website development</li><li>Content marketing</li><li>Branding</li><li>Performance marketing</li><li>AI SEO</li><li>GEO</li></ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">3. Review Their Portfolio</h2>
          <p className="text-gray-600 mb-8">Look at previous projects.</p>
          <p className="text-gray-600 mb-8">A portfolio can help you understand the agency's experience with websites, campaigns, branding, SEO, and different industries.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">4. Ask About Their SEO Strategy</h2>
          <p className="text-gray-600 mb-8">Be careful with agencies that promise instant rankings.</p>
          <p className="text-gray-600 mb-8">SEO generally requires research, technical improvements, content creation, authority building, and continuous optimization.</p>
          <p className="text-gray-600 mb-8">Ask how the agency plans to measure progress.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">5. Understand Reporting</h2>
          <p className="text-gray-600 mb-8">A professional agency should provide meaningful performance reports.</p>
          <p className="text-gray-600 mb-8">Depending on the service, reports might include:</p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2"><li>Organic traffic</li><li>Keyword visibility</li><li>Leads</li><li>Conversion rates</li><li>Ad spend</li><li>Cost per lead</li><li>Search performance</li><li>Website performance</li></ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">6. Evaluate Communication</h2>
          <p className="text-gray-600 mb-8">Marketing requires collaboration.</p>
          <p className="text-gray-600 mb-8">Choose an agency that communicates clearly and provides updates about strategy, implementation, and results.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">7. Don't Choose Only Based on Price</h2>
          <p className="text-gray-600 mb-8">The cheapest agency may not necessarily provide the best value.</p>
          <p className="text-gray-600 mb-8">Instead, compare:</p>
          <p className="text-gray-600 mb-8 font-semibold">Strategy + Experience + Execution + Reporting + Support + Expected Business Value</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">8. Look for Industry Understanding</h2>
          <p className="text-gray-600 mb-8">An agency should understand your target audience, competition, location, and business model.</p>
          <p className="text-gray-600 mb-8">A restaurant, salon, SaaS company, e-commerce store, and franchise business may all require completely different strategies.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">9. Ask About Conversion Optimization</h2>
          <p className="text-gray-600 mb-8">Traffic alone doesn't guarantee business growth.</p>
          <p className="text-gray-600 mb-8">Your website should be designed to convert visitors into:</p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2"><li>Calls</li><li>WhatsApp enquiries</li><li>Forms</li><li>Bookings</li><li>Purchases</li><li>Franchise enquiries</li></ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">10. Think Long Term</h2>
          <p className="text-gray-600 mb-8">Digital marketing works best when treated as a continuous growth strategy rather than a one-time activity.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Final Thoughts</h2>
          <p className="text-gray-600 mb-8">The right digital marketing agency should function as a growth partner, not simply as a service provider.</p>
          <p className="text-gray-600 mb-8">Before making a decision, compare experience, strategy, transparency, communication, services, and measurable outcomes.</p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">DigiSevaks Media helps businesses build stronger digital presence through SEO, websites, social media, advertising, branding, and performance marketing.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseDigitalMarketingAgency;
