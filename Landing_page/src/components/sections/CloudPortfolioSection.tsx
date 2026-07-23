import React from 'react';
import { motion } from 'framer-motion';

export const CloudPortfolioSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Cloud Portfolio</h2>
        </motion.div>
      </div>
    </section>
  );
};