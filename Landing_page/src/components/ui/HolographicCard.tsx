import React, { useState, useRef, useEffect } from 'react';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  className = '',
  intensity = 1,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  const getTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    
    const rotateX = (mousePosition.y - 0.5) * 20 * intensity;
    const rotateY = (mousePosition.x - 0.5) * -20 * intensity;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const getGradient = () => {
    const x = mousePosition.x * 100;
    const y = mousePosition.y * 100;
    
    return `radial-gradient(circle at ${x}% ${y}%, 
      rgba(0, 255, 255, 0.3) 0%, 
      rgba(255, 0, 128, 0.2) 25%, 
      rgba(128, 0, 255, 0.2) 50%, 
      rgba(0, 255, 128, 0.1) 75%, 
      transparent 100%)`;
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer transition-all duration-300 ease-out
        ${className}
      `}
      style={{
        transform: getTransform(),
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Holographic overlay */}
      <div
        className={`
          absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
        `}
        style={{
          background: getGradient(),
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Laser grid effect */}
      <div
        className={`
          absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-30' : ''}
        `}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: isHovered ? 'gridMove 2s linear infinite' : 'none',
        }}
      />
      
      {/* Glowing border */}
      <div
        className={`
          absolute inset-0 rounded-lg border-2 transition-all duration-300
          ${isHovered ? 'border-cyan-400 shadow-lg' : 'border-transparent'}
        `}
        style={{
          boxShadow: isHovered 
            ? '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(0, 255, 255, 0.1)' 
            : 'none',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
      `}</style>
    </div>
  );
};
