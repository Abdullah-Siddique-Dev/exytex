import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';

import { LaserButton } from '../ui/LaserButton';
import { scrollToContactForm } from '../../utils/scrollUtils';

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, inView: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
};

const stats = [
  { number: 100, label: 'Projects Completed', suffix: '+' },
  { number: 50, label: 'Happy Clients', suffix: '+' },
  { number: 6, label: 'Years Experience', suffix: '+' },
  { number: 95, label: 'Success Rate', suffix: '%' }
];



export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 left-32 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <AnimatedSection animation="slideUp">
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                About Exytex
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <div className="text-gray-900">
                  Crafting Digital
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Excellence
                </div>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are a dedicated team of developers and designers committed to creating 
                <span className="text-blue-600 font-semibold"> exceptional digital solutions</span>. 
                Our focus is transforming innovative ideas into powerful, results-driven applications.
              </p>
              
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Through modern technology and thoughtful design, we help businesses build 
                strong digital foundations that drive growth and success.
              </p>

              {/* Simple Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
                  Let's Talk
                </button>
                
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection animation="fadeIn" delay={0.3}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const ref = React.useRef(null);
                  const isInView = useInView(ref, { once: true });
                  const count = useCounter(stat.number, 2000, isInView);
                  
                  return (
                    <motion.div
                      key={stat.label}
                      ref={ref}
                      className="text-center"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring', bounce: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                        {count}{stat.suffix}
                      </div>
                      <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Info Tabs */}
          <div>
            <AnimatedSection animation="slideUp" delay={0.2}>
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-6 bg-white/60 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-gray-100">
                {[
                  { id: 'mission', label: 'Mission' },
                  { id: 'vision', label: 'Vision' },
                  { id: 'values', label: 'Values' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100"
              >
                {activeTab === 'mission' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To empower businesses with innovative digital solutions that drive growth, 
                      enhance user experiences, and create meaningful impact.
                    </p>
                    <div className="space-y-2">
                      {['Innovation-driven development', 'Client-focused approach', 'Quality-first delivery'].map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To be a leading digital agency that transforms businesses through 
                      innovative technology and exceptional design.
                    </p>
                    <div className="space-y-2">
                      {['Digital transformation', 'Industry leadership', 'Sustainable innovation'].map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Excellence, integrity, and innovation guide every project we undertake 
                      and every relationship we build.
                    </p>
                    <div className="space-y-2">
                      {['Excellence in execution', 'Transparent communication', 'Continuous learning'].map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Simple Timeline */}
        <AnimatedSection animation="fadeIn" delay={0.4} className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Our Journey</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Key milestones in our growth as a digital agency.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { year: '2019', title: 'Founded', desc: 'Started our journey' },
                { year: '2021', title: 'Team Growth', desc: 'Expanded our expertise' },
                { year: '2023', title: 'Innovation', desc: 'Advanced technologies' },
                { year: '2024', title: 'Global Reach', desc: 'Worldwide clients' }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.year}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Simple Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Let's work together to bring your vision to life with modern technology and clean design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={scrollToContactForm}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300"
              >
                Get Started
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
