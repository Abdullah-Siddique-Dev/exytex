import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GraphicDesignAboutSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Why Choose Exytex for Graphic Design?",
      content: "We can create you from sober and elegant designs to breaking with the latest trends in corporate and advertising design. We assure you that you will not be indifferent. Neither do your clients.",
      features: ['Creative Excellence', 'Latest Design Trends', 'Professional Results', 'Client Satisfaction'],
      bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    },
    {
      title: "Comprehensive Design Solutions",
      content: "We offer design solutions, both offline (logos, advertising posters, catalogs and brochures, business cards, corporate stationery …) and online (web page design, banners, microsites, apps …).",
      features: ['Offline Design', 'Online Graphics', 'Brand Identity', 'Marketing Materials'],
      bgImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    },
    {
      title: "Results-Driven Design Process",
      content: "If you need to create or renew your brand, a new website or launch a digital campaign, the objective is clear. Get better results. You can count on Exytex, we have been perfecting our methodology for 3 years.",
      features: ['3+ Years Experience', 'Proven Methodology', 'Better Results', 'Brand Renewal'],
      bgImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
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
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-indigo-900/90"></div>
              
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

        {/* Bottom Section - Design Approach */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-inter">
                Our Creative Design Philosophy
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6 font-inter">
                A work process based on sales marketing, aimed at enhancing commercial actions and their results. 
                We work at the highest level to ensure your brand stands out from the competition and achieves better results.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-100 font-inter">Creative Excellence Guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">3+</div>
              <div className="text-blue-200 font-semibold">Years Experience</div>
              <div className="text-sm text-blue-300 mt-2 font-inter">
                Perfecting our design methodology
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};