import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { Portal } from './Portal';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  company: string;
  projectType: string;
  message: string;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        company: '',
        projectType: '',
        message: ''
      });
    }, 2000);
    
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Modal Container */}
            <div className="min-h-full flex items-center justify-center p-4">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl w-full max-w-lg shadow-2xl border border-blue-500/30 my-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/10 hover:bg-red-500 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 z-50 border border-white/10 hover:border-red-500"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="px-6 py-5">
                  {/* Success Message */}
                  {showSuccess ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 10 }}
                      >
                        <CheckCircle className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                      <p className="text-blue-200 text-sm">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <>
                      {/* Header */}
                      <div className="text-center mb-5">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          Let's Discuss Your Project
                        </h2>
                        <p className="text-blue-300/80 text-sm">
                          Fill out the form and we'll contact you within 24 hours
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Row 1: Full Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-white/90 text-xs font-medium mb-1">
                              Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2.5 bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-white/90 text-xs font-medium mb-1">
                              Email <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2.5 bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        {/* Row 2: Phone & Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-white/90 text-xs font-medium mb-1">
                              Phone Number <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2.5 bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                          <div>
                            <label className="block text-white/90 text-xs font-medium mb-1">
                              Company Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2.5 bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm"
                              placeholder="Your Company"
                            />
                          </div>
                        </div>

                        {/* Project Type */}
                        <div>
                          <label className="block text-white/90 text-xs font-medium mb-1">
                            Project Type <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2.5 bg-slate-800/80 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 cursor-pointer appearance-none text-sm pr-10"
                            >
                              <option value="" disabled>Select a project type</option>
                              <option value="web-development">Web Development</option>
                              <option value="mobile-app">Mobile App</option>
                              <option value="e-commerce">E-commerce Solution</option>
                              <option value="ui-ux-design">UI/UX Design</option>
                              <option value="digital-marketing">Digital Marketing</option>
                              <option value="other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-white/90 text-xs font-medium mb-1">
                            Project Details <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className="w-full px-3 py-2.5 bg-slate-800/80 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none text-sm"
                            placeholder="Tell us about your project..."
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-sm active:scale-[0.98]"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            'Send Message'
                          )}
                        </button>

                        <p className="text-[11px] text-blue-300/50 text-center">
                          🔒 Your information is secure and will never be shared
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
