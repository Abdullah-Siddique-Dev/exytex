import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AdvancedButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size: 'sm' | 'md' | 'lg' | 'xl';
  animation: 'hover-lift' | 'hover-glow' | 'hover-scale' | 'ripple';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 border border-gray-300',
  gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
};

const animations = {
  'hover-lift': {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { y: 0, scale: 0.98 }
  },
  'hover-glow': {
    whileHover: { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' },
    whileTap: { scale: 0.95 }
  },
  'hover-scale': {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
  'ripple': {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  }
};

export const AdvancedButton: React.FC<AdvancedButtonProps> = ({
  variant,
  size,
  animation,
  children,
  onClick,
  className = '',
  disabled = false
}) => {
  return (
    <motion.button
      className={cn(
        'rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...animations[animation]}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};
