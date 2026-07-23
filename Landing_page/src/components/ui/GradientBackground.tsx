import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GradientBackgroundProps {
  variant: 'primary' | 'secondary' | 'accent' | 'custom';
  animated?: boolean;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  customColors?: string[];
  className?: string;
  children?: React.ReactNode;
}

const gradientVariants = {
  primary: 'bg-gradient-to-br from-blue-900 via-purple-700 to-blue-800',
  secondary: 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600',
  accent: 'bg-gradient-to-br from-orange-600 via-pink-600 to-red-600',
  custom: ''
};

const directionClasses = {
  horizontal: 'bg-gradient-to-r',
  vertical: 'bg-gradient-to-b',
  diagonal: 'bg-gradient-to-br'
};

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant,
  animated = false,
  direction = 'diagonal',
  customColors,
  className = '',
  children
}) => {
  const gradientClass = variant === 'custom' && customColors 
    ? `${directionClasses[direction]} from-[${customColors[0]}] to-[${customColors[1]}]`
    : gradientVariants[variant];

  const animationProps = animated ? {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear'
    },
    style: {
      backgroundSize: '200% 200%'
    }
  } : {};

  return (
    <motion.div
      className={cn(gradientClass, className)}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};
