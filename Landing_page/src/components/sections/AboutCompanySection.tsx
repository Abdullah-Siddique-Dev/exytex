import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

export const AboutCompanySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                EXYTEX is a premier technology solutions provider specializing in custom software development, mobile applications, and digital transformation services. Founded with a vision to bridge the gap between innovative technology and business success.
              </p>
              <p>
                Our team of expert developers, designers, and consultants work collaboratively to deliver cutting-edge solutions that drive growth, efficiency, and competitive advantage for businesses across various industries.
              </p>
              <p>
                We pride ourselves on our commitment to quality, innovation, and customer satisfaction. Every project we undertake is approached with meticulous attention to detail and a deep understanding of our clients' unique requirements.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format&q=80"
              alt="Our Team"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To empower businesses with innovative technology solutions that drive digital transformation, enhance operational efficiency, and create sustainable competitive advantages in the global marketplace.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To be the leading global technology partner, recognized for delivering exceptional digital solutions that transform industries and create lasting value for our clients and communities.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', description: 'Embracing cutting-edge technologies', color: 'blue' },
              { title: 'Quality', description: 'Delivering excellence in every project', color: 'green' },
              { title: 'Integrity', description: 'Building trust through transparency', color: 'purple' },
              { title: 'Collaboration', description: 'Working together for success', color: 'orange' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 bg-gradient-to-br from-${value.color}-50 to-white rounded-xl border border-${value.color}-100 hover:shadow-lg transition-all`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-${value.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Award className={`w-6 h-6 text-${value.color}-600`} />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-xs text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};