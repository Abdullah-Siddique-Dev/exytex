import React from 'react';
import { motion } from 'framer-motion';

export const UIUXProcessSection: React.FC = () => {
  const steps = [
    { title: 'Research', description: 'Understanding users and requirements', icon: '🔍' },
    { title: 'Design', description: 'Creating beautiful and functional designs', icon: '🎨' },
    { title: 'Prototype', description: 'Building interactive prototypes', icon: '⚡' },
    { title: 'Test', description: 'User testing and validation', icon: '🧪' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Design Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};