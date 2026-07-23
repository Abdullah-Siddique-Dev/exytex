import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IOSTechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Development');

  const techCategories = {
    Development: {
      title: 'iOS Development',
      description: 'Core technologies for building native iOS applications',
      technologies: [
        { name: 'Swift', description: 'Modern programming language for iOS', icon: '🔶', level: 95 },
        { name: 'Objective-C', description: 'Legacy iOS development language', icon: '📱', level: 85 },
        { name: 'Xcode', description: 'Official iOS development IDE', icon: '🔨', level: 98 },
        { name: 'SwiftUI', description: 'Declarative UI framework', icon: '✨', level: 92 },
        { name: 'UIKit', description: 'Traditional iOS UI framework', icon: '🎨', level: 96 },
        { name: 'Core Data', description: 'Data persistence framework', icon: '💾', level: 90 }
      ]
    },
    Frameworks: {
      title: 'iOS Frameworks',
      description: 'Advanced frameworks for enhanced functionality',
      technologies: [
        { name: 'ARKit', description: 'Augmented reality experiences', icon: '🥽', level: 88 },
        { name: 'Core ML', description: 'Machine learning integration', icon: '🧠', level: 85 },
        { name: 'HealthKit', description: 'Health data integration', icon: '❤️', level: 90 },
        { name: 'MapKit', description: 'Maps and location services', icon: '🗺️', level: 92 },
        { name: 'AVFoundation', description: 'Audio and video processing', icon: '🎬', level: 87 },
        { name: 'CloudKit', description: 'iCloud data synchronization', icon: '☁️', level: 89 }
      ]
    },
    Tools: {
      title: 'Development Tools',
      description: 'Essential tools for iOS development workflow',
      technologies: [
        { name: 'TestFlight', description: 'Beta testing platform', icon: '🧪', level: 95 },
        { name: 'Instruments', description: 'Performance profiling tool', icon: '📊', level: 90 },
        { name: 'CocoaPods', description: 'Dependency manager', icon: '📦', level: 92 },
        { name: 'Fastlane', description: 'Automation and deployment', icon: '🚀', level: 88 },
        { name: 'Firebase', description: 'Backend services platform', icon: '🔥', level: 94 },
        { name: 'Git', description: 'Version control system', icon: '📝', level: 96 }
      ]
    },
    Integration: {
      title: 'APIs & Integration',
      description: 'Third-party services and API integrations',
      technologies: [
        { name: 'REST APIs', description: 'RESTful web services', icon: '🌐', level: 96 },
        { name: 'GraphQL', description: 'Query language for APIs', icon: '📡', level: 88 },
        { name: 'Push Notifications', description: 'Real-time messaging', icon: '🔔', level: 94 },
        { name: 'Apple Pay', description: 'Payment processing', icon: '💳', level: 90 },
        { name: 'Social Login', description: 'OAuth authentication', icon: '🔐', level: 92 },
        { name: 'Analytics', description: 'App usage tracking', icon: '📈', level: 89 }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            iOS Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks we use to build exceptional iOS applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/70 text-gray-600 hover:bg-white hover:text-indigo-600 border border-gray-200 hover:border-indigo-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {techCategories[activeCategory as keyof typeof techCategories].title}
              </h3>
              <p className="text-lg text-gray-600">
                {techCategories[activeCategory as keyof typeof techCategories].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories[activeCategory as keyof typeof techCategories].technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                        {tech.name}
                      </h4>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500 mr-2">Expertise:</span>
                        <span className="text-sm font-semibold text-indigo-600">{tech.level}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                  
                  <motion.button
                    className="text-indigo-600 font-semibold hover:text-purple-600 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our iOS Expertise</h3>
            <p className="text-xl text-indigo-200">
              Years of experience building world-class iOS applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '8+', label: 'Years iOS Development' },
              { number: '200+', label: 'iOS Apps Built' },
              { number: '50+', label: 'App Store Features' },
              { number: '99%', label: 'App Store Approval' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};