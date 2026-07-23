/**
 * Utility functions for smooth scrolling to different sections
 * Responsive design for all screen sizes (mobile, tablet, desktop)
 */

/**
 * Gets the appropriate header offset based on screen size
 */
const getHeaderOffset = (): number => {
  const screenWidth = window.innerWidth;
  
  // Mobile devices (< 640px)
  if (screenWidth < 640) {
    return 80; // Slightly more space on mobile for better UX
  }
  // Tablet devices (640px - 1024px)
  else if (screenWidth < 1024) {
    return 75; // Medium offset for tablets
  }
  // Desktop devices (>= 1024px)
  else {
    return 70; // Standard offset for desktop
  }
};

/**
 * Checks if the device supports smooth scrolling
 */
const supportsSmoothScrolling = (): boolean => {
  return 'scrollBehavior' in document.documentElement.style;
};

/**
 * Polyfill for smooth scrolling on older browsers/devices
 */
const smoothScrollPolyfill = (targetPosition: number, duration: number = 800) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for smooth animation
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };
  
  requestAnimationFrame(animation);
};

/**
 * Scrolls to the contact form section with smooth animation
 * Responsive and works across all screen sizes and devices
 */
export const scrollToContactForm = () => {
  // Common selectors for contact forms across the website
  const contactSelectors = [
    '#contact-form',
    '#contact',
    '[data-contact-form]',
    '.contact-form',
    '.contact-section',
    'section:has(form)',
    'form[name="contact"]',
    'form[id*="contact"]',
    // Fallback to any form on the page
    'form'
  ];

  let targetElement: Element | null = null;

  // Try to find a contact form using the selectors
  for (const selector of contactSelectors) {
    try {
      targetElement = document.querySelector(selector);
      if (targetElement) break;
    } catch (error) {
      // Skip invalid selectors (like :has() on older browsers)
      continue;
    }
  }

  // If no contact form found, try to find contact-related sections
  if (!targetElement) {
    const fallbackSelectors = [
      '[class*="contact"]',
      '[id*="contact"]',
      'section:last-of-type', // Often the contact section is at the bottom
    ];

    for (const selector of fallbackSelectors) {
      try {
        targetElement = document.querySelector(selector);
        if (targetElement) break;
      } catch (error) {
        continue;
      }
    }
  }

  if (targetElement) {
    // Get responsive header offset
    const headerOffset = getHeaderOffset();
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Ensure we don't scroll past the document
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const finalPosition = Math.min(Math.max(offsetPosition, 0), maxScroll);

    // Use native smooth scrolling if supported, otherwise use polyfill
    if (supportsSmoothScrolling()) {
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback for older browsers/devices
      smoothScrollPolyfill(finalPosition);
    }
  } else {
    // Fallback: scroll to bottom of page with responsive handling
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    
    if (supportsSmoothScrolling()) {
      window.scrollTo({
        top: maxScroll,
        behavior: 'smooth'
      });
    } else {
      smoothScrollPolyfill(maxScroll);
    }
  }
};

/**
 * Scrolls to a specific section by ID or selector with responsive offset
 */
export const scrollToSection = (selector: string, customOffset?: number) => {
  const element = document.querySelector(selector);
  if (element) {
    const offset = customOffset || getHeaderOffset();
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Ensure we don't scroll past the document
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const finalPosition = Math.min(Math.max(offsetPosition, 0), maxScroll);

    if (supportsSmoothScrolling()) {
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    } else {
      smoothScrollPolyfill(finalPosition);
    }
  }
};

/**
 * Scrolls to the top of the page with responsive handling
 */
export const scrollToTop = () => {
  if (supportsSmoothScrolling()) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    smoothScrollPolyfill(0);
  }
};

/**
 * Debounced scroll handler for performance on mobile devices
 */
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Checks if the user is on a mobile device
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth < 768;
};

/**
 * Gets scroll position with mobile-friendly handling
 */
export const getScrollPosition = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

/**
 * Adds mobile-friendly touch handling for scroll interactions
 */
export const addMobileScrollSupport = () => {
  // Prevent scroll bounce on iOS
  if (isMobileDevice()) {
    document.body.style.overscrollBehavior = 'none';
    
    // Add passive event listeners for better performance
    const options = { passive: true };
    
    // Improve scroll performance on mobile
    document.addEventListener('touchstart', () => {}, options);
    document.addEventListener('touchmove', () => {}, options);
  }
};

/**
 * Enhanced scroll to contact form with mobile optimizations
 */
export const scrollToContactFormMobile = () => {
  // Add haptic feedback on supported devices
  if ('vibrate' in navigator && isMobileDevice()) {
    navigator.vibrate(50); // Short vibration for feedback
  }
  
  // Use the main scroll function
  scrollToContactForm();
  
  // On mobile, also blur any active input to hide keyboard
  if (isMobileDevice()) {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement.blur) {
      activeElement.blur();
    }
  }
};