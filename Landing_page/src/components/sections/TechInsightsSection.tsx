import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export const TechInsightsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Use actual blog posts from data - they all have valid images
  const insights = blogPosts.slice(0, 9);
  const displayedInsights = showAll ? insights : insights.slice(0, 3);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50/30 overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Dive Deeper to Our Subject Matter Expertise
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Exploring new possibilities through thought leadership and industry insights
            </p>
          </motion.div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayedInsights.map((insight, index) => (
              <motion.article
                key={insight.slug}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={insight.featuredImage} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {insight.category.replace(/-/g, ' ')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Read Time */}
                  <div className="text-xs text-gray-500 mb-3">
                    5 min read
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {insight.seo.metaDescription}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    to={`/blog/${insight.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'View All Insights'}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
