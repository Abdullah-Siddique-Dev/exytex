import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { ScrollProgress } from '../../components/ui/ScrollProgress';
import { ContactFormModal } from '../../components/ui/ContactFormModal';
import { DeveloperSkills } from '../../components/sections/DeveloperSkills';
import { HireDeveloperProcess } from '../../components/sections/HireDeveloperProcess';
import { HireDeveloperTestimonials } from '../../components/sections/HireDeveloperTestimonials';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Code } from 'lucide-react';

const developerData: Record<string, any> = {
  web: {
    title: 'Web Developer',
    description: 'Expert web developers for modern responsive websites and web applications',
    skills: ['React', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$25-50',
    experience: '3-8 years',
    available: 52
  },
  mobile: {
    title: 'Mobile App Developer',
    description: 'Skilled mobile developers for iOS and Android applications',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift', 'Kotlin'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$30-55',
    experience: '3-8 years',
    available: 45
  },
  frontend: {
    title: 'Frontend Developer',
    description: 'Professional frontend developers for interactive user interfaces',
    skills: ['JavaScript', 'TypeScript', 'CSS3', 'HTML5', 'React', 'Vue.js'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$25-50',
    experience: '2-7 years',
    available: 48
  },
  backend: {
    title: 'Backend Developer',
    description: 'Experienced backend developers for scalable server-side solutions',
    skills: ['Node.js', 'Python', 'PHP', 'Java', 'Database', 'API Development'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$30-55',
    experience: '3-8 years',
    available: 41
  },
  fullstack: {
    title: 'Full Stack Developer',
    description: 'Versatile full stack developers for end-to-end web solutions',
    skills: ['MEAN', 'MERN', 'Laravel', 'Django', 'Full Stack', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$35-60',
    experience: '4-10 years',
    available: 38
  },
  seo: {
    title: 'SEO Specialist',
    description: 'SEO experts to improve your website ranking and organic traffic',
    skills: ['On-page SEO', 'Technical SEO', 'Analytics', 'Keywords', 'Link Building', 'Content Strategy'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$25-45',
    experience: '2-6 years',
    available: 32
  },
  'digital-marketing': {
    title: 'Digital Marketer',
    description: 'Digital marketing specialists for comprehensive online growth',
    skills: ['Social Media', 'PPC', 'Content Marketing', 'Email Marketing', 'Analytics', 'SEO'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$25-50',
    experience: '2-7 years',
    available: 35
  },
  blockchain: {
    title: 'Blockchain Developer',
    description: 'Blockchain developers for cryptocurrency and DeFi solutions',
    skills: ['Solidity', 'Smart Contracts', 'Web3', 'DApps', 'Ethereum', 'Cryptocurrency'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$40-70',
    experience: '3-8 years',
    available: 28
  },
  uiux: {
    title: 'UI/UX Designer',
    description: 'Creative UI/UX designers for exceptional user experiences',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$30-55',
    experience: '2-7 years',
    available: 42
  },
  devops: {
    title: 'DevOps Engineer',
    description: 'DevOps engineers for CI/CD, cloud infrastructure and automation',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$35-65',
    experience: '3-9 years',
    available: 25
  },
  cloud: {
    title: 'Cloud Developer',
    description: 'Cloud specialists for AWS, Azure and Google Cloud solutions',
    skills: ['AWS', 'Azure', 'GCP', 'Serverless', 'Cloud Architecture', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$35-65',
    experience: '3-9 years',
    available: 30
  },
  'graphic-design': {
    title: 'Graphic Designer',
    description: 'Creative graphic designers for branding and visual content',
    skills: ['Photoshop', 'Illustrator', 'Branding', 'Print Design', 'Logo Design', 'Typography'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&auto=format&q=80',
    hourlyRate: '$25-45',
    experience: '2-6 years',
    available: 38
  }
};

const GenericDeveloperPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const data = type ? developerData[type] : null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) {
    return <Navigate to="/hire-developer" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Hire {data.title} | Exytex</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <ScrollProgress />
      <SleekHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-slate-900 overflow-hidden pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span>Pre-vetted Talent</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Hire {data.title}
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {data.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <div className="text-2xl font-bold text-blue-400">{data.hourlyRate}</div>
                  <div className="text-sm text-gray-400">Hourly Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{data.experience}</div>
                  <div className="text-sm text-gray-400">Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{data.available}+</div>
                  <div className="text-sm text-gray-400">Available</div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base shadow-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Start Hiring
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={data.image}
                alt={data.title}
                className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.skills.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <DeveloperSkills tech={data.title} skills={data.skills} />

      {/* How It Works Section */}
      <HireDeveloperProcess />

      {/* Testimonials Section */}
      <HireDeveloperTestimonials />

      <ElegantFooter />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Hire ${data.title}`}
      />
    </>
  );
};

export default GenericDeveloperPage;
