import { useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/logos/company/company_logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1: Company Info & Social Profiles */}
            <div className="space-y-6 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <img 
                  src={companyLogo} 
                  alt="Digisevaks Media" 
                  className="h-32 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-body">
                Results-driven digital marketing agency helping businesses grow their online presence and achieve measurable results.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/digisevaks/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/digisevaks.pune/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949.073-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://in.linkedin.com/company/digisevaks-media" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://wa.me/918459439131" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Contact" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                  <i className="fa-brands fa-whatsapp text-base"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-base font-bold mb-5 font-heading text-white">Quick Links</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">About Us</Link>
                </li>
                <li>
                  <Link to="/services" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Services</Link>
                </li>
                <li>
                  <Link to="/case-studies" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Case Studies</Link>
                </li>
                <li>
                  <Link to="/blog" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services (Deduplicated with Performance Marketing) */}
            <div>
              <h3 className="text-base font-bold mb-5 font-heading text-white">Services</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/services/search-engine-optimization" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">SEO Services</Link>
                </li>
                <li>
                  <Link to="/services/website-development" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Website Development</Link>
                </li>
                <li>
                  <Link to="/services/google-ads-meta-ads" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Google & Meta Ads</Link>
                </li>
                <li>
                  <Link to="/services/digital-marketing" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Social Media Marketing</Link>
                </li>
                <li>
                  <Link to="/services/performance-marketing" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Performance Marketing</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Our Locations */}
            <div>
              <h3 className="text-base font-bold mb-5 font-heading text-white">Our Locations</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/our-branches" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Pune (Head Office)</Link>
                </li>
                <li>
                  <Link to="/our-branches" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Chhatrapati Sambhajinagar</Link>
                </li>
                <li>
                  <Link to="/our-branches" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Pimpri-Chinchwad</Link>
                </li>
                <li>
                  <Link to="/our-branches" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Nagpur</Link>
                </li>
                <li>
                  <Link to="/our-branches" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 font-body">Nashik</Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Labeled Contact Info */}
            <div>
              <h3 className="text-base font-bold mb-5 font-heading text-white">Contact Us</h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400 font-body text-xs leading-relaxed">Sai Malhar Plot No. 7&9 Swastik Colony, Cummins College Rd, Karvenagar, Pune 411052</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex flex-col space-y-1 font-body text-xs text-gray-400">
                    <a href="tel:+918459439131" className="hover:text-white transition-colors duration-300">
                      <strong className="text-white font-semibold">Sales:</strong> +91 84594 39131
                    </a>
                    <a href="tel:+918788165631" className="hover:text-white transition-colors duration-300">
                      <strong className="text-white font-semibold">Support:</strong> +91 87881 65631
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:digisevaksmedia@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 font-body text-xs">digisevaksmedia@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="pt-4 pb-8">
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.935827290031!2d73.82025077344144!3d18.486565770215552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf50c626842d%3A0x2691f8c43e25aea6!2sDigiSevaks%20-%20Media%20Agency!5e0!3m2!1sen!2sin!4v1785840431137!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="DigiSevaks Media Agency Location"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-body">
              © {currentYear} Digisevaks Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 font-body"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTermsModal(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 font-body"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPrivacyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 overflow-y-auto max-h-[80vh]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 font-heading">Privacy Policy</h2>
                  <button
                    onClick={() => setShowPrivacyModal(false)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="prose prose-sm max-w-none text-gray-600 font-body space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">1. Information We Collect</h3>
                  <p>We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">2. How We Use Your Information</h3>
                  <p>We use the information we collect to communicate with you about our services, respond to your inquiries, provide the services you request, and improve our website and services.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">3. Information Sharing</h3>
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">4. Data Security</h3>
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">5. Cookies</h3>
                  <p>We use cookies to enhance your experience on our website. You may choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our site.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">6. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">7. Contact Us</h3>
                  <p>If you have any questions about this Privacy Policy, please contact us at digisevaksmedia@gmail.com or call +91 84594 39131.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowTermsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 overflow-y-auto max-h-[80vh]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 font-heading">Terms of Service</h2>
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="prose prose-sm max-w-none text-gray-600 font-body space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">1. Acceptance of Terms</h3>
                  <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">2. Use License</h3>
                  <p>Permission is granted to temporarily download one copy of the materials on DigiSevaks Media's website for personal, non-commercial transitory viewing only.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">3. Disclaimer</h3>
                  <p>The materials on DigiSevaks Media's website are provided on an 'as is' basis. DigiSevaks Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">4. Limitations</h3>
                  <p>In no event shall DigiSevaks Media or its suppliers be liable for any damages arising out of the use or inability to use the materials on DigiSevaks Media's website.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">5. Revisions and Errata</h3>
                  <p>The materials appearing on DigiSevaks Media's website could include technical, typographical, or photographic errors. DigiSevaks Media does not warrant that any of the materials on its website are accurate, complete or current.</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-heading mt-6 mb-2">6. Contact Information</h3>
                  <p>Questions about the Terms of Service should be sent to us at digisevaksmedia@gmail.com.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;