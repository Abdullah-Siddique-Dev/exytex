import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Salesforce', logo: '☁️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Microsoft', logo: '🪟', color: 'from-blue-600 to-indigo-600' },
  { name: 'HubSpot', logo: '🧡', color: 'from-orange-500 to-red-500' },
  { name: 'Marketo', logo: '📊', color: 'from-purple-500 to-pink-500' },
  { name: 'Pardot', logo: '⚡', color: 'from-yellow-500 to-orange-500' },
  { name: 'Google', logo: '🔍', color: 'from-green-500 to-blue-500' },
];

const TrustedPartnersSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-pink-900/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Trusted Technology Partner
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We partner with the leading MarTech and Sales Enablement platforms to meet your client needs
          </p>
        </motion.div>

        {/* 3D Floating Partners */}
        <div className="relative h-64 mb-16">
          {partners.map((partner, index) => {
            const angle = (index / partners.length) * 2 * Math.PI;
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={partner.name}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px)`,
                }}
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
                whileHover={{
                  scale: 1.2,
                  z: 100,
                }}
              >
                <div className={`glass-card p-6 bg-gradient-to-br ${partner.color}/10 border border-white/20 hover:border-white/40 transition-all duration-300`}>
                  <div className="text-center space-y-3">
                    <div className="text-4xl">{partner.logo}</div>
                    <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Scroll Partners */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ width: 'calc(200% + 2rem)' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`glass-card p-8 w-48 bg-gradient-to-br ${partner.color}/10 border border-white/20 hover:border-white/40 transition-all duration-300`}>
                  <div className="text-center space-y-4">
                    <div className="text-5xl">{partner.logo}</div>
                    <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                    <div className={`h-1 w-full bg-gradient-to-r ${partner.color} rounded-full`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">On-Demand Resources</h3>
              <p className="text-white/80">Access an on-demand pool of technology resources for your digital projects</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Cost-Effective Solutions</h3>
              <p className="text-white/80">Avail highly skilled resources with domain expertise at lower costs</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-2">Expand Your Portfolio</h3>
              <p className="text-white/80">Add advanced technology services to your portfolio without adding headcount</p>
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="glass-card p-6 inline-block">
            <p className="text-lg text-white/90">
              <span className="text-purple-400 font-semibold">We ensure that your agency's credibility isn't compromised.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;