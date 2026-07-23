import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Palette, Brain, Shield } from 'lucide-react';

export const AboutServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      type: 'glass'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions',
      type: 'neo'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      type: 'gradient'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences',
      type: 'minimal'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Intelligent solutions powered by machine learning',
      type: 'shadow'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Robust security solutions and consulting',
      type: 'outline'
    }
  ];

  const getCardClasses = (type: string) => {
    switch (type) {
      case 'glass':
        return 'bg-white/70 backdrop-blur-md border border-white/20 shadow-xl';
      case 'neo':
        return 'bg-gray-100 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]';
      case 'gradient':
        return 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg';
      case 'minimal':
        return 'bg-white border border-gray-200 hover:border-gray-300';
      case 'shadow':
        return 'bg-white shadow-2xl hover:shadow-3xl';
      case 'outline':
        return 'bg-transparent border-2 border-blue-600 hover:bg-blue-50';
      default:
        return 'bg-white border border-gray-200';
    }
  };

  const getIconClasses = (type: string) => {
    switch (type) {
      case 'gradient':
        return 'text-white';
      case 'outline':
        return 'text-blue-600';
      default:
        return 'text-blue-600';
    }
  };

  const getTextClasses = (type: string) => {
    switch (type) {
      case 'gradient':
        return 'text-white';
      case 'outline':
        return 'text-gray-900';
      default:
        return 'text-gray-900';
    }
  };

  const getDescClasses = (type: string) => {
    switch (type) {
      case 'gradient':
        return 'text-blue-100';
      case 'outline':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help businesses thrive in the digital age
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${getCardClasses(service.type)}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className={`w-6 h-6 ${getIconClasses(service.type)}`} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${getTextClasses(service.type)}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${getDescClasses(service.type)}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};