import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ContactHeroSection } from '../components/sections/ContactHeroSection';
import { ContactFormSection } from '../components/sections/ContactFormSection';
import { ContactInfoSection } from '../components/sections/ContactInfoSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const ContactPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      
      {/* Navigation separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-20"></div>
      
      <main>
        <section id="contact-hero">
          <ContactHeroSection />
        </section>
        
        <section id="contact-form">
          <ContactFormSection />
        </section>
        
        <section id="contact-info">
          <ContactInfoSection />
        </section>
      </main>
      
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default ContactPage;
