import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { projectsData, getFeaturedProjects } from '../data/projectsData';
import { scrollToSection } from '../utils/scrollUtils';
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  Award,
  ArrowRight,
  Search,
  CheckCircle2,
  Briefcase,
  Zap
} from 'lucide-react';

const OurWorkPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projectCategories = [
    'All',
    'Mobile App Development',
    'Web Development',
    'Design',
    'SEO',
    'Software Development'
  ];

  const projects = projectsData;

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: '100+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: <Users className="w-6 h-6" />, value: '50+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
    { icon: <Briefcase className="w-6 h-6" />, value: '5+', label: 'Service Categories', color: 'from-green-500 to-emerald-500' },
    { icon: <Zap className="w-6 h-6" />, value: '95%', label: 'Success Rate', color: 'from-orange-500 to-red-500' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Helmet>
        <title>Exytex | Software House Portfolio | IT Software Company</title>
        <meta name="description" content="Examples of completed projects: websites, CRM/ERP systems, mobile apps, digital marketing work, and online store development." />
        <meta name="keywords" content="software house portfolio, IT company portfolio, completed projects, websites, CRM ERP systems, mobile apps, digital marketing, online store development, Exytex" />
        <meta property="og:title" content="Exytex | Software House Portfolio | IT Software Company" />
        <meta property="og:description" content="Examples of completed projects: websites, CRM/ERP systems, mobile apps, digital marketing work, and online store development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/our-portfolio/" />
        <link rel="canonical" href="https://www.exytex.com/our-portfolio/" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <CursorFollower />
        <SleekHeader />

        {/* Hero Section - Fixed */}
        <section className="relative pt-32 pb-12 bg-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
              
              {/* Left Side - Content */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Award className="w-3.5 h-3.5 mr-1.5" />
                  Our Portfolio
                </motion.div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Transforming Ideas into 
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-1">
                    Digital Success
                  </span>
                </h1>
                
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  Discover our portfolio of successful software development projects that have helped businesses 
                  achieve digital transformation and drive growth across multiple industries.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <motion.button
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Our Work
                    <ArrowRight className="w-4 h-4 ml-1.5 inline" />
                  </motion.button>
                  
                  <motion.button
                    className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      navigate('/');
                      setTimeout(() => {
                        scrollToSection('#contact');
                      }, 300);
                    }}
                  >
                    Start Your Project
                  </motion.button>
                </div>

                {/* Quick Stats - Compact */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">16+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">50+</div>
                    <div className="text-xs text-gray-600">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">98%</div>
                    <div className="text-xs text-gray-600">Success</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Professional Image */}
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Main Image - Smaller */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&auto=format&q=80"
                      alt="Professional Development Team"
                      className="w-full h-[350px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>

                  {/* Floating Cards - Compact and positioned properly */}
                  <motion.div
                    className="absolute -top-3 -left-6 bg-white rounded-xl shadow-lg p-2.5 border border-gray-100 z-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">Success Rate</div>
                        <div className="text-sm font-bold text-green-600">98%</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-3 -right-6 bg-white rounded-xl shadow-lg p-2.5 border border-gray-100 z-10"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">Happy Clients</div>
                        <div className="text-sm font-bold text-blue-600">50+</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section - Compact */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Featured Projects
              </h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Showcasing our most impactful and innovative solutions
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Image Section - Compact */}
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                    
                    {/* Badges - Compact */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow">
                        ⭐ Featured
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between text-white text-xs">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Compact */}
                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-2">
                        {project.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        Client: <span className="font-semibold text-gray-700">{project.client}</span>
                      </div>
                    </div>

                    {/* Technologies - Compact */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Results - Compact */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Key Results</h4>
                      <div className="space-y-1">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <div className="w-1 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-1.5 flex-shrink-0"></div>
                            <span className="line-clamp-1">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button - Compact */}
                    <Link to={`/project/${project.slug}`}>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-xs transition-all duration-300 hover:shadow-lg">
                        View Details
                        <ExternalLink className="w-3 h-3 ml-1 inline" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Section */}
        <section id="projects" className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Complete Portfolio
              </h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive collection of successful projects
              </p>
            </motion.div>

            {/* Filters and Search - Compact */}
            <div className="flex flex-col md:flex-row gap-3 mb-8 max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-300 text-xs ${
                      activeFilter === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="relative md:ml-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs w-full md:w-auto"
                />
              </div>
            </div>

            {/* Projects Grid - Compact */}
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto"
              layout
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    {/* Image - Compact */}
                    <div className="relative h-36 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      <div className="absolute top-2 left-2 right-2 flex justify-between">
                        <span className="px-2 py-0.5 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
                            ⭐
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content - Compact */}
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.slice(0, 2).map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{project.date}</span>
                        </div>
                        <span className="text-blue-600 font-medium">{project.client}</span>
                      </div>

                      {/* Read More Button */}
                      <Link to={`/project/${project.slug}`}>
                        <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-xs hover:shadow-lg transition-all">
                          Read More
                          <ExternalLink className="w-3 h-3 ml-1 inline" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Search className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No projects found</h3>
                <p className="text-sm text-gray-500">Try adjusting your search or filter</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section - Compact */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-sm text-white/90 mb-6">
                Let's discuss how we can help transform your ideas into successful digital solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  className="px-6 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      scrollToSection('#contact');
                    }, 300);
                  }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-1.5 inline" />
                </motion.button>
                
                <motion.a
                  href="https://calendly.com/saadinsides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all text-sm inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default OurWorkPage;