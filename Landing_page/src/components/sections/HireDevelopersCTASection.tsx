import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';

export const HireDevelopersCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <motion.h2
                    className="text-lg md:text-xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Ready to Build Your Dream Team?
                  </motion.h2>
                  <motion.p
                    className="text-sm text-blue-100 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Get started today and find the perfect developers for your project in just 48 hours
                  </motion.p>

                  <motion.div
                    className="space-y-2 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {[
                      'No upfront costs',
                      'Risk-free trial period',
                      'Replace developers anytime'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-white">
                        <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      className="px-5 py-2.5 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Hiring Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                    <motion.button
                      className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/30 hover:bg-white/20 transition-all flex items-center text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Talk to Expert
                    </motion.button>
                  </motion.div>
                </div>

                {/* Right Stats */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { number: '500+', label: 'Developers' },
                    { number: '98%', label: 'Success Rate' },
                    { number: '48hr', label: 'Avg. Matching' },
                    { number: '24/7', label: 'Support' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-lg font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-blue-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Contact Options */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              {
                icon: MessageCircle,
                title: 'Live Chat',
                description: 'Chat with our team',
                action: 'Start Chat'
              },
              {
                icon: Calendar,
                title: 'Schedule Call',
                description: 'Book a consultation',
                action: 'Book Now'
              },
              {
                icon: ArrowRight,
                title: 'View Pricing',
                description: 'Explore our plans',
                action: 'See Pricing'
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer group"
                whileHover={{ y: -5 }}
              >
                <option.icon className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {option.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2">{option.description}</p>
                <span className="text-sm text-blue-600 font-medium group-hover:underline">
                  {option.action} →
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
