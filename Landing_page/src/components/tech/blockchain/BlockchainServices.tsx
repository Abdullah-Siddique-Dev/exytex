import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  {
    name: 'Smart Contracts',
    description: 'Develop secure, self-executing contracts that automate business processes and eliminate intermediaries. Our smart contracts are audited and optimized for gas efficiency.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  },
  {
    name: 'DApp Development',
    description: 'Build decentralized applications that run on blockchain networks. From DeFi platforms to NFT marketplaces, we create user-friendly dApps that scale.',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&q=80',
  },
  {
    name: 'Private Blockchain',
    description: 'Deploy permissioned blockchain networks for enterprise use cases. Hyperledger Fabric, Corda, and Quorum solutions for secure business networks.',
    image: 'https://images.unsplash.com/photo-1644143379190-08a5f055de1d?w=800&q=80',
  },
  {
    name: 'Tokenization',
    description: 'Create digital tokens for assets, securities, or utility purposes. ERC-20, ERC-721, and custom token standards for your specific needs.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80',
  },
  {
    name: 'Blockchain Consulting',
    description: 'Strategic guidance on blockchain adoption, platform selection, and implementation roadmap. We help you identify the right use cases for blockchain.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    name: 'Integration Services',
    description: 'Seamlessly integrate blockchain with your existing systems. APIs, oracles, and middleware solutions for enterprise connectivity.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
];

export const BlockchainServices: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Blockchain Services
          </h2>
          <p className="text-gray-400 text-base">Comprehensive blockchain solutions for your business</p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    className="relative h-96 rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    style={{ perspective: 1000 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                    
                    <div className="relative h-full flex flex-col justify-end p-8">
                      <motion.h3
                        className="text-3xl font-semibold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {service.name}
                      </motion.h3>
                      
                      <motion.p
                        className="text-gray-300 text-base mb-6 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                      
                      <motion.button
                        className="group/btn w-fit px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-2">
                          Explore More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
