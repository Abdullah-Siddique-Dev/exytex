import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Globe, Building2, Shield, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

export const InsuranceRecognitions: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const recognitions = [
    {
      title: "Everest's Application and Digital Services",
      subtitle: "Peak Matrix® Assessment 2022",
      description: "Featured in Life and Annuities (L&A) Insurance",
      icon: Award,
      gradient: "from-gray-700 to-gray-800",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
    },
    {
      title: "Celent's Latin American Report",
      subtitle: "P&C PAS Systems",
      description: "Recognized in Property & Casualty Policy Administration Systems",
      icon: Globe,
      gradient: "from-gray-800 to-gray-700",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
    },
    {
      title: "Everest's Insurance Platforms",
      subtitle: "IT Services Peak Matrix® 2022",
      description: "Featured in Insurance Technology Services Assessment",
      icon: Building2,
      gradient: "from-gray-700 to-gray-800",
      bgImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076"
    },
    {
      title: "Celent's Global Health Report",
      subtitle: "Policy Administration System",
      description: "Recognized in Health Insurance Vendor Report",
      icon: Shield,
      gradient: "from-gray-800 to-gray-700",
      bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
    },
    {
      title: "Everest's Salesforce Services",
      subtitle: "Insurance Peak Matrix® 2022",
      description: "Featured in Salesforce Implementation for Insurance",
      icon: TrendingUp,
      gradient: "from-indigo-600 via-blue-500 to-cyan-500",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % recognitions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [recognitions.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return recognitions.length - 1;
      if (next >= recognitions.length) return 0;
      return next;
    });
  };

  const current = recognitions[currentSlide];
  const Icon = current.icon;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-full p-4">
              <Award className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industry Recognition
          </h2>
          <p className="text-base md:text-lg text-blue-200 max-w-3xl mx-auto">
            Trusted and recognized by leading industry analysts worldwide
          </p>
        </motion.div>

        {/* 3D Slider */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 }
              }}
              className="absolute w-full max-w-5xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glassmorphism Card */}
              <div className="relative group">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{
                    backgroundImage: `url('${current.bgImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                </div>

                {/* Glass Effect */}
                <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-16 shadow-2xl">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <motion.div
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="inline-block mb-8"
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30">
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-3"
                    >
                      {current.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-blue-100 font-semibold mb-4"
                    >
                      {current.subtitle}
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-base md:text-lg text-white/90 max-w-2xl mx-auto"
                    >
                      {current.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20 group"
          >
            <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 z-20 group"
          >
            <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {recognitions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className="group relative"
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-12' 
                  : 'bg-white/40 hover:bg-white/60'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
