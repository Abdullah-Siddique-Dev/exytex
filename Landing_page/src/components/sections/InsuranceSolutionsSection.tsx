import React from 'react';
import { motion } from 'framer-motion';

export const InsuranceSolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: 'Advanced Products',
      description: 'Modern insurance technology platforms to accelerate innovation and integration while ensuring successful digital transformation.',
      icon: '🚀',
      features: [
        'Policy Administration Systems',
        'Claims Management Platforms',
        'Billing & Payment Solutions',
        'Document Management'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Technology Services',
      description: 'Wide range of transformative services to help improve core operations model while developing new sources of revenue stream.',
      icon: '⚙️',
      features: [
        'Digital Transformation',
        'Cloud Migration Services',
        'Legacy System Modernization',
        'Integration Services'
      ],
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Platform Accelerators',
      description: 'Modernize your mission critical systems with our versatile technology stack and third-party platform aggregators.',
      icon: '⚡',
      features: [
        'Salesforce Insurance Cloud',
        'Microsoft Dynamics 365',
        'AWS Insurance Solutions',
        'Custom API Integrations'
      ],
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const resources = [
    {
      type: 'Workshop',
      title: 'Insurance Advisory Workshop',
      icon: '🎯'
    },
    {
      type: 'Webinar',
      title: 'Improving Claims Processing with Digital FNOL',
      icon: '📹'
    },
    {
      type: 'Webinar',
      title: 'Insurance Claims Process Automation with an AI-Enabled Ecosystem',
      icon: '🤖'
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-inter">
            End-to-End Digital Solutions for Insurance Enterprises
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-4xl mx-auto font-inter">
            We empower insurance enterprises to keep pace with the evolving marketplace, deal with new regulations, digitalize customer experience, and deliver innovative insurance products and service suites leading to business growth coupled with sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 border-2 ${solution.color} hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <motion.div 
                    className="text-6xl mb-4 inline-block"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {solution.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-inter">
                    {solution.description}
                  </p>
                </div>
                
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Key Features
                  </div>
                  {solution.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start text-sm text-gray-700 font-inter group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 mt-1.5 group-hover/item:scale-150 transition-transform"></div>
                      <span className="group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold text-sm hover:shadow-xl transition-all duration-300 font-inter relative overflow-hidden group/btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Explore More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommended Readings */}
        <motion.div
          className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 font-inter">
            Recommended Readings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <div className="text-xs font-semibold text-blue-600 mb-2 font-inter">{resource.type}</div>
                <h4 className="text-base font-bold text-gray-900 font-inter">{resource.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
