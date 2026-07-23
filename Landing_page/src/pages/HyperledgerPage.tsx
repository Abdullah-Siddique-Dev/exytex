import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import SEO from '../components/SEO';
import { seoData, schemaTemplates } from '../data/seoData';
import HyperledgerHeroSection from '../components/sections/hyperledger/HyperledgerHeroSection';
import HyperledgerServicesSection from '../components/sections/hyperledger/HyperledgerServicesSection';
import HyperledgerTechSection from '../components/sections/hyperledger/HyperledgerTechSection';
import HyperledgerWhyChooseSection from '../components/sections/hyperledger/HyperledgerWhyChooseSection';
import HyperledgerRoadmapSection from '../components/sections/hyperledger/HyperledgerRoadmapSection';
import HyperledgerIndustriesSection from '../components/sections/hyperledger/HyperledgerIndustriesSection';
import HyperledgerFAQSection from '../components/sections/hyperledger/HyperledgerFAQSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const HyperledgerPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3D91] via-[#1a1a3e] to-[#0B3D91]">
      <SEO
        title={seoData.hyperledger.title}
        description={seoData.hyperledger.description}
        keywords={seoData.hyperledger.keywords}
        canonicalUrl="/services/hyperledger"
        schema={schemaTemplates.service('Hyperledger Development', seoData.hyperledger.description)}
      />
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      <HyperledgerHeroSection />
      <HyperledgerServicesSection />
      <HyperledgerTechSection />
      <HyperledgerWhyChooseSection />
      <HyperledgerRoadmapSection />
      <HyperledgerIndustriesSection />
      <HyperledgerFAQSection />
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default HyperledgerPage;
