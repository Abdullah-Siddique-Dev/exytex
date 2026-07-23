import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DamcoTechHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop&auto=format&q=80', // Circuit board technology
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&auto=format&q=80', // Abstract technology network
    'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=800&fit=crop&auto=format&q=80', // Digital technology background
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&auto=format&q=80', // Technology server room
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop&auto=format&q=80', // Blockchain technology visualization
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-24 pb-12 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
              Damco Technology Stack
            </div>

            {/* Main Heading - SEO Optimized */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comprehensive Technology Stack - Blockchain, AI/ML, Cloud Computing & Mobile Development Solutions
            </h1>

            {/* Subheading */}
            <h2 className="text-xl text-blue-600 font-semibold">
              Outpace Your Competition with Futuristic Solutions
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              Damco as your technology partner and innovation hub, enables you to achieve your goals. With over 27 years of experience, our multi-industry expertise puts us in a favorable position to enable, equip, and elevate technology for addressing the most complex business challenges.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">27+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">500+</div>
                <div className="text-xs text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-xs text-gray-600">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Auto-Changing Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
              {/* Image Slider */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Advanced Technology Stack - ${['Circuit Board Technology', 'Digital Network Infrastructure', 'Technology Innovation', 'Server Technology', 'Blockchain Visualization'][currentImageIndex]}`}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>

              {/* Slider Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-white w-8'
                        : 'bg-white/50 w-2 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
