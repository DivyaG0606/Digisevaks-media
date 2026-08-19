import { motion } from 'framer-motion';
import { useState } from 'react';
import ownerPhoto from '../assets/logos/company/owner_photo.jpeg';
import SEO from '../components/SEO';

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is DigiSevaks Media?",
      answer: "DigiSevaks Media is a results-driven digital marketing agency based in Pune, Maharashtra, helping startups, SMEs, franchises, and established brands grow their online presence through SEO, website development, Google Ads, and performance marketing."
    },
    {
      question: "Where is DigiSevaks Media located?",
      answer: "Our Head Office is in Karve Nagar, Pune. We also have offices in Chhatrapati Sambhajinagar, Pimpri-Chinchwad (PCMC), Nagpur, and Nashik, allowing us to serve clients across Maharashtra."
    },
    {
      question: "What core services does DigiSevaks Media offer?",
      answer: "We offer SEO, website development, Google Ads and Meta Ads management, performance marketing, and lead generation — helping businesses increase visibility, attract qualified leads, and grow revenue."
    },
    {
      question: "Why should I choose DigiSevaks Media for my business?",
      answer: "We focus on measurable outcomes, not vanity metrics — real leads, calls, and revenue growth. With 5+ years of experience and 150+ clients served, we combine data-driven strategy with transparent, honest reporting on every campaign."
    },
    {
      question: "What sets DigiSevaks Media apart from other agencies?",
      answer: "Our local presence across five Maharashtra cities gives us direct market knowledge most agencies don't have. We pair that with continuous campaign testing, clear cost-per-acquisition targets, and a dedicated point of contact for every client — not a rotating support queue."
    },
    {
      question: "Do you work with businesses outside Pune?",
      answer: "Yes. With offices in Pune, Chhatrapati Sambhajinagar, Pimpri-Chinchwad, Nagpur, and Nashik, we actively serve businesses across Maharashtra — and support clients beyond the state through remote digital marketing services."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const SectionDivider = () => (
    <div className="my-16 flex items-center justify-center">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="About Us — Empowering Businesses with Digital Growth in Pune | DigiSevaks Media"
        description="At DigiSevaks Media, we are a results-driven digital marketing agency in Pune providing SEO, web development, and performance marketing strategies for startups and SMEs across Maharashtra."
        keywords="digital marketing company pune, website development company in pune, digisevaks marketing agency karve nagar, karve nagar digital marketing, who is DigiSevaks Media, DigiSevaks Media Pune location, digital marketing agency Karve Nagar, digital marketing agency across Maharashtra, best digital marketing agency Pune, digital marketing agency in Pune, digital marketing company Maharashtra, SEO and performance marketing agency Pune, data-driven digital marketing strategies, digital marketing agency for startups and SMEs, AI-driven digital marketing solutions"
        canonical="https://digisevaks.com/about"
        ogTitle="About Us — Empowering Businesses with Digital Growth in Pune | DigiSevaks Media"
        ogDescription="Discover how DigiSevaks Media drives measurable digital marketing results for businesses in Pune and across Maharashtra."
        twitterTitle="About Us — Empowering Businesses with Digital Growth in Pune | DigiSevaks Media"
        twitterDescription="Discover how DigiSevaks Media drives measurable digital marketing results for businesses in Pune and across Maharashtra."
        schema={faqSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (H1) */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-heading leading-tight">
            About Us — <span className="text-primary">Empowering Businesses</span> with Digital Growth in Pune
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Strategic, data-driven digital marketing solutions engineered for startups, SMEs, and growing brands.
          </p>
        </motion.div>

        {/* 1. About Us Section with Image */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 font-heading">
                Who We Are & What We Do
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-body">
                At DigiSevaks Media, we are a results-driven <strong className="text-gray-900">digital marketing agency in Pune</strong> dedicated to helping businesses grow through data-driven strategies, modern technology, and measurable execution. We partner with startups, local businesses, SMEs, and established brands across Maharashtra to build a powerful online presence, generate quality leads, and maximize return on investment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-body">
                Our expertise spans Search Engine Optimization (SEO), Website Development, Google Ads, Meta Ads, Performance Marketing, and Lead Generation — helping businesses achieve sustainable digital growth in a competitive market.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-body">
                We believe every business has unique goals. That's why we build customized digital marketing strategies rather than one-size-fits-all packages — strategies designed to increase brand visibility, generate qualified leads, and convert visitors into loyal customers.
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center items-start lg:items-center">
              <div className="max-w-md w-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-6 border border-primary/20 shadow-xl text-center">
                <img 
                  src={ownerPhoto} 
                  alt="DigiSevaks Media Leadership" 
                  className="w-full h-auto object-cover rounded-2xl shadow-md mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 font-heading">Prabhakar Patil</h3>
                <p className="text-primary font-medium text-lg mt-1 font-body">The CEO And Founder of the DigiSevaks Media Agency</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* HR Divider 1 */}
        <SectionDivider />


        {/* 2. Our Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
              Our <span className="text-primary">Vision</span>
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary-dark" />
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-body text-center font-medium italic">
              "To become one of India's most trusted digital marketing agencies by delivering measurable business growth, exceptional client experiences, and future-ready digital solutions powered by creativity, technology, and AI-driven insights."
            </p>
          </div>
        </motion.section>

        {/* HR Divider 2 */}
        <SectionDivider />

        {/* 3. Our Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 font-body">
              Empowering businesses through focused execution and transparent performance:
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl">
            <ul className="space-y-5 text-lg text-gray-800 font-body">
              {[
                "Help businesses build a strong digital presence",
                "Deliver measurable growth through data-driven marketing strategies",
                "Build high-performing websites that convert visitors into customers",
                "Maximize ROI through SEO, paid advertising, and performance marketing",
                "Build long-term partnerships based on trust, transparency, and results"
              ].map((missionItem, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 text-primary font-bold">
                    ✓
                  </div>
                  <span className="leading-relaxed text-gray-800 font-medium">{missionItem}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* HR Divider 3 */}
        <SectionDivider />

        {/* Why Choose Us & Digital Marketing Agency for Startups and SMEs */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
              Why DigiSevaks Media is the Preferred <span className="text-primary">Digital Marketing Agency for Startups & SMEs</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              DigiSevaks Media brings together expert strategists, performance marketers, developers, and creative specialists committed to solving real business growth challenges. Whether you need higher Google rankings, high-converting Meta advertising campaigns, or a complete website refactor, our team combines local Pune market knowledge with transparent, data-driven analytics to maximize every rupee of your marketing spend.
            </p>
          </div>
        </motion.section>

        {/* Workflow Section */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center font-heading">
            Our Proven 5-Step Growth Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Consultation", description: "In-depth review of your market, business goals, and competitors." },
              { step: "02", title: "Research", description: "Audit existing assets, search intent, and target customer behavior." },
              { step: "03", title: "Strategy", description: "Crafting customized SEO, paid ads, and lead generation blueprints." },
              { step: "04", title: "Execution", description: "Deploying high-converting ad campaigns and technical web upgrades." },
              { step: "05", title: "Optimization", description: "Continuous A/B testing, ROI monitoring, and monthly performance reporting." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/50 transition-all duration-300 text-center shadow-md hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-sm font-bold font-heading mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{item.title}</h3>
                <p className="text-sm text-gray-600 font-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center font-heading">
            Frequently Asked Questions About DigiSevaks Media
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 font-heading pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 font-body leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default About;
