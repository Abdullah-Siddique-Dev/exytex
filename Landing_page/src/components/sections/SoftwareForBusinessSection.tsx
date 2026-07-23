import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Flame, SlidersHorizontal, ShieldCheck, BadgeCheck, Star } from 'lucide-react';

export const SoftwareForBusinessSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
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
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
              style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Business Excellence
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
              Bespoke Software for{' '}
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Business
              </span>
            </h2>

            <motion.p 
              className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" 
              style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.6, rotateX: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100,
                damping: 18,
                bounce: 0.25
              }}
            >
              Talking about the consideration of Software companies, we should be aware about the deviation between software houses 
              and software companies. Mostly the software companies do have the software houses, however, sometimes they have different identification.
            </motion.p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 mb-12 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Content */}
              <div className="space-y-6">
                <motion.p 
                  className="text-base md:text-lg text-gray-700 leading-relaxed" 
                  style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0.4, rotateY: 45 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ 
                    duration: 0.9, 
                    type: "spring", 
                    stiffness: 90,
                    damping: 16,
                    bounce: 0.3
                  }}
                >
                  There are many software companies which are working in UK and Pakistan. Most of them get the highest rating by their superior work. 
                  Looking at the list of top software companies, <span className="font-semibold text-purple-600">Exytex invade in the race of best companies and got 5.00 rating.</span>
                </motion.p>

                <motion.p 
                  className="text-base md:text-lg text-gray-700 leading-relaxed" 
                  style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0.3, rotateX: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 110,
                    damping: 18,
                    bounce: 0.25,
                    delay: 0.2
                  }}
                >
                  This rating clearly shows the superiority of Exytex in the arena of best software services.
                </motion.p>

                <div className="bg-linear-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                    The Reasons Behind Our Success:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Zeal', 'Passion', 'Fair Work', 'Keenness', 'Enthusiastic Teamwork', 'Faith', 'Long Lasting Approach'].map((reason) => (
                      <span
                        key={reason}
                        className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                        style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}
                      >
                        {reason}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Rating Card */}
              <div className="flex justify-center">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-linear-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20"></div>
                  
                  {/* Main Rating Card */}
                  <div className="relative bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl p-5 sm:p-6 text-center shadow-2xl">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      ))}
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-white mb-1" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      5.00
                    </div>
                    <div className="text-white/90 text-sm font-medium mb-2" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      Perfect Rating
                    </div>
                    <div className="text-white/80 text-xs" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                      Top Software Company
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Features Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { icon: Flame, title: 'Passion Driven', desc: 'We love what we do and it shows in our work', color: 'from-red-500 to-pink-500' },
              { icon: Sparkles, title: 'Enthusiastic Team', desc: 'Full of energy and determination for every project', color: 'from-yellow-500 to-orange-500' },
              { icon: SlidersHorizontal, title: 'Fair & Keen', desc: 'Committed to fairness and attention to detail', color: 'from-green-500 to-emerald-500' },
              { icon: ShieldCheck, title: 'Long Lasting', desc: 'Building relationships that stand the test of time', color: 'from-blue-500 to-cyan-500' },
              { icon: BadgeCheck, title: 'Superior Quality', desc: 'Highest standards in every deliverable', color: 'from-purple-500 to-pink-500' },
              { icon: Briefcase, title: 'Professional', desc: 'Expert approach to business solutions', color: 'from-indigo-500 to-blue-500' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: '"Inter", sans-serif' } as React.CSSProperties}>
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
