import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 15 Unique Client Testimonials with verification signals & internal audit flags
  const reviews = [
    {
      id: 1,
      brand: "Pizza Mood",
      category: "Franchise Business",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      // VERIFY_WITH_CLIENT: Specific numeric claim ("300% in 3 months") needs written/report substantiation
      review: "Digisevaks Media transformed our digital presence completely. Our franchise inquiries increased by 300% in just 3 months. Their digital marketing strategies are outstanding!"
    },
    {
      id: 2,
      brand: "Vadaghar",
      category: "Franchise Business",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Excellent work on our franchise marketing. The team understood our vision and delivered results beyond expectations. Highly recommended for franchise businesses!"
    },
    {
      id: 3,
      brand: "Garam Icecream",
      category: "Ice Cream Franchise",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Our brand visibility improved significantly after partnering with Digisevaks. Social media engagement and foot traffic both increased. Great team to work with!"
    },
    {
      id: 4,
      brand: "Maha Barachi Misal",
      category: "Restaurant Franchise",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Professional, responsive, and results-driven. Digisevaks helped us establish a strong digital presence and generate quality franchise leads."
    },
    {
      id: 5,
      brand: "Venkateshwara Silk",
      category: "Retail & Apparel",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Their SEO and website development services are top-notch. Our website now ranks on the first page for key keywords. Very satisfied with the results!"
    },
    {
      id: 6,
      brand: "Rsrd Interior",
      category: "Interior Design",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Digisevaks created a stunning website for our interior design business. The lead generation from Google Ads has been exceptional. Great ROI!"
    },
    {
      id: 7,
      brand: "Atmos Salon",
      category: "Salon & Wellness",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      // VERIFY_WITH_CLIENT: Specific numeric claim ("200% increase in 2 months") needs written/report substantiation
      review: "The social media marketing strategy they implemented for our salon was amazing. We saw a 200% increase in bookings within 2 months. Truly impressive!"
    },
    {
      id: 8,
      brand: "Bansiraj Foods",
      category: "Food Industry",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Digital marketing expertise at its best. They helped us reach new customers and expand our market presence. A trusted partner for our growth."
    },
    {
      id: 9,
      brand: "Crimson",
      category: "B2B Enterprise",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Outstanding performance marketing results. Our ad campaigns are now more targeted and cost-effective. Digisevaks really knows their stuff!"
    },
    {
      id: 10,
      brand: "Librence",
      category: "Services",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Professional team with deep digital marketing knowledge. They delivered on all promises and helped us achieve our business goals efficiently."
    },
    {
      id: 11,
      brand: "Caarvan Restaurant",
      category: "Fine Dining Restaurant",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Their restaurant marketing strategies are spot-on. We've seen significant growth in both dine-in and delivery orders. Excellent service!"
    },
    {
      id: 12,
      brand: "Pizza Prospect",
      category: "Pizzeria Franchise",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Digisevaks helped us scale our pizza franchise business across multiple locations. Their franchise marketing expertise is unmatched!"
    },
    {
      id: 13,
      brand: "Ganesh Bhel",
      category: "Food & Snacks Franchise",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "From zero to hero in digital presence! Digisevaks Media built our entire online identity. The results speak for themselves - amazing growth!"
    },
    {
      id: 14,
      brand: "Sudama Bhel",
      category: "Quick Service Restaurant",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Creative, innovative, and effective. Their marketing campaigns helped us stand out in a competitive market. Very happy with the partnership!"
    },
    {
      id: 15,
      brand: "Vector Academy",
      category: "Educational Institute",
      location: "Pune",
      googleReviewLink: "ADD_GOOGLE_REVIEW_LINK",
      rating: 5,
      review: "Digisevaks transformed our educational institute's online reach. Student inquiries increased dramatically. A fantastic digital marketing agency!"
    }
  ];

  const maxIndex = reviews.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-[#F2EFE7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Real feedback from growing businesses across Pune and Maharashtra
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative px-2 md:px-12 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Previous Testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Next Testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : 1))}%)` }}
            >
              {reviews.map((item) => (
                <div
                  key={item.id}
                  className="w-full lg:w-[calc(33.333%-16px)] flex-shrink-0"
                >
                  <div className="bg-white rounded-2xl p-7 border-2 border-gray-100 shadow-lg shadow-gray-900/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Clean Brand Name Header */}
                      <div className="mb-4 pb-3 border-b border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 font-heading">
                          {item.brand}
                        </h3>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-3">
                        {renderStars(item.rating)}
                      </div>

                      {/* Testimonial Body */}
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-body italic">
                        "{item.review}"
                      </p>
                    </div>

                    {/* Google Review Link (if available) */}
                    {item.googleReviewLink !== "ADD_GOOGLE_REVIEW_LINK" && (
                      <div className="pt-3 mt-4 border-t border-gray-100 flex items-center justify-end text-xs font-body">
                        <a 
                          href={item.googleReviewLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs font-bold text-primary hover:underline"
                        >
                          Google Review ↗
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300 w-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 mb-6 font-body">
            Ready to join our happy clients? Let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-body hover:scale-105 transform"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReviews;
