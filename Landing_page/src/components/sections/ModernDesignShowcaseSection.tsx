import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const ModernDesignShowcaseSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop&auto=format&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-18 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[600px]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-medium"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Code2 className="w-4 h-4 mr-2" />
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
              We leverage the latest technologies and frameworks to build scalable, secure, and high-performance applications for web, mobile, and cloud platforms.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                  50+
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Technologies
                </div>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">
                  500+
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Projects
                </div>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
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
