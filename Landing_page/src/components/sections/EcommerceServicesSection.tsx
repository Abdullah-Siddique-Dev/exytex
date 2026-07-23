import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Palette,
  Smartphone,
  CreditCard,
  BarChart3,
  Headphones,
  Zap,
  Globe,
} from 'lucide-react';

const services = [
  {
    icon: ShoppingBag,
    title: 'Custom Store Development',
    description:
      'Tailored e-commerce solutions built from scratch to match your unique business requirements and brand identity.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, conversion-optimized designs that create memorable shopping experiences and drive customer engagement.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description:
      'Responsive and native mobile apps that let your customers shop anytime, anywhere with seamless experiences.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description:
      'Secure payment gateway integration supporting multiple currencies, methods, and one-click checkout options.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description:
      'Advanced analytics dashboards to track sales, customer behavior, and optimize your store performance.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock technical support and maintenance to ensure your store runs smoothly without interruptions.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Lightning-fast load times and optimized checkout flows to reduce cart abandonment and boost conversions.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Multi-channel Selling',
    description:
      'Integrate with marketplaces, social media, and POS systems for unified inventory and order management.',
    color: 'from-rose-500 to-pink-500',
  },
];

export const EcommerceServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sell Online
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive e-commerce solutions designed to help your business thrive in the digital
            marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5`}
                >
                  <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">Need a custom solution for your business?</p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get a Free Consultation
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
