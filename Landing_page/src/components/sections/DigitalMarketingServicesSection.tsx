import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, Mail, FileText, Newspaper, Magnet, Video, BarChart } from 'lucide-react';

export const DigitalMarketingServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Search Engine Marketing',
      description: 'Google Ads campaigns developed by data analysts to maximize ROI and drive targeted traffic.',
      icon: Search,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media Ads',
      description: 'Successful social media advertising campaigns with advanced targeting and audience segmentation.',
      icon: Share2,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Email Marketing',
      description: 'Strategic email campaigns that offer the best results in terms of ROI and customer retention.',
      icon: Mail,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Branded Content',
      description: 'Content marketing that persuades users to perform desired actions through valuable content.',
      icon: FileText,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Native Advertising',
      description: 'Advertising that adapts to your digital environment and attracts users with informative content.',
      icon: Newspaper,
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Inbound Marketing',
      description: 'Methodology based on creating valuable content to attract visitors and convert them into customers.',
      icon: Magnet,
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Video Marketing',
      description: 'YouTube marketing solutions to increase brand awareness and engagement with your target audience.',
      icon: Video,
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Advertising Audit',
      description: 'Comprehensive audit of your accounts to identify what you are doing well and how to improve.',
      icon: BarChart,
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
            Our Digital Marketing Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
            Comprehensive digital marketing solutions updated with the latest trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};