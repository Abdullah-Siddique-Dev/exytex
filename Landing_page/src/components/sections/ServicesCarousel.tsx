import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web & Mobile Development',
    description: 'Comprehensive development solutions for modern digital experiences',
    features: [
      'Tech Consulting & Application Development',
      'Frontend Development & JavaScript Frameworks',
      'Enterprise Mobility Applications (iOS, Android, Hybrid)',
      'RIA Application Development (JavaFX, Silverlight, Google Web Toolkit)',
      'UI/UX Design & Responsive Web Development',
      'Web Application Support & Optimization'
    ],
    icon: '🚀',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    description: 'Drive organic traffic and improve search visibility',
    features: [
      'SEO Audit & Website Optimization Analysis',
      'Keyword Research & Target Search Terms',
      'Competitive Analysis & Strategy Development',
      'Backlinking Strategies & Authority Building',
      'Google Analytics/GA4 Migration',
      'Performance Monitoring & Reporting'
    ],
    icon: '📈',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'CRM Strategy & Implementation',
    description: 'Streamline customer relationships and data management',
    features: [
      'CRM Launch & System Implementation',
      'CRM Migration & Data Safety',
      'CRM Consolidation & Data Integration',
      'Salesforce & MS Dynamics Solutions',
      'Custom CRM Development',
      'Training & Support Services'
    ],
    icon: '🎯',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Marketing Technology Implementation',
    description: 'Advanced marketing automation and inbound solutions',
    features: [
      'Pardot, HubSpot, Marketo Resources',
      'Marketing Automation Platform Assessment',
      'Inbound Marketing Solutions',
      'Landing Page Development & Design',
      'Persona Development & Content Marketing',
      'Sales Funnel Development & Optimization'
    ],
    icon: '🎨',
    gradient: 'from-orange-500 to-red-500'
  }
];

const ServicesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Our Services Offerings
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We deliver comprehensive technology-enabled solutions for your now and tomorrow.
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onWheel={(e) => {
            // Don't prevent page scroll
            e.stopPropagation();
          }}
        >
          {/* 3D Carousel Container */}
          <div className="relative h-[600px] perspective-1000">
            <AnimatePresence mode="wait">
              {services.map((service, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                
                return (
                  <motion.div
                    key={service.id}
                    className="absolute inset-0 w-full"
                    initial={{ 
                      rotateY: offset * 45,
                      z: -absOffset * 200,
                      opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.5
                    }}
                    animate={{ 
                      rotateY: offset * 45,
                      z: -absOffset * 200,
                      opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.5,
                      scale: absOffset === 0 ? 1 : 0.8 - absOffset * 0.1
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className={`glass-card h-full p-8 bg-gradient-to-br ${service.gradient}/10 border border-white/20`}>
                      <div className="flex flex-col h-full">
                        <div className="text-center mb-8">
                          <div className="text-6xl mb-4">{service.icon}</div>
                          <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                          <p className="text-lg text-white/80">{service.description}</p>
                        </div>
                        
                        <div className="flex-1">
                          <div className="grid gap-4">
                            {service.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                <span className="text-white/90">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-button p-3 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-button p-3 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <button className="glass-button px-8 py-4 text-lg font-semibold text-white hover:scale-105 transition-all duration-300">
            Request a Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCarousel;