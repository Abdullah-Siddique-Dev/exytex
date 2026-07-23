import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IndustriesHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const images = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format&q=80',
  ];

  const features = [
    'Industry-Specific Solutions',
    'Expert Technology Teams',
    'Proven Track Record',
    'End-to-End Support'
  ];

  const industries = [
    'Automotive',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % industries.length;
      const fullText = industries[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, industries]);

  const scrollToIndustries = () => {
    const element = document.getElementById('industries-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-white to-gray-50/30 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm font-medium"
            >
              Industry-Specific Solutions
            </motion.div>

            {/* Main Heading with Typing Effect */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Industries We Serve
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
            >
              Transforming businesses across diverse sectors with innovative technology solutions tailored to your industry's unique challenges.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">240+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">150+</div>
                <div className="text-xs text-gray-600">Clients</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">12+</div>
                <div className="text-xs text-gray-600">Industries</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button
                onClick={scrollToIndustries}
                className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Explore Solutions
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Auto-Changing Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] mt-8 lg:mt-0"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Industry ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent"></div>

              {/* Slider Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-white w-6 sm:w-8'
                        : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/75'
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
