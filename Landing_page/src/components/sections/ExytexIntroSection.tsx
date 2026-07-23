import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { EnhancedButton } from '../ui/EnhancedButton';
import { ExploreMoreButton } from '../ui/ExploreMoreButton';

const features = [
  {
    icon: Shield,
    title: "PSEB Registered",
    description: "Officially registered software house in Pakistan",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Best web applications and software development",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Well-coordinated team working in single office space",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Target,
    title: "Complete Solutions",
    description: "End-to-end web development process",
    color: "from-blue-600 to-purple-600"
  }
];

const services = [
  "Professional Web Development",
  "Graphic Designing & Corporate Identity", 
  "Digital Marketing & SEO",
  "Mobile Applications (iOS & Android)",
  "API Development",
  "E-commerce Solutions"
];

export const ExytexIntroSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #6B7280 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-lg border border-blue-200/50"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)" }}
            transition={{ duration: 0.2 }}
          >
            <Award className="w-5 h-5 mr-2 text-blue-600" />
            Top Software House in Pakistan
          </motion.div>
          
          <motion.div
            className="mb-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold leading-tight text-gray-900"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              About Exytex Technologies
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading IT Software Company in Pakistan providing comprehensive digital solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-6">
          {/* Left Side - Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700">
              <motion.img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&crop=center" 
                alt="Exytex Technologies Team"
                className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-purple-900/20 group-hover:from-blue-900/40 transition-all duration-700"></div>
              
              {/* Center Overlay Content - Simple Text Only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="text-3xl mb-3 drop-shadow-lg">💻</div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                      Our Expert Team
                    </h3>
                    <p className="text-base font-semibold text-white drop-shadow-lg" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                      Building Digital Excellence
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 group-hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center shadow-md"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Shield className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>PSEB Registered</p>
                    <p className="text-xs text-gray-600 font-normal" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Official Software House</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Active Since 2020</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.h3 
                className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Software Development
                </span>{' '}
                <span className="text-gray-900">Services</span>
              </motion.h3>
              
              <motion.p 
                className="text-sm text-gray-600 mb-4 leading-relaxed font-normal"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. Our mission is to transform innovative ideas into powerful, scalable solutions that drive business growth.
              </motion.p>
            </div>

            {/* Enhanced Services List */}
            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <h4 className="text-base font-bold text-gray-900 mb-3" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                Our Core Services
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-2 p-1 rounded-lg hover:bg-white/70 transition-all duration-200 group cursor-pointer"
                    whileHover={{ x: 3 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-200"
                      whileHover={{ scale: 1.3 }}
                    />
                    <span className="text-gray-700 font-normal text-sm group-hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <EnhancedButton
                scrollTo="about"
                size="md"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="shadow-lg hover:shadow-blue-500/25 px-6 py-2 text-sm font-medium"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Learn More About Us
              </EnhancedButton>
            </motion.div>
          </motion.div>
        </div>




      </div>
    </section>
  );
};
