import React from 'react';
import { motion } from 'framer-motion';
import { HoverArrowButton } from '../ui/HoverArrowButton';

export const IOSDevHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            const video = e.target as HTMLVideoElement;
            video.style.display = 'none';
          }}
        >
          <source src="/videos/ios-development.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
          style={{
            backgroundImage: `url('/services/ios-dev.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Animated iOS elements */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-16 h-28 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-20 h-20 bg-white/15 rounded-full backdrop-blur-sm"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex items-center h-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.span 
                  className="block bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
                >
                  Build Amazing
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
                >
                  Web Applications
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Transform your ideas into powerful web applications with modern technology and expert development.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <HoverArrowButton
                  text="Start Your Project"
                  variant="primary"
                  size="lg"
                  className="shadow-2xl hover:shadow-3xl"
                />
                <HoverArrowButton
                  text="View Portfolio"
                  variant="secondary"
                  size="lg"
                />
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                {[
                  { number: "200+", label: "Projects Completed" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-left"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-white/20"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-full backdrop-blur-sm"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
