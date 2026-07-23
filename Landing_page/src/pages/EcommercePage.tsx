import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { EcommerceHeroSection } from '../components/sections/EcommerceHeroSection';
import { EcommerceServicesSection } from '../components/sections/EcommerceServicesSection';
import { EcommerceFeaturesSection } from '../components/sections/EcommerceFeaturesSection';
import { EcommercePortfolioSection } from '../components/sections/EcommercePortfolioSection';
import { ClientsSliderSection } from '../components/sections/ClientsSliderSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const EcommercePage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>E-Commerce Website Development Company | Exytex</title>
        <meta name="description" content="Custom e-commerce website development services including online stores, payment gateway integration, product management, and secure checkout systems." />
        <meta name="keywords" content="e-commerce development, online store development, payment gateway integration, product management, secure checkout, ecommerce website, Exytex" />
        <meta property="og:title" content="E-Commerce Website Development Company | Exytex" />
        <meta property="og:description" content="Custom e-commerce website development services including online stores, payment gateway integration, product management, and secure checkout systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/ecommerce-development/" />
        <link rel="canonical" href="https://www.exytex.com/ecommerce-development/" />
      </Helmet>
      
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

        <section id="ecommerce-hero"><EcommerceHeroSection /></section>
        <section id="ecommerce-services"><EcommerceServicesSection /></section>
        <section id="ecommerce-features"><EcommerceFeaturesSection /></section>
        <section id="ecommerce-portfolio"><EcommercePortfolioSection /></section>
        <section id="ecommerce-testimonials"><ClientsSliderSection /></section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default EcommercePage;
