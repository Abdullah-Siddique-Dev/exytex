import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const SEOSolutionsSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('seo-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                Request SEO to Increase Your Visibility Online
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Get your website on the first page of search results, increase the number of your website visitors and attract more customers. Our recipe for your online search success - technical optimization, well-defined keywords, quality content and SEO optimization for Google search.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    One-time Optimization
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    If you are not ready for a long-term relationship with SEO experts in Dubai, you can order only basic website optimization. We will coordinate and carry out all the minimum necessary work on the technical and SEO optimization of your site within 1-2 months.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    By Position
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    Ordering website promotion in search engines for key search queries - with a position report - is recommended for those business owners who know exactly their target audience and the directions in which potential customers are looking for them.
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
              >
                <span className="relative z-10">Get a Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { value: 'No#1', label: 'Position Guaranteed' },
                { value: 'Dubai', label: 'Best SEO Experts' },
                { value: '$250+', label: 'Starting From' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
