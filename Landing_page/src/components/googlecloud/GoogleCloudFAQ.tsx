import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const GoogleCloudFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'I want to migrate my workload to Google Cloud. Can you help?',
      answer: 'Yes, we can. As one of the leading Google Cloud Consultancy, we offer professional Google Cloud migration services including application rehosting, refactoring, and rebuilding.'
    },
    {
      question: 'How does outsourcing for Google Cloud migration work?',
      answer: 'We follow a structured approach: initial assessment, migration strategy planning, proof of concept, execution, testing, and post-migration support. Our team works closely with yours to ensure minimal disruption to your operations.'
    },
    {
      question: 'How much does it cost to outsource the project to a Google Cloud consulting firm?',
      answer: 'The cost varies based on project scope, complexity, and duration. We provide customized quotes after understanding your specific requirements and conducting an initial assessment of your infrastructure.'
    },
    {
      question: 'Do professional GCP consulting services offer ad-hoc support?',
      answer: 'Yes, we offer flexible support models including ad-hoc support, SLA-based support, and dedicated team arrangements to meet your specific needs.'
    },
    {
      question: 'I want to deploy a hybrid infrastructure. Can you help?',
      answer: 'Absolutely. We specialize in hybrid cloud architectures that combine on-premises infrastructure with Google Cloud services, ensuring seamless integration and optimal performance.'
    },
    {
      question: 'How long does a Google Cloud migration project take?',
      answer: 'Timeline depends on the complexity and size of your infrastructure. Simple migrations can take 2-4 weeks, while complex enterprise migrations may take 3-6 months. We provide detailed timelines after the initial assessment.'
    },
    {
      question: 'I want to optimize my apps in Google Cloud. Can you help?',
      answer: 'Yes, we provide comprehensive application optimization services including performance tuning, cost optimization, security enhancements, and architecture improvements for applications running on Google Cloud.'
    },
    {
      question: 'Can I hire Google Cloud professionals on a full-time basis?',
      answer: 'Yes, we offer dedicated hiring models where you can hire certified Google Cloud professionals as full-time resources for your projects.'
    },
    {
      question: 'I want to hire Google Cloud developers to scale-up my ongoing project. Can you help?',
      answer: 'Absolutely. We can quickly onboard skilled Google Cloud developers to augment your existing team and accelerate your project delivery.'
    },
    {
      question: 'Can I hire certified Google Cloud professionals as extension to my in-house team?',
      answer: 'Yes, we provide team extension services where our certified Google Cloud professionals work as an extension of your in-house team, following your processes and methodologies.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our Google Cloud services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-blue-400 flex-shrink-0" />
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
                    <div className="px-8 pb-6 text-gray-300 leading-relaxed">
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
