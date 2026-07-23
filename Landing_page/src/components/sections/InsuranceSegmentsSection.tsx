import React from 'react';
import { motion } from 'framer-motion';

export const InsuranceSegmentsSection: React.FC = () => {
  const segments = [
    {
      title: 'Insurers',
      description: 'We have broad knowledge and extensive experience in serving both insurance and insurtech companies across all lines of business, including property & casualty, life, pension, and health insurance providers worldwide. Our comprehensive offerings help innovate new products, drive operational agility, adopt emerging technologies, and deliver superior analytics capabilities and process efficiency.',
      features: [
        'Innovate new insurance products',
        'Drive operational agility',
        'Adopt emerging technologies',
        'Superior analytics capabilities',
        'Process efficiency optimization',
        'Digital customer experience'
      ],
      icon: '🏢',
      color: 'from-blue-500 to-blue-600',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Agents and Brokers',
      description: 'We have a long history of working with agents, wholesale brokers, and consultants to help them digitize their businesses through a wide range of insurance technologies, services, and flagship products. We hold expertise in helping reinsurers, general, individual life, individual health, and group health insurance service providers scale operations.',
      features: [
        'Scale operations efficiently',
        'Streamline daily tasks',
        'Rapid innovation delivery',
        'Enhanced customer service',
        'Digital business transformation',
        'Multi-channel distribution'
      ],
      icon: '🤝',
      color: 'from-indigo-500 to-indigo-600',
      bgImage: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Adjusters',
      description: 'While most insurance companies have claims adjusters doing the heavy lifting alone on all types of claims, we believe in empowering them with the right insurance technologies and advanced capabilities to automate parts of the claims process, transforming their insurance business model.',
      features: [
        'Automate claims processing',
        'Advanced AI capabilities',
        'Faster claim resolution',
        'Improved accuracy',
        'Digital FNOL systems',
        'Real-time claim tracking'
      ],
      icon: '⚖️',
      color: 'from-purple-500 to-purple-600',
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-inter">
            Insurance Is Our Focus
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto font-inter">
            Being an insurance technology company, we understand and support the needs of various segments in the insurance industry via our comprehensive and rapidly deployable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Header with gradient and icon */}
              <div className={`bg-gradient-to-r ${segment.color} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${segment.bgImage}')` }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {segment.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-inter">
                    {segment.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-inter">
                  {segment.description}
                </p>
                
                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Key Capabilities
                  </h4>
                  {segment.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.08 }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-sm text-gray-700 font-inter group-hover/item:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
