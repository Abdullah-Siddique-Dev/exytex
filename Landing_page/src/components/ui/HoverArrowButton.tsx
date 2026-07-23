import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HoverArrowButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const HoverArrowButton: React.FC<HoverArrowButtonProps> = ({
  text,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = 'relative overflow-hidden rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const ButtonContent = () => (
    <motion.div
      className="flex items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Arrow Icon */}
      <motion.div
        className="flex items-center justify-center"
        animate={{
          width: isHovered ? 'auto' : '24px',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.svg
          className="w-6 h-6 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{
            rotate: isHovered ? 0 : 0,
            x: isHovered ? -8 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </motion.svg>
        
        {/* Text that appears on hover */}
        <motion.span
          className="ml-2 whitespace-nowrap overflow-hidden"
          animate={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? 'auto' : '0px',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {text}
        </motion.span>
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
};