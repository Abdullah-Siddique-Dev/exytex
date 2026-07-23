import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Building2, Vote, CheckCircle, Heart, Package, ShoppingCart, Gamepad2, Dices, TrendingUp } from 'lucide-react';

const industries = [
  { icon: Shield, title: 'Insurance', description: 'Automated claims processing and fraud detection' },
  { icon: Building2, title: 'Banking & Finance', description: 'Secure transactions and digital assets' },
  { icon: Vote, title: 'Proxy Voting', description: 'Transparent and tamper-proof voting systems' },
  { icon: CheckCircle, title: 'Digital Verification', description: 'Identity and document verification' },
  { icon: Heart, title: 'Healthcare', description: 'Patient data management and medical records' },
  { icon: Package, title: 'Supply Chain', description: 'End-to-end tracking and transparency' },
  { icon: ShoppingCart, title: 'Retail & E-Commerce', description: 'Loyalty programs and payments' },
  { icon: Gamepad2, title: 'Gaming', description: 'NFTs and in-game asset ownership' },
  { icon: Dices, title: 'Online Gambling', description: 'Provably fair gaming platforms' },
  { icon: TrendingUp, title: 'Cryptocurrency Trading', description: 'Decentralized exchanges and DeFi' },
];

export const EthereumPortfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-gray-400 text-lg">Delivering blockchain solutions across diverse sectors</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10, rotateY: 5 }}
              style={{ perspective: 1000 }}
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/20 group-hover:to-cyan-600/20 transition-all duration-300" />
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-400">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
