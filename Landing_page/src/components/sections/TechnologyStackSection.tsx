import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const TechnologyStackSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop&auto=format&q=80', // Circuit board technology
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&auto=format&q=80', // Abstract technology network
    'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=800&fit=crop&auto=format&q=80', // Digital technology background
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&auto=format&q=80', // Technology server room
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop&auto=format&q=80', // Blockchain technology visualization
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[500px]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-medium"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Code2 className="w-3.5 h-3.5 mr-1.5" />
              Our Technology Stack
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Cutting-Edge Technologies for Modern Solutions
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base text-gray-700 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We leverage the latest technologies and frameworks to build
              scalable, secure, and high-performance applications for web,
              mobile, and cloud platforms.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                  50+
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Technologies
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">
                  500+
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Projects
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">
                  10+
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Auto-Changing Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] sm:h-[400px] lg:h-[500px]"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
              {/* Image Slider */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Technology ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30"></div>

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

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
