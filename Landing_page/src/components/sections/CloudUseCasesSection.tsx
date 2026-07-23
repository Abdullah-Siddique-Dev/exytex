import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShoppingCart, Heart, GraduationCap } from 'lucide-react';

export const CloudUseCasesSection: React.FC = () => {
  const useCases = [
    {
      title: 'Enterprise',
      description: 'Scalable solutions for large organizations',
      icon: Briefcase
    },
    {
      title: 'E-commerce',
      description: 'High-performance platforms for online stores',
      icon: ShoppingCart
    },
    {
      title: 'Healthcare',
      description: 'Secure and compliant healthcare systems',
      icon: Heart
    },
    {
      title: 'Education',
      description: 'Cloud-based learning management systems',
      icon: GraduationCap
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Use Cases
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Cloud solutions for every industry
          </p>
        </motion.div>

        {/* Material Design Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {useCase.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
