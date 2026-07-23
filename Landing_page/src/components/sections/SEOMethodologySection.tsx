import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, TrendingUp, BarChart } from 'lucide-react';

export const SEOMethodologySection: React.FC = () => {
  const methodology = [
    {
      title: 'Growth Working Process',
      description: 'We make the most of your time and budget. We prepare for you a creative and fast growth plan, which allows you to sell from the first moment and grow quickly.',
      icon: TrendingUp,
      step: '01'
    },
    {
      title: 'SEO and SEM Specialists',
      description: 'We are experts in SEO and SEM positioning in Google and other search engines, always up to date with the latest web positioning techniques.',
      icon: Search,
      step: '02'
    },
    {
      title: 'Measurable Results',
      description: 'We use the best web analytics tools to measure the impact of our strategies and implement constant improvements.',
      icon: BarChart,
      step: '03'
    },
    {
      title: 'Local SEO Strategy',
      description: 'Search queries with regional reference have high frequency and conversion. We optimize for "near me" searches and location-specific keywords.',
      icon: Target,
      step: '04'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            If there is something that makes us stand out from the rest of the SEO services in Dubai, it is that we are passionate about what we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {methodology.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100 group-hover:text-blue-200 transition-colors">
                  {item.step}
                </div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
