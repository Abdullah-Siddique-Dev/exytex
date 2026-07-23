import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scrollToContactForm } from '../../utils/scrollUtils';

interface IndustryCTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
}

export const IndustryCTASection: React.FC<IndustryCTASectionProps> = ({
  title,
  description,
  buttonText = 'Get Started Today'
}) => {

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-blue-100 shadow-xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  {description}
                </p>
                <motion.button
                  onClick={scrollToContactForm}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {buttonText}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
