import React from 'react';
import { motion } from 'framer-motion';

export const WebDevQualitySection: React.FC = () => {
  const qualityChecks = [
    {
      title: "Code Quality",
      description: "Clean, maintainable code following industry best practices",
      icon: "💻",
      color: "blue"
    },
    {
      title: "Accessibility",
      description: "WCAG compliant design ensuring accessibility for all users",
      icon: "♿",
      color: "green"
    },
    {
      title: "Speed Optimization",
      description: "Fast loading times and optimized performance metrics",
      icon: "⚡",
      color: "yellow"
    },
    {
      title: "Functionality Testing",
      description: "Comprehensive testing of all features and user flows",
      icon: "🔧",
      color: "purple"
    },
    {
      title: "Mobile Adaptation",
      description: "Responsive design across all devices and screen sizes",
      icon: "📱",
      color: "indigo"
    },
    {
      title: "Security Audit",
      description: "Robust security measures and vulnerability assessments",
      icon: "🔒",
      color: "red"
    }
  ];

  const teamStats = [
    { number: "50+", label: "Expert Developers", icon: "👨‍💻" },
    { number: "10+", label: "Years Experience", icon: "📅" },
    { number: "Pakistan", label: "Best Software House", icon: "🏆" },
    { number: "100%", label: "Quality Guarantee", icon: "✅" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              QUALITY ASSURANCE & TESTING
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We conduct strict quality control through comprehensive testing that guarantees perfect 
              functionality before launch. Your website only goes live when it's completely ready and tested.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Quality Checks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {qualityChecks.map((check, index) => (
              <motion.div
                key={check.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${check.color}-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                    {check.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {check.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {check.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Excellence Section */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Professional Team in Pakistan
                </h3>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  We are one of the best software houses in Pakistan, with a complete team of 
                  professional designers and developers. Our experienced team stays up-to-date 
                  with the latest trends in web development services.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm font-medium">Latest Technologies</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm font-medium">Industry Expertise</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm font-medium">Customer Satisfaction</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quality Promise */}
          <motion.div
            className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Quality Guarantee
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We guarantee that your website will only come to light when it is completely ready, 
                thoroughly tested, and meets all quality standards. Every project undergoes our 
                rigorous quality assurance process before delivery.
              </p>
              
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Quality Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">Bugs at Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
