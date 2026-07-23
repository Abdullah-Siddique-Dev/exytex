import React from 'react';
import { motion } from 'framer-motion';

export const WebDevProcessSection: React.FC = () => {
  const processSteps = [
    {
      title: 'Plotting',
      description: 'Strategic planning and project roadmap definition',
      icon: '📋'
    },
    {
      title: 'Thinking',
      description: 'Creative ideation and solution architecture',
      icon: '💡'
    },
    {
      title: 'Design Making',
      description: 'UI/UX design and user experience optimization',
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Clean code implementation and functionality',
      icon: '⚡'
    },
    {
      title: 'Checking',
      description: 'Quality assurance and comprehensive testing',
      icon: '✅'
    },
    {
      title: 'Continuance',
      description: 'Ongoing support and maintenance services',
      icon: '🔄'
    }
  ];

  const services = [
    'Cyber Security',
    'Artificial Intelligence',
    'Cloud Computing',
    'QA & Testing',
    'Mobile Apps',
    'Web Applications'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
            >
              SOFTWARE DEVELOPMENT SERVICES
            </h2>
            <p 
              className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
            >
              Software development services are directed at making, scheming, and introducing 
              various kinds of software to fulfill particular processes and aims.
            </p>
          </motion.div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <h3 
                    className="text-lg font-bold text-gray-900"
                    style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p 
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Services Tags */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
            >
              After following these steps, any type of work will be finished with their goals. 
              Here are our demanding services:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service, index) => (
                <motion.span
                  key={service}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {service}
                </motion.span>
              ))}
            </div>
            
            <motion.p
              className="mt-8 text-blue-600 font-medium"
              style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Exytex Technologies are the one who fulfill it without any doubt.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
