// Section navigation utility
export const sectionOrder = [
  'home',
  'exytex-intro', 
  'exytex-services',
  'services',
  'portfolio',
  'industries',
  'about',
  'contact'
];

export const getNextSection = (currentSection?: string): string => {
  if (!currentSection) {
    return sectionOrder[1]; // Default to first content section
  }
  
  const currentIndex = sectionOrder.indexOf(currentSection);
  if (currentIndex === -1 || currentIndex === sectionOrder.length - 1) {
    return sectionOrder[sectionOrder.length - 1]; // Go to last section (contact)
  }
  
  return sectionOrder[currentIndex + 1];
};

export const getCurrentSection = (): string => {
  const sections = sectionOrder.map(id => document.getElementById(id)).filter(Boolean);
  const scrollPosition = window.scrollY + 100; // Offset for header
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section && section.offsetTop <= scrollPosition) {
      return section.id;
    }
  }
  
  return sectionOrder[0]; // Default to home
};

export const scrollToNextSection = () => {
  const currentSection = getCurrentSection();
  const nextSection = getNextSection(currentSection);
  
  const element = document.getElementById(nextSection);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};