import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { KotlinDeveloperHero } from '../../components/sections/hire-developer/KotlinDeveloperHero';
import { KotlinDeveloperSkills } from '../../components/sections/hire-developer/KotlinDeveloperSkills';
import { KotlinDeveloperProfiles } from '../../components/sections/hire-developer/KotlinDeveloperProfiles';
import { KotlinDeveloperPricing } from '../../components/sections/hire-developer/KotlinDeveloperPricing';
import { ScrollProgress } from '../../components/ui/ScrollProgress';
import { FloatingActionButton } from '../../components/ui/FloatingActionButton';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const KotlinDeveloperPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Hire Kotlin Developer | Expert Android & Cross-Platform Development</title>
        <meta name="description" content="Hire expert Kotlin developers for Android apps, cross-platform solutions, and JVM development. Pre-vetted talent, flexible engagement, competitive rates. Start hiring today!" />
        <meta name="keywords" content="hire kotlin developer, kotlin programmer, android developer, kotlin expert, mobile app developer, cross-platform development, JVM developer, kotlin freelancer" />
        
        <meta property="og:title" content="Hire Kotlin Developer | Expert Android Development" />
        <meta property="og:description" content="Hire expert Kotlin developers for Android apps and cross-platform solutions. Pre-vetted talent, flexible engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/hire-developer/kotlin" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Kotlin Developer | Expert Android Development" />
        <meta name="twitter:description" content="Hire expert Kotlin developers for Android apps and cross-platform solutions." />
      </Helmet>

      <div className="bg-white min-h-screen overflow-hidden">
        <ScrollProgress />
        <SleekHeader />

        <KotlinDeveloperHero />
        <KotlinDeveloperSkills />
        <KotlinDeveloperProfiles />
        <KotlinDeveloperPricing />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default KotlinDeveloperPage;