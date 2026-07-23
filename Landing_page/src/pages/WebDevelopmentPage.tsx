import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { WebDevHeroSection } from '../components/sections/WebDevHeroSection';
import { SoftwareServicesSection } from '../components/sections/SoftwareServicesSection';
import { Simple3DCarousel } from '../components/sections/Simple3DCarousel';
import { WebDevFAQSection } from '../components/sections/WebDevFAQSection';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { ContactSection } from '../components/sections/ContactSection';

const WebDevelopmentPage: React.FC = () => {
  useSmoothScroll();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What web development services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive web development services including custom website development, responsive design, web applications, e-commerce solutions, API development, and mobile backends. Our team specializes in modern technologies and frameworks to deliver scalable and secure web solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline varies based on project complexity. A simple website typically takes 2-4 weeks, while complex web applications may take 2-3 months or more. We provide detailed project timelines during the initial consultation based on your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website maintenance and support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer ongoing maintenance and support services including security updates, bug fixes, performance optimization, content updates, and technical support. We provide flexible maintenance packages to suit your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use modern technologies including React, Node.js, Python, PHP, .NET, and various databases. We select the best technology stack based on your project requirements, scalability needs, and budget."
        }
      },
      {
        "@type": "Question",
        "name": "How much does web development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web development costs vary based on project scope, features, and complexity. Simple websites start from $1,500, while complex web applications can range from $10,000 to $50,000+. Contact us for a detailed quote tailored to your specific needs."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Web development Company near me | Best Developers in Pakistan | Exytex</title>
        <meta name="description" content="Details of Exytex's web development skills: custom websites, responsive design, web apps, e-commerce solutions, APIs and mobile backends for modern business needs." />
        <meta name="keywords" content="web development company Pakistan, best web developers, custom websites, responsive design, web apps, e-commerce solutions, API development, mobile backends, Exytex" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/web-development/" />
        <meta property="og:title" content="Web development Company near me | Best Developers in Pakistan | Exytex" />
        <meta property="og:description" content="Details of Exytex's web development skills: custom websites, responsive design, web apps, e-commerce solutions, APIs and mobile backends for modern business needs." />
        <meta property="og:image" content="https://www.exytex.com/images/web-development-og.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.exytex.com/web-development/" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/services/web-development" />
        <meta property="twitter:title" content="Web Development Services | Custom Web & E-commerce Solutions | Exytex" />
        <meta property="twitter:description" content="Professional web development company offering custom web applications, e-commerce solutions, and responsive websites." />
        <meta property="twitter:image" content="https://exytex.com/images/web-development-twitter.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://exytex.com/services/web-development" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="bg-white min-h-screen">
        <SleekHeader />
      
      <section id="web-hero" className="scroll-mt-24"><WebDevHeroSection /></section>
      <section id="software-services" className="scroll-mt-24"><SoftwareServicesSection /></section>
      <section id="web-3d-carousel" className="scroll-mt-24"><Simple3DCarousel /></section>
      <section id="web-faq" className="scroll-mt-24"><WebDevFAQSection /></section>
      <section id="web-contact" className="scroll-mt-24"><ContactSection /></section>
      
        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default WebDevelopmentPage;