import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, Gauge, Timer, Handshake, Target } from 'lucide-react';

export const ValueDeliveredSection: React.FC = () => {
  const values = [
    {
      icon: LayoutDashboard,
      title: 'Comprehensive Solution',
      description: 'A comprehensive solution to manage funds, sales, inventory, and reporting on one platform'
    },
    {
      icon: TrendingUp,
      title: 'Improved Productivity',
      description: 'Integration of data improved synergies across business units leading to improved productivity and growth'
    },
    {
      icon: Gauge,
      title: 'Boosted Efficiency',
      description: 'Real-time insights into sales, finances, and grants helped eradicate operational bottlenecks and boosted overall efficiency'
    },
    {
      icon: Timer,
      title: 'Faster Decision-Making',
      description: 'Advanced reporting capabilities reduced the latency in decision-making'
    },
    {
      icon: Handshake,
      title: 'Better Vendor Relations',
      description: 'Automated workflows allowed for timely payments and seamless communication with suppliers'
    },
    {
      icon: Target,
      title: 'Optimized Fundraising',
      description: 'Better understanding of donor behavior enabled optimization of fundraising initiatives'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.1, rotateX: 90 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ 
            duration: 1, 
            type: "spring", 
            stiffness: 90,
            damping: 20
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Value Delivered
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            The implementation of Microsoft Dynamics 365 transformed the organization's operations and delivered significant value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-linear-to-br from-green-50 to-blue-50 border border-green-100 rounded-xl p-5 hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 group-hover:scale-110 transition-all">
                <value.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-white mb-6">
            Transformation Results
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '100%', label: 'Data Integration' },
              { value: '50%', label: 'Time Saved' },
              { value: '40%', label: 'Efficiency Boost' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-xs text-blue-100">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
