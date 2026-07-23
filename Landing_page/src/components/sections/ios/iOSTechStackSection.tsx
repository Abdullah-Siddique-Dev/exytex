import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const techStack = {
  'Programming Languages': ['Swift', 'Objective-C'],
  'Frameworks': ['Core Data', 'Core Animation', 'Core Graphics', 'Core Text'],
  'Cross-Platform Tools': ['Flutter', 'React Native', 'Xamarin', 'PhoneGap'],
  'Development Tools': ['CocoaPods', 'Apple Xcode', 'iOS SDK', 'AppCode'],
  'Related Technologies': ['Material Design', 'MVVM', 'LiveData', 'Dagger2', 'Nevercode', 'Bugsnag'],
};

const iOSTechStackSection: React.FC = () => {
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
            Proficiency &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Tech Stack
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#4B0082]/80 backdrop-blur-sm border border-[#6C63FF]/30 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                <div className="space-y-3">
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <span className="w-2 h-2 bg-[#6C63FF] rounded-full mr-3" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default iOSTechStackSection;
