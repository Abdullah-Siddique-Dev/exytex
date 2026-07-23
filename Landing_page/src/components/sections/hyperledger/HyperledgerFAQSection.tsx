import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you provide professional Blockchain consulting?',
    answer: 'Yes, from requirement gathering to deployment and maintenance, we provide full ecosystem support.'
  },
  {
    question: 'How does outsourcing for Hyperledger applications work?',
    answer: 'We provide full development, augmentation of your in-house team, or project-based consulting.'
  },
  {
    question: 'How much does it cost to outsource a Hyperledger project?',
    answer: 'Costs vary by scope, platform, and customization; detailed quotes provided after analysis.'
  },
  {
    question: 'Do you offer post-development support?',
    answer: 'Yes, 24×7 client assistance for smooth adoption and stability checks.'
  },
  {
    question: 'I want to deploy a custom Hyperledger wallet. How?',
    answer: 'We analyze your requirements and deploy a secure wallet on a private or enterprise network.'
  },
  {
    question: 'How long does it take for a Hyperledger project to go live?',
    answer: 'Typical timelines are 4–12 weeks depending on complexity.'
  },
  {
    question: 'Can I hire Hyperledger developers full-time?',
    answer: 'Yes, remote or on-site full-time engagements are available.'
  },
  {
    question: 'Can you augment my in-house Blockchain team?',
    answer: 'Absolutely, we provide skilled Hyperledger developers to complement internal resources.'
  },
];

const HyperledgerFAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0B3D91] to-[#1a1a3e] relative overflow-hidden">
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

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30 overflow-hidden"
              >
                <motion.button
                  className="w-full p-6 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#6C63FF]" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      className="h-1 bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HyperledgerFAQSection;
