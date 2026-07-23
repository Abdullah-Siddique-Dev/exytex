import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileAppServicesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'iPhone Application Development',
      description: 'We develop mobile applications for iPhones that meet the needs of end-users and business requirements.',
      fullDescription: 'We develop mobile applications for iPhones that meet the needs of end-users, in addition to meeting the requirements of their business. The sleek and slim iOS offer a unique platform for its users. Our iOS application developers use the latest tools and technology to create superior quality, easy-to-use iPhone applications.',
      features: ['Latest iOS Tools', 'Superior Quality', 'Easy-to-Use Design', 'App Store Ready'],
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Android Application Development',
      description: 'The number of Android users increases day by day and so is the need for mobile application development.',
      fullDescription: 'The number of Android users increases day by day and so is the need for mobile application development. Our team of highly passionate professionals is committed to delivering the best quality Android apps for smartphones and tablets. We funnel your ideas into a digitized custom Android app that your end-users will enjoy using.',
      features: ['Custom Android Apps', 'Smartphones & Tablets', 'Business Growth', 'Google Play Store'],
      bgImage: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Cross-Platform Application Development',
      description: 'We create mobile applications that run on any device and operating system when your business needs them.',
      fullDescription: 'We create mobile applications that run on any device and operating system when your business needs them. Cross-platform applications help you perform better by allowing you to reach a wider audience. We provide hybrid application frameworks, which combine native applications and web-based applications.',
      features: ['Any Device & OS', 'Wider Audience Reach', 'Hybrid Frameworks', 'Native Appearance'],
      bgImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Ionic Framework Apps Development',
      description: 'In our app programming agency with ionic framework, we develop hybrid, native, or custom web app systems.',
      fullDescription: 'In our app programming agency with ionic framework, we develop hybrid, native, or custom web app systems. Synchronization of eCommerce systems in WordPress synchronized with the app, updating products, orders, and customers. We have extensive experience working with the banking sector in the development of mobile apps.',
      features: ['Ionic Framework', 'eCommerce Integration', 'Banking Sector Experience', 'WordPress Sync'],
      bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Full Cycle App Development',
      description: 'Exytex is a full cycle development team. We develop functional solutions from scratch.',
      fullDescription: 'Exytex is a full cycle development team. We develop functional solutions from scratch and know how to turn an idea into a working product, ready to be published on the App Store and Google Play. Our Mobile Application Development services help our clients launch their Apps to thousands of people in the App Store and Google Play Store.',
      features: ['From Scratch Development', 'App Store & Google Play', 'Transparent & Secure', 'Business Programs'],
      bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Agile Development Process',
      description: 'Our mobile app development process is proven, smart, and agile.',
      fullDescription: 'Exytex Development follows the agile project management process to get things done faster and with the highest quality. We break down the entire mobile app development project into several phases, each phase dedicated to taking the project through to completion. We know how you feel when someone misses their deadlines.',
      features: ['Agile Process', 'Faster Delivery', 'Highest Quality', 'On-Time Delivery'],
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'from-indigo-600 to-blue-600'
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
              <span className="text-4xl mr-4 filter drop-shadow-lg">📱</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight font-inter">
                Mobile App Services
              </h2>
            </motion.div>
            
            <motion.h3
              className="text-lg md:text-xl font-semibold text-blue-200 mb-4 font-inter"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Exytex - Top Software House in Pakistan
            </motion.h3>
            
            <motion.p
              className="text-base md:text-lg text-blue-300/90 max-w-4xl leading-relaxed font-inter"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              If you need to develop an app with custom functions, visit our company. Exytex is a top software house in Pakistan - we will study your case personally. Your mobile application in the Google Play and AppStore markets. Tell us your idea. We design and develop native mobile apps for iOS and Android platforms, custom programming of apps for companies available in the official app stores: App Store and Google Play.
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
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 shadow-lg hover:shadow-2xl ${
                      isExpanded ? 'flex-[2]' : 'flex-1'
                    }`}
                    style={{
                      minHeight: '450px'
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleExpand(index)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${service.bgImage}')` }}
                    />
                    
                    {/* Light Overlay for readability */}
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Content */}
                    <div className={`relative z-10 h-full flex flex-col transition-all duration-700 ${
                      isExpanded 
                        ? 'bg-white/95 backdrop-blur-lg rounded-2xl m-2 p-6' 
                        : 'p-6'
                    }`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className={`font-bold transition-all duration-300 font-inter ${
                          isExpanded 
                            ? 'text-2xl text-gray-900' 
                            : 'text-lg text-white'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <motion.button
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'border-gray-400 text-gray-600 hover:bg-gray-100'
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