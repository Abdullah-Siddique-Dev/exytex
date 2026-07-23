import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const showcaseItems = [
  {
    title: 'DeFi Solutions',
    description: 'Decentralized finance platforms with smart contracts',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&q=80',
  },
  {
    title: 'NFT Marketplaces',
    description: 'Create and trade digital assets securely',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable blockchain for business operations',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&q=80',
  },
];

export const EthereumShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Ethereum Solutions
          </h2>
          <p className="text-gray-400 text-base">Transforming industries with blockchain innovation</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
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
