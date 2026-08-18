import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {

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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-44 md:pt-48 overflow-hidden bg-[#FDFBD4] pointer-events-auto">
      {/* Unique Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #E33529 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16 pointer-events-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-dark shadow-md shadow-primary/20"
          >
            <span className="text-sm md:text-base font-extrabold text-white font-heading tracking-wider">DIGITAL MARKETING AGENCY IN PUNE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-heading max-w-4xl mx-auto"
          >
            Digital Marketing Agency in Pune That Helps Businesses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Grow Faster
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-body"
          >
            DigiSevaks Media helps startups, SMEs, franchises, and established brands in Pune increase online visibility, generate qualified leads, and grow revenue — through SEO, performance marketing, and web design built on data, not guesswork.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#EF233C] to-[#D90429] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 group font-body"
            >
              <span className="relative z-20">Get a Free Marketing Audit</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D90429] to-[#B8001F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-20"></span>
            </Link>
            
            <Link
              to="/case-studies"
              className="px-8 py-4 text-base font-bold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-body"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-gray-300/50 max-w-3xl mx-auto"
          >
            <p className="text-xs sm:text-sm font-semibold text-gray-600 font-body">
              Trusted by 50+ businesses across Pune &amp; Maharashtra | SEO • Google Ads • Social Media • Web Development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
