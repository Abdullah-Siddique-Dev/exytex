import React from 'react';
import { motion } from 'framer-motion';

export const WebDevServicesSection: React.FC = () => {
  const services = [
    {
      category: "Development",
      title: "Custom Web Development",
      description: "Industry-focused web development that adapts to your business needs with consistent user experience across all platforms.",
      features: ["Tailored Solutions", "Scalable Architecture", "Modern Technologies"],
      icon: "💻",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      category: "E-Commerce",
      title: "Online Store Development",
      description: "Advanced e-commerce solutions with WooCommerce expertise, single or multi-vendor platforms, and third-party integrations.",
      features: ["WooCommerce Expert", "Multi-vendor Support", "Payment Integration"],
      icon: "🛒",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      category: "Backend",
      title: "Mobile Backend & API",
      description: "Robust mobile backends and APIs that provide the backbone for your applications with secure data management.",
      features: ["RESTful APIs", "Database Management", "Cloud Integration"],
      icon: "⚡",
      gradient: "from-green-600 to-green-700"
    }
  ];

  const developmentSteps = [
    { step: "01", title: "Planning", description: "Strategic analysis and project roadmap" },
    { step: "02", title: "Design", description: "UI/UX design and user experience" },
    { step: "03", title: "Development", description: "Clean code and modern technologies" },
    { step: "04", title: "Testing", description: "Quality assurance and bug fixing" },
    { step: "05", title: "Launch", description: "Deployment and ongoing support" }
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
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              SOFTWARE DEVELOPMENT SERVICES
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Our software development services are designed to create, design, and implement various 
              types of software solutions that fulfill specific business processes and objectives.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-2xl font-bold text-gray-900 text-center mb-12"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Our Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {developmentSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    {index < developmentSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-0.5"></div>
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">{service.category}</span>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: '"Inter", sans-serif' }}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-8 opacity-90" style={{ fontFamily: '"Inter", sans-serif' }}>
              We are one of the best software houses in Pakistan with a complete team of professional designers and developers.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
