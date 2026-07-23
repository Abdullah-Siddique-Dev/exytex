import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Users, TrendingUp } from 'lucide-react';

export const SoftwareWorldwideSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="w-4 h-4 mr-2" />
              Global Software Solutions
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>
              A Software Company Serving{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-base md:text-lg text-gray-700 leading-relaxed" 
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 110,
                  damping: 19,
                  bounce: 0.25
                }}
              >
                Whenever we are casting about any software house, the only thing comes first in our minds is on time and satisfied work. 
                Plenty of software houses work for providing software development services, however, only few of them sustain their reputation. 
                <span className="font-semibold text-gray-900"> Exytex Technologies is one of them.</span>
              </motion.p>

              <motion.p 
                className="text-base md:text-lg text-gray-700 leading-relaxed" 
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, scale: 0.4, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.9, 
                  type: "spring", 
                  stiffness: 90,
                  damping: 16,
                  bounce: 0.3,
                  delay: 0.2
                }}
              >
                Exytex have in house development teams and also an office development team. Workers do the project with full enthusiasm 
                and determination. The supreme motto of exytex is to provide non-pareil results.
              </motion.p>

              <motion.p 
                className="text-base md:text-lg text-gray-700 leading-relaxed" 
                style={{ fontFamily: '"Inter", sans-serif' }}
                initial={{ opacity: 0, scale: 0.3, rotateZ: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 1.0, 
                  type: "spring", 
                  stiffness: 80,
                  damping: 15,
                  bounce: 0.35,
                  delay: 0.4
                }}
              >
                Exytex is the registered Software firm, where any client from all over the world can attain their required work. 
                <span className="font-semibold text-blue-600"> Exytex got their highest ranks in very less time.</span>
              </motion.p>
            </motion.div>

            {/* Right - Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { icon: Globe, value: 'Worldwide', label: 'Global Reach', color: 'from-blue-500 to-cyan-500' },
                { icon: Award, value: '5.00', label: 'Rating', color: 'from-purple-500 to-pink-500' },
                { icon: Users, value: 'In-House', label: 'Dev Teams', color: 'from-green-500 to-emerald-500' },
                { icon: TrendingUp, value: 'Top Rank', label: 'Achievement', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Features */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { title: 'On-Time Delivery', desc: 'Committed to meeting deadlines with quality work' },
              { title: 'Satisfied Clients', desc: 'Building lasting relationships through excellence' },
              { title: 'Registered Firm', desc: 'Trusted software company serving globally' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mb-3"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
