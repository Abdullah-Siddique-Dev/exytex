import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ContactFormModal } from '../ui/ContactFormModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies and optimized for performance and SEO.",
    icon: "web",
    features: ["Custom Websites", "SEO Optimized", "Responsive Design", "Modern Frameworks"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Mobile App Development",
    description: "Native iOS & Android applications with exceptional performance and user experience across all platforms.",
    icon: "mobile",
    features: ["iOS & Android Apps", "Native Development", "App Store Optimization", "Cross-Platform"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Graphic Design",
    description: "Creative visual design solutions that bring your brand to life with stunning visuals and professional aesthetics.",
    icon: "design",
    features: ["Brand Identity", "Logo Design", "Print Design", "Digital Graphics"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "AI & ML Services",
    description: "Artificial Intelligence and Machine Learning solutions to automate processes and gain intelligent insights.",
    icon: "support",
    features: ["Machine Learning", "AI Development", "Data Analysis", "Automation"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations and improve efficiency.",
    icon: "cloud",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps Services", "Cloud Security"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
    icon: "marketing",
    features: ["Social Media Marketing", "PPC Campaigns", "Content Marketing", "Analytics & Reporting"],
    color: "from-blue-500 to-indigo-600"
  }
];

const ServiceIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-8 h-8" }) => {
  const icons = {
    mobile: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    ),
    android: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    ),
    web: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    marketing: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    seo: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    support: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };
  
  return icons[type as keyof typeof icons] || icons.web;
};

export const ServicesListSection: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const cardsPerView = 3; // Show 3 cards at once
  const totalSlides = Math.ceil(services.length / cardsPerView);

  // Auto-rotation every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handleServiceClick = (serviceTitle: string) => {
    const serviceRoutes: { [key: string]: string } = {
      'Web Development': '/web-development',
      'Mobile App Development': '/mobile-app-development',
      'Graphic Design': '/graphic-design',
      'AI & ML Services': '/ai-ml',
      'Cloud Solutions': '/cloud-solutions',
      'Digital Marketing': '/digital-marketing'
    };

    const route = serviceRoutes[serviceTitle];
    if (route) {
      navigate(route);
    } else {
      setShowContactForm(true);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8s
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8s
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8s
  };


  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Hero-Style Header */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glassmorphism Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-white/40 backdrop-blur-md border border-white/60 text-gray-800 rounded-full text-sm font-semibold mb-6 shadow-lg" 
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Professional Services
          </motion.div>
          
          {/* Main Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Professional Services
            </span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We deliver cutting-edge solutions tailored to your business needs with expertise and innovation
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Services Carousel */}
        <div className="relative">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                    {services
                      .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                      .map((service, index) => (
                        <motion.div
                          key={service.title}
                          className="relative group"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          {/* Glassmorphism Card with Neumorphism effects */}
                          <div className="relative h-full group">
                            {/* Neumorphism outer shadow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] group-hover:shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] transition-all duration-500"></div>
                            
                            {/* Glassmorphism card */}
                            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/80 overflow-hidden h-full transition-all duration-500 group-hover:bg-white/70">
                              
                              {/* Gradient overlay on hover */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              {/* Content */}
                              <div className="relative z-10">
                                {/* Icon with gradient background */}
                                <motion.div
                                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500"
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ duration: 0.3, type: "spring" }}
                                >
                                  <ServiceIcon type={service.icon} className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                                  {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                                  {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                  {service.features.map((feature, idx) => (
                                    <motion.li
                                      key={feature}
                                      className="flex items-center text-sm text-gray-700"
                                      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    >
                                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                                      {feature}
                                    </motion.li>
                                  ))}
                                </ul>

                                {/* CTA Button with glassmorphism */}
                                <div className="flex justify-center">
                                  <motion.button
                                    onClick={() => handleServiceClick(service.title)}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium text-sm shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <span>Learn More</span>
                                    <motion.svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      animate={{ x: [0, 3, 0] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </motion.svg>
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Lower Navigation Controls with Glassmorphism */}
          <div className="flex items-center justify-center mt-16 space-x-4">
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="p-4 bg-white/60 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl border border-white/80 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-3 bg-white/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/60">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="p-4 bg-white/60 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl border border-white/80 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
            </motion.button>
          </div>

          {/* Auto-play Indicator with Glassmorphism */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center space-x-3 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/60">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-xs text-gray-700 font-medium">Auto-playing</span>
            </div>
          </div>
        </div>

      </div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </section>
  );
};
