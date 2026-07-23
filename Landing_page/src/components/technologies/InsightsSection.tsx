import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'Business Decision Makers – Dynamics 365',
    description: 'Discover how Dynamics 365 empowers business leaders to make data-driven decisions and streamline operations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    title: 'Orchestrating Brilliance in Application Development With Python',
    description: 'Explore the power of Python in building scalable, efficient, and innovative applications for modern businesses.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80',
  },
  {
    title: 'Mastering Workflow Automation With SharePoint to Achieve Unparalleled Efficiency',
    description: 'Learn how SharePoint transforms business processes through intelligent workflow automation and collaboration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
];

export const InsightsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % insights.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Insights
          </h2>
          <p className="text-gray-400 text-base">
            Dive deeper into our subject matter expertise for exploring new possibilities
          </p>
        </motion.div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {insights.map((insight, index) => (
                <div key={index} className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] px-2">
                  <motion.div
                    className="group h-full bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${insight.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {insight.description}
                      </p>
                      
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-cyan-600 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-cyan-600 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {insights.map((_, index) => (
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
