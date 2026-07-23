import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileAppAboutSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Why Choose Exytex for Mobile App Development?",
      content: "We manage all phases of development from the initial design and architecture phase, followed by the development and testing phases, ensuring the quality of the software through rigorous and strict control processes.",
      features: ['Rigorous Quality Control', 'Banking Sector Experience', 'End Customer Focus', 'Full Development Cycle'],
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    },
    {
      title: "Mobile Operating Systems",
      content: "A mobile operating system (OS) is a set of software that allows smartphones, tablets, and wearable gadgets to manage the resources of the device itself and organize direct interaction with the user.",
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'Native Performance'],
      bgImage: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    },
    {
      title: "Our Development Expertise",
      content: "Every day we have more widespread use of our mobile phones to carry out recurring activities, from controlling our exercise routine to buying our products from the supermarket. For this reason, we offer our clients the possibility of expanding their business line by developing a Mobile App.",
      features: ['Business Growth', 'User Experience', 'Market Expansion', 'Digital Transformation'],
      bgImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Carousel Container */}
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slides[currentSlide].bgImage}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-center">
                  <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  
                  <motion.p
                    className="text-lg md:text-xl text-blue-100 leading-relaxed mb-12 max-w-3xl mx-auto"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slides[currentSlide].content}
                  </motion.p>

                  {/* Features Grid */}
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slides[currentSlide].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-white font-semibold text-sm md:text-base" style={{ fontFamily: '"Inter", sans-serif' }}>
                          {feature}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section - Development Approach */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our Proven Development Approach
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Exytex Development follows the agile project management process to get things done faster and with the highest quality. We break down the entire mobile app development project into several phases, each phase dedicated to taking the project through to completion.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">On-Time Delivery Guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Quality Assurance</div>
              <div className="text-sm text-blue-300 mt-2">
                Rigorous testing and quality control
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};