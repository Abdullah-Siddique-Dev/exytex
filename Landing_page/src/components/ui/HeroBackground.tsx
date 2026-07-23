import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroBackgroundProps {
  images: string[];
  currentIndex: number;
  overlay?: string;
  className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  images,
  currentIndex,
  overlay = 'bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-blue-800/90',
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <img 
            src={images[currentIndex]}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
            style={{ 
              filter: 'brightness(0.4) contrast(1.1) saturate(1.1)',
              minHeight: '100vh'
            }}
            loading="eager"
            onError={(e) => {
              // Fallback to a solid color if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)';
            }}
          />
          <div className={`absolute inset-0 ${overlay}`}></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};