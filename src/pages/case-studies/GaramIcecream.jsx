import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import garamIcecreamLogo from '../../assets/logos/clients/4.jpg';
import SEO from '../../components/SEO';

const GaramIcecream = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Garam Icecream — Franchise Growth & Lead Generation",
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
    "about": "Dessert franchise marketing Pune strategy for ice cream brand digital expansion",
    "articleSection": "Case Study",
    "url": "https://digisevaks.com/case-studies/garam-icecream",
    "keywords": "dessert franchise marketing Pune, ice cream brand digital strategy, franchise lead generation Pune"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://digisevaks.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Garam Icecream", "item": "https://digisevaks.com/case-studies/garam-icecream" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="Garam Icecream Case Study | Dessert Franchise Marketing Pune | DigiSevaks"
        description="See how DigiSevaks Media helped dessert brand Garam Icecream build a digital franchise marketing engine across Maharashtra."
        keywords="dessert franchise marketing Pune, ice cream brand digital strategy, franchise lead generation Pune"
        canonical="https://digisevaks.com/case-studies/garam-icecream"
        ogTitle="Garam Icecream Case Study | Dessert Franchise Marketing Pune | DigiSevaks"
        ogDescription="See how DigiSevaks Media helped dessert brand Garam Icecream build a digital franchise marketing engine across Maharashtra."
        twitterTitle="Garam Icecream Case Study | Dessert Franchise Marketing Pune | DigiSevaks"
        twitterDescription="See how DigiSevaks Media helped dessert brand Garam Icecream build a digital franchise marketing engine across Maharashtra."
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
              Food & Beverage | Dessert Franchise | Pune
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
              src={garamIcecreamLogo} 
              alt="Garam Icecream Logo" 
              className="h-24 w-auto mx-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            Garam Icecream — Franchise Growth & Lead Generation
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Building a Digital Growth Strategy for an Ice Cream Brand Digital Strategy in Pune
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
              Lead Generation
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Social Media Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Branding
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Franchise Promotion
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
              Garam Icecream is a dessert-focused brand built around ice cream, chocolate waffles, and an experience-led food concept in Pune. As the brand looked to expand through franchising, it needed a digital strategy that could attract potential franchise partners, communicate the business opportunity, and build stronger brand visibility.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              DigiSevaks Media developed a <span className="font-semibold text-primary">dessert franchise marketing Pune</span> growth strategy designed to connect Garam Icecream with aspiring entrepreneurs and potential franchise investors.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mt-6">
              <p className="text-gray-800 font-body font-semibold text-center">
                Increase Brand Visibility → Create Franchise Interest → Generate Franchise Enquiries
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
            For a growing food and dessert brand, franchise expansion requires more than customer-focused marketing. Garam Icecream needed to communicate its franchise opportunity to a separate audience: Entrepreneurs. Investors. Business Owners. Franchise Seekers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
            The key challenges included:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 font-body">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Increasing awareness of the franchise opportunity
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Reaching potential franchise partners
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Building brand credibility
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Communicating the franchise proposition clearly
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Creating attractive franchise-focused content
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Generating enquiries from interested prospects
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Building a scalable digital marketing foundation
            </li>
          </ul>
          <div className="mt-6 p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
            <p className="text-lg text-gray-800 font-body font-semibold">
              The challenge was to transform the brand's digital presence into a franchise growth channel.
            </p>
          </div>
        </motion.div>

        {/* Business Objective */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">The Business Objective</h2>
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white mb-8 shadow-md">
            <p className="text-2xl font-bold mb-4 font-heading">
              Generate more interest and enquiries for the Garam Icecream franchise opportunity.
            </p>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-body">
            Our strategy focused on:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Franchise Awareness", desc: "Increase visibility of the franchise opportunity." },
              { title: "Brand Positioning", desc: "Present Garam Icecream as an attractive dessert business opportunity." },
              { title: "Targeted Audience Reach", desc: "Reach aspiring entrepreneurs and potential franchise investors." },
              { title: "Lead Generation", desc: "Create opportunities for interested prospects to submit enquiries." },
              { title: "Franchise Growth", desc: "Build a repeatable digital framework that can support expansion into new markets." }
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
            DigiSevaks Media created a digital funnel specifically designed around franchise acquisition.
          </p>

          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Brand Awareness → Franchise Discovery → Interest → Consideration → Franchise Enquiry → Business Discussion
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-body">
            Every stage was designed to move a potential franchise partner closer to taking action.
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
            {/* Franchise Brand Positioning */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">01. Franchise Brand Positioning</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The first step was to communicate Garam Icecream as more than a dessert destination. We positioned the brand around three important pillars:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-gray-900 mb-2 font-heading">Product</h4>
                  <p className="text-gray-700 font-body">Ice cream and chocolate waffle experience</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-gray-900 mb-2 font-heading">Brand</h4>
                  <p className="text-gray-700 font-body">A memorable and visually appealing dessert concept</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-gray-900 mb-2 font-heading">Opportunity</h4>
                  <p className="text-gray-700 font-body">A franchise model designed for entrepreneurs</p>
                </div>
              </div>
              <p className="text-gray-700 font-body">
                This helped create a stronger connection between the consumer brand and the franchise proposition.
              </p>
            </motion.div>

            {/* Franchise-Focused Digital Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">02. Franchise-Focused Digital Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The marketing strategy was designed to reach people with potential interest in starting or expanding a food business. The target audience included:
              </p>
              <ul className="space-y-2 text-gray-700 font-body mb-4">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Aspiring entrepreneurs</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> First-time business owners</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Food business investors</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Existing restaurant owners</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Dessert business enthusiasts</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Franchise seekers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Entrepreneurs looking for new business opportunities</li>
              </ul>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold">
                  The objective was not simply to generate attention. The objective was to generate business intent.
                </p>
              </div>
            </motion.div>

            {/* Franchise Promotion */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">03. Franchise Promotion</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                We developed franchise-focused communication designed to capture attention and create curiosity. The content strategy focused on franchise opportunity promotion, brand story, dessert product appeal, business opportunity messaging, franchise-focused creatives, entrepreneur-oriented content, and strong calls-to-action.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  "Why should I consider Garam Icecream as a franchise opportunity?"
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
                Social media provided a powerful platform to showcase the visual appeal of Garam Icecream while communicating the franchise opportunity. Content focused on ice cream visuals, chocolate waffles, product presentation, brand storytelling, franchise promotional creatives, business opportunity content, engagement-focused posts, and brand awareness.
              </p>
              <p className="text-gray-700 font-body">
                The strategy connected product appeal with franchise awareness, helping the brand communicate with both customers and potential business partners.
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
                Lead generation was the central focus of the project. The digital journey was structured around:
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  Reach → Interest → Trust → Enquiry
                </p>
              </div>
              <p className="text-gray-700 font-body mt-4">
                Potential franchise partners were encouraged to take the next step through clear franchise-focused calls-to-action and enquiry opportunities. The goal was to attract relevant franchise prospects, rather than simply generating high volumes of general traffic.
              </p>
            </motion.div>

            {/* Branding & Creative Communication */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">06. Branding & Creative Communication</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                A franchise brand needs a consistent identity across every digital touchpoint. DigiSevaks Media focused on creating consistent communication across Social Media + Franchise Creatives + Digital Campaigns + Brand Messaging.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The creative strategy highlighted product experience, brand identity, franchise opportunity, professional presentation, entrepreneur appeal, and expansion potential.
              </p>
              <p className="text-gray-700 font-body">
                This helped create stronger recognition and consistency around the franchise proposition.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">The Digital Franchise Growth Ecosystem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            We connected multiple digital marketing activities into one complete franchise growth system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Branding", desc: "Build recognition and credibility" },
              { title: "Social Media", desc: "Create awareness and engagement" },
              { title: "Digital Marketing", desc: "Reach potential franchise partners" },
              { title: "Franchise Promotion", desc: "Communicate the business opportunity" },
              { title: "Lead Generation", desc: "Capture interested prospects" },
              { title: "Conversion Strategy", desc: "Move prospects toward enquiry and business discussion" }
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
              { metric: "Increased Franchise Awareness", desc: "Franchise opportunity gained greater visibility among relevant digital audiences" },
              { metric: "Stronger Brand Positioning", desc: "Garam Icecream presented as both dessert brand and franchise business opportunity" },
              { metric: "Improved Digital Presence", desc: "Consistent branding and marketing communication strengthened online presence" },
              { metric: "Franchise Lead Opportunities", desc: "Strategy created clearer pathways for interested entrepreneurs to enquire" },
              { metric: "Better Target Audience Reach", desc: "Digital communication focused on audiences interested in entrepreneurship and food franchises" },
              { metric: "Scalable Franchise Marketing Foundation", desc: "Strategy created framework that can be expanded as brand enters new locations" }
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
            The project helped Garam Icecream move from conventional food marketing toward a franchise-focused growth strategy.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Dessert Brand → Digital Brand → Franchise Opportunity → Entrepreneur Interest → Franchise Enquiry
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
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Expand Your Franchise?</h2>
          <p className="text-xl mb-6 font-body">
            Your franchise needs more than advertising. It needs a digital strategy that can Build Awareness → Reach the Right Audience → Create Trust → Generate Franchise Enquiries
          </p>
          <p className="text-lg mb-8 font-body">
            DigiSevaks Media helps franchise brands with: <span className="font-semibold">Franchise Marketing | Franchise Website Development | SEO & Local SEO | Digital Marketing | Social Media Marketing | Google & Meta Ads | Franchise Lead Generation | Franchise Landing Pages | Branding & Creative Design</span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body"
          >
            Ready to Grow Your Franchise? →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GaramIcecream;