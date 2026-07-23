import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const platforms = [
  'Neo', 'Multichain', 'Ethereum', 'Hedera', 'Stellar', 
  'Ripple', 'Hyperledger', 'Quorum', 'EOS', 'Corda'
];

export const BlockchainPlatforms: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % platforms.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + platforms.length) % platforms.length);

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-slate-950/90 to-blue-950/95" />
      </div>
      
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Blockchain Platforms We Support
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div className="flex" animate={{ x: `-${currentIndex * 100}%` }} transition={{ duration: 0.5 }}>
              {platforms.map((platform, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    className="p-12 bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-500/20 text-center"
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                  >
                    <h3 className="text-4xl font-bold text-white">{platform}</h3>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-600/20 backdrop-blur-md hover:bg-cyan-600/40 rounded-full flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-600/20 backdrop-blur-md hover:bg-cyan-600/40 rounded-full flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
