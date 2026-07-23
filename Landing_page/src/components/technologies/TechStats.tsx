import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Briefcase, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Expert Developers' },
  { icon: Award, value: '27+', label: 'Years Experience' },
  { icon: Briefcase, value: '1000+', label: 'Projects Delivered' },
  { icon: Globe, value: '50+', label: 'Countries Served' },
];

export const TechStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
