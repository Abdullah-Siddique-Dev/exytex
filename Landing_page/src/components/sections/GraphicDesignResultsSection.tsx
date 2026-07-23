import React from 'react';
import { motion } from 'framer-motion';

export const GraphicDesignResultsSection: React.FC = () => {
  const features = [
    {
      title: '3+ Years Experience',
      description: 'Perfecting our design methodology',
      icon: '📅'
    },
    {
      title: 'Proven Methodology',
      description: 'Sales marketing focused approach',
      icon: '🎯'
    },
    {
      title: 'Better Results',
      description: 'Clear objectives and measurable outcomes',
      icon: '📈'
    },
    {
      title: 'Brand Renewal',
      description: 'Complete brand transformation services',
      icon: '🔄'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-inter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Results-Driven Design Process
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-8 font-inter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              If you need to create or renew your brand, a new website or launch a digital campaign, the objective is clear. Get better results. You can count on Exytex, we have been perfecting our methodology for 3 years.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 font-inter">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-inter">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-3">🎨</div>
                  <h4 className="font-semibold mb-2 font-inter">Creative Design</h4>
                  <p className="text-sm text-blue-100 font-inter">Innovative visual solutions</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white mt-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="font-semibold mb-2 font-inter">Data-Driven</h4>
                  <p className="text-sm text-purple-100 font-inter">Results-focused approach</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white -mt-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-semibold mb-2 font-inter">Fast Delivery</h4>
                  <p className="text-sm text-indigo-100 font-inter">Quick turnaround times</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6 text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-3">✨</div>
                  <h4 className="font-semibold mb-2 font-inter">Quality Focus</h4>
                  <p className="text-sm text-blue-100 font-inter">Premium design standards</p>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💡
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 left-10 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-lg shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ⭐
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Brands Created', icon: '🏢' },
              { number: '3+', label: 'Years Experience', icon: '📅' },
              { number: '98%', label: 'Client Satisfaction', icon: '😊' },
              { number: '24/7', label: 'Design Support', icon: '🛠️' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-100 font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};