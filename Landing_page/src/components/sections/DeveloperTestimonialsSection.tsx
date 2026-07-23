import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const DeveloperTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Wahaj',
      role: 'Project Lead',
      company: 'Native E Donation',
      rating: 5,
      text: 'We hired an Android developer through EXYTEX and the experience was seamless. They built our Native E Donation App with Java and Firebase perfectly.'
    },
    {
      name: 'Hassan Khan',
      role: 'SEO Manager',
      company: 'Fastest White Hat SEO',
      rating: 5,
      text: 'The SEO specialist delivered exceptional results. We achieved fastest white hat SEO results using Google Analytics and Search Console optimization.'
    },
    {
      name: 'Katrina Kerim',
      role: 'Design Lead',
      company: 'Furniture Gallery App',
      rating: 5,
      text: 'EXYTEX helped us create beautiful UI/UX designs for our Furniture Gallery App. The designer used Adobe XD and Figma expertly.'
    },
    {
      name: 'Azhar',
      role: 'Business Owner',
      company: 'Trade Kitchen Suppliers',
      rating: 5,
      text: 'Outstanding WordPress development! The developer created our Trade Kitchen Suppliers website using Elementor with clean PHP and MySQL implementation.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">
            What Our Clients Say
          </h2>
          <p className="text-sm text-blue-200 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who found their perfect development team
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 md:p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-8 h-8 text-blue-400 mb-3" />

              <div className="flex mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-white mb-5 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-blue-200">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-xs text-blue-300">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-white w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
