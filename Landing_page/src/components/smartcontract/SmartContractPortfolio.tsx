import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, CheckCircle2, Sparkles } from 'lucide-react';

const portfolio = [
  { icon: Code2, title: 'Ethereum Smart Contract Development', description: 'Enterprise-grade Ethereum solutions' },
  { icon: CheckCircle2, title: 'Successful Use Cases', description: 'Proven implementations across industries' },
  { icon: Sparkles, title: '360° Benefits of Smart Contracts', description: 'Complete automation and transparency' },
];

export const SmartContractPortfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-blue-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Our Blockchain Smart Contract Development Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
