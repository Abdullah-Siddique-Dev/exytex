import React from 'react';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { ScrollProgress } from '../../components/ui/ScrollProgress';
import { FloatingActionButton } from '../../components/ui/FloatingActionButton';
import { CursorFollower } from '../../components/ui/CursorFollower';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { BlockchainTechHero } from '../../components/tech/blockchain/BlockchainTechHero';
import { BlockchainIntro } from '../../components/tech/blockchain/BlockchainIntro';
import { BlockchainServices } from '../../components/tech/blockchain/BlockchainServices';
import { BlockchainWhyChoose } from '../../components/tech/blockchain/BlockchainWhyChoose';
import { BlockchainInsights } from '../../components/tech/blockchain/BlockchainInsights';

const BlockchainTechPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />

      <BlockchainTechHero />
      <BlockchainIntro />
      <BlockchainServices />
      <BlockchainWhyChoose />
      <BlockchainInsights />

      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default BlockchainTechPage;
