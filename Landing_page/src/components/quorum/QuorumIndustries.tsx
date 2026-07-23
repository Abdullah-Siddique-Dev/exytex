import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Building2, Vote, CheckCircle, Heart, Package, ShoppingCart, Gamepad2, Dices, TrendingUp } from 'lucide-react';

const industries = [
  { icon: Shield, title: 'Insurance', description: 'Blockchain-backed Life Settlement for secure, transparent policy sales' },
  { icon: Building2, title: 'Banking & Finance', description: 'Smart contract-based syndicate loan settlement and automation' },
  { icon: Vote, title: 'Proxy Voting', description: 'Private Ethereum + Quorum solution enabling decentralized shareholder voting' },
  { icon: CheckCircle, title: 'Digital Verification', description: 'Secure Blockchain folder for verifiable digital credentials' },
  { icon: Heart, title: 'Healthcare', description: 'Smart contract-based clinical trial management (BlockTrial)' },
  { icon: Package, title: 'Supply Chain', description: 'Full transparency and interoperability across goods and logistics' },
  { icon: ShoppingCart, title: 'Retail & E-Commerce', description: 'Tokenized payments, store analytics, and crypto-based loyalty programs' },
  { icon: Gamepad2, title: 'Gaming', description: 'Blockchain-powered loyalty platform integrated with CRM' },
  { icon: Dices, title: 'Online Gambling', description: 'Decentralized DApp with Ethereum Smart Contract and audited RNG' },
  { icon: TrendingUp, title: 'Cryptocurrency Trading', description: 'Secure, traceable crypto-trading platform for B2B and B2C' },
];

export const QuorumIndustries: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Industries & Use Cases</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{industry.title}</h3>
              <p className="text-gray-400 text-xs">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
