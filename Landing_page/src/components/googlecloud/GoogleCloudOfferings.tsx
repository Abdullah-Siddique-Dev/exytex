import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Users, Layers, Database, Settings } from 'lucide-react';

export const GoogleCloudOfferings: React.FC = () => {
  const offerings = [
    {
      icon: Cloud,
      title: 'GCP Consulting Services',
      description: 'Google Cloud consulting for infrastructure/application modernization, productivity, and collaboration solutions. Extensive audit of app architecture and IT framework, PoC for SaaS business platforms, and more.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'GCP Development Services',
      description: 'Development of GCP applications—web apps, SaaS products, mobile app backend, data analytics applications, enterprise applications, cloud-native solutions for legacy modernization, application performance optimization, etc.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Google G Suite Services',
      description: 'Full-stack services to deliver Google deployments along with strategic change enablement to maximize user adoption. Custom solutions on G Suite for Business, Google Cloud Platform, Google for IoT, Cloud Sync, CloudFactor, etc.',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Layers,
      title: 'GCP Integration Services',
      description: 'Custom and third-party integrations to sync ERP, CRM, or other applications to centralize information across business operations. Solutions for process automation, BI and Analytics, collaboration, warehousing, and more.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Database,
      title: 'GCP Migration Services',
      description: 'Peer-proven process for cloud readiness assessment, framing migration strategy, building and deploying risk-free solutions, cloud architecture design, and post-migration support. Legacy to cloud, cloud to cloud, on-premise database to cloud, etc.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Google Cloud Managed Services',
      description: 'SLA-driven support and maintenance, auto-scaling and backup, app and infrastructure monitoring, monitoring tools evaluation and deployment, configuring Google suite, and management of ongoing operation of workloads.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Google Cloud Offerings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage the Google Cloud product suite to deploy industry-specific solutions for business agility and operational efficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${offering.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <offering.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{offering.title}</h3>
              <p className="text-gray-300 leading-relaxed">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
