import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Server, Globe, ArrowRight, Star, Search, TrendingUp, Palette } from 'lucide-react';

export const HireDeveloperCategories: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const developers = [
    {
      name: 'Hire Web Developer',
      href: '/hire-developer/web',
      icon: Globe,
      description: 'Expert web developers for modern responsive websites and web applications',
      skills: ['React', 'Vue.js', 'Angular', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
      rating: 4.9,
      available: 52
    },
    {
      name: 'Hire Mobile App Developer',
      href: '/hire-developer/mobile',
      icon: Smartphone,
      description: 'Skilled mobile developers for iOS and Android applications',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070',
      rating: 4.8,
      available: 45
    },
    {
      name: 'Hire Frontend Developer',
      href: '/hire-developer/frontend',
      icon: Code,
      description: 'Professional frontend developers for interactive user interfaces',
      skills: ['JavaScript', 'TypeScript', 'CSS3', 'HTML5'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070',
      rating: 4.9,
      available: 48
    },
    {
      name: 'Hire Backend Developer',
      href: '/hire-developer/backend',
      icon: Server,
      description: 'Experienced backend developers for scalable server-side solutions',
      skills: ['Node.js', 'Python', 'PHP', 'Database'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034',
      rating: 4.8,
      available: 41
    },
    {
      name: 'Hire Full Stack Developer',
      href: '/hire-developer/fullstack',
      icon: Code,
      description: 'Versatile full stack developers for end-to-end web solutions',
      skills: ['MEAN', 'MERN', 'Laravel', 'Django'],
      image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070',
      rating: 4.9,
      available: 38
    },
    {
      name: 'Hire SEO Specialist',
      href: '/hire-developer/seo',
      icon: Search,
      description: 'SEO experts to improve your website ranking and organic traffic',
      skills: ['On-page SEO', 'Technical SEO', 'Analytics', 'Keywords'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      rating: 4.7,
      available: 32
    },
    {
      name: 'Hire Digital Marketer',
      href: '/hire-developer/digital-marketing',
      icon: TrendingUp,
      description: 'Digital marketing specialists for comprehensive online growth',
      skills: ['Social Media', 'PPC', 'Content', 'Email Marketing'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070',
      rating: 4.8,
      available: 35
    },
    {
      name: 'Hire Blockchain Developer',
      href: '/hire-developer/blockchain',
      icon: Code,
      description: 'Blockchain developers for cryptocurrency and DeFi solutions',
      skills: ['Solidity', 'Smart Contracts', 'Web3', 'DApps'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032',
      rating: 4.9,
      available: 28
    },
    {
      name: 'Hire UI/UX Designer',
      href: '/hire-developer/uiux',
      icon: Palette,
      description: 'Creative UI/UX designers for exceptional user experiences',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064',
      rating: 4.8,
      available: 42
    },
    {
      name: 'Hire DevOps Engineer',
      href: '/hire-developer/devops',
      icon: Server,
      description: 'DevOps engineers for CI/CD, cloud infrastructure and automation',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074',
      rating: 4.9,
      available: 25
    },
    {
      name: 'Hire Cloud Developer',
      href: '/hire-developer/cloud',
      icon: Server,
      description: 'Cloud specialists for AWS, Azure and Google Cloud solutions',
      skills: ['AWS', 'Azure', 'GCP', 'Serverless'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
      rating: 4.8,
      available: 30
    },
    {
      name: 'Hire Graphic Designer',
      href: '/hire-developer/graphic-design',
      icon: Palette,
      description: 'Creative graphic designers for branding and visual content',
      skills: ['Photoshop', 'Illustrator', 'Branding', 'Print Design'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071',
      rating: 4.7,
      available: 38
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium mb-4">
            Expert Developers
            Expert Developers
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Choose Your Developer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our curated selection of expert developers across different technologies and find the perfect match for your project
          </p>
        </motion.div>

        {/* Developer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {developers.map((dev, index) => {
            const Icon = dev.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <Link to={dev.href}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full cursor-pointer"
                  >
                    {/* Background Image - Only visible on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        backgroundImage: `url('${dev.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />

                    {/* Dark overlay for better text readability on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-yellow-500 mb-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-white transition-colors duration-300">{dev.rating}</span>
                          </div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-200 transition-colors duration-300">{dev.available} available</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                        {dev.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 group-hover:text-gray-200 text-xs sm:text-sm mb-4 leading-relaxed flex-grow transition-colors duration-300">
                        {dev.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {dev.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-xs font-medium transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                        {dev.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 group-hover:bg-white/20 text-gray-500 group-hover:text-gray-300 rounded-full text-xs transition-all duration-300">
                            +{dev.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-blue-600 group-hover:text-white font-semibold text-xs sm:text-sm transition-colors duration-300">View Profiles</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Can't find the right developer? We have more!</p>
          <Link 
            to="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Get Custom Match
          </Link>
        </motion.div>
      </div>
    </section>
  );
};