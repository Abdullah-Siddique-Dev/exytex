import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const startGlitch = () => {
    setIsGlitching(true);
    let iterations = 0;

    const interval = setInterval(() => {
      setGlitchText(
        text
          .split('')
          .map((_, index) => {
            if (index < iterations) {
              return text[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setGlitchText(text);
        setIsGlitching(false);
      }

      iterations += 1 / 3;
    }, 30);
  };

  return (
    <motion.span
      className={`font-mono cursor-pointer ${className}`}
      onMouseEnter={startGlitch}
      animate={{
        textShadow: isGlitching
          ? [
              '0 0 0 #ff0000',
              '2px 0 0 #ff0000, -2px 0 0 #00ffff',
              '0 0 0 #ff0000',
            ]
          : '0 0 0 transparent',
      }}
      transition={{ duration: 0.1, repeat: isGlitching ? Infinity : 0 }}
    >
      {glitchText}
    </motion.span>
  );
};
