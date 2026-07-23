import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80',
  'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1920&q=80',
  'https://images.unsplash.com/photo-1644143379190-08a5f055de1d?w=1920&q=80',
  'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80',
];

const highlights = [
  'Successful CorDapps in Insurance, Healthcare, and Finance',
  'Pool of Corda-certified expert developers and consultants',
  'Experience to develop and grow Blockchain solutions at scale',
  'On-time completion of projects',
];

export const CordaHero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Animated Background Slideshow */}
      {heroImages.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-purple-950/85 to-slate-950/90" />
        </motion.div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              Corda Development Consulting
            </h1>

            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              We empower organizations with secure, scalable, and private Blockchain solutions built on Corda — 
              delivering performance, interoperability, and regulatory compliance.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Connect with Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Right Side - Glassmorphism Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Why Corda?</h3>
                <p className="text-gray-200 mb-4">
                  Corda is designed for businesses that need privacy, scalability, and regulatory compliance 
                  in their blockchain solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400">100+</div>
                    <div className="text-sm text-gray-300">Projects Delivered</div>
                  </div>
                  <div className="p-4 bg-purple-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-300">Expert Developers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
