import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const showcaseItems = [
  {
    title: 'Secure Contracts',
    description: 'Audited smart contracts with enterprise security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
  },
  {
    title: 'Automated Execution',
    description: 'Self-executing agreements without intermediaries',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'Multi-Chain Support',
    description: 'Deploy on Ethereum, BSC, Polygon, and more',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=80',
  },
];

export const SmartContractShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Smart Contract Excellence
          </h2>
          <p className="text-gray-400 text-base">Building the future of automated agreements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative h-80 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
