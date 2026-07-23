import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GraphicDesignPortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      icon: '🎨',
      title: 'Brand Identity Excellence',
      description: 'Creating memorable brand identities that resonate with your target audience and stand out in the market.',
      stats: '150+ Brands'
    },
    {
      icon: '📱',
      title: 'Digital Design Mastery',
      description: 'Stunning digital graphics for web, social media, and mobile applications that drive engagement.',
      stats: '500+ Graphics'
    },
    {
      icon: '📄',
      title: 'Print Design Perfection',
      description: 'Professional print materials including brochures, business cards, and marketing collateral.',
      stats: '300+ Projects'
    },
    {
      icon: '📦',
      title: 'Packaging Innovation',
      description: 'Creative packaging solutions that make your products irresistible on store shelves.',
      stats: '100+ Packages'
    },
    {
      icon: '🎪',
      title: 'Event Design Magic',
      description: 'Complete event branding and design solutions that create unforgettable experiences.',
      stats: '75+ Events'
    },
    {
      icon: '🌐',
      title: 'Web Graphics Excellence',
      description: 'UI/UX graphics and web elements that enhance user experience and visual appeal.',
      stats: '200+ Websites'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-inter">
            Our Design Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Discover our creative design solutions across various industries and platforms
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-6xl">
            {portfolioItems.map((item, index) => {
              const offset = (index - currentIndex + portfolioItems.length) % portfolioItems.length;
              const isCenter = offset === 0;
              const isLeft = offset === portfolioItems.length - 1 || offset === portfolioItems.length - 2;
              const isRight = offset === 1 || offset === 2;
              
              let transform = '';
              let zIndex = 0;
              let opacity = 0.3;
              
              if (isCenter) {
                transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1.1)';
                zIndex = 10;
                opacity = 1;
              } else if (isLeft) {
                const leftOffset = offset === portfolioItems.length - 1 ? -1 : -2;
                transform = `translateX(${leftOffset * 200}px) translateZ(-200px) rotateY(45deg) scale(0.8)`;
                zIndex = 5 - Math.abs(leftOffset);
                opacity = 0.6;
              } else if (isRight) {
                const rightOffset = offset;
                transform = `translateX(${rightOffset * 200}px) translateZ(-200px) rotateY(-45deg) scale(0.8)`;
                zIndex = 5 - rightOffset;
                opacity = 0.6;
              } else {
                transform = 'translateX(0) translateZ(-400px) scale(0.5)';
                zIndex = 1;
                opacity = 0.2;
              }

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-80 h-96 cursor-pointer"
                  style={{
                    transform: `translate(-50%, -50%) ${transform}`,
                    zIndex,
                    opacity,
                    transformStyle: 'preserve-3d'
                  }}
                  animate={{
                    transform: `translate(-50%, -50%) ${transform}`,
                    opacity,
                    zIndex
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ 
                    y: isCenter ? -10 : -5,
                    scale: isCenter ? 1.15 : 0.85
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm font-inter">
                      {item.description}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold font-inter">
                      {item.stats}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { number: '1000+', label: 'Designs Created', icon: '🎨' },
            { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '24/7', label: 'Design Support', icon: '🛠️' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-purple-600 mb-2 font-inter">{stat.number}</div>
              <div className="text-gray-600 font-medium font-inter">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};