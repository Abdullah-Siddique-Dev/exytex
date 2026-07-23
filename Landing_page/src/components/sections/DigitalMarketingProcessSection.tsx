import React from 'react';
import { motion } from 'framer-motion';

export const DigitalMarketingProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Strategy Planning',
      description: 'We analyze your business needs and create a personalized digital marketing strategy tailored to your specific goals and target audience.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format&q=80', // Analytics dashboard
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Campaign Development',
      description: 'Design and develop comprehensive campaigns across multiple channels including SEO, SEM, social media, and content marketing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center&auto=format&q=80', // Computer with marketing tools
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the campaigns with precision, utilizing the latest tools and techniques to ensure maximum effectiveness and reach.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop&crop=center&auto=format&q=80', // SEO tools interface
      duration: '1-2 weeks'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuously monitor campaign performance and optimize strategies based on data analytics to improve ROI and achieve better results.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format&q=80', // Analytics dashboard with charts
      duration: 'Ongoing'
    },
    {
      step: '05',
      title: 'Performance Analysis',
      description: 'Detailed analysis of campaign performance with comprehensive reports and insights to measure success and identify opportunities.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format&q=80', // Analytics reports
      duration: 'Monthly'
    },
    {
      step: '06',
      title: 'Scaling & Growth',
      description: 'Scale successful campaigns and explore new opportunities to expand your digital presence and maximize business growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center&auto=format&q=80', // Business growth chart
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side - Title */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-inter">
                Our Digital Marketing Process
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed font-inter">
                A systematic approach to digital marketing that ensures consistent results and continuous growth for your business
              </p>
            </div>
          </motion.div>

          {/* Right Side - Process Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold font-inter">
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-inter group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-inter">
                      {step.description}
                    </p>
                    
                    {/* Arrow Icon */}
                    <div className="mt-4 flex items-center text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};