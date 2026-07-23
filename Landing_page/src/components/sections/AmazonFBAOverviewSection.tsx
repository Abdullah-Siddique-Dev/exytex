import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Package, Zap } from 'lucide-react';

export const AmazonFBAOverviewSection: React.FC = () => {
  const stats = [
    { icon: Users, value: '50%', label: 'Third-Party Sellers' },
    { icon: Package, value: '300M+', label: 'Products Available' },
    { icon: TrendingUp, value: '2x', label: 'Growth Rate' },
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Overview
            </div>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            What is Amazon FBA?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Logistics by Amazon FBA or Fulfillment by Amazon services in Pakistan allows any company or person to sell their products through the Amazon marketplace, giving them the main online logistics tasks (storage, preparation, and shipping of orders).
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Market Impact
            </h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
              In 2017, <span className="font-semibold text-blue-600">50% of products</span> sold on Amazon were not owned by Amazon, but by third-party sellers in the Marketplace program.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
              However, despite the excellence of Amazon logistics and FBA benefits, there are certain considerations to understand whether the Amazon FBA program is the best option for your business.
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
};