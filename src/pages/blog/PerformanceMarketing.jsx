import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const PerformanceMarketing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Performance Marketing Can Increase Leads and Conversions",
    "description": "Discover how performance marketing turns ad campaigns into a measurable growth system.",
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
    "datePublished": "2025-05-20",
    "url": "https://digisevaks.com/blog/performance-marketing",
    "keywords": "performance marketing, lead generation Pune, Meta ads, Google ads Pune, ROI marketing"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "How Performance Marketing Increases Leads", "item": "https://digisevaks.com/blog/performance-marketing" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="How Performance Marketing Increases Leads | DigiSevaks"
        description="Discover how performance marketing turns ad campaigns into a measurable growth system."
        keywords="performance marketing, lead generation Pune, Meta ads, Google ads Pune, ROI marketing"
        canonical="https://digisevaks.com/blog/performance-marketing"
        ogTitle="How Performance Marketing Increases Leads | DigiSevaks"
        ogDescription="Discover how performance marketing turns ad campaigns into a measurable growth system."
        twitterTitle="How Performance Marketing Increases Leads | DigiSevaks"
        twitterDescription="Discover how performance marketing turns ad campaigns into a measurable growth system."
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
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" alt="Performance Marketing" className="w-full h-96 object-cover" />
        </motion.div>

        {/* Blog Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">Performance Marketing</span>
            <span className="text-gray-500 text-sm font-body">6 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            How Performance Marketing Can Increase Leads and Conversions
          </h1>

          {/* E-E-A-T Author Card */}
          <div className="flex items-center gap-4 py-4 my-6 border-y border-gray-200 bg-white/80 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 font-heading">By ADD_AUTHOR_NAME</p>
              <p className="text-xs text-gray-600 font-body">ADD_AUTHOR_BIO</p>
              <p className="text-xs text-gray-500 font-body mt-0.5">Last Updated: May 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-lg max-w-none font-body bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <p className="text-xl text-gray-600 mb-8">Businesses today don't just want marketing campaigns. They want measurable results, clear metrics, and positive returns on investment.</p>
          <p className="text-gray-600 mb-8">Performance marketing provides a data-driven approach to advertising where marketing activities are measured directly by performance metrics such as clicks, leads, conversions, sales, and return on ad spend (ROAS).</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">What Is Performance Marketing?</h2>
          <p className="text-gray-600 mb-8">Performance marketing combines data analytics, audience targeting, conversion optimization, and multi-channel advertising to generate specific business outcomes.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Key Channels Used</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Google Ads (Search, Display, Shopping, YouTube)</li>
            <li>Meta Ads (Instagram & Facebook Lead Generation & Sales)</li>
            <li>Remarketing & Retargeting</li>
            <li>Landing Page Optimization</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Final Thoughts</h2>
          <p className="text-gray-600 mb-8">Performance marketing transforms advertising from a guessing game into a predictable, trackable growth engine for modern businesses.</p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">Ready to scale your leads with performance marketing? DigiSevaks Media manages high-ROI Google & Meta ad campaigns for growing businesses in Pune.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PerformanceMarketing;
