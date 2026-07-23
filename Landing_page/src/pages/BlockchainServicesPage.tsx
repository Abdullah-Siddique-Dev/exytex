import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ContactSection } from '../components/sections/ContactSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const blockchainServices = [
  {
    title: 'Corda Development',
    description: 'Enterprise-grade blockchain solutions with Corda for financial services',
    path: '/services/corda',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Stellar Blockchain',
    description: 'Fast and scalable FinTech solutions powered by Stellar protocol',
    path: '/services/stellar',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Hyperledger Development',
    description: 'Permissioned blockchain networks for enterprise applications',
    path: '/services/hyperledger',
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    title: 'NFT Marketplace',
    description: 'Build profitable NFT marketplaces for digital assets and collectibles',
    path: '/services/nft',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Ethereum Development',
    description: 'Smart contracts and DApps on the Ethereum blockchain',
    path: '/services/ethereum',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Quorum Blockchain',
    description: 'Enterprise Ethereum for private and permissioned networks',
    path: '/services/quorum',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Smart Contracts',
    description: 'Secure and audited smart contract development services',
    path: '/services/smart-contracts',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'General Blockchain',
    description: 'Comprehensive blockchain development and consulting services',
    path: '/services/blockchain',
    gradient: 'from-orange-500 to-red-500',
  },
];

const BlockchainServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(blockchainServices.length / cardsPerView);

  return (
    <>
      <Helmet>
        <title>Blockchain Development Services | Ethereum, Hyperledger, NFT | Exytex</title>
        <meta name="description" content="Professional blockchain development services including Ethereum, Hyperledger, Corda, Stellar, NFT marketplace, and smart contract development. Expert blockchain solutions." />
        <meta name="keywords" content="blockchain development, Ethereum development, Hyperledger, smart contracts, NFT marketplace, Corda blockchain, Stellar blockchain, DApp development, blockchain consulting" />
        <meta property="og:title" content="Blockchain Development Services | Ethereum, Hyperledger, NFT | Exytex" />
        <meta property="og:description" content="Professional blockchain development services across multiple platforms." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://exytex.com/services/blockchain" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900">
        <ScrollProgress />
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="container mx-auto px-6 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Professional Blockchain Services - Smart Contracts, DApps & Enterprise Solutions
              </h1>
              <p className="text-base text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive blockchain development services across multiple platforms
              </p>
            </motion.div>

            {/* Carousel */}
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                        {blockchainServices
                          .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                          .map((service, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => navigate(service.path)}
                              className="cursor-pointer group"
                            >
                              {/* Glassmorphism Card */}
                              <div className="relative h-full p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <h3 className="text-lg font-bold text-white mb-3">
                                  {service.title}
                                </h3>

                                <p className="text-gray-300 text-sm mb-4">
                                  {service.description}
                                </p>

                                <motion.div
                                  className="flex items-center text-blue-400 font-medium text-sm"
                                  whileHover={{ x: 5 }}
                                >
                                  <span>Learn More</span>
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center mt-8 gap-4">
                <button
                  onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all disabled:opacity-50"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all disabled:opacity-50"
                  disabled={currentSlide === totalSlides - 1}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Neumorphism */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="text-blue-600">Blockchain Services</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Industry-leading blockchain development with proven expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Expert Team', desc: 'Certified blockchain developers', icon: '👥' },
                { title: 'Secure Solutions', desc: 'Audited smart contracts', icon: '🔒' },
                { title: 'Fast Delivery', desc: 'Agile development process', icon: '⚡' },
                { title: '24/7 Support', desc: 'Round-the-clock assistance', icon: '🛟' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-xl p-6 text-center"
                  style={{
                    boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white">
          <ContactSection />
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default BlockchainServicesPage;
