import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';
import { EnhancedButton } from '../ui/EnhancedButton';
import { ArrowRight } from 'lucide-react';



export const ProfessionalAboutSection: React.FC = () => {

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeIn" className="text-center mb-10">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            About Exytex
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Software Development
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Services Excellence
            </span>
          </h2>
        </AnimatedSection>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Placeholder for team/workspace image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-400 flex items-center justify-center relative overflow-hidden">
                {/* Professional Team Background Image */}
                <motion.div 
                  className="absolute inset-0 transition-all duration-700 group-hover:scale-105"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=faces"
                    alt="Professional team working together"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-85 filter brightness-110"
                  />
                </motion.div>
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 via-indigo-300/30 to-purple-400/40 transition-all duration-700 group-hover:from-blue-300/30 group-hover:via-indigo-300/20 group-hover:to-purple-400/30" />
                <div className="relative z-10 text-center text-white p-8">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    💻
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Our Expert Team</h3>
                  <p className="text-lg opacity-90">Building Digital Excellence</p>
                </div>
                
                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-3xl border-4 border-white/20" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Quality Assured</p>
                  <p className="text-sm text-gray-600">100% Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Ideas Into
              <span className="block text-blue-600">Digital Reality</span>
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating 
              exceptional digital experiences. Our mission is to transform innovative ideas 
              into powerful, scalable solutions that drive business success.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Cutting-edge technology solutions',
                'Agile development methodology',
                'End-to-end project management',
                '24/7 technical support'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <EnhancedButton
              scrollTo="contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl"
            >
              Learn More About Us
            </EnhancedButton>
          </motion.div>
        </div>




      </div>
    </section>
  );
};
