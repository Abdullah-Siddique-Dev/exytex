import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnhancedButton } from './EnhancedButton';
import { getCurrentSection, getNextSection, sectionOrder } from '../../utils/sectionNavigation';

interface ExploreMoreButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fixedTarget?: string; // If provided, always scroll to this section
}

export const ExploreMoreButton: React.FC<ExploreMoreButtonProps> = ({
  size = 'md',
  variant = 'primary',
  className = '',
  fixedTarget
}) => {
  const [currentSection, setCurrentSection] = useState('home');
  const [nextSection, setNextSection] = useState('exytex-intro');

  useEffect(() => {
    const updateCurrentSection = () => {
      if (!fixedTarget) {
        const current = getCurrentSection();
        const next = getNextSection(current);
        setCurrentSection(current);
        setNextSection(next);
      }
    };

    // Update on scroll
    const handleScroll = () => {
      updateCurrentSection();
    };

    // Initial update
    updateCurrentSection();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixedTarget]);

  const targetSection = fixedTarget || nextSection;
  
  const getSectionName = (sectionId: string): string => {
    const sectionNames: Record<string, string> = {
      'home': 'Home',
      'exytex-intro': 'About Exytex',
      'exytex-services': 'Our Services',
      'services': 'Advanced Services',
      'portfolio': 'Portfolio',
      'industries': 'Industries',
      'about': 'About Us',
      'contact': 'Contact'
    };
    return sectionNames[sectionId] || 'Next Section';
  };

  const isLastSection = currentSection === sectionOrder[sectionOrder.length - 1];

  return (
    <EnhancedButton
      scrollTo={targetSection}
      size={size}
      variant={variant}
      icon={
        <motion.svg
          className="w-3 h-3 sm:w-4 sm:h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={isLastSection ? {} : { y: [0, 3, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {isLastSection ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          )}
        </motion.svg>
      }
      iconPosition="right"
      className={className}
    >
      {isLastSection ? 'Get In Touch' : `Explore ${getSectionName(targetSection)}`}
    </EnhancedButton>
  );
};
