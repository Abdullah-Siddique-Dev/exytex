import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { SEOHeroSection } from '../components/sections/SEOHeroSection';
import { SEOServicesSection } from '../components/sections/SEOServicesSection';
import { SEOMethodologySection } from '../components/sections/SEOMethodologySection';
import { SEOSolutionsSection } from '../components/sections/SEOSolutionsSection';
import { SEOFAQSection } from '../components/sections/SEOFAQSection';
import { SEOContactSection } from '../components/sections/SEOContactSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const SEOPage: React.FC = () => {
  useSmoothScroll();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do you charge for SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of services depends on the complexity of your market. As a rule, our prices start at 250$ per month. Contact our SEO team to find out how much you will need to spend."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to achieve results with SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on how competitive the market is, clients who work with us see results within 3-12 months. There is no shortcut to SEO. There is no magic wand that will spread the dust of SEO all over your site and allow your site to be at the top of many search queries the next day. Simply put, SEO is a long-term marketing strategy. If done right, you should be able to see measurable SEO results in as little as 3-12 months."
        }
      },
      {
        "@type": "Question",
        "name": "What do you need from me to get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We need as much information about your business and website as possible. We will also need access to Google Analytics, Google Tag Manager, Google Search Console, access to the site administration panel, and FTP."
        }
      },
      {
        "@type": "Question",
        "name": "How to control the execution of work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To control the status of the project and the execution of work on schedule, you can contact your personal manager or view all information on the implementation in your personal account: positions, traffic, current tasks, completed tasks, and much more. As a standard, we send reports at the beginning of the month following the reporting month, as well as upon request."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive a performance report?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we carry out a personalized, complete, and understandable monthly report, in which not only the main metrics are analyzed, but also advanced metrics with the evolution of the account."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Exytex | Top Software House in Pakistan | IT Solutions Company</title>
        <meta name="description" content="Exytex technologies is an IT Software Company in Pakistan providing professional web development, graphic designing, digital marketing, and mobile application services." />
        <meta name="keywords" content="SEO services Dubai, SEO company Dubai, SEO experts Dubai, best SEO Dubai, top SEO company, web positioning, search engine optimization, organic positioning, local SEO Dubai, Exytex" />
        <meta property="og:title" content="Exytex | Top Software House in Pakistan | IT Solutions Company" />
        <meta property="og:description" content="Exytex technologies is an IT Software Company in Pakistan providing professional web development, graphic designing, digital marketing, and mobile application services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/seo-services/" />
        <link rel="canonical" href="https://www.exytex.com/seo-services/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

      <section id="seo-hero"><SEOHeroSection /></section>
      <section id="seo-services"><SEOServicesSection /></section>
      <section id="seo-methodology"><SEOMethodologySection /></section>
      <section id="seo-solutions"><SEOSolutionsSection /></section>
      <section id="seo-faq"><SEOFAQSection /></section>
      <section id="seo-contact"><SEOContactSection /></section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default SEOPage;
