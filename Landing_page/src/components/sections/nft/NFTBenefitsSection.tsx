import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Eye, Globe, Shield, Check } from 'lucide-react';

const benefits = [
  { icon: Award, title: 'Ownership', description: 'Each NFT is unique, indivisible, and has a single owner' },
  { icon: Eye, title: 'Authenticity & Transparency', description: 'All NFTs are verifiable and immutable on blockchain' },
  { icon: Globe, title: 'Portability', description: 'NFTs can be transferred globally and securely' },
  { icon: Shield, title: 'Security', description: 'Immutable ledger prevents forgery, double-spending, or transaction loss' },
];

const NFTBenefitsSection: React.FC = () => {
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
            Benefits of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              NFTs
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30 text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>

                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Check className="w-6 h-6 text-[#6C63FF]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTBenefitsSection;
