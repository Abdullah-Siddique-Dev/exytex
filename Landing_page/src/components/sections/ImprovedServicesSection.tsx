import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';

const services = [
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies that drive growth and maximize ROI',
    features: ['Social Media Marketing', 'PPC Advertising', 'Content Marketing', 'Email Marketing', 'Analytics'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and best practices',
    features: ['React/Next.js', 'Node.js', 'E-commerce', 'CMS Development', 'API Integration'],
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    icon: '🔍',
    title: 'SEO Services',
    description: 'Search engine optimization strategies that improve visibility and organic traffic',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO', 'SEO Audits'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600'
  },
  {
    icon: '🎨',
    title: 'Graphic Designing',
    description: 'Creative visual solutions that communicate your brand message effectively',
    features: ['Brand Identity', 'Logo Design', 'Print Design', 'UI/UX Design', 'Illustrations'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600'
  },
  {
    icon: '📦',
    title: 'Amazon Services',
    description: 'Complete Amazon marketplace solutions to maximize your e-commerce success',
    features: ['Product Listing', 'PPC Management', 'Inventory Management', 'Brand Registry', 'Analytics'],
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600'
  }
];

export const ImprovedServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            🚀 Our Premium Services
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We deliver end-to-end digital services that transform businesses and drive exceptional results. 
            From mobile apps to digital marketing, we've got you covered.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`relative overflow-hidden rounded-3xl ${service.bgColor} p-8 h-full border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6 relative z-10"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${service.textColor} group-hover:text-gray-900 transition-colors relative z-10`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm text-gray-500"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:scale-105`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>

                {/* Decorative Elements */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                Get a free consultation today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Start Your Project
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Schedule Call
                </motion.button>
              </div>
            </div>
            
            {/* Background Animation */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
