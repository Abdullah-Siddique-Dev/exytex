import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Smartphone, FileCode, Network, ShieldCheck, Headphones } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Hyperledger Consulting Services',
    description: 'Strategy & blueprint for enterprise blockchain implementation with expert guidance.',
    gradient: 'from-[#6C63FF] to-[#3E00FF]',
  },
  {
    icon: Smartphone,
    title: 'Hyperledger Application Development',
    description: 'Scalable, secure decentralized applications built on Hyperledger frameworks.',
    gradient: 'from-[#3E00FF] to-[#6C63FF]',
  },
  {
    icon: FileCode,
    title: 'Smart Contracts & Chaincode Development',
    description: 'Secure, cost-effective smart contracts and chaincode for business logic automation.',
    gradient: 'from-[#6C63FF] to-[#0B3D91]',
  },
  {
    icon: Network,
    title: 'Hyperledger Fabric Development',
    description: 'Permissioned networks on AWS, IBM, or on-premise infrastructure.',
    gradient: 'from-[#0B3D91] to-[#3E00FF]',
  },
  {
    icon: ShieldCheck,
    title: 'Smart Contracts Audit',
    description: 'Identify bugs, vulnerabilities, and optimization opportunities in your contracts.',
    gradient: 'from-[#3E00FF] to-[#6C63FF]',
  },
  {
    icon: Headphones,
    title: 'Hyperledger Support',
    description: 'On-demand expert support ensuring your Hyperledger applications run smoothly.',
    gradient: 'from-[#6C63FF] to-[#3E00FF]',
  },
];

const HyperledgerServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0B3D91] to-[#1a1a3e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3E00FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Hyperledger Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade blockchain solutions for modern businesses
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30 overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tilt Effect Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(108, 99, 255, 0.15), transparent 50%)',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                {/* Glowing Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(108, 99, 255, 0.3)',
                  }}
                />

                {/* Neon Glow */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient.includes('6C63FF') ? '#6C63FF' : '#3E00FF'}20, transparent)`,
                    filter: 'blur(20px)',
                  }}
                />

                {/* Slide-up CTA */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#6C63FF]/20 to-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#6C63FF] font-semibold">Learn More →</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperledgerServicesSection;
