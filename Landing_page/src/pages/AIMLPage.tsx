import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { AIMLHeroSection } from '../components/sections/AIMLHeroSection';
import { AIMLServicesSection } from '../components/sections/AIMLServicesSection';
import { AIMLAboutSection } from '../components/sections/AIMLAboutSection';
import { AIMLFeaturesSection } from '../components/sections/AIMLFeaturesSection';
import { AIMLPortfolioSection } from '../components/sections/AIMLPortfolioSection';
import { AIMLProcessSection } from '../components/sections/AIMLProcessSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const AIMLPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />

      <section id="aiml-hero"><AIMLHeroSection /></section>
      <section id="aiml-services"><AIMLServicesSection /></section>
      <section id="aiml-about"><AIMLAboutSection /></section>
      <section id="aiml-features"><AIMLFeaturesSection /></section>
      <section id="aiml-portfolio"><AIMLPortfolioSection /></section>
      <section id="aiml-process"><AIMLProcessSection /></section>

      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default AIMLPage;