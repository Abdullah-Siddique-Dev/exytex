import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Search, Shield, Clock, Building, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'In-house Stellar Team',
    description: 'Dedicated experts with deep Stellar blockchain knowledge',
  },
  {
    icon: Search,
    title: '360-Degree Requirement Analysis',
    description: 'Comprehensive assessment of your business needs',
  },
  {
    icon: Shield,
    title: 'Compliance and Governance',
    description: 'Regulatory compliance and security best practices',
  },
  {
    icon: Clock,
    title: '24×7 Client Assistance',
    description: 'Round-the-clock support for your projects',
  },
  {
    icon: Building,
    title: 'Industry-sector Competency',
    description: 'Expertise across multiple verticals and use cases',
  },
  {
    icon: Lightbulb,
    title: 'Technology Centers of Excellence',
    description: 'Innovation hubs driving blockchain advancement',
  },
];

const StellarWhyChooseSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#001F54] relative overflow-hidden">
      {/* Neon Lines Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(108, 99, 255, 0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(108, 99, 255, 0.1) 50%, transparent 100%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6]">
              Damco
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Your trusted partner for enterprise Stellar blockchain solutions
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#001F54]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30 overflow-hidden">
                {/* Neon Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(108, 99, 255, 0.3), rgba(139, 92, 246, 0.3))',
                    padding: '2px',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(108, 99, 255, 0.1), transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StellarWhyChooseSection;
