import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, competitors, and current digital presence. Every strategy we build is grounded in real data about your market — not a generic template applied to every client.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our digital marketing experts design a custom strategy across SEO, paid advertising, and website development — tailored to your industry, location, and growth goals, whether you're a Pune startup or a multi-city franchise.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h9a2 2 0 002-2v-5m-6 0H9" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy across every channel — search engines, Google Ads, Meta Ads, and your website — with clear timelines and milestones, so you always know what's happening and when.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Optimization",
      description: "Campaigns are continuously monitored and refined through A/B testing, keyword performance tracking, and conversion rate analysis to lower acquisition costs and improve results month over month.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-8-8m0 0V1a2 2 0 012 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Reporting",
      description: "You receive transparent, easy-to-understand performance reports — no vague dashboards. We show exactly what's working, what changed, and where your marketing budget is going.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Growth",
      description: "Once a campaign proves what works, we scale it — expanding budget, channels, or locations to compound results, helping your business grow sustainably across Pune and beyond.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-8-8m0 0V1a2 2 0 012 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-[#F2EFE7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            A proven methodology used across 500+ projects for businesses in Pune and across Maharashtra
          </p>
        </motion.div>

        {/* Single Row 6-Step Horizontal Staggered Container */}
        <div className="relative py-6">
          {/* Horizontal Timeline Connecting Line */}
          <div className="hidden lg:block absolute left-4 right-4 top-1/2 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 rounded-full z-0" />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5 items-stretch relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
          >
            {steps.map((step, index) => {
              const isUp = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`relative group flex flex-col justify-between transform transition-all duration-300 ${
                    isUp ? 'lg:-translate-y-6' : 'lg:translate-y-6'
                  }`}
                >
                  <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100/90 shadow-lg shadow-gray-900/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Bar with Number & Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-extrabold text-primary font-heading tracking-wider bg-primary/10 px-2.5 py-1 rounded-full">
                          Step {step.number}
                        </span>
                        <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-md shadow-primary/20">
                          {step.icon}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base font-bold text-gray-900 mb-2 font-heading group-hover:text-primary transition-colors duration-300 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed font-body">
                        {step.description}
                      </p>
                    </div>

                    {/* Subtle Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-heading"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
