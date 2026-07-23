import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, Clock, Share2, BookOpen } from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import '../styles/blog-content.css';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <>
        <SleekHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
            <Link to="/" className="text-blue-600 hover:text-blue-700">
              Return to Home
            </Link>
          </div>
        </div>
        <ElegantFooter />
      </>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const relatedPosts = blogPosts
    .filter(post => {
      // Exclude current post
      if (post.slug === blog.slug) return false;
      
      // Check if same category
      const sameCategory = post.category === blog.category;
      
      // Check if has common tags
      const commonTags = post.tags.some(tag => blog.tags.includes(tag));
      
      // Return posts with same category or common tags
      return sameCategory || commonTags;
    })
    .slice(0, 3);

  return (
    <>
      <SEO
        title={blog.seo.metaTitle}
        description={blog.seo.metaDescription}
        keywords={blog.seo.metaKeywords.join(', ')}
        canonicalUrl={`/blog/${blog.slug}`}
      />
      <SleekHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link 
              to="/#blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <BookOpen className="w-4 h-4" />
              {blog.category.replace(/-/g, ' ')}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {blog.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>8 min read</span>
              </div>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-20 mb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={blog.featuredImage} 
                alt={blog.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#374151'
              }}
            />

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    <Tag className="w-4 h-4" />
                    {tag.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {post.category.replace(/-/g, ' ')}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.createdAt)}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {post.seo.metaDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                            >
                              <Tag className="w-3 h-3" />
                              {tag.replace(/-/g, ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <ElegantFooter />
    </>
  );
};

export default BlogDetailPage;
