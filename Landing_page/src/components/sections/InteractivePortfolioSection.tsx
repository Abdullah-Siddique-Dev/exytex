import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '../animations/AnimatedSection';

const projects = [
  { 
    id: 1, 
    title: 'Native E Donation App', 
    category: 'mobile', 
    description: 'Comprehensive donation platform with secure payment integration and real-time tracking',
    tech: 'React Native, Firebase, Stripe API',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 2, 
    title: 'Play Ground (ESPORT)', 
    category: 'design', 
    description: 'Modern esports platform design with gaming-focused UI/UX and tournament management',
    tech: 'Figma, Adobe XD, Prototyping',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 3, 
    title: 'Ground Fitness App For Health', 
    category: 'mobile', 
    description: 'Complete fitness tracking solution with workout plans and health monitoring',
    tech: 'Flutter, HealthKit, Firebase',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 4, 
    title: 'Fastest White Hat SEO Results', 
    category: 'seo', 
    description: 'Advanced SEO optimization strategies delivering rapid organic growth and rankings',
    tech: 'SEO Tools, Analytics, Content Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 5, 
    title: 'Custom E-Commerce Hub', 
    category: 'web', 
    description: 'Full-featured e-commerce platform with advanced inventory and payment systems',
    tech: 'Next.js, Node.js, PostgreSQL',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 6, 
    title: 'Furniture Gallery App', 
    category: 'design', 
    description: 'Elegant furniture showcase with AR visualization and interior design tools',
    tech: 'UI/UX Design, AR Integration, 3D Modeling',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 7, 
    title: 'Car Booking Taxi App', 
    category: 'mobile', 
    description: 'On-demand taxi booking platform with real-time tracking and payment integration',
    tech: 'React Native, Google Maps, Payment Gateway',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 8, 
    title: 'Save Sales Custom Admin Panel', 
    category: 'web', 
    description: 'Comprehensive sales management dashboard with analytics and reporting tools',
    tech: 'React, Node.js, MongoDB, Charts.js',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 9, 
    title: 'Soobz Online Clothing Brand', 
    category: 'web', 
    description: 'Fashion e-commerce platform with modern design and seamless shopping experience',
    tech: 'WordPress, WooCommerce, Custom Theme',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 10, 
    title: 'Trade Kitchen Suppliers', 
    category: 'web', 
    description: 'B2B kitchen supplies platform with inventory management and wholesale pricing',
    tech: 'Laravel, MySQL, Payment Integration',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 11, 
    title: 'Quick Professional Movers', 
    category: 'web', 
    description: 'Moving services platform with booking system and real-time tracking',
    tech: 'React, Express.js, Google Maps API',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 12, 
    title: 'Hair Salon Reviews', 
    category: 'web', 
    description: 'Review platform for hair salons with appointment booking and rating system',
    tech: 'Vue.js, Firebase, Review API',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 13, 
    title: 'Al Hayyat Group Of Companies', 
    category: 'web', 
    description: 'Corporate website for multi-business conglomerate with portfolio showcase',
    tech: 'Next.js, Tailwind CSS, CMS Integration',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 14, 
    title: 'The Centrum International Peshawar', 
    category: 'web', 
    description: 'International business center website with facility booking and management',
    tech: 'WordPress, Custom Development, Booking System',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 15, 
    title: 'Elad Signs Printing With Admin Panel', 
    category: 'software', 
    description: 'Complete printing business management system with order tracking and admin controls',
    tech: 'PHP, MySQL, Admin Dashboard, Order Management',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 16, 
    title: 'Elad Boutique Ecommerce CRM', 
    category: 'web', 
    description: 'Boutique e-commerce platform with integrated CRM and customer management',
    tech: 'Laravel, CRM Integration, Payment Gateway',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 17, 
    title: 'Enterprise Resource Planning System', 
    category: 'web', 
    description: 'Comprehensive ERP solution for business process management and automation',
    tech: 'React, Node.js, PostgreSQL',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 18, 
    title: 'Real Estate Property Portal', 
    category: 'web', 
    description: 'Modern property listing platform with advanced search and virtual tours',
    tech: 'Next.js, MongoDB, Google Maps API',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 19, 
    title: 'Restaurant Management System', 
    category: 'web', 
    description: 'Complete restaurant POS and management solution with online ordering',
    tech: 'Vue.js, Laravel, MySQL',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 20, 
    title: 'Healthcare Patient Portal', 
    category: 'web', 
    description: 'Secure patient management system with appointment scheduling and records',
    tech: 'React, Express.js, MongoDB',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 21, 
    title: 'Educational Learning Platform', 
    category: 'web', 
    description: 'Interactive e-learning platform with course management and video streaming',
    tech: 'Next.js, Firebase, Video API',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 22, 
    title: 'Social Media Analytics Dashboard', 
    category: 'web', 
    description: 'Advanced analytics platform for social media performance tracking',
    tech: 'React, D3.js, Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 23, 
    title: 'Fitness Tracking Mobile App', 
    category: 'mobile', 
    description: 'Comprehensive fitness app with workout plans and nutrition tracking',
    tech: 'React Native, Firebase, HealthKit',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 24, 
    title: 'Food Delivery App', 
    category: 'mobile', 
    description: 'On-demand food delivery platform with real-time order tracking',
    tech: 'Flutter, Firebase, Google Maps',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 25, 
    title: 'Banking & Finance App', 
    category: 'mobile', 
    description: 'Secure mobile banking solution with transaction management',
    tech: 'React Native, Secure API, Biometric Auth',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 26, 
    title: 'Travel Booking Mobile App', 
    category: 'mobile', 
    description: 'Complete travel booking platform with flights, hotels, and activities',
    tech: 'Flutter, REST API, Payment Gateway',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 27, 
    title: 'E-Commerce Mobile App', 
    category: 'mobile', 
    description: 'Feature-rich shopping app with AR product preview and secure checkout',
    tech: 'React Native, Stripe, AR Kit',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 28, 
    title: 'Music Streaming App', 
    category: 'mobile', 
    description: 'High-quality music streaming platform with offline playback',
    tech: 'Flutter, Audio API, Cloud Storage',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 29, 
    title: 'Brand Identity & Logo Design', 
    category: 'design', 
    description: 'Complete brand identity package with logo, colors, and guidelines',
    tech: 'Adobe Illustrator, Photoshop, Brand Strategy',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 30, 
    title: 'UI/UX Design System', 
    category: 'design', 
    description: 'Comprehensive design system with components and style guide',
    tech: 'Figma, Design Tokens, Component Library',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 31, 
    title: 'Mobile App UI Design', 
    category: 'design', 
    description: 'Modern mobile app interface design with interactive prototypes',
    tech: 'Figma, Prototyping, User Testing',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 32, 
    title: 'E-Commerce SEO Campaign', 
    category: 'seo', 
    description: 'Comprehensive SEO strategy for e-commerce with 250% traffic increase',
    tech: 'SEO Tools, Analytics, Content Marketing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 33, 
    title: 'Local Business SEO Optimization', 
    category: 'seo', 
    description: 'Local SEO strategy with Google My Business and citation building',
    tech: 'Local SEO, GMB, Citation Management',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 34, 
    title: 'Technical SEO Audit & Implementation', 
    category: 'seo', 
    description: 'Complete technical SEO overhaul with site speed and structure optimization',
    tech: 'Technical SEO, Site Audit, Performance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 35, 
    title: 'Content Marketing SEO Strategy', 
    category: 'seo', 
    description: 'Data-driven content strategy with keyword research and optimization',
    tech: 'Content SEO, Keyword Research, Analytics',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 36, 
    title: 'Enterprise Link Building Campaign', 
    category: 'seo', 
    description: 'Strategic link building with high-authority backlinks and outreach',
    tech: 'Link Building, Outreach, Authority Building',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 37, 
    title: 'Custom CRM Software', 
    category: 'software', 
    description: 'Tailored customer relationship management system for enterprise',
    tech: 'Java, Spring Boot, MySQL',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 38, 
    title: 'Inventory Management System', 
    category: 'software', 
    description: 'Advanced inventory tracking with barcode scanning and reporting',
    tech: 'Python, Django, PostgreSQL',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 39, 
    title: 'HR Management Software', 
    category: 'software', 
    description: 'Complete HR solution with payroll, attendance, and performance tracking',
    tech: 'C#, .NET Core, SQL Server',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 40, 
    title: 'Project Management Tool', 
    category: 'software', 
    description: 'Collaborative project management platform with task tracking and reporting',
    tech: 'React, Node.js, MongoDB',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const categories = [
  { id: 'all', name: 'All', count: projects.length, route: '/our-work' },
  { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length, route: '/services/web-development' },
  { id: 'mobile', name: 'Mobile App Development', count: projects.filter(p => p.category === 'mobile').length, route: '/services/mobile-app-development' },
  { id: 'design', name: 'Design', count: projects.filter(p => p.category === 'design').length, route: '/services/graphic-design' },
  { id: 'seo', name: 'SEO', count: projects.filter(p => p.category === 'seo').length, route: '/services/seo' },
  { id: 'software', name: 'Software Development', count: projects.filter(p => p.category === 'software').length, route: '/services' }
];

export const InteractivePortfolioSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 8;

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const totalSlides = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleCategoryClick = (category: typeof categories[0]) => {
    if (category.id === 'all') {
      setActiveCategory('all');
      setCurrentSlide(0);
    } else {
      navigate(category.route);
    }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #6B7280 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Hero-Style Section Header */}
        <AnimatedSection animation="fadeIn" className="text-center mb-12 relative">
          {/* Floating Background Elements */}
          <div className="absolute -top-8 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -top-4 right-1/3 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
          
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm" 
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          >
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Portfolio Showcase
            <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Recent Success Stories
            </span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, scale: 0.5, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 100,
              damping: 17,
              bounce: 0.3
            }}
          >
            Discover our innovative solutions that have transformed businesses across various industries
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </AnimatedSection>

        {/* Filter Buttons with Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: activeCategory === category.id 
                  ? "0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
                  : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="relative z-10 text-sm">
                {category.name}
                <span className="ml-2 text-xs opacity-75 bg-black/10 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </span>
              {activeCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  layoutId="activeCategory"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0, opacity: 0.5 }}
                whileTap={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: activeCategory === category.id 
                    ? 'rgba(255, 255, 255, 0.3)' 
                    : 'rgba(59, 130, 246, 0.2)'
                }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Slider Controls */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        )}

        {/* Projects Grid with Slider */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100"
                whileHover={{ 
                  y: -12,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125"
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Content Overlay */}
                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <motion.h3 
                      className="text-xl font-bold mb-3 leading-tight"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm text-gray-200 mb-4 line-clamp-3 leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div 
                      className="text-xs text-blue-300 mb-4 font-medium"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {project.tech}
                    </motion.div>
                    
                    <motion.button
                      className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 self-start shadow-lg hover:shadow-xl"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ 
                        y: 0, 
                        opacity: 1, 
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      View Project
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-gray-700 text-xs font-semibold rounded-full shadow-lg border border-white/20">
                    {project.category === 'mobile' ? 'Mobile App' :
                     project.category === 'web' ? 'Web Dev' :
                     project.category === 'design' ? 'Design' :
                     project.category === 'seo' ? 'SEO' :
                     project.category === 'software' ? 'Software' :
                     project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </motion.div>

                {/* Project Info Card */}
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <motion.h3 
                    className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {project.tech.split(',')[0]}
                    </span>
                    
                    <motion.div
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
};
