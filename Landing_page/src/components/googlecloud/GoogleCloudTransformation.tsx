import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code2, Server, Wrench } from 'lucide-react';

export const GoogleCloudTransformation: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Cloud Strategy and Assessment',
      description: 'Deep audit of application estate and IT framework for transformation roadmap, gap and readiness check, cloud architecture, capacity planning and space forecasting, and risk assessment.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code2,
      title: 'Cloud Application Services',
      description: 'Re-factoring and re-platforming to integrate applications in the cloud, reengineering to build cloud-native applications, replacement of apps with SaaS, or managed ISV applications on the public cloud.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure Services',
      description: 'Data center modernization with Infrastructure as a Service (IaaS), infrastructure migration, hybrid cloud infrastructure, risk mitigation and disaster recovery.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wrench,
      title: 'Legacy Modernization',
      description: 'Increase productivity, scalability, and performance—Platform as a Service (PaaS), API-based app modernization, Legacy Application Migration, Desktop Application Migration, etc.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Business with Risk-free Cloud Migration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We put cloud-powered competency right at the core of the client organization, establishing a sustainable competitive advantage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
