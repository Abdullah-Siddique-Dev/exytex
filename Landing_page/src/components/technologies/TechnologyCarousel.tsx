import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const technologies = [
  {
    name: 'Blockchain',
    description: 'Build secure, transparent, and decentralized applications with cutting-edge blockchain technology. Transform your business with distributed ledger solutions.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    link: '/technologies/blockchain',
  },
  {
    name: 'Mobility',
    description: 'Create powerful mobile experiences across iOS and Android platforms. Native and cross-platform solutions that engage users and drive business growth.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    name: 'Business Intelligence',
    description: 'Transform data into actionable insights with advanced BI tools. Make informed decisions with real-time analytics and comprehensive reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    name: 'Robotic Process Automation',
    description: 'Automate repetitive tasks and streamline workflows with intelligent RPA solutions. Increase efficiency and reduce operational costs.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    name: 'Open Source',
    description: 'Leverage the power of open-source technologies for flexible, cost-effective solutions. Java, Python, PHP, React, Node.js, and more.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  },
  {
    name: 'Microsoft',
    description: 'Enterprise-grade solutions built on Microsoft technologies. .NET, Azure, Dynamics 365, and SharePoint for robust business applications.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
  },
  {
    name: 'Content Management Systems',
    description: 'Build and manage digital experiences with powerful CMS platforms. Magento, Drupal, WordPress, Shopify, and Sitecore expertise.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  },
  {
    name: 'Cloud',
    description: 'Scale your infrastructure with cloud computing solutions. AWS, Azure, and Google Cloud expertise for modern, resilient applications.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  },
  {
    name: 'IBM iSeries',
    description: 'Modernize legacy systems with IBM iSeries expertise. AS/400, RPG, COBOL, and DB2 solutions for enterprise reliability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
];

export const TechnologyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % technologies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + technologies.length) % technologies.length);
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technology Areas
          </h2>
          <p className="text-gray-400 text-base">Explore our comprehensive technology expertise</p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {technologies.map((tech, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    className="relative h-96 rounded-2xl overflow-hidden group"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    style={{ perspective: 1000 }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${tech.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                    
                    <div className="relative h-full flex flex-col justify-end p-8">
                      <motion.h3
                        className="text-3xl font-semibold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {tech.name}
                      </motion.h3>
                      
                      <motion.p
                        className="text-gray-300 text-base mb-6 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {tech.description}
                      </motion.p>
                      
                      <motion.button
                        className="group/btn w-fit px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-2">
                          Explore More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
