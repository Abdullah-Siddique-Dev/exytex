import React from 'react';
import { motion } from 'framer-motion';

export const WebDevAboutSection: React.FC = () => {
  const aboutContent = [
    {
      title: "Full-Service Web Development",
      content: "Exytex is a full-time web development company. We are specialized in web development, custom programming, and template-based web pages. We really love and feel passion for what we do.",
      icon: "💻",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Client-Focused Approach",
      content: "We always seek the benefit and satisfaction of our clients, through personalized advice and quality in all our developments. We are continuously researching and testing new technologies.",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Quality & Innovation",
      content: "We aim to improve the quality of our developments and services that add value to our customers. We develop quality websites always thinking of two potential profiles: people and search engines.",
      icon: "⚡",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Strategic Analysis",
      content: "We carry out a complete analysis of your sector that allows us to know what type of website you need, and from there we define the information architecture, content strategy, and friendly URLs.",
      icon: "📊",
      gradient: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              WE ARE YOUR WEB
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              DEVELOPMENT COMPANY
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transforming ideas into powerful web solutions with passion, expertise, and innovation
          </motion.p>
        </motion.div>

        {/* Horizontal Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {aboutContent.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Glassmorphic Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:bg-white/80 h-full">
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Content */}
                  <p 
                    className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {item.content}
                  </p>
                  
                  {/* Decorative Element */}
                  <motion.div
                    className={`w-20 h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Ready to Build Your Web Solution?
            </h3>
            <p 
              className="text-xl text-gray-600 mb-8 font-light"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ fontFamily: '"Poppins", sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="px-10 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl font-semibold text-lg transition-all duration-300"
                style={{ fontFamily: '"Poppins", sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};