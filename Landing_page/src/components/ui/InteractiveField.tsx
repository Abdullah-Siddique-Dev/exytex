import React, { useState, useRef, useEffect } from 'react';

interface InteractiveFieldProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  moveDistance?: number;
}

export const InteractiveField: React.FC<InteractiveFieldProps> = ({
  children,
  className = '',
  glowColor = '#00ffff',
  moveDistance = 20,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const fieldRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    setIsActive(true);
    
    // Create particles at click position
    const rect = fieldRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
      }));
      
      setParticles(newParticles);
      
      // Remove particles after animation
      setTimeout(() => setParticles([]), 1000);
    }
    
    // Reset active state
    setTimeout(() => setIsActive(false), 600);
  };

  return (
    <div
      ref={fieldRef}
      className={`
        relative overflow-hidden cursor-pointer transition-all duration-500 ease-out
        ${isActive ? `transform -translate-y-${moveDistance} scale-105` : ''}
        ${className}
      `}
      onClick={handleClick}
      style={{
        transform: isActive ? `translateY(-${moveDistance}px) scale(1.05)` : 'translateY(0) scale(1)',
      }}
    >
      {/* Laser border effect */}
      <div
        className={`
          absolute inset-0 rounded-lg transition-all duration-500
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `linear-gradient(45deg, transparent, ${glowColor}20, transparent)`,
          boxShadow: isActive ? `0 0 30px ${glowColor}50, inset 0 0 30px ${glowColor}20` : 'none',
        }}
      />
      
      {/* Animated border */}
      <div
        className={`
          absolute inset-0 rounded-lg border-2 transition-all duration-500
          ${isActive ? 'border-opacity-100' : 'border-opacity-0'}
        `}
        style={{
          borderColor: glowColor,
          animation: isActive ? 'pulse 0.5s ease-in-out' : 'none',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: glowColor,
            boxShadow: `0 0 10px ${glowColor}`,
            animation: 'particleFloat 1s ease-out forwards',
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes particleFloat {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(0);
          }
        }
      `}</style>
    </div>
  );
};
