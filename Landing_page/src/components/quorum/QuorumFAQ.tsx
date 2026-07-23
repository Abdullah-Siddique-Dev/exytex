import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Do you provide professional Blockchain consulting?', a: 'Yes. From requirement gathering and technical design to deployment and maintenance, we provide a complete ecosystem for Blockchain adoption and growth.' },
  { q: 'How does outsourcing for Quorum application development work?', a: 'Through structured milestones, agile methodology, and transparent collaboration.' },
  { q: 'How much does it cost to outsource the project to a Quorum development company?', a: 'Pricing depends on complexity, timeline, and team structure. We offer flexible models: fixed-cost, milestone-based, and dedicated resources.' },
  { q: 'Does a professional Quorum development company offer post-development support?', a: 'Yes. We provide long-term monitoring, performance optimization, and updates.' },
  { q: 'I want to deploy a custom Quorum app on a private network. How to go for it?', a: 'Our experts will design, configure, and deploy a private Quorum network with full compliance and performance optimization.' },
  { q: 'How long does it take for a Quorum solution to go live?', a: 'Typically between 4–12 weeks, depending on the project\'s complexity and integrations.' },
  { q: 'Can I avail of your services for cryptocurrency app development?', a: 'Absolutely. We specialize in cryptocurrency exchanges, wallets, and token systems.' },
  { q: 'Can I hire Quorum developers on a full-time basis?', a: 'Yes. Certified Quorum developers can be hired for long-term dedicated engagement.' },
  { q: 'I need Quorum developers for my ongoing project. Can you help?', a: 'Yes. We offer flexible team augmentation to strengthen your in-house team.' },
  { q: 'Can I hire Quorum developers for augmenting my in-house Blockchain team?', a: 'Definitely. Our experts integrate seamlessly to accelerate delivery and quality.' },
];

export const QuorumFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-blue-950 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.q}</span>
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
                    <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
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
