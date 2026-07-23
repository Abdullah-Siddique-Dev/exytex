import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Apple, 
  Smartphone, 
  Code, 
  Zap,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const IOS3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation variants
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

  const customIOSCards = [
    {
      title: "Native iOS Development",
      description: "Build powerful native iOS applications using Swift and the latest iOS frameworks",
      icon: Apple,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "App Store Optimization", 
      description: "Optimize your app for maximum visibility and downloads on the App Store",
      icon: Star,
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "Performance & Security",
      description: "Ensure your iOS app runs smoothly with top-tier security implementation",
      icon: Shield,
      gradient: "from-green-500 to-blue-600"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % customIOSCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + customIOSCards.length) % customIOSCards.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            iOS Development Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create exceptional iOS experiences with our expert development team
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {customIOSCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                  whileHover={{ y: -10 }}
                >
                  <div className={`bg-gradient-to-br ${card.gradient} p-8 rounded-2xl shadow-2xl h-full`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 inline-block">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IOS3DCarousel;