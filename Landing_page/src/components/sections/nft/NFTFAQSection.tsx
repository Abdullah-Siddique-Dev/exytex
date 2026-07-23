import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'How much does NFT Marketplace Development cost?', answer: 'Costs depend on project complexity, features, and budget. We provide detailed quotes after initial consultation.' },
  { question: 'How long does it take to build an NFT Marketplace?', answer: 'Typically 6–12 weeks depending on features and customizations required.' },
  { question: 'Can I have a marketplace like OpenSea?', answer: 'Yes, fully custom, multi-chain marketplaces can be developed with similar or enhanced features.' },
  { question: 'Where can I find NFT developers?', answer: 'On-demand, full-time, or project-based developers are available through our services.' },
  { question: 'Do you provide ongoing support after deployment?', answer: 'Yes, continuous monitoring, maintenance, and upgrades are provided 24/7.' },
];

const NFTFAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#0B3D91] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm rounded-2xl">
                    <div className="flex items-center justify-between p-6">
                      <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-[#6C63FF]' : 'text-gray-400'}`} />
                      </motion.div>
                    </div>

                    <AnimatePresence mode="sync">
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="h-px bg-gradient-to-r from-transparent via-[#6C63FF]/50 to-transparent mb-4" />
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {isOpen && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl -z-10"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(108, 99, 255, 0.5)',
                          '0 0 40px rgba(62, 0, 255, 0.5)',
                          '0 0 20px rgba(108, 99, 255, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NFTFAQSection;
