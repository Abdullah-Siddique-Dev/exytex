import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
}

interface SectionNavigationProps {
  items: NavigationItem[];
  className?: string;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({ items, className = '' }) => {
  const [activeSection, setActiveSection] = useState(items[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-12 h-12 rounded-full mb-2 last:mb-0 transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            {item.icon ? (
              <span className="text-lg">{item.icon}</span>
            ) : (
              <span className="text-xs font-bold">{index + 1}</span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};