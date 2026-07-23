import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const IndustryTestimonialsSection: React.FC = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([0, 1, 2]);

  const testimonials = [
    {
      quote: "The Android developer built our Car Booking Taxi App with perfect Google Maps API integration. The results exceeded our expectations.",
      author: "Bilal Khan",
      position: "Product Owner",
      company: "Car Booking Taxi App",
      industry: "Transportation",
      rating: 5
    },
    {
      quote: "The Ground Fitness App with Health APIs integration has transformed how we deliver health services. Truly innovative and reliable.",
      author: "Arismara",
      position: "Founder",
      company: "Ground Fitness App",
      industry: "Healthcare",
      rating: 5
    },
    {
      quote: "Our Custom E-Commerce Hub built with MERN Stack is now best-in-class thanks to their expertise and dedication to excellence.",
      author: "Soobz",
      position: "Founder",
      company: "Custom E-Commerce Hub",
      industry: "E-Commerce",
      rating: 5
    },
    {
      quote: "Outstanding UI/UX work on our Play Ground ESPORT platform. User engagement has increased significantly since launch.",
      author: "William Blake",
      position: "Product Owner",
      company: "Play Ground (ESPORT)",
      industry: "Gaming",
      rating: 5
    },
    {
      quote: "The WordPress development for Trade Kitchen Suppliers using Elementor optimized our online presence. Exceptional team!",
      author: "Azhar",
      position: "Business Owner",
      company: "Trade Kitchen Suppliers",
      industry: "Retail",
      rating: 5
    },
    {
      quote: "The Native E Donation App they built with Android and Firebase handles donations seamlessly. Best investment we've made.",
      author: "Wahaj",
      position: "Project Lead",
      company: "Native E Donation",
      industry: "Non-Profit",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonials(prev => {
        const next = [...prev];
        next.shift(); // Remove first
        const nextIndex = (next[next.length - 1] + 1) % testimonials.length;
        next.push(nextIndex); // Add new at end
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/30 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Success stories from industry leaders
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative h-[600px] sm:h-[500px]">
          <div className="relative h-full">
            <AnimatePresence initial={false}>
              {visibleTestimonials.map((testimonialIndex, position) => (
                <motion.div
                  key={`${testimonialIndex}-${position}`}
                  initial={{ 
                    opacity: 0, 
                    y: 200,
                    scale: 0.8
                  }}
                  animate={{ 
                    opacity: position === 1 ? 1 : 0.4,
                    y: position * 180,
                    scale: position === 1 ? 1 : 0.9,
                    zIndex: position === 1 ? 10 : 5 - position
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -100,
                    scale: 0.8
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-x-0"
                  style={{
                    pointerEvents: position === 1 ? 'auto' : 'none'
                  }}
                >
                  <div className={`bg-white rounded-xl p-6 shadow-lg border ${
                    position === 1 ? 'border-blue-200' : 'border-gray-100'
                  } transition-all duration-300`}>
                    {/* Quote Icon and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Quote className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">
                      "{testimonials[testimonialIndex].quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {testimonials[testimonialIndex].author.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-gray-900 truncate">
                          {testimonials[testimonialIndex].author}
                        </div>
                        <div className="text-xs text-gray-600 truncate">
                          {testimonials[testimonialIndex].position} at {testimonials[testimonialIndex].company}
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-blue-50 rounded-full">
                        <span className="text-xs text-blue-600 font-medium">
                          {testimonials[testimonialIndex].industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  visibleTestimonials[1] === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-scroll indicator */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">Auto-scrolling testimonials</p>
        </div>
      </div>
    </section>
  );
};
