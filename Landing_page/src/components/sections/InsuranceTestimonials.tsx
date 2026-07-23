import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const InsuranceTestimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-indigo-50/95 to-purple-50/95"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Trusted by Insurance Leaders
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/60 to-gray-800/60 group-hover:from-gray-700/70 group-hover:to-gray-800/70 transition-all duration-300"></div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-16 md:p-20 shadow-2xl">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-full p-6 shadow-xl">
                  <Quote className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              <div className="flex justify-center gap-2 mb-8 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8 italic">
                  "We recognized the need to reimagine our insurance operations to keep pace with ever-evolving customer needs. 
                  Damco has helped us streamline our core process and leverage technology as a strategic asset. In a competitive 
                  market we are now in a much better position to deliver much more, at a faster pace."
                </p>
                <footer className="text-white/90">
                  <div className="text-lg font-semibold">Leading General Insurance Provider</div>
                  <div className="text-blue-200 mt-2 text-sm">Fortune 500 Company</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
