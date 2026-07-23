import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Users, Search, FileCheck, Clock, Building, Lightbulb } from 'lucide-react';

const features = [
  { icon: Users, title: 'In-house Smart Contract Team', description: 'Expert developers with blockchain expertise' },
  { icon: Search, title: '360° Requirement Analysis', description: 'Comprehensive assessment of your needs' },
  { icon: FileCheck, title: 'Compliance and Governance', description: 'Adherence to regulatory standards' },
  { icon: Clock, title: '24×7 Client Assistance', description: 'Round-the-clock support' },
  { icon: Building, title: 'Industry-Sector Competency', description: 'Domain expertise across industries' },
  { icon: Lightbulb, title: 'Technology CoE', description: 'Center of Excellence for innovation' },
];

export const SmartContractWhyChoose: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950" style={{ y }} />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80')] bg-cover bg-center bg-fixed opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Why Choose Damco</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
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
