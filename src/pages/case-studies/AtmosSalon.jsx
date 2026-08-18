import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import atmosSalonLogo from '../../assets/logos/clients/15.jpg';
import SEO from '../../components/SEO';

const AtmosSalon = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Atmos Salon — Digital Marketing & Website Development",
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
    "about": "Salon digital marketing agency Pune strategy, website development, and local SEO for Atmos Salon",
    "articleSection": "Case Study",
    "url": "https://digisevaks.com/case-studies/atmos-salon",
    "keywords": "salon digital marketing agency Pune, salon website development Pune, salon SEO Pune"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digisevaks.com" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://digisevaks.com/case-studies" },
      { "@type": "ListItem", "position": 3, "name": "Atmos Salon", "item": "https://digisevaks.com/case-studies/atmos-salon" }
    ]
  };

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="Atmos Salon Case Study | Salon Digital Marketing & SEO Pune | DigiSevaks"
        description="See how DigiSevaks Media built a modern website and digital marketing strategy for Atmos Salon to attract and retain salon clients in Pune."
        keywords="salon digital marketing agency Pune, salon website development Pune, salon SEO Pune"
        canonical="https://digisevaks.com/case-studies/atmos-salon"
        ogTitle="Atmos Salon Case Study | Salon Digital Marketing & SEO Pune | DigiSevaks"
        ogDescription="See how DigiSevaks Media built a modern website and digital marketing strategy for Atmos Salon to attract and retain salon clients in Pune."
        twitterTitle="Atmos Salon Case Study | Salon Digital Marketing & SEO Pune | DigiSevaks"
        twitterDescription="See how DigiSevaks Media built a modern website and digital marketing strategy for Atmos Salon to attract and retain salon clients in Pune."
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
              Beauty & Wellness | Unisex Salon | Pune
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
              src={atmosSalonLogo} 
              alt="Atmos Salon Logo" 
              className="h-24 w-auto mx-auto object-contain bg-white rounded-2xl p-4 shadow-sm"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
            Atmos Salon — Digital Marketing & Website Development
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Building a Premium Digital Presence with a Leading Salon Digital Marketing Agency in Pune
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
              Digital Marketing
            </span>
            <span className="px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-sm font-semibold text-gray-700 font-body">
              Salon SEO Pune
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
              Atmos Salon is a modern unisex salon offering professional hair, beauty, skincare, grooming, and advanced salon services for men and women in Pune. With a broad service portfolio and a growing digital audience, Atmos Salon needed a professional website and stronger digital marketing strategy to showcase its services, build brand credibility, and make it easier for potential customers to discover and connect with the salon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              As a dedicated <span className="font-semibold text-primary">salon digital marketing agency Pune</span>, DigiSevaks Media worked on creating a professional digital ecosystem combining salon website development Pune, digital marketing, branding, and customer-focused communication. The goal was simple: Turn Digital Visibility into Customer Engagement and Business Growth.
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
            In the competitive salon and beauty industry in Pune, having quality services is only one part of the equation. Atmos Salon needed a digital presence that could effectively communicate:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 font-body">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Salon services
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Hair and beauty expertise
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Premium treatments
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Brand identity
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Customer experience
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Salon location and contact information
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Appointment opportunities
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Academy offerings
            </li>
          </ul>
          <div className="mt-6 p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm">
            <p className="text-lg text-gray-800 font-body font-semibold">
              The digital experience needed to look professional while also making it easy for potential customers to understand the services and take action.
            </p>
          </div>
        </motion.div>

        {/* Project Objectives */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Project Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Build a Professional Website", desc: "Create a modern website that represents the quality and positioning of Atmos Salon." },
              { title: "Strengthen Digital Presence", desc: "Create a consistent and recognizable online identity across digital platforms." },
              { title: "Improve Service Visibility", desc: "Present the salon's extensive range of hair, beauty, skincare, and grooming services clearly." },
              { title: "Increase Customer Engagement", desc: "Make it easier for potential customers to discover the salon and connect with the business." },
              { title: "Support Lead Generation", desc: "Create clear pathways for appointment and service enquiries." },
              { title: "Strengthen Brand Positioning", desc: "Position Atmos Salon as a professional destination for modern beauty and grooming services." }
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

        {/* Our Digital Strategy */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Digital Strategy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-body">
            We approached the project through an integrated digital growth framework:
          </p>

          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <p className="text-gray-800 font-body font-semibold text-center">
              Website Development → SEO & Search Visibility → Digital Marketing → Social Media & Branding → Customer Engagement → Enquiries & Appointments
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-body">
            Instead of treating the website and marketing channels separately, we built them around one common objective: <span className="font-semibold text-primary">business growth.</span>
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
                The website became the central digital platform for Atmos Salon. We focused on creating a modern, responsive, and easy-to-navigate experience that could communicate the salon's services and brand value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2 text-gray-700 font-body">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Modern UI/UX</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Responsive design</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Mobile-friendly experience</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Service-focused navigation</li>
                </ul>
                <ul className="space-y-2 text-gray-700 font-body">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Clear calls-to-action</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Contact and enquiry opportunities</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Brand-focused content</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span> Search-friendly structure</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold text-center">
                  Discover → Explore Services → Build Trust → Enquire → Visit
                </p>
              </div>
            </motion.div>

            {/* Service Presentation */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">02. Service Presentation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                A salon website needs to communicate its services quickly and clearly. We organized the digital experience around major service categories:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Hair Styling & Haircuts",
                  "Hair Colouring",
                  "Hair Treatments",
                  "Skin & Facial Treatments",
                  "Manicure & Pedicure",
                  "Waxing & Threading",
                  "Beauty & Grooming",
                  "Advanced Hair Treatments"
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-semibold text-gray-700 font-body">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SEO & Digital Visibility */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">03. SEO & Digital Visibility</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                The website and digital strategy were structured to improve the brand's discoverability across search engines through specialized salon SEO Pune techniques:
              </p>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Relevant keyword targeting</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> On-page optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Service-focused content</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Local search visibility</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Search-friendly page structures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Metadata optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Content optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span> Internal linking opportunities</li>
              </ul>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">04. Digital Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Digital marketing was used to increase brand awareness and bring Atmos Salon in front of relevant audiences. The strategy focused on brand awareness, service promotion, customer engagement, promotional communication, local audience targeting, digital brand positioning, and conversion-focused campaigns.
              </p>
            </motion.div>

            {/* Social Media Marketing */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">05. Social Media Marketing</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Social media played an important role in showcasing the visual side of the salon industry. The content strategy focused on hair transformations, beauty services, salon experiences, service promotions, professional creatives, brand communication, customer-focused content, and engagement-driven posts.
              </p>
            </motion.div>

            {/* Local Digital Presence */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">06. Local Digital Presence</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                For a salon, local visibility is critical. Customers typically search for salons based on Location + Service + Intent. The digital strategy was therefore structured to support local discovery and customer intent.
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-800 font-body font-semibold mb-2">Example search queries:</p>
                <ul className="space-y-1 text-gray-700 font-body">
                  <li>• Unisex salon near me</li>
                  <li>• Hair salon in Pune</li>
                  <li>• Hair colouring in Pune</li>
                  <li>• Beauty salon near me</li>
                  <li>• Facial services in Pune</li>
                </ul>
              </div>
            </motion.div>

            {/* Conversion-Focused Experience */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">07. Conversion-Focused Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                Traffic alone isn't enough. The website was designed to encourage visitors to take action through clear conversion opportunities.
              </p>
              <div className="space-y-3">
                {[
                  { step: "Search", desc: "Customer discovers Atmos Salon." },
                  { step: "Explore", desc: "Customer checks services and treatments." },
                  { step: "Trust", desc: "Professional website and brand presentation build confidence." },
                  { step: "Connect", desc: "Customer reaches out for more information." },
                  { step: "Book / Visit", desc: "Customer takes the next step toward a salon appointment." }
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
              { metric: "Professional Digital Presence", desc: "Modern digital platform capable of representing services and brand positioning" },
              { metric: "Improved Service Visibility", desc: "Structured way to communicate the salon's diverse service offerings" },
              { metric: "Stronger Brand Presentation", desc: "Consistent digital communication reinforced professional and premium brand identity" },
              { metric: "Improved Customer Journey", desc: "Visitors could more easily discover services, understand the offering, and connect" },
              { metric: "Enhanced Local Visibility Strategy", desc: "SEO and local digital marketing created stronger foundation for reaching potential customers" },
              { metric: "Growth-Oriented Digital Ecosystem", desc: "Platform supporting customer acquisition and brand growth" }
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
          <h2 className="text-3xl font-bold mb-4 font-heading">Looking to Grow Your Salon Online?</h2>
          <p className="text-xl mb-6 font-body">
            Whether you operate a unisex salon, beauty salon, spa, academy, or multi-location salon brand, DigiSevaks Media can help you build a digital presence designed around visibility and customer acquisition.
          </p>
          <p className="text-lg mb-8 font-body">
            Our Services: <span className="font-semibold">Website Development | SEO & Local SEO | Digital Marketing | Social Media Marketing | Google Ads & Meta Ads | Branding & Creative Design | Lead Generation | Conversion-Focused Websites</span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body"
          >
            Ready to Grow Your Salon Brand? →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AtmosSalon;