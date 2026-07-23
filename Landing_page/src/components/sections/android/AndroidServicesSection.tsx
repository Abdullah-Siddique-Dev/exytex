import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, TestTube, Building, Lightbulb, Headphones, ShoppingCart } from 'lucide-react';

const services = [
  { icon: Smartphone, title: 'Android Apps Development', description: 'End-to-end app development from ideation to Play Store launch', gradient: 'from-[#6C63FF] to-[#3E00FF]' },
  { icon: TestTube, title: 'Android App QA & Testing', description: 'Real-device testing across devices and OS versions for reliable performance', gradient: 'from-[#3E00FF] to-[#6C63FF]' },
  { icon: Building, title: 'Enterprise Mobility Solutions', description: 'Integrate apps with ERP, CRM, MarTech for seamless operations', gradient: 'from-[#6C63FF] to-[#0B3D91]' },
  { icon: Lightbulb, title: 'Android App Consulting', description: 'Advisory for app idea validation, monetization, retention strategies', gradient: 'from-[#0B3D91] to-[#3E00FF]' },
  { icon: Headphones, title: 'Android App Support & Maintenance', description: 'Bug fixes, analytics monitoring, versioning, and updates', gradient: 'from-[#3E00FF] to-[#6C63FF]' },
  { icon: ShoppingCart, title: 'Android eCommerce App Development', description: 'Multi-language, multi-currency, geo-specific product catalog apps', gradient: 'from-[#6C63FF] to-[#3E00FF]' },
];

const AndroidServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0B3D91] to-[#4B0082] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Android App Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#4B0082]/80 backdrop-blur-sm border border-[#6C63FF]/30">
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(108, 99, 255, 0.3)',
                      '0 0 40px rgba(62, 0, 255, 0.5)',
                      '0 0 20px rgba(108, 99, 255, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AndroidServicesSection;
