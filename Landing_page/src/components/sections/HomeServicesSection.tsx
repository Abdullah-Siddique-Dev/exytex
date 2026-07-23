import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, Smartphone, Paintbrush, UserCheck, CloudCog, 
  Blocks, SearchCheck, ShoppingCart, Megaphone, ArrowRight 
} from 'lucide-react';
import { ContactFormModal } from '../ui/ContactFormModal';

export const HomeServicesSection: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      description: "Custom websites optimized for SEO with modern frameworks and responsive design.",
      icon: Globe,
      link: '/services/web-development'
    },
    {
      title: "Design & Graphics",
      description: "Creative logos, icons, and brand identity design solutions.",
      icon: Paintbrush,
      link: '/services/graphic-design'
    },
    {
      title: "Mobile App",
      description: "Native and cross-platform mobile applications with modern UI/UX.",
      icon: Smartphone,
      link: '/services/mobile-app-development'
    },
    {
      title: "IT Staffing",
      description: "Professional IT recruitment and team augmentation services.",
      icon: UserCheck,
      link: '/services/it-staffing'
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and modernization services.",
      icon: CloudCog,
      link: '/services/cloud-solutions'
    },
    {
      title: "Blockchain",
      description: "Cutting-edge blockchain solutions and smart contract development.",
      icon: Blocks,
      link: '/services/blockchain'
    },
    {
      title: "SEO Services",
      description: "Drive massive traffic with powerful SEO and conversion optimization.",
      icon: SearchCheck,
      link: '/services/seo'
    },
    {
      title: "Amazon Services",
      description: "Comprehensive Amazon FBA and marketplace optimization.",
      icon: ShoppingCart,
      link: '/services/amazon-services'
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing and social media strategies.",
      icon: Megaphone,
      link: '/services/digital-marketing'
    }
  ];

  const handleServiceClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="py-12 md:py-16 bg-linear-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Our Services
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Software Development Services
          </motion.h2>
          
          <motion.p
            className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 90,
              damping: 17,
              bounce: 0.25
            }}
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Comprehensive IT services including web development, mobile apps, blockchain, cloud solutions, 
            digital marketing, and innovative software solutions to transform your business
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl p-6 cursor-pointer overflow-hidden"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              initial={{ opacity: 0, scale: 0.4, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                duration: 0.7, 
                type: "spring", 
                stiffness: 100,
                damping: 18,
                bounce: 0.3,
                delay: index * 0.1
              }}
              onClick={() => handleServiceClick(service.link)}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
              />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with Animated Background */}
                <motion.div 
                  className="relative w-14 h-14 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                {/* Title with Gradient on Hover */}
                <motion.h3 
                  className="text-xl font-bold mb-3 group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300" 
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {service.description}
                </p>

                {/* Learn More Link with Arrow Animation */}
                <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  <span style={{ fontFamily: '"Inter", sans-serif' }}>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <button
            onClick={() => setShowContactForm(true)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm inline-flex items-center"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Start Your Project Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>

      <ContactFormModal isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </section>
  );
};
