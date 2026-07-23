import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Layers, FileCode, Headphones } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'NFT Marketplace Design & Development',
    description: 'Build user-friendly platforms for trading 3D avatars, digital art, games, and collectibles.',
    gradient: 'from-[#6C63FF] to-[#3E00FF]',
  },
  {
    icon: Layers,
    title: 'NFT-Based Platform Development',
    description: 'Create centralized or decentralized NFT solutions for metaverse assets, digital avatars, or tokenized items.',
    gradient: 'from-[#3E00FF] to-[#6C63FF]',
  },
  {
    icon: FileCode,
    title: 'NFT Smart Contract Development',
    description: 'Architect, design, deploy, and audit smart contracts for minting, lending, and NFT exchanges.',
    gradient: 'from-[#6C63FF] to-[#0B3D91]',
  },
  {
    icon: Headphones,
    title: 'NFT Marketplace Support & Maintenance',
    description: 'Continuous monitoring and technical support to ensure uptime, scalability, and security.',
    gradient: 'from-[#0B3D91] to-[#3E00FF]',
  },
];

const NFTServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0B3D91] to-[#1a1a3e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C63FF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3E00FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            NFT Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30">
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>

                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(108, 99, 255, 0.3)',
                      '0 0 40px rgba(62, 0, 255, 0.5)',
                      '0 0 20px rgba(108, 99, 255, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTServicesSection;
