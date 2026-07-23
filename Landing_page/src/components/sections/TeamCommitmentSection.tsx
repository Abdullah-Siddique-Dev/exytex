import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, Star } from 'lucide-react';

export const TeamCommitmentSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Team & Commitment to Quality
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-6"></div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Exytex's strength lies in its dedicated team of professionals, led by Muhammad Saad — CEO & Founder, who drives growth with vision, mentorship, and commitment to client success.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              We are united by a shared passion for innovation, precision, and client satisfaction. Every project is aligned with our core values — quality, transparency, and long-term partnership.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Award, title: 'Quality', description: 'Excellence in every project' },
                { icon: Heart, title: 'Transparency', description: 'Open communication' },
                { icon: Users, title: 'Partnership', description: 'Long-term relationships' },
                { icon: Star, title: 'Innovation', description: 'Cutting-edge solutions' }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <value.icon className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-sm font-semibold text-gray-900">{value.title}</div>
                  <div className="text-xs text-gray-600">{value.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Leadership Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">Leadership Excellence</h3>
                <p className="text-sm opacity-90 mb-6">
                  Led by Muhammad Saad, CEO & Founder
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold">5+</div>
                    <div className="text-xs opacity-80">Years Leading</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs opacity-80">Client Focus</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-semibold mb-2">Our Leadership Drives:</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      Vision & Strategic Growth
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      Team Mentorship & Development
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      Client Success & Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};