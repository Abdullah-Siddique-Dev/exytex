import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Star, Building2, Headphones, ArrowRight } from 'lucide-react';
import { scrollToContactForm } from '../../utils/scrollUtils';

export const AmazonFBAHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    { icon: Package, text: 'Complete Logistics Management' },
    { icon: Star, text: 'Prime Customer Access' },
    { icon: Building2, text: 'Professional Warehousing' },
    { icon: Headphones, text: 'Customer Service Included' }
  ];

  return (
    <section className="relative py-24 pt-56 overflow-hidden bg-gray-900">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Amazon FBA
                </span>
                <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent mt-2">
                  Fulfillment Solutions
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed font-light"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Logistics by Amazon FBA allows any company to sell products through Amazon marketplace, handling storage, preparation, and shipping of orders.
              </motion.p>

              {/* Get Started Button */}
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button 
                  onClick={scrollToContactForm}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side Image Carousel */}
            <motion.div
              className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Amazon FBA ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};