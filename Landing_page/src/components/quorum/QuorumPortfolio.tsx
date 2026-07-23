import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const portfolio = [
  { title: 'Development Tools', items: ['GoQuorum', 'Tessera', 'EthSigner', 'Hyperledger Besu', 'Orion'] },
  { title: 'Backend Technologies', items: ['JavaScript', 'JAVA', 'PHP', 'Solidity', 'Node.js', 'Golang'] },
  { title: 'Front-End Technologies', items: ['jQuery', 'React', 'Angular.js', 'Bootstrap'] },
  { title: 'Cloud Coverage', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud'] },
  { title: 'Testing Framework', items: ['Caliper', 'ELK Stack', 'JMeter', 'Selenium', 'SOAP UI'] },
];

export const QuorumPortfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-blue-950">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Quorum Development Portfolio</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Damco's integrated offerings enable organizations to scale and future-proof Blockchain-powered transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {portfolio.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
