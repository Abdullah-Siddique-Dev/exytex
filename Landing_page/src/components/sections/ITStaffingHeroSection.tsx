import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Shield, Globe, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { scrollToContactForm } from '../../utils/scrollUtils';

export const ITStaffingHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Team collaboration
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // IT professionals working
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80', // Professional woman in tech
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'  // Developers at work
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative py-24 pt-56 overflow-hidden bg-slate-900">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                  Connect with Top IT Talent
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                IT Staffing <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional IT talent recruitment services connecting businesses with skilled developers, engineers, and technology professionals worldwide.
              </motion.p>

              {/* Key Features */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {[
                  { icon: CheckCircle, text: '1000+ Pre-vetted Professionals' },
                  { icon: Clock, text: '1-2 Weeks Quick Matching' },
                  { icon: Shield, text: '98% Retention Rate' },
                  { icon: Globe, text: 'Global Talent Network' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 mb-8 pt-6 border-t border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {[
                  { value: '1000+', label: 'IT Professionals' },
                  { value: '98%', label: 'Success Rate' },
                  { value: '48hrs', label: 'Avg. Response' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.button
                  onClick={scrollToContactForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 inline-flex items-center justify-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  <span className="relative z-10">Find IT Talent</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side Image Carousel */}
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`IT Staffing ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};