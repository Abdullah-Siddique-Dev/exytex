import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { SmartContractHero } from '../components/smartcontract/SmartContractHero';
import { SmartContractIntro } from '../components/smartcontract/SmartContractIntro';
import { SmartContractServices } from '../components/smartcontract/SmartContractServices';
import { SmartContractShowcase } from '../components/smartcontract/SmartContractShowcase';
import { SmartContractPortfolio } from '../components/smartcontract/SmartContractPortfolio';
import { SmartContractWhyChoose } from '../components/smartcontract/SmartContractWhyChoose';
import { SmartContractRoadmap } from '../components/smartcontract/SmartContractRoadmap';
import { BlockchainPlatforms } from '../components/smartcontract/BlockchainPlatforms';
import { IndustryUseCases } from '../components/smartcontract/IndustryUseCases';
import { SmartContractFAQ } from '../components/smartcontract/SmartContractFAQ';

const SmartContractPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Smart Contract Development Services - Ethereum, Solidity & Blockchain Solutions | Exytex Technologies</title>
        <meta name="description" content="Professional smart contract development services for Ethereum, Binance Smart Chain, and other blockchain platforms. Expert Solidity developers creating secure, audited, and gas-optimized smart contracts for DeFi, NFTs, and enterprise blockchain solutions." />
        <meta name="keywords" content="smart contract development, Solidity development, Ethereum smart contracts, blockchain development, smart contract audit, DeFi development, NFT smart contracts, Web3 development, blockchain consulting, smart contract security, gas optimization, contract deployment" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/services/smart-contracts" />
        <meta property="og:title" content="Smart Contract Development Services - Ethereum, Solidity & Blockchain Solutions | Exytex Technologies" />
        <meta property="og:description" content="Professional smart contract development services for Ethereum, Binance Smart Chain, and other blockchain platforms." />
        <meta property="og:image" content="https://exytex.com/images/smart-contract-development-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/services/smart-contracts" />
        <meta property="twitter:title" content="Smart Contract Development Services - Ethereum, Solidity & Blockchain Solutions" />
        <meta property="twitter:description" content="Professional smart contract development services for Ethereum, Binance Smart Chain, and other blockchain platforms." />
        <meta property="twitter:image" content="https://exytex.com/images/smart-contract-development-twitter.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://exytex.com/services/smart-contracts" />
      </Helmet>
      
      <div className="bg-slate-950 min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

      <SmartContractHero />
      <SmartContractIntro />
      <SmartContractServices />
      <SmartContractShowcase />
      <SmartContractPortfolio />
      <SmartContractWhyChoose />
      <SmartContractRoadmap />
      <BlockchainPlatforms />
      <IndustryUseCases />
      <SmartContractFAQ />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default SmartContractPage;
