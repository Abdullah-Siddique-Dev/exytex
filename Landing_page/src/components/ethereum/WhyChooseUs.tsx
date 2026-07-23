import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Users, Search, FileCheck, Clock, Building, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'In-house Ethereum Team',
    description: 'Dedicated blockchain experts with deep Ethereum knowledge',
  },
  {
    icon: Search,
    title: '360-Degree Requirement Analysis',
    description: 'Comprehensive assessment of your business needs',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Governance',
    description: 'Adherence to regulatory standards and best practices',
  },
  {
    icon: Clock,
    title: '24×7 Client Assistance',
    description: 'Round-the-clock support for your blockchain applications',
  },
  {
    icon: Building,
    title: 'Industry-sector Competency',
    description: 'Domain expertise across multiple industries',
  },
  {
    icon: Lightbulb,
    title: 'Technology CoE',
    description: 'Center of Excellence for blockchain innovation',
  },
];

export const WhyChooseUs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-black"
        style={{ y, opacity }}
      />
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80')] bg-cover bg-center bg-fixed opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg">Your trusted partner in blockchain innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
