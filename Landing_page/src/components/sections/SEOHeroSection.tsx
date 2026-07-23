import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Target, BarChart3 } from 'lucide-react';

export const SEOHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920&h=1080&fit=crop&auto=format&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('seo-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 pt-56 overflow-hidden bg-gray-900">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full mb-4 border border-blue-400/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-blue-200 text-sm font-semibold">No#1 Position Guaranteed</span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Top SEO Experts in Dubai
                </span>
                <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent mt-2">
                  Best SEO Company Dubai
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed font-light"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                If you are looking for an SEO Services Company in Dubai we can help and improve your top position on Google. Exytex is an SEO company Dubai dedicated to providing visibility services on the Internet through Web positioning in search engines (also known as organic positioning or natural positioning).
              </motion.p>

              {/* Feature List */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {[
                  { icon: TrendingUp, text: 'Boost Your Credibility' },
                  { icon: Target, text: 'Competitive Advantage' },
                  { icon: Search, text: 'Local SEO Strategies' },
                  { icon: BarChart3, text: 'Offers Impressive ROI' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-white/90"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-blue-200" />
                    </div>
                    <span className="text-sm font-light">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <button
                  onClick={scrollToContact}
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side Image Carousel */}
            <motion.div
              className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {backgroundImages.map((bg, index) => (
                <img
                  key={index}
                  src={bg}
                  alt={`SEO Services ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};