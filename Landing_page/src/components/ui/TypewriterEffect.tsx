import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  showCursor?: boolean;
  loop?: boolean;
  onComplete?: () => void;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 4000,
  className = '',
  showCursor = true,
  loop = true,
  onComplete
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing current text
          if (!loop && currentTextIndex === texts.length - 1) {
            setIsComplete(true);
            onComplete?.();
            return;
          }
          
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, pauseTime, loop, onComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      {showCursor && (
        <motion.span
          className="inline-block ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: isComplete ? 0 : Infinity,
            repeatType: "reverse"
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

// Loading typewriter component
interface LoadingTypewriterProps {
  className?: string;
  speed?: number;
}

export const LoadingTypewriter: React.FC<LoadingTypewriterProps> = ({
  className = '',
  speed = 80
}) => {
  const loadingTexts = [
    'Loading your experience...',
    'Preparing amazing content...',
    'Almost ready...',
    'Welcome to Exytex!'
  ];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <TypewriterEffect
        texts={loadingTexts}
        speed={speed}
        deleteSpeed={40}
        pauseTime={1500}
        loop={false}
        className="text-lg font-medium"
        showCursor={true}
      />
    </div>
  );
};

// Hero typewriter component
interface HeroTypewriterProps {
  className?: string;
  speed?: number;
}

export const HeroTypewriter: React.FC<HeroTypewriterProps> = ({
  className = '',
  speed = 100
}) => {
  const heroTexts = [
    'Services Excellence',
    'Innovation Hub', 
    'Digital Solutions',
    'Technology Partners',
    'Creative Agency',
    'Growth Catalyst'
  ];

  return (
    <TypewriterEffect
      texts={heroTexts}
      speed={speed}
      deleteSpeed={60}
      pauseTime={4000}
      className={className}
      showCursor={true}
      loop={true}
    />
  );
};