import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer SEO, website development, Google Ads and Meta Ads management, performance marketing, and franchise marketing services for businesses in Pune and across Maharashtra. Each service includes strategy, execution, and transparent performance reporting."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO typically takes 3–6 months to show measurable ranking and traffic improvements, depending on your industry, competition, and current website health. Local SEO results for Pune-based searches often show progress faster than competitive national keywords. We track and report progress monthly throughout."
    },
    {
      question: "Do you provide custom website development?",
      answer: "Yes. Our website development team in Pune builds custom-designed, responsive websites — including e-commerce sites, CMS integration, and speed optimization — rather than using generic templates, so your site fits your brand and converts visitors into customers."
    },
    {
      question: "What is the difference between Google Ads and Meta Ads?",
      answer: "Google Ads targets people actively searching for your product or service on Google, capturing high-intent demand. Meta Ads (Facebook & Instagram) targets people based on interests and behavior, building awareness and demand even before someone searches. We often recommend using both together for a full-funnel strategy."
    },
    {
      question: "How do you measure campaign performance?",
      answer: "We track performance through data-driven KPIs specific to your goals — organic rankings and traffic for SEO, cost-per-click and conversion rate for paid ads, and cost-per-acquisition across all channels. Every client receives clear, transparent monthly reports showing exactly what's working."
    },
    {
      question: "Can you help with franchise selling?",
      answer: "Yes. Our franchise marketing services help you build a strong franchise strategy, generate qualified franchisee leads, and create the marketing materials and documentation needed to scale your brand across new locations in Maharashtra and beyond."
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

  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing services in Pune to grow your online presence and reach the right audience. As a top digital marketing agency Pune, we drive engagement across social media, email, and content marketing for channels that matter to your business.",
      features: ["Social Media Strategy", "Email Marketing", "Content Marketing", "Analytics & Reporting", "Brand Awareness", "Lead Generation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      id: 'digital-marketing',
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Marketing",
        "provider": {
          "@type": "MarketingAgency",
          "name": "DigiSevaks Media Agency",
          "url": "https://digisevaks.com"
        },
        "areaServed": ["Pune", "Maharashtra"],
        "description": "Comprehensive digital marketing services in Pune to grow your online presence and reach the right audience.",
        "url": "https://digisevaks.com/services/digital-marketing",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Strategy" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Analytics & Reporting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Awareness" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Generation" } }
          ]
        }
      }
    },
    {
      title: "Website Development",
      description: "Fast, responsive websites built by our website development company Pune, designed to convert visitors into customers. From custom design to e-commerce and ongoing maintenance, we build sites that perform, not just look good.",
      features: ["Custom Design", "Responsive Development", "E-commerce Solutions", "CMS Integration", "Speed Optimization", "Maintenance"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      id: 'website-development',
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Website Development",
        "provider": {
          "@type": "MarketingAgency",
          "name": "DigiSevaks Media Agency",
          "url": "https://digisevaks.com"
        },
        "areaServed": ["Pune", "Maharashtra"],
        "description": "Fast, responsive websites built by our website development team in Pune, designed to convert visitors into customers.",
        "url": "https://digisevaks.com/services/website-development",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Website Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Solutions" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CMS Integration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Speed Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintenance" } }
          ]
        }
      }
    },
    {
      title: "Search Engine Optimization",
      description: "Rank higher on Google and drive qualified organic traffic with our SEO agency Pune. We combine technical SEO, on-page optimization, and local SEO to get your business found by the customers actually searching for you.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO", "Performance Tracking"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      id: 'search-engine-optimization',
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Search Engine Optimization",
        "provider": {
          "@type": "MarketingAgency",
          "name": "DigiSevaks Media Agency",
          "url": "https://digisevaks.com"
        },
        "areaServed": ["Pune", "Maharashtra"],
        "description": "Rank higher on Google and drive qualified organic traffic with our SEO agency in Pune.",
        "url": "https://digisevaks.com/services/search-engine-optimization",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Research" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Link Building" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Tracking" } }
          ]
        }
      }
    },
    {
      title: "Google Ads & Meta Ads",
      description: "Get immediate, targeted traffic with expertly managed Google Ads and Meta Ads campaigns from our Google Ads agency Pune. From landing page optimization to bid management, every campaign is built around measurable ROI.",
      features: ["Campaign Strategy", "Ad Creation", "Landing Page Optimization", "Bid Management", "A/B Testing", "ROI Tracking"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      id: 'google-ads-meta-ads',
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Google Ads & Meta Ads",
        "provider": {
          "@type": "MarketingAgency",
          "name": "DigiSevaks Media Agency",
          "url": "https://digisevaks.com"
        },
        "areaServed": ["Pune", "Maharashtra"],
        "description": "Get immediate, targeted traffic with expertly managed Google Ads and Meta Ads campaigns from our PPC team in Pune.",
        "url": "https://digisevaks.com/services/google-ads-meta-ads",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Google Ads & Meta Ads Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Campaign Strategy" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ad Creation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bid Management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "A/B Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ROI Tracking" } }
          ]
        }
      }
    },
    {
      title: "Performance Marketing",
      description: "Data-driven performance marketing focused on real outcomes — not vanity metrics. As a dedicated performance marketing agency Pune, our team continuously tests and optimizes campaigns to lower acquisition costs and maximize conversions.",
      features: ["Conversion Optimization", "Cost Reduction", "ROI Maximization", "Data Analytics", "A/B Testing", "Performance Tracking"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      id: 'performance-marketing',
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Performance Marketing",
        "provider": {
          "@type": "MarketingAgency",
          "name": "DigiSevaks Media Agency",
          "url": "https://digisevaks.com"
        },
        "areaServed": ["Pune", "Maharashtra"],
        "description": "Data-driven performance marketing focused on real outcomes — not vanity metrics. Our Pune-based team continuously tests and optimizes campaigns to lower acquisition costs and maximize conversions.",
        "url": "https://digisevaks.com/services/performance-marketing",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Performance Marketing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Optimization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cost Reduction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ROI Maximization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analytics" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "A/B Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Tracking" } }
          ]
        }
      }
    },
    {
      title: "Franchise Selling",
      description: "Strategic franchise marketing to help Pune and Maharashtra businesses attract qualified franchisees and scale across new locations. As a leading franchise marketing agency Pune, we support you from strategy and documentation to lead generation and training support.",
      features: ["Franchise Strategy", "Brand Expansion", "Lead Generation", "Franchise Documentation", "Training Support", "Marketing Materials"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      id: 'franchise-selling',
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Franchise Selling",
        "provider": {
          "@type": "MarketingAgency",
          "name": "DigiSevaks Media Agency",
          "url": "https://digisevaks.com"
        },
        "areaServed": ["Pune", "Maharashtra"],
        "description": "Strategic franchise marketing to help Pune and Maharashtra businesses attract qualified franchisees and scale across new locations — from franchise strategy and documentation to lead generation and training support.",
        "url": "https://digisevaks.com/services/franchise-selling",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Franchise Selling Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Franchise Strategy" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Expansion" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Generation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Franchise Documentation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Training Support" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Materials" } }
          ]
        }
      }
    }
  ];

  const allSchemas = [faqSchema, ...services.map(s => s.schema)];

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#FDFBD4]">
      <SEO 
        title="Digital Marketing Services Pune | SEO, Social Media, Google Ads, Web Development | DigiSevaks"
        description="Discover comprehensive digital marketing services by DigiSevaks - Pune's premier agency. Expert SEO, website development, Google Ads, Meta Ads, performance marketing, and franchise selling."
        keywords="digital marketing company pune, website development company in pune, digisevaks marketing agency karve nagar, karve nagar digital marketing, digital marketing services Pune, SEO results timeline Pune, website development company Pune, campaign performance tracking Pune, franchise marketing agency Pune, Google Ads agency Pune, performance marketing agency Pune"
        canonical="https://digisevaks.com/services"
        ogTitle="Digital Marketing Services Pune | SEO, Social Media, Google Ads | DigiSevaks"
        ogDescription="Discover comprehensive digital marketing services by DigiSevaks - Pune's premier agency. Expert SEO, web development, Google Ads, performance marketing, and franchise selling."
        twitterTitle="Digital Marketing Services Pune | SEO, Social Media, Google Ads | DigiSevaks"
        twitterDescription="Discover comprehensive digital marketing services by DigiSevaks - Pune's premier agency. Expert SEO, web development, Google Ads, performance marketing, and franchise selling."
        schema={allSchemas}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-heading">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Comprehensive digital marketing solutions to grow your business across Pune and Maharashtra
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">{service.title}</h3>
                <p className="text-gray-600 mb-6 font-body leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 font-body">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300 font-body"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Get Started?</h2>
          <p className="text-xl mb-8 font-body">Let's discuss how our services can help you achieve your business goals.</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body"
          >
            Get Free Consultation
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-heading">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 font-heading pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-600 font-body leading-relaxed border-t border-gray-100 pt-4"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
