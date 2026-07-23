import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tools = [
  { name: 'Truffle', logo: '🔧' },
  { name: 'Remix', logo: '⚡' },
  { name: 'Ganache', logo: '🍫' },
  { name: 'Solidity', logo: '📝' },
  { name: 'Node.js', logo: '🟢' },
  { name: 'React', logo: '⚛️' },
  { name: 'AWS', logo: '☁️' },
  { name: 'Azure', logo: '🔷' },
  { name: 'Web3.js', logo: '🌐' },
  { name: 'Hardhat', logo: '⛑️' },
  { name: 'MetaMask', logo: '🦊' },
  { name: 'IPFS', logo: '📦' },
];

export const ToolsTechnologies: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-gray-400 text-lg">Powered by industry-leading blockchain tools</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              style={{ perspective: 1000 }}
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tool.logo}
                  </div>
                  <h3 className="text-white font-semibold">{tool.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
