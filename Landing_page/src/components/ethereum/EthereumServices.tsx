import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Rocket, FileCheck, RefreshCw, Shield, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Ethereum App Consulting',
    description: 'Expert guidance on blockchain strategy, architecture, and implementation roadmap.',
  },
  {
    icon: Rocket,
    title: 'Ethereum App Development',
    description: 'End-to-end development of secure and scalable Ethereum applications.',
  },
  {
    icon: FileCheck,
    title: 'Smart Contracts',
    description: 'Custom smart contract development with security-first approach.',
  },
  {
    icon: RefreshCw,
    title: 'Ethereum App Porting',
    description: 'Seamless migration of existing applications to Ethereum blockchain.',
  },
  {
    icon: Shield,
    title: 'Smart Contracts Audit',
    description: 'Comprehensive security audits to identify and fix vulnerabilities.',
  },
  {
    icon: Headphones,
    title: 'Ethereum App Support',
    description: '24/7 maintenance and support for your blockchain applications.',
  },
];

export const EthereumServices: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const servicesPerSlide = 3;
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ethereum Development Services
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive blockchain solutions tailored to your needs</p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {services.slice(slideIndex * servicesPerSlide, (slideIndex + 1) * servicesPerSlide).map((service, index) => (
                      <motion.div
                        key={index}
                        className="group relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="h-full p-8 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                          <div className="w-14 h-14 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-blue-500' : 'w-3 bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
