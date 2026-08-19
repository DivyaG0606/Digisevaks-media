import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import caarvanRestaurantLogo from '../../assets/logos/clients/5.jpg';
import SEO from '../../components/SEO';

const CaarvanRestaurant = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Caarvan Restaurant & Bar — Digital Growth Case Study",
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
    "about": "Restaurant marketing agency Pune strategy and local SEO optimization for Caarvan Restaurant & Bar",
    "articleSection": "Case Study",
    "url": "https://digisevaks.com/case-studies/caarvan-restaurant",
    "keywords": "restaurant marketing agency Pune, restaurant local SEO Pune, dining digital growth Pune"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://digisevaks.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Caarvan Restaurant & Bar", "item": "https://digisevaks.com/case-studies/caarvan-restaurant" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="Caarvan Restaurant Case Study | Restaurant Marketing Pune | DigiSevaks"
        description="Explore how DigiSevaks Media enhanced digital visibility and local customer discovery for Caarvan Restaurant & Bar in Pune."
        keywords="restaurant marketing agency Pune, restaurant local SEO Pune, dining digital growth Pune"
        canonical="https://digisevaks.com/case-studies/caarvan-restaurant"
        ogTitle="Caarvan Restaurant Case Study | Restaurant Marketing Pune | DigiSevaks"
        ogDescription="Explore how DigiSevaks Media enhanced digital visibility and local customer discovery for Caarvan Restaurant & Bar in Pune."
        twitterTitle="Caarvan Restaurant Case Study | Restaurant Marketing Pune | DigiSevaks"
        twitterDescription="Explore how DigiSevaks Media enhanced digital visibility and local customer discovery for Caarvan Restaurant & Bar in Pune."
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
              Food & Beverage | Restaurant & Bar | Pune
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
              src={caarvanRestaurantLogo} 
              alt="Caarvan Restaurant & Bar Logo" 
              className="h-24 w-auto mx-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            Caarvan Restaurant & Bar — Digital Growth Case Study
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Building a Strong Digital Presence with a Leading Restaurant Marketing Agency in Pune
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Digital Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Website Development
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              SEO
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Social Media Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Branding
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Restaurant Local SEO Pune
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
              Caarvan Restaurant & Bar wanted to strengthen its digital presence and reach more potential customers through online channels in Pune. In today's competitive restaurant industry, customers increasingly discover restaurants through Google Search, social media, websites, maps, and online recommendations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
              As a specialized <span className="font-semibold text-primary">restaurant marketing agency Pune</span>, DigiSevaks Media created a stronger digital ecosystem for Caarvan Restaurant & Bar that could showcase its food, atmosphere, services, and brand experience while leveraging restaurant local SEO Pune techniques.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mt-6">
              <p className="text-gray-800 font-body font-semibold text-center">
                Visibility → Engagement → Discovery → Enquiries → Customer Visits
              </p>
            </div>
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
            Caarvan Restaurant & Bar needed a digital presence that could effectively compete for customers in a highly competitive food and hospitality market. The key challenges included:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 font-body">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Improving online visibility
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Building a stronger restaurant brand
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Showcasing food and dining experiences
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Reaching relevant local audiences
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Improving customer engagement
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Strengthening search visibility
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Creating a professional website experience
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Encouraging customers to enquire, visit, or connect
            </li>
          </ul>
          <div className="mt-6 p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
            <p className="text-lg text-gray-800 font-body font-semibold">
              The challenge wasn't simply to get more views. The goal was to turn digital visibility into real customer interest.
            </p>
          </div>
        </motion.div>

        {/* Business Objectives */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Business Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Increase Digital Visibility", desc: "Help more potential customers discover Caarvan online." },
              { title: "Strengthen Brand Identity", desc: "Create a consistent and professional digital presence." },
              { title: "Showcase the Restaurant Experience", desc: "Present food, ambience, services, and brand personality effectively." },
              { title: "Improve Local Discovery", desc: "Strengthen visibility for customers searching for restaurants and dining options." },
              { title: "Generate Customer Interest", desc: "Create clear pathways from digital discovery to enquiry and visit." }
            ].map((objective, index) => (
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{objective.title}</h3>
                    <p className="text-gray-600 font-body">{objective.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Digital Growth Strategy */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Digital Growth Strategy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            We created an integrated strategy connecting multiple digital channels.
          </p>

          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Website → SEO & Local Search → Social Media → Digital Marketing → Customer Engagement → Enquiry / Visit
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-body">
            This ensured that the website, social media, search presence, and marketing activities worked together rather than operating as separate channels.
          </p>
        </motion.div>

        {/* Strategy Sections */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-y-8">
            {/* Website Development */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">01. Website Development</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The website was designed to become the central digital destination for Caarvan Restaurant & Bar. Our approach focused on creating a modern, responsive, and visually engaging website that could communicate the restaurant experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2 text-gray-700 font-body">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Modern UI/UX</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Mobile-responsive design</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Restaurant-focused layout</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Menu presentation</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Food and ambience visuals</li>
                </ul>
                <ul className="space-y-2 text-gray-700 font-body">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Service information</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Contact details</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Location information</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Clear calls-to-action</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> SEO-friendly structure</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  Discover → Explore → Trust → Connect → Visit
                </p>
              </div>
            </motion.div>

            {/* Digital Branding */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">02. Digital Branding</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                A restaurant's digital identity needs to communicate its experience before customers even walk through the door. We focused on creating consistent communication around restaurant identity, food experience, ambience, hospitality, menu offerings, brand personality, and promotional messaging.
              </p>
              <p className="text-gray-700 font-body">
                The objective was to create a recognizable digital identity across the website and social media platforms.
              </p>
            </motion.div>

            {/* SEO & Local Search */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">03. SEO & Local Search Strategy</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Local search visibility is particularly important for restaurants in Pune. Customers often search for businesses using terms such as "Restaurant near me", "Best restaurant in Pune", "Family restaurant near me", "Restaurant & bar in Pune", "Best food near me".
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Our SEO strategy focused on helping Caarvan build stronger visibility around relevant local search intent through:
              </p>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> On-page SEO</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Keyword optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Local SEO</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Service-focused content</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Metadata optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Search-friendly website structure</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Location-focused optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Internal linking</li>
              </ul>
            </motion.div>

            {/* Social Media Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">04. Social Media Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                For a restaurant, social media is one of the most powerful ways to communicate the experience behind the brand. The content strategy focused on food photography, signature dishes, restaurant ambience, promotional creatives, customer-focused content, brand storytelling, offers and campaigns, and engagement-focused posts.
              </p>
              <p className="text-gray-700 font-body">
                The objective was to make the brand visually appealing and encourage potential customers to explore the restaurant further.
              </p>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">05. Digital Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Digital marketing was used to expand Caarvan's reach among relevant audiences. Campaign communication focused on brand awareness, restaurant discovery, food promotions, local audience targeting, customer engagement, promotional campaigns, and conversion opportunities.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold">
                  Instead of focusing only on impressions, the strategy was designed around customer intent and business outcomes.
                </p>
              </div>
            </motion.div>

            {/* Customer Conversion Strategy */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">06. Customer Conversion Strategy</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Digital growth is meaningful only when attention can turn into action. We structured the digital journey around multiple conversion opportunities:
              </p>
              <div className="space-y-3">
                {[
                  { step: "Discover", desc: "Customer finds Caarvan through search or social media." },
                  { step: "Explore", desc: "Customer views the website, menu, food, and restaurant experience." },
                  { step: "Consider", desc: "Professional branding and content build trust." },
                  { step: "Connect", desc: "Customer contacts the restaurant or checks location details." },
                  { step: "Visit", desc: "Digital discovery contributes toward an actual restaurant visit." }
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 font-body">{item.step}:</span>
                      <span className="text-gray-700 font-body ml-2">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Digital Growth Ecosystem */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">The Digital Growth Ecosystem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            DigiSevaks Media connected every part of the digital strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Website Development", desc: "Professional digital destination" },
              { title: "SEO", desc: "Organic search visibility" },
              { title: "Local SEO", desc: "Local customer discovery" },
              { title: "Social Media", desc: "Brand engagement and visual storytelling" },
              { title: "Digital Marketing", desc: "Audience reach and awareness" },
              { title: "Branding", desc: "Consistent restaurant identity" },
              { title: "Lead Generation", desc: "Customer enquiries and conversion opportunities" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
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
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { metric: "Stronger Digital Presence", desc: "More professional and structured online identity" },
              { metric: "Improved Brand Presentation", desc: "Website, branding, and social media communication helped present the restaurant experience more effectively" },
              { metric: "Better Customer Discovery", desc: "SEO and local digital strategies created stronger foundation for customers searching for dining options" },
              { metric: "Improved Online Engagement", desc: "Social media and digital content provided more opportunities to engage with potential customers" },
              { metric: "Stronger Customer Journey", desc: "Website and digital channels created clearer path from discovery to restaurant visit" },
              { metric: "Growth-Oriented Digital Ecosystem", desc: "Combination of website development, SEO, social media, and digital marketing established scalable foundation" }
            ].map((result, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
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

        {/* Business Impact */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Business Impact</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
            The project helped Caarvan Restaurant & Bar move from simply having an online presence toward building a customer-focused digital growth ecosystem.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Digital Visibility → Brand Awareness → Customer Interest → Online Engagement → Enquiry / Discovery → Restaurant Visit
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Looking to Grow Your Restaurant Online?</h2>
          <p className="text-xl mb-6 font-body">
            DigiSevaks Media helps restaurants, cafés, bars, QSRs, and food brands build digital strategies focused on visibility, engagement, and customer acquisition.
          </p>
          <p className="text-lg mb-8 font-body">
            Our Restaurant Marketing Services: <span className="font-semibold">Website Development | SEO & Local SEO | Google Business Profile Optimization | Social Media Marketing | Google Ads & Meta Ads | Branding & Creative Design | Content Marketing | Lead Generation</span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body"
          >
            Ready to Grow Your Restaurant Brand? →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CaarvanRestaurant;