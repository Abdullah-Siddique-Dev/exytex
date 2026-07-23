import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Building2, Vote, FileCheck, Heart, Package, ShoppingCart, Gamepad2, Dices, Bitcoin } from 'lucide-react';

const industries = [
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Blockchain-backed life settlement with real-time tracking',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Building2,
    title: 'Banking & Finance',
    description: 'Loan process and syndicate settlement solutions',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Vote,
    title: 'Proxy Voting',
    description: 'Decentralized, trustless proxy voting solutions',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: FileCheck,
    title: 'Digital Verification',
    description: 'Blockchain-based credential verification',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Smart clinical trial systems and metadata search',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Package,
    title: 'Supply Chain',
    description: 'Transparent tracking of goods and process updates',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    description: 'Crypto payments, store analytics, token perks',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'Blockchain-powered gaming & loyalty programs',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Dices,
    title: 'Online Gambling',
    description: 'Ethereum DApps with RNG audit',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Bitcoin,
    title: 'Cryptocurrency Trading',
    description: 'Secure B2B/B2C crypto-exchange solutions',
    gradient: 'from-amber-500 to-yellow-500'
  },
];

const HyperledgerIndustriesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
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
            Industries We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Serve
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              onHoverStart={() => setActiveIndex(index)}
              className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border transition-all duration-300 ${
                activeIndex === index
                  ? 'border-[#6C63FF] shadow-lg shadow-[#6C63FF]/30'
                  : 'border-[#6C63FF]/30'
              }`}
            >
              <motion.div
                className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}
                animate={activeIndex === index ? { rotate: 360 } : {}}
                transition={{ duration: 0.6 }}
              >
                <industry.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
              <p className="text-sm text-gray-400">{industry.description}</p>

              <motion.div
                className="absolute bottom-4 right-4 text-[#6C63FF] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperledgerIndustriesSection;
