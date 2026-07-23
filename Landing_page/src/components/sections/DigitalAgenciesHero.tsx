import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DigitalAgenciesHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            The Go-To Technology Partner
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-semibold text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            for Digital Agencies
          </motion.h2>

          <motion.div
            className="glass-card p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-purple-300">Accelerate Deliveries</h3>
                <p className="text-white/80">Looking to accelerate your project deliveries?</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-pink-300">Expand Skills</h3>
                <p className="text-white/80">Want to expand your technology skills for new opportunities?</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-300">Improve Profits</h3>
                <p className="text-white/80">Want to improve your profits with on-demand technology resources?</p>
              </div>
            </div>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Overcome your tech challenges with <span className="text-purple-400 font-semibold">Damco Digital</span> as your technology backbone.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <button className="glass-button px-8 py-4 text-lg font-semibold text-white hover:scale-105 transition-all duration-300">
              Request a Free Quote
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalAgenciesHero;