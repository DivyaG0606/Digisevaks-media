import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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

  const Counter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * parseInt(value)));
          
          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      }
    }, [isInView, value, duration]);

    return <span ref={nodeRef}>{count}+</span>;
  };

  return (
    <section className="pt-10 pb-16 bg-[#FDFBD4] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
              A Full-Service <span className="text-primary">Digital Marketing Agency in Pune</span> Built for Measurable Impact
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
              DigiSevaks Media is a specialized performance marketing company based in Karve Nagar, Pune. We engineer custom organic search campaigns, build robust websites through our in-house development team, run targeted Google Ads, and design full-funnel customer acquisition systems. Rather than chasing superficial social vanity metrics, our strategies focus squarely on driving qualified phone calls, sales inquiries, and sustainable revenue for growing enterprises.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
              Our in-house digital marketing experts pair continuous ad testing with deep search engine optimization. As a dedicated SEO agency in Pune, we collaborate closely with local retail stores, medical clinics, B2B services, and multi-location franchises across Baner, Kothrud, and the wider Maharashtra region. Every campaign is managed with direct accountability, transparent reporting, and strict cost-per-acquisition performance targets.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary font-heading"><Counter value="5" duration={1.5} /></p>
                <p className="text-sm text-gray-600 font-body">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary font-heading"><Counter value="150" duration={2} /></p>
                <p className="text-sm text-gray-600 font-body">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary font-heading"><Counter value="500" duration={2.5} /></p>
                <p className="text-sm text-gray-600 font-body">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary font-heading"><Counter value="100" duration={2} /></p>
                <p className="text-sm text-gray-600 font-body">Team Members</p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-body"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 relative overflow-hidden shadow-xl border-2 border-primary/20">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-3.5">
                <div className="flex items-start space-x-3.5 p-3.5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white shadow-md shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex-shrink-0 w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading mb-0.5">Performance-Driven</h3>
                    <p className="text-xs text-white/90 font-body leading-relaxed">Conversion rate optimization tied directly to revenue growth</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white shadow-md shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex-shrink-0 w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading mb-0.5">Client-Focused</h3>
                    <p className="text-xs text-white/90 font-body leading-relaxed">Direct access to specialized strategists without account manager red-tape</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white shadow-md shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex-shrink-0 w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading mb-0.5">Proven Results</h3>
                    <p className="text-xs text-white/90 font-body leading-relaxed">Clear analytics dashboards showing real campaign return</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white shadow-md shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex-shrink-0 w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-white backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading mb-0.5">Innovative Approach</h3>
                    <p className="text-xs text-white/90 font-body leading-relaxed">AI-powered search mapping and automated lead funnel design</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
