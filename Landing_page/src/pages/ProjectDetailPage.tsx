import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { getProjectBySlug } from '../data/projectsData';
import { scrollToSection } from '../utils/scrollUtils';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/our-work')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Our Work
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - {project.subtitle} | Exytex Technologies</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <CursorFollower />
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <motion.button
                onClick={() => navigate('/our-work')}
                className="flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Our Work
              </motion.button>

              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  {project.subtitle}
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    <span>By {project.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="md:col-span-2 space-y-12">
                
                {/* Challenge & Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {project.challenge}
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </motion.div>

                {/* Image Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-64 object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                >
                  <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-lg">{result}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Technologies */}
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-blue-600" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-3">Interested in Similar Project?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Let's discuss how we can help bring your ideas to life.
                  </p>
                  <button 
                    onClick={() => {
                      navigate('/');
                      setTimeout(() => {
                        scrollToSection('#contact');
                      }, 300);
                    }}
                    className="w-full px-4 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Get Started
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default ProjectDetailPage;
