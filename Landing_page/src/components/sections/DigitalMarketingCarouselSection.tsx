import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DigitalMarketingCarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const marketingServices = [
    {
      title: 'Search Engine Marketing (SEM)',
      description: 'Google Adwords campaigns developed by our team of data analysts to maximize your ROI and drive targeted traffic to your website.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80', // Analytics dashboard
      features: ['Google Ads Management', 'Keyword Research', 'Bid Optimization', 'Performance Tracking'],
      icon: '🎯'
    },
    {
      title: 'Social Media Advertising',
      description: 'Highly successful social media advertising campaigns with advanced targeting and audience segmentation across all major platforms.',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop&crop=center&auto=format&q=80', // Social media marketing workspace
      features: ['Facebook Ads', 'Instagram Marketing', 'LinkedIn Campaigns', 'Twitter Promotion'],
      icon: '📱'
    },
    {
      title: 'Email Marketing',
      description: 'One of the longest-running marketing actions that offers the best results in terms of ROI and customer retention.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&crop=center&auto=format&q=80', // Email marketing on laptop
      features: ['Campaign Design', 'List Management', 'Automation', 'Analytics'],
      icon: '📧'
    },
    {
      title: 'Content Marketing',
      description: 'Branded content and content marketing that persuades users to perform desired actions through valuable and engaging content.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center&auto=format&q=80', // Content creation team
      features: ['Blog Writing', 'Video Content', 'Infographics', 'Social Content'],
      icon: '✍️'
    },
    {
      title: 'Video Marketing',
      description: 'YouTube marketing solutions and video content creation to increase brand awareness and engagement with your target audience.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&crop=center&auto=format&q=80', // Video production
      features: ['YouTube Optimization', 'Video Production', 'Live Streaming', 'Video Ads'],
      icon: '🎥'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % marketingServices.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + marketingServices.length) % marketingServices.length);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-inter">
            Featured Digital Marketing Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto font-inter">
            Explore our comprehensive range of digital marketing services designed to boost your online presence
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Image Side */}
                  <div className="relative">
                    <img
                      src={marketingServices[activeIndex].image}
                      alt={marketingServices[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/20"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {marketingServices[activeIndex].icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-inter"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {marketingServices[activeIndex].title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-600 leading-relaxed mb-6 font-inter"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {marketingServices[activeIndex].description}
                    </motion.p>

                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {marketingServices[activeIndex].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-700 font-inter">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.button
                      onClick={() => {
                        const strategiesSection = document.getElementById('digital-strategies');
                        if (strategiesSection) {
                          strategiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 w-fit font-inter"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {marketingServices.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};