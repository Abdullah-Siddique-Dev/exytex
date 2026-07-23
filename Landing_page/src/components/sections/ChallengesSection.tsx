import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Database, Users, DollarSign } from 'lucide-react';

export const ChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: Database,
      title: 'Lack of Integration',
      description: 'No integrated platform to manage operations across various business units'
    },
    {
      icon: AlertCircle,
      title: 'Delayed Decision-Making',
      description: 'Inability to monitor operations in real-time, leading to delayed decision-making'
    },
    {
      icon: Users,
      title: 'Vendor Management',
      description: 'Lack of a vendor management solution to simplify collaboration with suppliers'
    },
    {
      icon: DollarSign,
      title: 'Fund Tracking',
      description: 'No platform to track funds and grants and cultivate lasting relationships with donors'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.3, rotateZ: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 140,
            damping: 22
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            The Challenge
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            The non-profit organization faced issues in managing multiple disparate systems for accounting, sales, asset management, invoicing, and reporting. As these systems weren't integrated with each other, the organization struggled to get a unified view of its business operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-xl p-5 hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <challenge.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {challenge.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
