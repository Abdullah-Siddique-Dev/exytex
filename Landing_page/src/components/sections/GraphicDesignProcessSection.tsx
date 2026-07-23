import React from 'react';
import { motion } from 'framer-motion';

export const GraphicDesignProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Project Discovery',
      description: 'We analyze your business needs, target audience, and design requirements to create a comprehensive project strategy.',
      image: '/images/services/graphic-design.jpg',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Creative Concept',
      description: 'Our creative team develops initial concepts and design directions based on your brand identity and objectives.',
      image: '/images/services/graphic-design.jpg',
      duration: '2-3 days'
    },
    {
      step: '03',
      title: 'Design Development',
      description: 'We create detailed designs, incorporating feedback and refining concepts to achieve the perfect visual solution.',
      image: '/images/services/web-development.jpg',
      duration: '3-5 days'
    },
    {
      step: '04',
      title: 'Review & Refinement',
      description: 'Client review process with revisions and refinements to ensure the design meets all expectations and requirements.',
      image: '/images/services/support.jpg',
      duration: '1-2 days'
    },
    {
      step: '05',
      title: 'Final Production',
      description: 'Preparation of final files in all required formats, ensuring print-ready and web-optimized deliverables.',
      image: '/images/services/digital-marketing.jpg',
      duration: '1 day'
    },
    {
      step: '06',
      title: 'Delivery & Support',
      description: 'Final delivery with comprehensive file packages and ongoing support for implementation and future needs.',
      image: '/images/services/ecommerce.jpg',
      duration: 'Ongoing'
    }
  ];

  const helpScenarios = [
    {
      title: 'Brand Perception',
      description: 'You need to improve the perception and communication of your business, your product, service, or event.',
      icon: '📈'
    },
    {
      title: 'Professional Design',
      description: 'It seems to you that using free design resources to communicate your business is something that detracts from its value.',
      icon: '⭐'
    },
    {
      title: 'Expert Guidance',
      description: 'You want to have experienced professionals who advise you and offer a graphic design that meets your needs.',
      icon: '🎯'
    },
    {
      title: 'Startup Support',
      description: 'You are a Startup and you need to design support materials for the marketing and communication of your business.',
      icon: '🚀'
    },
    {
      title: 'Product Packaging',
      description: 'You have a product that needs a good packaging design that highlights its qualities and helps it position itself.',
      icon: '📦'
    },
    {
      title: 'Event Design',
      description: 'You are going to organize an event and you need a design agency that is in charge of designing all the pieces.',
      icon: '🎪'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 40% 60%, #06b6d4 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-inter">
            Our Design Process
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed font-inter max-w-2xl mx-auto">
            A proven methodology that ensures your design project is delivered with creativity, precision, and excellence
          </p>
        </motion.div>

        {/* Process Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Process Cards */}
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-1 rounded-full text-xs font-semibold font-inter">
                    {step.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 font-inter group-hover:text-blue-600 transition-colors duration-300 text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-inter text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}


        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-inter">
            Ready to Start Your Design Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-inter">
            Let's discuss your design needs and create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>


      </div>
    </section>
  );
};