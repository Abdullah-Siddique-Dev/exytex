import React from 'react';
import { motion } from 'framer-motion';

export const AndroidDevHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Android Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-16 h-28 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center h-full">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span 
                className="block text-white mb-2"
              >
                Build powerful
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"
              >
                Android apps
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-green-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Reach billions of Android users with native mobile experiences that perform flawlessly.
            </motion.p>

            {/* Interactive Prompt Box */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 max-w-3xl mx-auto border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-white/70 text-sm">Get suggestions</span>
                <span className="text-white/70 text-sm ml-6">Write a prompt</span>
              </div>
              
              <div className="text-left">
                <p className="text-white/90 text-lg mb-4">
                  <span className="text-green-300">Create me</span> a fitness app
                </p>
                <p className="text-white/90 text-lg mb-4">
                  <span className="text-green-300">for</span> personal trainers
                </p>
                <p className="text-white/90 text-lg mb-6">
                  <span className="text-green-300">that helps</span> track workouts and client progress
                </p>
                <p className="text-green-300/80 text-sm underline cursor-pointer hover:text-green-200 transition-colors">
                  Add social sharing features
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                className="group px-12 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-3">Start Android development</span>
                <motion.svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {[
                { name: 'Kotlin', icon: '🟣' },
                { name: 'Java', icon: '☕' },
                { name: 'Android Studio', icon: '🤖' },
                { name: 'Firebase', icon: '🔥' },
                { name: 'Jetpack', icon: '🚀' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-white/80 text-sm font-medium">{tech.name}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              {[
                { number: "150+", label: "Android Apps" },
                { number: "3B+", label: "Android Users" },
                { number: "4.7★", label: "Play Store Rating" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};