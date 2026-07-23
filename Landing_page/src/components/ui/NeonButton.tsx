import React, { useState } from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const variants = {
    primary: {
      color: '#00ffff',
      bg: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-400',
    },
    secondary: {
      color: '#ff0080',
      bg: 'from-pink-500/20 to-purple-500/20',
      border: 'border-pink-400',
    },
    accent: {
      color: '#00ff80',
      bg: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-400',
    },
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const currentVariant = variants[variant];

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    onClick?.();
  };

  return (
    <button
      className={`
        relative overflow-hidden rounded-lg font-semibold
        transition-all duration-300 ease-out
        bg-gradient-to-r ${currentVariant.bg}
        border-2 ${currentVariant.border}
        ${sizes[size]}
        ${isHovered ? 'scale-105 -translate-y-1' : ''}
        ${isClicked ? 'scale-95' : ''}
        ${className}
      `}
      style={{
        color: currentVariant.color,
        textShadow: `0 0 10px ${currentVariant.color}`,
        boxShadow: isHovered 
          ? `0 0 30px ${currentVariant.color}40, 0 10px 20px rgba(0,0,0,0.3)` 
          : `0 0 15px ${currentVariant.color}20`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Animated background */}
      <div
        className={`
          absolute inset-0 opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
        `}
        style={{
          background: `linear-gradient(45deg, transparent, ${currentVariant.color}20, transparent)`,
          animation: isHovered ? 'shimmer 2s infinite' : 'none',
        }}
      />
      
      {/* Laser scan effect */}
      <div
        className={`
          absolute inset-0 opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
        `}
        style={{
          background: `linear-gradient(90deg, transparent, ${currentVariant.color}40, transparent)`,
          animation: isHovered ? 'scan 1.5s infinite' : 'none',
        }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
};
