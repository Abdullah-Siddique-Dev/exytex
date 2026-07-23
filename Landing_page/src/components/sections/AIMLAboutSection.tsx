import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AIMLAboutSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Why Choose Exytex for AI & ML?",
      content: "We combine cutting-edge AI technology with deep industry expertise to deliver intelligent solutions that transform businesses. Our team of AI specialists and data scientists work closely with clients to understand their unique challenges and develop custom AI solutions.",
      features: ['Expert AI Team', 'Custom Solutions', 'Proven Results', 'Industry Experience'],
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    },
    {
      title: "Advanced AI Technologies",
      content: "We leverage the latest advancements in artificial intelligence, including deep learning, neural networks, and advanced algorithms. Our solutions are built using state-of-the-art frameworks and tools to ensure optimal performance and scalability.",
      features: ['Deep Learning', 'Neural Networks', 'Advanced Algorithms', 'Scalable Solutions'],
      bgImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    },
    {
      title: "Data-Driven Intelligence",
      content: "Transform your data into actionable insights with our comprehensive AI and machine learning services. We help organizations unlock the value of their data through predictive analytics, pattern recognition, and intelligent automation.",
      features: ['Predictive Analytics', 'Pattern Recognition', 'Data Intelligence', 'Smart Automation'],
      bgImage: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
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
        <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
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
              
              {/* Glass Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-indigo-900/90 backdrop-blur-sm"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-center">
                  <motion.h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-inter"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  
                  <motion.p
                    className="text-base md:text-lg text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto font-inter"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slides[currentSlide].content}
                  </motion.p>

                  {/* Features Grid */}
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slides[currentSlide].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-white font-semibold text-sm font-inter">
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

        {/* Bottom Section - AI Approach */}
        <motion.div
          className="mt-16 bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-inter text-gray-900">
                Our AI Development Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 font-inter">
                We believe in responsible AI development that prioritizes ethical considerations, transparency, and human-centered design. 
                Our approach ensures that AI solutions are not only technically advanced but also aligned with business objectives and societal values.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-inter">Ethical AI Development</span>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-600">5+</div>
              <div className="text-blue-800 font-semibold">Years AI Experience</div>
              <div className="text-sm text-blue-700 mt-2 font-inter">
                Leading AI innovation and development
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};