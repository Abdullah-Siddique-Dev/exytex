import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Search, FileText, Handshake } from 'lucide-react';

export const ITStaffingProcessSection: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'We analyze your project requirements, technical needs, and team dynamics to understand the perfect candidate profile.',
      icon: FileText,
      duration: '1-2 days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Talent Sourcing',
      description: 'Our recruitment team sources candidates from our global network and conducts initial screening based on your criteria.',
      icon: Search,
      duration: '3-5 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Technical Assessment',
      description: 'Candidates undergo comprehensive technical evaluations, coding tests, and skill assessments relevant to your project.',
      icon: CheckCircle,
      duration: '2-3 days',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'Client Interview',
      description: 'Shortlisted candidates are presented to you for final interviews and cultural fit assessment.',
      icon: Users,
      duration: '1-2 days',
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '05',
      title: 'Onboarding',
      description: 'Selected candidates are onboarded with proper documentation, access setup, and project orientation.',
      icon: Handshake,
      duration: '1-3 days',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: 'Continuous performance monitoring, feedback collection, and support throughout the engagement period.',
      icon: Clock,
      duration: 'Ongoing',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Streamlined Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our IT Staffing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to IT talent acquisition that ensures you get the right professionals for your projects in record time
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:-translate-y-2">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-gray-400 mb-1">{step.step}</div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500 font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Step {step.step}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};