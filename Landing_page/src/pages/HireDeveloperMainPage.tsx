import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { HireDeveloperHero } from '../components/sections/HireDeveloperHero';
import { HireDeveloperCategories } from '../components/sections/HireDeveloperCategories';
import { HireDeveloperProcess } from '../components/sections/HireDeveloperProcess';
import { HireDeveloperTestimonials } from '../components/sections/HireDeveloperTestimonials';
import { HireDeveloperBenefits } from '../components/sections/HireDeveloperBenefits';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const HireDeveloperMainPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Hire Developers | Top Remote Developers for Your Project</title>
        <meta name="description" content="Hire top remote developers for your project. Expert Kotlin, Next.js, Vue.js, Swift, Backend, Golang, Ajax, and .NET developers. Pre-vetted talent, flexible engagement, quick onboarding." />
        <meta name="keywords" content="hire developers, remote developers, kotlin developer, nextjs developer, vuejs developer, swift developer, backend developer, golang developer, ajax developer, dotnet developer, freelance developers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hire Developers | Top Remote Developers for Your Project" />
        <meta property="og:description" content="Hire top remote developers for your project. Pre-vetted talent, flexible engagement, quick onboarding." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/hire-developer" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Developers | Top Remote Developers" />
        <meta name="twitter:description" content="Hire top remote developers for your project. Pre-vetted talent, flexible engagement." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Developer Hiring Services",
            "provider": {
              "@type": "Organization",
              "name": "Exytex",
              "url": "https://exytex.com"
            },
            "description": "Professional developer hiring services for businesses. Access to pre-vetted remote developers across multiple technologies.",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Developer Hiring Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Frontend Developer Hiring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Backend Developer Hiring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile Developer Hiring"
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

        <HireDeveloperHero />
        <HireDeveloperCategories />
        <HireDeveloperProcess />
        <HireDeveloperBenefits />
        <HireDeveloperTestimonials />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default HireDeveloperMainPage;