import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import SEO from '../components/SEO';
import { seoData, schemaTemplates } from '../data/seoData';
import AndroidHeroSection from '../components/sections/android/AndroidHeroSection';
import AndroidServicesSection from '../components/sections/android/AndroidServicesSection';
import AndroidTechStackSection from '../components/sections/android/AndroidTechStackSection';
import AndroidWhyChooseSection from '../components/sections/android/AndroidWhyChooseSection';
import AndroidEngagementSection from '../components/sections/android/AndroidEngagementSection';
import AndroidMethodologySection from '../components/sections/android/AndroidMethodologySection';
import AndroidFAQSection from '../components/sections/android/AndroidFAQSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const AndroidPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3D91] via-[#4B0082] to-[#0B3D91]">
      <SEO
        title={seoData.android.title}
        description={seoData.android.description}
        keywords={seoData.android.keywords}
        canonicalUrl="/services/android"
        schema={schemaTemplates.service('Android App Development', seoData.android.description)}
      />
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      <AndroidHeroSection />
      <AndroidServicesSection />
      <AndroidTechStackSection />
      <AndroidWhyChooseSection />
      <AndroidEngagementSection />
      <AndroidMethodologySection />
      <AndroidFAQSection />
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default AndroidPage;
