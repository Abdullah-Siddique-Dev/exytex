import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

export const IndustryProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your industry challenges and identify opportunities for digital transformation.'
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Develop a customized roadmap tailored to your specific industry requirements.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Build scalable solutions using cutting-edge technologies and best practices.'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploy and optimize your solution with ongoing support and maintenance.'
    }
  ];

  return (
    <section className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Our Proven Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            A systematic approach to delivering solutions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 -z-10"></div>
                )}

                <div className="relative bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
