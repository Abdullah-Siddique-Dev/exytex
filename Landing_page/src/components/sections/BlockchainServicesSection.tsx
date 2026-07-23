import React from 'react';
import { motion } from 'framer-motion';

export const BlockchainServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Policy Administration Systems',
      description: 'Comprehensive policy management solutions for life, health, P&C, and general insurance with automated workflows and real-time processing.',
      icon: '📋'
    },
    {
      title: 'Claims Management Solutions',
      description: 'Streamlined claims processing with digital FNOL, automated adjudication, and AI-powered fraud detection capabilities.',
      icon: '⚖️'
    },
    {
      title: 'Digital Customer Experience',
      description: 'Modern customer portals, mobile apps, and self-service platforms that enhance policyholder engagement and satisfaction.',
      icon: '📱'
    },
    {
      title: 'Underwriting Automation',
      description: 'AI-driven underwriting solutions that accelerate decision-making while maintaining accuracy and compliance standards.',
      icon: '🎯'
    },
    {
      title: 'Analytics & Business Intelligence',
      description: 'Advanced analytics platforms providing actionable insights for risk assessment, pricing optimization, and business growth.',
      icon: '📊'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated compliance management systems ensuring adherence to evolving insurance regulations and reporting requirements.',
      icon: '🔒'
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration with existing systems, third-party platforms, and legacy applications for unified operations.',
      icon: '🔗'
    },
    {
      title: 'Cloud Migration',
      description: 'Secure cloud transformation services enabling scalability, cost optimization, and enhanced operational efficiency.',
      icon: '☁️'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Insurance Technology Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience in cutting-edge insurance technologies has helped us successfully work with customers globally, delivering comprehensive solutions across all lines of business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};