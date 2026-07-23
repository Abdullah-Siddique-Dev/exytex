import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { HireDevelopersHeroSection } from '../components/sections/HireDevelopersHeroSection';
import { DeveloperSkillsSection } from '../components/sections/DeveloperSkillsSection';
import { ModernDesignShowcaseSection } from '../components/sections/ModernDesignShowcaseSection';
import { HiringModelsSection } from '../components/sections/HiringModelsSection';
import { ITStaffingProcessSection } from '../components/sections/ITStaffingProcessSection';
import { DeveloperTestimonialsSection } from '../components/sections/DeveloperTestimonialsSection';
import { HireDevelopersCTASection } from '../components/sections/HireDevelopersCTASection';

const HireDevelopersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Hire Developers - Top Full Stack, Frontend & Backend Developers | Exytex Technologies</title>
        <meta name="description" content="Hire top developers from Exytex Technologies. Access pre-vetted remote developers ready to join your team. Find full stack, frontend, backend, mobile app developers in 48 hours." />
        <meta name="keywords" content="hire developers, hire full stack developers, hire frontend developers, hire backend developers, hire mobile app developers, remote developers, software developers for hire, Exytex Technologies" />
        <meta property="og:title" content="Hire Top Developers - Full Stack, Frontend & Backend | Exytex Technologies" />
        <meta property="og:description" content="Access pre-vetted remote developers ready to join your team. From startups to enterprises, find the perfect match in 48 hours." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Top Developers - Exytex Technologies" />
        <meta name="twitter:description" content="Hire skilled developers for your projects. 500+ developers available, 48hr matching, flexible hiring models." />
        <link rel="canonical" href="/hire-developer" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <SleekHeader />
        <HireDevelopersHeroSection />
        <DeveloperSkillsSection />
        <ModernDesignShowcaseSection />
        <HiringModelsSection />
        <ITStaffingProcessSection />
        <DeveloperTestimonialsSection />
        <HireDevelopersCTASection />
        <ElegantFooter />
      </div>
    </>
  );
};

export default HireDevelopersPage;
