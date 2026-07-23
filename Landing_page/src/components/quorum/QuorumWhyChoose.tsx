import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Search, FileCheck, Clock, Building, Lightbulb } from 'lucide-react';

const features = [
  { icon: Users, title: 'In-house Quorum Team', description: 'Experienced professionals available for short or long-term engagements' },
  { icon: Search, title: '360-Degree Requirement Analysis', description: 'In-depth audit of existing IT systems for seamless adoption' },
  { icon: FileCheck, title: 'Compliance and Governance', description: 'Strict adherence to security, compliance, and documentation standards' },
  { icon: Clock, title: '24×7 Client Assistance', description: 'Continuous post-deployment support and stability testing' },
  { icon: Building, title: 'Industry-Sector Competency', description: 'Domain expertise across diverse industries' },
  { icon: Lightbulb, title: 'Technology CoE', description: 'Centers of excellence to deliver niche integrations and enterprise-grade solutions' },
];

export const QuorumWhyChoose: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Damco's Quorum Development Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
