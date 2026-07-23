import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

const heroSlides = [
  {
    id: 1,
    title: "Digital Excellence",
    subtitle: "Transforming Ideas Into Reality",
    description: "We create stunning digital experiences that drive business growth and user engagement",
    gradient: "from-blue-900 via-purple-900 to-pink-900",
    cta: "Start Your Project"
  },
  {
    id: 2,
    title: "Innovation Unleashed",
    subtitle: "Cutting-Edge Technology",
    description: "Leveraging the latest technologies to build scalable, performant web solutions",
    gradient: "from-emerald-900 via-teal-900 to-cyan-900",
    cta: "Explore Solutions"
  },
  {
    id: 3,
    title: "Creative Mastery",
    subtitle: "Design That Converts",
    description: "Beautiful, intuitive designs that captivate users and deliver exceptional experiences",
    gradient: "from-orange-900 via-red-900 to-pink-900",
    cta: "View Portfolio"
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient}`}
        />
      </AnimatePresence>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-4xl font-semibold mb-6 text-white/90"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.p
              className="text-xl mb-8 text-white/80 max-w-3xl mx-auto"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <MagneticButton className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-glow transition-all duration-300">
                {heroSlides[currentSlide].cta}
              </MagneticButton>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
