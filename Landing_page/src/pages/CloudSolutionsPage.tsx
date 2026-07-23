import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { CloudHeroSection } from '../components/sections/CloudHeroSection';
import { CloudServicesSection } from '../components/sections/CloudServicesSection';
import { CloudOfferingsSection } from '../components/sections/CloudOfferingsSection';
import { CloudBenefitsSection } from '../components/sections/CloudBenefitsSection';
import { CloudUseCasesSection } from '../components/sections/CloudUseCasesSection';
import { CloudTechStackSection } from '../components/sections/CloudTechStackSection';
import { CloudContactSection } from '../components/sections/CloudContactSection';
import { CloudFAQSection } from '../components/sections/CloudFAQSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const CloudSolutionsPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Cloud Solutions & Services - AWS, Azure, Google Cloud Migration & DevOps | Exytex Technologies</title>
        <meta name="description" content="Professional cloud solutions and migration services for AWS, Azure, and Google Cloud Platform. Expert cloud consulting, infrastructure setup, DevOps automation, cloud security, and scalable cloud architecture for businesses worldwide." />
        <meta name="keywords" content="cloud solutions, cloud services, cloud migration, AWS services, Azure cloud, Google Cloud Platform, cloud consulting, cloud infrastructure, DevOps automation, cloud security, cloud computing, cloud architecture, serverless computing, containerization, Kubernetes, Docker, cloud deployment" />
        <meta property="og:title" content="Cloud Solutions & Services | AWS, Azure, Google Cloud | Exytex" />
        <meta property="og:description" content="Professional cloud solutions and migration services for AWS, Azure, and Google Cloud Platform." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://exytex.com/services/cloud-solutions" />
      </Helmet>
      
      <div className="bg-white min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

        <section id="cloud-hero"><CloudHeroSection /></section>
        <section id="cloud-services"><CloudServicesSection /></section>
        <section id="cloud-offerings"><CloudOfferingsSection /></section>
        <section id="cloud-benefits"><CloudBenefitsSection /></section>
        <section id="cloud-use-cases"><CloudUseCasesSection /></section>
        <section id="cloud-tech-stack"><CloudTechStackSection /></section>
        <section id="cloud-faq"><CloudFAQSection /></section>
        <section id="cloud-contact"><CloudContactSection /></section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default CloudSolutionsPage;