import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export const AboutStatsSection: React.FC = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "10+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};