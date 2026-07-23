import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layers, Users, Building } from 'lucide-react';

const reasons = [
  { icon: Code, title: 'Core Blockchain Development Experience', description: 'Build NFT portals compliant with industry standards' },
  { icon: Layers, title: 'Expertise Across Multiple Blockchain Platforms', description: 'Neo, Ethereum, Hedera Hashgraph, Stellar, MultiChain, and more' },
  { icon: Users, title: 'On-Demand Agile Developers', description: 'Pay-as-you-grow, cost-efficient, timely delivery' },
  { icon: Building, title: 'Cross-Industry Expertise', description: 'Financial services, media, retail, gaming, and entertainment' },
];

const NFTWhyChooseSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-[#0B3D91] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Us
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30">
                <motion.div
                  className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTWhyChooseSection;
