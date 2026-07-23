import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AIMLHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full"
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
          className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-lg"
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
          className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-400/20 rounded-full"
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
            🤖 AI & Machine Learning Services
          </motion.h1>
          
          <motion.h2
            className="text-lg md:text-xl font-semibold text-blue-200 mb-6 font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Intelligent Solutions for Tomorrow's Challenges
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-3xl font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transform your business with cutting-edge Artificial Intelligence and Machine Learning solutions. 
            We help organizations harness the power of AI to automate processes, gain insights, and drive innovation.
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
                'Machine Learning Models',
                'Natural Language Processing',
                'Computer Vision Solutions',
                'Predictive Analytics'
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
              Start AI Project
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View AI Solutions
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