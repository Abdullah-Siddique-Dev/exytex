import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from '../ui/HeroBackground';

export const BlockchainHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Insurance office
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Business meeting
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Technology
    'https://images.unsplash.com/photo-1521791136064-963d9e6e6b8e?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Team collaboration
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'  // Digital transformation
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow - Enhanced for better visibility */}
      <HeroBackground 
        images={heroImages}
        currentIndex={currentImageIndex}
        overlay="bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-blue-800/90"
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Amplify Operational Excellence With Our Comprehensive
            <span className="text-blue-300"> Insurance Product Suite</span>
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl font-semibold text-blue-200 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Empowering Insurance Industry With Our Digital Offerings
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Backed with over two decades of insurance tech expertise and domain knowledge, Damco stands among the leading technology partners for the insurance space. We have successfully empowered insurers to improve their operational efficiency and drive digital transformation while strengthening business-customer relationships.
          </motion.p>

          {/* Recognition Badges */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Featured in Everest\'s Application and Digital Services (ADS) In Life and Annuities (L&A) Insurance Peak Matrix® Assessment 2022',
                'Recognized in Celent\'s Latin American P&C PAS Systems Report',
                'Featured in Everest\'s Insurance Platforms IT Services Peak Matrix® Assessment 2022',
                'Recognized in Celent\'s Global Health Policy Administration System Vendor Report'
              ].map((recognition, index) => (
                <motion.div
                  key={index}
                  className="flex items-start text-white/90 text-sm bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>{recognition}</span>
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
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Free Consultation
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Solutions
            </motion.button>
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