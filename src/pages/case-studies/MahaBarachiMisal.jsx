import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import mahaBarachiMisalLogo from '../../assets/logos/clients/19.png';
import SEO from '../../components/SEO';

const MahaBarachiMisal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Maha Barachi Misal — Franchise Growth & Digital Presence",
    "author": {
      "@type": "Organization",
      "name": "DigiSevaks Media Agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DigiSevaks Media Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digisevaks.com/logo.png"
      }
    },
    "about": "Restaurant franchise marketing Pune strategy for Maharashtrian food brand digital expansion",
    "articleSection": "Case Study",
    "url": "https://digisevaks.com/case-studies/maha-barachi-misal",
    "keywords": "restaurant franchise marketing Pune, Maharashtrian food brand digital strategy, food franchise lead generation Pune"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://digisevaks.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Maha Barachi Misal", "item": "https://digisevaks.com/case-studies/maha-barachi-misal" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="Maha Barachi Misal Case Study | Restaurant Franchise Marketing Pune | DigiSevaks"
        description="Learn how DigiSevaks Media drove franchise lead generation and online brand growth for Maharashtrian restaurant chain Maha Barachi Misal."
        keywords="restaurant franchise marketing Pune, Maharashtrian food brand digital strategy, food franchise lead generation Pune"
        canonical="https://digisevaks.com/case-studies/maha-barachi-misal"
        ogTitle="Maha Barachi Misal Case Study | Restaurant Franchise Marketing Pune | DigiSevaks"
        ogDescription="Learn how DigiSevaks Media drove franchise lead generation and online brand growth for Maharashtrian restaurant chain Maha Barachi Misal."
        twitterTitle="Maha Barachi Misal Case Study | Restaurant Franchise Marketing Pune | DigiSevaks"
        twitterDescription="Learn how DigiSevaks Media drove franchise lead generation and online brand growth for Maharashtrian restaurant chain Maha Barachi Misal."
        schema={[articleSchema, breadcrumbSchema]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center text-primary hover:text-primary-dark font-body font-semibold transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-bold text-primary font-body uppercase tracking-wider">
              Food & Beverage | Restaurant Franchise | Pune
            </span>
          </motion.div>

          {/* Client Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src={mahaBarachiMisalLogo} 
              alt="Maha Barachi Misal Logo" 
              className="h-24 w-auto mx-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            Maha Barachi Misal — Franchise Growth & Digital Presence
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Building a Strong Digital Foundation for Maharashtrian Food Brand Digital Strategy & Expansion
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Franchise Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Digital Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Website Development
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Branding
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Social Media Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Lead Generation
            </span>
          </motion.div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Project Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
              Maha Barachi Misal is a food brand built around the popularity of authentic Maharashtrian misal and a strong restaurant identity. As the brand explored franchise-led expansion, it needed a comprehensive <span className="font-semibold text-primary">restaurant franchise marketing Pune</span> strategy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              The business required a professional digital presence capable of communicating the franchise opportunity, strengthening brand credibility, and attracting potential franchise partners. DigiSevaks Media worked on developing a Maharashtrian food brand digital strategy designed to position Maha Barachi Misal for franchise expansion while strengthening its overall online presence.
            </p>
          </div>
        </motion.div>

        {/* The Challenge */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
            As a growing food brand, Maha Barachi Misal needed to bridge the gap between its offline brand presence and its digital franchise ambitions. The key challenges included:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 font-body">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Building a stronger online brand presence
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Presenting the franchise opportunity professionally
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Reaching aspiring entrepreneurs and investors
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Creating consistent brand communication
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Increasing awareness of the franchise opportunity
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Establishing trust among potential franchise partners
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Creating a digital journey that encourages franchise enquiries
            </li>
          </ul>
          <div className="mt-6 p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
            <p className="text-lg text-gray-800 font-body font-semibold">
              The challenge was clear: How can a food brand turn its digital presence into a platform for franchise growth?
            </p>
          </div>
        </motion.div>

        {/* The Objective */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">The Objective</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">1. Franchise Growth</h3>
              <p className="text-lg text-gray-700 font-body">
                Create greater awareness and interest around the Maha Barachi Misal franchise opportunity.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">2. Digital Presence</h3>
              <p className="text-lg text-gray-700 font-body">
                Build a professional, consistent, and conversion-focused digital identity for the brand.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
            Our strategy was designed to strengthen brand positioning, improve digital visibility, communicate the franchise opportunity, reach potential franchise partners, build credibility, generate franchise enquiries, and create a foundation for future expansion.
          </p>
        </motion.div>

        {/* Our Strategy */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Strategy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            We developed an integrated strategy connecting brand identity, website, digital marketing, social media, and franchise promotion.
          </p>

          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Brand Awareness → Digital Discovery → Franchise Interest → Trust & Consideration → Franchise Enquiry → Business Discussion
            </p>
          </div>

          {/* Strategy Sections */}
          <div className="space-y-8">
            {/* Digital Brand Positioning */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">01. Digital Brand Positioning</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The first step was to strengthen Maha Barachi Misal's digital positioning. Rather than communicating only as a restaurant, the brand's digital presence was structured to communicate its potential as a franchise business opportunity.
              </p>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Brand identity</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Food and product appeal</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Franchise opportunity</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Business expansion</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Brand credibility</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Consistent visual communication</li>
              </ul>
            </motion.div>

            {/* Franchise Growth Strategy */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">02. Franchise Growth Strategy</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Franchise growth requires a different marketing approach from regular restaurant promotion. We focused on communicating the opportunity to people interested in starting a food business, restaurant franchises, food & beverage businesses, entrepreneurship, business expansion, and franchise ownership.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold mb-2">Key questions answered:</p>
                <ul className="space-y-1 text-gray-700 font-body">
                  <li>• What is the brand?</li>
                  <li>• Why should I consider this franchise?</li>
                  <li>• What makes the opportunity attractive?</li>
                  <li>• How can I enquire?</li>
                </ul>
              </div>
            </motion.div>

            {/* Website & Digital Experience */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">03. Website & Digital Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The website was positioned as a central digital asset for the brand, designed to introduce the brand, showcase the food offering, communicate the franchise opportunity, build credibility, present franchise information clearly, provide clear enquiry opportunities, and work effectively across mobile devices.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  Discover → Explore → Trust → Enquire
                </p>
              </div>
            </motion.div>

            {/* Social Media Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">04. Social Media Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Social media was used to strengthen the brand's visibility and create consistent communication around Maha Barachi Misal. Content focused on food and product visuals, brand awareness, restaurant communication, franchise promotion, franchise opportunity content, promotional creatives, and audience engagement.
              </p>
            </motion.div>

            {/* Franchise Lead Generation */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">05. Franchise Lead Generation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Franchise lead generation became an important part of the digital strategy. Instead of simply generating restaurant customers, the strategy also focused on reaching people who could potentially become business partners.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  Reach → Interest → Information → Enquiry
                </p>
              </div>
            </motion.div>

            {/* Brand Consistency */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">06. Brand Consistency</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                For a franchise brand, consistency is critical. We focused on creating a unified communication style across Website + Social Media + Franchise Creatives + Digital Marketing. A consistent identity helps potential franchise partners perceive the business as more organized, established, and scalable.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Digital Growth Ecosystem */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">The Digital Growth Ecosystem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            DigiSevaks Media connected multiple digital services into one franchise growth system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Website Development", desc: "Digital foundation and franchise information hub" },
              { title: "Digital Marketing", desc: "Brand awareness and audience reach" },
              { title: "SEO", desc: "Search visibility and organic discovery" },
              { title: "Social Media", desc: "Engagement and brand recognition" },
              { title: "Franchise Marketing", desc: "Opportunity-focused communication" },
              { title: "Lead Generation", desc: "Franchise enquiry acquisition" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600 font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { metric: "Stronger Digital Presence", desc: "More professional and structured presence across digital channels" },
              { metric: "Improved Franchise Positioning", desc: "Franchise opportunity became more visible in digital communication" },
              { metric: "Increased Franchise Awareness", desc: "Digital marketing brought franchise opportunity to broader audience" },
              { metric: "Better Brand Communication", desc: "More consistent way to communicate food identity and franchise opportunity" },
              { metric: "Stronger Lead Generation Foundation", desc: "Clearer opportunities for potential franchise partners to enquire" },
              { metric: "Scalable Growth Foundation", desc: "Digital framework supporting continued franchise expansion" }
            ].map((result, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{result.metric}</h3>
                <p className="text-gray-600 font-body">{result.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Expand Your Franchise?</h2>
          <p className="text-xl mb-6 font-body">
            Your franchise needs more than visibility. It needs a digital strategy that can attract the right audience, build trust, and generate franchise enquiries.
          </p>
          <p className="text-lg mb-8 font-body">
            DigiSevaks Media helps businesses with: <span className="font-semibold">Franchise Website Development | Franchise Branding | SEO & Local SEO | Digital Marketing | Social Media Marketing | Google & Meta Advertising | Franchise Lead Generation | Conversion-Focused Landing Pages</span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body"
          >
            Want to Grow Your Franchise? →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MahaBarachiMisal;