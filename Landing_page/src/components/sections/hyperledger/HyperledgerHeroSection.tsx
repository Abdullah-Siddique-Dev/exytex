import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../../../hooks/useTypewriter';

const HyperledgerHeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const heading = useTypewriter({ text: 'Hyperledger Blockchain Development', speed: 50 });
  const subtitle = useTypewriter({
    text: 'Enterprise-grade Blockchain solutions that transform industries',
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

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: Node[] = [];

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(108, 99, 255, 0.8)';
        ctx.fill();
      }
    }

    const nodes: Node[] = [];
    for (let i = 0; i < 50; i++) {
      nodes.push(new Node());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 61, 145, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        node.update();
        node.draw();

        nodes.forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0B3D91] overflow-hidden flex items-center pt-72 pb-20">
      {/* Particle Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/90 to-transparent" />

      {/* Floating Blockchain Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-[#6C63FF]/30"
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
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {heading.displayText}
              {!heading.isComplete && (
                <span className="text-[#6C63FF]">|</span>
              )}
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-3">
              {subtitle.displayText}
              {heading.isComplete && !subtitle.isComplete && (
                <span className="text-[#6C63FF]">|</span>
              )}
            </p>

            <p className="text-gray-400 mb-6 max-w-lg text-sm lg:text-base">
              We deliver robust Hyperledger applications, smart contracts & chaincodes,
              permissioned networks, and end-to-end consulting that streamline operations
              and enhance security.
            </p>

            <motion.button
              onClick={handleGetStarted}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] rounded-full text-white font-semibold text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HyperledgerHeroSection;
