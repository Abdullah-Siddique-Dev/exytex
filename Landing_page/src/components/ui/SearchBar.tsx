import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white/80 hover:text-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute right-0 top-12 w-80 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/60 py-2 focus:outline-none focus:border-blue-400"
              autoFocus
            />
            <div className="mt-4 space-y-2">
              {['Services', 'Portfolio', 'About Us', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  className="text-white/80 hover:text-white cursor-pointer py-1"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
