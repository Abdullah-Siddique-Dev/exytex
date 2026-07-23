import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart,
  Server,
  Shield,
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Zap,
  ArrowRight
} from 'lucide-react';

const WebDevAfterHeroSection2: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.48, ease: [0.22, 0.9, 0.27, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.48, ease: [0.22, 0.9, 0.27, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.48, ease: [0.22, 0.9, 0.27, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // E-commerce features
  const ecommerceFeatures = [
    {
      icon: ShoppingCart,
      title: "Advanced experience in WooCommerce",
      description: "Expert WooCommerce development and customization"
    },
    {
      icon: Globe,
      title: "Single or multi-vendor e-commerce development",
      description: "Flexible e-commerce solutions for any business model"
    },
    {
      icon: Zap,
      title: "Integrations with third-party software providers",
      description: "Seamless integration with payment gateways and tools"
    }
  ];

  // QA checklist items
  const qaItems = [
    { icon: Code, label: "coding" },
    { icon: Shield, label: "accessibility" },
    { icon: Zap, label: "speed load" },
    { icon: CheckCircle, label: "functionality" },
    { icon: Smartphone, label: "adaptation to mobile devices" },
    { icon: Shield, label: "security" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Development of Online Stores - 3D Carousel */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-purple-50/30 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-6 font-['Poppins']">
              E-Commerce Development
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-700 max-w-4xl mx-auto text-lg font-['Inter'] leading-relaxed mb-4">
              Developing an e-commerce website is not like driving down a straight arrow road. It requires experience, 
              careful decision-making, thoughtful design, and plenty of technology, too. Exytex Web Development has all 
              this and much more.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* 3D Rotating Carousel */}
          <div className="relative h-96 flex items-center justify-center" style={{ perspective: '1500px' }}>
            <div className="relative w-full max-w-5xl">
              {[
                {
                  title: "WooCommerce Expertise",
                  description: "Advanced experience in WooCommerce development and customization for powerful online stores",
                  icon: ShoppingCart,
                  gradient: "from-purple-500 to-purple-600",
                  details: "Custom themes, plugins, payment gateways"
                },
                {
                  title: "Multi-Vendor Platforms", 
                  description: "Single or multi-vendor e-commerce development for any business model and scale",
                  icon: Globe,
                  gradient: "from-blue-500 to-blue-600",
                  details: "Marketplace solutions, vendor management"
                },
                {
                  title: "Third-Party Integrations",
                  description: "Seamless integration with payment gateways, shipping providers, and business tools",
                  icon: Zap,
                  gradient: "from-purple-600 to-blue-500",
                  details: "APIs, webhooks, automated workflows"
                }
              ].map((feature, index) => {
                const totalCards = 3;
                const angle = (index * 120) - 60; // Spread across 120 degrees each
                const radius = 220;
                const x = Math.sin((angle * Math.PI) / 180) * radius;
                const z = Math.cos((angle * Math.PI) / 180) * radius;
                const rotateY = -angle;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, rotateY: rotateY + 180 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      rotateY: rotateY,
                      transition: { delay: index * 0.3, duration: 1, ease: "easeOut" }
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      z: z + 80,
                      rotateY: rotateY - 5,
                      transition: { duration: 0.4 }
                    }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                    className="group w-72 h-80"
                  >
                    <div className="relative w-full h-full backdrop-blur-lg bg-white/85 border border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden">
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl`}>
                          {/* E-commerce themed patterns */}
                          <div className="absolute top-4 right-4 w-10 h-10 border-2 border-white/40 rounded-full">
                            <div className="absolute inset-2 border border-white/30 rounded-full"></div>
                          </div>
                          <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-lg">
                            <div className="absolute inset-1 bg-white/20 rounded"></div>
                          </div>
                          <div className="absolute top-1/3 left-4 w-6 h-6 bg-white/25 rounded-full"></div>
                          <div className="absolute bottom-1/3 right-6 w-4 h-4 bg-white/35 rounded"></div>
                          {/* Shopping cart pattern */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
                            <ShoppingCart className="w-24 h-24 text-white/40" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl group-hover:shadow-2xl`}>
                          <feature.icon className="w-10 h-10 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 mb-4 font-['Poppins'] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 group-hover:text-gray-800 font-['Inter'] leading-relaxed mb-4 transition-colors duration-300">
                          {feature.description}
                        </p>
                        
                        <div className="text-xs text-gray-500 group-hover:text-gray-600 font-['Inter'] italic transition-colors duration-300">
                          {feature.details}
                        </div>
                        
                        <div className={`mt-6 w-16 h-1.5 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto group-hover:w-24 transition-all duration-500`}></div>
                      </div>
                      
                      {/* Premium Glossy Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent rounded-3xl pointer-events-none"></div>
                      
                      {/* Card Number Badge */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                        <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Center Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Stack - 3D Style */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-white mb-6 font-['Poppins']">
              Advanced Technology Stack
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-300 max-w-3xl mx-auto text-lg font-['Inter'] leading-relaxed">
              Cutting-edge technologies and frameworks powering modern web applications with exceptional performance and scalability
            </motion.p>
          </motion.div>

          {/* 3D Technology Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Code, title: "Frontend", tech: "React, Vue, Angular", color: "from-blue-500 to-cyan-500" },
              { icon: Server, title: "Backend", tech: "Node.js, Python, PHP", color: "from-green-500 to-emerald-500" },
              { icon: Globe, title: "Cloud", tech: "AWS, Azure, GCP", color: "from-purple-500 to-violet-500" },
              { icon: Shield, title: "Security", tech: "SSL, OAuth, JWT", color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  rotateY: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
                className="group relative"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu relative overflow-hidden">
                  {/* 3D Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-spin"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Poppins'] group-hover:text-gray-100 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white font-['Inter'] transition-colors duration-300">
                      {item.tech}
                    </p>
                    <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mx-auto group-hover:w-20 transition-all duration-500`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* Testing (QA) - Full-width Glass Banner */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900 text-center mb-8 font-['Poppins']">
              TESTING
            </motion.h2>

            {/* QA Checklist Banner */}
            <motion.div 
              variants={fadeInUp}
              className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-lg mb-8"
            >
              <p className="text-gray-700 leading-relaxed mb-6 text-center font-['Inter']">
                While we carry out the development and web programming, we will be in charge of reviewing all the key points, 
                through strict quality control that allows us to guarantee the perfect functioning of the web page before launching it:
              </p>

              {/* QA Items Row */}
              <div className="flex flex-wrap justify-center gap-6">
                {qaItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-2 backdrop-blur-sm bg-white/40 border border-white/30 rounded-xl px-4 py-2"
                  >
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Final Guarantee Text */}
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We are one of the best software house in Pakistan, and we have a complete team of professional designers 
                and developers. We guarantee that your website will only come to light when it is ready.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-100/50 to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div 
              variants={fadeInUp}
              className="backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Poppins']">
                Ready to Build Something Exceptional?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed font-['Inter']">
                Contact Exytex Technologies today and start your next web journey.
              </p>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Plan My Web Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-xs text-gray-500 mt-6 font-medium">
                Registered with PSEB (Pakistan Software Export Board) | Serving globally from Pakistan, UK & UAE
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { WebDevAfterHeroSection2 };