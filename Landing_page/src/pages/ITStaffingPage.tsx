import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ITStaffingHeroSection } from '../components/sections/ITStaffingHeroSection';
import { ITStaffingServicesSection } from '../components/sections/ITStaffingServicesSection';
import { ITStaffingAboutSection } from '../components/sections/ITStaffingAboutSection';
import { ITStaffingProcessSection } from '../components/sections/ITStaffingProcessSection';
import { ITStaffingBenefitsSection } from '../components/sections/ITStaffingBenefitsSection';
import { ITStaffingFAQSection } from '../components/sections/ITStaffingFAQSection';
import { ITStaffingFormSection } from '../components/sections/ITStaffingFormSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const ITStaffingPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>IT Staffing Solutions | Hire Top IT Talent | Exytex</title>
        <meta name="description" content="Professional IT staffing services connecting businesses with skilled developers, engineers, and technology professionals. Flexible engagement models and pre-vetted talent." />
        <meta name="keywords" content="IT staffing, hire developers, IT recruitment, software developers, DevOps engineers, IT talent, staff augmentation, contract developers" />
        <meta property="og:title" content="IT Staffing Solutions | Hire Top IT Talent | Exytex" />
        <meta property="og:description" content="Connect with pre-vetted IT professionals for your projects. Flexible staffing solutions tailored to your needs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://exytex.com/services/it-staffing" />
      </Helmet>
      
      <div className="bg-white min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

        <section id="it-staffing-hero"><ITStaffingHeroSection /></section>
        <section id="it-staffing-services"><ITStaffingServicesSection /></section>
        <section id="it-staffing-about"><ITStaffingAboutSection /></section>
        <section id="it-staffing-process"><ITStaffingProcessSection /></section>
        <section id="it-staffing-benefits"><ITStaffingBenefitsSection /></section>
        <section id="it-staffing-faq"><ITStaffingFAQSection /></section>
        <section id="it-staffing-form"><ITStaffingFormSection /></section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default ITStaffingPage;