import { useState, useEffect } from 'react';

interface TypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 30, delay = 0 }: TypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (delay > 0 && displayText.length === 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, 1));
      }, delay);
    } else if (displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (displayText.length === text.length) {
      setIsComplete(true);
    }

    return () => clearTimeout(timeout);
  }, [displayText, text, speed, delay]);

  return { displayText, isComplete };
};
