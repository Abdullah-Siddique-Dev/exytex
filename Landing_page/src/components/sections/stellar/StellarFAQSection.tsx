import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you provide professional Blockchain consulting?',
    answer:
      'Yes, we provide end-to-end services from requirement gathering to deployment and maintenance.',
  },
  {
    question: 'How does outsourcing for Stellar FinTech apps work?',
    answer:
      'Our team handles full development or augmentation of your in-house team with complete transparency.',
  },
  {
    question: 'How much does it cost to outsource the project?',
    answer:
      'Costs depend on project scope, platform, and customizations; detailed quotes provided after assessment.',
  },
  {
    question: 'Do you offer post-development support?',
    answer:
      'Yes, 24×7 support ensures smooth adoption and issue resolution.',
  },
  {
    question: 'I want to deploy a custom Stellar wallet on a private network. How?',
    answer:
      'We analyze your requirements, identify the best Stellar platform, and deploy the wallet securely.',
  },
  {
    question: 'How long does it take for a Stellar Blockchain project to go live?',
    answer:
      'Typical timelines range from 4–12 weeks depending on complexity.',
  },
  {
    question: 'Can I avail of your services for cryptocurrency app development?',
    answer:
      'Yes, we develop secure wallets, exchanges, and token solutions on Stellar.',
  },
  {
    question: 'Can I hire Stellar developers full-time?',
    answer:
      'Yes, developers are available for remote or on-site full-time engagements.',
  },
  {
    question: 'Can you augment my in-house Blockchain team?',
    answer:
      'Absolutely, we provide experienced Stellar developers to complement internal resources.',
  },
];

const StellarFAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 bg-[#001F54] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6]">
              Questions
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Everything you need to know about our Stellar blockchain services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="relative"
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Glassmorphic Card with Gradient Border */}
                  <div className="relative bg-gradient-to-br from-[#001F54]/80 to-[#1a1a3e]/80 backdrop-blur-sm rounded-2xl p-[2px]">
                    <div className="bg-[#001F54]/90 rounded-2xl">
                      {/* Question */}
                      <div className="flex items-center justify-between p-6">
                        <h3 className="text-lg font-semibold text-white pr-8">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown
                            className={`w-6 h-6 ${
                              isOpen ? 'text-[#6C63FF]' : 'text-gray-400'
                            }`}
                          />
                        </motion.div>
                      </div>

                      {/* Answer */}
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
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Neon Glow on Active */}
                  {isOpen && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl -z-10"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(108, 99, 255, 0.5)',
                          '0 0 40px rgba(139, 92, 246, 0.5)',
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="https://calendly.com/saadinsides"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Experts
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StellarFAQSection;
