import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lock, Database, Network, Shield, Zap, Globe } from 'lucide-react';

const floatingIcons = [
  { Icon: Lock, color: 'from-blue-500 to-cyan-500', delay: 0 },
  { Icon: Database, color: 'from-purple-500 to-pink-500', delay: 0.2 },
  { Icon: Network, color: 'from-green-500 to-emerald-500', delay: 0.4 },
  { Icon: Shield, color: 'from-orange-500 to-red-500', delay: 0.6 },
  { Icon: Zap, color: 'from-indigo-500 to-purple-500', delay: 0.8 },
  { Icon: Globe, color: 'from-cyan-500 to-blue-500', delay: 1 },
];

export const BlockchainIntro: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Revolutionize Your Business with Blockchain
            </motion.h2>

            <motion.p
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Blockchain technology is transforming industries by providing unprecedented security, 
              transparency, and efficiency. Our blockchain solutions enable businesses to build 
              trust, reduce costs, and create new revenue streams.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              With expertise in Ethereum, Hyperledger, Corda, and other leading platforms, we deliver 
              enterprise-grade blockchain solutions. From smart contracts to decentralized applications, 
              we help you leverage the full potential of distributed ledger technology.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our team of blockchain experts works closely with you to understand your unique challenges 
              and design solutions that drive real business value. Whether you're exploring tokenization, 
              supply chain tracking, or digital identity, we have the expertise to bring your vision to life.
            </motion.p>

            <motion.p
              className="text-cyan-400 text-lg font-medium"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Let's build the decentralized future together.
            </motion.p>
          </div>

          {/* Right: Image with Floating Icons Overlay */}
          <motion.div
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
              alt="Blockchain Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60" />
            
            {/* Floating Icons on top of image */}
            {floatingIcons.map(({ Icon, color, delay }, index) => (
              <motion.div
                key={index}
                className={`absolute w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-2xl`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? {
                  opacity: 0.9,
                  scale: 1,
                  y: [0, -15, 0],
                } : {}}
                transition={{
                  opacity: { duration: 0.5, delay },
                  scale: { duration: 0.5, delay },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5,
                  }
                }}
                style={{
                  top: `${15 + (index % 3) * 30}%`,
                  left: `${10 + Math.floor(index / 3) * 40}%`,
                }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
