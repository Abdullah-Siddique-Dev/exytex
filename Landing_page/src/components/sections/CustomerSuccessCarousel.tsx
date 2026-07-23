import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const successStories = [
  {
    id: 1,
    type: 'Digital Agency',
    title: 'Superior E-commerce Platform',
    description: 'Delivered a superior e-commerce platform for a digital agency\'s retailer client. Our advanced solution led to better engagement, better visibility, and high conversion rates.',
    icon: '🛒',
    gradient: 'from-purple-500 to-pink-500',
    metrics: {
      engagement: '+150%',
      visibility: '+200%',
      conversion: '+85%'
    }
  },
  {
    id: 2,
    type: 'Creative Design Agency',
    title: 'Integrated Systems Solution',
    description: 'Integrated CRM, accounting, inventory, and project management systems and delivered cost-effective DMS solutions for an agency serving a freight company.',
    icon: '🎨',
    gradient: 'from-blue-500 to-cyan-500',
    metrics: {
      efficiency: '+120%',
      cost_reduction: '-40%',
      integration: '100%'
    }
  },
  {
    id: 3,
    type: 'Marketing Agency',
    title: 'B2B Web Portal',
    description: 'Built a cutting-edge B2B web portal for a wealth management company and developed their application architecture and provided technical support.',
    icon: '📊',
    gradient: 'from-green-500 to-teal-500',
    metrics: {
      performance: '+180%',
      user_satisfaction: '+95%',
      scalability: '+300%'
    }
  },
  {
    id: 4,
    type: 'MarTech Agency',
    title: 'HIPAA Compliant Mobile App',
    description: 'Developed and deployed a HIPAA & SEPA compliant mobile app to enable a healthcare provider digitize their presence.',
    icon: '🏥',
    gradient: 'from-orange-500 to-red-500',
    metrics: {
      compliance: '100%',
      adoption: '+250%',
      security: 'A+'
    }
  }
];

const CustomerSuccessCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successStories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-blue-900/60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Customer Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real results from real partnerships with digital agencies
          </p>
        </motion.div>

        <div 
          className="relative h-[500px] perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            {successStories.map((story, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              
              return (
                <motion.div
                  key={story.id}
                  className="absolute inset-0 w-full"
                  initial={{ 
                    rotateY: offset * 60,
                    z: -absOffset * 300,
                    opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.6,
                    scale: absOffset === 0 ? 1 : 0.7 - absOffset * 0.1
                  }}
                  animate={{ 
                    rotateY: offset * 60,
                    z: -absOffset * 300,
                    opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.6,
                    scale: absOffset === 0 ? 1 : 0.7 - absOffset * 0.1
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className={`glass-card h-full p-8 bg-gradient-to-br ${story.gradient}/10 border border-white/20`}>
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <motion.div
                          className={`w-20 h-20 rounded-full bg-gradient-to-r ${story.gradient} flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg`}
                          whileHover={{ rotateY: 180, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {story.icon}
                        </motion.div>
                        <div className="text-sm text-purple-300 font-semibold mb-2">{story.type}</div>
                        <h3 className="text-3xl font-bold text-white mb-4">{story.title}</h3>
                      </div>

                      {/* Description */}
                      <div className="flex-1 mb-8">
                        <p className="text-lg text-white/90 leading-relaxed text-center">
                          {story.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(story.metrics).map(([key, value], idx) => (
                          <motion.div
                            key={key}
                            className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className={`text-2xl font-bold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent mb-1`}>
                              {value}
                            </div>
                            <div className="text-sm text-white/70 capitalize">
                              {key.replace('_', ' ')}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  500+
                </motion.div>
                <p className="text-white/80">Projects Delivered</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  98%
                </motion.div>
                <p className="text-white/80">Success Rate</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  24/7
                </motion.div>
                <p className="text-white/80">Support Available</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  50+
                </motion.div>
                <p className="text-white/80">Countries Served</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerSuccessCarousel;