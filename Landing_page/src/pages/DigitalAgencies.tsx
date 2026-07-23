import React from 'react';
import DigitalAgenciesHero from '../components/sections/DigitalAgenciesHero';
import ServicesCarousel from '../components/sections/ServicesCarousel';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import CustomerSuccessCarousel from '../components/sections/CustomerSuccessCarousel';
import TrustedPartnersSection from '../components/sections/TrustedPartnersSection';
import CTASection from '../components/sections/CTASection';

const DigitalAgencies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DigitalAgenciesHero />
      <ServicesCarousel />
      <WhyChooseSection />
      <TrustedPartnersSection />
      <CustomerSuccessCarousel />
      <CTASection />
    </div>
  );
};

export default DigitalAgencies;