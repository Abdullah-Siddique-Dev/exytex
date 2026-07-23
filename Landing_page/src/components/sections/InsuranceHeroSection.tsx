import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Award, Users } from 'lucide-react';

export const InsuranceHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-blue-900/90"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-8 font-semibold text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span>🎓</span>
            <span>On-Demand Workshop Available</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Amplify Operational Excellence
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              With Our Digital Offerings
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Backed with over two decades of insurance tech expertise and domain knowledge, Damco stands among the leading technology partners for the insurance space.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 font-inter flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Solutions</span>
              <span>→</span>
            </motion.button>
            <motion.button
              className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-white/10 transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Workshop
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2 font-inter">20+</div>
              <div className="text-base text-white/80 font-inter">Years Experience</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-2 font-inter">500+</div>
              <div className="text-base text-white/80 font-inter">Projects Delivered</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-300 mb-2 font-inter">50+</div>
              <div className="text-base text-white/80 font-inter">Global Clients</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

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
