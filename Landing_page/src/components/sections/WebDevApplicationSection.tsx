import React from 'react';
import { motion } from 'framer-motion';

export const WebDevApplicationSection: React.FC = () => {
  const developmentTypes = [
    {
      title: "Custom Web Development",
      description: "Industry-focused web development that adapts to your business needs with consistent user experience across all platforms.",
      features: ["Tailored Solutions", "Brand Reflection", "Scalable Architecture"],
      icon: "🎯"
    },
    {
      title: "E-Commerce Development", 
      description: "Advanced experience in WooCommerce with single or multi-vendor e-commerce development and third-party integrations.",
      features: ["WooCommerce Expert", "Multi-vendor Support", "Payment Integration"],
      icon: "🛍️"
    },
    {
      title: "Mobile Backend & API",
      description: "Robust mobile backends and APIs that provide the backbone for your applications with secure data management.",
      features: ["RESTful APIs", "Database Management", "Cloud Integration"],
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
              SOFTWARE APPLICATION DEVELOPER
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our creative team of UI/UX designers and developers creates web applications that stand out online. 
              We develop simple, amazing, and feature-rich solutions that enhance user experience and keep your 
              business present on the internet 24/7.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Development Types Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {developmentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-6">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Business Benefits Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Cost-Effective Solutions with Real ROI
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Exytex provides cost-effective website development solutions that improve your business ROI. 
                  We offer turnkey SaaS website solutions, going through all major design stages from UX/UI 
                  design to development, testing, and responsive adaptation across all devices.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">ROI Focused</h4>
                    <p className="text-sm text-gray-600">Measurable business impact</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">24/7 Online</h4>
                    <p className="text-sm text-gray-600">Always accessible</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Our Development Process</h4>
                  <div className="space-y-4">
                    {[
                      { step: "01", title: "Design & UX/UI", status: "completed" },
                      { step: "02", title: "Development", status: "completed" },
                      { step: "03", title: "Testing & QA", status: "completed" },
                      { step: "04", title: "Responsive Design", status: "active" },
                      { step: "05", title: "Launch", status: "pending" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          item.status === 'completed' ? 'bg-green-100 text-green-600' :
                          item.status === 'active' ? 'bg-blue-100 text-blue-600' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {item.step}
                        </div>
                        <span className={`text-sm ${
                          item.status === 'pending' ? 'text-gray-400' : 'text-gray-700'
                        }`}>
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client Satisfaction */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: "Corporate Clients", value: "500+" },
                { label: "SMEs & Startups", value: "1000+" },
                { label: "Client Satisfaction", value: "99%" },
                { label: "Project Success", value: "100%" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
