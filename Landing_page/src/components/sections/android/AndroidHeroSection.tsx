import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../../../hooks/useTypewriter';

const AndroidHeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const heading = useTypewriter({ 
    text: 'Android App Development Services', 
    speed: 50 
  });
  const subtitle = useTypewriter({ 
    text: 'Custom, scalable, and secure Android apps for modern businesses', 
    speed: 30,
    delay: heading.isComplete ? 200 : 0 
  });

  const handleHireDevelopers = () => {
    window.location.href = '/hire-developer';
  };

  const handleGetQuote = () => {
    window.location.href = '/#contact';
  };

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
      color: string;
    }> = [];

    const colors = ['#6C63FF', '#3E00FF', '#0B3D91'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
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
        ctx.fillStyle = p.color + '80';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-20" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
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
              From ideation to deployment, our expert Android developers build apps for enterprises, startups, and eCommerce platforms that delight users and drive business growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={handleHireDevelopers}
                className="group relative bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Android Developers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3E00FF] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={handleGetQuote}
                className="px-6 py-3 rounded-lg border-2 border-[#6C63FF] text-white font-semibold hover:bg-[#6C63FF]/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Android Image */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop&auto=format&q=80"
              alt="Android Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AndroidHeroSection;
