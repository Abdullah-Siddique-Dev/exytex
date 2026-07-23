import React from 'react';
import { motion } from 'framer-motion';

export const DigitalMarketingStrategiesSection: React.FC = () => {
  const strategies = [
    {
      title: 'SEO (Search Engine Optimization)',
      description: 'Optimize your performance in the main search engines. Get your website to appear in Google SERPs 100% organically using specialized techniques for medium to long-term benefits.',
      icon: '🔍',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'SEM (Search Engine Marketing)',
      description: 'Strategy that allows your website to appear in the SERPs of all search engines in the form of advertisements. Get faster results by investing in Ads services.',
      icon: '💰',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'SMM (Social Media Marketing)',
      description: 'Non-organic technique aimed at social networks where a large part of Internet users are concentrated. Be visible on social networks with targeted paid campaigns.',
      icon: '📱',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-inter">
            Core Digital Marketing Strategies
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto font-inter">
            Every digital marketing agency must start from the base that SEO, SEM, and SMM offer. These are the fundamental pillars of successful digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-8 border-2 ${strategy.color} hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                  {strategy.title}
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-inter">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
              Why Hire a Digital Marketing Agency?
            </h3>
            <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto font-inter">
              No one can doubt that being competitive in the world of the Internet is quite difficult and demands great effort. It is an environment in constant change where every day more options appear that try to capture the interest of people. That is why digital marketing actions are vital for every online business. The only way to achieve a good visibility rate in social networks or search engines is excellence in terms of marketing, and that is only possible thanks to a good agency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};