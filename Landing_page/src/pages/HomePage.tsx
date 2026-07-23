import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { PremiumHeroSection } from '../components/sections/PremiumHeroSection';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

// Lazy load below-the-fold sections
const AboutExytexSection = lazy(() => import('../components/sections/AboutExytexSection').then(m => ({ default: m.AboutExytexSection })));
const TopSoftwareDevelopmentSection = lazy(() => import('../components/sections/TopSoftwareDevelopmentSection').then(m => ({ default: m.TopSoftwareDevelopmentSection })));
const HomeServicesSection = lazy(() => import('../components/sections/HomeServicesSection').then(m => ({ default: m.HomeServicesSection })));
const SoftwareWorldwideSection = lazy(() => import('../components/sections/SoftwareWorldwideSection').then(m => ({ default: m.SoftwareWorldwideSection })));
const SoftwareForBusinessSection = lazy(() => import('../components/sections/SoftwareForBusinessSection').then(m => ({ default: m.SoftwareForBusinessSection })));
const IndustriesSection = lazy(() => import('../components/sections/IndustriesSection').then(m => ({ default: m.IndustriesSection })));
const BlogSection = lazy(() => import('../components/sections/BlogSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection').then(m => ({ default: m.ContactSection })));

const SectionFallback = () => <div className="h-32" />;

const HomePage: React.FC = () => {
  useSmoothScroll();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
    if (location.hash) {
      setTimeout(() => {
        document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Exytex | Top Software House in Pakistan | IT Solutions Company</title>
        <meta name="description" content="Professional IT software company in Pakistan offering web development, mobile apps, digital marketing, SEO, and graphic design services with global reach." />
        <meta name="keywords" content="software house Pakistan, IT solutions company, web development Pakistan, mobile app development, digital marketing services, SEO services, graphic design, Exytex Technologies" />
        <meta property="og:title" content="Exytex | Top Software House in Pakistan | IT Solutions Company" />
        <meta property="og:description" content="Professional IT software company in Pakistan offering web development, mobile apps, digital marketing, SEO, and graphic design services with global reach." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/" />
        <link rel="canonical" href="https://www.exytex.com/" />
      </Helmet>
      
      <div className="bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 w-full overflow-x-hidden">
        <SleekHeader />
        {/* Hero loads immediately — above the fold */}
        <section id="home" className="scroll-mt-24"><PremiumHeroSection /></section>

        {/* Everything below lazy loads */}
        <Suspense fallback={<SectionFallback />}>
          <section id="exytex-intro" className="scroll-mt-24"><AboutExytexSection /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="top-development" className="scroll-mt-24"><TopSoftwareDevelopmentSection /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="services" className="scroll-mt-24"><HomeServicesSection /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="worldwide" className="scroll-mt-24"><SoftwareWorldwideSection /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="business" className="scroll-mt-24"><SoftwareForBusinessSection /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="industries" className="scroll-mt-24"><IndustriesSection /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="blog" className="scroll-mt-24"><BlogSection /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="contact" className="scroll-mt-24"><ContactSection /></section>
        </Suspense>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default HomePage;
