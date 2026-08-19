import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import pizzaMoodLogo from '../assets/logos/clients/16.jpg';
import ganeshBhelLogo from '../assets/logos/clients/2.jpg';
import mahaBarachiMisalLogo from '../assets/logos/clients/19.png';
import atmosSalonLogo from '../assets/logos/clients/15.jpg';
import caarvanRestaurantLogo from '../assets/logos/clients/5.jpg';
import garamIcecreamLogo from '../assets/logos/clients/4.jpg';
import vadagharLogo from '../assets/logos/clients/7.jpg';
import SEO from '../components/SEO';

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
      industry: "Food & Beverage | Franchise | Pune",
      project: "Franchise Growth",
      results: "Increased franchise lead generation and stronger digital foundation for expansion",
      slug: "pizza-mood"
    },
    {
      client: "Ganesh Bhel",
      industry: "Food & Beverage | Franchise | Pune",
      project: "Franchise Expansion",
      results: "Enhanced franchise visibility and professional digital presence",
      slug: "ganesh-bhel"
    },
    {
      client: "Maha Barachi Misal",
      industry: "Food & Beverage | Restaurant Franchise | Pune",
      project: "Franchise Growth",
      results: "Stronger digital foundation for franchise expansion and lead generation",
      slug: "maha-barachi-misal"
    },
    {
      client: "Atmos Salon",
      industry: "Beauty & Wellness | Unisex Salon | Pune",
      project: "Digital Growth",
      results: "Professional digital presence and improved customer engagement",
      slug: "atmos-salon"
    },
    {
      client: "Caarvan Restaurant & Bar",
      industry: "Food & Beverage | Restaurant & Bar | Pune",
      project: "Digital Growth",
      results: "Stronger digital presence and improved customer discovery",
      slug: "caarvan-restaurant"
    },
    {
      client: "Garam Icecream",
      industry: "Food & Beverage | Dessert Franchise | Pune",
      project: "Franchise Growth",
      results: "Franchise-focused digital strategy for dessert brand expansion",
      slug: "garam-icecream"
    },
    {
      client: "Vadaghar",
      industry: "Food & Beverage | QSR Franchise | Pune",
      project: "Franchise Expansion",
      results: "Digital foundation for Vada Pav franchise brand expansion",
      slug: "vadaghar"
    }
  ];

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="Digital Marketing Case Studies — Real Results for Growing Businesses | DigiSevaks"
        description="See how DigiSevaks Media has helped restaurants, franchises, and salons grow through SEO, digital marketing, and website development."
        keywords="digital marketing case studies, franchise marketing case studies, restaurant digital marketing agency"
        canonical="https://digisevaks.com/case-studies"
        ogTitle="Digital Marketing Case Studies — Real Results for Growing Businesses"
        ogDescription="See how DigiSevaks Media has helped restaurants, franchises, and salons grow through SEO, digital marketing, and website development."
        twitterTitle="Digital Marketing Case Studies — Real Results for Growing Businesses"
        twitterDescription="See how DigiSevaks Media has helped restaurants, franchises, and salons grow through SEO, digital marketing, and website development."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-heading leading-tight">
            Digital Marketing Case Studies — <span className="text-primary">Real Results for Growing Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            See how DigiSevaks Media has helped restaurants, franchises, and salons grow through SEO, digital marketing, and website development.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={`/case-studies/${study.slug}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 group-hover:border-primary/50 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between p-8"
              >
                <div>
                  {/* Client Logo */}
                  <div className="mb-6 flex items-center justify-center h-32 bg-gray-50 rounded-2xl p-4 group-hover:bg-white transition-colors duration-300">
                    <img 
                      src={logoMap[study.slug]} 
                      alt={`${study.client} Logo`} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <p className="text-xs font-bold text-primary mb-2 font-body uppercase tracking-wider text-center">
                    {study.industry}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading text-center group-hover:text-primary transition-colors duration-300">
                    {study.client}
                  </h3>

                  <p className="text-sm font-semibold text-gray-700 mb-4 font-body uppercase tracking-wider text-center">
                    {study.project}
                  </p>

                  <div className="pt-4 border-t border-gray-100 mb-4 text-center">
                    <p className="text-sm text-gray-600 font-body leading-relaxed">
                      <span className="font-bold text-gray-900">Results:</span> {study.results}
                    </p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary-dark transition-colors duration-300 font-body">
                    Read Case Study →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 font-body max-w-4xl mx-auto leading-relaxed">
            Whether you're running a restaurant, franchise, salon, or growing brand — let's discuss how DigiSevaks Media can help you achieve measurable digital growth in Pune and across Maharashtra.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl hover:bg-gray-50 transition-all duration-300 font-body mb-6"
          >
            Get Free Consultation
          </Link>
          <p className="text-sm md:text-base text-white/90 font-body font-medium">
            Trusted by 150+ businesses across Pune, Nashik, Nagpur, PCMC & Chhatrapati Sambhajinagar.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
