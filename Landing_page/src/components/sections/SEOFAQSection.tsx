import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const SEOFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much do you charge for SEO services?',
      answer: 'The cost of services depends on the complexity of your market. As a rule, our prices start at 250$ per month. Contact our SEO team to find out how much you will need to spend.'
    },
    {
      question: 'How long does it take to achieve results with SEO?',
      answer: 'Depending on how competitive the market is, clients who work with us see results within 3-12 months. There is no shortcut to SEO. There is no magic wand that will spread the dust of SEO all over your site and allow your site to be at the top of many search queries the next day. Simply put, SEO is a long-term marketing strategy. If done right, you should be able to see measurable SEO results in as little as 3-12 months.'
    },
    {
      question: 'What do you need from me to get started?',
      answer: 'We need as much information about your business and website as possible. We will also need access to Google Analytics, Google Tag Manager, Google Search Console, access to the site administration panel, and FTP.'
    },
    {
      question: 'How to control the execution of work?',
      answer: 'To control the status of the project and the execution of work on schedule, you can contact your personal manager or view all information on the implementation in your personal account: positions, traffic, current tasks, completed tasks, and much more. As a standard, we send reports at the beginning of the month following the reporting month, as well as upon request.'
    },
    {
      question: 'Will I receive a performance report?',
      answer: 'Yes, we carry out a personalized, complete, and understandable monthly report, in which not only the main metrics are analyzed, but also advanced metrics with the evolution of the account.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Get answers to common questions about our SEO services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 rounded-xl p-5 sm:p-6 text-left transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
