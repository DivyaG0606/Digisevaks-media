import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // TODO: Connect email subscribe form to Mailchimp/ConvertKit active endpoint
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const blogPosts = [
    {
      title: "How Digital Marketing Helps Small Businesses Grow Online",
      excerpt: "Small businesses today have more opportunities than ever to reach customers online. Discover how digital marketing can help you build visibility, attract potential customers, and increase sales.",
      category: "Digital Marketing",
      date: "2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "/blog/digital-marketing-small-business"
    },
    {
      title: "Why SEO Is Important for Business Growth in Pune",
      excerpt: "Pune has become one of India's major business hubs. Discover why SEO is crucial for Pune businesses to get discovered online and attract local customers.",
      category: "SEO",
      date: "2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      link: "/blog/seo-business-growth-pune"
    },
    {
      title: "How to Choose the Right Digital Marketing Agency for Your Business",
      excerpt: "Choosing a digital marketing agency is an important decision. Learn 10 key factors to consider when selecting the right growth partner for your business.",
      category: "Digital Marketing",
      date: "2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      link: "/blog/choose-digital-marketing-agency"
    },
    {
      title: "Why Your Business Needs an SEO-Friendly Website",
      excerpt: "Your website is more than an online brochure. Learn why an SEO-friendly website is the foundation for digital marketing success and online visibility.",
      category: "Website Development",
      date: "2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      link: "/blog/seo-friendly-website"
    },
    {
      title: "How Performance Marketing Can Increase Leads and Conversions",
      excerpt: "Businesses don't just want website traffic. They want measurable results. Discover how performance marketing turns campaigns into a measurable growth system.",
      category: "Performance Marketing",
      date: "2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "/blog/performance-marketing"
    },
    {
      title: "What Is AI SEO and How Does It Affect Google Rankings?",
      excerpt: "Search is changing rapidly with AI. Learn what AI SEO is, why content quality matters more, and how to adapt your SEO strategy for the AI-powered search environment.",
      category: "AI SEO",
      date: "January 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      link: "/blog/ai-seo"
    },
    {
      title: "GEO vs SEO: How to Optimize Your Website for AI Search",
      excerpt: "Search is no longer limited to traditional blue links. Discover the difference between GEO and SEO, and how to prepare your business for AI-powered search experiences.",
      category: "GEO",
      date: "March 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      link: "/blog/geo-vs-seo"
    },
    {
      title: "How Businesses Can Get Discovered on ChatGPT, Gemini, and Google AI Search",
      excerpt: "People are changing how they search with conversational AI. Learn how to make your business discoverable across ChatGPT, Gemini, and Google AI Search.",
      category: "AI Search",
      date: "June 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      link: "/blog/chatgpt-gemini-ai-search"
    },
    {
      title: "AI Search Optimization: The New Strategy for Digital Marketing Growth",
      excerpt: "Digital marketing is entering a new phase with AI search. Discover how AI Search Optimization complements traditional SEO and prepares your brand for the future.",
      category: "AI Search",
      date: "August 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
      link: "/blog/ai-search-optimization"
    }
  ];

  return (
    <div className="min-h-screen pt-64 pb-20 bg-[#F2EFE7]">
      <SEO 
        title="Blog - DigiSevaks Digital Marketing Agency | Expert Insights & Tips"
        description="Stay updated with the latest digital marketing insights, SEO tips, social media strategies, and industry trends from DigiSevaks experts in Pune, Maharashtra."
        keywords="digital marketing blog, SEO tips, social media marketing insights, Pune digital marketing trends, AI SEO, GEO, marketing strategies"
        canonical="https://digisevaks.com/blog"
        ogTitle="Digital Marketing Blog - DigiSevaks Expert Insights"
        ogDescription="Expert insights on SEO, digital marketing, and AI search — helping Pune businesses stay ahead as search evolves."
        twitterTitle="Digital Marketing Blog - DigiSevaks Expert Insights"
        twitterDescription="Expert insights on SEO, digital marketing, and AI search — helping Pune businesses stay ahead as search evolves."
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
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Expert insights on SEO, digital marketing, and AI search — helping Pune businesses stay ahead as search evolves.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary font-body uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-body">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading hover:text-primary transition-colors duration-300">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-body">{post.excerpt}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500 font-body">{post.date}</span>
                <Link
                  to={post.link}
                  className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300 font-body"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8 font-body">Get the latest digital marketing tips and insights delivered to your inbox.</p>
            {subscribed ? (
              <div className="p-4 bg-green-50 text-green-700 rounded-full font-body font-semibold">
                Thank you for subscribing! You'll hear from us soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:border-primary focus:outline-none font-body"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-xl transition-all duration-300 font-body"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
