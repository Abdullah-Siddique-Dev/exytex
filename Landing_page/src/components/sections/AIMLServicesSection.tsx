import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AIMLServicesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models for prediction, classification, and pattern recognition.',
      fullDescription: 'We develop sophisticated machine learning models tailored to your specific business needs. Our expertise includes supervised and unsupervised learning, deep learning, and reinforcement learning algorithms. From data preprocessing to model deployment, we ensure optimal performance and accuracy for your AI solutions.',
      features: ['Predictive Analytics', 'Classification Models', 'Deep Learning', 'Model Optimization'],
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-blue-600'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      fullDescription: 'Our NLP services enable machines to understand, interpret, and generate human language. We build intelligent chatbots, sentiment analysis systems, document processing tools, and language translation services. Our solutions help businesses automate customer service and extract valuable insights from textual data.',
      features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Text Mining', 'Language Translation'],
      bgImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-purple-600'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition.',
      fullDescription: 'Transform visual data into actionable insights with our computer vision solutions. We develop systems for object detection, facial recognition, medical image analysis, and quality control in manufacturing. Our solutions help businesses automate visual inspection processes and enhance security systems.',
      features: ['Object Detection', 'Facial Recognition', 'Medical Imaging', 'Quality Control'],
      bgImage: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-indigo-600'
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven forecasting and trend analysis for business intelligence.',
      fullDescription: 'Leverage historical data to predict future trends and make informed business decisions. Our predictive analytics solutions help organizations forecast demand, identify risks, optimize operations, and improve customer retention. We use advanced statistical models and machine learning algorithms to deliver accurate predictions.',
      features: ['Demand Forecasting', 'Risk Assessment', 'Customer Analytics', 'Business Intelligence'],
      bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-cyan-600'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline business operations.',
      fullDescription: 'Automate complex business processes with AI-powered solutions. We develop intelligent automation systems that can handle document processing, data entry, decision making, and workflow optimization. Our solutions reduce manual effort, minimize errors, and improve operational efficiency across your organization.',
      features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'Decision Support'],
      bgImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-green-600'
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI consulting to guide your digital transformation journey.',
      fullDescription: 'Navigate your AI transformation with expert guidance. Our AI consulting services help organizations develop AI strategies, assess readiness, identify use cases, and implement AI solutions effectively. We provide end-to-end support from initial assessment to deployment and maintenance of AI systems.',
      features: ['AI Strategy Development', 'Use Case Identification', 'Technology Assessment', 'Implementation Support'],
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center&auto=format&q=80',
      color: 'bg-purple-700'
    }
  ];

  const visibleServices = services.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < services.length) {
      setCurrentIndex(currentIndex + 1);
      setExpandedCard(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setExpandedCard(null);
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-4xl mr-4 filter drop-shadow-lg">🤖</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight font-inter">
                AI & ML Services
              </h2>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-white leading-relaxed font-inter text-center">
                Harness the power of Artificial Intelligence and Machine Learning to transform your business operations, 
                automate processes, and gain valuable insights from your data.
              </p>
              <div className="flex justify-center mt-6 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-white/80 font-inter">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">95%</div>
                  <div className="text-sm text-white/80 font-inter">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm text-white/80 font-inter">AI Support</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Label */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center">
              <h4 className="text-lg font-semibold text-white/90 mr-4 font-inter">Our AI Solutions</h4>
              <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white/10 hover:border-white/50 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + 4 >= services.length}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentIndex + 4 >= services.length 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white/10 hover:border-white/50 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Services Cards */}
          <div className="flex gap-4 px-16 overflow-hidden">
            <AnimatePresence>
              {visibleServices.map((service, index) => {
                const isExpanded = expandedCard === index;
                return (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 shadow-lg hover:shadow-2xl ${
                      isExpanded ? 'flex-[2]' : 'flex-1'
                    }`}
                    style={{
                      minHeight: '450px'
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleExpand(index)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Background Image - Always visible */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${service.bgImage}')` }}
                    />
                    
                    {/* Glass Overlay */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-white/95 backdrop-blur-lg' 
                        : 'bg-black/40 backdrop-blur-sm hover:bg-black/30'
                    }`}></div>
                    
                    {/* Content */}
                    <div className={`relative z-10 h-full flex flex-col transition-all duration-700 ${
                      isExpanded 
                        ? 'bg-white/10 backdrop-blur-lg rounded-2xl m-2 p-6' 
                        : 'p-6'
                    }`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className={`font-bold transition-all duration-300 font-inter ${
                          isExpanded 
                            ? 'text-xl text-gray-900' 
                            : 'text-lg text-white'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <motion.button
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'border-gray-400 text-gray-600 hover:bg-gray-100'
                              : 'border-white/50 text-white hover:bg-white/20'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </motion.svg>
                        </motion.button>
                      </div>

                      {/* Description */}
                      <p className={`mb-6 transition-all duration-300 font-inter ${
                        isExpanded 
                          ? 'text-base leading-relaxed text-gray-700' 
                          : 'text-sm text-white/90'
                      }`}>
                        {isExpanded ? service.fullDescription : service.description}
                      </p>

                      {/* Features - Only show when expanded */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-auto"
                          >
                            <div className="grid grid-cols-2 gap-3 mb-6">
                              {service.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-center text-sm text-gray-600 font-inter"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                  {feature}
                                </motion.div>
                              ))}
                            </div>
                            
                            <motion.button
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 font-inter"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Learn More
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(services.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index * 4);
                setExpandedCard(null);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 4) === index
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};