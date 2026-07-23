import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Shield, Headphones, Award, Lightbulb } from 'lucide-react';

export const GoogleCloudWhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: Search,
      title: '360-Degree Requirement Analysis',
      description: 'Assessment of existing IT framework, software/hardware dependencies, and user needs for hassle-free adoption and optimized TCO.'
    },
    {
      icon: Users,
      title: 'User Experience Optimization',
      description: 'Strategic cloud-evolution with post-implementation support for seamless, consistent, and enhanced user experience.'
    },
    {
      icon: Shield,
      title: 'Compliance and Governance',
      description: '100% adherence to company policies and compliance regulations. Solid documentation to support post-implementation governance.'
    },
    {
      icon: Headphones,
      title: 'Flexible Client Support',
      description: 'Custom support: SLA-based, blended offshore/onshore teams, fractional or ad-hoc support, knowledge transfer, and Google Cloud Platform consulting.'
    },
    {
      icon: Award,
      title: 'Domain Competency',
      description: 'Expertise in several GCP products coupled with a deep understanding of several industry-specific processes, for value-driven cloud adoption.'
    },
    {
      icon: Lightbulb,
      title: 'Technology CoE',
      description: 'Centers of excellence in a wide range of technologies to implement niche integrations and customizations.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Our Google Cloud Services?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience in legacy landscape and industry processes along with a broad range of technology capabilities helps us deliver a world-class cloud solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
