import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Layers, Lightbulb, Code, Link, CheckCircle } from 'lucide-react';

const roadmapSteps = [
  {
    icon: Search,
    title: 'Feasibility Assessment',
    description: 'Evaluate project viability and Stellar blockchain fit',
  },
  {
    icon: Layers,
    title: 'Platform Identification',
    description: 'Select optimal Stellar network and architecture',
  },
  {
    icon: Lightbulb,
    title: 'PoC Development',
    description: 'Build proof-of-concept to validate approach',
  },
  {
    icon: Code,
    title: 'App Development',
    description: 'Full-scale development with agile methodology',
  },
  {
    icon: Link,
    title: 'Blockchain App Integration',
    description: 'Seamless integration with existing systems',
  },
  {
    icon: CheckCircle,
    title: 'Deployment & Support',
    description: 'Launch and ongoing maintenance',
  },
];

const StellarRoadmapSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-[#001F54] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#6C63FF]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6]">
              Roadmap
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Our proven process for delivering stellar blockchain solutions
          </p>
        </motion.div>

        {/* 3D Roadmap Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glowing Connecting Line */}
          <svg className="absolute left-0 top-0 w-full h-full" style={{ zIndex: 0 }}>
            <motion.path
              d={`M 100 100 Q 300 50, 500 100 T 900 100 Q 1100 150, 1300 100`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6C63FF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6C63FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#001F54]/90 to-[#1a1a3e]/90 backdrop-blur-sm border border-[#6C63FF]/30 overflow-hidden group">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(108, 99, 255, 0.5)',
                        '0 0 40px rgba(139, 92, 246, 0.5)',
                        '0 0 20px rgba(108, 99, 255, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(108, 99, 255, 0.15), transparent 70%)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StellarRoadmapSection;
