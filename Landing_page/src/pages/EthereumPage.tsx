import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { EthereumHero } from '../components/ethereum/EthereumHero';
import { ServiceHighlights } from '../components/ethereum/ServiceHighlights';
import { EthereumFeatures } from '../components/ethereum/EthereumFeatures';
import { EthereumServices } from '../components/ethereum/EthereumServices';
import { EthereumShowcase } from '../components/ethereum/EthereumShowcase';
import { EthereumPortfolio } from '../components/ethereum/EthereumPortfolio';
import { ToolsTechnologies } from '../components/ethereum/ToolsTechnologies';
import { EthereumProcess } from '../components/ethereum/EthereumProcess';
import { WhyChooseUs } from '../components/ethereum/WhyChooseUs';
import { DevelopmentRoadmap } from '../components/ethereum/DevelopmentRoadmap';
import { EthereumFAQ } from '../components/ethereum/EthereumFAQ';

const EthereumPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Ethereum Development Services - Smart Contracts, DApps & Web3 Solutions | Exytex Technologies</title>
        <meta name="description" content="Professional Ethereum development services including smart contracts, DApps, Web3 integration, and blockchain solutions. Expert Ethereum developers delivering secure, scalable, and innovative blockchain applications." />
        <meta name="keywords" content="Ethereum development, smart contracts development, Ethereum DApps, Web3 development, blockchain development, Solidity programming, Ethereum blockchain, decentralized applications, smart contract audit, Ethereum consulting, Web3 integration, blockchain solutions" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/services/ethereum" />
        <meta property="og:title" content="Ethereum Development Services - Smart Contracts, DApps & Web3 Solutions | Exytex Technologies" />
        <meta property="og:description" content="Professional Ethereum development services including smart contracts, DApps, Web3 integration, and blockchain solutions." />
        <meta property="og:image" content="https://exytex.com/images/ethereum-development-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/services/ethereum" />
        <meta property="twitter:title" content="Ethereum Development Services - Smart Contracts, DApps & Web3 Solutions" />
        <meta property="twitter:description" content="Professional Ethereum development services including smart contracts, DApps, Web3 integration, and blockchain solutions." />
        <meta property="twitter:image" content="https://exytex.com/images/ethereum-development-twitter.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://exytex.com/services/ethereum" />
      </Helmet>
      
      <div className="bg-black min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

      <EthereumHero />
      <ServiceHighlights />
      <EthereumFeatures />
      <EthereumServices />
      <EthereumShowcase />
      <EthereumPortfolio />
      <ToolsTechnologies />
      <EthereumProcess />
      <WhyChooseUs />
      <DevelopmentRoadmap />
      <EthereumFAQ />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default EthereumPage;
