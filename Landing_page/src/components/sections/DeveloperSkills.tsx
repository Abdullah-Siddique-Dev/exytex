import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Smartphone, Globe, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface DeveloperSkillsProps {
  tech: string;
  skills: string[];
}

export const DeveloperSkills: React.FC<DeveloperSkillsProps> = ({ tech, skills }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Core Technologies',
      skills: skills.slice(0, 3),
      gradient: 'from-blue-600 to-blue-700',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070'
    },
    {
      icon: Database,
      title: 'Advanced Skills',
      skills: skills.slice(3, 6),
      gradient: 'from-blue-700 to-blue-800',
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072'
    },
    {
      icon: Cloud,
      title: 'Tools & Frameworks',
      skills: [...skills, 'Git', 'Docker', 'CI/CD'].slice(0, 3),
      gradient: 'from-blue-600 to-blue-800',
      bgImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/95 to-indigo-50/95"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Technical Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our developers are proficient in the latest technologies and best practices
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>
          <div className="relative w-full max-w-6xl">
            {skillCategories.map((category, index) => {
              const position = (index - currentSlide + skillCategories.length) % skillCategories.length;
              const isCenter = position === 0;
              const isLeft = position === skillCategories.length - 1;
              const isRight = position === 1;
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={index}
                  animate={{
                    x: isCenter ? '0%' : isLeft ? '-80%' : isRight ? '80%' : '200%',
                    scale: isCenter ? 1 : 0.7,
                    opacity: isCenter ? 1 : isLeft || isRight ? 0.5 : 0,
                    z: isCenter ? 0 : -200,
                    rotateY: isCenter ? 0 : isLeft ? 45 : isRight ? -45 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative group">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 rounded-3xl overflow-hidden"
                      style={{
                        backgroundImage: `url('${category.bgImage}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`}></div>
                    </div>

                    {/* Glassmorphism Card */}
                    <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-12 shadow-2xl">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{category.title}</h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-white font-medium text-lg">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {skillCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-blue-600 w-12' : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
