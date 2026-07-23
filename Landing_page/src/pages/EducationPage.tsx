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
import { GraduationCap, BookOpen, Users, Video, FileText, Award, Globe, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';

const EducationPage: React.FC = () => {
  useSmoothScroll();

  const heroData = {
    badge: 'Education Technology',
    title: 'Education & eLearning Solutions',
    subtitle: 'Transform Learning with Digital Innovation',
    description: 'We deliver comprehensive eLearning platforms, learning management systems, and educational technology solutions that enhance student engagement and improve learning outcomes.',
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop&auto=format&q=80',
    ],
    benefits: [
      { icon: GraduationCap, text: 'Enhanced Learning' },
      { icon: Video, text: 'Virtual Classrooms' },
      { icon: Users, text: 'Student Engagement' },
      { icon: Award, text: 'Better Outcomes' }
    ]
  };

  const services = [
    {
      icon: BookOpen,
      title: 'Learning Management Systems',
      description: 'Comprehensive LMS platforms for course management and student tracking.'
    },
    {
      icon: Video,
      title: 'Virtual Classrooms',
      description: 'Interactive online learning environments with live video capabilities.'
    },
    {
      icon: Users,
      title: 'Student Portals',
      description: 'Centralized platforms for students to access courses and resources.'
    },
    {
      icon: FileText,
      title: 'Content Management',
      description: 'Easy-to-use systems for creating and managing educational content.'
    },
    {
      icon: Award,
      title: 'Assessment Tools',
      description: 'Automated testing and grading systems with detailed analytics.'
    },
    {
      icon: Globe,
      title: 'Online Course Platforms',
      description: 'Scalable platforms for delivering courses to global audiences.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning Apps',
      description: 'Native mobile applications for learning on-the-go.'
    },
    {
      icon: GraduationCap,
      title: 'Student Analytics',
      description: 'Data-driven insights to improve student performance and retention.'
    }
  ];

  return (
    <>
      <SEO
        title="Education Technology Solutions | eLearning Platform Development"
        description="Transform education with our LMS, virtual classroom, and eLearning solutions. Enhance student engagement and improve learning outcomes."
        keywords="education technology, eLearning, LMS, learning management system, virtual classroom, online education, EdTech"
        canonicalUrl="/industries/education"
      />

      <div className="bg-white min-h-screen">
        <ScrollProgress />
        <SleekHeader />

        <IndustryDetailHero {...heroData} />
        
        <IndustryServicesSection
          title="Comprehensive Education Solutions"
          description="Building innovative educational technology solutions that make learning accessible, engaging, and effective for students worldwide."
          services={services}
        />

        <IndustryCTASection
          title="Ready to Transform Education?"
          description="Let's create innovative learning solutions that inspire and educate"
        />

        <ContactFormSection
          title="Revolutionize Learning Together"
          description="Ready to transform education with innovative technology solutions? Let's discuss how we can help you create engaging learning experiences that inspire students and educators."
        />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default EducationPage;
