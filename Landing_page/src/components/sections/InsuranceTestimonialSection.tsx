import React from 'react';
import { motion } from 'framer-motion';

export const InsuranceTestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-inter">
            Trusted by Insurance Leaders
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-start mb-6">
                <motion.div 
                  className="text-7xl text-blue-300 leading-none mr-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  "
                </motion.div>
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-white leading-relaxed font-inter italic">
                    We recognized the need to reimagine our insurance operations to keep pace with ever-evolving customer needs. Damco has helped us streamline our core process and leverage technology as a strategic asset. In a competitive market we are now in a much better position to deliver much more, at a faster pace.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between flex-wrap gap-4 mt-8 pt-6 border-t border-white/20">
                <div>
                  <div className="text-blue-200 font-bold text-lg md:text-xl font-inter mb-2">
                    A Leading General Insurance Provider
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-yellow-400 text-2xl"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="text-blue-200 text-sm font-inter">
                  <div className="font-semibold">Insurance Industry</div>
                  <div className="text-blue-300/80">Property & Casualty</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: '20+', label: 'Years of Expertise', icon: '📅' },
            { number: '200+', label: 'Insurance Clients', icon: '🏢' },
            { number: '500+', label: 'Projects Delivered', icon: '✅' },
            { number: '98%', label: 'Client Satisfaction', icon: '⭐' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2 font-inter">{stat.number}</div>
              <div className="text-sm text-blue-200 font-inter">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-inter">
            Ready to Transform Your Insurance Operations?
          </h3>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto font-inter">
            Join leading insurance companies who trust us to drive their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
