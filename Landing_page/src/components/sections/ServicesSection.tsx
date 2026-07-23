import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Card } from '../ui/Card';
import { staggerContainer, staggerItem } from '../../utils/animations';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies',
    icon: '🌐',
    gradient: 'from-blue-500 to-purple-600',
    href: '/web-development'
  },
  {
    title: 'Mobile App Development',
    description: 'Native iOS & Android apps with exceptional user experiences',
    icon: '📱',
    gradient: 'from-purple-500 to-pink-600',
    href: '/mobile-app-development'
  },
  {
    title: 'Graphic Design',
    description: 'Creative visual design solutions for brands and marketing',
    icon: '🎨',
    gradient: 'from-pink-500 to-red-600',
    href: '/graphic-design'
  },
  {
    title: 'AI & ML Services',
    description: 'Artificial Intelligence and Machine Learning solutions',
    icon: '🤖',
    gradient: 'from-green-500 to-teal-600',
    href: '/ai-ml'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    icon: '☁️',
    gradient: 'from-cyan-500 to-blue-600',
    href: '/cloud-solutions'
  },
  {
    title: 'Digital Marketing',
    description: 'Growth marketing strategies and SEO optimization',
    icon: '📈',
    gradient: 'from-orange-500 to-red-600',
    href: '/digital-marketing'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform rotate-12 scale-150" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional digital experiences through innovative technology and creative design
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Link to={service.href}>
                <Card hover3D glowEffect className="h-full group cursor-pointer">
                  <div className="text-center">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full mx-auto`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
