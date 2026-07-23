import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { motion } from 'framer-motion';
import { Cloud, Zap, Link2, Database, CheckCircle, ArrowRight } from 'lucide-react';

const APIIntegrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Integration & SaaS Solutions | Exytex</title>
        <meta name="description" content="Seamless API integration and cloud-based SaaS solutions to connect your systems and streamline your business operations." />
      </Helmet>

      <SleekHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Cloud className="w-4 h-4" />
              <span>Integration Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              API Integration & SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Seamless system integrations and cloud-based services to connect your business tools and automate workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Link2,
                  title: 'Third-party APIs',
                  description: 'Integrate popular third-party services like payment gateways, CRM systems, and marketing tools seamlessly into your applications.'
                },
                {
                  icon: Cloud,
                  title: 'Cloud Migration',
                  description: 'Migrate your applications and data to cloud platforms like AWS, Azure, or Google Cloud for better scalability and reliability.'
                },
                {
                  icon: Database,
                  title: 'System Integration',
                  description: 'Connect disparate systems and databases to create a unified, efficient workflow across your organization.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h2>
            <div className="space-y-4">
              {[
                'Automate workflows and reduce manual data entry',
                'Connect multiple systems for seamless data flow',
                'Improve efficiency with real-time data synchronization',
                'Scale your infrastructure with cloud solutions',
                'Reduce costs with SaaS-based services',
                'Enhance security with enterprise-grade integrations'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can integrate your tools and streamline your operations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      <ElegantFooter />
    </>
  );
};

export default APIIntegrationPage;
