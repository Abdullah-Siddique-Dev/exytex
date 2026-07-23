import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  Users, 
  Target, 
  ShoppingCart, 
  Truck,
  BarChart3,
  Shield
} from 'lucide-react';

export const AutomotiveAboutSection: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improve Business Efficiency',
      description: 'Streamline operations and boost profitability'
    },
    {
      icon: Clock,
      title: 'Accelerate Time to Market',
      description: 'Faster product development and launch cycles'
    },
    {
      icon: Users,
      title: 'Innovate & Collaborate',
      description: 'Enhanced partnerships with suppliers and dealers'
    },
    {
      icon: Target,
      title: 'New Market Penetration',
      description: 'Expand reach and capture new opportunities'
    },
    {
      icon: ShoppingCart,
      title: 'Cost Effective Products',
      description: 'Build quality solutions within budget'
    },
    {
      icon: Truck,
      title: 'Optimize Supply Chain',
      description: 'Streamline logistics and inventory management'
    },
    {
      icon: BarChart3,
      title: 'Improve Brand Image',
      description: 'Enhanced customer experience and satisfaction'
    },
    {
      icon: Shield,
      title: 'Build Customer Loyalty',
      description: 'Strengthen relationships and retention'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Transforming Automotive Businesses
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our services help you improve business efficiency, accelerate time to market, and build customer loyalty through innovative technology solutions.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Let's discuss how our solutions can drive your success
            </p>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};