import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Layers, Lightbulb, Code, Link } from 'lucide-react';

const roadmapSteps = [
  {
    icon: Search,
    title: 'Feasibility Assessment',
    description: 'Evaluate project viability and technical requirements',
  },
  {
    icon: Layers,
    title: 'Platform Identification',
    description: 'Select the optimal blockchain platform for your needs',
  },
  {
    icon: Lightbulb,
    title: 'PoC Development',
    description: 'Build proof of concept to validate the solution',
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
];

export const DevelopmentRoadmap: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <p className="text-gray-400 text-lg">Our proven process for blockchain success</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500" />

          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  className="inline-block p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-black z-10">
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
