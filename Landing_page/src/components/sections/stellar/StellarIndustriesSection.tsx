import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Shield,
  Building2,
  Vote,
  FileCheck,
  Heart,
  Package,
  ShoppingCart,
  Gamepad2,
  Dices,
  Bitcoin,
} from 'lucide-react';

const industries = [
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Life Settlement solutions with real-time tracking',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
  },
  {
    icon: Building2,
    title: 'Banking & Finance',
    description: 'Loan process and syndicate settlement solutions',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600',
  },
  {
    icon: Vote,
    title: 'Proxy Voting',
    description: 'Trustless decentralized voting systems',
    image: 'https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=600',
  },
  {
    icon: FileCheck,
    title: 'Digital Verification',
    description: 'Blockchain credential verification',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Clinical trials powered by blockchain',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
  },
  {
    icon: Package,
    title: 'Supply Chain',
    description: 'Transparent tracking of goods',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    description: 'Crypto payments, token perks, store analytics',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600',
  },
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'Loyalty programs and gaming integration',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
  },
  {
    icon: Dices,
    title: 'Online Gambling',
    description: 'Ethereum DApps with RNG audits',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600',
  },
  {
    icon: Bitcoin,
    title: 'Cryptocurrency Trading',
    description: 'Secure, transparent B2B/B2C crypto exchanges',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600',
  },
];

const StellarIndustriesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff % industries.length) + industries.length) % industries.length;
    return normalizedDiff;
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#001F54] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Industries We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6]">
              Serve
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Transforming industries with innovative Stellar blockchain solutions
          </p>
        </motion.div>

        {/* 3D Rotating Carousel */}
        <div
          className="relative h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full max-w-6xl h-full perspective-1000">
            {industries.map((industry, index) => {
              const position = getPosition(index);
              const isCenter = position === 0;
              const angle = (position * 360) / industries.length;
              const radius = 400;

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  style={{
                    transformOrigin: 'center',
                  }}
                  animate={{
                    x: Math.cos((angle * Math.PI) / 180) * radius - 150,
                    y: Math.sin((angle * Math.PI) / 180) * (radius * 0.3) - 200,
                    scale: isCenter ? 1.2 : 0.7,
                    opacity: position > 5 ? 0 : 1 - position * 0.15,
                    zIndex: isCenter ? 20 : 10 - position,
                    rotateY: angle * 0.5,
                  }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div
                    className="w-80 h-96 rounded-2xl overflow-hidden group relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    />

                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-end">
                      <motion.div
                        className="w-16 h-16 mb-4 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ rotate: 12, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <industry.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {industry.title}
                      </h3>

                      <p className="text-white/90 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    {/* Subtle Border Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {industries.map((_, index) => (
            <motion.button
              key={index}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: activeIndex === index ? '#3B82F6' : '#ffffff40',
              }}
              whileHover={{ scale: 1.5 }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StellarIndustriesSection;
