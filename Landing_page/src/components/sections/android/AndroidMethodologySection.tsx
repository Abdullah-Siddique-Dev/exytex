import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Search, Palette, Code, TestTube, Headphones } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Agreement on Service Models', description: 'Determine engagement and allocate resources' },
  { icon: Search, title: 'Assessment of Requirements', description: 'Detailed project roadmap with milestones' },
  { icon: Palette, title: 'Design & Development', description: 'Agile, incremental development, meeting acceptance criteria' },
  { icon: TestTube, title: 'Testing & QA', description: 'Thorough QA on multiple devices and feedback integration' },
  { icon: Headphones, title: 'Support & Maintenance', description: 'Post-deployment monitoring, debugging, and updates' },
];

const AndroidMethodologySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#4B0082] to-[#0B3D91] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Methodology
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6C63FF] via-[#3E00FF] to-[#6C63FF]" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#4B0082]/80 backdrop-blur-sm border border-[#6C63FF]/30"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
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

              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] border-4 border-[#0B3D91] z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3 }}
                whileHover={{ scale: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(108, 99, 255, 0.7)',
                      '0 0 0 20px rgba(108, 99, 255, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AndroidMethodologySection;
