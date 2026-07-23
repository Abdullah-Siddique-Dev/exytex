import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Lock, TrendingUp } from 'lucide-react';

export const CloudBenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand',
      icon: Zap,
      step: '01'
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with flexible pricing',
      icon: DollarSign,
      step: '02'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: Lock,
      step: '03'
    },
    {
      title: 'Performance',
      description: 'High-performance infrastructure worldwide',
      icon: TrendingUp,
      step: '04'
    }
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
            Cloud Benefits
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Why businesses choose cloud solutions
          </p>
        </motion.div>

        {/* Neumorphism Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100">
                  {benefit.step}
                </div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
