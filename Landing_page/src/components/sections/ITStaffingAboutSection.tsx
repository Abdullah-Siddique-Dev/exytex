import React from 'react';
import { motion } from 'framer-motion';

export const ITStaffingAboutSection: React.FC = () => {
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
            Why Choose Our IT Staffing Services?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                Global Talent Network
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6 font-inter">
                Access to a vast network of pre-vetted IT professionals from around the world. Our talent pool includes developers, engineers, designers, and specialists with proven track records in delivering high-quality solutions.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-inter">
                We maintain relationships with top-tier professionals across various time zones, ensuring we can meet your staffing needs regardless of project requirements or deadlines.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                Flexible Engagement Models
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6 font-inter">
                Whether you need short-term project support, long-term team augmentation, or dedicated development teams, we offer flexible engagement models to suit your business needs and budget.
              </p>
              <p className="text-base text-gray-600 leading-relaxed font-inter">
                Our scalable solutions allow you to quickly ramp up or down based on project demands, ensuring optimal resource utilization and cost efficiency.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-inter text-center">
              Our Commitment to Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-inter">Quality Assurance</h4>
                <p className="text-sm text-gray-600 font-inter">Rigorous vetting process ensures only top-quality professionals join your team</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-inter">Fast Deployment</h4>
                <p className="text-sm text-gray-600 font-inter">Quick matching and onboarding process to get your projects started immediately</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-inter">Ongoing Support</h4>
                <p className="text-sm text-gray-600 font-inter">Continuous support and management throughout the engagement period</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};