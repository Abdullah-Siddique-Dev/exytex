import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Layers, Lightbulb, Code, Link } from 'lucide-react';

const roadmapSteps = [
  {
    icon: Search,
    title: 'Feasibility Assessment',
    description: 'Evaluate project viability and Hyperledger fit'
  },
  {
    icon: Layers,
    title: 'Platform Identification',
    description: 'Select optimal Hyperledger framework'
  },
  {
    icon: Lightbulb,
    title: 'PoC Development',
    description: 'Build proof-of-concept to validate approach'
  },
  {
    icon: Code,
    title: 'App Development',
    description: 'Full-scale development with agile methodology'
  },
  {
    icon: Link,
    title: 'Blockchain App Integration',
    description: 'Seamless integration with existing systems'
  },
];

const HyperledgerRoadmapSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-[#0B3D91] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Roadmap
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6C63FF] to-[#3E00FF] transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:mb-16`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30"
                  >
                    <motion.div
                      className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Number */}
                <div className="w-2/12 flex justify-center my-6 lg:my-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#6C63FF]/50 z-10"
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(108, 99, 255, 0.5)',
                        '0 0 40px rgba(108, 99, 255, 0.8)',
                        '0 0 20px rgba(108, 99, 255, 0.5)',
                      ],
                    }}
                    transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HyperledgerRoadmapSection;
