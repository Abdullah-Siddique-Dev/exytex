import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Rocket,
  RefreshCw,
  Search,
  Lock,
  Layers,
  Users,
  Settings,
  CheckCircle2,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'PCI-DSS compliant with SSL encryption, fraud protection, and secure checkout.',
  },
  {
    icon: Rocket,
    title: 'Blazing Fast Speed',
    description: 'Optimized for performance with CDN integration and lazy loading.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Inventory Sync',
    description: 'Real-time inventory management across all your sales channels.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO tools to help your products rank higher in search results.',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Multiple payment gateways with tokenization and 3D secure support.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Cloud-native infrastructure that grows with your business needs.',
  },
];

const highlights = [
  'Unlimited products & categories',
  'Multi-currency support',
  'Abandoned cart recovery',
  'Customer accounts & wishlists',
  'Discount codes & promotions',
  'Email marketing integration',
  'Social media integration',
  'Advanced product filtering',
];

export const EcommerceFeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Platform Features
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Modern Commerce
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our e-commerce platform comes packed with everything you need to run a successful
              online store, from inventory management to customer engagement tools.
            </p>

            {/* Feature highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                Explore All Features
              </button>
              <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors">
                View Documentation
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Metrics Bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '<100ms', label: 'Page Load' },
            { value: '256-bit', label: 'Encryption' },
            { value: '24/7', label: 'Monitoring' },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-blue-100 text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
