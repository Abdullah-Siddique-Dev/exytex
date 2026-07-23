import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Building2, Vote, FileCheck, Heart, Package, ShoppingCart, Gamepad2, Dices, Bitcoin } from 'lucide-react';

const industries = [
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Automated claims processing, policy management, and fraud detection with smart contracts',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Building2,
    title: 'Banking & Finance',
    description: 'Secure payment systems, trade finance, and cross-border transactions with regulatory compliance',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Vote,
    title: 'Proxy Voting',
    description: 'Transparent and tamper-proof voting systems for corporate governance and elections',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: FileCheck,
    title: 'Digital Verification',
    description: 'Identity verification, document authentication, and credential management solutions',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Patient data management, medical records sharing, and pharmaceutical supply chain tracking',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Package,
    title: 'Supply Chain',
    description: 'End-to-end traceability, inventory management, and logistics optimization',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    description: 'Loyalty programs, product authenticity verification, and secure payment processing',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'NFT-based assets, in-game economies, and provably fair gaming mechanisms',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Dices,
    title: 'Online Gambling',
    description: 'Transparent betting systems, automated payouts, and regulatory compliance solutions',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Bitcoin,
    title: 'Cryptocurrency Trading',
    description: 'Secure exchanges, wallet solutions, and decentralized trading platforms',
    gradient: 'from-amber-500 to-yellow-500'
  }
];

const CordaIndustrySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Industry Case Studies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transforming industries with innovative blockchain solutions
          </p>
        </motion.div>

        {/* 3D Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative perspective-1000"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Glass Effect */}
                <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {industry.description}
                  </p>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, transparent 0%, rgba(59, 130, 246, 0.1) 100%)`,
                    }}
                  />
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
              </div>

              {/* 3D Shadow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to transform your industry with blockchain?
          </p>
          <motion.a
            href="/our-work"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Solutions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CordaIndustrySection;
