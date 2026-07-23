import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, UserCheck, Handshake, Rocket, ArrowRight } from 'lucide-react';
import { ContactFormModal } from '../ui/ContactFormModal';

export const HireDeveloperProcess: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      icon: Search,
      title: 'Tell Us Your Needs',
      description: 'Share your project requirements, timeline, and preferred skills. Our team will understand your exact needs.',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: UserCheck,
      title: 'Get Matched',
      description: 'We match you with pre-vetted developers from our talent pool based on your specific requirements.',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Handshake,
      title: 'Interview & Select',
      description: 'Interview shortlisted candidates and select the perfect developer for your project with our support.',
      color: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Rocket,
      title: 'Start Building',
      description: 'Onboard your developer and start building amazing products with ongoing support from our team.',
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-4">
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our streamlined process makes hiring developers simple and efficient
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Glassmorphism Card */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full shadow-2xl hover:bg-white/15 transition-all duration-300">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Arrow for connection (except last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-white/30" />
                      </div>
                    )}

                    {/* Shine Effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-blue-200 mt-4 text-sm">No upfront costs • Free consultation</p>
        </motion.div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};