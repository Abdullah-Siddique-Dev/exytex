import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    id: 1,
    title: 'Agile Approach',
    description: 'We understand the agency culture and recognize the need to be nimble and agile. Hence, we build quality solutions with speed and accuracy.',
    icon: '⚡',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    title: 'Drive Digital Maturity',
    description: 'Our emerging tech prowess will help you refine your client\'s front-end digital experience and transform customer journeys.',
    icon: '🚀',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 3,
    title: 'We\'re Gold',
    description: 'We are certified Salesforce and Microsoft Gold Partners offering dedicated integrations, solutions & services.',
    icon: '🏆',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    id: 4,
    title: 'Onsite Project Management Support',
    description: 'Our technical people work with you in real time to ensure delivery of short-term, quick turnaround projects.',
    icon: '🤝',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    id: 5,
    title: 'Certified Specialists',
    description: 'We have 1600+ certified experts who successfully drove results for 120+ projects.',
    icon: '👥',
    gradient: 'from-green-400 to-teal-500'
  },
  {
    id: 6,
    title: 'Industry Recognition',
    description: 'We attract top talent. This year, we have been recognized as a Great Place To Work® Certified.',
    icon: '⭐',
    gradient: 'from-indigo-400 to-purple-500'
  }
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-blue-900/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Why Agencies Choose DAMCO
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            as their Technology Partner
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02
              }}
              className="group perspective-1000"
            >
              <div className="glass-card p-8 h-full transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                <div className="relative">
                  {/* Floating icon with 3D effect */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg`}
                    whileHover={{ 
                      rotateY: 180,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="transform group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/30 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  1600+
                </motion.div>
                <p className="text-white/80">Certified Experts</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  120+
                </motion.div>
                <p className="text-white/80">Successful Projects</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  100%
                </motion.div>
                <p className="text-white/80">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;