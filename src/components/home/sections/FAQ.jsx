import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "DigiSevaks Media offers a full range of digital marketing services including SEO, Google Ads and Meta Ads management, social media marketing, website development, performance marketing, and franchise marketing — for businesses in Pune and across Maharashtra."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Paid advertising (Google Ads, Meta Ads) typically shows results within days to a few weeks. SEO is a longer-term investment and usually takes 3–6 months to show measurable ranking and traffic improvements, depending on your industry and competition. We provide monthly reports so you can track progress throughout."
    },
    {
      question: "What makes Digisevaks Media different from other agencies?",
      answer: "We focus on measurable business outcomes — qualified leads, calls, and revenue — not vanity metrics like follower counts. With 5+ years of experience, 150+ clients, and offices across Pune, Nashik, Nagpur, PCMC, and Chhatrapati Sambhajinagar, we combine local market knowledge with transparent, data-driven reporting on every campaign."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes. We work with startups, local businesses, SMEs, franchises, and established enterprise brands — building strategies scaled to each client's budget and growth stage, not a one-size-fits-all package."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing depends on the services you need, your industry, and campaign scope — we don't use fixed one-size-fits-all packages. Contact us for a free consultation and we'll build a custom quote based on your specific goals."
    },
    {
      question: "How do I get started with Digisevaks Media?",
      answer: "Getting started is simple — reach out through our contact form or call us directly for a free consultation. We'll discuss your goals, review your current digital presence, and recommend a strategy tailored to your business."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FDFBD4] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-900 font-heading pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 font-body leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 mb-6 font-body">
            Still have questions? We're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-body hover:scale-105 transform"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
