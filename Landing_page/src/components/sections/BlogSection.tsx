import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const BlogSection = () => {
  // Use imported blog posts - showing first 9 for homepage
  const displayedPosts = blogPosts.slice(0, 9);

  // Backup data in case import fails
  const fallbackPosts = [
    {
      title: 'Top 20 Software Development Companies in New York',
      slug: 'top-20-software-development-companies-in-new-york',
      content: '<p>Today\'s growing demands of today\'s IT landscape...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Software-Development',
      tags: ['software-development', 'bespoke-software', 'companies-in-new-york'],
      seo: {
        metaTitle: 'Top 20 Software Development Companies in New York',
        metaDescription: 'It should be better for a safer side you should employ the best software development companies in New York...',
        metaKeywords: ['SOFTWARE DEVELOPMENT', 'BESPOKE SOFTWARE', 'COMPANIES']
      },
      status: 'published',
      createdAt: '2022-01-21T13:24:18Z'
    },
    {
      title: '5 soft skills every developer should develop',
      slug: '5-soft-skills-every-developer-should-develop',
      content: '<p>A software developer is related to technical skills...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Software-Development',
      tags: ['software-development', 'bespoke-software', 'developer-skills'],
      seo: {
        metaTitle: '5 soft skills every developer should develop',
        metaDescription: 'A software developer is related to technical skills but soft skills are equally important...',
        metaKeywords: ['SOFTWARE DEVELOPMENT', '5 SKILLS', 'BESPOKE SOFTWARE']
      },
      status: 'published',
      createdAt: '2022-02-23T13:24:18Z'
    },
    {
      title: 'Top 10 software companies with the best salaries in the UK',
      slug: 'top-10-companies-with-the-best-salaries-in-the-uk',
      content: '<p>The job search portal Glassdoor has published a...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Software-Development',
      tags: ['best-salaries-in-the-uk', 'design-of-business-management', 'software-companies'],
      seo: {
        metaTitle: 'UK Best Software Company | Top 10 companies with the best salaries',
        metaDescription: 'The job search portal Glassdoor has published UK Best Software Companies with highest salaries...',
        metaKeywords: ['best salaries in the UK', 'design of business management']
      },
      status: 'published',
      createdAt: '2022-01-11T02:28:52Z'
    },
    {
      title: 'The best ways to promote your company',
      slug: 'best-ways-to-promote-your-company',
      content: '<p>Many people come to me asking: What are the best ways to promote your company...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Digital-Marketing',
      tags: ['advertise-your-company', 'company-promotion', 'company-strategy'],
      seo: {
        metaTitle: 'Best Ways to Promote your Company | Exytex Technologies',
        metaDescription: 'Many people come to me asking: What are the best ways to promote your company effectively...',
        metaKeywords: ['advertise your company', 'company promotion', 'company strategy']
      },
      status: 'published',
      createdAt: '2022-01-03T02:37:00Z'
    },
    {
      title: '8 things to know about Twitter trends',
      slug: '8-things-to-know-about-twitter-trend',
      content: '<p>The unique sound of Twitter is arguing or expressing opinions...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Social',
      tags: ['today-trending-on-twitter', 'twitter-top-trends-today', 'twitter-trends'],
      seo: {
        metaTitle: '8 things to know about Twitter trends | Exytex Technologies',
        metaDescription: 'Let\'s get to know each other 8 things you should know about Twitter trends and how to use them...',
        metaKeywords: ['today trending on twitter', 'twitter top trends today']
      },
      status: 'published',
      createdAt: '2021-12-24T02:47:30Z'
    },
    {
      title: 'How to generate more leads in your SaaS Company?',
      slug: 'generate-more-leads-in-your-saas-company',
      content: '<p>Biggest difficulties for a Software as a Service SaaS company...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Digital-Marketing',
      tags: ['company-saas-audience', 'developer-company', 'it-software-company'],
      seo: {
        metaTitle: 'Generate more leads in your SaaS Company | Exytex Technologies',
        metaDescription: 'Biggest difficulties for a Software as a Service SaaS company is generating quality leads...',
        metaKeywords: ['company\'s SaaS audience', 'developer company', 'it software company']
      },
      status: 'published',
      createdAt: '2021-12-21T05:20:23Z'
    },
    {
      title: 'How can Inbound Marketing help your software business grow',
      slug: 'inbound-marketing-help-your-software-business-grow',
      content: '<p>An Inbound Marketing strategy can be extremely beneficial for software companies...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Digital-Marketing',
      tags: ['bespoke-software', 'business-software-company', 'custom-software'],
      seo: {
        metaTitle: 'How can Inbound Marketing help your software business grow',
        metaDescription: 'An Inbound Marketing strategy can be extremely beneficial for software companies to grow...',
        metaKeywords: ['bespoke software', 'business software company', 'custom software']
      },
      status: 'published',
      createdAt: '2021-12-07T05:50:50Z'
    },
    {
      title: 'Optimize Your Company\'s Website SEO in 20 Minutes',
      slug: 'optimize-your-companys-website-seo-in-20-minutes',
      content: '<p>SEO takes a lot of time or a lot of work, so we\'ve created this guide...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'SEO',
      tags: ['backlinks', 'keyword-research', 'off-page-seo', 'on-page-seo'],
      seo: {
        metaTitle: 'Optimize Your Company\'s Website SEO in 20 Minutes',
        metaDescription: 'SEO takes a lot of time or a lot of work, so we\'ve created this quick guide to optimize your website...',
        metaKeywords: ['backlinks', 'keyword research', 'off page seo', 'on page seo']
      },
      status: 'published',
      createdAt: '2021-11-24T06:09:37Z'
    },
    {
      title: 'How to Boost Video Marketing on LinkedIn: Tips for Your Software Company',
      slug: 'software-company-boost-video-marketing-on-linkedin',
      content: '<p>In your software company\'s video strategy, allows you to reach more people...</p>',
      featuredImage: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop&auto=format&q=80',
      category: 'Digital-Marketing',
      tags: ['custom-software-development', 'digital-marketing', 'linkedin-marketing'],
      seo: {
        metaTitle: 'Tips for Your Software Company | Boost Video Marketing on LinkedIn',
        metaDescription: 'In your software company\'s video strategy, allows you to reach more people on LinkedIn...',
        metaKeywords: ['custom software development', 'digital marketing']
      },
      status: 'published',
      createdAt: '2021-11-09T06:14:09Z'
    }
  ];

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50" id="blog">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="w-4 h-4" />
            <span>Our Blog</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Latest Insights & 
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-blue-600">
              Expert Knowledge
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover cutting-edge strategies, industry trends, and actionable insights to 
            <motion.span 
              className="font-semibold text-blue-600 inline-block mx-1"
              whileHover={{ scale: 1.05 }}
            >
              transform your business
            </motion.span>
            and stay ahead of the competition
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(displayedPosts.length > 0 ? displayedPosts : fallbackPosts).map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Trending Badge */}
              {index < 3 && (
                <motion.div
                  className="absolute top-4 right-4 z-10 bg-linear-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </motion.div>
              )}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                    {post.category.replace(/-/g, ' ')}
                  </span>
                </motion.div>
                
                {/* Date Badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{formatDate(post.createdAt)}</span>
                </motion.div>
              </div>
              <div className="p-6">
                {/* Title with Animation */}
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {post.title}
                </motion.h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.seo.metaDescription}
                </p>
                
                {/* Tags with Animation */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <motion.span 
                      key={idx}
                      className="inline-flex items-center text-xs text-gray-700 bg-linear-to-r from-gray-100 to-gray-50 px-3 py-1.5 rounded-full font-medium border border-gray-200"
                      whileHover={{ scale: 1.05, backgroundColor: '#EFF6FF', borderColor: '#3B82F6' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag.replace(/-/g, ' ')}
                    </motion.span>
                  ))}
                </div>

                {/* Read More Button */}
                <motion.div 
                  className="mt-auto pt-4 border-t border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center justify-between group/btn"
                  >
                    <span className="text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                      Read Full Article
                    </span>
                    <motion.div
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-[200%_auto] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore All Articles</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.p
            className="mt-4 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.span
              className="font-semibold text-blue-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {blogPosts.length}+ articles
            </motion.span>
            {' '}covering technology, development, and digital marketing
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;