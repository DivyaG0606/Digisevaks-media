import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';

const DigitalMarketingSmallBusiness = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Digital Marketing Helps Small Businesses Grow Online",
    "description": "Discover how digital marketing helps small businesses build visibility, attract customers, and grow sales online.",
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
    "datePublished": "2025-01-15",
    "url": "https://digisevaks.com/blog/digital-marketing-small-business",
    "keywords": "digital marketing for small business, small business marketing Pune, online business growth"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://digisevaks.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Digital Marketing for Small Businesses", "item": "https://digisevaks.com/blog/digital-marketing-small-business" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="Digital Marketing for Small Businesses | DigiSevaks"
        description="Discover how digital marketing helps small businesses build visibility, attract customers, and grow sales online."
        keywords="digital marketing for small business, small business marketing Pune, online business growth"
        canonical="https://digisevaks.com/blog/digital-marketing-small-business"
        ogTitle="Digital Marketing for Small Businesses | DigiSevaks"
        ogDescription="Discover how digital marketing helps small businesses build visibility, attract customers, and grow sales online."
        twitterTitle="Digital Marketing for Small Businesses | DigiSevaks"
        twitterDescription="Discover how digital marketing helps small businesses build visibility, attract customers, and grow sales online."
        schema={[blogPostingSchema, breadcrumbSchema]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark font-body font-semibold transition-colors duration-300"
          >
            ← Back to Blog
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 rounded-2xl overflow-hidden shadow-md"
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
            alt="Digital Marketing for Small Businesses"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full font-body">
              Digital Marketing
            </span>
            <span className="text-gray-500 text-sm font-body">8 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            How Digital Marketing Helps Small Businesses Grow Online
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none font-body bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm"
        >
          <p className="text-xl text-gray-600 mb-8">
            Small businesses today have more opportunities than ever to reach customers online. Whether you run a restaurant, salon, retail store, professional service, franchise business, or local startup, digital marketing can help you build visibility, attract potential customers, and increase sales.
          </p>

          <p className="text-gray-600 mb-8">
            Traditional marketing methods can be expensive and difficult to measure. Digital marketing provides businesses with measurable strategies that can reach the right audience at the right time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">What Is Digital Marketing?</h2>
          <p className="text-gray-600 mb-8">
            Digital marketing is the promotion of a business through online channels such as search engines, social media, websites, Google Ads, Meta Ads, email marketing, content marketing, and other digital platforms.
          </p>

          <p className="text-gray-600 mb-8">
            A strong digital marketing strategy can help a small business compete with larger companies without requiring an enormous marketing budget.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">1. Build a Strong Online Presence</h2>
          <p className="text-gray-600 mb-8">
            Your website is often the first place potential customers visit after discovering your business.
          </p>

          <p className="text-gray-600 mb-8">
            A professional, mobile-friendly, fast-loading, and SEO-friendly website can help communicate your services, build trust, and convert visitors into enquiries.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">2. Reach Local Customers</h2>
          <p className="text-gray-600 mb-8">
            Local SEO helps businesses appear when people search for services nearby.
          </p>

          <p className="text-gray-600 mb-8">
            For example, someone searching for:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Digital marketing agency in Pune</li>
            <li>Salon near me</li>
            <li>Best restaurant in Pune</li>
            <li>Website development company in Pune</li>
          </ul>

          <p className="text-gray-600 mb-8">
            can discover relevant businesses through Google Search and Google Maps.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">3. Generate Leads Through Google Ads</h2>
          <p className="text-gray-600 mb-8">
            Google Ads can place your business in front of customers actively searching for your products or services.
          </p>

          <p className="text-gray-600 mb-8">
            Instead of waiting for organic rankings, businesses can use paid search campaigns to generate targeted traffic and enquiries.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">4. Build Brand Awareness With Social Media</h2>
          <p className="text-gray-600 mb-8">
            Platforms such as Instagram and Facebook allow small businesses to showcase products, services, customer reviews, offers, projects, and educational content.
          </p>

          <p className="text-gray-600 mb-8">
            Consistent social media marketing can help turn an unknown business into a recognizable brand.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">5. Improve Search Engine Rankings With SEO</h2>
          <p className="text-gray-600 mb-8">
            SEO helps your website appear organically in search results.
          </p>

          <p className="text-gray-600 mb-8">
            A long-term SEO strategy can include:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Keyword research</li>
            <li>Technical SEO</li>
            <li>On-page SEO</li>
            <li>Content marketing</li>
            <li>Local SEO</li>
            <li>Link building</li>
            <li>Entity optimization</li>
            <li>User experience optimization</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">6. Measure Marketing Performance</h2>
          <p className="text-gray-600 mb-8">
            One of the biggest advantages of digital marketing is measurable performance.
          </p>

          <p className="text-gray-600 mb-8">
            Businesses can monitor:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
            <li>Website traffic</li>
            <li>Leads</li>
            <li>Conversion rates</li>
            <li>Search rankings</li>
            <li>Ad performance</li>
            <li>Social engagement</li>
            <li>Cost per lead</li>
          </ul>

          <p className="text-gray-600 mb-8">
            This data helps businesses make better marketing decisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Why Small Businesses Should Invest in Digital Marketing</h2>
          <p className="text-gray-600 mb-8">
            Digital marketing isn't simply about getting more website visitors. The ultimate goal is to attract the right audience and convert them into customers.
          </p>

          <p className="text-gray-600 mb-8">
            A well-planned strategy can help businesses build visibility, credibility, leads, and long-term growth.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 font-heading">Final Thoughts</h2>
          <p className="text-gray-600 mb-8">
            Small businesses don't necessarily need huge marketing budgets to grow online. They need the right strategy, consistent execution, quality content, and accurate measurement.
          </p>

          <p className="text-gray-600 mb-8">
            With SEO, social media marketing, paid advertising, website optimization, and performance marketing working together, businesses can create a strong digital presence.
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mt-12 mb-8 border border-red-100">
            <p className="text-gray-700 font-semibold">
              Looking to grow your business online? DigiSevaks Media helps businesses with SEO, digital marketing, website development, social media marketing, Google Ads, Meta Ads, and performance marketing.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketingSmallBusiness;
