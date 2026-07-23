import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Building2, Vote, CheckCircle, Heart, Package, ShoppingCart, Gamepad2, Dices, TrendingUp } from 'lucide-react';

const industries = [
  { icon: Shield, title: 'Insurance', description: 'Automated claims and fraud detection', color: 'from-blue-500 to-cyan-500' },
  { icon: Building2, title: 'Banking & Finance', description: 'Secure transactions and digital assets', color: 'from-purple-500 to-blue-500' },
  { icon: Vote, title: 'Proxy Voting', description: 'Transparent voting systems', color: 'from-cyan-500 to-blue-500' },
  { icon: CheckCircle, title: 'Digital Verification', description: 'Identity verification', color: 'from-blue-500 to-purple-500' },
  { icon: Heart, title: 'Healthcare', description: 'Patient data management', color: 'from-purple-500 to-pink-500' },
  { icon: Package, title: 'Supply Chain', description: 'End-to-end tracking', color: 'from-blue-500 to-cyan-500' },
  { icon: ShoppingCart, title: 'Retail & E-Commerce', description: 'Loyalty programs', color: 'from-cyan-500 to-purple-500' },
  { icon: Gamepad2, title: 'Gaming', description: 'NFTs and in-game assets', color: 'from-purple-500 to-blue-500' },
  { icon: Dices, title: 'Online Gambling', description: 'Provably fair gaming', color: 'from-blue-500 to-purple-500' },
  { icon: TrendingUp, title: 'Cryptocurrency Trading', description: 'Decentralized exchanges', color: 'from-cyan-500 to-blue-500' },
];

export const IndustryUseCases: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-blue-950/90 to-slate-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Industry Use Cases
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Transforming industries with blockchain-powered smart contracts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {industry.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to transform your industry with smart contracts?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300">
            Explore Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
};
