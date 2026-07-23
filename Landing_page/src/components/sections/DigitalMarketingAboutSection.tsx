import React from 'react';
import { motion } from 'framer-motion';

export const DigitalMarketingAboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-inter">
            What is a Digital Marketing Agency?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                Your TOP 1 Digital Marketing Company
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6 font-inter">
                We are among the best digital companies in Pakistan and we hope to be part of the best digital marketing companies in the world as your TOP 1 Digital Marketing Company. Hiring a Digital Marketing company specializing in digital media ensures that the online marketing strategies that are developed will be successful.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-inter">
                As your Online Marketing Agency, we offer comprehensive online services in Digital Marketing, updated with the latest trends as a Digital Agency, which differentiates our results from the competition.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                Personalized Digital Marketing Strategy
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6 font-inter">
                Each project requires a personalized and different digital marketing strategy. That is why we create campaigns designed and tailored to measure, focusing on making your business grow in a functional and organic way.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-inter">
                This is how we work in our communication company in Pakistan - with dedication, precision, and a commitment to excellence.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-inter text-center">
              Definition: What is a Digital Marketing Agency?
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-6 font-inter">
              A digital marketing agency is a company that is in charge of planning a series of applied techniques that have the objective of positioning your presence in the networks. In other words, a company will help your online business to attract potential buyers. But not only that! A good agency goes much further - its objective is for these approaches to become consolidated clients.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-inter">
              Digital marketing services are quite extensive and can vary depending on the type of company in question. An agency for SMEs will not exercise the same strategies as in the case of a large company, but the core principles remain the same.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};