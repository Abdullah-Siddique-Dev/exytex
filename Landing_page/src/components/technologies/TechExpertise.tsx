import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';

const expertise = [
  { icon: Code, title: 'Full-Stack Development', description: 'End-to-end web and application development with modern frameworks' },
  { icon: Smartphone, title: 'Mobile Solutions', description: 'Native and cross-platform mobile apps for iOS and Android' },
  { icon: Cloud, title: 'Cloud Architecture', description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud' },
  { icon: Database, title: 'Data Engineering', description: 'Big data processing, analytics, and database optimization' },
  { icon: Shield, title: 'Cybersecurity', description: 'Enterprise-grade security solutions and compliance' },
  { icon: Zap, title: 'DevOps & Automation', description: 'CI/CD pipelines, containerization, and infrastructure as code' },
];

export const TechExpertise: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Technical Expertise
          </h2>
          <p className="text-gray-400 text-base">Comprehensive technology solutions across all domains</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
