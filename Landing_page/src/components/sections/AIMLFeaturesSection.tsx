import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AIMLFeaturesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: '🧠',
      title: 'Deep Learning Excellence',
      description: 'Advanced neural networks and deep learning models that can process complex patterns and deliver superior accuracy.',
      stats: 'Neural Networks'
    },
    {
      icon: '🔍',
      title: 'Intelligent Data Analysis',
      description: 'Sophisticated algorithms that extract meaningful insights from large datasets and unstructured data.',
      stats: 'Big Data Ready'
    },
    {
      icon: '🤖',
      title: 'Automated Decision Making',
      description: 'AI systems that can make intelligent decisions in real-time based on learned patterns and business rules.',
      stats: 'Real-time AI'
    },
    {
      icon: '📊',
      title: 'Predictive Modeling',
      description: 'Advanced forecasting models that help businesses anticipate trends and make proactive decisions.',
      stats: '95% Accuracy'
    },
    {
      icon: '💬',
      title: 'Natural Language AI',
      description: 'Sophisticated NLP systems that understand, process, and generate human language with high accuracy.',
      stats: 'Multi-language'
    },
    {
      icon: '👁️',
      title: 'Computer Vision Systems',
      description: 'Advanced image and video processing capabilities for object detection, recognition, and analysis.',
      stats: 'Real-time Vision'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-inter">
            AI & ML Capabilities
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto font-inter">
            Explore our comprehensive AI and Machine Learning capabilities designed to transform your business
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-6xl">
            {features.map((feature, index) => {
              const offset = (index - currentIndex + features.length) % features.length;
              const isCenter = offset === 0;
              const isLeft = offset === features.length - 1 || offset === features.length - 2;
              const isRight = offset === 1 || offset === 2;
              
              let transform = '';
              let zIndex = 0;
              let opacity = 0.3;
              
              if (isCenter) {
                transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1.1)';
                zIndex = 10;
                opacity = 1;
              } else if (isLeft) {
                const leftOffset = offset === features.length - 1 ? -1 : -2;
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
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm font-inter">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold font-inter">
                      {feature.stats}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-blue-400'
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
            { number: '100+', label: 'AI Models Deployed', icon: '🤖' },
            { number: '99%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '24/7', label: 'AI Monitoring', icon: '🛠️' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2 font-inter">{stat.number}</div>
              <div className="text-gray-600 font-medium font-inter">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};