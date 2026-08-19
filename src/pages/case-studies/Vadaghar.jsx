import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import vadagharLogo from '../../assets/logos/clients/7.jpg';
import SEO from '../../components/SEO';

const Vadaghar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vadaghar — Franchise Growth & Digital Marketing Case Study",
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
    "about": "QSR franchise marketing Pune strategy for Vadaghar Vada Pav franchise expansion",
    "articleSection": "Case Study",
    "url": "https://digisevaks.com/case-studies/vadaghar",
    "keywords": "QSR franchise marketing Pune, Vada Pav franchise digital strategy, QSR lead generation Pune"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://digisevaks.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Vadaghar", "item": "https://digisevaks.com/case-studies/vadaghar" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="Vadaghar Case Study | QSR Franchise Marketing Pune | DigiSevaks"
        description="Discover how DigiSevaks Media established a scalable digital franchise marketing foundation for Vadaghar Vada Pav in Pune."
        keywords="QSR franchise marketing Pune, Vada Pav franchise digital strategy, QSR lead generation Pune"
        canonical="https://digisevaks.com/case-studies/vadaghar"
        ogTitle="Vadaghar Case Study | QSR Franchise Marketing Pune | DigiSevaks"
        ogDescription="Discover how DigiSevaks Media established a scalable digital franchise marketing foundation for Vadaghar Vada Pav in Pune."
        twitterTitle="Vadaghar Case Study | QSR Franchise Marketing Pune | DigiSevaks"
        twitterDescription="Discover how DigiSevaks Media established a scalable digital franchise marketing foundation for Vadaghar Vada Pav in Pune."
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
              Food & Beverage | QSR Franchise | Pune
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
              src={vadagharLogo} 
              alt="Vadaghar Logo" 
              className="h-24 w-auto mx-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            Vadaghar — Franchise Growth & Digital Marketing Case Study
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Building a Digital Foundation with a Leading QSR Franchise Marketing Agency in Pune
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
              Franchise Promotion
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Social Media Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Branding
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Lead Generation
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Digital Strategy
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
              Vadaghar is a food brand based in Pune focused on fresh Vada Pav, traditional snacks, and farsan. The brand differentiates itself through freshly prepared food, authentic recipes, hygiene, and its distinctive in-house Vada Pav masala.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
              As Vadaghar looked toward franchise expansion, the brand needed a digital strategy that could communicate its identity while creating awareness around its franchise opportunity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              As a dedicated <span className="font-semibold text-primary">QSR franchise marketing Pune</span> partner, DigiSevaks Media developed a franchise-focused digital growth strategy designed to strengthen Vadaghar's online presence, reach aspiring entrepreneurs, and generate interest in the franchise opportunity.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mt-6">
              <p className="text-gray-800 font-body font-semibold text-center">
                Build Brand Visibility → Attract Franchise Partners → Generate Franchise Enquiries
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
            Vadaghar needed to establish a stronger digital presence while communicating its franchise opportunity to the right audience in Pune and across Maharashtra. The key challenges were:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 font-body">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Building awareness of the Vadaghar franchise
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Reaching aspiring entrepreneurs
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Strengthening the brand's digital identity
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Communicating the franchise opportunity clearly
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Creating professional franchise marketing creatives
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Generating relevant franchise enquiries
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Building a scalable foundation for future expansion
            </li>
          </ul>
          <div className="mt-6 p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
            <p className="text-lg text-gray-800 font-body font-semibold">
              The challenge was to position Vadaghar not only as a Vada Pav brand, but also as a potential business opportunity for franchise partners.
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
              { title: "Franchise Awareness", desc: "Increase awareness of Vadaghar's franchise opportunity." },
              { title: "Brand Positioning", desc: "Strengthen Vadaghar as a recognizable and trustworthy food brand." },
              { title: "Entrepreneur Reach", desc: "Reach people interested in food businesses and franchise opportunities." },
              { title: "Lead Generation", desc: "Create opportunities for interested prospects to enquire." },
              { title: "Franchise Growth", desc: "Develop a digital marketing foundation that can support expansion into new markets." }
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

        {/* Franchise Growth Strategy */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Franchise Growth Strategy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            We built a digital journey designed around the franchise prospect.
          </p>

          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Brand Awareness → Franchise Discovery → Interest → Trust → Franchise Enquiry → Business Discussion
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-body">
            The strategy connected Vadaghar's food identity with its franchise opportunity.
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
            {/* Brand Positioning */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">01. Brand Positioning</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Vadaghar's brand identity was built around its core strengths:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2 font-heading">Freshness</h4>
                  <p className="text-gray-700 font-body">Food prepared fresh at the store</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2 font-heading">Authentic Taste</h4>
                  <p className="text-gray-700 font-body">Traditional recipes and in-house Vada Pav masala</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2 font-heading">Hygiene</h4>
                  <p className="text-gray-700 font-body">Strong focus on cleanliness and food quality</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-900 mb-2 font-heading">Consistency</h4>
                  <p className="text-gray-700 font-body">Standardized approach to delivering the Vadaghar experience</p>
                </div>
              </div>
              <p className="text-gray-700 font-body">
                These brand attributes were important in creating trust not only with customers but also with potential franchise partners.
              </p>
            </motion.div>

            {/* Franchise Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">02. Franchise Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                We developed franchise-focused communication designed to introduce Vadaghar as a business opportunity. The strategy focused on franchise opportunity promotion, brand storytelling, Vada Pav product appeal, business opportunity messaging, franchise-focused creatives, entrepreneur-focused content, and strong calls-to-action.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  "Why Vadaghar?"
                </p>
              </div>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">03. Digital Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The digital marketing strategy was designed to increase awareness among audiences interested in food businesses, Vada Pav / QSR concepts, entrepreneurship, franchise opportunities, small business ownership, and food & beverage investment.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold">
                  The focus was on reaching potential business partners, rather than only consumers.
                </p>
              </div>
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
                Social media was used to communicate both the food experience and franchise opportunity. Content focused on Vadapav visuals, signature food products, brand storytelling, fresh preparation, hygiene and quality, franchise promotional creatives, entrepreneur-focused messaging, and brand awareness.
              </p>
              <p className="text-gray-700 font-body">
                The aim was to create a consistent digital identity that could appeal to both customers and franchise prospects.
              </p>
            </motion.div>

            {/* Franchise Lead Generation */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">05. Franchise Lead Generation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Lead generation was a core component of the strategy. The journey was structured around:
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  Reach → Interest → Trust → Enquiry
                </p>
              </div>
              <p className="text-gray-700 font-body mt-4">
                Potential franchise partners were guided toward clear enquiry opportunities where they could connect with the brand and explore the franchise proposition. The objective was to generate relevant franchise interest, not simply maximize enquiry volume.
              </p>
            </motion.div>

            {/* Creative & Brand Communication */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">06. Creative & Brand Communication</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Vadaghar's distinctive food identity provided a strong foundation for visual marketing. The creative strategy focused on Vada Pav product presentation, brand identity, franchise opportunity, food quality, freshness, professional communication, and entrepreneur-focused creatives.
              </p>
              <p className="text-gray-700 font-body">
                This helped create a consistent connection between Vadaghar's consumer brand and franchise proposition.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Digital Franchise Growth Ecosystem */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Digital Franchise Growth Ecosystem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            DigiSevaks Media connected multiple marketing channels into one growth strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Branding", desc: "Build recognition and trust" },
              { title: "Social Media", desc: "Create engagement and awareness" },
              { title: "Digital Marketing", desc: "Reach relevant audiences" },
              { title: "Franchise Promotion", desc: "Communicate the business opportunity" },
              { title: "Lead Generation", desc: "Capture interested prospects" },
              { title: "Conversion Strategy", desc: "Move prospects toward franchise discussions" }
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
              { metric: "Stronger Franchise Awareness", desc: "Franchise opportunity gained greater visibility among relevant audiences" },
              { metric: "Improved Brand Positioning", desc: "Vadaghar positioned as both Vada Pav brand and franchise business opportunity" },
              { metric: "Stronger Digital Presence", desc: "Consistent branding and digital communication improved overall online presentation" },
              { metric: "Franchise Enquiry Opportunities", desc: "Strategy created clearer pathways for interested entrepreneurs to connect with Vadaghar" },
              { metric: "Relevant Audience Reach", desc: "Marketing communication structured around audiences interested in entrepreneurship and food businesses" },
              { metric: "Scalable Franchise Marketing Foundation", desc: "Digital framework can support Vadaghar as it expands into additional markets" }
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
            The project helped Vadaghar move from conventional food promotion toward a more focused franchise growth strategy.
          </p>
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Vada Pav Brand → Digital Brand Presence → Franchise Opportunity → Entrepreneur Interest → Franchise Enquiry
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed font-body">
            This created a stronger digital foundation for Vadaghar's franchise ambitions.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Expand Your Franchise?</h2>
          <p className="text-xl mb-6 font-body">
            DigiSevaks Media helps food brands build digital strategies designed to attract the right franchise partners.
          </p>
          <p className="text-lg mb-8 font-body">
            Our Franchise Growth Services: <span className="font-semibold">Franchise Website Development | Franchise Marketing | SEO & Local SEO | Social Media Marketing | Google & Meta Ads | Franchise Lead Generation | Landing Page Development | Branding & Creative Design | Digital Marketing Strategy</span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body"
          >
            Ready to Expand Your Franchise? →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Vadaghar;