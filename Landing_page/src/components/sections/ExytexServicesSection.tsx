import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  Search,
  ShoppingCart,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { EnhancedButton } from '../ui/EnhancedButton';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Professional web development services with modern technologies and responsive design for optimal user experience.",
    features: ["React & Next.js", "Full-Stack Development", "Custom Solutions"]
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Creative graphic design solutions including logos, branding, and visual identity that make your business stand out.",
    features: ["Logo Design", "Brand Identity", "Visual Graphics"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
    features: ["SEO Optimization", "Social Media", "Content Marketing"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile app development for iOS and Android with seamless user experience.",
    features: ["iOS Development", "Android Apps", "Cross-Platform"]
  },
  {
    icon: Globe,
    title: "API Development",
    description: "Robust API development and integration services for seamless data exchange and system connectivity.",
    features: ["REST APIs", "GraphQL", "Third-party Integration"]
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Advanced SEO strategies to improve your website's visibility and drive organic traffic growth.",
    features: ["On-page SEO", "Technical SEO", "Analytics"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce development with secure payment integration and inventory management.",
    features: ["Online Stores", "Payment Gateway", "Inventory System"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Website and application optimization for faster loading times and better user experience.",
    features: ["Speed Optimization", "Performance Monitoring", "Code Optimization"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const ExytexServicesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cardsPerView = 2; // Show 2 cards at once
  const totalSlides = Math.ceil(services.length / cardsPerView);

  // Auto-rotation every 2 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Software Development Services
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Exytex Technologies is a leading IT Software Company in Pakistan, registered by PSEB. 
            We provide comprehensive web development, graphic design, digital marketing, and mobile application services.
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative mb-16">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-4xl mx-auto">
                    {services
                      .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                      .map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                          <motion.div
                            key={service.title}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ 
                              y: -8,
                              transition: { duration: 0.3 }
                            }}
                            className="group"
                          >
                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 h-full relative overflow-hidden">
                              {/* Enhanced Background Icon */}
                              <div className="absolute top-4 right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-all duration-500 overflow-hidden">
                                <IconComponent className="w-full h-full text-blue-600 transform rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" />
                              </div>
                              
                              {/* Clean gradient background */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 group-hover:from-blue-100/60 group-hover:to-slate-100/60 transition-all duration-500 rounded-3xl"></div>

                              {/* Content */}
                              <div className="relative z-10">
                                {/* Clean Icon */}
                                <motion.div
                                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 relative"
                                  whileHover={{ 
                                    scale: 1.1,
                                  }}
                                  transition={{ duration: 0.3, type: "spring" }}
                                >
                                  <IconComponent className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                                  {service.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                                  {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3">
                                  {service.features.map((feature, featureIndex) => (
                                    <motion.li 
                                      key={featureIndex} 
                                      className="flex items-center text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300" 
                                      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                    >
                                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                                      {feature}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg border border-slate-200 hover:border-blue-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg border border-slate-200 hover:border-blue-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </motion.button>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-blue-500 animate-pulse' : 'bg-slate-400'}`}></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
