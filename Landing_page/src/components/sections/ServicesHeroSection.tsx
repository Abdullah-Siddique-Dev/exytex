import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterText } from '../ui/TypewriterText';
import { HoverArrowButton } from '../ui/HoverArrowButton';

const serviceImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    alt: "Modern technology and software development setup"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    alt: "Advanced coding and programming technology"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    alt: "Digital analytics and business intelligence dashboard"
  }
];

export const ServicesHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate images every 8 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="max-w-2xl">
              {/* Main Heading with Typewriter Effect */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-left text-white"
                style={{ 
                  fontFamily: '"Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
                  letterSpacing: '-0.01em'
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="block mb-2 text-white"
                  style={{ 
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Comprehensive Software Development
                </motion.span>
                <motion.div 
                  className="block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <TypewriterText
                    texts={[
                      'Services',
                      'Solutions',
                      'Innovation',
                      'Excellence'
                    ]}
                    speed={100}
                    deleteSpeed={60}
                    pauseTime={4000}
                    className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                    style={{ 
                      textShadow: '0 2px 10px rgba(59, 130, 246, 0.3)'
                    }}
                  />
                </motion.div>
              </motion.h1>

              {/* Service categories preview */}
              <motion.div
                className="flex flex-wrap justify-start gap-3 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {['Mobile Apps', 'Web Development', 'SEO', 'Digital Marketing'].map((service, index) => (
                  <motion.span
                    key={service}
                    className="px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full text-sm text-white font-medium border border-white/30"
                    style={{ 
                      fontFamily: '"Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    {service}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subtext - Left Aligned */}
              <motion.p
                className="text-base md:text-lg text-white mb-8 leading-relaxed font-normal text-left max-w-xl"
                style={{ 
                  fontFamily: '"Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  textShadow: '0 1px 6px rgba(0, 0, 0, 0.6)',
                  lineHeight: '1.7'
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                Transforming ideas into digital excellence with cutting-edge technology, innovative solutions, and unparalleled expertise. We deliver comprehensive web, mobile, blockchain, and cloud solutions tailored for your business success.
              </motion.p>

              {/* Button - Left Aligned */}
              <motion.div
                className="flex justify-start items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <HoverArrowButton
                  text="Explore Services"
                  href="#services-list"
                  variant="primary"
                  size="md"
                />
              </motion.div>


            </div>

            {/* Right side - Image Slideshow */}
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={serviceImages[currentImageIndex].url}
                    alt={serviceImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {serviceImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 8000);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-blue-600 w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={goToPrevImage}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextImage}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
