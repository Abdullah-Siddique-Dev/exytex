import React from 'react';
import { motion } from 'framer-motion';
import { Car, Zap, Shield, Cpu } from 'lucide-react';

export const AutomotiveHeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200&h=800&fit=crop&auto=format&q=80',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&h=800&fit=crop&auto=format&q=80',
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
              Automotive Technology
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Automotive Industry <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl text-blue-600 font-semibold">
              Improve Automotive Businesses with Tech Solutions
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              We deliver business and technology solutions for automotive leaders with focus on key issues across the automotive value chain.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Zap, text: 'Accelerate Time to Market' },
                { icon: Shield, text: 'Business Efficiency' },
                { icon: Cpu, text: 'Streamline Supply Chain' },
                { icon: Car, text: 'Customer Loyalty' }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-br from-purple-500 to-purple-600'
                  }`}>
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Auto-Changing Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
              <motion.div className="relative w-full h-full">
                {images.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Automotive ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.7 }}
                  />
                ))}
              </motion.div>

              {/* Slider Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-white w-8'
                        : 'bg-white/50 w-2 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};