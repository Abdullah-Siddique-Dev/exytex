import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GraphicDesignHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&h=1080&fit=crop&auto=format&q=80', // Adobe Creative Suite
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop&auto=format&q=80', // Graphic design workspace
    'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1920&h=1080&fit=crop&auto=format&q=80', // Designer working
    'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1920&h=1080&fit=crop&auto=format&q=80'  // Design tools
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-slate-900/90"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg opacity-20"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-20"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Graphic Design
          </motion.h1>
          
          <motion.h2
            className="text-lg md:text-xl font-semibold text-blue-200 mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We design Brands and Strategies that get results
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-3xl font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Graphic design services in Pakistan aimed at small and large companies. We offer powerful graphic design, 
            oriented to help greatly to achieve the business objectives set.
          </motion.p>

          {/* Feature List */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Brand Identity & Logo Design',
                'Print & Digital Graphics',
                'Creative Marketing Materials',
                'Professional Design Solutions'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-white/90 font-inter text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};