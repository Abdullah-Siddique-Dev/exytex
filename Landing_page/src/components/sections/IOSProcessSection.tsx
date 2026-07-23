import React from 'react';
import { motion } from 'framer-motion';

export const IOSProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive iOS development strategy.',
      icon: '🔍',
      duration: '1-2 weeks',
      deliverables: ['Project Scope', 'Technical Specification', 'UI/UX Wireframes', 'Development Timeline']
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create stunning iOS interfaces following Apple Human Interface Guidelines with interactive prototypes.',
      icon: '🎨',
      duration: '2-3 weeks',
      deliverables: ['UI/UX Design', 'Interactive Prototype', 'Design System', 'Asset Library']
    },
    {
      step: '03',
      title: 'iOS Development',
      description: 'Expert iOS developers build your app using Swift, implementing features with clean, maintainable code.',
      icon: '⚡',
      duration: '6-12 weeks',
      deliverables: ['Native iOS App', 'Backend Integration', 'Third-party APIs', 'Quality Assurance']
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing across devices, performance optimization, and App Store compliance verification.',
      icon: '🧪',
      duration: '1-2 weeks',
      deliverables: ['Device Testing', 'Performance Report', 'Bug Fixes', 'App Store Preparation']
    },
    {
      step: '05',
      title: 'App Store Launch',
      description: 'We handle the complete App Store submission process, including metadata optimization and review management.',
      icon: '🚀',
      duration: '1 week',
      deliverables: ['App Store Submission', 'Metadata Optimization', 'Launch Strategy', 'Marketing Assets']
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and feature enhancements to keep your iOS app competitive and up-to-date.',
      icon: '🛠️',
      duration: 'Ongoing',
      deliverables: ['Bug Fixes', 'iOS Updates', 'Feature Updates', 'Performance Monitoring']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our iOS Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures successful iOS app delivery from concept to App Store
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 rounded-full hidden lg:block"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{step.icon}</div>
                      <div>
                        <div className="text-sm font-semibold text-indigo-600 mb-1">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700">Duration: {step.duration}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Deliverables:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-2"></div>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your iOS Project?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss your iOS app idea and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};