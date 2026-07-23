import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Apple, 
  Code, 
  Zap, 
  Shield, 
  Users,
  Star,
  Download,
  Palette,
  Database
} from 'lucide-react';

const IOSAfterHeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const developmentSteps = [
    { icon: Users, label: "Discovery & Planning", color: "from-blue-500 to-blue-600" },
    { icon: Palette, label: "UI/UX Design", color: "from-purple-500 to-purple-600" },
    { icon: Code, label: "iOS Development", color: "from-blue-600 to-purple-500" },
    { icon: Shield, label: "Testing & QA", color: "from-purple-600 to-blue-500" },
    { icon: Download, label: "App Store Launch", color: "from-blue-500 to-purple-600" },
    { icon: Zap, label: "Support & Updates", color: "from-purple-500 to-blue-600" }
  ];

  const services = [
    { icon: Apple, label: "Native iOS Apps" },
    { icon: Code, label: "Swift Development" },
    { icon: Database, label: "Core Data" },
    { icon: Shield, label: "App Security" },
    { icon: Star, label: "App Store Optimization" },
    { icon: Zap, label: "Performance Optimization" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-block"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Poppins'] leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500 cursor-default">
                  iOS APP DEVELOPMENT SERVICES
                </h2>
              </motion.div>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              
              <p className="text-gray-700 font-['Inter'] text-xl leading-relaxed">
                We specialize in creating exceptional iOS applications that deliver outstanding user experiences. 
                Our expert team develops native iOS apps using the latest technologies and Apple's best practices.
              </p>
              
              <p className="text-gray-700 font-['Inter'] text-xl leading-relaxed">
                From concept to App Store launch, we handle every aspect of iOS development to ensure your app stands out in the competitive mobile market.
              </p>

              {/* Development Steps */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {developmentSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: index * 0.1, duration: 0.5 }
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group flex items-center space-x-3 bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-['Poppins'] font-medium text-sm">
                      {step.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 font-['Inter'] text-xl leading-relaxed mt-6">
                We create high-performance iOS applications with intuitive interfaces, robust functionality, and seamless integration with Apple's ecosystem. 
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exytex delivers iOS apps that users love and businesses trust.</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column - iOS Illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main iOS Device Mockup */}
              <div className="relative w-full max-w-lg h-96 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 backdrop-blur-lg border border-white/50 rounded-3xl shadow-2xl overflow-hidden">
                {/* iPhone Frame */}
                <div className="absolute inset-4 bg-black rounded-3xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-white text-xs mb-4">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                        <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Interface */}
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-2 bg-white/40 rounded w-3/4 mb-1"></div>
                            <div className="h-1 bg-white/30 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="h-16 bg-white/10 rounded-xl"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="w-6 h-6 bg-white/40 rounded-lg mx-auto mb-2"></div>
                          <div className="h-1 bg-white/30 rounded w-2/3 mx-auto"></div>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="w-6 h-6 bg-white/40 rounded-lg mx-auto mb-2"></div>
                          <div className="h-1 bg-white/30 rounded w-2/3 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
              </div>

              {/* Central Content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Apple className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Service Icons Grid */}
              <div className="absolute -bottom-4 -left-4 grid grid-cols-3 gap-3">
                {services.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: 0.5 + index * 0.1, duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
                  >
                    <service.icon className="w-6 h-6 text-gray-600" />
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Apple className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-medium text-gray-700">iOS Native</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-purple-500" />
                  <span className="text-xs font-medium text-gray-700">App Store Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { IOSAfterHeroSection };