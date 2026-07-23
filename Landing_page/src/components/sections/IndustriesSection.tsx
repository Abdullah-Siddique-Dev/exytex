import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, inView: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
};

const industries = [
  {
    name: 'Healthcare',
    icon: '🏥',
    description: 'Digital health solutions that improve patient care and operational efficiency',
    projects: 50,
    gradient: 'from-green-500 to-emerald-600',
    bgPattern: 'bg-green-50'
  },
  {
    name: 'FinTech',
    icon: '💳',
    description: 'Secure financial technology solutions for modern banking and payments',
    projects: 40,
    gradient: 'from-blue-500 to-cyan-600',
    bgPattern: 'bg-blue-50'
  },
  {
    name: 'E-commerce',
    icon: '🛒',
    description: 'Scalable e-commerce platforms that drive sales and customer engagement',
    projects: 60,
    gradient: 'from-purple-500 to-pink-600',
    bgPattern: 'bg-purple-50'
  },
  {
    name: 'Education',
    icon: '🎓',
    description: 'EdTech solutions that transform learning experiences and outcomes',
    projects: 30,
    gradient: 'from-orange-500 to-red-600',
    bgPattern: 'bg-orange-50'
  },
  {
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Industry 4.0 solutions for smart manufacturing and supply chain',
    projects: 25,
    gradient: 'from-gray-600 to-gray-800',
    bgPattern: 'bg-gray-50'
  },
  {
    name: 'Real Estate',
    icon: '🏢',
    description: 'PropTech solutions for property management and real estate operations',
    projects: 35,
    gradient: 'from-indigo-500 to-blue-600',
    bgPattern: 'bg-indigo-50'
  }
];

export const IndustriesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle card active
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotation every 3 seconds with smooth looping
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Smooth looping: when reaching the end, go to beginning
        const nextIndex = (prev + 1) % industries.length;
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000); // Resume after 6 seconds
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000); // Resume after 6 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000); // Resume after 6 seconds
  };

  // Calculate card position and styling for 3D coverflow effect
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex > 2) return { display: 'none' };
    
    const isCenter = diff === 0;
    const isLeft = diff < 0;
    const isRight = diff > 0;
    
    let transform = '';
    let zIndex = 10 - absIndex;
    let opacity = 1;
    let scale = 1;
    
    if (isCenter) {
      transform = 'translateX(0) rotateY(0deg) translateZ(0px)';
      scale = 1;
      opacity = 1;
      zIndex = 20;
    } else if (absIndex === 1) {
      const rotateY = isLeft ? '45deg' : '-45deg';
      const translateX = isLeft ? '-60%' : '60%';
      const translateZ = '-100px';
      transform = `translateX(${translateX}) rotateY(${rotateY}) translateZ(${translateZ})`;
      scale = 0.85;
      opacity = 0.7;
      zIndex = 15;
    } else if (absIndex === 2) {
      const rotateY = isLeft ? '60deg' : '-60deg';
      const translateX = isLeft ? '-120%' : '120%';
      const translateZ = '-200px';
      transform = `translateX(${translateX}) rotateY(${rotateY}) translateZ(${translateZ})`;
      scale = 0.7;
      opacity = 0.4;
      zIndex = 10;
    }
    
    return {
      transform,
      zIndex,
      opacity,
      scale,
    };
  };

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
          >
            <motion.svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </motion.svg>
            Industries We Serve
            <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Expertise Across Multiple Industries
            </span>
          </h2>
          
          <motion.p 
            className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6" 
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, scale: 0.4, rotateX: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.9, 
              type: "spring", 
              stiffness: 85,
              damping: 16,
              bounce: 0.35
            }}
          >
            We bring deep industry knowledge and technical expertise to deliver solutions that address specific sector challenges
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </AnimatedSection>

        {/* 3D Coverflow Carousel */}
        <div className="relative">
          <div 
            className="flex items-center justify-center h-96 perspective-1000"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              {industries.map((industry, index) => {
                const cardStyle = getCardStyle(index);
                const ref = React.useRef(null);
                const isInView = useInView(ref, { once: true });
                const projectCount = useCounter(industry.projects, 2000, isInView && index === currentIndex);
                
                return (
                  <motion.div
                    key={industry.name}
                    ref={ref}
                    className="absolute w-80 h-80 cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      ...cardStyle,
                    }}
                    animate={{
                      transform: cardStyle.transform,
                      opacity: cardStyle.opacity,
                      scale: cardStyle.scale,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    onClick={() => goToSlide(index)}
                    whileHover={index === currentIndex ? { 
                      scale: 1.05,
                      y: -10,
                    } : {}}
                  >
                    <div className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative group">
                      {/* Enhanced Background Image */}
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-all duration-500">
                        <img 
                          src={
                            industry.name === 'Healthcare' ? 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=350&fit=crop' :
                            industry.name === 'FinTech' ? 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=350&fit=crop' :
                            industry.name === 'E-commerce' ? 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&h=350&fit=crop' :
                            industry.name === 'Education' ? 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=350&fit=crop' :
                            industry.name === 'Manufacturing' ? 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop' :
                            'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&h=350&fit=crop'
                          }
                          alt={industry.name}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60"></div>
                      </div>
                      
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                        {/* Icon */}
                        <motion.div
                          className="text-6xl mb-4 filter drop-shadow-lg"
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: [0, -10, 10, 0],
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {industry.icon}
                        </motion.div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                          {industry.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-slate-600 mb-6 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                          {industry.description}
                        </p>
                        
                        {/* Project Count */}
                        <div className="flex items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {projectCount}+
                            </span>
                            <span className="text-sm font-medium text-slate-600">Projects</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous Button - Smaller */}
            <motion.button
              onClick={prevSlide}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg border border-slate-200 hover:border-blue-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {industries.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button - Smaller */}
            <motion.button
              onClick={nextSlide}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg border border-slate-200 hover:border-blue-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </motion.button>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-blue-500 animate-pulse' : 'bg-slate-400'}`}></div>
            </div>
          </div>
        </div>

        {/* Professional Stats Section */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 1px, transparent 1px),
                                 radial-gradient(circle at 75% 75%, #6366F1 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  Our Track Record
                </h3>
                <p className="text-slate-600 text-base" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  Numbers that speak for our commitment to excellence
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { number: 240, label: 'Projects Delivered', suffix: '+', icon: '📊' },
                  { number: 15, label: 'Industries Served', suffix: '+', icon: '🏢' },
                  { number: 98, label: 'Client Satisfaction', suffix: '%', icon: '😊' },
                  { number: 24, label: 'Support Available', suffix: '/7', icon: '🕒' }
                ].map((stat, index) => {
                  const ref = React.useRef(null);
                  const isInView = useInView(ref, { once: true });
                  const count = useCounter(stat.number, 2500, isInView);
                  
                  return (
                    <motion.div
                      key={index}
                      ref={ref}
                      className="text-center group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring', bounce: 0.2 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      {/* Icon */}
                      <div className="text-2xl mb-3">{stat.icon}</div>
                      
                      {/* Number */}
                      <div className="text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                        <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                          {count}{stat.suffix}
                        </span>
                      </div>
                      
                      {/* Label */}
                      <div className="text-slate-600 font-medium text-sm" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};