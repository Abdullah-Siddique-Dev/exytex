import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { AmazonFBAHeroSection } from '../components/sections/AmazonFBAHeroSection';
import { AmazonFBAOverviewSection } from '../components/sections/AmazonFBAOverviewSection';
import { AmazonFBAProcessSection } from '../components/sections/AmazonFBAProcessSection';
import { AmazonFBAProsConsSection } from '../components/sections/AmazonFBAProsConsSection';
import { AmazonFBAContactSection } from '../components/sections/AmazonFBAContactSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { SectionNavigation } from '../components/ui/SectionNavigation';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const AmazonFBAPage: React.FC = () => {
  useSmoothScroll();

  const navigationItems = [
    { id: 'fba-hero', label: 'Home', icon: '🏠' },
    { id: 'fba-overview', label: 'Overview', icon: '📋' },
    { id: 'fba-process', label: 'Process', icon: '⚙️' },
    { id: 'fba-pros-cons', label: 'Pros & Cons', icon: '⚖️' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      <SectionNavigation items={navigationItems} />

      <section id="fba-hero"><AmazonFBAHeroSection /></section>
      <section id="fba-overview"><AmazonFBAOverviewSection /></section>
      <section id="fba-process"><AmazonFBAProcessSection /></section>
      <section id="fba-pros-cons"><AmazonFBAProsConsSection /></section>
      <AmazonFBAContactSection />

      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default AmazonFBAPage;