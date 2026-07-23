import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

export const IndustryStatsSection: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Across all industries'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Expert Team',
      description: 'Specialized professionals'
    },
    {
      icon: Award,
      value: '240+',
      label: 'Projects Delivered',
      description: 'Successfully completed'
    },
    {
      icon: Globe,
      value: '12+',
      label: 'Industries Served',
      description: 'Worldwide presence'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-x-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Delivering excellence across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-blue-100">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
