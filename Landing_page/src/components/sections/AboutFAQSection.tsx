import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const AboutFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What makes your Microsoft Dynamics 365 implementation different?',
      answer: 'We provide comprehensive, tailored solutions that integrate ERP, CRM, and Power BI seamlessly. Our approach focuses on understanding your unique business needs and delivering solutions that drive real transformation and measurable results.'
    },
    {
      question: 'How long does a typical Dynamics 365 implementation take?',
      answer: 'Implementation timelines vary based on complexity, but most projects are completed within 3-6 months. We follow a structured approach with clear milestones and regular communication to ensure timely delivery.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes, we offer comprehensive post-implementation support including 24/7 technical assistance, regular system updates, user training, and continuous optimization to ensure your system performs at its best.'
    },
    {
      question: 'Can you integrate Dynamics 365 with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integrations with various third-party systems, legacy applications, and cloud platforms. Our integration expertise ensures data flows smoothly across all your business systems.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve diverse industries including non-profits, healthcare, manufacturing, retail, financial services, and more. Our team has deep industry knowledge to deliver solutions that meet specific sector requirements.'
    },
    {
      question: 'How do you ensure data security during migration?',
      answer: 'We follow industry-best security practices including encrypted data transfer, secure backup procedures, compliance with regulations like GDPR, and comprehensive testing to ensure your data remains protected throughout the process.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our Dynamics 365 implementation and services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
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
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-sm text-gray-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.button
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};