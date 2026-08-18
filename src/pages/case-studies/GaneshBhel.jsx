import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ganeshBhelLogo from '../../assets/logos/clients/2.jpg';
import SEO from '../../components/SEO';

const GaneshBhel = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ganesh Bhel — Building a Digital Franchise Growth Engine",
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
    "about": "Food franchise marketing agency Pune strategy for street food franchise digital growth and expansion",
    "articleSection": "Case Study",
    "url": "https://digisevaks.com/case-studies/ganesh-bhel",
    "keywords": "food franchise marketing agency Pune, street food franchise digital growth, franchise expansion Pune"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://digisevaks.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Ganesh Bhel", "item": "https://digisevaks.com/case-studies/ganesh-bhel" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="Ganesh Bhel Case Study | Food Franchise Marketing Pune | DigiSevaks"
        description="Discover how DigiSevaks Media empowered iconic street food brand Ganesh Bhel with digital franchise marketing and brand expansion strategies in Pune."
        keywords="food franchise marketing agency Pune, street food franchise digital growth, franchise expansion Pune"
        canonical="https://digisevaks.com/case-studies/ganesh-bhel"
        ogTitle="Ganesh Bhel Case Study | Food Franchise Marketing Pune | DigiSevaks"
        ogDescription="Discover how DigiSevaks Media empowered iconic street food brand Ganesh Bhel with digital franchise marketing and brand expansion strategies in Pune."
        twitterTitle="Ganesh Bhel Case Study | Food Franchise Marketing Pune | DigiSevaks"
        twitterDescription="Discover how DigiSevaks Media empowered iconic street food brand Ganesh Bhel with digital franchise marketing and brand expansion strategies in Pune."
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
              Food & Beverage | Franchise | Pune
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
              src={ganeshBhelLogo} 
              alt="Ganesh Bhel Logo" 
              className="h-24 w-auto mx-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            Ganesh Bhel — Building a Digital Franchise Growth Engine
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Digital Transformation & Street Food Franchise Digital Growth in Pune
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Website Development
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              SEO
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Digital Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Franchise Lead Generation
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Branding
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Social Media Marketing
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
              Ganesh Bhel is a renowned food brand known for its authentic Indian street food, particularly bhel puri and chaat items. With ambitions to expand through franchising, the brand needed a stronger digital ecosystem to present its franchise opportunity professionally and attract potential franchise partners.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              DigiSevaks Media, as a specialized <span className="font-semibold text-primary">food franchise marketing agency Pune</span>, partnered with Ganesh Bhel to build a conversion-focused digital presence designed around franchise acquisition and street food franchise digital growth. The objective was to create a digital platform that could actively contribute to franchise lead generation while showcasing the brand's rich culinary heritage.
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
            Ganesh Bhel had strong brand recognition locally but needed to scale this recognition through a structured franchise approach. The key challenges included:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 font-body">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Limited digital visibility for the franchise opportunity
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Need for a more professional online brand presence
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Difficulty communicating the franchise value proposition
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Need to attract potential franchise investors
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Need for a streamlined enquiry journey
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Requirement for consistent branding across digital channels
            </li>
          </ul>
          <div className="mt-6 p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
            <p className="text-lg text-gray-800 font-body font-semibold">
              The business needed a strategy that connected brand heritage with modern franchise growth objectives.
            </p>
          </div>
        </motion.div>

        {/* Our Objective */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Objective</h2>
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white mb-8 shadow-md">
            <p className="text-2xl font-bold mb-4 font-heading">
              Generate more qualified franchise enquiries while strengthening Ganesh Bhel's digital brand presence.
            </p>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
            Our strategy focused on five key goals:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Strengthen Brand Presence", desc: "Create a professional and consistent digital identity." },
              { title: "Build Franchise Credibility", desc: "Present Ganesh Bhel as a structured and attractive franchise opportunity." },
              { title: "Increase Online Visibility", desc: "Improve discoverability through SEO and digital marketing." },
              { title: "Improve Conversion Opportunities", desc: "Create clear pathways for interested prospects to enquire." },
              { title: "Support Franchise Expansion", desc: "Build a scalable digital foundation for continued franchise growth." }
            ].map((goal, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{goal.title}</h3>
                    <p className="text-gray-600 font-body">{goal.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            DigiSevaks Media developed an integrated digital strategy combining technology, search visibility, branding, content, and lead generation specifically tailored for Ganesh Bhel's franchise expansion.
          </p>

          {/* Strategy Sections */}
          <div className="space-y-8">
            {/* Website Development */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">01. Website Development</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                We designed and developed a professional website focused on both brand communication and conversion. The website strategy included:
              </p>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Modern and responsive design</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Mobile-first user experience</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Franchise-focused content structure</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Clear calls-to-action</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Lead enquiry opportunities</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Conversion-focused page layouts</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> SEO-friendly architecture</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Strong brand presentation</li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-800 font-body font-semibold">
                  Customer Journey: Discover → Explore → Understand → Trust → Enquire
                </p>
              </div>
            </motion.div>

            {/* SEO */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">02. SEO & Search Visibility</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                To improve Ganesh Bhel's digital discoverability, we implemented an SEO-focused approach:
              </p>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> On-page SEO</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Keyword optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Website structure optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Search-focused content</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Local visibility improvements</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Metadata optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Search-friendly content architecture</li>
              </ul>
            </motion.div>

            {/* Franchise Lead Generation */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">03. Franchise Lead Generation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Franchise lead generation was at the heart of the project. We structured the digital experience around prospect conversion:
              </p>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Franchise-focused landing sections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Strong calls-to-action</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Clear franchise messaging</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Lead enquiry forms</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Conversion-focused content</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Digital campaigns targeting relevant audiences</li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-800 font-body font-semibold text-center">
                  Digital Awareness → Brand Discovery → Franchise Interest → Website Visit → Franchise Enquiry
                </p>
              </div>
            </motion.div>

            {/* Branding & Social Media */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">04. Branding & Social Media</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                A consistent visual identity was essential for establishing trust. We supported Ganesh Bhel with strategic branding and social media communication:
              </p>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Brand recognition</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Visual consistency</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Audience engagement</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Food brand presentation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Franchise promotion</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Digital credibility</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { metric: "More Franchise Leads", desc: "Increased interest and enquiries from potential franchise partners" },
              { metric: "Stronger Online Presence", desc: "More professional and structured digital presence" },
              { metric: "Improved Brand Visibility", desc: "Expanded digital reach through SEO, digital marketing, and social media" },
              { metric: "Better Franchise Communication", desc: "Clearer and more professional franchise opportunity presentation" },
              { metric: "Stronger Conversion Journey", desc: "Digital experience structured to guide visitors toward enquiries" }
            ].map((result, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
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
          
          <div className="bg-white rounded-2xl p-6 border-l-4 border-primary shadow-sm">
            <p className="text-lg text-gray-800 font-body">
              <span className="font-bold">Primary business outcome:</span> Increased franchise lead generation and a stronger digital foundation for Ganesh Bhel's expansion.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Looking to Scale Your Franchise?</h2>
          <p className="text-xl mb-6 font-body">
            Whether you're launching your first franchise location or expanding across multiple cities, your digital presence should work as a lead-generation engine for your business.
          </p>
          <p className="text-lg mb-8 font-body">
            DigiSevaks Media can help you with: <span className="font-semibold">Website Development | SEO | Digital Marketing | Branding | Social Media | Franchise Lead Generation</span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body"
          >
            Let's Talk About Your Business →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GaneshBhel;