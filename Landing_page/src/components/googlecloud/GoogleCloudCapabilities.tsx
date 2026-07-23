import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, RefreshCw, Database } from 'lucide-react';

export const GoogleCloudCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Upload,
      title: 'Google Cloud Migration',
      description: 'Solutions for application migration, cloud data transfer, data transfer from online and on-premises systems to Google cloud.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Google Cloud AI and Machine Learning',
      description: 'Experience in GCP AI and ML suite—Dialogflow, AutoML Tables, AI building blocks, Auto ML, Video AI, Cloud Translation, etc.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: RefreshCw,
      title: 'App Migration',
      description: 'Expertise in different app migration strategies—forklift migration or hybrid migration and app re-engineering to build future-proof elastic app architecture.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Database,
      title: 'GCP Cloud SQL',
      description: 'Experience in custom implementation of Cloud SQL—the fully managed relational database service for MySQL, PostgreSQL, and SQL Server.',
      color: 'from-green-500 to-green-600'
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
            Our Google Cloud Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As a Google Cloud Platform Partner, we strategize for the framework that suits your IT environment, user skill level, and unique process goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-6`}>
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
              <p className="text-gray-300 leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
