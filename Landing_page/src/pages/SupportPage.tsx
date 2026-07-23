import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { SupportHeroSection } from '../components/sections/SupportHeroSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const SupportPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100 min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      
      <section id="support-hero"><SupportHeroSection /></section>
      
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default SupportPage;