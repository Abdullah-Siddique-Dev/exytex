import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export const CloudOfferingsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offerings = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime',
      icon: Cloud,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Infrastructure Setup',
      description: 'Design and implement scalable cloud infrastructure tailored to your needs',
      icon: Server,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Database Management',
      description: 'Optimize and manage your cloud databases for performance and reliability',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Cloud Security',
      description: 'Implement robust security measures to protect your cloud infrastructure',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop&auto=format&q=80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offerings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offerings.length) % offerings.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Cloud Offerings
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Comprehensive cloud solutions for your business
          </p>
        </motion.div>

        {/* 3D Carousel with Glassmorphism */}
        <div className="relative max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
          <div className="relative h-[400px] sm:h-[450px] lg:h-[500px]">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              const position = (index - currentSlide + offerings.length) % offerings.length;
              const isCenter = position === 0;
              const isLeft = position === offerings.length - 1;
              const isRight = position === 1;
              
              let transform = 'translateX(0) scale(0.7) rotateY(0deg)';
              let zIndex = 0;
              let opacity = 0;

              if (isCenter) {
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                zIndex = 30;
                opacity = 1;
              } else if (isLeft) {
                transform = 'translateX(-50%) scale(0.85) rotateY(25deg)';
                zIndex = 20;
                opacity = 0.6;
              } else if (isRight) {
                transform = 'translateX(50%) scale(0.85) rotateY(-25deg)';
                zIndex = 20;
                opacity = 0.6;
              }

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    zIndex,
                    opacity,
                    pointerEvents: isCenter ? 'auto' : 'none'
                  }}
                  animate={{
                    transform,
                    opacity
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[350px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0">
                      <img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>

                    <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 sm:p-6 border border-white/20">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                          {offering.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all z-40"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all z-40"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {offerings.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
