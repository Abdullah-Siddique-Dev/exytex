import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb, Code, FileCheck, RefreshCw, Shield, Headphones } from 'lucide-react';

const offerings = [
  { icon: Lightbulb, title: 'Corda Consulting Services', description: 'Strategic guidance for Corda implementation' },
  { icon: Code, title: 'CorDapps for Financial Industry', description: 'Custom distributed applications for finance' },
  { icon: FileCheck, title: 'Smart Contracts', description: 'Secure and audited smart contract development' },
  { icon: RefreshCw, title: 'Blockchain App Porting', description: 'Migrate existing apps to Corda platform' },
  { icon: Shield, title: 'Smart Contracts Audit', description: 'Comprehensive security audits' },
  { icon: Headphones, title: 'Corda App Support', description: '24/7 maintenance and optimization' },
];

export const CordaOfferings: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Corda Development Offerings
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
