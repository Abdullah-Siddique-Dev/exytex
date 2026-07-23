import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ITStaffingBenefitsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      title: 'Cost Efficiency',
      description: 'Reduce hiring costs and overhead expenses while accessing top-tier talent at competitive rates.',
      icon: '💰'
    },
    {
      title: 'Faster Time-to-Market',
      description: 'Accelerate project delivery with experienced professionals who can start contributing immediately.',
      icon: '🚀'
    },
    {
      title: 'Scalability',
      description: 'Scale your team up or down based on project demands without long-term commitments.',
      icon: '📈'
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce hiring risks with our guarantee and replacement policy for unsatisfactory placements.',
      icon: '🛡️'
    },
    {
      title: 'Access to Expertise',
      description: 'Tap into specialized skills and expertise that may not be available in your local market.',
      icon: '🎯'
    },
    {
      title: 'Focus on Core Business',
      description: 'Let us handle recruitment while you focus on your core business objectives and growth.',
      icon: '🎪'
    }
  ];

  const stats = [
    { number: '500+', label: 'IT Professionals', icon: '👥' },
    { number: '150+', label: 'Successful Placements', icon: '✅' },
    { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '48hrs', label: 'Average Response Time', icon: '⚡' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(benefits.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(benefits.length / 3)) % Math.ceil(benefits.length / 3));
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
            Benefits of Our IT Staffing Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto font-inter">
            Discover the advantages of partnering with us for your IT staffing needs
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(benefits.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    {benefits.slice(slideIndex * 3, (slideIndex + 1) * 3).map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">{benefit.icon}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 font-inter">
                            {benefit.title}
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed font-inter text-center">
                          {benefit.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all z-10"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all z-10"
            disabled={currentSlide === Math.ceil(benefits.length / 3) - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: Math.ceil(benefits.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 font-inter">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2 font-inter">{stat.number}</div>
                <div className="text-sm text-gray-600 font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
            Ready to Build Your Dream Team?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-inter">
            Let us help you find the perfect IT professionals for your projects. Contact us today to discuss your staffing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-inter"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
            <motion.a
              href="https://calendly.com/saadinsides"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 font-inter inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};