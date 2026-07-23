import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export const TechnologiesHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-4xl text-left">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium mb-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Technology Stack
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-left"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cutting-Edge Technologies for Modern Solutions
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed text-left max-w-3xl"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We leverage the latest technologies and frameworks to build scalable, secure, and high-performance applications for web, mobile, and cloud platforms.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { number: '50+', label: 'Technologies' },
              { number: '500+', label: 'Projects' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
