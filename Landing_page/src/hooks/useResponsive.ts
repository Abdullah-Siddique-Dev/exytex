import { useState, useEffect } from 'react';

interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

/**
 * Custom hook for responsive design
 * Returns current screen size information and updates on resize
 */
export const useResponsive = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
        width,
        height,
      });
    };

    // Set initial size
    updateScreenSize();

    // Add event listener with debouncing for performance
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScreenSize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    
    // Also listen for orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(updateScreenSize, 100);
    });

    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('orientationchange', updateScreenSize);
      clearTimeout(timeoutId);
    };
  }, []);

  return screenSize;
};

/**
 * Hook for getting responsive button styles
 */
export const useResponsiveButtonStyles = () => {
  const { isMobile, isTablet } = useResponsive();
  
  return {
    // Base button classes that adapt to screen size
    baseButton: `
      ${isMobile ? 'w-full px-4 py-3 text-sm' : 'px-6 py-3 text-base'}
      ${isTablet ? 'px-5 py-3 text-sm' : ''}
      font-semibold rounded-lg transition-all duration-300
      flex items-center justify-center gap-2
    `,
    
    // Primary button (Get Started, etc.)
    primaryButton: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700
      ${isMobile ? 'active:scale-98' : 'hover:scale-102'}
    `,
    
    // Secondary button
    secondaryButton: `
      border-2 border-gray-300 text-gray-700 bg-white
      hover:bg-gray-50 hover:border-gray-400
      ${isMobile ? 'active:scale-98' : 'hover:scale-102'}
    `,
    
    // Icon size based on screen
    iconSize: isMobile ? 'w-4 h-4' : 'w-5 h-5',
    
    // Container spacing
    buttonContainer: `
      flex gap-3 justify-center
      ${isMobile ? 'flex-col max-w-sm mx-auto' : 'flex-col sm:flex-row'}
    `,
  };
};