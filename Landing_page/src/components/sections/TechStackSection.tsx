import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const benefits = [
    'Scalable and maintainable code architecture',
    'Industry-leading security standards',
    'Cross-platform compatibility',
    'High performance and optimization',
    'Regular updates and maintenance',
    'Expert technical support'
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-full">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>
                Why Our Technology Stack Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: '"Inter", sans-serif' }}>
                We carefully select technologies that ensure your project's success, scalability, and long-term maintainability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ fontFamily: '"Inter", sans-serif' }}>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="Advanced Technology Stack - Circuit Board and Digital Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
