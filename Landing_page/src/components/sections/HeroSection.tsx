import React from 'react';
import { motion } from 'framer-motion';
import { GradientBackground } from '../ui/GradientBackground';
import { AnimatedSection } from '../animations/AnimatedSection';
import { InteractiveParticles } from '../ui/InteractiveParticles';
import { GlitchText } from '../ui/GlitchText';
import { TextReveal } from '../ui/TextReveal';
import { MagneticButton } from '../ui/MagneticButton';
import { scrollToContactForm } from '../../utils/scrollUtils';

export const HeroSection: React.FC = () => {
  return (
    <GradientBackground variant="primary" animated className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Particles */}
      <InteractiveParticles />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <GlitchText 
              text="Exytex"
              className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            />
            {/* Subtitle with typewriter effect */}
            <motion.div
              className="mt-4 text-lg md:text-xl text-white/70 font-light tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Digital Innovation Studio
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.4}>
          <TextReveal 
            text="We craft extraordinary digital experiences that push the boundaries of technology, design, and innovation. Transform your vision into reality with our cutting-edge solutions."
            className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            delay={0.5}
          />
        </AnimatedSection>

        {/* Enhanced Stats Section */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { number: "500+", label: "Projects" },
            { number: "50+", label: "Clients" },
            { number: "5+", label: "Years" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection animation="scaleIn" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
            <MagneticButton 
              onClick={scrollToContactForm}
              className="group w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-105 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center">
                Get Started
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </MagneticButton>
            <MagneticButton className="group w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 text-sm sm:text-base">
              <span className="flex items-center justify-center">
                View Portfolio
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-45 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </motion.svg>
              </span>
            </MagneticButton>
          </div>
        </AnimatedSection>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-white/70 to-transparent rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="text-white/50 text-xs mt-2 font-light">Scroll</div>
        </motion.div>
      </div>
    </GradientBackground>
  );
};
