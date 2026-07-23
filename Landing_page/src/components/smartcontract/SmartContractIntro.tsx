import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Globe, Zap, Shield } from 'lucide-react';

const stats = [
  { icon: CheckCircle, label: 'Cross-industry expertise' },
  { icon: Zap, label: 'Proven use cases' },
  { icon: Shield, label: 'Workflow automation' },
  { icon: Globe, label: 'Multi-platform support' },
];

export const SmartContractIntro: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Transform Your Business with Smart Contracts
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              Smart contracts are self-executing digital agreements that automatically enforce and execute 
              the terms of a contract when predefined conditions are met. Built on blockchain technology, 
              they eliminate intermediaries, reduce costs, and ensure transparency and security.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Our expert team specializes in developing robust smart contracts across multiple platforms 
              including Ethereum, Hyperledger, EOS, Hedera, and more. We help businesses automate workflows, 
              validate transactions, and build trust in their digital ecosystems.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white/5 backdrop-blur-md rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Globe Animation */}
          <motion.div
            className="relative h-96 lg:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80">
              {/* Rotating Globe Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Orbiting Nodes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-8px',
                    marginLeft: '-8px',
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 8) * 150,
                    y: Math.sin((i * Math.PI * 2) / 8) * 150,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
