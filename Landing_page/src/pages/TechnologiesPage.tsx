import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { DamcoTechHeroSection } from '../components/sections/DamcoTechHeroSection';
import { TechPossibilitiesSection } from '../components/sections/TechPossibilitiesSection';
import { TechnologiesGridSection } from '../components/sections/TechnologiesGridSection';
import { WhyChooseDamcoSection } from '../components/sections/WhyChooseDamcoSection';
import { TechInsightsSection } from '../components/sections/TechInsightsSection';
import { TechStackSection } from '../components/sections/TechStackSection';
import { ContactSection } from '../components/sections/ContactSection';

const TechnologiesPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>
          Advanced Technology Stack - Blockchain, AI/ML, Cloud & Mobile Development | Exytex Technologies
        </title>
        <meta
          name="description"
          content="Explore Exytex Technologies' comprehensive technology stack including Blockchain, AI/ML, Cloud Solutions, Mobile Development, Web Technologies, and more. 6+ years of expertise in cutting-edge software development technologies."
        />
        <meta
          name="keywords"
          content="technology stack, blockchain development, AI ML solutions, cloud computing, mobile app development, web development technologies, React, Angular, Node.js, Python, Java, Ethereum, smart contracts, AWS, Azure, digital transformation, software development company"
        />
        <meta
          property="og:title"
          content="Advanced Technology Stack - Blockchain, AI/ML, Cloud & Mobile Development | Exytex Technologies"
        />
        <meta
          property="og:description"
          content="Discover our comprehensive technology expertise across Blockchain, AI/ML, Cloud, Mobile, and Web Development. Transform your business with cutting-edge solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white min-h-screen overflow-x-hidden">
        <SleekHeader />

        <DamcoTechHeroSection />
        <TechPossibilitiesSection />
        <TechnologiesGridSection />
        <WhyChooseDamcoSection />
        <TechInsightsSection />
        <TechStackSection />
        <ContactSection />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default TechnologiesPage;
