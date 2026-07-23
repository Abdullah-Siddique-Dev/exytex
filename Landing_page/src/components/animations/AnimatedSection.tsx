import React, { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'scaleIn' | 'parallax';
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  className?: string;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  parallax: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation,
  delay = 0,
  duration = 0.6,
  triggerOnce = true,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
