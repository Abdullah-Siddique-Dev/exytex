import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, DollarSign, FileCheck, RefreshCw, Shield, Headphones } from 'lucide-react';

const offerings = [
  {
    icon: Code,
    title: 'Corda Consulting Services',
    description: 'Expert guidance on Corda architecture, implementation strategy, and best practices for enterprise blockchain solutions.'
  },
  {
    icon: DollarSign,
    title: 'CorDapps for Financial Industry',
    description: 'Custom distributed applications for banking, insurance, and financial services with regulatory compliance.'
  },
  {
    icon: FileCheck,
    title: 'Smart Contracts',
    description: 'Secure and efficient smart contract development with automated business logic and transaction validation.'
  },
  {
    icon: RefreshCw,
    title: 'Blockchain App Porting',
    description: 'Seamless migration of existing blockchain applications to Corda platform with minimal downtime.'
  },
  {
    icon: Shield,
    title: 'Smart Contracts Audit',
    description: 'Comprehensive security audits and code reviews to ensure contract integrity and vulnerability protection.'
  },
  {
    icon: Headphones,
    title: 'Corda App Support',
    description: '24/7 maintenance, monitoring, and technical support for deployed Corda applications and networks.'
  }
];

const CordaOfferingsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Corda Development Offerings
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive blockchain solutions tailored to your business needs
          </p>
        </motion.div>

        {/* 3D Card Carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%)',
                  }}
                />
                
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <offering.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {offering.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CordaOfferingsSection;
