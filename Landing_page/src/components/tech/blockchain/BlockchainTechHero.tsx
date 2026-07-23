import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80',
  'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1920&q=80',
  'https://images.unsplash.com/photo-1644143379190-08a5f055de1d?w=1920&q=80',
];

export const BlockchainTechHero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Blockchain Technology Solutions';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayText]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900 pt-20">
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white mb-4 font-medium"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build Secure, Transparent, and Decentralized Applications
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-cyan-300 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with cutting-edge blockchain technology
            </motion.p>

            <motion.button
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Capabilities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Right Side - Image Slideshow */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {heroImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImage === index ? 1 : 0 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={img}
                  alt={`Blockchain ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </motion.div>
            ))}
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-cyan-400 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
