import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'Native E Donation App',
    category: 'Mobile App Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Charitable donation platform with secure payment integration'
  },
  {
    id: 2,
    title: 'Play Ground (ESPORT)',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Gaming platform design with modern UI/UX'
  },
  {
    id: 3,
    title: 'Ground Fitness App For Health',
    category: 'Mobile App Development',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Health and fitness tracking application'
  },
  {
    id: 4,
    title: 'Fastest White Hat SEO Results',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'SEO optimization and ranking improvement'
  },
  {
    id: 5,
    title: 'Custom E-Commerce Hub',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Full-featured e-commerce platform'
  },
  {
    id: 6,
    title: 'Furniture Gallery App',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Interior design showcase application'
  },
  {
    id: 7,
    title: 'Car Booking Taxi App',
    category: 'Mobile App Development',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'On-demand taxi booking platform'
  },
  {
    id: 8,
    title: 'Save Sales Custom Admin Panel',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sales management dashboard'
  },
  {
    id: 9,
    title: 'Soobz Online Clothing Brand',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Fashion e-commerce website'
  },
  {
    id: 10,
    title: 'Trade Kitchen Suppliers',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'B2B kitchen supplies platform'
  },
  {
    id: 11,
    title: 'Quick Professional Movers',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Moving services booking platform'
  },
  {
    id: 12,
    title: 'Hair Salon Reviews',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Beauty salon review and booking system'
  },
  {
    id: 13,
    title: 'Al Hayyat Group Of Companies',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Corporate group website'
  },
  {
    id: 14,
    title: 'The Centrum International Peshawar',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'International business center website'
  },
  {
    id: 15,
    title: 'Elad Signs Printing With Admin Panel',
    category: 'Software Development',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Printing business management system'
  },
  {
    id: 16,
    title: 'Elad Boutique Ecommerce CRM',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Boutique CRM and e-commerce solution'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'Mobile App Development', name: 'Mobile Apps' },
  { id: 'Web Development', name: 'Web Development' },
  { id: 'Design', name: 'Design' },
  { id: 'SEO', name: 'SEO' },
  { id: 'Software Development', name: 'Software' }
];

export const ProfessionalPortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Our Recent Projects
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Portfolio
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our latest work and see how we've helped businesses 
            achieve their digital transformation goals with innovative solutions.
          </p>
        </AnimatedSection>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-200 hover:bg-blue-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Blue Gradient Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Content Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h3 
                          className="text-xl font-bold mb-2"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.div
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.category}
                        </motion.div>
                        
                        <motion.p 
                          className="text-sm text-gray-200 mb-4"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.button
                          className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Project
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Content (Visible when not hovered) */}
                <motion.div
                  className="p-6"
                  animate={{ opacity: hoveredProject === project.id ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { number: '16+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '6', label: 'Service Categories' },
            { number: '3', label: 'Global Offices' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
