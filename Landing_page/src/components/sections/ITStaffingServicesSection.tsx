import React from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Database, Palette, ClipboardList, Search, Lock, Cloud } from 'lucide-react';

export const ITStaffingServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Software Developers',
      description: 'Skilled full-stack, frontend, and backend developers proficient in modern technologies and frameworks.',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps Engineers',
      description: 'Experienced professionals in CI/CD, cloud infrastructure, and automation technologies.',
      icon: Settings,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Scientists',
      description: 'Expert data analysts and machine learning specialists for your data-driven projects.',
      icon: Database,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'UI/UX Designers',
      description: 'Creative designers who craft intuitive and engaging user experiences for digital products.',
      icon: Palette,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Project Managers',
      description: 'Certified project managers with expertise in Agile, Scrum, and traditional methodologies.',
      icon: ClipboardList,
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'QA Engineers',
      description: 'Quality assurance professionals specializing in manual and automated testing processes.',
      icon: Search,
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Experts',
      description: 'Security specialists focused on protecting your digital assets and infrastructure.',
      icon: Lock,
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Cloud Architects',
      description: 'Cloud solution architects experienced in AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
            IT Talent Categories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
            Access to a diverse pool of IT professionals across various specializations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};