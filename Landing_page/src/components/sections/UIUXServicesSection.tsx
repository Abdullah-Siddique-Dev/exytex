import React from 'react';
import { motion } from 'framer-motion';

export const UIUXServicesSection: React.FC = () => {
  const services = [
    {
      title: 'User Research',
      description: 'In-depth user research and analysis to understand your target audience',
      icon: '🔍'
    },
    {
      title: 'UI Design',
      description: 'Beautiful and intuitive user interfaces that engage and convert',
      icon: '🎨'
    },
    {
      title: 'UX Strategy',
      description: 'Strategic user experience planning for optimal user journeys',
      icon: '🧭'
    },
    {
      title: 'Prototyping',
      description: 'Interactive prototypes to validate design concepts',
      icon: '⚡'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our UI/UX Services
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Comprehensive design services to create exceptional user experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-purple-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};