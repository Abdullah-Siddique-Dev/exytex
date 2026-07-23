import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingTypewriter } from './TypewriterEffect';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading,
  onComplete,
  duration = 3000
}) => {
  const [showLoading, setShowLoading] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isLoading, duration, onComplete]);

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Animation */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Loading Content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Exytex Technologies
            </motion.h1>

            {/* Typewriter Loading Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <LoadingTypewriter
                className="text-white/80"
                speed={60}
              />
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="mt-8 w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 256 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: duration / 1000, delay: 1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};