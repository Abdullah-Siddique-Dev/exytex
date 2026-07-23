import React from 'react';
import { motion } from 'framer-motion';

export const CloudServicesSection: React.FC = () => {
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
            DevOps Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Continuous evolution of applications with integrated development and operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'CI/CD Pipeline', desc: 'Automated continuous integration and deployment', icon: '🔄' },
            { title: 'Containerization', desc: 'Docker and Kubernetes orchestration', icon: '📦' },
            { title: 'Cloud Integration', desc: 'Multi-cloud deployment management', icon: '☁️' },
            { title: 'Monitoring', desc: 'Real-time performance monitoring', icon: '📊' }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 max-w-4xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light text-center" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Exytex facilitates complete visibility across the product development pipeline, distributed responsibility across teams, and shared goals. Through DevOps, we bridge the gap between development and operations teams for expedited product release.
          </p>
        </motion.div>
      </div>
    </section>
  );
};