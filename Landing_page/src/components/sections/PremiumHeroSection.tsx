import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { ContactFormModal } from '../ui/ContactFormModal';
import { HeroTypewriter } from '../ui/TypewriterEffect';

export const PremiumHeroSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Static hero image - Professional technology/software development image
  const heroImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop&auto=format&q=80';

  return (
    <section className="relative w-full bg-linear-to-br from-blue-50 via-white to-slate-50 overflow-hidden pt-32 pb-20">
      {/* Main Content */}
      <div className="relative z-10 flex items-center py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Leading Software House in Pakistan
              </motion.div>

              {/* Main Heading - SEO Optimized */}
              <motion.h1
                className="text-3xl md:text-4xl font-bold leading-tight text-gray-900"
                style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Software Development Company
                <div className="mt-1">
                  <HeroTypewriter
                    speed={80}
                    className="text-blue-600"
                  />
                </div>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-base text-gray-700 leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Professional web & mobile development solutions to transform your business.
              </motion.p>

              {/* Features List */}
              <motion.div
                className="space-y-2.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {[
                  'Web & Mobile Development',
                  'Digital Marketing',
                  '500+ Projects Delivered'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      {feature}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 pt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {[
                  { value: '500+', label: 'Projects' },
                  { value: '50+', label: 'Clients' },
                  { value: '5.00', label: 'Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-sm inline-flex items-center justify-center"
                  style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                
                <a
                  href="#exytex-intro"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 text-sm inline-flex items-center justify-center"
                  style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Static Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                {/* Static Image */}
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src={heroImage}
                    alt="Technology Solutions"
                    loading="eager"
                    {...{ fetchpriority: 'high' }}
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  {/* Blue overlay for consistency */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-cyan-600/10 to-transparent"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      5.00 Rating
                    </div>
                    <div className="text-xs text-gray-600" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      Trusted by 50+ Clients
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};
