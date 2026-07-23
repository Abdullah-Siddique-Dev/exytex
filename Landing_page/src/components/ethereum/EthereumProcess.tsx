import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, FileText, Code2, TestTube, Rocket, Headphones } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Consultation', description: 'Understanding your blockchain requirements and goals' },
  { icon: FileText, title: 'Planning', description: 'Designing architecture and smart contract specifications' },
  { icon: Code2, title: 'Development', description: 'Building your Ethereum application with best practices' },
  { icon: TestTube, title: 'Testing', description: 'Rigorous testing and security audits' },
  { icon: Rocket, title: 'Deployment', description: 'Launching on Ethereum mainnet or testnet' },
  { icon: Headphones, title: 'Support', description: 'Ongoing maintenance and optimization' },
];

export const EthereumProcess: React.FC = () => {
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
          <p className="text-gray-400 text-base">From concept to deployment, we guide you every step of the way</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20"
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
