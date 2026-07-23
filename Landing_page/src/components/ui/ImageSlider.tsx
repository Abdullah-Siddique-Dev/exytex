import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Web Development Excellence",
    description: "Creating stunning, responsive websites with cutting-edge technology",
    image: "🚀",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "UI/UX Design Mastery",
    description: "Crafting beautiful, intuitive user experiences that convert",
    image: "🎨",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "Digital Innovation",
    description: "Transforming ideas into powerful digital solutions",
    image: "💡",
    gradient: "from-emerald-600 to-teal-600"
  }
];

export const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} flex items-center justify-center`}
        >
          <div className="text-center text-white p-8">
            <motion.div
              className="text-8xl mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {slides[currentSlide].image}
            </motion.div>
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h3>
            <motion.p
              className="text-lg opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-2xl"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-2xl"
      >
        →
      </button>
    </div>
  );
};
