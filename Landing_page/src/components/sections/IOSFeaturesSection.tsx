import React from 'react';
import { motion } from 'framer-motion';

export const IOSFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Performance Optimized',
      description: 'Lightning-fast apps with optimized code, efficient memory management, and smooth animations.',
      stats: '60 FPS'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Enterprise-grade security with data encryption, secure authentication, and privacy protection.',
      stats: '100% Secure'
    },
    {
      icon: '📐',
      title: 'Pixel Perfect Design',
      description: 'Beautiful interfaces following Apple Human Interface Guidelines with attention to detail.',
      stats: 'Retina Ready'
    },
    {
      icon: '🔄',
      title: 'Real-time Sync',
      description: 'Seamless data synchronization across devices with offline support and conflict resolution.',
      stats: 'Live Updates'
    },
    {
      icon: '📊',
      title: 'Analytics Integration',
      description: 'Comprehensive analytics and crash reporting for data-driven improvements and monitoring.',
      stats: '99.9% Uptime'
    },
    {
      icon: '🌐',
      title: 'API Integration',
      description: 'Robust backend integration with RESTful APIs, GraphQL, and third-party service connections.',
      stats: 'Scalable'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Our iOS Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional iOS applications with cutting-edge features and unmatched quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-indigo-200">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <motion.div
                    className="w-full h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.7 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'iOS Apps Delivered' },
              { number: '4.9★', label: 'Average App Rating' },
              { number: '2M+', label: 'Total Downloads' },
              { number: '98%', label: 'Client Retention' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};