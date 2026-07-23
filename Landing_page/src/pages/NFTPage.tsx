import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import SEO from '../components/SEO';
import { seoData, schemaTemplates } from '../data/seoData';
import NFTHeroSection from '../components/sections/nft/NFTHeroSection';
import NFTServicesSection from '../components/sections/nft/NFTServicesSection';
import NFTBenefitsSection from '../components/sections/nft/NFTBenefitsSection';
import NFTUseCasesSection from '../components/sections/nft/NFTUseCasesSection';
import NFTWhyChooseSection from '../components/sections/nft/NFTWhyChooseSection';
import NFTFAQSection from '../components/sections/nft/NFTFAQSection';
import NFTInsightsSection from '../components/sections/nft/NFTInsightsSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const NFTPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3D91] via-[#1a1a3e] to-[#0B3D91]">
      <SEO
        title={seoData.nft.title}
        description={seoData.nft.description}
        keywords={seoData.nft.keywords}
        canonicalUrl="/services/nft"
        schema={schemaTemplates.service('NFT Marketplace Development', seoData.nft.description)}
      />
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      <NFTHeroSection />
      <NFTServicesSection />
      <NFTBenefitsSection />
      <NFTUseCasesSection />
      <NFTWhyChooseSection />
      <NFTFAQSection />
      <NFTInsightsSection />
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default NFTPage;
