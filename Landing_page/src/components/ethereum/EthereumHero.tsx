import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

const heroImages = [
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80',
  'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1920&q=80',
  'https://images.unsplash.com/photo-1644143379190-08a5f055de1d?w=1920&q=80',
];

export const EthereumHero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  
  const heading = useTypewriter({ text: 'Ethereum Application Development', speed: 50 });
  const subtitle = useTypewriter({ 
    text: 'Building secure, scalable, and future-ready blockchain applications.', 
    speed: 30,
    delay: heading.isComplete ? 200 : 0 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
      {heroImages.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </motion.div>
      ))}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Side - Text Content with Typing Animation */}
          <div className="text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {heading.displayText}
              {!heading.isComplete && <span className="animate-pulse">|</span>}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle.displayText}
              {heading.isComplete && !subtitle.isComplete && <span className="animate-pulse">|</span>}
            </motion.p>

            <motion.p
              className="text-base text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              As a leading Ethereum development company, we specialize in creating robust decentralized applications, smart contracts, and blockchain solutions. Our expert team delivers enterprise-grade Ethereum applications that transform businesses through transparency, security, and automation.
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Connect with Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Right Side - Image */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {heroImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImage === index ? 1 : 0 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={img}
                  alt={`Ethereum ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            ))}
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-blue-400 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
