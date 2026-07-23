import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IOSServicesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'Native iOS Apps',
      description: 'Custom iOS applications built with Swift and UIKit for optimal performance and native user experience.',
      fullDescription: 'Transform your ideas into powerful native iOS applications. We leverage Swift and UIKit to create apps that feel truly native, with smooth animations, intuitive gestures, and seamless integration with iOS features like Face ID, Apple Pay, and Siri Shortcuts.',
      features: ['Swift Development', 'UIKit Framework', 'Core Data Integration', 'App Store Optimization'],
      bgImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'SwiftUI Development',
      description: 'Modern iOS apps using SwiftUI for declarative UI development and cross-platform compatibility.',
      fullDescription: 'Build the future of iOS apps with SwiftUI. Our declarative approach creates beautiful, responsive interfaces that adapt seamlessly across iPhone, iPad, and Mac. Experience faster development cycles and maintainable code.',
      features: ['SwiftUI Framework', 'Declarative UI', 'iOS 13+ Support', 'Cross-platform'],
      bgImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'App Modernization',
      description: 'Upgrade legacy iOS apps with modern Swift features, improved UI/UX, and latest iOS capabilities.',
      fullDescription: 'Breathe new life into your existing iOS applications. We modernize legacy codebases, implement the latest iOS features, and redesign user experiences to meet current App Store standards and user expectations.',
      features: ['Legacy Migration', 'Performance Optimization', 'UI/UX Redesign', 'iOS Updates'],
      bgImage: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      color: 'from-teal-400 to-pink-400'
    },
    {
      title: 'Enterprise iOS',
      description: 'Secure enterprise iOS applications with advanced security features and enterprise integrations.',
      fullDescription: 'Enterprise-grade iOS solutions built for business. We implement advanced security protocols, MDM integration, and corporate compliance features while maintaining the elegant user experience iOS is known for.',
      features: ['Enterprise Security', 'MDM Integration', 'Corporate Apps', 'API Integration'],
      bgImage: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      color: 'from-orange-400 to-red-400'
    },
    {
      title: 'iOS Games',
      description: 'Engaging iOS games using SpriteKit, SceneKit, and Metal for immersive gaming experiences.',
      fullDescription: 'Create captivating gaming experiences on iOS. Using SpriteKit for 2D games and SceneKit for 3D experiences, we build games that leverage the full power of iOS devices with stunning graphics and smooth gameplay.',
      features: ['SpriteKit Games', 'Metal Graphics', 'Game Center', 'In-App Purchases'],
      bgImage: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'watchOS Apps',
      description: 'Apple Watch applications that extend your iOS app functionality to the wrist.',
      fullDescription: 'Extend your iOS app to Apple Watch with native watchOS applications. We create companion apps that provide quick access to key features, health monitoring, and notifications right on your users\' wrists.',
      features: ['WatchKit Development', 'Health Integration', 'Complications', 'Standalone Apps'],
      bgImage: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      color: 'from-green-400 to-blue-400'
    }
  ];

  const visibleServices = services.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < services.length) {
      setCurrentIndex(currentIndex + 1);
      setExpandedCard(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setExpandedCard(null);
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-4xl mr-4 filter drop-shadow-lg">✨</span>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Our Services
              </h2>
            </motion.div>
            
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-200 mb-6 tracking-wide"
              style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Professional Digital Solutions
            </motion.h3>
            
            <motion.p
              className="text-xl md:text-2xl text-blue-300/90 max-w-5xl leading-relaxed font-light"
              style={{ fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We deliver cutting-edge solutions tailored to your business needs with expertise and innovation that drives real results
            </motion.p>
          </div>

          {/* Services Label */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center">
              <h4 className="text-lg font-semibold text-white/90 mr-4">Services</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white/10 hover:border-white/50 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + 4 >= services.length}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentIndex + 4 >= services.length 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white/10 hover:border-white/50 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Services Cards */}
          <div className="flex gap-4 px-16 overflow-hidden">
            <AnimatePresence>
              {visibleServices.map((service, index) => {
                const isExpanded = expandedCard === index;
                return (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                      isExpanded ? 'flex-[2]' : 'flex-1'
                    }`}
                    style={{
                      background: service.bgImage,
                      minHeight: '400px'
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleExpand(index)}
                  >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className={`font-bold text-white transition-all duration-300 ${
                          isExpanded ? 'text-2xl' : 'text-lg'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <motion.button
                          className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </motion.svg>
                        </motion.button>
                      </div>

                      {/* Description */}
                      <p className={`text-white/90 mb-6 transition-all duration-300 ${
                        isExpanded ? 'text-base leading-relaxed' : 'text-sm'
                      }`}>
                        {isExpanded ? service.fullDescription : service.description}
                      </p>

                      {/* Features - Only show when expanded */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-auto"
                          >
                            <div className="grid grid-cols-2 gap-3">
                              {service.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-center text-sm text-white/80"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                                  {feature}
                                </motion.div>
                              ))}
                            </div>
                            
                            <motion.button
                              className="mt-6 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              Learn More
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(services.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index * 4);
                setExpandedCard(null);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 4) === index
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};