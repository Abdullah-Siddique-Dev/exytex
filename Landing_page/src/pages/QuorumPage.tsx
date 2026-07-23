import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { QuorumHero } from '../components/quorum/QuorumHero';
import { QuorumIntro } from '../components/quorum/QuorumIntro';
import { QuorumServices } from '../components/quorum/QuorumServices';
import { QuorumPortfolio } from '../components/quorum/QuorumPortfolio';
import { QuorumWhyChoose } from '../components/quorum/QuorumWhyChoose';
import { QuorumRoadmap } from '../components/quorum/QuorumRoadmap';
import { QuorumIndustries } from '../components/quorum/QuorumIndustries';
import { QuorumFAQ } from '../components/quorum/QuorumFAQ';
import { QuorumCTA } from '../components/quorum/QuorumCTA';

const QuorumPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="bg-slate-950 min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />

      <QuorumHero />
      <QuorumIntro />
      <QuorumServices />
      <QuorumPortfolio />
      <QuorumWhyChoose />
      <QuorumRoadmap />
      <QuorumIndustries />
      <QuorumFAQ />
      <QuorumCTA />

      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default QuorumPage;
