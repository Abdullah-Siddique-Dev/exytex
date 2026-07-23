import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  const colors = {
    success: 'from-green-500 to-emerald-500',
    error: 'from-red-500 to-pink-500',
    info: 'from-blue-500 to-purple-500'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={`fixed top-20 right-4 z-50 bg-gradient-to-r ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg`}
        >
          <div className="flex items-center space-x-2">
            <span>{message}</span>
            <button onClick={onClose} className="ml-2 text-white/80 hover:text-white">
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
