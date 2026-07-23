import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Shield, 
  Network, 
  CreditCard, 
  Smartphone, 
  Truck,
  BarChart3,
  Wrench,
  MessageSquare,
  Phone,
  Package,
  Warehouse,
  Factory,
  Lock,
  TrendingUp,
  Zap
} from 'lucide-react';

export const AutomotiveApplicationsSection: React.FC = () => {
  const applications = [
    {
      icon: Settings,
      title: 'Dealer Management and Rating Systems',
      description: 'Comprehensive dealer performance tracking and management solutions',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Warranty Management Systems',
      description: 'Streamlined warranty processing and claim management',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Network,
      title: 'Service Parts Network Planning',
      description: 'Optimized parts distribution and inventory planning',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Dealer Credit Checks and Limits',
      description: 'Automated credit assessment and limit management',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Smartphone,
      title: 'Dealer Search Mobile Applications',
      description: 'Mobile apps for dealer location and service discovery',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and tracking',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Marketing, Sales, and After Sales Services',
      description: 'Integrated customer lifecycle management solutions',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Wrench,
      title: 'Vehicle Maintenance Services Management',
      description: 'Comprehensive maintenance scheduling and tracking',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Customer Satisfaction and Feedback Survey Applications',
      description: 'Real-time customer feedback and satisfaction monitoring',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Phone,
      title: 'Roadside Assistance Services',
      description: 'Emergency assistance and support coordination',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Package,
      title: 'Globally Distributed Order Management',
      description: 'Multi-region order processing and fulfillment',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Warehouse,
      title: 'Warehouse and Logistics Management',
      description: 'Automated warehouse operations and logistics optimization',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: Factory,
      title: 'Enterprise Manufacturing Intelligence',
      description: 'Smart manufacturing analytics and insights',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: Lock,
      title: 'Infrastructure Support and Security',
      description: 'Robust security and infrastructure management',
      color: 'from-slate-500 to-slate-600'
    },
    {
      icon: TrendingUp,
      title: 'Enterprise Performance Management',
      description: 'Business performance monitoring and optimization',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Zap,
      title: 'Real-time Integrations and Manufacturing Analytics',
      description: 'Live data integration and manufacturing insights',
      color: 'from-lime-500 to-lime-600'
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Application Areas We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have worked with our customers across various application areas including comprehensive 
            solutions that span the entire automotive ecosystem.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <app.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                {app.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {app.description}
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Automotive Solution?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team specializes in creating tailored solutions for unique automotive challenges. 
              Let's discuss your specific requirements.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};