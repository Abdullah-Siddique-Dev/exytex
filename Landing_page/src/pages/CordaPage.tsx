import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import CordaHeroSection from '../components/sections/corda/CordaHeroSection';
import CordaOfferingsSection from '../components/sections/corda/CordaOfferingsSection';
import CordaPortfolioSection from '../components/sections/corda/CordaPortfolioSection';
import CordaWhyChooseSection from '../components/sections/corda/CordaWhyChooseSection';
import CordaRoadmapSection from '../components/sections/corda/CordaRoadmapSection';
import CordaPlatformsSection from '../components/sections/corda/CordaPlatformsSection';
import CordaIndustrySection from '../components/sections/corda/CordaIndustrySection';
import CordaFAQSection from '../components/sections/corda/CordaFAQSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import SEO from '../components/SEO';
import { seoData, schemaTemplates } from '../data/seoData';

const CordaPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title={seoData.corda.title}
        description={seoData.corda.description}
        keywords={seoData.corda.keywords}
        canonicalUrl="/services/corda"
        schema={schemaTemplates.service('Corda Blockchain Development', seoData.corda.description)}
      />
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      <CordaHeroSection />
      <CordaOfferingsSection />
      <CordaPortfolioSection />
      <CordaWhyChooseSection />
      <CordaRoadmapSection />
      <CordaPlatformsSection />
      <CordaIndustrySection />
      <CordaFAQSection />
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default CordaPage;
