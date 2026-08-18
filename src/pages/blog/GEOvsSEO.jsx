import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const GEOvsSEO = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "GEO vs SEO: How to Optimize Your Website for AI Search",
    "description": "Understand the difference between GEO and SEO and how to prepare your site for AI search.",
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
    "datePublished": "2026-03-15",
    "url": "https://digisevaks.com/blog/geo-vs-seo",
    "keywords": "GEO vs SEO, Generative Engine Optimization, AI search optimization, AI search engines"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "GEO vs SEO", "item": "https://digisevaks.com/blog/geo-vs-seo" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="GEO vs SEO: Optimizing for AI Search | DigiSevaks"
        description="Understand the difference between GEO and SEO and how to prepare your site for AI search."
        keywords="GEO vs SEO, Generative Engine Optimization, AI search optimization, AI search engines"
        canonical="https://digisevaks.com/blog/geo-vs-seo"
        ogTitle="GEO vs SEO: Optimizing for AI Search | DigiSevaks"
        ogDescription="Understand the difference between GEO and SEO and how to prepare your site for AI search."
        twitterTitle="GEO vs SEO: Optimizing for AI Search | DigiSevaks"
        twitterDescription="Understand the difference between GEO and SEO and how to prepare your site for AI search."
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
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop" alt="GEO vs SEO" className="w-full h-96 object-cover" />
        </motion.div>

        {/* Blog Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">GEO</span>
            <span className="text-gray-500 text-sm font-body">8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            GEO vs SEO: How to Optimize Your Website for AI Search
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
          <p className="text-xl text-gray-600 mb-8">As search engine experiences evolve from traditional blue links toward generative AI answers, a new paradigm known as Generative Engine Optimization (GEO) has emerged alongside traditional Search Engine Optimization (SEO).</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">What Is GEO (Generative Engine Optimization)?</h2>
          <p className="text-gray-600 mb-8">GEO focuses on optimizing content so that AI language models (like ChatGPT, Google Gemini, and Perplexity) select, cite, and reference your business in AI-generated answers.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">SEO vs GEO Comparison</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>SEO targets search engines like Google Search and Bing to rank blue links on SERPs.</li>
            <li>GEO targets Generative AI models to get cited inside direct conversational answers.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Final Thoughts</h2>
          <p className="text-gray-600 mb-8">Businesses don't need to choose between SEO and GEO. The winning strategy combines technical SEO fundamentals with GEO content clarity.</p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">DigiSevaks Media offers cutting-edge GEO & SEO services to keep your business visible across search engines and AI assistants.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GEOvsSEO;
