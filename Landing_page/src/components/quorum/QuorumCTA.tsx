import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export const QuorumCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business with Quorum?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Let's discuss how our Quorum development expertise can help you build secure, 
          scalable, and high-performance blockchain solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>

          <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-cyan-500/50 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Schedule a Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};
