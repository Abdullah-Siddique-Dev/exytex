import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { Shield, Smartphone, Zap, Database, Users, Code, CheckCircle } from 'lucide-react';

const PowerAppsPage: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Build custom mobile apps for iOS and Android without coding'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect to multiple data sources including SharePoint, SQL, and more'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate business processes with Power Automate integration'
    },
    {
      icon: Users,
      title: 'Canvas Apps',
      description: 'Create pixel-perfect custom apps with drag-and-drop interface'
    },
    {
      icon: Code,
      title: 'Model-Driven Apps',
      description: 'Build data-driven apps based on your business data model'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security, compliance, and data governance'
    }
  ];

  const useCases = [
    'Field service management',
    'Inspection and audit apps',
    'Asset tracking solutions',
    'Employee onboarding',
    'Expense reporting',
    'Customer feedback collection'
  ];

  return (
    <>
      <Helmet>
        <title>PowerApps Development - Low-Code App Solutions & Consulting | Exytex</title>
        <meta name="description" content="PowerApps experts building custom business applications. Low-code development for mobile apps, field service, automation, and enterprise solutions." />
        <meta name="keywords" content="PowerApps development, low-code development, Power Platform, business apps, mobile apps, Power Automate, canvas apps, model-driven apps" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/powerapps" />
        <meta property="og:title" content="PowerApps Development - Low-Code App Solutions | Exytex" />
        <meta property="og:description" content="PowerApps experts building custom business applications from scanning business cards to providing field agents with mobile capabilities." />
        <meta property="og:image" content="https://exytex.com/images/services/mobile-app.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/powerapps" />
        <meta property="twitter:title" content="PowerApps Development - Low-Code App Solutions" />
        <meta property="twitter:description" content="Build custom business applications with PowerApps low-code development." />
        <meta property="twitter:image" content="https://exytex.com/images/services/mobile-app.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <link rel="canonical" href="https://exytex.com/powerapps" />
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
                  <Shield className="w-10 h-10 text-white" />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  PowerApps Development
                </h1>

                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our PowerApps experts have worked with clients to build a wide range of functionality from scanning business cards to providing field agents with mobile capabilities
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Start Building
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
                      src="/power apps.jpg"
                      alt="PowerApps Development"
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
                PowerApps Capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Build powerful business apps with low-code development
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

        {/* Use Cases Section */}
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
                  Common Use Cases
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{useCase}</p>
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

export default PowerAppsPage;
