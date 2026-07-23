import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, LayoutDashboard, Users, Briefcase, BarChart3 } from 'lucide-react';

export const SolutionCarouselSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const solutions = [
    {
      icon: LayoutDashboard,
      title: 'Intuitive Dashboards',
      subtitle: '360-degree view of operations',
      description: 'Dynamics 365 dashboards allowed the stakeholders to get a holistic view of their operations across all business units-sales, asset management, invoicing, and more.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      gradientColor: 'from-blue-900/30',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80'
    },
    {
      icon: Users,
      title: 'CRM for Donor Tracking',
      subtitle: 'Complete view of transactions',
      description: 'Dynamics CRM enabled the client to have a complete view of donor transactions and commitments and generate reports to understand where the funds came from.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      gradientColor: 'from-green-900/30',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format&q=80'
    },
    {
      icon: Briefcase,
      title: 'Vendor Management',
      subtitle: 'Streamline collaboration',
      description: 'Vendor management tools were implemented to help the non-profit collaborate effectively with suppliers and automate onboarding, payments, and contract renewal.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      gradientColor: 'from-purple-900/30',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&auto=format&q=80'
    },
    {
      icon: BarChart3,
      title: 'Power BI Integration',
      subtitle: 'Insightful reports',
      description: 'Integration with Power BI enabled the client to create business-critical reports related to monthly sales and grants collection and gain data-driven insights.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      gradientColor: 'from-orange-900/30',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.2, y: 150 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            stiffness: 60,
            damping: 12,
            bounce: 0.5
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            The Solution
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            After a thorough examination of the client's business needs, Damco implemented an all-in-one Microsoft Dynamics solution comprising ERP, CRM, and Power BI.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute w-full"
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  {/* Left Content */}
                  <div>
                    <div className={`w-14 h-14 ${solutions[currentSlide].bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      {React.createElement(solutions[currentSlide].icon, {
                        className: `w-7 h-7 ${solutions[currentSlide].iconColor}`
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {solutions[currentSlide].title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-4">
                      {solutions[currentSlide].subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {solutions[currentSlide].description}
                    </p>
                  </div>

                  {/* Right Image */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={solutions[currentSlide].image}
                      alt={solutions[currentSlide].title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${solutions[currentSlide].gradientColor} to-transparent`}></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
