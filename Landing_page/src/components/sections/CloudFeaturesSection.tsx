import React from 'react';
import { motion } from 'framer-motion';

export const CloudFeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud Features</h2>
        </motion.div>
      </div>
    </section>
  );
};