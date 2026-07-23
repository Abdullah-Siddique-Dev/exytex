import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Card } from '../ui/Card';

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'web', image: '🛒', tech: 'React, Node.js' },
  { id: 2, title: 'Mobile Banking App', category: 'mobile', image: '💳', tech: 'React Native' },
  { id: 3, title: 'Brand Identity', category: 'design', image: '🎨', tech: 'Figma, Adobe' },
  { id: 4, title: 'SaaS Dashboard', category: 'web', image: '📊', tech: 'Vue.js, Python' },
  { id: 5, title: 'Food Delivery App', category: 'mobile', image: '🍕', tech: 'Flutter' },
  { id: 6, title: 'Logo Design', category: 'design', image: '🏷️', tech: 'Illustrator' }
];

const categories = ['all', 'web', 'mobile', 'design'];

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our latest projects and creative solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {project.image}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
                    <motion.div
                      className="h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find(p => p.id === selectedProject) && (
                  <div className="text-center">
                    <div className="text-8xl mb-6">
                      {projects.find(p => p.id === selectedProject)?.image}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Detailed project description would go here...
                    </p>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:scale-105 transition-transform"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
