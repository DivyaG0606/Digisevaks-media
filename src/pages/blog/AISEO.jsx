import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const AISEO = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "What Is AI SEO and How Does It Affect Google Rankings?",
    "description": "Learn what AI SEO is and how to adapt your strategy for Google's AI-powered search era.",
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
    "datePublished": "2026-01-01",
    "url": "https://digisevaks.com/blog/ai-seo",
    "keywords": "what is AI SEO, AI search rankings, Google AI search, AI search optimization"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "What Is AI SEO?", "item": "https://digisevaks.com/blog/ai-seo" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="What Is AI SEO? Google Rankings Explained | DigiSevaks"
        description="Learn what AI SEO is and how to adapt your strategy for Google's AI-powered search era."
        keywords="what is AI SEO, AI search rankings, Google AI search, AI search optimization"
        canonical="https://digisevaks.com/blog/ai-seo"
        ogTitle="What Is AI SEO? Google Rankings Explained | DigiSevaks"
        ogDescription="Learn what AI SEO is and how to adapt your strategy for Google's AI-powered search era."
        twitterTitle="What Is AI SEO? Google Rankings Explained | DigiSevaks"
        twitterDescription="Learn what AI SEO is and how to adapt your strategy for Google's AI-powered search era."
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
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" alt="AI SEO and Google Rankings" className="w-full h-96 object-cover" />
        </motion.div>

        {/* Blog Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">AI SEO</span>
            <span className="text-gray-500 text-sm font-body">7 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            What Is AI SEO and How Does It Affect Google Rankings?
          </h1>

          {/* E-E-A-T Author Card */}
          <div className="flex items-center gap-4 py-4 my-6 border-y border-gray-200 bg-white/80 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 font-heading">By ADD_AUTHOR_NAME</p>
              <p className="text-xs text-gray-600 font-body">ADD_AUTHOR_BIO</p>
              <p className="text-xs text-gray-500 font-body mt-0.5">Last Updated: January 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-lg max-w-none font-body bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <p className="text-xl text-gray-600 mb-8">Search engine optimization is experiencing one of the biggest transformations in its history. Artificial intelligence is changing how search engines understand content, evaluate websites, and deliver answers to users.</p>
          <p className="text-gray-600 mb-8">With Google integrating AI Overviews, generative search models, and natural language algorithms into search results, businesses need to understand how AI SEO works.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">What Is AI SEO?</h2>
          <p className="text-gray-600 mb-8">AI SEO refers to search optimization strategies designed to align with artificial intelligence search algorithms, machine learning models, and generative answer engines.</p>
          <p className="text-gray-600 mb-8">Instead of optimizing only for traditional keyword matching, AI SEO focuses on topic depth, entity relationships, intent fulfillment, structured data, and content accuracy.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Core Pillars of AI SEO</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Entity-Based Optimization: Helping AI identify concepts, organizations, and brand entities.</li>
            <li>Information Density: Providing clear, concise, direct answers supported by evidence.</li>
            <li>Structured Data & Schemas: Using JSON-LD markup to provide machine-readable metadata.</li>
            <li>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Final Thoughts</h2>
          <p className="text-gray-600 mb-8">AI SEO doesn't replace foundational SEO—it elevates it. Brands that focus on authentic expertise and structured data will thrive in the AI search era.</p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">Want to prepare your business for AI Search? DigiSevaks Media helps brands in Pune optimize for AI Overviews and modern search engines.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AISEO;
