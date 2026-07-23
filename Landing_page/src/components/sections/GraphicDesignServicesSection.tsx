import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GraphicDesignServicesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity solutions including logos, color schemes, and brand guidelines.',
      fullDescription: 'We create comprehensive brand identities that capture your business essence. From logo design to complete brand guidelines, we ensure your brand stands out in the market. Our process includes market research, competitor analysis, and multiple design iterations to create a unique brand identity that resonates with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography Selection'],
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-purple-600'
    },
    {
      title: 'Print Design',
      description: 'Professional print materials including brochures, flyers, business cards, and catalogs.',
      fullDescription: 'Our print design services cover all your offline marketing needs. We create eye-catching brochures, professional business cards, informative catalogs, and promotional flyers. Each design is optimized for print production with proper color profiles, bleeds, and high-resolution graphics to ensure perfect results.',
      features: ['Business Cards', 'Brochures & Flyers', 'Catalogs', 'Corporate Stationery'],
      bgImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-blue-600'
    },
    {
      title: 'Digital Graphics',
      description: 'Web banners, social media graphics, and digital advertising materials.',
      fullDescription: 'In the digital age, your online presence needs to be visually compelling. We design web banners, social media graphics, digital ads, and microsites that capture attention and drive engagement. All designs are optimized for various digital platforms and screen sizes.',
      features: ['Web Banners', 'Social Media Graphics', 'Digital Ads', 'Email Templates'],
      bgImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-purple-700'
    },
    {
      title: 'Packaging Design',
      description: 'Creative packaging solutions that make your products stand out on shelves.',
      fullDescription: 'Great packaging design can make or break a product. We create packaging that not only protects your product but also tells your brand story and attracts customers. Our designs consider functionality, sustainability, and shelf appeal to maximize your product\'s market impact.',
      features: ['Product Packaging', 'Label Design', 'Box Design', 'Sustainable Solutions'],
      bgImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-blue-700'
    },
    {
      title: 'Web & App Graphics',
      description: 'UI/UX graphics, icons, and visual elements for websites and mobile applications.',
      fullDescription: 'Digital interfaces need carefully crafted graphics to provide excellent user experiences. We design UI elements, icons, illustrations, and graphics that enhance usability while maintaining visual appeal. Our designs follow platform guidelines and accessibility standards.',
      features: ['UI Graphics', 'Icon Design', 'Illustrations', 'App Graphics'],
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-purple-800'
    },
    {
      title: 'Event & Campaign Design',
      description: 'Complete design solutions for events, campaigns, and promotional activities.',
      fullDescription: 'Make your events memorable with our comprehensive design services. We handle everything from event branding and signage to promotional materials and digital campaigns. Our designs create cohesive visual experiences that engage your audience and amplify your message.',
      features: ['Event Branding', 'Signage Design', 'Campaign Materials', 'Merchandising'],
      bgImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-blue-800'
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
    <section className="py-20 bg-slate-900 relative overflow-hidden">
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
              <span className="text-4xl mr-4 filter drop-shadow-lg">🎨</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight font-inter">
                Graphic Design Services
              </h2>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-white leading-relaxed font-inter text-center">
                We know that design is one, if not the most important, of the most powerful weapons today to add value to a service or product. 
                It is the key to differentiate yourself from the competition. That is why we work at the highest level.
              </p>
              <div className="flex justify-center mt-6 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-white/80 font-inter">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">98%</div>
                  <div className="text-sm text-white/80 font-inter">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-white/80 font-inter">Support</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Label */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center">
              <h4 className="text-lg font-semibold text-white/90 mr-4 font-inter">Our Services</h4>
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
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 shadow-lg hover:shadow-2xl ${
                      isExpanded ? 'flex-[2]' : 'flex-1'
                    }`}
                    style={{
                      minHeight: '400px'
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleExpand(index)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Background Image - Always visible */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${service.bgImage}')` }}
                    />
                    
                    {/* Overlay for better text readability */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-white/95' 
                        : 'bg-gradient-to-t from-blue-900/90 via-blue-800/70 to-transparent'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className={`font-bold transition-all duration-300 font-inter ${
                          isExpanded 
                            ? 'text-xl text-gray-900' 
                            : 'text-lg text-white'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <motion.button
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'border-gray-300 text-gray-600 hover:bg-gray-100'
                              : 'border-white/50 text-white hover:bg-white/20'
                          }`}
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
                      <p className={`mb-6 transition-all duration-300 font-inter ${
                        isExpanded 
                          ? 'text-base leading-relaxed text-gray-700' 
                          : 'text-sm text-white/90'
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
                            <div className="grid grid-cols-2 gap-3 mb-6">
                              {service.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-center text-sm text-gray-600 font-inter"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                  {feature}
                                </motion.div>
                              ))}
                            </div>
                            
                            <motion.button
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 font-inter"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
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