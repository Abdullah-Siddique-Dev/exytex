import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, TrendingUp, Zap, Award } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Risk Reduction',
    description: 'Successful applications that reduce operational and system risk',
  },
  {
    icon: TrendingUp,
    title: 'Business PoCs',
    description: 'Business-process specific PoCs for visibility and traceability',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Blockchain-powered automation and digitization accelerators',
  },
  {
    icon: Award,
    title: '27+ Years',
    description: 'Industry experience in delivering cutting-edge solutions',
  },
];

export const ServiceHighlights: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why Partner With Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ perspective: 1000 }}
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
