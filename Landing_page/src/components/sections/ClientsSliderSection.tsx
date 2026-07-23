import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, inView: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
};

interface Client {
  name: string;
  testimonial: string;
  position: string;
  company: string;
  rating: number;
}

const clients: Client[] = [
  {
    name: "Wahaj",
    testimonial: "The Android developer we hired exceeded our expectations. They built our Native E Donation App with Firebase integration perfectly. The matching process was incredibly efficient.",
    position: "Project Lead",
    company: "Native E Donation",
    rating: 5
  },
  {
    name: "William Blake",
    testimonial: "Outstanding UI/UX design work! The Play Ground ESPORT platform looks amazing. The designer delivered high-quality work with excellent attention to detail throughout the project.",
    position: "Product Owner",
    company: "Play Ground (ESPORT)",
    rating: 5
  },
  {
    name: "Arismara",
    testimonial: "We found an amazing Android developer who built our Ground Fitness App with Health APIs integration. The app works flawlessly and our users love it.",
    position: "Founder",
    company: "Ground Fitness App",
    rating: 5
  },
  {
    name: "Hassan Khan",
    testimonial: "The SEO specialist delivered fastest white hat SEO results. Our rankings improved dramatically using Google Analytics and Search Console optimization. Highly recommended!",
    position: "SEO Manager",
    company: "Fastest White Hat SEO",
    rating: 5
  },
  {
    name: "Soobz",
    testimonial: "Professional MERN stack development! The Custom E-Commerce Hub was built with MongoDB, Express, React, and Node.js. The developer was skilled and reliable throughout.",
    position: "Founder",
    company: "Custom E-Commerce Hub",
    rating: 5
  },
  {
    name: "Katrina Kerim",
    testimonial: "Excellent UI/UX design for our Furniture Gallery App. The designer used Adobe XD and Figma to create beautiful, user-friendly interfaces. Great experience overall.",
    position: "Design Lead",
    company: "Furniture Gallery App",
    rating: 5
  },
  {
    name: "Bilal Khan",
    testimonial: "The Android developer transformed our Car Booking Taxi App with perfect Google Maps API integration. Their expertise in Java and Firebase was exactly what we needed.",
    position: "Product Owner",
    company: "Car Booking Taxi App",
    rating: 5
  },
  {
    name: "Brjiesh",
    testimonial: "Fast and professional Laravel development. The Save Sales Custom Admin Panel with MySQL and Bootstrap exceeded expectations. Will definitely work together again.",
    position: "Tech Lead",
    company: "Save Sales",
    rating: 5
  },
  {
    name: "Soobz Malina",
    testimonial: "We've built our Soobz Online Clothing Brand with WordPress and WooCommerce. The developer's expertise in PHP and MySQL ensured top-quality e-commerce functionality.",
    position: "Founder",
    company: "Soobz Online Clothing",
    rating: 5
  },
  {
    name: "Azhar",
    testimonial: "The WordPress developer created an amazing Trade Kitchen Suppliers website using Elementor. Professional work with clean PHP and MySQL implementation.",
    position: "Business Owner",
    company: "Trade Kitchen Suppliers",
    rating: 5
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

export const ClientsSliderSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Client[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize visible cards
  useEffect(() => {
    setVisibleCards(clients.slice(0, 6));
  }, []);

  // Auto-cycle testimonials with pause functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % clients.length;
        // Update visible cards with cycling effect
        const newVisibleCards = [];
        for (let i = 0; i < 6; i++) {
          newVisibleCards.push(clients[(newIndex + i) % clients.length]);
        }
        setVisibleCards(newVisibleCards);
        return newIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/20 to-purple-50/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Modern Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-white/40 backdrop-blur-md text-blue-600 rounded-full text-sm font-medium mb-6 border border-white/30 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            ✨ Client Testimonials
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real feedback from real clients who've experienced our exceptional service
          </motion.p>
        </motion.div>

        {/* Flying Glassmorphic Testimonials */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative h-[700px] overflow-hidden">
            {/* Gradient Masks for Smooth Transitions */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            
            {/* Cycling Testimonials Container */}
            <div 
              className="absolute inset-0 flex flex-col justify-center space-y-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onWheel={(e) => {
                // Don't prevent page scroll
                e.stopPropagation();
              }}
            >
              {/* Row 1 - 3 cards */}
              <div className="flex justify-center gap-6">
                <AnimatePresence>
                  {visibleCards.slice(0, 3).map((client, index) => (
                    <motion.div
                      key={`${currentIndex}-row1-${index}`}
                      className="w-80 relative group"
                      initial={{ y: 150, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -150, opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.1,
                        type: "spring",
                        bounce: 0.2
                      }}
                    >
                      {/* Glassmorphic Card */}
                      <div className="relative bg-white/25 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/35">
                        {/* Glassmorphic Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Rating Stars */}
                          <div className="flex items-center justify-between mb-4">
                            <StarRating rating={client.rating} />
                            <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Testimonial Text */}
                          <blockquote className="text-gray-800 mb-6 leading-relaxed text-sm font-medium">
                            "{client.testimonial}"
                          </blockquote>
                          
                          {/* User Info */}
                          <div className="flex items-center">
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">
                                {client.name}
                              </h4>
                              <p className="text-gray-600 text-xs">
                                {client.position} at {client.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Row 2 - 3 cards (offset) */}
              <div className="flex justify-center gap-6">
                <AnimatePresence>
                  {visibleCards.slice(3, 6).map((client, index) => (
                    <motion.div
                      key={`${currentIndex}-row2-${index}`}
                      className="w-80 relative group"
                      initial={{ y: 150, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -150, opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: (index + 3) * 0.1,
                        type: "spring",
                        bounce: 0.2
                      }}
                    >
                      {/* Glassmorphic Card */}
                      <div className="relative bg-white/25 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/35">
                        {/* Glassmorphic Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Rating Stars */}
                          <div className="flex items-center justify-between mb-4">
                            <StarRating rating={client.rating} />
                            <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Testimonial Text */}
                          <blockquote className="text-gray-800 mb-6 leading-relaxed text-sm font-medium">
                            "{client.testimonial}"
                          </blockquote>
                          
                          {/* User Info */}
                          <div className="flex items-center">
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">
                                {client.name}
                              </h4>
                              <p className="text-gray-600 text-xs">
                                {client.position} at {client.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphic Stats Section */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
            {/* Glassmorphic Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: 100, label: 'Projects Delivered', suffix: '+' },
                { number: 6, label: 'Years Experience', suffix: '+' },
                { number: 95, label: 'Client Satisfaction', suffix: '%' },
                { number: 24, label: 'Support Available', suffix: '/7' }
              ].map((stat, index) => {
                const ref = React.useRef(null);
                const isInView = useInView(ref, { once: true });
                const count = useCounter(stat.number, 2500, isInView);
                
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    className="text-center relative group"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', bounce: 0.2 }}
                  >
                    {/* Glassmorphic Stat Container */}
                    <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {count}{stat.suffix}
                      </div>
                      <div className="text-gray-700 font-medium text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};