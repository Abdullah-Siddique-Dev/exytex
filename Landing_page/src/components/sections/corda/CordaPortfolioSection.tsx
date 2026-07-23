import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Server, Monitor, Cloud, TestTube } from 'lucide-react';

const portfolioItems = [
  {
    icon: Wrench,
    title: 'Development Tools',
    front: 'Modern Development Stack',
    back: 'IntelliJ IDEA, Gradle, Git, Docker, Kubernetes for streamlined Corda development'
  },
  {
    icon: Server,
    title: 'Backend Technologies',
    front: 'Robust Backend Systems',
    back: 'Kotlin, Java, Spring Boot, Node.js for scalable Corda node implementations'
  },
  {
    icon: Monitor,
    title: 'Frontend Technologies',
    front: 'Modern UI Frameworks',
    back: 'React, Angular, Vue.js for intuitive blockchain application interfaces'
  },
  {
    icon: Cloud,
    title: 'Cloud Coverage',
    front: 'Multi-Cloud Deployment',
    back: 'AWS, Azure, Google Cloud, IBM Cloud for flexible Corda network hosting'
  },
  {
    icon: TestTube,
    title: 'Testing Frameworks',
    front: 'Comprehensive Testing',
    back: 'JUnit, Mockito, Corda Test Framework for reliable smart contract validation'
  }
];

const CordaPortfolioSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flipped, setFlipped] = useState<number[]>([]);

  const handleFlip = (index: number) => {
    setFlipped(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Corda Development Portfolio
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cutting-edge technologies and tools for enterprise blockchain solutions
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-64 perspective-1000"
              onClick={() => handleFlip(index)}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                animate={{ rotateY: flipped.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 p-6 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <motion.div
                    className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.front}</p>
                  <p className="text-xs text-blue-400 mt-4">Click to learn more</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 p-6 flex flex-col items-center justify-center text-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.back}</p>
                  <p className="text-xs text-purple-400 mt-4">Click to flip back</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CordaPortfolioSection;
