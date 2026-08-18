import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const SEOFriendlyWebsite = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Your Business Needs an SEO-Friendly Website",
    "description": "Learn why an SEO-friendly website is the foundation of digital marketing success.",
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
    "datePublished": "2025-04-12",
    "url": "https://digisevaks.com/blog/seo-friendly-website",
    "keywords": "SEO friendly website, website development Pune, website optimization, responsive website design, SEO web design Pune"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Why You Need an SEO-Friendly Website", "item": "https://digisevaks.com/blog/seo-friendly-website" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="Why You Need an SEO-Friendly Website | DigiSevaks"
        description="Learn why an SEO-friendly website is the foundation of digital marketing success."
        keywords="SEO friendly website, website development Pune, website optimization, responsive website design, SEO web design Pune"
        canonical="https://digisevaks.com/blog/seo-friendly-website"
        ogTitle="Why You Need an SEO-Friendly Website | DigiSevaks"
        ogDescription="Learn why an SEO-friendly website is the foundation of digital marketing success."
        twitterTitle="Why You Need an SEO-Friendly Website | DigiSevaks"
        twitterDescription="Learn why an SEO-friendly website is the foundation of digital marketing success."
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
          <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop" alt="SEO Friendly Website" className="w-full h-96 object-cover" />
        </motion.div>

        {/* Blog Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">
              Website Development
            </span>
            <span className="text-gray-500 text-sm font-body">7 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            Why Your Business Needs an SEO-Friendly Website
          </h1>

          {/* E-E-A-T Author Card */}
          <div className="flex items-center gap-4 py-4 my-6 border-y border-gray-200 bg-white/80 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 font-heading">By ADD_AUTHOR_NAME</p>
              <p className="text-xs text-gray-600 font-body">ADD_AUTHOR_BIO</p>
              <p className="text-xs text-gray-500 font-body mt-0.5">Last Updated: April 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-lg max-w-none font-body bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <p className="text-xl text-gray-600 mb-8">Your website is often the center of your entire digital marketing strategy. When potential customers discover your business through search engines, social media, ads, or recommendations, they visit your website to learn more.</p>
          <p className="text-gray-600 mb-8">However, a visually appealing website isn't enough on its own. If search engines can't properly understand, index, or rank your website, potential customers may never find it.</p>
          <p className="text-gray-600 mb-8">Here is why your business needs an SEO-friendly website.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">What Is an SEO-Friendly Website?</h2>
          <p className="text-gray-600 mb-8">An SEO-friendly website is designed and developed so that search engines can easily crawl, index, and understand its content while delivering a fast, responsive, and clear experience for users.</p>
          <p className="text-gray-600 mb-8">It combines technical optimization, structure, speed, content quality, and user experience.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">1. Improves Search Visibility</h2>
          <p className="text-gray-600 mb-8">An SEO-friendly website makes it easier for search engines to discover your pages.</p>
          <p className="text-gray-600 mb-8">Key elements include:</p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2"><li>Clear URL structure</li><li>Proper heading hierarchy</li><li>Sitemap integration</li><li>Robots.txt configuration</li><li>Schema markup</li><li>Clean code</li></ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">2. Fast Page Loading Speed</h2>
          <p className="text-gray-600 mb-8">Page speed is an important factor for both search rankings and user experience.</p>
          <p className="text-gray-600 mb-8">A slow website can cause visitors to leave before reading your content or exploring your services.</p>
          <p className="text-gray-600 mb-8">Faster loading speed can improve user engagement and conversion rates.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">3. Mobile Responsiveness</h2>
          <p className="text-gray-600 mb-8">Most searches take place on mobile devices.</p>
          <p className="text-gray-600 mb-8">Google primarily uses the mobile version of a website for indexing and ranking.</p>
          <p className="text-gray-600 mb-8">An SEO-friendly website must adjust seamlessly to smart phones, tablets, and desktop screens.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">4. Better User Experience (UX)</h2>
          <p className="text-gray-600 mb-8">SEO and user experience are closely connected.</p>
          <p className="text-gray-600 mb-8">Clear navigation, readable fonts, structured content, and fast loading times make it easier for visitors to find information and take action.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">5. Supports Content Marketing & Lead Generation</h2>
          <p className="text-gray-600 mb-8">An SEO-friendly website allows you to publish blog posts, landing pages, case studies, and service information that attract organic traffic.</p>
          <p className="text-gray-600 mb-8">Clear calls-to-action can turn that traffic into leads.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Final Thoughts</h2>
          <p className="text-gray-600 mb-8">Building an SEO-friendly website ensures your business has a solid foundation for all future digital marketing campaigns.</p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">Need a fast, responsive, and SEO-friendly website? DigiSevaks Media builds high-converting websites designed for growth in Pune and across Maharashtra.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SEOFriendlyWebsite;
