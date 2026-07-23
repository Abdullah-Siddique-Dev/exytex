import React from 'react';
import { motion } from 'framer-motion';

export const CloudTechStackSection: React.FC = () => {
  const techStack = [
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔷' },
    { name: 'Google Cloud', logo: '🌐' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚓' },
    { name: 'Terraform', logo: '🔧' }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Technology Stack
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Leading cloud platforms and tools we work with
          </p>
        </motion.div>

        {/* Minimal White Professional Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600 hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
