import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import { useTypewriter } from '../../../hooks/useTypewriter';

const MobileHeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const heading = useTypewriter({ text: 'Mobile App Development Services', speed: 50 });
  const subtitle = useTypewriter({ 
    text: 'Transform your business with cutting-edge mobile solutions', 
    speed: 30,
    delay: heading.isComplete ? 200 : 0 
  });

  const handleGetStarted = () => {
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
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0B3D91] overflow-hidden flex items-center pt-40 pb-20">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/90 to-transparent" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Smartphone className="w-6 h-6 text-blue-400/30" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heading.displayText}
              {!heading.isComplete && (
                <span className="text-blue-400">|</span>
              )}
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-6">
              {subtitle.displayText}
              {heading.isComplete && !subtitle.isComplete && (
                <span className="text-blue-400">|</span>
              )}
            </p>

            <p className="text-gray-400 mb-8 max-w-2xl text-base lg:text-lg">
              Build powerful iOS, Android, and cross-platform mobile applications that engage users and drive business growth with cutting-edge technology and exceptional user experiences.
            </p>

            <motion.button
              onClick={handleGetStarted}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
