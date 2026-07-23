import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Cpu, Smartphone, Database, Brain, Lock } from 'lucide-react';

const floatingIcons = [
  { Icon: Brain, color: 'from-purple-500 to-pink-500', delay: 0 },
  { Icon: Cloud, color: 'from-blue-500 to-cyan-500', delay: 0.2 },
  { Icon: Lock, color: 'from-green-500 to-emerald-500', delay: 0.4 },
  { Icon: Smartphone, color: 'from-orange-500 to-red-500', delay: 0.6 },
  { Icon: Database, color: 'from-indigo-500 to-purple-500', delay: 0.8 },
  { Icon: Cpu, color: 'from-cyan-500 to-blue-500', delay: 1 },
];

export const TechIntroduction: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.p
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              In today's fast-paced digital landscape, modernization is not just an option—it's a necessity. 
              Organizations must embrace agility, scalability, and innovation to stay ahead of the curve.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Damco, we understand the critical importance of leveraging cutting-edge technologies 
              to transform your mission-critical systems. With over 27 years of industry expertise, 
              we've helped countless organizations navigate their digital transformation journey.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our versatile technology stack empowers businesses to build robust, scalable, and future-ready 
              solutions. From blockchain to cloud computing, AI to mobile development, we bring together 
              the best technologies to drive your success.
            </motion.p>

            <motion.p
              className="text-cyan-400 text-lg font-medium"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Let's build the future together.
            </motion.p>
          </div>

          {/* Right: Image with Floating Icons Overlay */}
          <motion.div
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              alt="Technology Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60" />
            
            {/* Floating Icons on top of image */}
            {floatingIcons.map(({ Icon, color, delay }, index) => (
              <motion.div
                key={index}
                className={`absolute w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-2xl`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? {
                  opacity: 0.9,
                  scale: 1,
                  y: [0, -15, 0],
                } : {}}
                transition={{
                  opacity: { duration: 0.5, delay },
                  scale: { duration: 0.5, delay },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5,
                  }
                }}
                style={{
                  top: `${15 + (index % 3) * 30}%`,
                  left: `${10 + Math.floor(index / 3) * 40}%`,
                }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
