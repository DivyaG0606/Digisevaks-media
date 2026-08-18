import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing services in Pune to grow your online presence and reach the right audience. As a top digital marketing agency Pune, we drive engagement across social media, email, and content marketing for channels that matter to your business.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      id: 'digital-marketing'
    },
    {
      title: "Website Development",
      description: "Fast, responsive websites built by our website development company Pune, designed to convert visitors into customers. From custom design to e-commerce and ongoing maintenance, we build sites that perform, not just look good.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      id: 'website-development'
    },
    {
      title: "Search Engine Optimization",
      description: "Rank higher on Google and drive qualified organic traffic with our SEO agency Pune. We combine technical SEO, on-page optimization, and local SEO to get your business found by the customers actually searching for you.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      id: 'search-engine-optimization'
    },
    {
      title: "Google Ads & Meta Ads",
      description: "Get immediate, targeted traffic with expertly managed Google Ads and Meta Ads campaigns from our Google Ads agency Pune. From landing page optimization to bid management, every campaign is built around measurable ROI.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      id: 'google-ads-meta-ads'
    },
    {
      title: "Performance Marketing",
      description: "Data-driven performance marketing focused on real outcomes — not vanity metrics. As a dedicated performance marketing agency Pune, our team continuously tests and optimizes campaigns to lower acquisition costs and maximize conversions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      id: 'performance-marketing'
    },
    {
      title: "Franchise Selling",
      description: "Strategic franchise marketing to help Pune and Maharashtra businesses attract qualified franchisees and scale across new locations. As a leading franchise marketing agency Pune, we support you from strategy and documentation to lead generation and training support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      id: 'franchise-selling'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-[#FDFBD4] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Digital marketing solutions that help businesses grow across Pune, Maharashtra, and beyond
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg shadow-gray-900/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/20">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-body">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark transition-colors duration-300 font-body group-hover:translate-x-1"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Subtle Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 mb-6 font-body">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-body"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
