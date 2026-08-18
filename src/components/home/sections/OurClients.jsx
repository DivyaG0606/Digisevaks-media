import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../../../assets/logos/clients/1.jpg";
import logo2 from "../../../assets/logos/clients/2.jpg";
import logo3 from "../../../assets/logos/clients/3.jpg";
import logo4 from "../../../assets/logos/clients/4.jpg";
import logo5 from "../../../assets/logos/clients/5.jpg";
import logo6 from "../../../assets/logos/clients/6.jpg";
import logo7 from "../../../assets/logos/clients/7.jpg";
import logo8 from "../../../assets/logos/clients/8.jpg";
import logo9 from "../../../assets/logos/clients/9.jpg";
// import logo10 from "../../../assets/logos/clients/10.jpg";
import logo11 from "../../../assets/logos/clients/11.jpg";
import logo12 from "../../../assets/logos/clients/12.jpg";
import logo13 from "../../../assets/logos/clients/13.jpg";
import logo14 from "../../../assets/logos/clients/14.jpg";
import logo15 from "../../../assets/logos/clients/15.jpg";
import logo16 from "../../../assets/logos/clients/16.jpg";
import logo17 from "../../../assets/logos/clients/17.jpg";
import logo18 from "../../../assets/logos/clients/18.jpg";

const OurClients = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18
  ];

  // Duplicate logos for seamless infinite scroll
  const scrollLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -scrollLogos.length * 256],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 120,
            ease: "linear"
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls, scrollLogos.length]);

  return (
    <section className="py-20 bg-[#FDFBD4] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Trusted by <span className="text-primary">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Proud to partner with growing businesses across Pune and Maharashtra
          </p>
          <p className="text-base text-gray-700 font-medium max-w-2xl mx-auto mt-2 font-body">
            Join 150+ businesses that trust DigiSevaks for measurable digital marketing results.
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-8"
            animate={controls}
            initial={{ x: 0 }}
          >
            {scrollLogos.map((logo, index) => {
              const logoNumber = (index % logos.length) + 1;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-48 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex items-center justify-center hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`DigiSevaks Partner Client Logo ${logoNumber}`}
                    className="max-w-full max-h-full object-contain rounded-full"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 mb-6 font-body">
            Want to see your brand here? Let's discuss how we can help you grow.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-body hover:scale-105 transform"
          >
            Become Our Client
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
