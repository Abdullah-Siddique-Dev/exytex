import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Zap, Shield, Code, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '27+ Years of Expertise',
    description: 'Decades of experience in delivering cutting-edge technology solutions',
  },
  {
    icon: Users,
    title: 'Expert Blockchain Team',
    description: 'Certified developers with deep expertise in multiple blockchain platforms',
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Agile methodology for faster time-to-market and iterative improvements',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Comprehensive security audits and best practices for smart contracts',
  },
  {
    icon: Code,
    title: 'Full-Stack Solutions',
    description: 'End-to-end blockchain development from concept to deployment',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'Successfully delivered blockchain projects across multiple industries',
  },
];

export const BlockchainWhyChoose: React.FC = () => {
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
        className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"
        style={{ y, opacity }}
      />
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80')] bg-cover bg-center bg-fixed opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Why Choose Us for Blockchain?
          </h2>
          <p className="text-cyan-400 text-base">Your trusted partner in blockchain innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ perspective: 1000 }}
            >
              <div className="h-full p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
