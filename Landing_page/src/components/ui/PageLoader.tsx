import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterEffect } from './TypewriterEffect';

interface PageLoaderProps {
  isVisible: boolean;
  texts?: string[];
  duration?: number;
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  isVisible,
  texts = ['Loading content...', 'Preparing your experience...', 'Almost ready!'],
  duration = 2000,
  onComplete
}) => {
  const [showLoader, setShowLoader] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-white/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              className="mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <motion.span 
                  className="text-xl font-bold text-white"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  E
                </motion.span>
              </div>
            </motion.div>

            {/* Typewriter Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TypewriterEffect
                texts={texts}
                speed={80}
                deleteSpeed={40}
                pauseTime={1000}
                className="text-lg font-medium text-gray-700"
                showCursor={true}
                loop={false}
                onComplete={onComplete}
              />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="mt-6 w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 192 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: duration / 1000, delay: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};