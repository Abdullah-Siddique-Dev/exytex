import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Clock, Target, Users } from 'lucide-react';

const models = [
  { icon: DollarSign, title: 'Fixed Price Model', description: 'Ideal for small-medium apps; milestone-based payments', details: 'Best for well-defined projects with clear requirements' },
  { icon: Clock, title: 'Time & Material Model', description: 'Flexible requirements; billed per team effort', details: 'Perfect for evolving requirements and agile development' },
  { icon: Target, title: 'SLA/Milestone-Based Model', description: 'Iterative projects with defined milestones', details: 'Structured approach with regular deliverables' },
  { icon: Users, title: 'Build Your Team® Model', description: 'Access certified iOS developers on-demand', details: 'Scale your team based on project needs' },
];

const iOSEngagementSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-[#0B3D91] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Engagement{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Models
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="perspective-1000"
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                className="relative h-80 preserve-3d"
                animate={{ rotateY: flipped === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 backface-hidden rounded-2xl p-6 bg-gradient-to-br from-[#0B3D91]/80 to-[#4B0082]/80 backdrop-blur-sm border border-[#6C63FF]/30 flex flex-col items-center justify-center text-center">
                  <motion.div
                    className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <model.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-gray-400 text-sm">{model.description}</p>
                </div>

                <div
                  className="absolute inset-0 backface-hidden rounded-2xl p-6 bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex flex-col items-center justify-center text-center"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{model.title}</h3>
                  <p className="text-white/90 text-sm mb-6">{model.details}</p>
                  <motion.button
                    className="px-6 py-2 rounded-full bg-white text-[#6C63FF] font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default iOSEngagementSection;
