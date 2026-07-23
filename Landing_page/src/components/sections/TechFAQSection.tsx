import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const TechFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies (React, Angular, Vue.js), mobile development (iOS, Android, React Native, Flutter), blockchain (Ethereum, Hyperledger), cloud platforms (AWS, Azure, Google Cloud), and AI/ML solutions.'
    },
    {
      question: 'How do you choose the right technology for my project?',
      answer: 'We analyze your project requirements, scalability needs, budget, timeline, and long-term goals to recommend the most suitable technology stack that ensures optimal performance and maintainability.'
    },
    {
      question: 'Do you provide support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and technical assistance to ensure your application runs smoothly.'
    },
    {
      question: 'Can you work with existing technology stacks?',
      answer: 'Absolutely! Our team has extensive experience working with legacy systems and can seamlessly integrate new features or modernize existing applications while maintaining compatibility.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow agile methodology with regular sprints, continuous integration, thorough testing, and transparent communication. You receive regular updates and can track progress throughout the development cycle.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. A simple website may take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the consultation phase.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Got Questions? We've Got Answers
            </motion.h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
