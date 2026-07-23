import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover3D = true,
  glowEffect = false,
  onClick
}) => {
  return (
    <motion.div
      className={cn(
        'bg-white/90 backdrop-blur-lg rounded-xl p-6 border border-gray-200 shadow-lg',
        glowEffect && 'shadow-glow',
        onClick && 'cursor-pointer',
        className
      )}
      whileHover={hover3D ? {
        y: -5,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      } : { y: -2 }}
      transition={{ duration: 0.3 }}
      style={{ transformStyle: 'preserve-3d' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
