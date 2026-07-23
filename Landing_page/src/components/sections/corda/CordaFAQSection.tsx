import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you provide professional Blockchain consulting?',
    answer: 'Yes, we do. Beginning with requirement gathering, technical design, development, deployment, and maintenance – we provide a complete ecosystem to adopt, monetize, and upkeep Blockchain-based solutions.'
  },
  {
    question: 'How does outsourcing for CorDapp development work?',
    answer: 'We provide end-to-end outsourcing, where our Corda-certified developers handle architecture, coding, testing, and deployment while keeping transparency and progress tracking.'
  },
  {
    question: 'How much does it cost to outsource the project to a Corda development company?',
    answer: 'The cost depends on project scope, tech stack, and timeline. We ensure cost-efficiency with flexible engagement models.'
  },
  {
    question: 'Does a professional Corda development company offer post-development support?',
    answer: 'Yes, we offer 24×7 post-deployment monitoring, maintenance, and performance optimization.'
  },
  {
    question: 'I want to deploy a custom Corda app on a private network. How to go for it?',
    answer: 'Our consultants will guide you through platform setup, node configuration, and deployment with complete privacy and security compliance.'
  },
  {
    question: 'How long does it take for a Corda Blockchain development project to go live?',
    answer: 'Depending on complexity, projects typically take 4–12 weeks from planning to deployment.'
  },
  {
    question: 'Can I avail of your services for cryptocurrency app development?',
    answer: 'Yes, our experts can develop crypto-enabled solutions leveraging secure and compliant Blockchain ecosystems.'
  },
  {
    question: 'Can I hire Corda developers on a full-time basis?',
    answer: 'Yes, we offer flexible engagement — full-time, part-time, or hourly dedicated developers.'
  },
  {
    question: 'I need Corda developers for my ongoing project. Can you help?',
    answer: 'Absolutely. We can seamlessly integrate our developers into your existing team for immediate project acceleration.'
  },
  {
    question: 'Can I hire Corda developers for augmenting my in-house Blockchain team?',
    answer: 'Yes, you can augment your internal team with our Corda-certified experts for architecture, coding, auditing, or optimization.'
  }
];

const CordaFAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about our Corda development services
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
                  className="relative rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ padding: '2px' }}
                  />
                  
                  {/* Content Container */}
                  <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-xl">
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
                        <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-blue-400' : 'text-gray-400'}`} />
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
                            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-4" />
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Glow Effect on Open */}
                {isOpen && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
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

export default CordaFAQSection;
