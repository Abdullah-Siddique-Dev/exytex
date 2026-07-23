import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import SEO from '../components/SEO';
import { seoData, schemaTemplates } from '../data/seoData';
import StellarHeroSection from '../components/sections/stellar/StellarHeroSection';
import StellarServicesSection from '../components/sections/stellar/StellarServicesSection';
import StellarTechSection from '../components/sections/stellar/StellarTechSection';
import StellarWhyChooseSection from '../components/sections/stellar/StellarWhyChooseSection';
import StellarRoadmapSection from '../components/sections/stellar/StellarRoadmapSection';
import StellarIndustriesSection from '../components/sections/stellar/StellarIndustriesSection';
import StellarFAQSection from '../components/sections/stellar/StellarFAQSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const StellarPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F54] via-[#1a1a3e] to-[#001F54]">
      <SEO
        title={seoData.stellar.title}
        description={seoData.stellar.description}
        keywords={seoData.stellar.keywords}
        canonicalUrl="/services/stellar"
        schema={schemaTemplates.service('Stellar Blockchain Development', seoData.stellar.description)}
      />
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      <StellarHeroSection />
      <StellarServicesSection />
      <StellarTechSection />
      <StellarWhyChooseSection />
      <StellarRoadmapSection />
      <StellarIndustriesSection />
      <StellarFAQSection />
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default StellarPage;
