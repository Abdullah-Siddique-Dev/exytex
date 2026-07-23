import React, { useState } from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { IndustriesHeroSection } from '../components/sections/IndustriesHeroSection';
import { IndustryStatsSection } from '../components/sections/IndustryStatsSection';
import { IndustryProcessSection } from '../components/sections/IndustryProcessSection';
import { IndustryTestimonialsSection } from '../components/sections/IndustryTestimonialsSection';
import { IndustryCard } from '../components/ui/IndustryCard';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Car, Cpu, Users, Shield, GraduationCap, Factory, Zap, Heart,
  DollarSign, FileText, ShoppingCart, ArrowRight, Award, Globe, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustriesPage: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const industries = [
    {
      icon: Car,
      name: 'Automotive',
      description: 'Advanced automotive solutions including connected vehicle platforms, IoT integration, smart manufacturing systems, and digital transformation services for modern automotive enterprises.',
      color: 'from-blue-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&auto=format&q=80', // Car manufacturing
      link: '/industries/automotive',
      stats: '50+ Projects',
      features: ['Connected Vehicles', 'IoT Integration', 'Smart Manufacturing', 'Digital Platforms']
    },
    {
      icon: Cpu,
      name: 'Hi-Tech',
      description: 'Comprehensive technology solutions for software companies, tech startups, and enterprise organizations seeking digital innovation and scalable technology infrastructure.',
      color: 'from-purple-600 to-blue-600',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format&q=80', // Circuit board technology
      link: '/industries/hi-tech',
      stats: '100+ Clients',
      features: ['Software Development', 'Cloud Solutions', 'AI/ML Integration', 'Scalable Architecture']
    },
    {
      icon: Users,
      name: 'Digital Agencies',
      description: 'Strategic technology partnerships providing on-demand development resources, white-label solutions, and comprehensive digital services for marketing and creative agencies.',
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80', // Digital workspace
      link: '/industries/digital-agencies',
      stats: '75+ Partners',
      features: ['White-label Solutions', 'Resource Augmentation', 'Digital Marketing Tech', 'Client Portals']
    },
    {
      icon: Shield,
      name: 'Insurance',
      description: 'Modern insurance technology solutions including policy management systems, claims processing automation, customer portals, and regulatory compliance platforms.',
      color: 'from-purple-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80', // Data analytics
      link: '/industries/insurance',
      stats: '30+ Insurers',
      features: ['Policy Management', 'Claims Processing', 'Customer Portals', 'Compliance Systems']
    },
    {
      icon: GraduationCap,
      name: 'Education & eLearning',
      description: 'Innovative educational technology solutions including learning management systems, virtual classrooms, student information systems, and interactive learning platforms.',
      color: 'from-blue-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format&q=80', // Technology network
      link: '/industries/education',
      stats: '60+ Institutions',
      features: ['Learning Management', 'Virtual Classrooms', 'Student Portals', 'Assessment Tools']
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Industry 4.0 solutions featuring smart manufacturing systems, IoT-enabled production monitoring, supply chain optimization, and predictive maintenance platforms.',
      color: 'from-purple-600 to-blue-600',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&auto=format&q=80', // Industrial machinery
      link: '/industries/manufacturing',
      stats: '40+ Factories',
      features: ['Smart Manufacturing', 'IoT Monitoring', 'Supply Chain', 'Predictive Maintenance']
    },
    {
      icon: Zap,
      name: 'Energy & Utilities',
      description: 'Smart energy solutions including grid management systems, renewable energy platforms, utility customer management, and energy efficiency optimization tools.',
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format&q=80', // Solar panels
      link: '/industries/energy-utilities',
      stats: '25+ Utilities',
      features: ['Smart Grid', 'Renewable Energy', 'Customer Management', 'Energy Analytics']
    },
    {
      icon: Heart,
      name: 'Non-profits',
      description: 'Technology solutions for social impact including donor management systems, fundraising platforms, volunteer coordination tools, and community engagement applications.',
      color: 'from-purple-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop&auto=format&q=80', // Technology for good
      link: '/industries/non-profits',
      stats: '35+ Organizations',
      features: ['Donor Management', 'Fundraising Platforms', 'Volunteer Systems', 'Community Portals']
    },
    {
      icon: DollarSign,
      name: 'Financial Services',
      description: 'Secure financial technology solutions including digital banking platforms, payment processing systems, investment management tools, and regulatory compliance software.',
      color: 'from-blue-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80', // Financial technology
      link: '/industries/financial-services',
      stats: '45+ Banks',
      features: ['Digital Banking', 'Payment Processing', 'Investment Tools', 'Compliance Systems']
    },
    {
      icon: FileText,
      name: 'Publishing & Media',
      description: 'Digital media solutions including content management systems, streaming platforms, digital publishing tools, and audience engagement applications for modern media companies.',
      color: 'from-purple-600 to-blue-600',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format&q=80', // Digital media technology
      link: '/industries/publishing-media',
      stats: '20+ Publishers',
      features: ['Content Management', 'Streaming Platforms', 'Digital Publishing', 'Audience Analytics']
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Healthcare technology solutions including electronic health records, telemedicine platforms, patient management systems, and medical device integration applications.',
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80', // Medical technology
      link: '/industries/healthcare',
      stats: '55+ Providers',
      features: ['Electronic Health Records', 'Telemedicine', 'Patient Management', 'Medical Integration']
    },
    {
      icon: ShoppingCart,
      name: 'Retail & Ecommerce',
      description: 'Modern retail solutions including omnichannel ecommerce platforms, inventory management systems, customer experience tools, and digital payment integration.',
      color: 'from-purple-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=80', // E-commerce technology
      link: '/industries/retail-ecommerce',
      stats: '80+ Stores',
      features: ['Ecommerce Platforms', 'Inventory Management', 'Customer Experience', 'Payment Integration']
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: '240+', label: 'Projects Delivered' },
    { icon: <Users className="w-6 h-6" />, value: '150+', label: 'Happy Clients' },
    { icon: <Globe className="w-6 h-6" />, value: '12+', label: 'Industries Served' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <SEO
        title="Industries We Serve | Technology Solutions Across Sectors"
        description="Transform your business with industry-specific technology solutions. We serve automotive, healthcare, finance, education, manufacturing, and more with innovative digital solutions."
        keywords="industry solutions, technology services, digital transformation, automotive tech, healthcare IT, fintech, education technology, manufacturing solutions"
        canonicalUrl="/industries"
      />
      
      <SleekHeader />

      <div className="relative bg-white overflow-x-hidden font-['Poppins',_'Inter',_sans-serif]">
        {/* Hero Section */}
        <IndustriesHeroSection />

        {/* Stats Section */}
        <IndustryStatsSection />

        {/* Industries Grid */}
        <section id="industries-grid" className="py-12 bg-gradient-to-b from-white to-gray-50/30 relative overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 mb-4 cursor-default">
                Explore Our Industry Expertise
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Discover how we help businesses achieve digital transformation
              </p>
            </motion.div>

            {/* Technology Category */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pl-2">
                Technology
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {industries.filter(ind => ['Hi-Tech', 'Automotive', 'Manufacturing', 'Healthcare'].includes(ind.name)).map((industry, index) => (
                  <IndustryCard
                    key={industry.name}
                    industry={industry}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  />
                ))}
              </div>
            </div>

            {/* Finance & Business Category */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pl-2">
                Finance & Business
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {industries.filter(ind => ['Financial Services', 'Insurance', 'Retail & Ecommerce', 'Digital Agencies'].includes(ind.name)).map((industry, index) => (
                  <IndustryCard
                    key={industry.name}
                    industry={industry}
                    index={index + 100}
                    hoveredIndex={hoveredIndex}
                    onHoverStart={() => setHoveredIndex(index + 100)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  />
                ))}
              </div>
            </div>

            {/* Others Category */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pl-2">
                Others
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {industries.filter(ind => ['Education & eLearning', 'Energy & Utilities', 'Non-profits', 'Publishing & Media'].includes(ind.name)).map((industry, index) => (
                  <IndustryCard
                    key={industry.name}
                    industry={industry}
                    index={index + 200}
                    hoveredIndex={hoveredIndex}
                    onHoverStart={() => setHoveredIndex(index + 200)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <IndustryProcessSection />

        {/* Testimonials Section */}
        <IndustryTestimonialsSection />

        {/* CTA Section */}
        <section className="py-12 bg-white overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Don't See Your <span className="text-blue-600">Industry?</span>
                </h2>
                <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
                  We work with businesses across all sectors. Contact us to discuss your needs.
                </p>
                <Link to="/contact">
                  <motion.button
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <ElegantFooter />
    </>
  );
};

export default IndustriesPage;
