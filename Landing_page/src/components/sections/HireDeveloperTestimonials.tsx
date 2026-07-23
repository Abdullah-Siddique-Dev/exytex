import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Building } from 'lucide-react';

export const HireDeveloperTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Wahaj',
      position: 'Project Lead',
      company: 'Native E Donation',
      rating: 5,
      text: 'The developer we hired through this platform exceeded our expectations. The matching process was incredibly efficient, and we found the perfect Android developer for our donation app within 2 days.',
      project: 'Native E Donation App',
      technology: 'Android (Java)',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Soobz',
      position: 'Founder',
      company: 'Custom E-Commerce Hub',
      rating: 5,
      text: 'Outstanding service! Our MERN stack developer delivered high-quality code and was very communicative throughout the project. The e-commerce platform exceeded all expectations.',
      project: 'Custom E-Commerce Hub',
      technology: 'MERN Stack',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Hassan Khan',
      position: 'SEO Manager',
      company: 'Fastest White Hat SEO',
      rating: 5,
      text: 'We needed an SEO expert urgently, and they delivered! The specialist was skilled, professional, and helped us achieve fastest white hat SEO results ahead of schedule.',
      project: 'Fastest White Hat SEO Results',
      technology: 'SEO Tools',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Bilal Khan',
      position: 'Product Owner',
      company: 'Car Booking Taxi App',
      rating: 5,
      text: 'The Android developer we hired was exceptional. They integrated Google Maps API seamlessly and implemented clean, maintainable code. Highly recommended!',
      project: 'Car Booking Taxi App',
      technology: 'Android (Java)',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4">
              <Quote className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Hear from companies who have successfully hired developers through our platform
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -45 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-12 shadow-2xl">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentSlide].gradient} opacity-10 rounded-3xl`}></div>

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                  >
                    <div className={`bg-gradient-to-r ${testimonials[currentSlide].gradient} rounded-full p-6 shadow-xl`}>
                      <Quote className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>

                  <div className="relative z-10 pt-8">
                    {/* Stars */}
                    <div className="flex justify-center gap-2 mb-8">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-center mb-8">
                      <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
                        "{testimonials[currentSlide].text}"
                      </p>
                    </blockquote>

                    {/* Project Info */}
                    <div className="flex justify-center gap-8 mb-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                        <div className="text-white/80 text-sm">Project</div>
                        <div className="text-white font-semibold">{testimonials[currentSlide].project}</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                        <div className="text-white/80 text-sm">Technology</div>
                        <div className="text-white font-semibold">{testimonials[currentSlide].technology}</div>
                      </div>
                    </div>

                    {/* Author Info */}
                    <footer className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-left">
                          <div className="text-xl font-semibold text-white">{testimonials[currentSlide].name}</div>
                          <div className="text-blue-200">{testimonials[currentSlide].position}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-blue-200">
                        <Building className="w-4 h-4" />
                        <span>{testimonials[currentSlide].company}</span>
                      </div>
                    </footer>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-12' 
                    : 'bg-white/40 w-3 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '50+', label: 'Happy Clients' },
            { value: '95%', label: 'Success Rate' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};