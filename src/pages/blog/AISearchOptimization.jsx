import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const AISearchOptimization = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "AI Search Optimization: The New Strategy for Digital Marketing Growth",
    "description": "Discover how AI Search Optimization complements SEO and prepares your brand for AI-driven search.",
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
    "datePublished": "2026-08-01",
    "url": "https://digisevaks.com/blog/ai-search-optimization",
    "keywords": "AI search optimization, AI SEO strategy, future of SEO, AI marketing strategy"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "AI Search Optimization Strategy", "item": "https://digisevaks.com/blog/ai-search-optimization" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="AI Search Optimization Strategy | DigiSevaks"
        description="Discover how AI Search Optimization complements SEO and prepares your brand for AI-driven search."
        keywords="AI search optimization, AI SEO strategy, future of SEO, AI marketing strategy"
        canonical="https://digisevaks.com/blog/ai-search-optimization"
        ogTitle="AI Search Optimization Strategy | DigiSevaks"
        ogDescription="Discover how AI Search Optimization complements SEO and prepares your brand for AI-driven search."
        twitterTitle="AI Search Optimization Strategy | DigiSevaks"
        twitterDescription="Discover how AI Search Optimization complements SEO and prepares your brand for AI-driven search."
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
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop" alt="AI Search Optimization" className="w-full h-96 object-cover" />
        </motion.div>

        {/* Blog Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">AI Search</span>
            <span className="text-gray-500 text-sm font-body">8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            AI Search Optimization: The New Strategy for Digital Marketing Growth
          </h1>

          {/* E-E-A-T Author Card */}
          <div className="flex items-center gap-4 py-4 my-6 border-y border-gray-200 bg-white/80 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 font-heading">By ADD_AUTHOR_NAME</p>
              <p className="text-xs text-gray-600 font-body">ADD_AUTHOR_BIO</p>
              <p className="text-xs text-gray-500 font-body mt-0.5">Last Updated: August 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-lg max-w-none font-body bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <p className="text-xl text-gray-600 mb-8">AI Search Optimization represents the convergence of technical SEO, structured data, content depth, and generative engine optimization.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Building an AI Search Strategy</h2>
          <p className="text-gray-600 mb-8">To maintain search leadership as AI models handle a higher percentage of search traffic, brands must build an integrated optimization roadmap.</p>

          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Structured entity graph creation across all site assets.</li>
            <li>Direct answer formatting for conversational query patterns.</li>
            <li>Integration of verified author credentials and E-E-A-T signals.</li>
            <li>Continuous monitoring of AI Overviews and AI search citations.</li>
          </ul>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">DigiSevaks Media provides comprehensive AI Search Optimization strategies to future-proof your digital marketing in Pune and beyond.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AISearchOptimization;
