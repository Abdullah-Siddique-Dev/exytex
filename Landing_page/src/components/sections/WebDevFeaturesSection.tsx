import React from 'react';
import { motion } from 'framer-motion';

export const WebDevFeaturesSection: React.FC = () => {
  const features = [
    {
      category: "Engineering",
      title: "App Development",
      description: "Bring your most complex software vision to life with innovation and scalability in mind",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      buttonText: "View Service",
      dark: true
    },
    {
      category: "Advisory", 
      title: "Product and Service Design",
      description: "Get strategic guidance on creating best-in-class domain-specific technology solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      buttonText: "Learn More",
      dark: false
    },
    {
      category: "Data & AI",
      title: "AI Development", 
      description: "Revolutionize your industry with innovative AI solutions and data-centric technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      buttonText: "Explore AI",
      dark: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Expertise Areas
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  feature.dark ? 'bg-gray-900 text-white' : 'bg-gray-50'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      feature.dark ? 'bg-white/20 text-white' : 'bg-white/90 text-gray-700'
                    }`}>
                      {feature.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${feature.dark ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${feature.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                  <button className={`flex items-center space-x-2 font-medium transition-colors ${
                    feature.dark 
                      ? 'text-white hover:text-blue-300' 
                      : 'text-blue-600 hover:text-blue-700'
                  }`}>
                    <span>{feature.buttonText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
