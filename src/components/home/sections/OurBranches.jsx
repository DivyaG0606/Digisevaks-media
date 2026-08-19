import { motion } from 'framer-motion';

const OurBranches = () => {
  const branches = [
    {
      id: 1,
      name: "DigiSevaks - Head Office",
      badge: "Head Office",
      isHeadOffice: true,
      cityKeyword: "digital marketing agency in Pune",
      address: "Sai Malhar Plot No. 7&9 Swastik Colony, Cummins College Rd, near Daate Mandav wale, Karvenagar, Pune, Maharashtra 411052",
      displayPhone: "+91 84594 39131",
      telPhone: "+918459439131",
      mapLink: "https://maps.app.goo.gl/ZR1EwNzUAfD3Mmfn6",
      websiteLink: "https://digisevaks.com/"
    },
    {
      id: 2,
      name: "DigiSevaks - Chhatrapati Sambhajinagar",
      badge: "Branch Office",
      isHeadOffice: false,
      cityKeyword: "digital marketing agency in Chhatrapati Sambhajinagar",
      address: "4th floor, Prozone Trade centre, D-14, API Corner, N 1, Cidco, Chhatrapati Sambhajinagar, Maharashtra 431002",
      displayPhone: "+91 93253 44633",
      telPhone: "+919325344633",
      mapLink: "https://maps.app.goo.gl/5C48tCoQk4otHz2A6",
      websiteLink: "https://csn.digisevaks.com/"
    },
    {
      id: 3,
      name: "DigiSevaks - PCMC",
      badge: "Branch Office",
      isHeadOffice: false,
      cityKeyword: "digital marketing agency in Pimpri-Chinchwad",
      address: "Office no 4, behind purnabramha hotel, opp. GANGA AASHIYANA, Society, Thergaon, Pimpri-Chinchwad, Maharashtra 411033",
      displayPhone: "+91 99950 73535",
      telPhone: "+919995073535",
      mapLink: "https://maps.app.goo.gl/snTFQoSAWjzWEm3Y7",
      websiteLink: "https://pcmc.digisevaks.com/about"
    },
    {
      id: 4,
      name: "DigiSevaks - Nagpur",
      badge: "Branch Office",
      isHeadOffice: false,
      cityKeyword: "digital marketing agency in Nagpur",
      address: "634, F, 1A, Om Sai Nagar, Shivaji Nagar, Nagpur, Maharashtra 440010",
      displayPhone: "+91 90964 58449",
      telPhone: "+919096458449",
      mapLink: "https://maps.app.goo.gl/vxjRFFpioy5dzfhh7",
      websiteLink: "https://nagpur.digisevaks.com/"
    },
    {
      id: 5,
      name: "DigiSevaks - Nashik",
      badge: "Branch Office",
      isHeadOffice: false,
      cityKeyword: "digital marketing agency in Nashik",
      address: "1st Floor, Rushiraj Avenue, Allen carrier institute, Trimbak Link Rd, opposite Business Square, Anandwan Colony, Canada Corner, Nashik, Maharashtra 422005",
      displayPhone: "+91 90670 62327",
      telPhone: "+919067062327",
      mapLink: "https://maps.app.goo.gl/QGA8xsB4wYnRzqSb6",
      websiteLink: "https://nashik.digisevaks.com/"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-[#F2EFE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Our <span className="text-primary">Branches</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Serving businesses across Maharashtra with our strategically located offices
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              variants={itemVariants}
              className={`relative rounded-3xl p-7 bg-white transition-all duration-300 flex flex-col justify-between h-full border-2 ${
                branch.isHeadOffice 
                  ? 'border-primary shadow-xl shadow-primary/15 hover:shadow-2xl hover:shadow-primary/25' 
                  : 'border-gray-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'
              }`}
            >
              <div>
                {/* Header Row with Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-bold font-heading ${
                    branch.isHeadOffice
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/20'
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}>
                    {branch.badge}
                  </span>
                  <span className="text-xs text-gray-400 font-body hidden sm:inline">
                    {branch.cityKeyword.replace('digital marketing agency in ', '')}
                  </span>
                </div>

                {/* Branch Name */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 font-heading text-gray-900">
                  {branch.name}
                </h3>

                {/* Decorative Line */}
                <div className={`h-1 w-12 mb-5 rounded-full ${
                  branch.isHeadOffice 
                    ? 'bg-gradient-to-r from-primary to-primary-dark' 
                    : 'bg-primary/30'
                }`}></div>

                {/* Address */}
                <div className="flex items-start space-x-3 mb-5">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${
                    branch.isHeadOffice 
                      ? 'bg-primary text-white' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700 font-body">
                    {branch.address}
                  </p>
                </div>
              </div>

              <div>
                {/* Click-to-call Phone */}
                <div className="flex items-center space-x-3 mb-6 pt-4 border-t border-gray-100">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${
                    branch.isHeadOffice 
                      ? 'bg-primary text-white' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a 
                    href={`tel:${branch.telPhone}`} 
                    className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors duration-300 font-body"
                  >
                    {branch.displayPhone}
                  </a>
                </div>

                {/* Buttons: View on Map & Website */}
                <div className="flex gap-3">
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center space-x-2 px-2 py-3 rounded-xl transition-all duration-300 font-bold text-xs sm:text-sm font-body ${
                      branch.isHeadOffice
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-md shadow-primary/20 hover:shadow-lg hover:scale-[1.02]'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>View Map</span>
                  </a>
                  <a
                    href={branch.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center space-x-2 px-2 py-3 rounded-xl transition-all duration-300 font-bold text-xs sm:text-sm font-body ${
                      branch.isHeadOffice
                        ? 'bg-white text-primary border border-primary hover:bg-gray-50'
                        : 'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-lg'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>Website</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO Keywords Footer Note */}
        <div className="mt-12 text-center text-xs text-gray-500 font-body">
          <p>
            Leading <span className="font-semibold text-gray-700">digital marketing agency in Pune</span>, <span className="font-semibold text-gray-700">Nagpur</span>, <span className="font-semibold text-gray-700">Nashik</span>, <span className="font-semibold text-gray-700">Pimpri-Chinchwad</span>, and <span className="font-semibold text-gray-700">Chhatrapati Sambhajinagar</span>.
          </p>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base md:text-lg text-gray-600 mb-6 font-body">
            Find the branch nearest to you and get started with your digital marketing journey
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-heading"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurBranches;