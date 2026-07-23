import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Search, Shield, Clock, Building, Lightbulb } from 'lucide-react';

const features = [
  { icon: Users, label: 'In-house Corda Team' },
  { icon: Search, label: '360° Requirement Analysis' },
  { icon: Shield, label: 'Compliance & Governance' },
  { icon: Clock, label: '24×7 Client Assistance' },
  { icon: Building, label: 'Industry-Sector Competency' },
  { icon: Lightbulb, label: 'Technology CoE' }
];

const CordaWhyChooseSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Moving Light Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.3) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your trusted partner for enterprise-grade Corda blockchain solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                {
                  title: 'In-house Corda Team',
                  desc: 'Dedicated team of Corda-certified developers and architects with proven expertise'
                },
                {
                  title: '360° Requirement Analysis',
                  desc: 'Comprehensive discovery and planning to align technology with business objectives'
                },
                {
                  title: 'Compliance & Governance',
                  desc: 'Built-in regulatory compliance and governance frameworks for enterprise security'
                },
                {
                  title: '24×7 Client Assistance',
                  desc: 'Round-the-clock support and monitoring to ensure optimal performance'
                },
                {
                  title: 'Industry-Sector Competency',
                  desc: 'Deep domain expertise across finance, healthcare, insurance, and supply chain'
                },
                {
                  title: 'Technology CoE',
                  desc: 'Center of Excellence driving innovation and best practices in blockchain development'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Rotating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Center Circle */}
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-white font-bold text-lg">Corda</span>
              </motion.div>

              {/* Orbiting Icons */}
              {features.map((feature, index) => {
                const angle = (index * 360) / features.length;
                const radius = 150;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * radius,
                      y: Math.sin((angle * Math.PI) / 180) * radius,
                      rotate: [0, 360],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 flex flex-col items-center justify-center shadow-xl backdrop-blur-sm"
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(59, 130, 246, 0.3)',
                          '0 0 40px rgba(147, 51, 234, 0.3)',
                          '0 0 20px rgba(59, 130, 246, 0.3)',
                        ],
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <feature.icon className="w-8 h-8 text-blue-400 mb-1" />
                      <span className="text-[8px] text-gray-400 text-center px-1 leading-tight">
                        {feature.label.split(' ')[0]}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CordaWhyChooseSection;
