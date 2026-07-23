import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Cloud, 
  Shield, 
  Smartphone, 
  CreditCard, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const AutomotiveSuccessStoriesSection: React.FC = () => {
  const successStories = [
    {
      icon: BarChart3,
      title: 'Business Planning & Reporting System',
      client: 'Leading Global Automotive Manufacturer',
      description: 'Customized development of a fully web-based business planning and composite reporting system for leading automotive giant in the areas of Inter-Firm Comparison (IFC)/composite services, composite data interrogation, budgeting, measuring and monitoring satisfaction levels across a spectrum of touch-points.',
      results: [
        'Improved decision-making processes',
        'Enhanced performance monitoring',
        'Streamlined reporting workflows'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cloud,
      title: 'Automated Tyre Pressure Monitoring',
      client: 'Automotive Technology Provider',
      description: 'Cloud-based Product Development of an automated solution that measures and records the tyre pressures of any moving vehicle, and monitors the installed road side systems for timely maintenance and analysis of captured data for tyre usage condition during tyre life cycle.',
      results: [
        'Real-time vehicle monitoring',
        'Predictive maintenance capabilities',
        'Enhanced safety standards'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Warranty Management System',
      client: 'Automobile Dealers & Fleet Management',
      description: 'Customized Development of a Warranty Management System – a solution for automobile dealers and fleet management companies to streamline warranty processes and improve customer satisfaction.',
      results: [
        'Reduced processing time by 60%',
        'Improved customer satisfaction',
        'Automated claim processing'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Car Service Management Platform',
      client: 'Automotive Dealership Network',
      description: 'Product development services for developing a comprehensive cloud-based automated solution for Car Service management at Dealerships, which can also track the progress of vehicle servicing using mobile application.',
      results: [
        'Enhanced service transparency',
        'Mobile tracking capabilities',
        'Improved operational efficiency'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CreditCard,
      title: 'Dealer Credit Check System',
      client: 'Global Automotive Manufacturer',
      description: 'Development of a fully web-based comprehensive dealer credit check system for global automotive manufacturer to assess and manage dealer financial capabilities.',
      results: [
        'Automated credit assessments',
        'Risk mitigation strategies',
        'Faster approval processes'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Mobile BI Application',
      client: 'Automotive Retail Giant',
      description: 'Mobile BI application development for automotive retail giant to enable car manufacturers and dealerships to understand their business process and functionalities, and find answers to complex questions, identify areas of opportunity or concern, and make confident decisions.',
      results: [
        'Data-driven decision making',
        'Real-time business insights',
        'Enhanced operational visibility'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A few of our contributions were for leading global automotive manufacturers and OEMs. 
            Their dealers, fleet management organizations, and automotive ISVs engaged us for various 
            technology solutions for their distinct needs.
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <story.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-blue-300 font-medium text-sm">
                    {story.client}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {story.description}
              </p>

              {/* Results */}
              <div className="space-y-3 mb-6">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                  Key Results:
                </h4>
                {story.results.map((result, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-gray-400 text-sm">Learn more about this project</span>
                <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the ranks of leading automotive companies who have transformed their operations 
              with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};