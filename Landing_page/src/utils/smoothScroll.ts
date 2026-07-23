// Smooth scroll utility function
export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Enhanced smooth scroll with easing
export const smoothScrollToWithEasing = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Use native smooth scrolling for better performance and smoothness
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};