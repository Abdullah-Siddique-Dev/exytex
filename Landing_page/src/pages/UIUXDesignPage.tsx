import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { UIUXHeroSection } from '../components/sections/UIUXHeroSection';
import { UIUXServicesSection } from '../components/sections/UIUXServicesSection';
import { UIUXProcessSection } from '../components/sections/UIUXProcessSection';
import { UIUXPortfolioSection } from '../components/sections/UIUXPortfolioSection';
import { ClientsSliderSection } from '../components/sections/ClientsSliderSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const UIUXDesignPage: React.FC = () => {
  useSmoothScroll();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is UI/UX design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UI (User Interface) design focuses on the visual elements and layout of digital products, while UX (User Experience) design focuses on the overall user journey and interaction. Together, they create intuitive, attractive, and user-friendly digital experiences that drive engagement and conversions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a UI/UX design project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UI/UX design projects typically take 2-6 weeks depending on complexity. Simple website designs may take 2-3 weeks, while complex applications with multiple user flows can take 4-6 weeks or more. We provide detailed timelines during project planning."
        }
      },
      {
        "@type": "Question",
        "name": "What deliverables will I receive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll receive wireframes, interactive prototypes, high-fidelity mockups, design specifications, style guides, and all source files in formats like Figma, Sketch, or Adobe XD. We also provide developer handoff documentation to ensure smooth implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you conduct user research and testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we conduct comprehensive user research including user interviews, surveys, competitor analysis, and usability testing. This ensures our designs are based on real user needs and behaviors, resulting in better engagement and conversion rates."
        }
      },
      {
        "@type": "Question",
        "name": "How much does UI/UX design cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UI/UX design costs vary based on project scope and complexity. Simple website designs start from $2,000, while complex application designs can range from $5,000 to $20,000+. Contact us for a detailed quote tailored to your specific needs."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>UI UX Design Company in Pakistan | Exytex</title>
        <meta name="description" content="Professional UI/UX design services focused on user-friendly interfaces, modern layouts, wireframes, and high-conversion digital experiences." />
        <meta name="keywords" content="UI UX design Pakistan, user interface design, user experience design, wireframes, modern layouts, digital design, Exytex" />
        <meta property="og:title" content="UI UX Design Company in Pakistan | Exytex" />
        <meta property="og:description" content="Professional UI/UX design services focused on user-friendly interfaces, modern layouts, wireframes, and high-conversion digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/ui-ux-design/" />
        <link rel="canonical" href="https://www.exytex.com/ui-ux-design/" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 min-h-screen">
        <CursorFollower />
        <SleekHeader />

      <section id="uiux-hero"><UIUXHeroSection /></section>
      <section id="uiux-services"><UIUXServicesSection /></section>
      <section id="uiux-process"><UIUXProcessSection /></section>
      <section id="uiux-portfolio"><UIUXPortfolioSection /></section>
      <section id="uiux-testimonials"><ClientsSliderSection /></section>
      <section id="uiux-contact"><ContactSection /></section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default UIUXDesignPage;