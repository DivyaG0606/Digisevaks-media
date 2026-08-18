import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import pizzaMoodLogo from '../../assets/logos/clients/16.jpg';
import ganeshBhelLogo from '../../assets/logos/clients/2.jpg';
import mahaBarachiMisalLogo from '../../assets/logos/clients/19.png';
import atmosSalonLogo from '../../assets/logos/clients/15.jpg';
import caarvanRestaurantLogo from '../../assets/logos/clients/5.jpg';
import garamIcecreamLogo from '../../assets/logos/clients/4.jpg';
import vadagharLogo from '../../assets/logos/clients/7.jpg';

const logoMap = {
  'pizza-mood': pizzaMoodLogo,
  'ganesh-bhel': ganeshBhelLogo,
  'maha-barachi-misal': mahaBarachiMisalLogo,
  'atmos-salon': atmosSalonLogo,
  'caarvan-restaurant': caarvanRestaurantLogo,
  'garam-icecream': garamIcecreamLogo,
  'vadaghar': vadagharLogo
};

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "Pizza Mood",
      industry: "Food & Beverage | Restaurant & Franchise",
      project: "Franchise Growth",
      results: "Increased franchise lead generation and stronger digital foundation",
      metric: "Franchise",
      metricLabel: "Growth",
      color: "from-orange-500 to-red-500",
      slug: "pizza-mood"
    },
    {
      client: "Ganesh Bhel",
      industry: "Food & Beverage | Restaurant & Franchise",
      project: "Franchise Expansion",
      results: "Enhanced franchise visibility and professional digital presence",
      metric: "Franchise",
      metricLabel: "Expansion",
      color: "from-blue-500 to-purple-500",
      slug: "ganesh-bhel"
    },
    {
      client: "Maha Barachi Misal",
      industry: "Food & Beverage | Restaurant | Franchise",
      project: "Franchise Growth",
      results: "Stronger digital foundation for franchise expansion",
      metric: "Franchise",
      metricLabel: "Growth",
      color: "from-green-500 to-teal-500",
      slug: "maha-barachi-misal"
    },
    {
      client: "Caarvan Restaurant & Bar",
      industry: "Restaurant & Bar | Food & Beverage",
      project: "Digital Growth",
      results: "Stronger digital presence and improved customer discovery",
      metric: "Digital",
      metricLabel: "Growth",
      color: "from-yellow-500 to-orange-500",
      slug: "caarvan-restaurant"
    },
    {
      client: "Garam Icecream",
      industry: "Food & Beverage | Dessert | Ice Cream & Chocolate Waffle",
      project: "Franchise Growth",
      results: "Franchise-focused digital strategy for dessert brand expansion",
      metric: "Franchise",
      metricLabel: "Growth",
      color: "from-indigo-500 to-blue-500",
      slug: "garam-icecream"
    },
    {
      client: "Vadaghar",
      industry: "Food & Beverage | Vada Pav | Quick Service Restaurant | Franchise",
      project: "Franchise Expansion",
      results: "Digital foundation for Vada Pav franchise brand expansion",
      metric: "Franchise",
      metricLabel: "Expansion",
      color: "from-purple-500 to-pink-500",
      slug: "vadaghar"
    }
  ];

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
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Real results for real businesses. See how we've helped our clients achieve their goals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.slice(0, 6).map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link
                to={`/case-studies/${study.slug}`}
                className="block"
              >
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                  {/* Content */}
                  <div className="p-8">
                    {/* Client Logo */}
                    <div className="mb-4 flex items-center justify-center h-32">
                      <img 
                        src={logoMap[study.slug]} 
                        alt={`${study.client} Logo`} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    {/* Project Title - Centered */}
                    <div className="text-center mb-4">
                      <p className="text-sm font-bold text-black mb-2 font-body uppercase tracking-wider">
                        {study.project}
                      </p>
                    </div>
                    
                    <div className="mb-4 text-center">
                      <p className="text-xs font-semibold text-gray-800 mb-1 font-body uppercase tracking-wider">
                        {study.industry}
                      </p>
                      <h3 className="text-lg font-bold text-red-600 mb-2 font-heading group-hover:text-red-700 transition-colors duration-300">
                        {study.client}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-gray-200 text-center">
                      <p className="text-sm text-gray-900 font-body">
                        <span className="font-semibold text-red-600">Results:</span> {study.results}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Case Study Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-3 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl font-body transition-colors duration-300">
                      View Case Study
                    </button>
                  </div>
                </div>
              </Link>
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
          <Link
            to="/case-studies"
            className="inline-flex items-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-body"
          >
            View All Case Studies
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;