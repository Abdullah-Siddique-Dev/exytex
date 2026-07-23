import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';

const services = [
  {
    icon: '🚀',
    title: 'Custom Software Development',
    description: 'End-to-end software development services tailored to your business needs',
    features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions', 'API Development']
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and DevOps practices for modern applications',
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Containerization', 'Monitoring']
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning',
    features: ['Data Analytics', 'Predictive Models', 'Computer Vision', 'NLP Solutions']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging and intuitive experiences',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing']
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['React Native', 'Flutter', 'iOS Native', 'Android Native']
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment']
  }
];

export const EleksServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <motion.div
            className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end technology services that drive digital transformation 
            and accelerate business growth across industries.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-blue-200">
                <motion.div
                  className="text-4xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our expertise can accelerate your digital journey
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
