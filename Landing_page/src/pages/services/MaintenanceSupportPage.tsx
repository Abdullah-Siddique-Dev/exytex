import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { motion } from 'framer-motion';
import { Wrench, Clock, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const MaintenanceSupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Software Support & Maintenance Services | Exytex</title>
        <meta name="description" content="Reliable software support and maintenance services ensuring system stability, security updates, performance optimization, and long-term scalability." />
        <meta name="keywords" content="software support, maintenance services, system stability, security updates, performance optimization, scalability, Exytex" />
        <meta property="og:title" content="Software Support & Maintenance Services | Exytex" />
        <meta property="og:description" content="Reliable software support and maintenance services ensuring system stability, security updates, performance optimization, and long-term scalability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/support-maintenance/" />
        <link rel="canonical" href="https://www.exytex.com/support-maintenance/" />
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
              <Wrench className="w-4 h-4" />
              <span>Support Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Maintenance & Ongoing Support
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Keeping your digital ecosystem stable and updated with 24/7 monitoring, regular updates, and performance optimization.
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
                  icon: Clock,
                  title: '24/7 Monitoring',
                  description: 'Round-the-clock monitoring to ensure your systems are always running smoothly and any issues are detected immediately.'
                },
                {
                  icon: Shield,
                  title: 'Regular Updates',
                  description: 'Keep your software up-to-date with the latest security patches, features, and performance improvements.'
                },
                {
                  icon: TrendingUp,
                  title: 'Performance Optimization',
                  description: 'Continuous optimization to ensure your applications run at peak performance and deliver the best user experience.'
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
                'Minimize downtime and ensure business continuity',
                'Proactive issue detection and resolution',
                'Regular security updates and vulnerability patches',
                'Performance monitoring and optimization',
                'Technical support and troubleshooting',
                'Backup and disaster recovery planning'
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
            Ready to Ensure Your Systems Run Smoothly?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your maintenance and support needs.
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

export default MaintenanceSupportPage;
