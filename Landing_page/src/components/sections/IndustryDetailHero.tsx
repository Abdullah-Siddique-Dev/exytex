import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IndustryDetailHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  benefits: Array<{
    icon: LucideIcon;
    text: string;
  }>;
}

export const IndustryDetailHero: React.FC<IndustryDetailHeroProps> = ({
  badge,
  title,
  subtitle,
  description,
  images,
  benefits
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Badge */}
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-lg text-xs sm:text-sm font-medium">
              {badge}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl text-blue-600 font-semibold">
              {subtitle}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-blue-600 flex-shrink-0">
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] mt-8 lg:mt-0"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-100">
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${title} ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                />
              ))}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent"></div>

              {/* Slider Indicators */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-white w-6 sm:w-8'
                        : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
