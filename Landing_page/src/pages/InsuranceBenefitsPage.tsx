import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { BlockchainBenefitsSection } from '../components/sections/BlockchainBenefitsSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const InsuranceBenefitsPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="bg-white min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      
      <BlockchainBenefitsSection />
      
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default InsuranceBenefitsPage;
