import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Layers, Lightbulb, Code, Link } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Feasibility Assessment', description: 'Evaluate project viability' },
  { icon: Layers, title: 'Platform Identification', description: 'Select optimal blockchain' },
  { icon: Lightbulb, title: 'PoC Development', description: 'Build proof of concept' },
  { icon: Code, title: 'App Development', description: 'Full-scale development' },
  { icon: Link, title: 'Blockchain App Integration', description: 'Seamless integration' },
];

export const SmartContractRoadmap: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Roadmap for Smart Contract Development
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="inline-block p-6 bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-slate-950 z-10 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
