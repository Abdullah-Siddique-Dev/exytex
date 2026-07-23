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
import { Car, Zap, Shield, Cpu, TrendingUp, Clock, Users, Target } from 'lucide-react';
import SEO from '../components/SEO';

const AutomotivePage: React.FC = () => {
  useSmoothScroll();

  const heroData = {
    badge: 'Automotive Technology',
    title: 'Automotive Industry Solutions',
    subtitle: 'Improve Automotive Businesses with Tech Solutions',
    description: 'We deliver business and technology solutions for automotive leaders with focus on key issues across the automotive value chain.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&auto=format&q=80',
    ],
    benefits: [
      { icon: Zap, text: 'Accelerate Time to Market' },
      { icon: Shield, text: 'Business Efficiency' },
      { icon: Cpu, text: 'Streamline Supply Chain' },
      { icon: Car, text: 'Customer Loyalty' }
    ]
  };

  const services = [
    {
      icon: TrendingUp,
      title: 'Improve Business Efficiency',
      description: 'Streamline operations and boost profitability with advanced automotive solutions.'
    },
    {
      icon: Clock,
      title: 'Accelerate Time to Market',
      description: 'Faster product development and launch cycles with agile methodologies.'
    },
    {
      icon: Users,
      title: 'Innovate & Collaborate',
      description: 'Enhanced partnerships with suppliers and dealers through digital platforms.'
    },
    {
      icon: Target,
      title: 'New Market Penetration',
      description: 'Expand reach and capture new opportunities with data-driven insights.'
    },
    {
      icon: Shield,
      title: 'Cost Effective Products',
      description: 'Build quality solutions within budget using modern technologies.'
    },
    {
      icon: Cpu,
      title: 'Optimize Supply Chain',
      description: 'Streamline logistics and inventory management with IoT and AI.'
    },
    {
      icon: TrendingUp,
      title: 'Improve Brand Image',
      description: 'Enhanced customer experience and satisfaction through digital transformation.'
    },
    {
      icon: Car,
      title: 'Build Customer Loyalty',
      description: 'Strengthen relationships and retention with personalized experiences.'
    }
  ];

  return (
    <>
      <SEO
        title="Automotive Industry Solutions | Technology for Automotive Business"
        description="Transform your automotive business with our innovative technology solutions. IoT, connected vehicles, smart manufacturing, and digital transformation services."
        keywords="automotive technology, connected vehicles, IoT automotive, smart manufacturing, automotive software, digital transformation automotive"
        canonicalUrl="/industries/automotive"
      />

      <div className="bg-white min-h-screen">
        <ScrollProgress />
        <SleekHeader />

        <IndustryDetailHero {...heroData} />
        
        <IndustryServicesSection
          title="Transforming Automotive Businesses"
          description="Our services help you improve business efficiency and profitability, accelerate time to market, and build customer loyalty through innovative technology solutions."
          services={services}
        />

        <IndustryCTASection
          title="Ready to Transform Your Automotive Business?"
          description="Let's discuss how our technology solutions can drive your success"
        />

        <ContactFormSection
          title="Start Your Automotive Transformation"
          description="Ready to revolutionize your automotive business with cutting-edge technology? Let's discuss your specific needs and create a solution that drives results."
        />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default AutomotivePage;
