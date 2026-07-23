import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Users, Award } from 'lucide-react';

export const CompanyOverviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.7, rotateX: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 120,
            damping: 20
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            About Exytex Technologies
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Your Trusted IT & Software Solutions Partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Company Overview
            </h3>
            <div className="w-16 h-1 bg-blue-600 mb-6"></div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              At Exytex Technologies, we are a solution-driven team offering premium Web Development, Digital Marketing, SEO, Mobile App Development, and Software Services — all designed to help your business grow online. We turn ideas into high-performing digital products tailored to your goals and audience.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              We believe that brand interaction is key in communication. Real innovation and a positive customer experience are at the heart of everything we do. We deliver trustworthy, high-quality services — no fake products, no shortcuts. The customer comes first; your needs and success inspire every solution we build.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
              <p className="text-sm text-gray-700 font-medium">
                Exytex Technologies is a registered Software House in Pakistan with a global mindset. We cater to clients worldwide with comprehensive software, web, and digital marketing services — all under one roof.
              </p>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Building2, number: '6+', label: 'Years Experience', color: 'blue' },
              { icon: Globe, number: '50+', label: 'Global Clients', color: 'green' },
              { icon: Users, number: '100+', label: 'Projects Delivered', color: 'purple' },
              { icon: Award, number: '24/7', label: 'Support Available', color: 'orange' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-all text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${stat.color === 'blue' ? 'bg-blue-100' : stat.color === 'green' ? 'bg-green-100' : stat.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.color === 'blue' ? 'text-blue-600' : stat.color === 'green' ? 'text-green-600' : stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};