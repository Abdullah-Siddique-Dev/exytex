import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileAppPortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'iOS', 'Android', 'Cross-Platform', 'Enterprise'];

  const projects = [
    {
      id: 1,
      title: 'FinanceTracker Pro',
      category: 'iOS',
      description: 'Personal finance management app with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      technologies: ['Swift', 'Core Data', 'Charts'],
      downloads: '50K+'
    },
    {
      id: 2,
      title: 'FitLife Companion',
      category: 'Android',
      description: 'Comprehensive fitness tracking with social features',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      technologies: ['Kotlin', 'Room', 'Material Design'],
      downloads: '100K+'
    },
    {
      id: 3,
      title: 'ShopEasy Marketplace',
      category: 'Cross-Platform',
      description: 'E-commerce platform with seamless shopping experience',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      technologies: ['React Native', 'Redux', 'Stripe'],
      downloads: '200K+'
    },
    {
      id: 4,
      title: 'TaskFlow Enterprise',
      category: 'Enterprise',
      description: 'Project management solution for large organizations',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      technologies: ['Flutter', 'Firebase', 'OAuth'],
      downloads: '25K+'
    },
    {
      id: 5,
      title: 'MediCare Plus',
      category: 'iOS',
      description: 'Healthcare app for appointment booking and medical records',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Swift', 'HealthKit', 'CloudKit'],
      downloads: '75K+'
    },
    {
      id: 6,
      title: 'FoodieHub',
      category: 'Android',
      description: 'Food delivery app with real-time tracking and reviews',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Kotlin', 'Google Maps', 'Firebase'],
      downloads: '150K+'
    },
    {
      id: 7,
      title: 'EduLearn Pro',
      category: 'Cross-Platform',
      description: 'Online learning platform with interactive courses',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Flutter', 'Video Player', 'SQLite'],
      downloads: '80K+'
    },
    {
      id: 8,
      title: 'CryptoWallet Secure',
      category: 'iOS',
      description: 'Cryptocurrency wallet with advanced security features',
      image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Swift', 'Keychain', 'Biometrics'],
      downloads: '30K+'
    },
    {
      id: 9,
      title: 'SmartHome Control',
      category: 'Android',
      description: 'IoT home automation control with voice commands',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Kotlin', 'IoT SDK', 'Voice API'],
      downloads: '40K+'
    },
    {
      id: 10,
      title: 'TravelMate Explorer',
      category: 'Cross-Platform',
      description: 'Travel planning app with offline maps and guides',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['React Native', 'MapBox', 'Offline Storage'],
      downloads: '120K+'
    },
    {
      id: 11,
      title: 'BankSecure Pro',
      category: 'Enterprise',
      description: 'Banking app with multi-factor authentication',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['Flutter', 'Biometrics', 'Encryption'],
      downloads: '300K+'
    },
    {
      id: 12,
      title: 'SocialConnect',
      category: 'Cross-Platform',
      description: 'Social networking app with real-time messaging',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      technologies: ['React Native', 'Socket.io', 'Push Notifications'],
      downloads: '250K+'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-inter">
            Our Mobile App Portfolio
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto font-inter">
            Discover the mobile applications we've crafted for clients across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white font-inter">{project.title}</h3>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-inter">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-blue-200 mb-3 text-sm font-inter">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 text-white px-2 py-1 rounded text-xs font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-sm font-inter">
                      {project.downloads} downloads
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm font-inter">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};