import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const WebDevFAQSection: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why choose a web company for a development project?",
      answer: "When you entrust the implementation of your IT solution to a specialized web development company near me like Exytex, you have two advantages: a team of experts will be present to target your needs and you can benefit from a price adapted to your budget."
    },
    {
      question: "What are the services offered by a web agency?",
      answer: "Web-agency offers development services for web applications, websites or online platforms, natural or paid referencing, digital marketing, web design, etc."
    },
    {
      question: "Is it possible to guarantee the good positioning of my website?",
      answer: "SEO-web Guaranteeing the good positioning of a website on the first page of the Google search engine is not accessible by a professional SEO. However, the agency sets up and implements all possible and required means to achieve the positioning objective."
    },
    {
      question: "How much time is needed for the development of my website?",
      answer: "Website-development the duration of creation of your website depends on several factors such as the complexity of your project as well as the objectives to be achieved. Standard lead times are generally 3 to 12 weeks for the execution of the entire process from project initiation to final set-up."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Poppins'] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500 cursor-default">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-600 font-['Inter'] text-lg max-w-2xl mx-auto leading-relaxed">
            Get answers to the most common questions about our web development services
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - FAQ Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-gray-900 font-['Poppins'] pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      openIndex === index 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-6 py-5">
                        <p className="text-gray-700 font-['Inter'] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Need Help Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-8 h-fit"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
              
              <div className="text-center relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-['Poppins']">
                  Need More Help?
                </h3>
                
                <p className="text-gray-600 font-['Inter'] mb-6 text-sm leading-relaxed">
                  Can't find what you're looking for? Let's discuss your web development project and find the perfect solution.
                </p>
                
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      navigate('/');
                      setTimeout(() => {
                        scrollToSection('#contact');
                      }, 300);
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 font-['Poppins'] shadow-lg hover:shadow-xl"
                  >
                    Book a Free Call
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/our-work')}
                    className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 font-['Poppins']"
                  >
                    View Portfolio
                  </motion.button>
                </div>
                
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Available Now</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { WebDevFAQSection };