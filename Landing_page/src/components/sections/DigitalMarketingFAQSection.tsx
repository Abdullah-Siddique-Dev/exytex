import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const DigitalMarketingFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What digital marketing services do you offer?',
      answer: 'We offer comprehensive digital marketing services including SEO, SEM, social media marketing, email marketing, content marketing, PPC advertising, video marketing, and analytics. Our services are tailored to meet your specific business goals and target audience.'
    },
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Results vary depending on the strategy. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to show significant improvements. Social media and content marketing build momentum over time, usually showing measurable results within 2-4 months.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models based on your needs: monthly retainers, project-based pricing, or performance-based fees. Each package is customized to your budget and goals. Contact us for a detailed quote tailored to your requirements.'
    },
    {
      question: 'Do you work with small businesses or only large enterprises?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Our strategies are scalable and customized to fit your budget and growth stage. We believe every business deserves access to professional digital marketing services.'
    },
    {
      question: 'How do you measure campaign success?',
      answer: 'We use comprehensive analytics and KPIs including website traffic, conversion rates, ROI, engagement metrics, lead generation, and revenue growth. You\'ll receive detailed monthly reports with actionable insights and recommendations.'
    },
    {
      question: 'Can you help with social media management?',
      answer: 'Yes! We provide full social media management including strategy development, content creation, posting schedules, community management, paid advertising, and performance analytics across all major platforms.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg" style={{ fontFamily: '"Inter", sans-serif' }}>
            Everything you need to know about our digital marketing services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-8" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
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
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
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
