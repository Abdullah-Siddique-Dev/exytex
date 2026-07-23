import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scrollToContactForm, scrollToContactFormMobile, isMobileDevice } from '../../utils/scrollUtils';
import { useResponsiveButtonStyles } from '../../hooks/useResponsive';

export const AboutHeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const buttonStyles = useResponsiveButtonStyles();

  const texts = [
    'Innovation',
    'Excellence',
    'Technology',
    'Solutions',
    'Growth'
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[350px] lg:min-h-[400px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.span
              className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About EXYTEX
            </motion.span>

            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                About Exytex Technologies
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-3">
                {typedText}
                <span className="animate-pulse text-blue-400">|</span>
              </h2>

              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                We are a solution-driven team offering premium Web Development, Digital Marketing, SEO, Mobile App Development, and Software Services — all designed to help your business grow online.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                '100+ Projects',
                '6+ Years Experience',
                '25+ Technologies',
                '95% Success Rate'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    // Add click functionality for each feature
                    if (feature.includes('Projects')) {
                      window.location.href = '/our-work';
                    } else if (feature.includes('Experience')) {
                      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (feature.includes('Technologies')) {
                      window.location.href = '/technologies';
                    } else {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-base text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-wrap gap-4">
              <motion.button
                onClick={() => isMobileDevice() ? scrollToContactFormMobile() : scrollToContactForm()}
                className={`${buttonStyles.baseButton} ${buttonStyles.primaryButton}`}
                whileHover={{ scale: isMobileDevice() ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight className={buttonStyles.iconSize} />
              </motion.button>
              <motion.button
                onClick={() => {
                  // Navigate to our work page
                  window.location.href = '/our-work';
                }}
                className={`${buttonStyles.baseButton} ${buttonStyles.secondaryButton}`}
                whileHover={{ scale: isMobileDevice() ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop&auto=format&q=80"
                alt="Technology and Development"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};
