import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhyDigisevaks = () => {
  const features = [
    {
      title: "Experienced Digital Marketing Team",
      description: "5+ years of hands-on experience running SEO, Google Ads, and performance marketing campaigns for 150+ businesses across Pune and Maharashtra.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Result-Oriented SEO Strategies",
      description: "Our SEO agency in Pune focuses on rankings that translate into real traffic and leads — not vanity keyword positions with no business impact.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Creative Website Development",
      description: "Websites built by our in-house website development team in Pune — fast-loading, mobile-optimized, and designed to convert visitors into paying customers.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Performance-Driven Ad Campaigns",
      description: "Every Google Ads and Meta Ads campaign is built around a cost-per-acquisition target, not just impressions or clicks.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Transparent Reporting",
      description: "You get clear monthly performance reports showing exactly what's working, what isn't, and where your budget is going — no vague dashboards.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Dedicated Account Support",
      description: "A dedicated point of contact for your account, not a rotating support queue — direct access to the team running your campaigns.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Local Market Expertise",
      description: "Deep knowledge of Pune, Nashik, Nagpur, PCMC, and Chhatrapati Sambhajinagar markets — we know how local customers search and buy in each region.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "AI Search & Generative Engine Optimization",
      description: "Content structured and optimized to appear in AI-powered search results (Google AI Overviews, ChatGPT, Perplexity) — not just traditional blue links.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-[#F2EFE7] relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, #E33529 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Why Businesses Choose <span className="text-primary">Digisevaks Media</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            A digital marketing agency in Pune that delivers measurable results, not just reports
          </p>
        </motion.div>

        {/* 8 Items Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative perspective-1000 h-full"
              style={{ perspective: "1000px" }}
            >
              <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-100/80 shadow-lg shadow-gray-900/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform group-hover:-translate-y-1 preserve-3d flex flex-col justify-between h-full">
                <div>
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 font-heading">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon container */}
                  <div className="flex justify-center mb-4 pt-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <div className="text-primary group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2.5 font-heading group-hover:text-primary transition-colors duration-300 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner glows */}
                <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-xl pointer-events-none" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 mb-6 font-body">
            Ready to experience the Digisevaks difference?
          </p>
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-body hover:scale-105 transform"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDigisevaks;
