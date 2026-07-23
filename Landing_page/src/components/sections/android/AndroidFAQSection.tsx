import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'How does outsourcing to an Android development company work?', answer: 'SMEs assess requirements and offer project proposal with engagement models. Development starts after signing the contract.' },
  { question: "I don't have much technical knowledge. Can I still outsource the project?", answer: 'Yes, our team guides you at every step from concept to deployment.' },
  { question: 'Can I hire an Android developer full-time?', answer: 'Yes, full-time, part-time, or project-based developers available.' },
  { question: 'How much does it cost?', answer: 'Pricing depends on project complexity, scope, and engagement model.' },
  { question: 'How will I assess project progress?', answer: 'Regular updates, milestone delivery, and review sessions with your project manager.' },
  { question: 'Do you provide post-development support?', answer: 'Yes, continuous monitoring, updates, and bug fixes.' },
];

const AndroidFAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-[#0B3D91] relative overflow-hidden">
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
                  <div className="relative bg-gradient-to-br from-[#0B3D91]/80 to-[#4B0082]/80 backdrop-blur-sm rounded-2xl">
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

export default AndroidFAQSection;
