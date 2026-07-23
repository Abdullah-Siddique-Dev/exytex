import React from 'react';
import { motion } from 'framer-motion';

export const BlockchainProcessSection: React.FC = () => {
  const segments = [
    {
      title: 'Insurers',
      description: 'Damco has broad knowledge and extensive experience in serving both insurance and insurtech companies across all lines of business, including property & casualty, life, pension, and health insurance providers worldwide.',
      details: 'Our comprehensive offerings help innovate new products, drive operational agility, adopt emerging technologies, and deliver superior analytics capabilities and process efficiency.',
      icon: '🏢',
      color: 'blue'
    },
    {
      title: 'Agents and Brokers',
      description: 'Damco has a long history of working with agents, wholesale brokers, and consultants to help them digitize their businesses through a wide range of insurance technologies, services, and flagship products.',
      details: 'Damco holds expertise in helping reinsurers, general, individual life, Individual health, and group health insurance service providers scale operations, streamline tasks, and deliver rapid innovation to customers faster.',
      icon: '👥',
      color: 'green'
    },
    {
      title: 'Adjusters',
      description: 'While most insurance companies have claims adjusters doing the heavy lifting alone on all types of claims, we at Damco believe in empowering them with the right insurance technologies and advanced capabilities.',
      details: 'We help automate parts of the claims process, transforming their insurance business model with cutting-edge technology solutions.',
      icon: '⚖️',
      color: 'purple'
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
            Insurance Is Our Focus
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Being an insurance technology company, we understand and support the needs of various segments in the insurance industry via our comprehensive and rapidly deployable solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="lg:w-1/2">
                <div className={`${
                  segment.color === 'blue' ? 'bg-blue-50' : 
                  segment.color === 'green' ? 'bg-green-50' : 'bg-purple-50'
                } rounded-2xl p-8`}>
                  <div className={`w-16 h-16 ${
                    segment.color === 'blue' ? 'bg-blue-100' : 
                    segment.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                  } rounded-full flex items-center justify-center mb-6`}>
                    <span className="text-3xl">{segment.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {segment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {segment.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {segment.details}
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1560472354-b33ff0c44a43' : 
                      index === 1 ? '1521791136064-963d9e6e6b8e' : 
                      '1507003211169-0a1dd7228f2d'
                    }?w=600&h=400&fit=crop&crop=center&auto=format&q=80`}
                    alt={segment.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className={`absolute inset-0 ${
                    segment.color === 'blue' ? 'bg-blue-600/20' : 
                    segment.color === 'green' ? 'bg-green-600/20' : 'bg-purple-600/20'
                  } rounded-2xl`}></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};