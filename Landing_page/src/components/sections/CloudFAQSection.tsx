import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const CloudFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What cloud platforms do you work with?",
      answer: "We work with all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions. Our team is certified in multiple cloud technologies to provide the best solution for your needs."
    },
    {
      question: "How long does cloud migration take?",
      answer: "Cloud migration timelines vary based on the complexity and size of your infrastructure. Simple migrations can take 2-4 weeks, while complex enterprise migrations may take 3-6 months. We provide detailed migration plans with realistic timelines during our assessment phase."
    },
    {
      question: "Is my data secure in the cloud?",
      answer: "Yes, cloud security is our top priority. We implement enterprise-grade security measures including encryption at rest and in transit, multi-factor authentication, network security, compliance monitoring, and regular security audits to ensure your data is protected."
    },
    {
      question: "What are the cost benefits of moving to the cloud?",
      answer: "Cloud migration typically reduces IT costs by 20-50% through elimination of hardware maintenance, reduced energy costs, pay-as-you-use pricing models, automatic scaling, and reduced need for on-premises IT staff. We provide detailed cost analysis and ROI projections."
    },
    {
      question: "Do you provide ongoing cloud management and support?",
      answer: "Yes, we offer comprehensive managed cloud services including 24/7 monitoring, performance optimization, security management, backup and disaster recovery, cost optimization, and technical support to ensure your cloud infrastructure runs smoothly."
    },
    {
      question: "Can you help with cloud compliance requirements?",
      answer: "Absolutely! We have extensive experience with various compliance frameworks including GDPR, HIPAA, SOC 2, PCI DSS, and industry-specific regulations. We ensure your cloud infrastructure meets all necessary compliance requirements."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked <span className="text-blue-600">Questions</span>
            </motion.h2>
            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get answers to common questions about our cloud solutions and services
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <motion.div
                    className="px-6 pb-6 pt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};