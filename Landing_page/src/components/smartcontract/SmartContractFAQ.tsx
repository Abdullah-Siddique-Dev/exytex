import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Do you provide professional Blockchain consulting?', answer: 'Yes, we do. Our team offers comprehensive blockchain consulting services including strategy development, platform selection, and implementation guidance.' },
  { question: 'What is a smart contract?', answer: 'A smart contract is a self-executing digital agreement with the terms directly written into code, automatically enforcing and executing when conditions are met.' },
  { question: 'Which blockchain platforms do you support?', answer: 'We support multiple platforms including Ethereum, Hyperledger, EOS, Hedera, Stellar, Ripple, Quorum, Corda, and more.' },
  { question: 'How long does smart contract development take?', answer: 'Timeline varies based on complexity. Simple contracts take 2-4 weeks, while complex enterprise solutions may take 2-3 months.' },
  { question: 'Do you provide smart contract audits?', answer: 'Yes, we provide comprehensive security audits to identify vulnerabilities and ensure your smart contracts are secure and optimized.' },
  { question: 'What industries do you serve?', answer: 'We serve multiple industries including finance, healthcare, supply chain, insurance, gaming, real estate, and more.' },
];

export const SmartContractFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-blue-950 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-cyan-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
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
                  >
                    <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
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
