import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Smartphone, FileCode, Coins, ShieldCheck, Headphones } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Stellar Consulting Services',
    description: 'Strategic roadmap for FinTech applications with expert guidance on Stellar blockchain implementation.',
  },
  {
    icon: Smartphone,
    title: 'Stellar Blockchain App Development',
    description: 'Robust, scalable, secure apps and wallets built on Stellar protocol for seamless transactions.',
  },
  {
    icon: FileCode,
    title: 'Stellar Smart Contracts',
    description: 'Cost-effective and secure smart contracts leveraging Stellar\'s efficient consensus mechanism.',
  },
  {
    icon: Coins,
    title: 'Stellar Token Development',
    description: 'Custom tokens compatible with any asset, enabling innovative financial instruments on Stellar.',
  },
  {
    icon: ShieldCheck,
    title: 'Smart Contracts Audit',
    description: 'Comprehensive security audits to identify bugs and vulnerabilities in your smart contracts.',
  },
  {
    icon: Headphones,
    title: 'Stellar App Support',
    description: 'On-demand expert support ensuring your Stellar applications run smoothly 24/7.',
  },
];

const StellarServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#001F54] to-[#1a1a3e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C63FF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Stellar Blockchain Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6]">
              Services
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Comprehensive solutions for building next-generation FinTech applications
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative h-80 rounded-2xl p-8 bg-gradient-to-br from-[#001F54]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 12, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StellarServicesSection;
