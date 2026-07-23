import React from 'react';
import { motion } from 'framer-motion';

export const InsurancePartnersSection: React.FC = () => {
  const partners = [
    { name: 'Salesforce', logo: '☁️', color: 'from-blue-400 to-blue-600' },
    { name: 'Microsoft', logo: '🪟', color: 'from-blue-500 to-cyan-500' },
    { name: 'AWS', logo: '🔶', color: 'from-orange-400 to-yellow-500' },
    { name: 'Oracle', logo: '🔴', color: 'from-red-500 to-red-600' },
    { name: 'SAP', logo: '💼', color: 'from-blue-600 to-indigo-600' },
    { name: 'IBM', logo: '🔵', color: 'from-blue-700 to-blue-800' },
    { name: 'Google Cloud', logo: '🌐', color: 'from-green-400 to-blue-500' },
    { name: 'Guidewire', logo: '🎯', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-inter">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto font-inter">
            Our network of Global Partners work with us very closely to deliver world-class technology solutions for better business productivity and unparalleled benefits.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  className="text-5xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {partner.logo}
                </motion.div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 font-inter transition-colors">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outperform Section */}
        <motion.div
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mt-48 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-white mb-6 font-inter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Outperform With Our Innovative Insurance Technology Offerings
            </motion.h3>
            
            <motion.p 
              className="text-base md:text-lg text-white/95 leading-relaxed mb-10 max-w-4xl mx-auto font-inter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our comprehensive insurance tech solutions and services are tailored to address the pain points of agents, brokers, carriers, and adjusters across multiple lines of business such as life, health, P&C, and general insurance. Experience in cutting-edge insurance technologies has helped us successfully work with customers globally.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: '🎯', title: 'Tailored Solutions', desc: 'Custom solutions designed for your specific business needs and challenges' },
                { icon: '🚀', title: 'Rapid Deployment', desc: 'Quick implementation with minimal disruption to your operations' },
                { icon: '🔒', title: 'Secure & Compliant', desc: 'Industry-standard security with full regulatory compliance' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-3 font-inter">{item.title}</h4>
                  <p className="text-sm text-white/90 font-inter leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl font-inter"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all duration-300 font-inter"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
