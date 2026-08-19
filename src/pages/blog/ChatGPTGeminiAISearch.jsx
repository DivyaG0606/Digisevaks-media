import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const ChatGPTGeminiAISearch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Businesses Can Get Discovered on ChatGPT, Gemini, and Google AI Search",
    "description": "Learn how businesses can get discovered on ChatGPT, Gemini, and Google AI Search.",
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
    "datePublished": "2026-06-10",
    "url": "https://digisevaks.com/blog/chatgpt-gemini-ai-search",
    "keywords": "ChatGPT discovery, Google AI Search, Gemini search optimization, AI engines"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Get Discovered on ChatGPT & Google AI Search", "item": "https://digisevaks.com/blog/chatgpt-gemini-ai-search" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="Get Discovered on ChatGPT & Google AI Search | DigiSevaks"
        description="Learn how businesses can get discovered on ChatGPT, Gemini, and Google AI Search."
        keywords="ChatGPT discovery, Google AI Search, Gemini search optimization, AI engines"
        canonical="https://digisevaks.com/blog/chatgpt-gemini-ai-search"
        ogTitle="Get Discovered on ChatGPT & Google AI Search | DigiSevaks"
        ogDescription="Learn how businesses can get discovered on ChatGPT, Gemini, and Google AI Search."
        twitterTitle="Get Discovered on ChatGPT & Google AI Search | DigiSevaks"
        twitterDescription="Learn how businesses can get discovered on ChatGPT, Gemini, and Google AI Search."
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
          <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop" alt="ChatGPT Gemini AI Search" className="w-full h-96 object-cover" />
        </motion.div>

        {/* Blog Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">AI Search</span>
            <span className="text-gray-500 text-sm font-body">7 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            How Businesses Can Get Discovered on ChatGPT, Gemini, and Google AI Search
          </h1>

          {/* E-E-A-T Author Card */}
          <div className="flex items-center gap-4 py-4 my-6 border-y border-gray-200 bg-white/80 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 font-heading">By ADD_AUTHOR_NAME</p>
              <p className="text-xs text-gray-600 font-body">ADD_AUTHOR_BIO</p>
              <p className="text-xs text-gray-500 font-body mt-0.5">Last Updated: June 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-lg max-w-none font-body bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <p className="text-xl text-gray-600 mb-8">Millions of users are turning to conversational AI assistants like ChatGPT, Google Gemini, and Claude for recommendations, business discoveries, and local service recommendations.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">How Conversational AI Finds Information</h2>
          <p className="text-gray-600 mb-8">AI models scan trusted web indices, structured schema markup, official business profiles, and online reviews to form recommendations.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Strategies to Become an AI Recommended Brand</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Establish clear Entity Authority across your digital footprint.</li>
            <li>Maintain consistent NAP (Name, Address, Phone) data on Google Maps and directories.</li>
            <li>Use descriptive JSON-LD Schema markup on every service page.</li>
            <li>Publish factual, authoritative content answering real customer queries.</li>
          </ul>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">DigiSevaks Media helps businesses in Pune optimize their brand presence for AI discovery across ChatGPT, Gemini, and Google AI search.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatGPTGeminiAISearch;
