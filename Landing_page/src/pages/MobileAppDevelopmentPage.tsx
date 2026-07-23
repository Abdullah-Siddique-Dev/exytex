import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { MobileAppDevelopmentComplete } from '../components/sections/MobileAppDevelopmentComplete';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const MobileAppDevelopmentPage: React.FC = () => {
  useSmoothScroll();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What mobile app development services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive mobile app development services for both Android and iOS platforms. Our services include native app development, cross-platform development, UI/UX design, app testing, deployment, and ongoing maintenance and support."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Development time varies based on app complexity. A simple app typically takes 2-3 months, while complex apps with advanced features may take 4-6 months or longer. We provide detailed timelines during project planning based on your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop apps for both iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we develop apps for both iOS and Android platforms. We offer native development for each platform as well as cross-platform solutions using React Native and Flutter, which can reduce development time and costs while maintaining quality."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of mobile app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile app development costs vary based on features, complexity, and platform. Simple apps start from $5,000, while complex enterprise apps can range from $25,000 to $100,000+. Contact us for a detailed quote based on your specific app requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide app maintenance after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive post-launch support including bug fixes, performance optimization, OS updates compatibility, feature enhancements, and technical support. We offer flexible maintenance packages to ensure your app stays up-to-date and runs smoothly."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Mobile App Development Company in Pakistan | Exytex</title>
        <meta name="description" content="Exytex provides professional Android and iOS mobile app development services using modern technologies to build fast, secure, and scalable applications." />
        <meta name="keywords" content="mobile app development Pakistan, Android app development, iOS app development, mobile app company, app development services, Exytex" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/mobile-app-development/" />
        <meta property="og:title" content="Mobile App Development Company in Pakistan | Exytex" />
        <meta property="og:description" content="Exytex provides professional Android and iOS mobile app development services using modern technologies to build fast, secure, and scalable applications." />
        <meta property="og:image" content="https://www.exytex.com/images/mobile-app-development-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.exytex.com/mobile-app-development/" />
        <meta property="twitter:title" content="Mobile App Development Company in Pakistan | Exytex" />
        <meta property="twitter:description" content="Exytex provides professional Android and iOS mobile app development services using modern technologies." />
        <meta property="twitter:image" content="https://www.exytex.com/images/mobile-app-development-twitter.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.exytex.com/mobile-app-development/" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://exytex.com/services/mobile-app-development" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="bg-white min-h-screen">
        <CursorFollower />
        <SleekHeader />

        <section id="mobile-development">
          <MobileAppDevelopmentComplete />
        </section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default MobileAppDevelopmentPage;