import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Server, Monitor, Cloud, TestTube } from 'lucide-react';

const techCategories = [
  {
    icon: Wrench,
    title: 'Development Tools',
    items: ['Burrow', 'Besu', 'Cactus', 'Cello', 'Fabric', 'Grid', 'Indy', 'Iroha', 'Quilt', 'Sawtooth', 'Transact', 'Ursa', 'Aries', 'Avalon'],
    color: '#6C63FF',
  },
  {
    icon: Server,
    title: 'Backend Technologies',
    items: ['JavaScript', 'Java', 'PHP', 'Solidity', 'Node.js', 'Golang'],
    color: '#3E00FF',
  },
  {
    icon: Monitor,
    title: 'Frontend Technologies',
    items: ['React', 'Angular.js', 'jQuery', 'Bootstrap'],
    color: '#6C63FF',
  },
  {
    icon: Cloud,
    title: 'Cloud Coverage',
    items: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud'],
    color: '#3E00FF',
  },
  {
    icon: TestTube,
    title: 'Testing Framework',
    items: ['Caliper', 'ELK Stack', 'JMeter', 'Selenium', 'SOAP UI'],
    color: '#6C63FF',
  },
];

const HyperledgerTechSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-[#0B3D91] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#6C63FF 1px, transparent 1px), linear-gradient(90deg, #6C63FF 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Expertise
            </span>
          </h2>
        </motion.div>

        <div className="relative h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl">
            {techCategories.map((category, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  animate={{
                    x: offset * 300 - 200,
                    y: -200,
                    scale: isActive ? 1.2 : 0.8 - absOffset * 0.1,
                    opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                    zIndex: isActive ? 10 : 5 - absOffset,
                    rotateY: offset * 20,
                  }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div
                    className="w-80 h-96 rounded-2xl p-8 bg-gradient-to-br from-[#0B3D91]/90 to-[#1a1a3e]/90 backdrop-blur-sm border border-[#6C63FF]/30"
                    whileHover={{ scale: 1.05 }}
                    animate={
                      isActive
                        ? {
                            boxShadow: [
                              `0 0 30px ${category.color}40`,
                              `0 0 60px ${category.color}60`,
                              `0 0 30px ${category.color}40`,
                            ],
                          }
                        : {}
                    }
                    transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                  >
                    <motion.div
                      className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                      animate={isActive ? { rotate: 360 } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>

                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -10 }}
                          transition={{ delay: itemIndex * 0.05 }}
                        >
                          <span
                            className="w-2 h-2 rounded-full mr-3"
                            style={{ backgroundColor: category.color }}
                          />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {techCategories.map((_, index) => (
            <motion.button
              key={index}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: activeIndex === index ? '#6C63FF' : '#ffffff40',
              }}
              whileHover={{ scale: 1.5 }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperledgerTechSection;
