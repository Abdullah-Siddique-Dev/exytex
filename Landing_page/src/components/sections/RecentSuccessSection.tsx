import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 

  Star,
  CheckCircle
} from 'lucide-react';

const successStories = [
  {
    title: "E-commerce Platform",
    client: "TechMart Solutions",
    description: "Developed a comprehensive e-commerce platform with advanced inventory management and payment integration.",
    results: ["300% increase in sales", "50% faster loading time", "99.9% uptime"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
    category: "Web Development"
  },
  {
    title: "Mobile Banking App",
    client: "SecureBank Ltd",
    description: "Created a secure mobile banking application with biometric authentication and real-time transactions.",
    results: ["1M+ downloads", "4.8/5 app rating", "Zero security incidents"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
    category: "Mobile Development"
  },
  {
    title: "Digital Marketing Campaign",
    client: "GrowthCorp",
    description: "Executed a comprehensive digital marketing strategy including SEO, social media, and content marketing.",
    results: ["400% ROI increase", "250% traffic growth", "150% lead generation"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    category: "Digital Marketing"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: CheckCircle, value: "1000+", label: "Projects Completed" },
  { icon: Globe, value: "25+", label: "Countries Served" },
  { icon: Award, value: "50+", label: "Awards Won" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const RecentSuccessSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Hero-Style Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Floating Elements */}
          <div className="absolute -top-10 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -top-5 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm" 
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
          >
            <Star className="w-5 h-5 mr-2 text-blue-600" />
            Client Success Stories
            <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Recent Success Stories
            </span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-6" 
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover our innovative solutions that have transformed businesses across various industries
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </motion.div>

        {/* Success Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{story.client}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    {story.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Track Record
            </h3>
            <p className="text-gray-300 text-lg">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
