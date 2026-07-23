import React from 'react';
import { motion } from 'framer-motion';

export const AIMLProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Data Assessment',
      description: 'We analyze your data quality, structure, and availability to determine the best AI approach for your specific needs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'AI Strategy Design',
      description: 'Our experts develop a comprehensive AI strategy aligned with your business objectives and technical requirements.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Model Development',
      description: 'We build and train custom machine learning models using the latest algorithms and frameworks.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      duration: '4-8 weeks'
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Rigorous testing and validation ensure your AI models meet accuracy requirements and perform reliably.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      duration: '2-3 weeks'
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'We deploy your AI solutions and integrate them seamlessly with your existing systems and workflows.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      duration: '1-2 weeks'
    },
    {
      step: '06',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization ensure your AI systems maintain peak performance over time.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side - Title */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-inter">
                Our AI Development Process
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed font-inter">
                A systematic approach to AI development that ensures successful implementation and optimal results for your business
              </p>
            </div>
          </motion.div>

          {/* Right Side - Process Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold font-inter">
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-inter group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-inter">
                      {step.description}
                    </p>
                    
                    {/* Arrow Icon */}
                    <div className="mt-4 flex items-center text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center bg-blue-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-inter">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto font-inter">
            Let's discuss your AI needs and create intelligent solutions that drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start AI Project
            </motion.button>
            <motion.a
              href="https://calendly.com/saadinsides"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 font-inter inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};