import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Palette, Zap, Shield, Clock, Users } from 'lucide-react';

const reasons = [
  { icon: Search, title: '360-Degree Requirement Analysis', description: 'Detailed project assessment and roadmap' },
  { icon: Palette, title: 'State-of-the-Art Design', description: 'Sleek UI/UX for enhanced engagement' },
  { icon: Zap, title: 'Unmatched Performance & Speed', description: 'Optimized apps for faster loading' },
  { icon: Shield, title: 'Maximum Security & Scalability', description: 'Advanced encryption and malware protection' },
  { icon: Clock, title: '24×7 Client Assistance', description: 'Time-zone-aligned support' },
  { icon: Users, title: 'Agile & Adaptive Development', description: 'Iterative process for high-quality delivery' },
];

const iOSWhyChooseSection: React.FC = () => {
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
            Why Choose Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              iOS App Development Services
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#4B0082]/80 backdrop-blur-sm border border-[#6C63FF]/30 text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default iOSWhyChooseSection;
