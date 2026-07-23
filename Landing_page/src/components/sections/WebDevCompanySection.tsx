import React from 'react';
import { motion } from 'framer-motion';

export const WebDevCompanySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                <h2 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
                >
                  WE ARE YOUR WEB DEVELOPMENT COMPANY
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}>
                  Exytex is a full-time web development company specialized in web development, 
                  custom programming, and template-based web pages. We really love and feel 
                  passion for what we do.
                </p>
                
                <p style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}>
                  We always seek the benefit and satisfaction of our clients, through personalized 
                  advice and quality in all our developments. We are continuously researching and 
                  testing new technologies with the aim of improving the quality of our developments 
                  and services.
                </p>

                <p style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}>
                  We develop quality websites always thinking of two potential profiles: people and 
                  search engines. We carry out a complete analysis of your sector that allows us to 
                  know what type of website you need, and from there we define the information 
                  architecture, content strategy, and friendly URLs.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  'Custom Programming',
                  'SEO Optimized',
                  'Quality Assurance',
                  'Client Satisfaction'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Minimal Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="w-full h-full bg-repeat"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  ></div>
                </div>

                {/* Tech Stack Cards */}
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {[
                    { name: 'React', icon: '⚛️', color: 'bg-blue-100' },
                    { name: 'Node.js', icon: '🟢', color: 'bg-green-100' },
                    { name: 'MongoDB', icon: '🍃', color: 'bg-emerald-100' },
                    { name: 'TypeScript', icon: 'TS', color: 'bg-indigo-100' }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className={`${tech.color} rounded-xl p-4 text-center`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="text-sm font-medium text-gray-700">{tech.name}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  {[
                    { number: '200+', label: 'Projects' },
                    { number: '99%', label: 'Success' },
                    { number: '24/7', label: 'Support' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xl font-bold text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
