import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Award, Code, Smartphone, Globe, Database, Cloud, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TopSoftwareDevelopmentSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const slides = [
    {
      title: 'Professional Web Development Services - Custom Web Applications',
      description: 'Transform your ideas into powerful web applications with modern technology and expert development.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=900&fit=crop&auto=format&q=80'
    },
    {
      title: 'Transform Your Business with Cutting-Edge Technology',
      description: 'We deliver innovative software solutions that drive growth, efficiency, and digital transformation for businesses worldwide.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1400&h=900&fit=crop&auto=format&q=80'
    },
    {
      title: 'Expert Development Team at Your Service',
      description: 'Our experienced developers and consultants work closely with you to bring your vision to life with precision and excellence.',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1400&h=900&fit=crop&auto=format&q=80'
    }
  ];

  const swappingCards = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'WEB APPS',
      subtitle: 'Modern Solutions',
      description: 'Responsive web applications with cutting-edge technology.',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'MOBILE',
      subtitle: 'Cross Platform',
      description: 'Native applications for iOS and Android.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/20'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'CUSTOM',
      subtitle: 'Tailored Solutions',
      description: 'Bespoke software designed with precision.',
      color: 'from-green-500 to-blue-600',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'DATABASE',
      subtitle: 'Scalable Systems',
      description: 'Robust database architecture and optimization.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/20'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'CLOUD',
      subtitle: 'Modern Infrastructure',
      description: 'Cloud-native solutions for scalability.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/20'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'PERFORMANCE',
      subtitle: 'Optimized Speed',
      description: 'High-performance applications with fast loading.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-500/20'
    }
  ];

  // Auto-advance cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % swappingCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [swappingCards.length]);

  const awards = [
    { name: 'Top Developer' },
    { name: 'Best Quality' },
    { name: 'Industry Leader' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section - Full Width */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]">
          {/* Background Image with Slider */}
          <div className="absolute inset-0 z-0">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={slide.image} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/60"></div>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between min-h-[450px] sm:min-h-[500px] lg:min-h-[550px]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full">
              <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
                
                {/* Left Side - Text Content */}
                <div className="flex flex-col justify-center py-8">
                  {/* Top Badge */}
                  <motion.div
                    className="inline-flex items-center self-start px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20 mb-6"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    ⚡ Leading Software House in Pakistan
                  </motion.div>

                  {/* Main Content with Slider */}
                  <div className="max-w-2xl">
                    <motion.h1
                      key={currentSlide}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {slides[currentSlide].title}
                    </motion.h1>

                    <motion.p
                      key={`desc-${currentSlide}`}
                      className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">200+</div>
                        <div className="text-sm text-white/70">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-sm text-white/70">Client Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-sm text-white/70">Support Available</div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-all text-sm"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.a>
                      
                      <motion.button
                        onClick={() => navigate('/services/web-development')}
                        className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-all text-sm"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>

                  {/* Awards Section */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-white/70 text-sm mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>Awards & Recognition</p>
                      <div className="flex gap-4">
                        {awards.map((_, index) => (
                          <div
                            key={index}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                          >
                            <Award className="w-5 h-5 text-white" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Swapping Cards */}
                <div className="hidden lg:flex justify-center items-center py-8">
                  <div className="relative w-80 h-96">
                    {/* Background Cards Stack Effect */}
                    <div className="absolute inset-0">
                      {[0, 1, 2].map((offset) => (
                        <div
                          key={offset}
                          className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                          style={{
                            transform: `translateY(${offset * 8}px) translateX(${offset * 4}px)`,
                            zIndex: 3 - offset,
                            opacity: 1 - offset * 0.3
                          }}
                        />
                      ))}
                    </div>

                    {/* Main Swapping Card */}
                    <div className="relative z-10 w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentCard}
                          className={`absolute inset-0 ${swappingCards[currentCard].bgColor} backdrop-blur-lg rounded-2xl border border-white/20 p-8 flex flex-col justify-between`}
                          initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                          exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          {/* Card Header */}
                          <div>
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${swappingCards[currentCard].color} text-white mb-6`}>
                              {swappingCards[currentCard].icon}
                            </div>
                            
                            <div className="mb-4">
                              <div className="text-xs font-bold text-white/60 tracking-wider mb-1">
                                {swappingCards[currentCard].title}
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">
                                {swappingCards[currentCard].subtitle}
                              </h3>
                              <p className="text-sm text-white/80 leading-relaxed">
                                {swappingCards[currentCard].description}
                              </p>
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs text-white/60">
                              <span>Best-in-class solutions</span>
                              <span>Scalable & secure</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-white/60">
                              <span>Expert development</span>
                              <span>24/7 support</span>
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="absolute bottom-4 left-8 right-8">
                            <div className="flex gap-1">
                              {swappingCards.map((_, index) => (
                                <div
                                  key={index}
                                  className={`h-1 rounded-full transition-all duration-300 ${
                                    index === currentCard ? 'bg-white flex-1' : 'bg-white/30 w-1'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-40"
                      animate={{ 
                        y: [0, 10, 0],
                        x: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              <motion.button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
      </div>
    </section>
  );
};
