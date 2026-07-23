import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TypewriterText } from '../ui/TypewriterText';
import { HoverArrowButton } from '../ui/HoverArrowButton';
import { scrollToSection } from '../../utils/scrollUtils';

export const WebDevHeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&h=1080&fit=crop&auto=format&q=80', // Web developer coding
    'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1920&h=1080&fit=crop&auto=format&q=80', // Modern web development workspace
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop&auto=format&q=80', // Developer coding on laptop
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=80', // Analytics and web development
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=1080&fit=crop&auto=format&q=80', // Developer workspace
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&auto=format&q=80'  // Laptop with code
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden">
      {/* Changing Background Images */}
      <div className="absolute inset-0 bg-gray-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Left-aligned Content like previous pages */}
          <div className="text-left max-w-4xl pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading - SEO Optimized */}
              <motion.h1
                className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.span 
                  className="block bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
                >
                  Professional Web Development Services - Custom
                </motion.span>
                <TypewriterText 
                  texts={['Web Applications', 'E-commerce Solutions', 'Responsive Websites', 'Progressive Web Apps']}
                  speed={100}
                  deleteSpeed={60}
                  pauseTime={4000}
                  className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
                />
              </motion.h1>
              
              <p 
                className="text-lg md:text-xl text-blue-100 mb-12 mt-6 leading-relaxed font-light max-w-2xl"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Transform your ideas into powerful web applications with modern technology and expert development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-20 mt-10">
                <div onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    scrollToSection('#contact');
                  }, 300);
                }}>
                  <HoverArrowButton
                    text="Start Your Project"
                    variant="primary"
                    size="md"
                  />
                </div>
                <div onClick={() => navigate('/our-work')}>
                  <HoverArrowButton
                    text="View Portfolio"
                    variant="secondary"
                    size="md"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-lg">
                <div className="text-left">
                  <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: '"Poppins", sans-serif' }}>200+</div>
                  <div className="text-blue-200 text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>Projects Completed</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: '"Poppins", sans-serif' }}>98%</div>
                  <div className="text-blue-200 text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>Client Satisfaction</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: '"Poppins", sans-serif' }}>24/7</div>
                  <div className="text-blue-200 text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Realistic Web Cards - Reduced Size */}
          <div className="absolute right-0 lg:right-8 xl:right-12 top-0 bottom-0 pointer-events-none hidden lg:block">
            <div className="relative w-[350px] h-full" style={{ perspective: '1200px' }}>
              
              {/* Card 1 - Top Corner */}
              <motion.div
                className="absolute top-4 right-0 w-72 h-48 bg-gradient-to-br from-blue-500/40 to-purple-600/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/30 cursor-pointer"
                style={{ 
                  transform: 'rotateY(-12deg) rotateX(3deg)',
                  zIndex: 6
                }}
                animate={{ 
                  y: [0, -8, 0],
                  rotateY: [-12, -8, -12]
                }}
                whileHover={{
                  x: -80,
                  y: 50,
                  scale: 1.1,
                  rotateY: 0,
                  zIndex: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="p-6 text-white h-full flex flex-col relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span className="text-xs font-medium opacity-95 font-['Inter'] tracking-wide">WEB APPS</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Poppins'] leading-tight">Modern Solutions</h3>
                  <p className="text-sm opacity-95 leading-relaxed font-['Inter']">Responsive web applications with cutting-edge technology.</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/50 rounded-lg"></div>
                </div>
              </motion.div>

              {/* Card 2 - Upper Flow */}
              <motion.div
                className="absolute top-16 right-12 w-72 h-48 bg-gradient-to-br from-purple-500/40 to-blue-600/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/30 cursor-pointer"
                style={{ 
                  transform: 'rotateY(-6deg) rotateX(2deg)',
                  zIndex: 5
                }}
                animate={{ 
                  y: [0, -6, 0],
                  rotateY: [-6, -3, -6]
                }}
                whileHover={{
                  x: -60,
                  y: 30,
                  scale: 1.1,
                  rotateY: 0,
                  zIndex: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"></div>
                <div className="p-6 text-white h-full flex flex-col relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span className="text-xs font-medium opacity-90 font-['Inter'] tracking-wide">E-COMMERCE</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Poppins'] leading-tight">Online Stores</h3>
                  <p className="text-sm opacity-90 leading-relaxed font-['Inter']">Complete e-commerce platforms with secure payments.</p>
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-12 bg-white/15 backdrop-blur-sm rounded-xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-xl p-2">
                    <div className="w-full h-full bg-white/30 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Middle Flow */}
              <motion.div
                className="absolute top-32 right-24 w-72 h-48 bg-gradient-to-br from-blue-600/40 to-purple-500/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/30 cursor-pointer"
                style={{ 
                  transform: 'rotateY(-1deg) rotateX(1deg)',
                  zIndex: 4
                }}
                animate={{ 
                  y: [0, -4, 0],
                  rotateY: [-1, 1, -1]
                }}
                whileHover={{
                  x: -40,
                  y: 10,
                  scale: 1.1,
                  rotateY: 0,
                  zIndex: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"></div>
                <div className="p-6 text-white h-full flex flex-col relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span className="text-xs font-medium opacity-90 font-['Inter'] tracking-wide">MOBILE APPS</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Poppins'] leading-tight">Cross-Platform</h3>
                  <p className="text-sm opacity-90 leading-relaxed font-['Inter']">Native and hybrid mobile applications for iOS and Android.</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl">
                  <div className="w-full h-full bg-blue-400/50 rounded-xl"></div>
                </div>
              </motion.div>

              {/* Card 4 - Lower Flow */}
              <motion.div
                className="absolute bottom-32 right-36 w-72 h-48 bg-gradient-to-br from-purple-600/40 to-blue-500/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/30 cursor-pointer"
                style={{ 
                  transform: 'rotateY(3deg) rotateX(0deg)',
                  zIndex: 3
                }}
                animate={{ 
                  y: [0, -3, 0],
                  rotateY: [3, 6, 3]
                }}
                whileHover={{
                  x: -80,
                  y: -30,
                  scale: 1.1,
                  rotateY: 0,
                  zIndex: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"></div>
                <div className="p-6 text-white h-full flex flex-col relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span className="text-xs font-medium opacity-90 font-['Inter'] tracking-wide">CUSTOM SOFTWARE</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Poppins'] leading-tight">Enterprise Solutions</h3>
                  <p className="text-sm opacity-90 leading-relaxed font-['Inter']">Tailored software solutions for complex business workflows.</p>
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-12 bg-white/15 backdrop-blur-sm rounded-xl">
                  <div className="w-full h-full bg-gradient-to-r from-purple-400/50 to-blue-500/50 rounded-xl"></div>
                </div>
              </motion.div>

              {/* Card 5 - Lower Bottom */}
              <motion.div
                className="absolute bottom-16 right-48 w-72 h-48 bg-gradient-to-br from-blue-500/40 to-purple-600/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/30 cursor-pointer"
                style={{ 
                  transform: 'rotateY(0deg) rotateX(0deg)',
                  zIndex: 2
                }}
                animate={{ 
                  y: [0, -2, 0]
                }}
                whileHover={{
                  x: -100,
                  y: -50,
                  scale: 1.1,
                  zIndex: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"></div>
                <div className="p-6 text-white h-full flex flex-col relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span className="text-xs font-medium opacity-90 font-['Inter'] tracking-wide">UI/UX DESIGN</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Poppins'] leading-tight">Design Systems</h3>
                  <p className="text-sm opacity-90 leading-relaxed font-['Inter']">Beautiful, intuitive user interfaces with design systems.</p>
                </div>
                <div className="absolute top-4 right-4 w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-2xl p-2">
                    <div className="w-full h-full bg-white/40 rounded-xl"></div>
                  </div>
                </div>
              </motion.div>

              {/* Card 6 - Bottom Corner */}
              <motion.div
                className="absolute bottom-4 right-60 w-72 h-48 bg-gradient-to-br from-purple-500/40 to-blue-600/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/30 cursor-pointer"
                style={{ 
                  transform: 'rotateY(0deg) rotateX(0deg)',
                  zIndex: 1
                }}
                animate={{ 
                  y: [0, -1, 0]
                }}
                whileHover={{
                  x: -150,
                  y: -100,
                  scale: 1.1,
                  zIndex: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"></div>
                <div className="p-6 text-white h-full flex flex-col relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span className="text-xs font-medium opacity-90 font-['Inter'] tracking-wide">CLOUD SERVICES</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Poppins'] leading-tight">Cloud Infrastructure</h3>
                  <p className="text-sm opacity-90 leading-relaxed font-['Inter']">Scalable cloud solutions with automated deployment.</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl">
                  <div className="w-full h-full bg-purple-400/50 rounded-xl"></div>
                </div>
              </motion.div>

              {/* Floating Geometric Elements */}
              <motion.div
                className="absolute top-16 left-12 w-16 h-16 bg-gradient-to-br from-blue-400/80 to-purple-500/80 rounded-3xl shadow-xl backdrop-blur-sm"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/50 rounded-2xl"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-8 w-12 h-12 bg-gradient-to-br from-purple-400/80 to-blue-500/80 rounded-2xl shadow-xl backdrop-blur-sm"
                animate={{ 
                  rotate: [360, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/60 rounded-xl"></div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-4 w-10 h-10 bg-gradient-to-br from-blue-500/80 to-purple-600/80 rounded-full shadow-lg backdrop-blur-sm"
                animate={{ 
                  x: [0, 15, 0],
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/70 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};