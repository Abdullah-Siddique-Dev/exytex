import { useEffect, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

export const useScrollAnimation = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 150);
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [scrollY]);

  return { scrollY, scrollYProgress, isScrolling };
};

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};