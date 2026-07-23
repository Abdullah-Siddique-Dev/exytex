import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Layers, Code, Smartphone, Zap, Shield, Wallet } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Smart Contract Architecture',
    description: 'Design scalable and secure smart contract architecture tailored to your business needs and blockchain platform.',
  },
  {
    icon: Code,
    title: 'Smart Contracts Development',
    description: 'End-to-end development of custom smart contracts with security-first approach and gas optimization.',
  },
  {
    icon: Smartphone,
    title: 'Smart Contract for DApps',
    description: 'Build decentralized applications powered by robust smart contracts for seamless user experiences.',
  },
  {
    icon: Zap,
    title: 'Smart Contract Optimization',
    description: 'Optimize existing smart contracts for better performance, reduced gas fees, and enhanced security.',
  },
  {
    icon: Shield,
    title: 'Smart Contracts Audit',
    description: 'Comprehensive security audits to identify vulnerabilities and ensure your smart contracts are bulletproof.',
  },
  {
    icon: Wallet,
    title: 'Smart Contract for Digital Wallet',
    description: 'Develop secure smart contracts for digital wallets with multi-signature and advanced security features.',
  },
];

export const SmartContractServices: React.FC = () => {
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
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-blue-950/90 to-slate-950/95" />
      </div>

      <div className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Smart Contract Development Services
          </h2>
          <p className="text-gray-400 text-base">Comprehensive solutions for your blockchain needs</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    style={{ perspective: 1000 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 text-base mb-6">{service.description}</p>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300">
                        Explore
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-600/20 backdrop-blur-md hover:bg-cyan-600/40 rounded-full flex items-center justify-center transition-all duration-300 border border-cyan-500/30"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-600/20 backdrop-blur-md hover:bg-cyan-600/40 rounded-full flex items-center justify-center transition-all duration-300 border border-cyan-500/30"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>

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
      </div>
    </section>
  );
};
