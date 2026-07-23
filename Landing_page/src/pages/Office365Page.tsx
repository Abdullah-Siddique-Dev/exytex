import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { Users, Mail, Calendar, FileText, Video, Cloud, CheckCircle } from 'lucide-react';

const Office365Page: React.FC = () => {
  const services = [
    {
      icon: Mail,
      title: 'Exchange Online',
      description: 'Professional email hosting with 50GB mailbox and advanced security'
    },
    {
      icon: FileText,
      title: 'Office Apps',
      description: 'Word, Excel, PowerPoint, and OneNote across all devices'
    },
    {
      icon: Video,
      title: 'Microsoft Teams',
      description: 'Chat, meetings, calling, and collaboration in one place'
    },
    {
      icon: Cloud,
      title: 'OneDrive',
      description: '1TB cloud storage per user with file sharing and sync'
    },
    {
      icon: Calendar,
      title: 'Outlook',
      description: 'Email, calendar, contacts, and tasks management'
    },
    {
      icon: Users,
      title: 'SharePoint Online',
      description: 'Intranet, document management, and team collaboration'
    }
  ];

  const benefits = [
    'Always up-to-date with latest features',
    'Work from anywhere on any device',
    'Enterprise-grade security and compliance',
    'Predictable monthly costs',
    '99.9% uptime SLA guarantee',
    'Seamless integration across apps'
  ];

  return (
    <>
      <Helmet>
        <title>Office 365 Solutions - Microsoft 365 Services & Migration | Exytex</title>
        <meta name="description" content="Office 365 services offer an all-inclusive roadmap for seamless cloud adoption. Expert Microsoft 365 consulting, migration, and integration services." />
        <meta name="keywords" content="Office 365, Microsoft 365, cloud migration, Exchange Online, Teams, SharePoint Online, OneDrive, Office 365 consulting" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/office-365" />
        <meta property="og:title" content="Office 365 Solutions - Microsoft 365 Services | Exytex" />
        <meta property="og:description" content="Office 365 services offer an all-inclusive roadmap that helps organizations seamlessly adopt and integrate their IT environment in the cloud." />
        <meta property="og:image" content="https://exytex.com/images/hero/team-meeting.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/office-365" />
        <meta property="twitter:title" content="Office 365 Solutions - Microsoft 365 Services" />
        <meta property="twitter:description" content="Expert Office 365 consulting, migration, and integration services." />
        <meta property="twitter:image" content="https://exytex.com/images/hero/team-meeting.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <link rel="canonical" href="https://exytex.com/office-365" />
      </Helmet>

      <div className="bg-white min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
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

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="w-20 h-20 mb-8 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Office 365 Solutions
                </h1>

                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Damco's Office 365 services offer an all-inclusive roadmap that helps organizations seamlessly adopt and integrate their IT environment in the cloud
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-16 flex items-center justify-center">
                    <img 
                      src="/office 365.png"
                      alt="Office 365 Solutions"
                      className="w-full max-w-md h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Office 365 Applications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete suite of productivity tools for modern businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Office 365?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default Office365Page;
