import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scroll behavior
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href') || target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 96; // Account for fixed header (24 * 4 = 96px)
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add smooth scroll CSS
    document.documentElement.style.scrollBehavior = 'smooth';

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};