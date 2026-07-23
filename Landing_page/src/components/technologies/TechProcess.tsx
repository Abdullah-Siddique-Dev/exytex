import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, FileText, Code2, TestTube, Rocket, Headphones } from 'lucide-react';

const process = [
  { icon: Lightbulb, title: 'Discovery', description: 'Understanding your business needs and goals' },
  { icon: FileText, title: 'Planning', description: 'Creating detailed roadmap and architecture' },
  { icon: Code2, title: 'Development', description: 'Building with agile methodology' },
  { icon: TestTube, title: 'Testing', description: 'Rigorous QA and security testing' },
  { icon: Rocket, title: 'Deployment', description: 'Smooth launch and integration' },
  { icon: Headphones, title: 'Support', description: '24/7 maintenance and updates' },
];

export const TechProcess: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Our Development Process
          </h2>
          <p className="text-gray-400 text-base">Proven methodology for successful project delivery</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              <div className="w-14 h-14 mb-4 ml-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <step.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
