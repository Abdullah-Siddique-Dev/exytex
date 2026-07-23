import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const platforms = [
  { name: 'Corda', color: 'from-red-500 to-orange-500', logo: '🔗' },
  { name: 'Ethereum', color: 'from-blue-500 to-cyan-500', logo: '⟠' },
  { name: 'Quorum', color: 'from-purple-500 to-pink-500', logo: '◈' },
  { name: 'Hyperledger', color: 'from-green-500 to-emerald-500', logo: '⬡' },
  { name: 'Stellar', color: 'from-yellow-500 to-amber-500', logo: '✦' }
];

const CordaPlatformsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Blockchain Platforms We Work On
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Multi-platform expertise for comprehensive blockchain solutions
          </p>
        </motion.div>

        {/* 3D Rotating Cube/Carousel */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            {/* Center Display */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-6xl">⛓️</span>
              </motion.div>
            </motion.div>

            {/* Orbiting Platform Cards */}
            {platforms.map((platform, index) => {
              const angle = (index * 360) / platforms.length;
              const radius = 200;
              
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    x: Math.cos((angle * Math.PI) / 180) * radius - 80,
                    y: Math.sin((angle * Math.PI) / 180) * radius - 80,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className={`w-32 h-32 rounded-xl bg-gradient-to-br ${platform.color} p-[2px] cursor-pointer`}
                    whileHover={{ scale: 1.2, zIndex: 30 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2 + index * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center">
                      <motion.span
                        className="text-5xl mb-2"
                        animate={hoveredIndex === index ? { rotate: 360 } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        {platform.logo}
                      </motion.span>
                      <span className="text-white font-bold text-sm">{platform.name}</span>
                    </div>
                  </motion.div>

                  {/* Glow Effect */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl blur-xl opacity-50"
                      style={{
                        background: `linear-gradient(to bottom right, ${platform.color})`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Platform List Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${platform.color} text-white font-semibold`}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {platform.logo} {platform.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CordaPlatformsSection;
