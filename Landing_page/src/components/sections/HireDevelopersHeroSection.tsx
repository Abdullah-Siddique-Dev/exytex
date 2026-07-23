import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { ContactFormModal } from '../ui/ContactFormModal';

export const HireDevelopersHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    'Full Stack Developers',
    'Frontend Developers',
    'Backend Developers',
    'Mobile App Developers',
    'DevOps Engineers',
    'UI/UX Designers'
  ];

  const images = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=800&fit=crop&auto=format&q=80'
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Developers"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <motion.div
              className="inline-flex items-center px-2 py-0.5 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-xs font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-3 h-3 mr-1" />
              500+ Developers Available
            </motion.div>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
              Hire Top Remote Developers - Full Stack, Frontend & Backend Experts | Exytex Technologies
              <span className="animate-pulse text-blue-400">|</span>
            </h1>

            <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
              Access pre-vetted remote developers ready to join your team. From startups to enterprises, find the perfect match in 48 hours with our streamlined hiring process.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2">
              {[
                'Pre-vetted Talent',
                '48hr Matching',
                'Flexible Teams',
                'Expert Developers'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span className="text-xs text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-all flex items-center text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Hiring Now
                <ArrowRight className="w-3 h-3 ml-1" />
              </motion.button>
              <motion.button
                className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Talent Pool
              </motion.button>
            </div>
          </motion.div>

          {/* Right Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-2"
          >
            {[
              { number: '500+', label: 'Developers', icon: Users, color: 'blue' },
              { number: '98%', label: 'Success Rate', icon: Star, color: 'green' },
              { number: '48hr', label: 'Matching', icon: CheckCircle2, color: 'purple' },
              { number: '50+', label: 'Technologies', icon: Star, color: 'orange' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 hover:bg-white/15 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <stat.icon className={`w-3.5 h-3.5 text-${stat.color}-400 mb-1`} />
                <div className="text-xs font-bold text-white mb-0.5">{stat.number}</div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
