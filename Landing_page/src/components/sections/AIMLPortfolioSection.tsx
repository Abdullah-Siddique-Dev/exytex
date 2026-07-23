import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AIMLPortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'NLP', 'Automation'];

  const projects = [
    {
      id: 1,
      title: 'Predictive Analytics Platform',
      category: 'Machine Learning',
      description: 'Advanced ML platform for sales forecasting and demand prediction',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
      accuracy: '95%'
    },
    {
      id: 2,
      title: 'Smart Quality Control System',
      category: 'Computer Vision',
      description: 'AI-powered visual inspection system for manufacturing quality control',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop',
      technologies: ['OpenCV', 'PyTorch', 'YOLO'],
      accuracy: '99%'
    },
    {
      id: 3,
      title: 'Intelligent Chatbot Assistant',
      category: 'NLP',
      description: 'Natural language processing chatbot for customer service automation',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop',
      technologies: ['BERT', 'Transformers', 'spaCy'],
      accuracy: '92%'
    },
    {
      id: 4,
      title: 'Document Processing AI',
      category: 'Automation',
      description: 'Automated document classification and data extraction system',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      technologies: ['OCR', 'NLP', 'Machine Learning'],
      accuracy: '97%'
    },
    {
      id: 5,
      title: 'Fraud Detection System',
      category: 'Machine Learning',
      description: 'Real-time fraud detection using advanced ML algorithms',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      technologies: ['Random Forest', 'XGBoost', 'Neural Networks'],
      accuracy: '98%'
    },
    {
      id: 6,
      title: 'Medical Image Analysis',
      category: 'Computer Vision',
      description: 'AI system for medical image diagnosis and analysis',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      technologies: ['CNN', 'Medical Imaging', 'Deep Learning'],
      accuracy: '96%'
    },
    {
      id: 7,
      title: 'Sentiment Analysis Tool',
      category: 'NLP',
      description: 'Advanced sentiment analysis for social media monitoring',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      technologies: ['LSTM', 'Word2Vec', 'Sentiment Analysis'],
      accuracy: '94%'
    },
    {
      id: 8,
      title: 'Smart Inventory Management',
      category: 'Automation',
      description: 'AI-powered inventory optimization and demand forecasting',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      technologies: ['Time Series', 'Forecasting', 'Optimization'],
      accuracy: '93%'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-inter">
            AI & ML Portfolio
          </h2>
          <p className="text-base text-blue-200 max-w-3xl mx-auto font-inter">
            Explore our successful AI and Machine Learning projects across various industries
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
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
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
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 border border-white/20"
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
                    <h3 className="text-base font-bold text-white font-inter">{project.title}</h3>
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
                      {project.accuracy} accuracy
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