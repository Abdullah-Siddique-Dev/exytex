import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { DigitalMarketingHeroSection } from '../components/sections/DigitalMarketingHeroSection';
import { DigitalMarketingServicesSection } from '../components/sections/DigitalMarketingServicesSection';
import { DigitalMarketingCarouselSection } from '../components/sections/DigitalMarketingCarouselSection';
import { DigitalMarketingAboutSection } from '../components/sections/DigitalMarketingAboutSection';
import { DigitalMarketingStrategiesSection } from '../components/sections/DigitalMarketingStrategiesSection';
import { DigitalMarketingProcessSection } from '../components/sections/DigitalMarketingProcessSection';
import { DigitalMarketingFAQSection } from '../components/sections/DigitalMarketingFAQSection';
import { DigitalMarketingFormSection } from '../components/sections/DigitalMarketingFormSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const DigitalMarketingPage: React.FC = () => {
  useSmoothScroll();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital marketing services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive digital marketing services including SEO, SEM, social media marketing, email marketing, content marketing, PPC advertising, performance analytics, and digital branding strategies to increase your online visibility and drive sales."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Results vary by strategy. PPC and social media ads can show immediate results, while SEO typically takes 3-6 months. We provide regular performance reports and continuously optimize campaigns to maximize ROI and achieve your marketing goals."
        }
      },
      {
        "@type": "Question",
        "name": "How much do digital marketing services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing costs depend on your goals, target audience, and chosen channels. Monthly packages typically start from $500 for small businesses to $5,000+ for comprehensive enterprise campaigns. We create customized packages based on your budget and objectives."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide performance reports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide detailed monthly performance reports including key metrics like traffic, conversions, ROI, engagement rates, and campaign performance. You'll have access to real-time dashboards and regular strategy review meetings."
        }
      },
      {
        "@type": "Question",
        "name": "Can you manage our social media accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer complete social media management including content creation, posting schedules, community engagement, paid advertising, and performance tracking across all major platforms like Facebook, Instagram, LinkedIn, and Twitter."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Exytex | Digital Marketing Services | Digital Branding Company</title>
        <meta name="description" content="Digital marketing services including SEM, social ads, email marketing, content strategy, and performance analytics to increase visibility and sales." />
        <meta name="keywords" content="digital marketing services, digital branding, SEM, social media ads, email marketing, content strategy, performance analytics, online marketing, Exytex" />
        <meta property="og:title" content="Exytex | Digital Marketing Services | Digital Branding Company" />
        <meta property="og:description" content="Digital marketing services including SEM, social ads, email marketing, content strategy, and performance analytics to increase visibility and sales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/digital-marketing/" />
        <link rel="canonical" href="https://www.exytex.com/digital-marketing/" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="bg-white min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

        <section id="digital-hero"><DigitalMarketingHeroSection /></section>
        <section id="digital-services"><DigitalMarketingServicesSection /></section>
        <section id="digital-carousel"><DigitalMarketingCarouselSection /></section>
        <section id="digital-about"><DigitalMarketingAboutSection /></section>
        <section id="digital-strategies"><DigitalMarketingStrategiesSection /></section>
        <section id="digital-process"><DigitalMarketingProcessSection /></section>
        <section id="digital-faq"><DigitalMarketingFAQSection /></section>
        <section id="digital-form"><DigitalMarketingFormSection /></section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default DigitalMarketingPage;