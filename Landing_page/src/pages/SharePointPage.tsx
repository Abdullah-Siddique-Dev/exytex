import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { Database, CheckCircle, Users, Shield, Zap, Globe } from 'lucide-react';

const SharePointPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Enable seamless team collaboration with document sharing and co-authoring'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security with advanced permissions and compliance'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate business processes with Power Automate integration'
    },
    {
      icon: Globe,
      title: 'Intranet Solutions',
      description: 'Build modern intranet portals for your organization'
    }
  ];

  return (
    <>
      <Helmet>
        <title>SharePoint Solutions - Expert SharePoint Development & Consulting | Exytex</title>
        <meta name="description" content="Professional SharePoint solutions for SMBs and large organizations. Expert planning, deployment, customization, and SharePoint Online services. Microsoft Gold Partner." />
        <meta name="keywords" content="SharePoint development, SharePoint Online, SharePoint consulting, intranet solutions, document management, collaboration platform, Microsoft 365" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/sharepoint" />
        <meta property="og:title" content="SharePoint Solutions - Expert SharePoint Development | Exytex" />
        <meta property="og:description" content="Professional SharePoint solutions for SMBs and large organizations. Expert planning, deployment, and customization services." />
        <meta property="og:image" content="https://exytex.com/images/hero/team-collaboration.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/sharepoint" />
        <meta property="twitter:title" content="SharePoint Solutions - Expert SharePoint Development" />
        <meta property="twitter:description" content="Professional SharePoint solutions for SMBs and large organizations." />
        <meta property="twitter:image" content="https://exytex.com/images/hero/team-collaboration.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <link rel="canonical" href="https://exytex.com/sharepoint" />
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
                  y: [0, -20, 0],
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
                  <Database className="w-10 h-10 text-white" />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  SharePoint Solutions
                </h1>

                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our SharePoint experts have notable experience in successfully planning and deploying SharePoint solutions for SMBs and large organizations
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
                      src="/share point.png"
                      alt="SharePoint Solutions"
                      className="w-full max-w-md h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SharePoint Capabilities
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default SharePointPage;
