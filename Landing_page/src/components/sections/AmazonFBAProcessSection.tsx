import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Building2, Search, Settings, Plane } from 'lucide-react';

export const AmazonFBAProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Product Preparation",
      description: "Prepare your products by following Amazon's receiving conditions before shipping.",
      icon: Package
    },
    {
      step: 2,
      title: "Ship to Amazon",
      description: "Send your prepared products to an Amazon FBA fulfillment center.",
      icon: Truck
    },
    {
      step: 3,
      title: "Reception & Storage",
      description: "Amazon receives and stores the product in its logistics centers.",
      icon: Building2
    },
    {
      step: 4,
      title: "Product Registration",
      description: "Registration of the product so it can be searched and purchased on Amazon.com.",
      icon: Search
    },
    {
      step: 5,
      title: "Order Processing",
      description: "Amazon handles and prepares the product for shipping when a customer buys it.",
      icon: Settings
    },
    {
      step: 6,
      title: "Shipping & Service",
      description: "Shipping to the end customer and Amazon Customer Service for buyers.",
      icon: Plane
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Process
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            How Does Amazon FBA Work?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            If you have a product to sell online, you can outsource all logistics tasks to Amazon in exchange for a service cost.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100">
                  {step.step}
                </div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            The services include reception and storage, product registration, order handling and preparation, shipping to customers, and Amazon Customer Service for buyers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
