import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you provide professional Blockchain consulting?',
    answer: 'Yes, we offer comprehensive blockchain consulting services including strategy development, technology selection, architecture design, and implementation roadmap planning.',
  },
  {
    question: 'How does outsourcing for Ethereum software development work?',
    answer: 'We follow a structured approach: initial consultation, requirement analysis, proposal and timeline, development with regular updates, testing and deployment, and ongoing support.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Project costs vary based on complexity, features, and timeline. We provide detailed estimates after understanding your requirements. Contact us for a custom quote.',
  },
  {
    question: 'Do you offer post-development support?',
    answer: 'Absolutely! We provide 24/7 maintenance and support services including bug fixes, updates, performance monitoring, and feature enhancements.',
  },
  {
    question: 'How long does it take for an Ethereum app to go live?',
    answer: 'Timeline depends on project scope. A simple dApp might take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed timelines during planning.',
  },
  {
    question: 'Can I hire Ethereum developers full-time?',
    answer: 'Yes, we offer flexible engagement models including dedicated full-time developers, part-time resources, and project-based teams to suit your needs.',
  },
];

export const EthereumFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about our services</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
