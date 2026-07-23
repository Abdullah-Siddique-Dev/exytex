import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Building2, Package, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export const AmazonFBAAlternativesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const alternatives = [
    {
      title: "Use a Logistics Operator",
      description: "The closest alternative to Amazon FBA - outsource logistics while maintaining brand control",
      icon: Truck,
      benefits: [
        "White label service with your own branding",
        "Maintain customer relationships",
        "Specialized e-commerce logistics technology",
        "Faster reaction times than traditional operators"
      ],
      considerations: [
        "Research specialized e-commerce operators",
        "Ensure they have proper technology stack",
        "Verify speed and reliability standards"
      ],
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
    },
    {
      title: "Do Your Own Logistics",
      description: "Handle all logistics operations in-house for maximum control and flexibility",
      icon: Building2,
      benefits: [
        "Complete control over all operations",
        "Maximum flexibility in processes",
        "Direct customer relationships",
        "No third-party dependencies"
      ],
      considerations: [
        "Higher fixed costs and overhead",
        "Need for logistics expertise",
        "Technology infrastructure requirements",
        "Scalability challenges"
      ],
      color: "from-purple-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
    },
    {
      title: "Professional Pre-FBA Preparation",
      description: "Use specialized prep services to optimize FBA costs and compliance",
      icon: Package,
      benefits: [
        "Avoid Amazon compliance fines",
        "Professional product preparation",
        "Cost optimization strategies",
        "Reduced rejection risks"
      ],
      considerations: [
        "Additional service provider relationship",
        "Extra step in the process",
        "Service availability in your region"
      ],
      color: "from-blue-600 to-purple-500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
    }
  ];

  const prepFBAServices = [
    { name: "Product Receipt & Verification", icon: "✅" },
    { name: "Preparation of Packs & Bundles", icon: "📦" },
    { name: "Kitting Services", icon: "🔧" },
    { name: "Clear or Dark Bagging", icon: "👜" },
    { name: "Product Labeling", icon: "🏷️" },
    { name: "Compliance Standards", icon: "📋" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format&q=80" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Alternatives
            </div>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            Alternatives to Amazon FBA
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            If you're still not sure that FBA is the right service for your online sales, 
            keep in mind that you have different alternatives to consider.
          </p>
        </motion.div>

        {/* Main Alternatives - Image Overlay Cards */}
        <div className="space-y-12 mb-20">
          {alternatives.map((alternative, index) => {
            const Icon = alternative.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Card with Overlay */}
                <motion.div
                  className={`relative rounded-3xl overflow-hidden shadow-2xl ${!isEven ? 'lg:col-start-2' : ''}`}
                  style={{ perspective: '1000px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 sm:h-96">
                    <img
                      src={alternative.image}
                      alt={alternative.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${alternative.color} opacity-60`} />
                    
                    {/* Glassmorphism Info Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-center p-8">
                        <div className={`w-20 h-20 bg-gradient-to-br ${alternative.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-white font-bold text-2xl">Explore This Option</h4>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Card - Glassmorphism */}
                <motion.div
                  className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${alternative.color} opacity-5 rounded-full blur-3xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${alternative.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black">{alternative.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{alternative.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Benefits */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <h4 className="font-bold text-green-700">Benefits</h4>
                        </div>
                        <ul className="space-y-2">
                          {alternative.benefits.map((benefit, idx) => (
                            <motion.li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              {benefit}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Considerations */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <AlertCircle className="w-5 h-5 text-purple-600" />
                          <h4 className="font-bold text-purple-700">Considerations</h4>
                        </div>
                        <ul className="space-y-2">
                          {alternative.considerations.map((consideration, idx) => (
                            <motion.li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                              {consideration}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Pre-FBA Services Detail - Material Design Card */}
        <motion.div
          className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
              Pre-FBA Preparation Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              This service consists of delegating the preparation of the product before shipment to a fulfillment center 
              to avoid getting caught with fines for not complying with Amazon's strict receiving conditions.
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {prepFBAServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-purple-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <p className="text-xs font-medium text-gray-700">{service.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Info Box - Neumorphism */}
            <div 
              className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8"
              style={{
                boxShadow: 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff'
              }}
            >
              <h4 className="font-bold text-black text-lg mb-3">Available in Pakistan</h4>
              <p className="text-gray-700 leading-relaxed">
                This service is not yet as common in Europe as in the United States, but there are some operators 
                like <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Exytex Technologies</span> that offer this service in Pakistan, 
                helping businesses optimize their FBA preparation and reduce compliance risks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Glassmorphism */}
        <motion.div
          className="mt-16 relative bg-blue-600 rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-blue-700/50 animate-pulse" />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Need Help Choosing the Right Solution?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Our logistics experts can help you evaluate the best approach for your business, 
              whether it's FBA, alternative logistics solutions, or a hybrid approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="bg-white text-blue-600 border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Compare Solutions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
