import React from 'react';
import { motion } from 'framer-motion';

interface LaserButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const LaserButton: React.FC<LaserButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = "relative font-semibold transition-all duration-300 overflow-hidden group rounded-lg min-w-[120px] sm:min-w-[140px]";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-2xl",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm",
    md: "px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base",
    lg: "px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 text-base sm:text-lg"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {/* Door Opening Effect - Left Door */}
      <motion.div
        className={`absolute inset-0 rounded-lg origin-left ${
          variant === 'primary' ? 'bg-gradient-to-r from-blue-700 to-blue-800' :
          variant === 'secondary' ? 'bg-gradient-to-r from-gray-700 to-gray-800' :
          'bg-blue-700'
        }`}
        initial={{ scaleX: 0 }}
        whileHover={disabled ? {} : { 
          scaleX: 1,
          transition: { 
            duration: 0.3, 
            ease: "easeOut"
          }
        }}
      />
      
      {/* Door Opening Effect - Right Door */}
      <motion.div
        className={`absolute inset-0 rounded-lg origin-right ${
          variant === 'primary' ? 'bg-gradient-to-l from-blue-600 to-blue-700' :
          variant === 'secondary' ? 'bg-gradient-to-l from-gray-600 to-gray-700' :
          'bg-blue-600'
        }`}
        initial={{ scaleX: 0 }}
        whileHover={disabled ? {} : { 
          scaleX: 1,
          transition: { 
            duration: 0.3, 
            ease: "easeOut",
            delay: 0.1
          }
        }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-lg"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={disabled ? {} : { 
          x: '100%', 
          opacity: [0, 1, 0],
          transition: { 
            duration: 0.6, 
            ease: "easeInOut",
            delay: 0.2
          }
        }}
      />
      
      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        whileHover={disabled ? {} : {
          borderColor: variant === 'outline' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.6)',
          boxShadow: variant === 'outline' 
            ? '0 0 20px rgba(59, 130, 246, 0.4)' 
            : '0 0 25px rgba(255, 255, 255, 0.3)',
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};
