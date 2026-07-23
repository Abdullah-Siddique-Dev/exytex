import React from 'react';
import { motion } from 'framer-motion';

export const WebDevDeveloperSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Soobz Malina',
      role: 'Founder, Soobz Online Clothing',
      quote: 'Exytex developers delivered exceptional results. They built our online clothing brand with WordPress and WooCommerce perfectly.',
      rating: 5
    },
    {
      name: 'Brjiesh',
      role: 'Tech Lead, Save Sales',
      quote: 'Professional Laravel development team with great expertise. The custom admin panel with MySQL and Bootstrap exceeded expectations!',
      rating: 5
    },
    {
      name: 'Arismara',
      role: 'Founder, Ground Fitness App',
      quote: 'Cost-effective Android development that improved our business significantly. The Health APIs integration works flawlessly. 24/7 support is excellent.',
      rating: 5
    }
  ];

  const customWebFeatures = [
    'Industry-focused web development that adapts to your business needs',
    'Consistent user experience on all web, mobile, and hybrid digital platforms',
    'Highly scalable solution that can accommodate business growth'
  ];

  const ecommerceFeatures = [
    'Advanced experience in WooCommerce',
    'Single or multi-vendor e-commerce development',
    'Integrations with third-party software providers'
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
            <h2 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
            >
              SOFTWARE APPLICATION DEVELOPER
            </h2>
            <p 
              className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
            >
              Software services demand the best software developers. Our creative team of UI/UX designers 
              creates web applications that stand out online. We develop simple, amazing, and feature-rich 
              solutions that enhance user experience.
            </p>
          </motion.div>

          {/* Flying Testimonials */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }}
                  whileHover={{ y: -15, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Custom Web Development */}
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
              >
                Custom Web Development
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In business, you try to solve problems. Each problem requires a specific solution. 
                That's why you need custom web development that reflects your brand essence.
              </p>
              <div className="space-y-3">
                {customWebFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Development of Online Stores */}
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
              >
                Development of Online Stores
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Developing an e-commerce website requires experience, careful decision-making, 
                thoughtful design, and plenty of technology. Exytex has all this and much more.
              </p>
              <div className="space-y-3">
                {ecommerceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Backend & API */}
          <motion.div
            className="bg-blue-50 rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
                >
                  Mobile Backend and API
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We develop mobile backends and APIs that help you take your business anywhere. 
                  For any mobile application, its backend is like the backbone - providing structure, 
                  network infrastructure, data management, and web services.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'RESTful APIs', icon: '🔗' },
                  { name: 'Database Management', icon: '💾' },
                  { name: 'File Storage', icon: '📁' },
                  { name: 'Web Services', icon: '🌐' }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="bg-white rounded-lg p-4 text-center shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{item.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testing Section */}
          <motion.div
            className="bg-green-50 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
              >
                TESTING & QUALITY ASSURANCE
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We carry out strict quality control through comprehensive testing: coding, accessibility, 
                speed load, functionality, mobile adaptation, and security. We guarantee perfect 
                functioning before launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Code Quality', icon: '💻', desc: 'Clean, maintainable code' },
                { title: 'Performance', icon: '⚡', desc: 'Fast loading speeds' },
                { title: 'Security', icon: '🔒', desc: 'Secure & protected' },
                { title: 'Mobile Ready', icon: '📱', desc: 'All device compatibility' },
                { title: 'Accessibility', icon: '♿', desc: 'WCAG compliant' },
                { title: '100% Ready', icon: '✅', desc: 'Launch ready guarantee' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center mt-8 text-blue-600 font-medium"
              style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We are one of the best software houses in Pakistan with a complete team of professional designers and developers.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
