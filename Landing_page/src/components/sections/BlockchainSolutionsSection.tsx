import React from 'react';
import { motion } from 'framer-motion';

export const BlockchainSolutionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Outperform With Our Innovative Insurance Technology Offerings
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive insurance tech solutions and services are tailored to address the pain points of agents, brokers, carriers, and adjusters across multiple lines of business such as life, health, P&C, and general insurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Advanced Products */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Products
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modern insurance technology platforms to accelerate innovation and integration while ensuring successful digital transformation.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Explore More
              </button>
            </div>
          </motion.div>

          {/* Technology Services */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technology Services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wide range of transformative services to help improve core operations model while developing new sources of revenue stream.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                Explore More
              </button>
            </div>
          </motion.div>

          {/* Platform Accelerators */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Platform Accelerators
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modernize your mission critical systems with our versatile technology stack and third-party platform aggregators.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                Explore More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};