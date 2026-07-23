import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src="/images/exytex-logo.png" 
        alt="Exytex Technologies Logo" 
        className="w-auto object-contain"
        style={{ height: '40px', maxWidth: '150px' }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/exytex-logo.png';
        }}
      />
    </motion.div>
  );
};
