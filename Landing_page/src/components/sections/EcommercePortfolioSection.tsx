import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ShoppingBag, TrendingUp, Users, Star } from 'lucide-react';

const categories = ['All', 'Fashion', 'Electronics', 'Food & Beverage', 'Health & Beauty'];

const projects = [
  {
    id: 1,
    title: 'Urban Fashion Co.',
    category: 'Fashion',
    description: 'Premium streetwear brand with 300% revenue increase after launch.',
    image: '/portfolio/fashion-store.jpg',
    gradient: 'from-purple-600 to-pink-600',
    stats: { revenue: '+300%', visitors: '50K/mo', conversion: '4.2%' },
    tags: ['Shopify', 'Custom Theme', 'Mobile App'],
  },
  {
    id: 2,
    title: 'TechGear Hub',
    category: 'Electronics',
    description: 'Multi-vendor electronics marketplace with advanced filtering.',
    image: '/portfolio/tech-store.jpg',
    gradient: 'from-blue-600 to-cyan-600',
    stats: { revenue: '+180%', visitors: '120K/mo', conversion: '3.8%' },
    tags: ['WooCommerce', 'Multi-vendor', 'API Integration'],
  },
  {
    id: 3,
    title: 'Organic Kitchen',
    category: 'Food & Beverage',
    description: 'Farm-to-table organic food delivery with subscription model.',
    image: '/portfolio/food-store.jpg',
    gradient: 'from-green-600 to-emerald-600',
    stats: { revenue: '+250%', visitors: '35K/mo', conversion: '5.1%' },
    tags: ['Subscription', 'Delivery Integration', 'Custom CMS'],
  },
  {
    id: 4,
    title: 'Glow Cosmetics',
    category: 'Health & Beauty',
    description: 'Luxury skincare brand with AR try-on feature.',
    image: '/portfolio/beauty-store.jpg',
    gradient: 'from-rose-600 to-pink-600',
    stats: { revenue: '+420%', visitors: '80K/mo', conversion: '4.5%' },
    tags: ['Magento', 'AR Features', 'Loyalty Program'],
  },
  {
    id: 5,
    title: 'Vintage Threads',
    category: 'Fashion',
    description: 'Curated vintage clothing marketplace connecting sellers globally.',
    image: '/portfolio/vintage-store.jpg',
    gradient: 'from-amber-600 to-orange-600',
    stats: { revenue: '+200%', visitors: '45K/mo', conversion: '3.5%' },
    tags: ['Marketplace', 'Seller Dashboard', 'Authentication'],
  },
  {
    id: 6,
    title: 'Smart Home Plus',
    category: 'Electronics',
    description: 'IoT and smart home devices with compatibility checker.',
    image: '/portfolio/smarthome-store.jpg',
    gradient: 'from-indigo-600 to-violet-600',
    stats: { revenue: '+320%', visitors: '90K/mo', conversion: '3.9%' },
    tags: ['Custom Build', 'Product Configurator', 'B2B Portal'],
  },
];

export const EcommercePortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Portfolio
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories That{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Inspire
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful e-commerce projects that have transformed businesses
            and driven exceptional results.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Image placeholder with gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {project.category}
                      </span>
                      <motion.div
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>

                    {/* Mock store visual */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                        <div className="flex gap-2 mb-2">
                          <div className="w-8 h-8 bg-white/20 rounded-lg" />
                          <div className="flex-1">
                            <div className="h-2 bg-white/30 rounded w-3/4 mb-1" />
                            <div className="h-2 bg-white/20 rounded w-1/2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                        <div className="text-lg font-bold text-green-400">{project.stats.revenue}</div>
                        <div className="text-xs text-gray-500">Revenue</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                        <div className="text-lg font-bold text-blue-400">{project.stats.visitors}</div>
                        <div className="text-xs text-gray-500">Visitors</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                        <div className="text-lg font-bold text-cyan-400">{project.stats.conversion}</div>
                        <div className="text-xs text-gray-500">Conversion</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
