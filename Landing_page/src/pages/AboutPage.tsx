import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { AboutHeroSection } from '../components/sections/AboutHeroSection';
import { CompanyOverviewSection } from '../components/sections/CompanyOverviewSection';
import { ServicesExpertiseSection } from '../components/sections/ServicesExpertiseSection';
import { MissionVisionSection } from '../components/sections/MissionVisionSection';
import { TeamCommitmentSection } from '../components/sections/TeamCommitmentSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { ClientProfileSection } from '../components/sections/ClientProfileSection';
import { ChallengesSection } from '../components/sections/ChallengesSection';
import { SolutionCarouselSection } from '../components/sections/SolutionCarouselSection';
import { ValueDeliveredSection } from '../components/sections/ValueDeliveredSection';
import { AboutFAQSection } from '../components/sections/AboutFAQSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { AboutContactFormSection } from '../components/sections/AboutContactFormSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Exytex Technologies - Leading IT & Software Solutions Company | Web Development, Mobile Apps & Digital Marketing</title>
        <meta name="description" content="Learn about Exytex Technologies, your trusted IT & software solutions partner. We offer premium web development, mobile app development, digital marketing, SEO, and software services to help businesses grow online." />
        <meta name="keywords" content="about exytex technologies, software development company, web development services, mobile app development, digital marketing agency, SEO services, IT solutions, software house Pakistan, Muhammad Saad CEO" />
        <meta property="og:title" content="About Exytex Technologies - Leading IT & Software Solutions Company" />
        <meta property="og:description" content="Discover Exytex Technologies - a solution-driven team offering premium IT services including web development, mobile apps, digital marketing, and software solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytext.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Exytex Technologies - IT & Software Solutions" />
        <meta name="twitter:description" content="Learn about our mission, vision, and commitment to delivering innovative digital solutions that help businesses thrive online." />
        <link rel="canonical" href="https://www.exytext.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <SleekHeader />
        <AboutHeroSection />
        <CompanyOverviewSection />
        <ServicesExpertiseSection />
        <MissionVisionSection />
        <TeamCommitmentSection />
        <WhyChooseUsSection />
        <ClientProfileSection />
        <ChallengesSection />
        <SolutionCarouselSection />
        <ValueDeliveredSection />
        <PartnersSection />
        <AboutFAQSection />
        <AboutContactFormSection />
        <ElegantFooter />
      </div>
    </>
  );
};

export default AboutPage;
