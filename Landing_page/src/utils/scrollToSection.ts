/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export const scrollToSection = (sectionId: string, offset: number = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/**
 * Scrolls to the contact form section
 */
export const scrollToContactForm = () => {
    scrollToSection('contact-form', 80);
};
