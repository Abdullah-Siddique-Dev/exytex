import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { InsuranceServicesHero } from '../components/sections/InsuranceServicesHero';
import { InsuranceRecognitions } from '../components/sections/InsuranceRecognitions';
import { InsuranceFocusCarousel } from '../components/sections/InsuranceFocusCarousel';
import { InsuranceTestimonials } from '../components/sections/InsuranceTestimonials';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const InsuranceServicesPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Insurance Technology Solutions | Digital Transformation Services</title>
        <meta name="description" content="Transform your insurance operations with our comprehensive technology solutions. 6+ years expertise in life, health, P&C insurance. Featured in Everest Peak Matrix & Celent Reports. Get free consultation." />
        <meta name="keywords" content="insurance technology, insurtech solutions, insurance software, policy administration, claims processing, insurance digital transformation, life insurance software, P&C insurance, health insurance technology, insurance automation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Insurance Technology Solutions | Digital Transformation Services" />
        <meta property="og:description" content="Transform your insurance operations with our comprehensive technology solutions. 6+ years expertise in life, health, P&C insurance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/insurance-services" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insurance Technology Solutions | Digital Transformation" />
        <meta name="twitter:description" content="Transform your insurance operations with 6+ years of insurtech expertise. Featured in Everest Peak Matrix." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Insurance Technology Solutions",
            "provider": {
              "@type": "Organization",
              "name": "Exytex",
              "url": "https://exytex.com"
            },
            "description": "Comprehensive insurance technology solutions for insurers, agents, brokers, and adjusters across life, health, P&C, and general insurance.",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Insurance Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Policy Administration Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Claims Processing Automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Insurance Digital Transformation"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen overflow-hidden">
        <ScrollProgress />
        <SleekHeader />

        <InsuranceServicesHero />
        <InsuranceRecognitions />
        <InsuranceFocusCarousel />
        <InsuranceTestimonials />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default InsuranceServicesPage;
