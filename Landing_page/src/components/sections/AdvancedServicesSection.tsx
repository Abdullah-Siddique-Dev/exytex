import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';
import { LaserButton } from '../ui/LaserButton';
import { EnhancedButton } from '../ui/EnhancedButton';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Development',
    shortDesc: 'Modern, responsive websites and web applications',
    fullDesc: 'We create cutting-edge web applications using the latest technologies like React, Next.js, and Node.js. Our solutions are scalable, secure, and optimized for performance.',
    features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'API Development', 'Performance Optimization'],
    color: 'from-blue-500 to-blue-600',
    image: '/images/services/web-development.jpg'
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile App Development',
    shortDesc: 'Native iOS and Android applications',
    fullDesc: 'Build powerful mobile applications that deliver exceptional user experiences. We specialize in both native and cross-platform development using React Native and Flutter.',
    features: ['iOS & Android Native', 'React Native', 'Flutter Development', 'App Store Optimization', 'Push Notifications'],
    color: 'from-purple-500 to-purple-600',
    image: '/images/services/mobile-app.jpg'
  },
  {
    id: 3,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Digital Marketing',
    shortDesc: 'Data-driven marketing strategies',
    fullDesc: 'Comprehensive digital marketing solutions that drive growth and maximize ROI. From SEO to social media marketing, we cover all aspects of digital presence.',
    features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'PPC Advertising', 'Analytics & Reporting'],
    color: 'from-blue-500 to-purple-600',
    image: '/images/services/digital-marketing.jpg'
  },
  {
    id: 4,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'SEO Services',
    shortDesc: 'Search engine optimization',
    fullDesc: 'Improve your search rankings and drive organic traffic with our comprehensive SEO strategies. We focus on technical SEO, content optimization, and link building.',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO', 'SEO Audits'],
    color: 'from-purple-500 to-blue-600',
    image: '/images/services/seo.jpg'
  },
  {
    id: 5,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Graphic Design',
    shortDesc: 'Creative visual solutions',
    fullDesc: 'Professional graphic design services including brand identity, UI/UX design, and marketing materials. We create visually stunning designs that communicate your message effectively.',
    features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Logo Design', 'Marketing Materials'],
    color: 'from-blue-500 to-purple-600',
    image: '/images/services/graphic-design.jpg'
  },
  {
    id: 6,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Amazon Services',
    shortDesc: 'Marketplace optimization',
    fullDesc: 'Complete Amazon marketplace solutions including product listing optimization, PPC management, and sales growth strategies to maximize your e-commerce success.',
    features: ['Product Listing', 'PPC Management', 'Inventory Management', 'Brand Registry', 'Sales Analytics'],
    color: 'from-purple-500 to-blue-600',
    image: '/images/services/ecommerce.jpg'
  }
];

export const AdvancedServicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(services.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleExpand = (serviceId: number) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };

  const getCurrentServices = () => {
    const startIndex = currentIndex * cardsPerView;
    return services.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
                    {services
                      .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                      .map((service, index) => (
                        <motion.div
                          key={service.id}
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <AnimatePresence mode="wait">
                            {expandedCard === service.id ? (
                              // Expanded Card
                              <motion.div
                                key="expanded"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 h-[500px] relative overflow-hidden"
                              >
                                {/* Close Button */}
                                <button
                                  onClick={() => toggleExpand(service.id)}
                                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                                >
                                  <X className="w-4 h-4 text-gray-600" />
                                </button>

                                {/* Expanded Content */}
                                <div className="h-full flex flex-col">
                                  {/* Header */}
                                  <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                                      <div className="w-6 h-6">{service.icon}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                      {service.title}
                                    </h3>
                                  </div>

                                  {/* Description */}
                                  <p className="text-gray-700 mb-6 leading-relaxed">
                                    {service.fullDesc}
                                  </p>

                                  {/* Features */}
                                  <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                      Key Features:
                                    </h4>
                                    <div className="grid grid-cols-1 gap-3">
                                      {service.features.map((feature, idx) => (
                                        <div
                                          key={idx}
                                          className="flex items-center text-gray-700"
                                        >
                                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
                                          {feature}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* CTA Button */}
                                  <motion.button
                                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 mt-6"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    Get Started →
                                  </motion.button>
                                </div>
                              </motion.div>
                            ) : (
                              // Collapsed Card
                              <motion.div
                                key="collapsed"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700/50"
                              >
                                {/* Background Image */}
                                <div 
                                  className="absolute inset-0 bg-cover bg-center opacity-30"
                                  style={{ backgroundImage: `url(${service.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-purple-900/60" />

                                {/* Plus Button */}
                                <button
                                  onClick={() => toggleExpand(service.id)}
                                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
                                >
                                  <Plus className="w-5 h-5" />
                                </button>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col p-8">
                                  {/* Title at Top */}
                                  <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                      {service.title}
                                    </h3>
                                  </div>

                                  {/* Icon in Center */}
                                  <div className="flex-1 flex items-center justify-center">
                                    <motion.div 
                                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-lg border border-white/30"
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                      <div className="w-8 h-8">
                                        {service.icon}
                                      </div>
                                    </motion.div>
                                  </div>

                                  {/* Description at Bottom */}
                                  <div className="mt-8">
                                    <p className="text-white/90 text-sm leading-relaxed text-center">
                                      {service.shortDesc}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white shadow-lg'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Start Your Project?
              </motion.h3>
              
              <motion.p 
                className="text-base mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's discuss your project and create something professional together. 
                Get started with a free consultation today.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Start Your Project Button */}
                <EnhancedButton
                  scrollTo="contact"
                  size="md"
                  variant="primary"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                  iconPosition="left"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg px-6 py-2 text-sm"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Start Your Project
                </EnhancedButton>

                {/* Schedule Call Button */}
                <EnhancedButton
                  scrollTo="contact"
                  size="md"
                  variant="outline"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  iconPosition="left"
                  className="border-white/80 text-white hover:bg-white hover:text-blue-700 backdrop-blur-sm px-6 py-2 text-sm"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Schedule Call
                </EnhancedButton>
              </motion.div>
              
              {/* Additional Info */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  100% Satisfaction
                </div>
              </motion.div>
            </div>
            
            {/* Animated Background */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
