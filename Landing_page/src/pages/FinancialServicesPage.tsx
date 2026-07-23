import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { IndustryDetailHero } from '../components/sections/IndustryDetailHero';
import { IndustryServicesSection } from '../components/sections/IndustryServicesSection';
import { IndustryCTASection } from '../components/sections/IndustryCTASection';
import { ContactFormSection } from '../components/sections/ContactFormSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { DollarSign, Shield, Smartphone, TrendingUp, Lock, CreditCard, BarChart3, Users } from 'lucide-react';
import SEO from '../components/SEO';

const FinancialServicesPage: React.FC = () => {
  useSmoothScroll();

  const heroData = {
    badge: 'Financial Technology',
    title: 'Financial Services Solutions',
    subtitle: 'Secure FinTech Solutions for Modern Banking',
    description: 'We deliver secure and innovative financial technology solutions including digital banking, payment processing, wealth management platforms, and regulatory compliance systems.',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80',
    ],
    benefits: [
      { icon: Shield, text: 'Bank-Grade Security' },
      { icon: Lock, text: 'Regulatory Compliance' },
      { icon: Smartphone, text: 'Digital Banking' },
      { icon: TrendingUp, text: 'Real-Time Analytics' }
    ]
  };

  const services = [
    {
      icon: Smartphone,
      title: 'Digital Banking',
      description: 'Modern mobile and web banking platforms with seamless user experiences.'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment gateways and transaction processing systems.'
    },
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Investment platforms and portfolio management solutions.'
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Advanced analytics for risk assessment and fraud detection.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Multi-layered security to protect sensitive financial data.'
    },
    {
      icon: Lock,
      title: 'Compliance Solutions',
      description: 'Automated compliance monitoring and reporting systems.'
    },
    {
      icon: Users,
      title: 'Customer Onboarding',
      description: 'Digital KYC and streamlined customer onboarding processes.'
    },
    {
      icon: DollarSign,
      title: 'Lending Platforms',
      description: 'Automated loan origination and management systems.'
    }
  ];

  return (
    <>
      <SEO
        title="Financial Services Technology Solutions | FinTech Development"
        description="Transform financial services with our secure digital banking, payment processing, and wealth management solutions. Bank-grade security and compliance."
        keywords="fintech, digital banking, payment processing, wealth management, financial technology, banking software, compliance solutions"
        canonicalUrl="/industries/financial-services"
      />

      <div className="bg-white min-h-screen">
        <ScrollProgress />
        <SleekHeader />

        <IndustryDetailHero {...heroData} />
        
        <IndustryServicesSection
          title="Innovative Financial Technology Solutions"
          description="Building secure, scalable, and compliant financial technology solutions that drive digital transformation in banking and financial services."
          services={services}
        />

        <IndustryCTASection
          title="Ready to Transform Financial Services?"
          description="Let's build secure and innovative FinTech solutions together"
        />

        <ContactFormSection
          title="Start Your FinTech Transformation"
          description="Ready to revolutionize your financial services with secure, innovative technology? Let's discuss your specific requirements and build solutions that drive growth."
        />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default FinancialServicesPage;
