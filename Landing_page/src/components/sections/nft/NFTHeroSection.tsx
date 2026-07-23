import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../../../hooks/useTypewriter';

const nftImages = [
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600',
  'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=600',
  'https://images.unsplash.com/photo-1643101809204-6fb869816dbe?w=600',
  'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600',
];

const NFTHeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentNFT, setCurrentNFT] = useState(0);
  
  const heading = useTypewriter({ text: 'NFT Marketplace Development Services', speed: 50 });
  const subtitle = useTypewriter({ 
    text: 'Profitable, secure, and scalable NFT solutions for digital ownership', 
    speed: 30,
    delay: heading.isComplete ? 200 : 0 
  });

  const handleGetQuote = () => {
    window.location.href = '/#contact';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNFT((prev) => (prev + 1) % nftImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 61, 145, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-40" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/95 via-transparent to-[#0B3D91]/95" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {heading.displayText}
              {!heading.isComplete && <span className="animate-pulse">|</span>}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {subtitle.displayText}
              {heading.isComplete && !subtitle.isComplete && <span className="animate-pulse">|</span>}
            </motion.p>

            <motion.p
              className="text-base text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              End-to-end NFT solutions for minting, buying, selling, and trading unique digital assets. We deliver secure and scalable NFT marketplaces that unlock new revenue streams.
            </motion.p>

            <motion.button
              onClick={handleGetQuote}
              className="group relative bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3E00FF] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Right: Image Slideshow */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {nftImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentNFT === index ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={img}
                  alt={`NFT ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/50 to-transparent" />
              </motion.div>
            ))}
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {nftImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentNFT ? 'bg-[#6C63FF] w-8' : 'bg-white/50'
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

export default NFTHeroSection;
