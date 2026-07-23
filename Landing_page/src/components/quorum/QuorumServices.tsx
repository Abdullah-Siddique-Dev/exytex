import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Code, FileCheck, RefreshCw, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Quorum Consulting Services',
    description: 'Experience-driven strategy and blueprint for Quorum development and implementation with focus on operational efficiency.',
  },
  {
    icon: Code,
    title: 'Quorum App Development',
    description: 'Development of decentralized applications on public Ethereum Mainnet or a private permissioned network.',
  },
  {
    icon: FileCheck,
    title: 'Smart Contracts',
    description: 'Development and implementation of Smart Contracts – Single, Shared Custody, and Consortium Based Ownership.',
  },
  {
    icon: RefreshCw,
    title: 'Blockchain App Porting',
    description: 'Secure migration of mobile/web or Ethereum apps for high performance and customization.',
  },
  {
    icon: Shield,
    title: 'Smart Contracts Audit',
    description: 'Deep code scrutiny to identify bugs, vulnerabilities, and performance issues before or after deployment.',
  },
  {
    icon: Headphones,
    title: 'Quorum App Support',
    description: 'On-demand expert support for architecture, audit, optimization, and ongoing development.',
  },
];

export const QuorumServices: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Quorum Development Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We help clients adopt Blockchain-powered solutions that push the boundaries of privacy, 
            security, scalability, and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
