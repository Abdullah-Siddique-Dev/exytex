import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollToWithEasing } from '../../utils/smoothScroll';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  scrollTo?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  onClick,
  scrollTo,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'right'
}) => {
  const handleClick = () => {
    if (scrollTo) {
      smoothScrollToWithEasing(scrollTo, 80);
    }
    if (onClick) {
      onClick();
    }
  };

  const baseClasses = "relative font-bold transition-all duration-300 overflow-hidden group cursor-pointer inline-flex items-center justify-center min-w-[120px] sm:min-w-[140px]";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg",
    md: "px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl",
    lg: "px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 text-base sm:text-lg rounded-xl",
    xl: "px-8 py-3.5 sm:px-10 sm:py-4.5 md:px-12 md:py-5 text-lg sm:text-xl rounded-xl sm:rounded-2xl"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white shadow-xl hover:shadow-2xl",
    secondary: "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white shadow-xl hover:shadow-2xl",
    outline: "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50"
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Door Opening Effect - Left Door */}
      <motion.div
        className={`absolute inset-0 ${variant === 'primary' ? 'bg-gradient-to-r from-blue-700 to-purple-700' : variant === 'secondary' ? 'bg-gradient-to-r from-purple-700 to-indigo-700' : 'bg-blue-600'} origin-left`}
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
        className={`absolute inset-0 ${variant === 'primary' ? 'bg-gradient-to-l from-purple-600 to-blue-600' : variant === 'secondary' ? 'bg-gradient-to-l from-indigo-600 to-purple-600' : 'bg-blue-500'} origin-right`}
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
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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

      {/* Glowing Border */}
      <motion.div
        className={`absolute inset-0 ${sizeClasses[size].includes('rounded-lg') ? 'rounded-lg' : sizeClasses[size].includes('rounded-xl') ? 'rounded-xl' : 'rounded-2xl'} border-2 border-transparent`}
        whileHover={disabled ? {} : {
          borderColor: variant === 'outline' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.6)',
          boxShadow: variant === 'outline' 
            ? '0 0 20px rgba(59, 130, 246, 0.4)' 
            : '0 0 25px rgba(255, 255, 255, 0.3)',
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <motion.span 
            className="mr-1.5 sm:mr-2"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
        
        <motion.span
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        
        {icon && iconPosition === 'right' && (
          <motion.span 
            className="ml-1.5 sm:ml-2"
            whileHover={{ scale: 1.1, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </span>

      {/* Floating Particles */}
      {!disabled && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/60 rounded-full opacity-0"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          whileHover={{
            opacity: [0, 1, 0],
            y: [-5, -15, -5],
            x: [0, Math.random() * 10 - 5, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: 0.3 + i * 0.2,
          }}
        />
      ))}
    </motion.button>
  );
};
