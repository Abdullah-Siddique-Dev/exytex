import React from 'react';
import { motion } from 'framer-motion';
import { SearchCheck, FileSearch, Link2, BarChart2, Globe2, Users2 } from 'lucide-react';

export const SEOServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Boost Your Credibility',
      description: 'Establish trust and authority in your industry with top search rankings',
      icon: BarChart2,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with strategic SEO positioning',
      icon: Users2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Local SEO Strategies',
      description: 'Dominate local search results and attract nearby customers',
      icon: Globe2,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Increases Organic Discovery',
      description: 'Drive natural traffic through improved search visibility',
      icon: SearchCheck,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Targeted Audience Traffic',
      description: 'Attract qualified visitors who are ready to convert',
      icon: FileSearch,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      title: 'Offers Impressive ROI',
      description: 'Maximize returns with cost-effective SEO strategies',
      icon: Link2,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&auto=format&q=80'
    }
  ];

  return (
    <section id="seo-services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Your Online SEO Company Dubai
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Welcome to Exytex Technologies, the leading SEO company in Dubai. Our team of expert SEO professionals is dedicated to helping businesses in Dubai and beyond to improve their online visibility and drive more traffic to their websites.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Background Image - Only visible on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gray-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-light transition-colors duration-300" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                    {service.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
