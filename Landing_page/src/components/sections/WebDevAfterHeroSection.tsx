import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Compass, 
  Lightbulb, 
  PenTool, 
  Code, 
  CheckCircle, 
  RotateCcw,
  ShoppingCart,
  Server,
  Shield,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  Globe
} from 'lucide-react';

const WebDevAfterHeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Scroll-based animations
  const cardScale = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
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



  // Slider content for Software Application Developer
  const sliderContent = [
    {
      title: "Best Software Developers",
      content: "Software services demand the best software developers. Being a best company or team, every firm needs the best software developers. Software application developers compose applications, such as games or other custom software for the clients."
    },
    {
      title: "Customer Satisfaction",
      content: "Dealing with the desires of customers, Exytex software application developers always provide the best software services. Customers get satisfy with the working and results of Exytex software application developers."
    },
    {
      title: "Professional Support",
      content: "Clients gave the satisfactory feedback on the proficiency of their performance. Also, Exytex developers assist the customers in any sort of subject, if someone gets engage in any problem of application development."
    },
    {
      title: "Creative UI/UX Design",
      content: "Our creative team of UI UX designers creates a web application that flaunts online. We develop simple, amazing, and feature-rich solutions that enhance the user experience on the website."
    }
  ];

  // Auto-rotate slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [sliderContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderContent.length) % sliderContent.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      {/* Intro Glass Card */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Content */}
            <div className="group relative backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 mb-6 font-['Poppins'] transition-colors duration-300">
                  WE ARE YOUR WEB DEVELOPMENT COMPANY
                </h2>
                <p className="text-gray-700 group-hover:text-gray-800 mb-4 leading-relaxed font-['Inter'] transition-colors duration-300">
                  Exytex is a full-time web development company. We are specialized in web development, custom programming, 
                  and template-based web pages. We really love and feel passion for what we do. We always seek the benefit 
                  and satisfaction of our clients, through personalized advice and quality in all our developments.
                </p>
                <p className="text-gray-700 group-hover:text-gray-800 leading-relaxed font-['Inter'] transition-colors duration-300">
                  We are continuously researching and testing new technologies with the aim of improving the quality of our 
                  developments and services and that they add value to our customers. We develop quality websites always 
                  thinking of two potential profiles: people and search engines. We carry out a complete analysis of your 
                  sector that allows us to know what type of website you need, and from there we define the information 
                  architecture, content strategy, and friendly URLs.
                </p>
                
                {/* Decorative element */}
                <div className="mt-6 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:w-32 transition-all duration-500"></div>
              </div>
            </div>

            {/* Right Column - Professional Illustration */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-full max-w-md h-80 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 rounded-2xl shadow-xl border border-white/50 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-400 rounded rotate-45"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-4 h-4 bg-blue-400 rounded"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-purple-400 rounded-full"></div>
                  </div>
                  
                  {/* Main content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-['Poppins'] text-center">
                      Expert Development Team
                    </h3>
                    <p className="text-gray-600 font-['Inter'] text-center text-sm leading-relaxed">
                      Professional developers crafting exceptional web solutions with modern technologies
                    </p>
                    
                    {/* Tech stack indicators */}
                    <div className="flex space-x-2 mt-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-orange-600">JS</span>
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">TS</span>
                      </div>
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">API</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Divider */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="h-16 bg-gradient-to-r from-blue-500/5 via-teal-500/10 to-blue-500/5 rounded-2xl flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <Globe className="w-6 h-6 text-blue-600" />
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Process - 3D Carousel */}
      <section className="py-16 px-6" style={{ perspective: '1200px' }}>
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4 font-['Poppins']">
              Our Web Development Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-4xl mx-auto font-['Inter'] text-lg leading-relaxed">
              From concept to launch, we follow a proven methodology to deliver exceptional web experiences that drive results and exceed expectations.
            </motion.p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* 3D Carousel - Web Development Steps */}
          <div className="relative h-96 flex items-center justify-center mb-12">
            <div className="relative w-full max-w-4xl">
              {[
                { icon: Lightbulb, label: "Discovery & Planning", desc: "Understanding your vision", color: "from-blue-500 to-blue-600" },
                { icon: PenTool, label: "Design & Prototyping", desc: "Creating stunning interfaces", color: "from-purple-500 to-purple-600" },
                { icon: Code, label: "Development & Coding", desc: "Building robust solutions", color: "from-blue-600 to-purple-500" },
                { icon: CheckCircle, label: "Testing & QA", desc: "Ensuring perfection", color: "from-purple-600 to-blue-500" },
                { icon: Globe, label: "Launch & Deploy", desc: "Going live successfully", color: "from-blue-500 to-purple-600" },
                { icon: RotateCcw, label: "Support & Maintenance", desc: "Ongoing optimization", color: "from-purple-500 to-blue-600" }
              ].map((step, index) => {
                const totalCards = 6;
                const angle = (index * 360) / totalCards;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const z = Math.sin((angle * Math.PI) / 180) * radius;
                const rotateY = -angle;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: index * 0.1, duration: 0.6 }
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      z: z + 50,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                    className="group w-48 h-64"
                  >
                    <div className="relative w-full h-full backdrop-blur-md bg-white/80 border border-white/40 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                      {/* 3D Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      {/* Floating geometric shapes */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/50 rounded-full animate-spin"></div>
                        <div className="absolute bottom-6 left-4 w-6 h-6 bg-white/30 rounded rotate-45"></div>
                        <div className="absolute top-1/2 left-2 w-4 h-4 bg-white/40 rounded-full"></div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-3 font-['Poppins'] transition-colors duration-300">
                          {step.label}
                        </h3>
                        
                        <p className="text-sm text-gray-600 group-hover:text-gray-800 font-['Inter'] leading-relaxed transition-colors duration-300">
                          {step.desc}
                        </p>
                        
                        <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${step.color} rounded-full group-hover:w-16 transition-all duration-500`}></div>
                        
                        {/* Card number */}
                        <div className="absolute top-3 left-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Glossy effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Center glow effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
          >
            <p className="text-gray-700 max-w-4xl mx-auto font-['Inter'] text-lg leading-relaxed">
              Our comprehensive web development approach ensures every project delivers exceptional user experiences, 
              optimal performance, and measurable business results. From responsive design to advanced functionality, 
              we craft websites that stand out in today's digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Slider - Software Application Developer */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-100/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Poppins']">
              Software Application Developer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Inter'] leading-relaxed">
              Expert developers creating innovative applications with cutting-edge technology and user-centric design
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Slider Container */}
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  className="absolute inset-0"
                >
                  <div className="group h-full backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Background Image - appears on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-2xl">
                        <div className="absolute inset-4 border-2 border-white/30 rounded-xl"></div>
                        <div className="absolute top-8 left-8 w-6 h-6 bg-white/40 rounded-full"></div>
                        <div className="absolute top-12 right-12 w-4 h-4 bg-white/30 rounded"></div>
                        <div className="absolute bottom-8 left-12 w-8 h-8 border-2 border-white/40 rounded-full"></div>
                        <div className="absolute bottom-12 right-8 w-3 h-3 bg-white/50 rounded-full"></div>
                        {/* Code pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="space-y-2 opacity-30">
                            <div className="flex space-x-2">
                              <div className="w-12 h-1 bg-white/60 rounded"></div>
                              <div className="w-8 h-1 bg-white/40 rounded"></div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="w-6 h-1 bg-white/50 rounded"></div>
                              <div className="w-16 h-1 bg-white/60 rounded"></div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="w-10 h-1 bg-white/40 rounded"></div>
                              <div className="w-12 h-1 bg-white/50 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-blue-500/15 group-hover:via-purple-500/10 group-hover:to-teal-500/15 transition-all duration-700 rounded-2xl"></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 font-['Poppins'] transition-colors duration-500">
                        {sliderContent[currentSlide].title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-gray-100 leading-relaxed font-['Inter'] transition-colors duration-500 text-lg">
                        {sliderContent[currentSlide].content}
                      </p>
                      <div className="mt-8 w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-white group-hover:to-gray-200 rounded-full group-hover:w-32 transition-all duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 backdrop-blur-sm bg-white/30 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 backdrop-blur-sm bg-white/30 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {sliderContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    index === currentSlide 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your business website, Present on the internet 24/7 */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['Inter']">
                Your business website, Present on the internet 24/7.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The web application may sound considerable, but exytex provides cost-effective website development 
                  solutions that improve the ROI of the business in a real sense. Our company also offers you a turnkey 
                  SaaS website or software offer.
                </p>
                <p>
                  Thus, Exytex will go through all the major design stages of the web project, starting with our designers 
                  and Product owner through Web Design - UX/UI, then through web development. Once the site is designed, 
                  we do the tests to detect and correct bugs on your websites.
                </p>
                <p>
                  We will also adapt them to all devices (desktop, mobiles, and tablets) in order to make them responsive 
                  or mobile web. We'll make sure they automatically adapt to the size of the screen they're displayed on. 
                  Our web development company accompanies many corporate profiles large accounts, ETIs, SMEs, and Startups 
                  from various sectors of activity. Our team is very experienced and well up to date on the latest trends 
                  in web development services. We achieve customer satisfaction by helping them achieve business objectives.
                </p>
              </div>
            </motion.div>

            {/* Right Device Mockup */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="backdrop-blur-sm bg-white/50 border border-white/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-end space-x-6 justify-center">
                      {/* Desktop mockup */}
                      <div className="relative group/desktop">
                        <div className="w-36 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center group-hover/desktop:scale-105 transition-transform duration-300 relative overflow-hidden">
                          {/* Screen content simulation */}
                          <div className="absolute inset-2 bg-white/20 rounded-lg">
                            <div className="p-2 space-y-1">
                              <div className="h-1 bg-white/40 rounded w-3/4"></div>
                              <div className="h-1 bg-white/30 rounded w-1/2"></div>
                              <div className="h-1 bg-white/30 rounded w-2/3"></div>
                            </div>
                          </div>
                          <Monitor className="w-8 h-8 text-white/80 absolute bottom-2 right-2" />
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-2 font-['Inter'] font-medium">Desktop Experience</p>
                      </div>
                      
                      {/* Mobile mockup */}
                      <div className="relative group/mobile">
                        <div className="w-16 h-28 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg flex flex-col items-center justify-center group-hover/mobile:scale-105 transition-transform duration-300 relative overflow-hidden">
                          {/* Screen content simulation */}
                          <div className="absolute inset-1 bg-white/20 rounded-xl">
                            <div className="p-1 space-y-1 mt-2">
                              <div className="h-0.5 bg-white/40 rounded w-3/4 mx-auto"></div>
                              <div className="h-0.5 bg-white/30 rounded w-1/2 mx-auto"></div>
                              <div className="h-0.5 bg-white/30 rounded w-2/3 mx-auto"></div>
                            </div>
                          </div>
                          <Smartphone className="w-4 h-4 text-white/80 absolute bottom-1" />
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-2 font-['Inter'] font-medium">Mobile Optimized</p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <h4 className="text-lg font-bold text-gray-800 font-['Poppins'] mb-2">Responsive Design</h4>
                      <p className="text-sm text-gray-600 font-['Inter']">Seamless experience across all devices</p>
                      <div className="mt-3 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Custom Web Development - 3D Slider */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-6 font-['Poppins']">
              Custom Web Development
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-3xl mx-auto text-lg font-['Inter'] leading-relaxed mb-4">
              In business, you try to solve problems. And each problem requires a specific solution. A cookie-cutter 
              solution will not be enough. That's why you need custom web development.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* 3D Sliding Cards */}
          <div className="relative h-80 flex items-center justify-center" style={{ perspective: '1200px' }}>
            <div className="relative w-full max-w-5xl">
              {[
                {
                  title: "Industry-Focused Solutions",
                  description: "Web development that adapts to your specific business needs and industry requirements",
                  icon: Globe,
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  title: "Consistent User Experience", 
                  description: "Seamless experience across all web, mobile, and hybrid digital platforms",
                  icon: Smartphone,
                  gradient: "from-purple-500 to-purple-600"
                },
                {
                  title: "Scalable Architecture",
                  description: "Highly scalable solutions that can accommodate your business growth",
                  icon: Code,
                  gradient: "from-blue-600 to-purple-500"
                }
              ].map((item, index) => {
                const positions = [
                  { x: -200, z: 0, rotateY: 15, scale: 0.9 },
                  { x: 0, z: 100, rotateY: 0, scale: 1.1 },
                  { x: 200, z: 0, rotateY: -15, scale: 0.9 }
                ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.2, duration: 0.8 }
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      z: positions[index].z + 50,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translateX(${positions[index].x}px) translateZ(${positions[index].z}px) rotateY(${positions[index].rotateY}deg) scale(${positions[index].scale})`,
                      transformStyle: 'preserve-3d'
                    }}
                    className="group w-80 h-64"
                  >
                    <div className="relative w-full h-full backdrop-blur-lg bg-white/80 border border-white/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                      {/* 3D Background Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl`}>
                          <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/40 rounded-full animate-spin"></div>
                          <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-lg rotate-45"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <item.icon className="w-32 h-32 text-white/20" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                          <item.icon className="w-10 h-10 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-4 font-['Poppins'] transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 group-hover:text-gray-800 font-['Inter'] leading-relaxed transition-colors duration-300">
                          {item.description}
                        </p>
                        
                        <div className={`mt-6 w-16 h-1.5 bg-gradient-to-r ${item.gradient} rounded-full mx-auto group-hover:w-24 transition-all duration-500`}></div>
                      </div>
                      
                      {/* Glossy Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { WebDevAfterHeroSection };