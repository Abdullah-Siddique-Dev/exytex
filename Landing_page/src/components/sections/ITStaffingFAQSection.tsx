import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const ITStaffingFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of IT professionals can you provide?',
      answer: 'We provide a wide range of IT professionals including software developers (full-stack, frontend, backend), DevOps engineers, data scientists, UI/UX designers, project managers, QA engineers, cybersecurity experts, cloud architects, mobile developers, and more. All candidates are pre-vetted and have proven experience.'
    },
    {
      question: 'How quickly can you provide IT talent?',
      answer: 'Our typical turnaround time is 1-2 weeks from requirement submission to candidate presentation. For urgent needs, we can provide qualified candidates within 3-5 business days. The timeline depends on the specific skill requirements and availability.'
    },
    {
      question: 'What are your engagement models?',
      answer: 'We offer flexible engagement models: Staff Augmentation (temporary or long-term), Dedicated Teams (full-time dedicated resources), Project-Based (fixed scope and timeline), and Contract-to-Hire (trial period before permanent hire). Choose what works best for your needs.'
    },
    {
      question: 'How do you ensure the quality of IT professionals?',
      answer: 'Our rigorous vetting process includes technical assessments, coding challenges, portfolio reviews, reference checks, and interviews. We verify skills, experience, and cultural fit. Only the top 5% of applicants make it through our screening process.'
    },
    {
      question: 'What if the hired professional doesn\'t work out?',
      answer: 'We offer a replacement guarantee. If you\'re not satisfied with a candidate within the first 2 weeks, we\'ll provide a replacement at no additional cost. We also provide ongoing support to ensure smooth collaboration throughout the engagement.'
    },
    {
      question: 'Do you handle payroll and benefits for the IT staff?',
      answer: 'Yes, we can handle all administrative tasks including payroll, benefits, taxes, and compliance. You can choose between our managed services (we handle everything) or direct hire (you manage the employee). We offer flexible arrangements based on your preferences.'
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
            Common questions about our IT staffing services
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
