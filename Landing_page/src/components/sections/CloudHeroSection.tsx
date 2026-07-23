import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollToContactForm } from '../../utils/scrollUtils';

export const CloudHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Cloud computing dashboard
    'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // DevOps workflow
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Server infrastructure
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'  // Data center
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

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
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Cloud Solutions
                </span>
                <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent mt-2">
                  DevOps Services
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed font-light"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Integrated development and operations for swift application lifecycle. Automate delivery, remove inefficiencies, and accelerate innovation.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={scrollToContactForm}
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <a
                  href="#cloud-services"
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm text-sm sm:text-base"
                >
                  Our Services
                </a>
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
                  alt={`Cloud Solutions ${index + 1}`}
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