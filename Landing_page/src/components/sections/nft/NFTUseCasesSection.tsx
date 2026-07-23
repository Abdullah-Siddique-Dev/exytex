import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image, Gamepad2, Music, Home, IdCard, Trophy, Heart, Lightbulb, Package } from 'lucide-react';

const useCases = [
  { icon: Image, title: 'Digital Collectibles', description: '3D avatars, rare art, or game items', color: '#6C63FF' },
  { icon: Gamepad2, title: 'Gaming', description: 'Non-duplicable in-game items, player ownership, trading', color: '#3E00FF' },
  { icon: Music, title: 'Music & Entertainment', description: 'Tokenized songs, exclusive content, fan engagement', color: '#6C63FF' },
  { icon: Home, title: 'Real Estate', description: 'Tokenized property with bidding features', color: '#3E00FF' },
  { icon: IdCard, title: 'Identity Management', description: 'Certificates, medical records, credentials', color: '#6C63FF' },
  { icon: Trophy, title: 'Sports', description: 'NFT tickets and collectibles, anti-counterfeit', color: '#3E00FF' },
  { icon: Heart, title: 'Healthcare', description: 'Secure medical record storage', color: '#6C63FF' },
  { icon: Lightbulb, title: 'Intellectual Property & Patents', description: 'Immutable proof of ownership', color: '#3E00FF' },
  { icon: Package, title: 'Supply Chain', description: 'Product tracking from manufacturing to delivery', color: '#6C63FF' },
];

const NFTUseCasesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#0B3D91] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Top NFT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Use Cases
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30 group">
                <motion.div
                  className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                  animate={activeIndex === index ? { rotate: 360, scale: 1.1 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <useCase.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTUseCasesSection;
