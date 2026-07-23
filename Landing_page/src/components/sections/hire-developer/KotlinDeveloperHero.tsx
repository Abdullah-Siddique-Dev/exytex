import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Smartphone, ArrowRight, CheckCircle, Star, Users } from 'lucide-react';
import { ContactFormModal } from '../../ui/ContactFormModal';

export const KotlinDeveloperHero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-red-900/90 to-pink-900/95"></div>
        </div>

        {/* Animated Kotlin Logo Elements */}
        <div className="absolute w-[600px] h-[600px] bg-orange-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-red-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Code Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 font-mono text-lg font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['fun', 'val', 'var', 'class', 'data', 'when', 'if', 'else'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            {/* Kotlin Logo with Glassmorphism */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
                  <Code className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white mb-2">Hire Expert</span>
              <span className="block bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
                Kotlin Developers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-orange-100 font-light mb-4"
            >
              Build Powerful Android Apps & Cross-Platform Solutions
            </motion.p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {[
              { icon: Smartphone, text: 'Android Development' },
              { icon: Code, text: 'Cross-Platform Apps' },
              { icon: CheckCircle, text: 'JVM Expertise' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-orange-300 mx-auto mb-3" />
                <div className="text-white font-medium">{feature.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed text-center"
          >
            Access top-tier Kotlin developers who specialize in modern Android development, 
            cross-platform solutions, and JVM-based applications. Our experts deliver clean, 
            efficient code with the latest Kotlin features.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(251, 146, 60, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg flex items-center gap-3 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              Hire Kotlin Developer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Profiles
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '50+', label: 'Kotlin Experts', icon: Users },
              { value: '4.9★', label: 'Average Rating', icon: Star },
              { value: '100+', label: 'Apps Built', icon: Smartphone },
              { value: '24hrs', label: 'Quick Match', icon: CheckCircle },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-orange-300 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-orange-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};