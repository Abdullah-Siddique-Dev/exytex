import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import IOSHeroSection from '../components/sections/ios/iOSHeroSection';
import IOSServicesSection from '../components/sections/ios/iOSServicesSection';
import IOSTechStackSection from '../components/sections/ios/iOSTechStackSection';
import IOSWhyChooseSection from '../components/sections/ios/iOSWhyChooseSection';
import IOSEngagementSection from '../components/sections/ios/iOSEngagementSection';
import IOSMethodologySection from '../components/sections/ios/iOSMethodologySection';
import IOSFAQSection from '../components/sections/ios/iOSFAQSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import SEO from '../components/SEO';
import { seoData, schemaTemplates } from '../data/seoData';

const iOSPage: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3D91] via-[#4B0082] to-[#0B3D91]">
      <SEO
        title="iOS App Development Services | iPhone & iPad App Developers"
        description="Professional iOS app development company. Build custom iPhone, iPad, Apple Watch apps with certified Swift developers. Native iOS development services with free consultation."
        keywords="ios app development, iphone app development, ipad app development, swift developers, ios developers, apple app development, mobile app development, ios programming, xcode development, objective c"
        canonicalUrl="/services/ios"
        schema={schemaTemplates.service('iOS App Development', 'Custom iOS application development for iPhone, iPad, Apple Watch, and Apple TV')}
      />
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />
      <IOSHeroSection />
      <IOSServicesSection />
      <IOSTechStackSection />
      <IOSWhyChooseSection />
      <IOSEngagementSection />
      <IOSMethodologySection />
      <IOSFAQSection />
      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default iOSPage;
