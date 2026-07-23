import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, TrendingUp, SearchCheck, Paintbrush, Wrench, CloudCog, ArrowRight } from 'lucide-react';

export const ServicesExpertiseSection: React.FC = () => {
  const services = [
    {
      category: 'Development & Technology',
      description: 'Building robust digital foundations',
      items: [
        {
          icon: Globe,
          title: 'Web Development',
          description: 'Custom websites, optimized for performance and SEO',
          features: ['Responsive Design', 'Performance Optimization', 'SEO Ready']
        },
        {
          icon: Smartphone,
          title: 'Mobile App Development',
          description: 'Android & iOS apps using modern frameworks and best practices',
          features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
        },
        {
          icon: Database,
          title: 'Web Applications & ERP Systems',
          description: 'Custom business applications designed to scale',
          features: ['Scalable Architecture', 'Cloud Integration', 'Real-time Data']
        }
      ]
    },
    {
      category: 'Digital Media & Growth',
      description: 'Amplifying your digital presence',
      items: [
        {
          icon: TrendingUp,
          title: 'Digital Marketing',
          description: 'Strategic online marketing to grow your reach',
          features: ['Social Media', 'Content Strategy', 'Analytics']
        },
        {
          icon: SearchCheck,
          title: 'Search Engine Optimization (SEO)',
          description: 'Increase visibility, traffic, and conversions',
          features: ['Keyword Research', 'Technical SEO', 'Content Optimization']
        },
        {
          icon: Paintbrush,
          title: 'Graphic & UI/UX Design',
          description: 'Brand identity and interface designs that resonate',
          features: ['Brand Identity', 'User Experience', 'Visual Design']
        }
      ]
    },
    {
      category: 'Support & Innovation',
      description: 'Ensuring continuous excellence',
      items: [
        {
          icon: Wrench,
          title: 'Maintenance & Ongoing Support',
          description: 'Keeping your digital ecosystem stable and updated',
          features: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization']
        },
        {
          icon: CloudCog,
          title: 'API Integration & SaaS Solutions',
          description: 'Seamless system integrations and cloud-based services',
          features: ['Third-party APIs', 'Cloud Migration', 'System Integration']
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What We Do — Services & Expertise
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of professional IT & digital services designed to transform your business
          </p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-gray-500">{category.description}</p>
                <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-gray-600 mx-auto mt-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    onClick={() => {
                      // Navigate to specific service page or contact
                      const serviceSlug = service.title.toLowerCase()
                        .replace(/&/g, '') // Remove &
                        .replace(/\//g, '') // Remove /
                        .replace(/\s+/g, '-') // Replace spaces with single dash
                        .replace(/-+/g, '-'); // Replace multiple dashes with single dash
                      window.location.href = `/${serviceSlug}`;
                    }}
                  >
                    {/* Card Content */}
                    <div className="p-8">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                          <service.icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <motion.button
                        className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors group-hover:translate-x-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          const serviceSlug = service.title.toLowerCase()
                            .replace(/&/g, '') // Remove &
                            .replace(/\//g, '') // Remove /
                            .replace(/\s+/g, '-') // Replace spaces with single dash
                            .replace(/-+/g, '-'); // Replace multiple dashes with single dash
                          window.location.href = `/${serviceSlug}`;
                        }}
                        whileHover={{ x: 4 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {/* Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Integrated Excellence
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                We integrate marketing, design, and technical expertise to deliver impactful digital products that help businesses succeed online.
              </p>
              <motion.button
                onClick={() => {
                  // Navigate to portfolio/work page
                  window.location.href = '/our-work';
                }}
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 hover:shadow-xl transition-all text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};