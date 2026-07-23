import React from 'react';
import { motion } from 'framer-motion';

export const BlockchainAboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Insurance Technology Solutions?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Digital Transformation Excellence
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                We assist our clients leverage leading third-party aggregator platforms to improve core operations while developing new sources of revenue stream. Our solutions enable insurers to keep pace with the evolving marketplace and deal with new regulations effectively.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                With over two decades of insurance tech expertise, we deliver innovative insurance products and service suites that drive business growth coupled with sustainability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Industry Coverage
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Our comprehensive insurance tech solutions address the pain points of agents, brokers, carriers, and adjusters across multiple lines of business including life, health, property & casualty, and general insurance.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We digitalize customer experience and strengthen business-customer relationships through cutting-edge technology implementations.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Insurance Technology Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Operational Efficiency</h4>
                <p className="text-sm text-gray-600">Streamlined processes and automated workflows for improved productivity</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Advanced Analytics</h4>
                <p className="text-sm text-gray-600">Superior analytics capabilities for data-driven decision making</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔒</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Regulatory Compliance</h4>
                <p className="text-sm text-gray-600">Automated compliance management for evolving regulations</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Innovation Focus</h4>
                <p className="text-sm text-gray-600">Cutting-edge technology adoption for competitive advantage</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};