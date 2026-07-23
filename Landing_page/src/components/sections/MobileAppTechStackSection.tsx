import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileAppTechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('iOS');

  const techStack = {
    iOS: {
      title: 'iOS Development',
      description: 'Native iOS development with modern Swift and cutting-edge frameworks',
      technologies: [
        { name: 'Swift', description: 'Modern programming language for iOS', icon: '🔷' },
        { name: 'SwiftUI', description: 'Declarative UI framework', icon: '🎨' },
        { name: 'UIKit', description: 'Traditional iOS UI framework', icon: '📱' },
        { name: 'Core Data', description: 'Data persistence framework', icon: '💾' },
        { name: 'Combine', description: 'Reactive programming framework', icon: '🔄' },
        { name: 'Xcode', description: 'Integrated development environment', icon: '⚡' }
      ]
    },
    Android: {
      title: 'Android Development',
      description: 'Native Android development with Kotlin and modern Android frameworks',
      technologies: [
        { name: 'Kotlin', description: 'Modern programming language for Android', icon: '🟢' },
        { name: 'Jetpack Compose', description: 'Modern UI toolkit for Android', icon: '🎨' },
        { name: 'Android SDK', description: 'Android software development kit', icon: '📱' },
        { name: 'Room', description: 'SQLite abstraction library', icon: '💾' },
        { name: 'Retrofit', description: 'HTTP client for Android', icon: '🌐' },
        { name: 'Android Studio', description: 'Official Android IDE', icon: '⚡' }
      ]
    },
    'Cross-Platform': {
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with modern cross-platform frameworks',
      technologies: [
        { name: 'React Native', description: 'Facebook\'s cross-platform framework', icon: '⚛️' },
        { name: 'Flutter', description: 'Google\'s UI toolkit', icon: '🦋' },
        { name: 'Expo', description: 'Platform for universal React applications', icon: '🚀' },
        { name: 'Xamarin', description: 'Microsoft\'s cross-platform solution', icon: '🔷' },
        { name: 'Ionic', description: 'Hybrid mobile app development', icon: '⚡' },
        { name: 'Cordova', description: 'Mobile application development framework', icon: '📱' }
      ]
    },
    Backend: {
      title: 'Backend & Cloud',
      description: 'Robust backend solutions and cloud services for mobile applications',
      technologies: [
        { name: 'Firebase', description: 'Google\'s mobile development platform', icon: '🔥' },
        { name: 'AWS', description: 'Amazon Web Services', icon: '☁️' },
        { name: 'Node.js', description: 'JavaScript runtime for backend', icon: '🟢' },
        { name: 'GraphQL', description: 'Query language for APIs', icon: '📊' },
        { name: 'MongoDB', description: 'NoSQL database', icon: '🍃' },
        { name: 'PostgreSQL', description: 'Relational database', icon: '🐘' }
      ]
    }
  };

  const categories = Object.keys(techStack);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Technology Stack
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We use the latest technologies and frameworks to build powerful, scalable mobile applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Technology Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {techStack[activeCategory as keyof typeof techStack].title}
              </h3>
              <p className="text-xl text-blue-200">
                {techStack[activeCategory as keyof typeof techStack].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack[activeCategory as keyof typeof techStack].technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{tech.name}</h4>
                  <p className="text-blue-200 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
};