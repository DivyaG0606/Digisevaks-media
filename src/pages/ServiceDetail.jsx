import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const serviceData = {
    'digital-marketing': {
      title: 'Digital Marketing',
      subtitle: 'Comprehensive Digital Marketing Solutions',
      description: 'Transform your online presence with our data-driven digital marketing strategies. We help businesses reach their target audience, build brand awareness, and drive meaningful engagement across all digital channels.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      features: [
        'Social Media Strategy & Management',
        'Email Marketing Campaigns',
        'Content Marketing & Creation',
        'Analytics & Performance Reporting',
        'Brand Awareness Campaigns',
        'Lead Generation & Nurturing',
        'Influencer Marketing',
        'Online Reputation Management'
      ],
      process: [
        {
          step: '1',
          title: 'Strategy Development',
          description: 'We analyze your business goals, target audience, and competition to create a customized digital marketing strategy.'
        },
        {
          step: '2',
          title: 'Content Creation',
          description: 'Our team creates engaging content that resonates with your audience and aligns with your brand voice.'
        },
        {
          step: '3',
          title: 'Campaign Execution',
          description: 'We launch and manage multi-channel campaigns across social media, email, and other digital platforms.'
        },
        {
          step: '4',
          title: 'Optimization & Scaling',
          description: 'Continuous monitoring and optimization to improve performance and scale successful campaigns.'
        }
      ],
      benefits: [
        'Increased Brand Visibility',
        'Higher Engagement Rates',
        'Qualified Lead Generation',
        'Improved Conversion Rates',
        'Data-Driven Decision Making',
        'Cost-Effective Marketing'
      ],
      pricing: [
        {
          name: 'Starter',
          price: '₹25,000',
          period: '/month',
          features: ['Social Media Management', 'Content Creation', 'Basic Analytics', 'Monthly Reports']
        },
        {
          name: 'Growth',
          price: '₹50,000',
          period: '/month',
          features: ['Social Media Management', 'Content Creation', 'Advanced Analytics', 'Email Marketing', 'Weekly Reports', 'Ad Management']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '/month',
          features: ['Full Digital Marketing Suite', 'Dedicated Account Manager', 'Custom Strategy', '24/7 Support', 'Multi-channel Campaigns']
        }
      ]
    },
    'website-development': {
      title: 'Website Development',
      subtitle: 'Custom Web Development Solutions',
      description: 'Build stunning, high-performance websites that convert visitors into customers. Our custom web development solutions are designed to meet your specific business needs and deliver exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop',
      features: [
        'Custom Web Design',
        'Responsive Development',
        'E-commerce Solutions',
        'CMS Integration',
        'Speed Optimization',
        'SEO-Friendly Structure',
        'Cross-Browser Compatibility',
        'Mobile-First Design'
      ],
      process: [
        {
          step: '1',
          title: 'Discovery & Planning',
          description: 'We understand your requirements, target audience, and business goals to create a detailed project plan.'
        },
        {
          step: '2',
          title: 'Design & Prototyping',
          description: 'Our designers create visually stunning layouts and interactive prototypes for your approval.'
        },
        {
          step: '3',
          title: 'Development & Testing',
          description: 'We build your website using modern technologies and conduct thorough testing across devices.'
        },
        {
          step: '4',
          title: 'Launch & Support',
          description: 'We deploy your website and provide ongoing maintenance and support to ensure optimal performance.'
        }
      ],
      benefits: [
        'Professional Online Presence',
        'Improved User Experience',
        'Higher Conversion Rates',
        'Better Search Engine Rankings',
        'Mobile-Friendly Design',
        'Scalable Architecture'
      ],
      pricing: [
        {
          name: 'Basic',
          price: '₹50,000',
          period: 'starting',
          features: ['5-Page Website', 'Responsive Design', 'Contact Form', 'Basic SEO', '1 Month Support']
        },
        {
          name: 'Professional',
          price: '₹1,00,000',
          period: 'starting',
          features: ['10-Page Website', 'Custom Design', 'CMS Integration', 'Advanced SEO', 'Analytics Setup', '3 Months Support']
        },
        {
          name: 'E-commerce',
          price: '₹2,00,000',
          period: 'starting',
          features: ['E-commerce Platform', 'Payment Integration', 'Product Management', 'Order Management', '6 Months Support']
        }
      ]
    },
    'search-engine-optimization': {
      title: 'Search Engine Optimization',
      subtitle: 'Boost Your Organic Rankings',
      description: 'Dominate search engine results with our proven SEO strategies. We optimize your website to rank higher on Google and drive qualified organic traffic that converts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      features: [
        'Keyword Research & Analysis',
        'On-Page Optimization',
        'Technical SEO Audits',
        'Link Building Strategies',
        'Local SEO Optimization',
        'Content Optimization',
        'Performance Tracking',
        'Competitor Analysis'
      ],
      process: [
        {
          step: '1',
          title: 'SEO Audit',
          description: 'We conduct a comprehensive audit of your website to identify SEO opportunities and issues.'
        },
        {
          step: '2',
          title: 'Keyword Research',
          description: 'We research and target high-value keywords that align with your business and audience intent.'
        },
        {
          step: '3',
          title: 'On-Page Optimization',
          description: 'We optimize your website content, meta tags, and structure for better search engine visibility.'
        },
        {
          step: '4',
          title: 'Off-Page & Link Building',
          description: 'We build high-quality backlinks and improve your website authority and rankings.'
        }
      ],
      benefits: [
        'Higher Search Rankings',
        'Increased Organic Traffic',
        'Better Brand Visibility',
        'Long-Term Results',
        'Cost-Effective Marketing',
        'Improved User Experience'
      ],
      pricing: [
        {
          name: 'Local SEO',
          price: '₹20,000',
          period: '/month',
          features: ['Local Keyword Research', 'Google My Business', 'Local Citations', 'Review Management', 'Monthly Reports']
        },
        {
          name: 'National SEO',
          price: '₹40,000',
          period: '/month',
          features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Content Strategy', 'Monthly Reports']
        },
        {
          name: 'Enterprise SEO',
          price: 'Custom',
          period: '/month',
          features: ['Full SEO Suite', 'Dedicated SEO Team', 'Advanced Analytics', 'Custom Strategy', 'Priority Support']
        }
      ]
    },
    'google-ads-meta-ads': {
      title: 'Google Ads & Meta Ads',
      subtitle: 'Maximize Your ROI with Paid Advertising',
      description: 'Drive immediate traffic and leads with targeted pay-per-click advertising campaigns. We create and manage high-converting campaigns on Google and Meta platforms to maximize your return on investment.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      features: [
        'Campaign Strategy & Planning',
        'Ad Creation & Copywriting',
        'Landing Page Optimization',
        'Bid Management & Optimization',
        'A/B Testing & Experimentation',
        'ROI Tracking & Reporting',
        'Audience Targeting',
        'Budget Management'
      ],
      process: [
        {
          step: '1',
          title: 'Campaign Strategy',
          description: 'We develop a comprehensive advertising strategy aligned with your business goals and target audience.'
        },
        {
          step: '2',
          title: 'Ad Creation',
          description: 'Our team creates compelling ad copy and visuals that drive clicks and conversions.'
        },
        {
          step: '3',
          title: 'Campaign Launch',
          description: 'We launch your campaigns with proper tracking, targeting, and optimization settings.'
        },
        {
          step: '4',
          title: 'Optimization & Scaling',
          description: 'Continuous monitoring and optimization to improve performance and scale successful campaigns.'
        }
      ],
      benefits: [
        'Immediate Traffic',
        'Highly Targeted Audience',
        'Measurable Results',
        'Quick ROI',
        'Brand Visibility',
        'Competitive Advantage'
      ],
      pricing: [
        {
          name: 'Starter',
          price: '₹30,000',
          period: '/month',
          features: ['Campaign Setup', 'Ad Creation', 'Basic Optimization', 'Monthly Reports']
        },
        {
          name: 'Growth',
          price: '₹75,000',
          period: '/month',
          features: ['Advanced Campaigns', 'A/B Testing', 'Landing Page Optimization', 'Weekly Reports', 'Dedicated Manager']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '/month',
          features: ['Full Campaign Suite', 'Dedicated Team', 'Custom Strategy', '24/7 Optimization', 'Multi-platform Management']
        }
      ]
    },
    'performance-marketing': {
      title: 'Performance Marketing',
      subtitle: 'Data-Driven Marketing for Maximum Results',
      description: 'Achieve measurable business growth with our performance marketing solutions. We focus on data-driven strategies that deliver exceptional ROI through continuous optimization and analysis.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
      features: [
        'Conversion Rate Optimization',
        'Funnel Analysis',
        'A/B Testing',
        'User Behavior Analysis',
        'Attribution Modeling',
        'Performance Analytics',
        'ROI Optimization',
        'Data-Driven Strategy'
      ],
      process: [
        {
          step: '1',
          title: 'Analysis & Planning',
          description: 'We analyze your current performance and develop a data-driven marketing strategy.'
        },
        {
          step: '2',
          title: 'Implementation',
          description: 'We implement tracking, analytics, and optimization tools across your marketing channels.'
        },
        {
          step: '3',
          title: 'Testing & Optimization',
          description: 'Continuous A/B testing and optimization to improve conversion rates and ROI.'
        },
        {
          step: '4',
          title: 'Scaling & Growth',
          description: 'Scale successful campaigns and strategies to maximize your marketing ROI.'
        }
      ],
      benefits: [
        'Higher Conversion Rates',
        'Reduced Cost Per Acquisition',
        'Data-Driven Decisions',
        'Measurable ROI',
        'Continuous Improvement',
        'Competitive Advantage'
      ],
      pricing: [
        {
          name: 'Basic',
          price: '₹35,000',
          period: '/month',
          features: ['Conversion Tracking', 'Basic Analytics', 'A/B Testing', 'Monthly Reports']
        },
        {
          name: 'Advanced',
          price: '₹80,000',
          period: '/month',
          features: ['Advanced Analytics', 'Funnel Analysis', 'Attribution Modeling', 'Weekly Reports', 'Dedicated Analyst']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '/month',
          features: ['Full Analytics Suite', 'Custom Dashboards', 'Predictive Analytics', '24/7 Monitoring', 'Strategic Consulting']
        }
      ]
    },
    'franchise-selling': {
      title: 'Franchise Selling',
      subtitle: 'Strategic Franchise Development Solutions',
      description: 'Expand your business through strategic franchise development. We help you build a successful franchise model, attract qualified franchisees, and scale your business across locations.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
      features: [
        'Franchise Strategy Development',
        'Brand Expansion Planning',
        'Lead Generation for Franchisees',
        'Franchise Documentation',
        'Training Support',
        'Marketing Materials',
        'Legal Compliance',
        'Operational Support'
      ],
      process: [
        {
          step: '1',
          title: 'Franchise Assessment',
          description: 'We assess your business model and develop a comprehensive franchise strategy.'
        },
        {
          step: '2',
          title: 'Documentation & Planning',
          description: 'We create franchise documentation, operational manuals, and expansion plans.'
        },
        {
          step: '3',
          title: 'Marketing & Lead Generation',
          description: 'We implement marketing campaigns to attract qualified franchisee candidates.'
        },
        {
          step: '4',
          title: 'Support & Expansion',
          description: 'We provide ongoing support and help you scale your franchise network.'
        }
      ],
      benefits: [
        'Rapid Business Expansion',
        'Reduced Capital Investment',
        'Brand Growth',
        'Local Market Penetration',
        'Scalable Business Model',
        'Shared Risk'
      ],
      pricing: [
        {
          name: 'Consultation',
          price: '₹50,000',
          period: 'one-time',
          features: ['Franchise Assessment', 'Strategy Development', 'Documentation Review', 'Consultation Sessions']
        },
        {
          name: 'Development',
          price: '₹2,00,000',
          period: 'starting',
          features: ['Full Strategy', 'Documentation', 'Marketing Materials', 'Training Program', '3 Months Support']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: 'project-based',
          features: ['Complete Franchise Setup', 'Lead Generation', 'Franchisee Screening', 'Ongoing Support', 'Performance Marketing']
        }
      ]
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen pt-64 pb-20 flex items-center justify-center">
        <SEO 
          title="Service Not Found - DigiSevaks Digital Marketing Agency"
          description="The requested service page was not found. Explore our digital marketing services in Pune, Maharashtra."
          canonical="https://digisevaks.com/services"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:text-primary-dark font-body">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${service.title} - DigiSevaks Digital Marketing Agency | Pune, Maharashtra`}
        description={`${service.description} Get expert ${service.title.toLowerCase()} services from DigiSevaks in Pune, Maharashtra. Professional solutions to grow your business.`}
        keywords={`${service.title.toLowerCase()}, digital marketing Pune, ${service.title.toLowerCase()} services Maharashtra, SEO services, social media marketing, web development`}
        canonical={`https://digisevaks.com/services/${serviceId}`}
        ogTitle={`${service.title} - DigiSevaks Digital Marketing Agency`}
        ogDescription={service.description}
        twitterTitle={`${service.title} - DigiSevaks Digital Marketing Agency`}
        twitterDescription={service.description}
      />
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary to-primary-dark mt-36">
        <div className="absolute inset-0 bg-black/40" />
        <motion.img 
          src={service.image} 
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading">{service.title}</h1>
            <p className="text-xl text-white/90 font-body">{service.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-body">{service.description}</p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 font-heading">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 font-heading">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600 font-body">{item.description}</p>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Benefits</h2>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-semibold font-heading">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Get Started?</h2>
          <p className="text-xl mb-8 font-body">Let's discuss how {service.title} can help you achieve your business goals.</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:shadow-xl transition-all duration-300 font-body"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;