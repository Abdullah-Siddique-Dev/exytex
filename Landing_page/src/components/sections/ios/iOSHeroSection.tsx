import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../../../hooks/useTypewriter';

const iOSHeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const heading = useTypewriter({ 
    text: 'iOS App Development Services', 
    speed: 50 
  });
  const subtitle = useTypewriter({ 
    text: 'Custom, scalable, and secure iOS applications for all Apple devices', 
    speed: 30,
    delay: heading.isComplete ? 200 : 0 
  });

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
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
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
        ctx.fillStyle = 'rgba(108, 99, 255, 0.6)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/95 via-transparent to-[#4B0082]/95" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
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
              From ideation to deployment, our certified iOS developers create immersive apps for iPhone, iPad, Apple TV, and Apple Watch that delight users and accelerate growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="group relative bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire iOS Developers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3E00FF] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                className="px-6 py-3 rounded-lg border-2 border-[#6C63FF] text-white font-semibold hover:bg-[#6C63FF]/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Device Mockups */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#3E00FF]/20 backdrop-blur-sm border border-[#6C63FF]/30"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* iPhone Mockup */}
              <motion.div
                className="w-48 h-96 rounded-[3rem] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-8 border-gray-900 shadow-2xl overflow-hidden"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                <div className="absolute inset-0 mt-12 bg-gradient-to-b from-[#6C63FF]/20 to-[#3E00FF]/20 p-4">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-10 bg-white/10 rounded-lg backdrop-blur-sm mb-3"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default iOSHeroSection;
