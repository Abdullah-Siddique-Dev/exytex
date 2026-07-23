import React from 'react';
import { motion } from 'framer-motion';

export const MobileAppProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive development strategy.',
      icon: '🔍',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Our designers create intuitive, platform-specific interfaces that provide exceptional user experiences.',
      icon: '🎨',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Expert developers build your app using the latest technologies and best practices for optimal performance.',
      icon: '⚡',
      duration: '6-12 weeks'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and platforms ensures your app works flawlessly for all users.',
      icon: '🧪',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'We handle app store submissions and ensure your app meets all platform requirements for approval.',
      icon: '🚀',
      duration: '1 week'
    },
    {
      step: '06',
      title: 'Support & Updates',
      description: 'Ongoing maintenance, updates, and feature enhancements to keep your app current and competitive.',
      icon: '🔧',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-inter">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            A proven methodology that ensures your mobile app is delivered on time, within budget, and exceeds expectations
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-lg">
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{step.icon}</span>
                      <div>
                        <div className="text-xs font-semibold text-blue-600 mb-1 font-inter">
                          Step {step.step}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 font-inter">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm font-inter">
                      {step.description}
                    </p>
                    <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold font-inter">
                      {step.duration}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {step.step}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Mobile App Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create a mobile app that drives your business forward
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};