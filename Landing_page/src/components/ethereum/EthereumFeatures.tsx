import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Code, Users, Lock, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with multi-layer encryption and secure smart contract development',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized gas fees and lightning-fast transaction processing for scalable applications',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored Ethereum solutions built specifically for your business requirements',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified Ethereum developers with years of blockchain development experience',
  },
  {
    icon: Lock,
    title: 'Smart Contract Audit',
    description: 'Comprehensive security audits to ensure your contracts are bulletproof',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-proof architecture that grows with your business needs',
  },
];

export const EthereumFeatures: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuresPerSlide = 3;
  const totalSlides = Math.ceil(features.length / featuresPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Why Choose Our Ethereum Development Services
          </h2>
          <p className="text-gray-400 text-base max-w-3xl mx-auto">
            We deliver enterprise-grade Ethereum solutions with a focus on security, scalability, and innovation
          </p>
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
                    {features.slice(slideIndex * featuresPerSlide, (slideIndex + 1) * featuresPerSlide).map((feature, index) => (
                      <motion.div
                        key={index}
                        className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20 hover:border-purple-500/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                      >
                        <div className="w-14 h-14 mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
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
