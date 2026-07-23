import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Target, BarChart3, ArrowRight } from 'lucide-react';

export const DigitalMarketingHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Digital marketing dashboard
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Analytics charts
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Computer with analytics
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // SEO and digital marketing tools
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'  // Social media marketing interface
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
              🚀 Transform Your Digital Presence
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white text-left"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Digital Marketing Excellence
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl text-left"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data-driven strategies that boost your online presence, engage your audience, and maximize ROI through proven digital marketing techniques.
          </motion.p>

          {/* Stats Cards - Glassmorphism */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { icon: TrendingUp, label: '300% Avg ROI', desc: 'Return on Investment' },
              { icon: Target, label: '500+ Campaigns', desc: 'Successfully Delivered' },
              { icon: BarChart3, label: '98% Success Rate', desc: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <stat.icon className="w-6 h-6 text-white mb-3" />
                <div className="text-xl font-bold text-white mb-1 text-left" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300 text-left" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="#digital-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center w-fit"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#digital-services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md w-fit"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white w-12' : 'bg-white/40 hover:bg-white/60 w-2'
            }`}
            aria-label={`Switch to background image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};