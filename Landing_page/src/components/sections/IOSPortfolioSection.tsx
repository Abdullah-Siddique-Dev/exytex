import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IOSPortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'E-commerce', 'Healthcare', 'Finance', 'Entertainment', 'Productivity'];
  
  const projects = [
    {
      id: 1,
      title: 'ShopEasy',
      category: 'E-commerce',
      description: 'Modern e-commerce app with AR try-on features and seamless checkout experience.',
      image: '/portfolio/ios-ecommerce.jpg',
      technologies: ['Swift', 'ARKit', 'Core Data', 'Stripe API'],
      downloads: '500K+',
      rating: 4.8,
      features: ['AR Try-On', 'Apple Pay', 'Push Notifications', 'Offline Mode']
    },
    {
      id: 2,
      title: 'HealthTracker Pro',
      category: 'Healthcare',
      description: 'Comprehensive health monitoring app with HealthKit integration and AI insights.',
      image: '/portfolio/ios-health.jpg',
      technologies: ['SwiftUI', 'HealthKit', 'Core ML', 'CloudKit'],
      downloads: '300K+',
      rating: 4.9,
      features: ['HealthKit Sync', 'AI Analysis', 'Apple Watch', 'HIPAA Compliant']
    },
    {
      id: 3,
      title: 'SecureBank',
      category: 'Finance',
      description: 'Banking app with biometric authentication and real-time transaction monitoring.',
      image: '/portfolio/ios-finance.jpg',
      technologies: ['Swift', 'TouchID/FaceID', 'Keychain', 'Core Data'],
      downloads: '1M+',
      rating: 4.7,
      features: ['Biometric Auth', 'Real-time Alerts', 'Secure Vault', 'Investment Tools']
    },
    {
      id: 4,
      title: 'StreamFlix',
      category: 'Entertainment',
      description: 'Video streaming platform with offline downloads and personalized recommendations.',
      image: '/portfolio/ios-streaming.jpg',
      technologies: ['Swift', 'AVFoundation', 'Core ML', 'CloudKit'],
      downloads: '2M+',
      rating: 4.6,
      features: ['Offline Downloads', 'AirPlay Support', 'Personalized Feed', '4K Streaming']
    },
    {
      id: 5,
      title: 'TaskMaster',
      category: 'Productivity',
      description: 'Advanced task management with team collaboration and time tracking features.',
      image: '/portfolio/ios-productivity.jpg',
      technologies: ['SwiftUI', 'Core Data', 'CloudKit', 'Widgets'],
      downloads: '800K+',
      rating: 4.8,
      features: ['Team Collaboration', 'Time Tracking', 'Widgets', 'Siri Shortcuts']
    },
    {
      id: 6,
      title: 'FitnessPal',
      category: 'Healthcare',
      description: 'Fitness tracking app with workout plans and nutrition monitoring.',
      image: '/portfolio/ios-fitness.jpg',
      technologies: ['Swift', 'HealthKit', 'WatchKit', 'Core Location'],
      downloads: '1.5M+',
      rating: 4.9,
      features: ['Workout Plans', 'Nutrition Tracking', 'Apple Watch', 'Social Features']
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            iOS App Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our award-winning iOS applications across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-600 hover:bg-white hover:text-purple-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-indigo-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="font-semibold">{project.rating}</span>
                      </div>
                      <div className="text-sm opacity-90">{project.downloads} downloads</div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-purple-200 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                      Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
            Start Your iOS Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};