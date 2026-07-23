import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { Server, Database, Shield, Zap, Cloud, Code } from 'lucide-react';

const AzurePage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Virtual Machines',
      description: 'Deploy Windows and Linux VMs with flexible compute options'
    },
    {
      icon: Database,
      title: 'Azure SQL & Cosmos DB',
      description: 'Managed databases with global distribution and high availability'
    },
    {
      icon: Shield,
      title: 'Azure Security Center',
      description: 'Advanced threat protection and security management'
    },
    {
      icon: Zap,
      title: 'Azure Functions',
      description: 'Event-driven serverless compute platform'
    },
    {
      icon: Cloud,
      title: 'Blob Storage',
      description: 'Massively scalable object storage for unstructured data'
    },
    {
      icon: Code,
      title: 'Azure DevOps',
      description: 'Complete DevOps toolchain for CI/CD pipelines'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Microsoft Azure Cloud Services - Azure Solutions | Exytex</title>
        <meta name="description" content="Professional Microsoft Azure cloud services including VMs, SQL Database, Functions, and DevOps solutions. Expert Azure consulting and implementation." />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-600 rounded-full"
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <Cloud className="w-12 h-12 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Microsoft Azure
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build, manage, and deploy applications on Microsoft's global cloud infrastructure with integrated tools and services for every workload.
              </p>

              <motion.button
                onClick={() => window.location.href = '/#contact'}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-600/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started with Azure
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Azure Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive Azure solutions tailored to your business needs
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Azure Section */}
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
                  Why Choose Azure?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Hybrid Cloud', desc: 'Seamless integration with on-premises infrastructure' },
                  { title: 'Enterprise Ready', desc: 'Built for enterprise-scale applications and workloads' },
                  { title: 'Microsoft Integration', desc: 'Native integration with Microsoft products and services' },
                  { title: 'AI & ML', desc: 'Advanced AI and machine learning capabilities' },
                  { title: 'Compliance', desc: 'Industry-leading compliance certifications' },
                  { title: 'Global Reach', desc: 'Available in 60+ regions worldwide' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
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

export default AzurePage;
