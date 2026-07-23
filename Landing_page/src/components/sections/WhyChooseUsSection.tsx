import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Package, Users, Award, Globe } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Package,
      title: 'All-in-one services',
      description: 'From concept to delivery across digital platforms',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Customer-centric approach',
      description: 'We listen, adapt, and deliver exactly what you need',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Experienced professionals',
      description: 'Skilled designers, developers, and marketers',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Global service reach',
      description: 'Serving clients internationally',
      color: 'orange'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.4, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ 
            duration: 1, 
            type: "spring", 
            stiffness: 80,
            damping: 15,
            bounce: 0.4
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Why Choose Us
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Discover what makes Exytex Technologies the right partner for your digital transformation
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-16 h-16 ${
                reason.color === 'blue' ? 'bg-blue-100' :
                reason.color === 'green' ? 'bg-green-100' :
                reason.color === 'purple' ? 'bg-purple-100' :
                'bg-orange-100'
              } rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <reason.icon className={`w-8 h-8 ${
                  reason.color === 'blue' ? 'text-blue-600' :
                  reason.color === 'green' ? 'text-green-600' :
                  reason.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
              
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-3">Ready to Start Your Project?</h3>
          <p className="text-sm opacity-90 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our comprehensive digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <motion.button
              className="px-6 py-2.5 bg-white text-blue-600 rounded-lg font-medium hover:shadow-lg transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/saadinsides', '_blank')}
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/30 hover:bg-white/20 transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/our-work'}
            >
              View Our Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};