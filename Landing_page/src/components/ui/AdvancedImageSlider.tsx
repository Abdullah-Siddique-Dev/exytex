import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
  cta: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Digital Excellence",
    subtitle: "Transform Your Business",
    description: "We create stunning digital experiences that drive growth and engagement through innovative technology solutions.",
    image: "🚀",
    gradient: "from-blue-600 via-purple-600 to-indigo-700",
    cta: "Start Your Journey"
  },
  {
    id: 2,
    title: "Creative Innovation",
    subtitle: "Design That Converts",
    description: "Beautiful, user-centered designs that captivate audiences and deliver exceptional user experiences across all platforms.",
    image: "🎨",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    cta: "Explore Our Work"
  },
  {
    id: 3,
    title: "Technology Leadership",
    subtitle: "Future-Ready Solutions",
    description: "Cutting-edge technology solutions that scale with your business and adapt to tomorrow's challenges and opportunities.",
    image: "💡",
    gradient: "from-orange-500 via-red-600 to-pink-700",
    cta: "Discover More"
  }
];

export const AdvancedImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
        />
      </AnimatePresence>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
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
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <motion.div
                  className="inline-block px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  ✨ {slides[currentSlide].subtitle}
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="text-xl mb-8 leading-relaxed opacity-90 max-w-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.button
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[currentSlide].cta}
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Right Visual */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="text-9xl filter drop-shadow-2xl"
                >
                  {slides[currentSlide].image}
                </motion.div>
              </AnimatePresence>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full backdrop-blur-lg"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-white/20 rounded-lg backdrop-blur-lg"
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-3xl z-20 p-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-3xl z-20 p-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
      >
        →
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </section>
  );
};
