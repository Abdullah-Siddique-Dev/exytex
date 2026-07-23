import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';

const caseStudiesData: Record<string, {
  industry: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  results: string[];
  challenge: string;
  solution: string;
  outcome: string;
  stats: { label: string; value: string; icon: any }[];
}> = {
  'hi-tech': {
    industry: 'Hi-Tech',
    title: 'Technology Solutions',
    description: 'Supporting mobile application projects with our comprehensive resources, mobile center of excellence, time-tested frameworks, and proven accelerators.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop&auto=format&q=80',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    results: ['50% faster development', 'Cross-platform compatibility', 'Scalable architecture'],
    challenge: 'A leading technology company needed to accelerate their mobile app development process while maintaining high quality across multiple platforms. They faced challenges with fragmented codebases and inconsistent user experiences.',
    solution: 'We implemented a comprehensive mobile development strategy using React Native and Flutter for cross-platform development, combined with native Swift and Kotlin for platform-specific features. Our mobile center of excellence provided proven frameworks and accelerators that streamlined the development process.',
    outcome: 'The solution resulted in 50% faster development cycles, seamless cross-platform compatibility, and a scalable architecture that supports rapid feature additions. The unified codebase reduced maintenance overhead by 40% while improving code quality.',
    stats: [
      { label: 'Development Speed', value: '50%', icon: TrendingUp },
      { label: 'Code Reusability', value: '85%', icon: Award },
      { label: 'Time to Market', value: '3 months', icon: Clock },
      { label: 'User Satisfaction', value: '4.8/5', icon: Users }
    ]
  },
  'insurance': {
    industry: 'Insurance',
    title: 'Policy Management Platform',
    description: 'Developed a comprehensive mobile and web-based solution for a leading insurance firm to boost profitability by streamlining policy processes across platforms.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format&q=80',
    technologies: ['Native iOS', 'Android', 'Cloud Backend', 'AI/ML'],
    results: ['40% process improvement', 'Enhanced user experience', 'Increased profitability'],
    challenge: 'A major insurance company struggled with outdated policy management systems that resulted in slow processing times, poor customer experience, and operational inefficiencies. Manual processes led to errors and delays in policy issuance.',
    solution: 'We developed a comprehensive mobile and web platform with native iOS and Android apps, integrated with a robust cloud backend. AI/ML algorithms were implemented for automated policy recommendations and risk assessment, streamlining the entire policy lifecycle.',
    outcome: 'The platform achieved 40% improvement in policy processing efficiency, significantly enhanced user experience with intuitive interfaces, and increased overall profitability through automation and reduced operational costs.',
    stats: [
      { label: 'Process Efficiency', value: '40%', icon: TrendingUp },
      { label: 'Customer Satisfaction', value: '92%', icon: Users },
      { label: 'Processing Time', value: '-60%', icon: Clock },
      { label: 'ROI', value: '250%', icon: Award }
    ]
  },
  'healthcare': {
    industry: 'Healthcare',
    title: 'Telemedicine Application',
    description: 'Built a comprehensive mobile application for a renowned healthcare chain, enabling patients to book appointments and consult directly with doctors via secure video conferencing.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop&auto=format&q=80',
    technologies: ['WebRTC', 'HIPAA Compliance', 'Real-time Chat', 'Payment Integration'],
    results: ['200% appointment increase', 'Improved patient satisfaction', 'Reduced wait times'],
    challenge: 'A healthcare chain needed to provide remote consultation services while ensuring HIPAA compliance and maintaining the quality of patient care. Traditional in-person visits created accessibility barriers for many patients.',
    solution: 'We built a secure telemedicine platform with WebRTC for high-quality video consultations, real-time chat for instant communication, integrated payment systems, and full HIPAA compliance. The solution included appointment scheduling, electronic prescriptions, and medical record access.',
    outcome: 'The platform saw a 200% increase in appointments, dramatically improved patient satisfaction scores, and reduced average wait times by 70%. Patients gained convenient access to healthcare from anywhere.',
    stats: [
      { label: 'Appointments', value: '+200%', icon: TrendingUp },
      { label: 'Patient Satisfaction', value: '4.9/5', icon: Users },
      { label: 'Wait Time Reduction', value: '70%', icon: Clock },
      { label: 'Consultations/Month', value: '50K+', icon: Award }
    ]
  },
  'ecommerce': {
    industry: 'E-Commerce',
    title: 'Shopping Platform',
    description: 'Developed a feature-rich mobile application and complementary web portal for an e-commerce company to streamline product ordering and enhance customer experience.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&auto=format&q=80',
    technologies: ['Progressive Web App', 'Payment Gateway', 'Inventory Management', 'Analytics'],
    results: ['150% sales increase', 'Better user engagement', 'Streamlined operations'],
    challenge: 'An e-commerce company faced challenges with their outdated platform that resulted in cart abandonment, poor mobile experience, and inefficient inventory management. They needed a modern solution to compete in the digital marketplace.',
    solution: 'We developed a Progressive Web App with seamless payment gateway integration, real-time inventory management, and advanced analytics. The platform featured personalized recommendations, one-click checkout, and push notifications for order updates.',
    outcome: 'The new platform achieved 150% increase in sales, significantly improved user engagement with 40% longer session times, and streamlined operations through automated inventory management and order processing.',
    stats: [
      { label: 'Sales Growth', value: '150%', icon: TrendingUp },
      { label: 'User Engagement', value: '+40%', icon: Users },
      { label: 'Cart Abandonment', value: '-35%', icon: Clock },
      { label: 'Customer Retention', value: '85%', icon: Award }
    ]
  },
  'logistics': {
    industry: 'Logistics',
    title: 'Delivery Tracking System',
    description: 'Created a sophisticated mobile solution for a delivery chain to track shipments throughout transit, featuring precise GPS location tracking and real-time updates.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&auto=format&q=80',
    technologies: ['GPS Tracking', 'Real-time Updates', 'Route Optimization', 'IoT Integration'],
    results: ['30% delivery efficiency', 'Real-time tracking', 'Customer satisfaction'],
    challenge: 'A logistics company struggled with inefficient delivery routes, lack of real-time visibility, and poor customer communication. Manual tracking processes led to delays and customer complaints.',
    solution: 'We created a comprehensive delivery tracking system with GPS tracking, real-time updates, AI-powered route optimization, and IoT integration for vehicle monitoring. The platform included customer notifications, proof of delivery, and analytics dashboard.',
    outcome: 'The system improved delivery efficiency by 30%, provided complete real-time tracking visibility, and significantly enhanced customer satisfaction through proactive communication and accurate ETAs.',
    stats: [
      { label: 'Delivery Efficiency', value: '+30%', icon: TrendingUp },
      { label: 'On-Time Delivery', value: '95%', icon: Clock },
      { label: 'Customer Satisfaction', value: '4.7/5', icon: Users },
      { label: 'Cost Reduction', value: '25%', icon: Award }
    ]
  },
  'ott': {
    industry: 'OTT',
    title: 'Media Streaming Platform',
    description: 'Built an interactive media streaming application for an OTT platform to distribute content across their user base, featuring multiple user accounts and offline download capabilities.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&auto=format&q=80',
    technologies: ['Video Streaming', 'CDN Integration', 'Offline Viewing', 'Multi-device Sync'],
    results: ['500K+ active users', 'High-quality streaming', 'Multi-platform support'],
    challenge: 'An OTT platform needed to deliver high-quality video content to a growing user base while managing bandwidth costs and providing seamless experiences across devices. They also needed offline viewing capabilities for users with limited connectivity.',
    solution: 'We built a scalable streaming platform with CDN integration for optimal content delivery, adaptive bitrate streaming for quality optimization, offline download capabilities, and multi-device synchronization. The platform supported multiple user profiles and personalized recommendations.',
    outcome: 'The platform successfully onboarded 500K+ active users, delivered high-quality streaming with 99.9% uptime, and provided seamless multi-platform support. Offline viewing increased user engagement by 45%.',
    stats: [
      { label: 'Active Users', value: '500K+', icon: Users },
      { label: 'Streaming Quality', value: '4K HDR', icon: Award },
      { label: 'Platform Uptime', value: '99.9%', icon: TrendingUp },
      { label: 'Engagement', value: '+45%', icon: Clock }
    ]
  }
};

const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const caseStudy = slug ? caseStudiesData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} - {caseStudy.industry} Case Study | Exytex</title>
        <meta name="description" content={caseStudy.description} />
      </Helmet>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Mobile Development</span>
            </motion.button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4">
                  {caseStudy.industry}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  {caseStudy.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 rounded-full text-blue-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-700/30"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {caseStudy.solution}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Outcome */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-700/30"
              >
                <h2 className="text-3xl font-bold text-white mb-6">The Outcome</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {caseStudy.outcome}
                </p>
                <div className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-gray-300 text-lg mb-6">
                  Ready to transform your business with a custom mobile solution?
                </p>
                <motion.button
                  onClick={() => (window.location.href = '/#contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default CaseStudyDetailPage;
