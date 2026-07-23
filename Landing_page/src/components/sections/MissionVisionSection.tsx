import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Rocket } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.5, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.7, 
            type: "spring", 
            stiffness: 150,
            damping: 25,
            bounce: 0.3
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Mission & Vision
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and innovation drives everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Mission */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
              </div>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                To provide innovative, reliable, and user-centric digital solutions that empower businesses to thrive in a competitive digital world. We pursue excellence through personalized consultation, practical solutions, and high-quality execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <Lightbulb className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-xs font-semibold text-gray-900">Innovation</div>
                  <div className="text-xs text-gray-600">Cutting-edge solutions</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <Target className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-xs font-semibold text-gray-900">Excellence</div>
                  <div className="text-xs text-gray-600">Quality execution</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
              </div>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                To be a leading global technology partner that helps businesses innovate, automate, and grow with cutting-edge digital experiences and software solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <Rocket className="w-5 h-5 text-purple-600 mb-2" />
                  <div className="text-xs font-semibold text-gray-900">Growth</div>
                  <div className="text-xs text-gray-600">Business expansion</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <Eye className="w-5 h-5 text-purple-600 mb-2" />
                  <div className="text-xs font-semibold text-gray-900">Leadership</div>
                  <div className="text-xs text-gray-600">Global technology partner</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};