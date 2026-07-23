import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Layers, Lightbulb, Code, Link, CheckCircle } from 'lucide-react';

const roadmapSteps = [
  {
    icon: Search,
    title: 'Feasibility Assessment',
    description: 'Analyze business requirements and evaluate Corda suitability for your use case'
  },
  {
    icon: Layers,
    title: 'Platform Identification',
    description: 'Select optimal Corda version and network configuration for your needs'
  },
  {
    icon: Lightbulb,
    title: 'PoC Development',
    description: 'Build proof-of-concept to validate technical approach and business value'
  },
  {
    icon: Code,
    title: 'App Development',
    description: 'Full-scale CorDapp development with smart contracts and business logic'
  },
  {
    icon: Link,
    title: 'Blockchain App Integration',
    description: 'Seamless integration with existing systems and third-party services'
  },
  {
    icon: CheckCircle,
    title: 'Deployment & Support',
    description: 'Production deployment with ongoing monitoring and maintenance'
  }
];

const CordaRoadmapSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-blue-900/10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Roadmap for Corda Development
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A proven methodology from concept to production
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

          {roadmapSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center mb-16 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <motion.div
                    className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-blue-500/30 hover:border-purple-500/50 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`flex items-center gap-4 mb-3 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-slate-900 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0.7)',
                        '0 0 0 20px rgba(59, 130, 246, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Empty space on other side */}
                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>

        {/* Motion Path Animation */}
        <motion.div
          className="absolute left-1/2 top-0 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
};

export default CordaRoadmapSection;
