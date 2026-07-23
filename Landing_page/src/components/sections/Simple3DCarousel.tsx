import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Smartphone, 
  CheckCircle,
  ShoppingCart,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Simple3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const customWebCards = [
    {
      title: "Industry-Focused Solutions",
      description: "Web development that adapts to your specific business needs and industry requirements",
      icon: Globe,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Consistent User Experience", 
      description: "Seamless experience across all web, mobile, and hybrid digital platforms",
      icon: Smartphone,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Scalable Architecture",
      description: "Highly scalable solutions that can accommodate your business growth",
      icon: Code,
      gradient: "from-blue-600 to-purple-500"
    }
  ];

  const ecommerceCards = [
    {
      title: "WooCommerce Expertise",
      description: "Advanced experience in WooCommerce development and customization",
      icon: ShoppingCart,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Multi-Vendor Platforms", 
      description: "Single or multi-vendor e-commerce development for any business model",
      icon: Globe,
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "Third-Party Integrations",
      description: "Seamless integration with payment gateways and business tools",
      icon: Zap,
      gradient: "from-blue-600 to-purple-500"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % customWebCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + customWebCards.length) % customWebCards.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Custom Web Development 3D Slider */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Poppins'] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500 cursor-default">
                Custom Web Development
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 max-w-3xl mx-auto text-lg font-['Inter'] leading-relaxed"
            >
              In business, you try to solve problems. And each problem requires a specific solution. 
              That's why you need custom web development.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-6"
            ></motion.div>
          </motion.div>

          {/* 3D Card Slider */}
          <div 
            className="relative h-96 flex items-center justify-center" 
            style={{ perspective: '1200px' }}
            onWheel={(e) => {
              // Allow page scroll, don't capture wheel events
              e.stopPropagation();
            }}
          >
            <div className="relative w-full max-w-6xl">
              {customWebCards.map((card, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                const isActive = offset === 0;
                
                let transform = '';
                let zIndex = 10 - absOffset;
                let opacity = 1;
                
                if (offset === 0) {
                  transform = 'translateX(0px) translateZ(100px) rotateY(0deg) scale(1.1)';
                } else if (offset === 1 || offset === -2) {
                  transform = 'translateX(300px) translateZ(0px) rotateY(-25deg) scale(0.9)';
                  opacity = 0.7;
                } else if (offset === -1 || offset === 2) {
                  transform = 'translateX(-300px) translateZ(0px) rotateY(25deg) scale(0.9)';
                  opacity = 0.7;
                } else {
                  opacity = 0;
                }

                return (
                  <motion.div
                    key={index}
                    animate={{
                      opacity,
                      zIndex
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) ${transform}`,
                      transformStyle: 'preserve-3d'
                    }}
                    className="w-80 h-72"
                  >
                    <div className={`group relative w-full h-full backdrop-blur-lg bg-white/80 border border-white/50 rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden ${isActive ? 'hover:shadow-3xl' : ''}`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl`}>
                          <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/40 rounded-full"></div>
                          <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-lg"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <card.icon className="w-32 h-32 text-white/20" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <card.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 mb-3 font-['Poppins'] transition-colors duration-300">
                          {card.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 group-hover:text-gray-800 font-['Inter'] leading-relaxed transition-colors duration-300">
                          {card.description}
                        </p>
                        
                        <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${card.gradient} rounded-full mx-auto group-hover:w-16 transition-all duration-500`}></div>
                      </div>
                      
                      {/* Glossy Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 backdrop-blur-sm bg-white/30 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-200 z-20"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 backdrop-blur-sm bg-white/30 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/50 transition-all duration-200 z-20"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {customWebCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Development 3D Carousel */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50/30 to-blue-50/30 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Poppins'] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500 cursor-default">
                E-Commerce Development
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 max-w-4xl mx-auto text-lg font-['Inter'] leading-relaxed"
            >
              Developing an e-commerce website requires experience, careful decision-making, thoughtful design, 
              and plenty of technology. Exytex Web Development has all this and much more.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-6"
            ></motion.div>
          </motion.div>

          {/* Simple 3-Card Grid Layout */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ecommerceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.2, duration: 0.6 }
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative w-full h-80 backdrop-blur-lg bg-white/80 border border-white/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl`}>
                      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/40 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-6 h-6 bg-white/30 rounded-lg"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <card.icon className="w-20 h-20 text-white/30" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 mb-3 font-['Poppins'] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 font-['Inter'] leading-relaxed transition-colors duration-300">
                      {card.description}
                    </p>
                    
                    <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${card.gradient} rounded-full mx-auto group-hover:w-16 transition-all duration-500`}></div>
                  </div>
                  
                  {/* Card Number */}
                  <div className="absolute top-3 left-3 w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-700">{index + 1}</span>
                  </div>
                  
                  {/* Glossy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { Simple3DCarousel };