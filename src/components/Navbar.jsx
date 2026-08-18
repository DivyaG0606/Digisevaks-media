import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import companyLogo from '../assets/logos/company/company_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CASE STUDIES', path: '/case-studies' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white ${isScrolled
        ? 'py-2'
        : 'py-3'
        }`}
      style={{
        boxShadow: isScrolled ? '0 8px 30px rgba(0,0,0,0.06)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => handleLinkClick('/')}
          >
            <div className="flex items-center">
              <img
                src={companyLogo}
                alt="Digisevaks Media Agency"
                className={`object-contain transition-all duration-500 ${isScrolled ? 'h-32 w-32' : 'h-44 w-44'
                  }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 group font-body"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                  {link.name}
                </span>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${activeLink === link.path ? 'scale-x-100' : ''
                  }`} />
                <div className={`absolute inset-0 bg-primary/5 rounded-lg transform scale-0 transition-transform duration-300 group-hover:scale-100 ${activeLink === link.path ? 'scale-100' : ''
                  }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              onClick={() => handleLinkClick('/contact')}
              className="relative px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full overflow-hidden transition-all duration-500 group hover:shadow-2xl hover:shadow-gray-400/30 font-body"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="pt-4 pb-6 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="relative px-4 py-3 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 group hover:bg-gray-50 font-body"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                    {link.name}
                  </span>
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-dark transform scale-y-0 transition-transform duration-300 origin-top group-hover:scale-y-100 ${activeLink === link.path ? 'scale-y-100' : ''
                    }`} />
                  {activeLink === link.path && (
                    <div className="absolute inset-0 bg-primary/5 rounded-lg" />
                  )}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => handleLinkClick('/contact')}
                  className="relative block w-full px-8 py-3 text-sm font-bold text-center text-white bg-gradient-to-r from-primary to-primary-dark rounded-full overflow-hidden transition-all duration-500 group hover:shadow-2xl hover:shadow-gray-400/30 font-body"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
