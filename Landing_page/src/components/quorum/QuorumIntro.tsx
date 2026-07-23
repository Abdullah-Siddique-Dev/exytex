import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

const highlights = [
  { icon: CheckCircle, text: 'Successful Blockchain PoCs across industries and processes' },
  { icon: Award, text: '99.8% client satisfaction' },
  { icon: TrendingUp, text: 'Live apps for governance, supply chain, real estate, and more' },
  { icon: Users, text: 'Expertise to develop, manage, and grow Blockchain solutions' },
];

export const QuorumIntro: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            We have integrated Quorum's open-source protocol layer on top of other product modules to build 
            robust, performant, and highly customizable applications and use-cases that exceedingly meet goals 
            in automation, security, and transparency.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-8">We are a Quorum consulting company with:</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
