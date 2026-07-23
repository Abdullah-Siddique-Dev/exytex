import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Users, Zap } from 'lucide-react';

export const AboutExytexSection: React.FC = () => {
  return (
    <section id="exytex-intro" className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-medium"
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                About Exytex Technologies
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight"
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transforming Ideas Into Digital Reality
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-base text-blue-900 leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, scale: 0.7, rotateX: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 18,
                  bounce: 0.2
                }}
              >
                Because we really love and feel passion for what we do. We always seek the benefit and satisfaction of our clients, 
                through personalized advice and quality in all our developments. Our web developers work in a single office space 
                and are a well-coordinated team. As a leading Software house in Pakistan, We provide clients with all types of 
                services for website creation, increase SEO traffic, conversion optimization, Logos and Icons, and Internet resources 
                modernization.
              </motion.p>

              {/* Key Points */}
              <motion.div
                className="grid sm:grid-cols-2 gap-4 pt-4"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ 
                  duration: 0.9, 
                  type: "spring", 
                  stiffness: 80,
                  damping: 16,
                  bounce: 0.3
                }}
              >
                {[
                  { icon: CheckCircle, title: 'Passion & Quality', desc: 'We love what we do' },
                  { icon: Users, title: 'Coordinated Team', desc: 'Expert developers' },
                  { icon: Zap, title: 'Complete Solutions', desc: 'All-in-one services' },
                  { icon: Sparkles, title: 'Best Services', desc: 'Industry leading' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-blue-200 hover:border-blue-400 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.3, rotateY: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ 
                      duration: 0.7, 
                      type: "spring", 
                      stiffness: 120,
                      damping: 20,
                      bounce: 0.25,
                      delay: index * 0.15
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-blue-900 mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-blue-700" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Software Development Technologies"
                    className="w-full h-[400px] md:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-blue-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700 mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                    500+
                  </div>
                  <div className="text-xs text-blue-600" style={{ fontFamily: '"Inter", sans-serif' }}>
                    Projects
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-blue-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700 mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                    5.00
                  </div>
                  <div className="text-xs text-blue-600" style={{ fontFamily: '"Inter", sans-serif' }}>
                    Rating
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
