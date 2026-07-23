import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Database, Palette, Shield } from 'lucide-react';

export const DeveloperSkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'blue',
      skills: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'green',
      skills: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Ruby on Rails']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'purple',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Kotlin', 'Swift']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'orange',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      color: 'pink',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing']
    },
    {
      icon: Shield,
      title: 'Security & QA',
      color: 'red',
      skills: ['Penetration Testing', 'Security Audits', 'Automated Testing', 'Manual Testing', 'Performance Testing']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
            Hire Developers by Skills
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Access a diverse pool of talented developers with expertise across multiple technologies and platforms
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeCategory === index
                  ? 'bg-gray-200 text-gray-900 shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-8 h-8 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                {React.createElement(categories[activeCategory].icon, { className: "w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" })}
              </div>
              <h3 className="text-xs font-semibold text-gray-900 group-hover:text-white transition-colors">{skill}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
