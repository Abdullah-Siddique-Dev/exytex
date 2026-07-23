import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ContactSection } from '../components/sections/ContactSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { Shield, Zap, TrendingUp, Database, CheckCircle, ChevronLeft, ChevronRight, Code, Lock, Globe } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  useSmoothScroll();
  const [servicesSlide, setServicesSlide] = useState(0);
  const [benefitsSlide, setBenefitsSlide] = useState(0);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const blockchainServices = [
    {
      title: "Smart Contract Development",
      description: "Secure and audited smart contracts for Ethereum, Binance Smart Chain, and other platforms.",
      icon: <Code className="w-6 h-6" />,
      features: ["Solidity Development", "Contract Auditing", "Gas Optimization", "Testing & Deployment"]
    },
    {
      title: "DApp Development",
      description: "Decentralized applications with seamless user experience and robust backend infrastructure.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Web3 Integration", "Wallet Connection", "IPFS Storage", "Frontend Development"]
    },
    {
      title: "NFT Marketplace",
      description: "Build custom NFT marketplaces with minting, trading, and auction capabilities.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["NFT Minting", "Trading Platform", "Royalty System", "Marketplace Features"]
    },
    {
      title: "Blockchain Consulting",
      description: "Expert guidance on blockchain strategy, architecture, and implementation.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Strategy Planning", "Architecture Design", "Technology Selection", "Implementation Support"]
    },
    {
      title: "Private Blockchain",
      description: "Enterprise blockchain solutions with Hyperledger, Corda, and Quorum.",
      icon: <Lock className="w-6 h-6" />,
      features: ["Hyperledger Fabric", "Corda Development", "Quorum Networks", "Permissioned Chains"]
    },
    {
      title: "Token Development",
      description: "Create custom tokens (ERC-20, ERC-721, BEP-20) for your blockchain project.",
      icon: <Database className="w-6 h-6" />,
      features: ["Token Creation", "ICO/IDO Launch", "Tokenomics Design", "Exchange Listing"]
    }
  ];

  const benefits = [
    {
      title: "Transparency",
      description: "Immutable and transparent record of all transactions",
      icon: <Shield className="w-10 h-10" />,
      metric: "100%"
    },
    {
      title: "Security",
      description: "Cryptographic security and decentralized architecture",
      icon: <Lock className="w-10 h-10" />,
      metric: "Bank-Grade"
    },
    {
      title: "Efficiency",
      description: "Automated processes and reduced intermediaries",
      icon: <Zap className="w-10 h-10" />,
      metric: "50% Faster"
    },
    {
      title: "Cost Savings",
      description: "Lower transaction costs and operational expenses",
      icon: <TrendingUp className="w-10 h-10" />,
      metric: "30% Less"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Development Services - Smart Contracts, DApps, NFT & Web3 Solutions | Exytex Technologies</title>
        <meta name="description" content="Professional blockchain development services including smart contracts, DApps, NFT marketplaces, and enterprise blockchain solutions. Expert blockchain developers." />
        <meta name="keywords" content="blockchain development, smart contracts, DApp development, NFT marketplace, Ethereum development, Hyperledger, blockchain consulting, Web3 development" />
        <meta property="og:title" content="Blockchain Development Services | Smart Contracts, DApps, NFT | Exytex" />
        <meta property="og:description" content="Professional blockchain development services for smart contracts, DApps, and NFT marketplaces." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://exytex.com/services/blockchain" />
      </Helmet>
      
      <div className="bg-gray-900 min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative py-24 pt-56 overflow-hidden bg-gray-900">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Professional Blockchain Development Services
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transform your business with cutting-edge blockchain solutions. We deliver secure, scalable smart contracts, DApps, NFT marketplaces, and enterprise blockchain platforms.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button 
                    onClick={scrollToContact}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                  </button>
                  <button 
                    onClick={scrollToServices}
                    className="px-8 py-3 border-2 border-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 hover:border-blue-600 transform hover:scale-105 transition-all duration-300"
                  >
                    View Services
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&auto=format&q=80"
                  alt="Blockchain Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Carousel */}
        <section id="services-section" className="py-20 relative bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-blue-500">Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain development services for your business
              </p>
            </div>

            {/* Services Carousel */}
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${servicesSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(blockchainServices.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                        {blockchainServices.slice(slideIndex * 3, (slideIndex + 1) * 3).map((service, index) => (
                          <motion.div
                            key={index}
                            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-center mb-4">
                              <div className="p-2 bg-blue-600 rounded-lg mr-3 text-white">
                                {service.icon}
                              </div>
                              <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            </div>
                            
                            <p className="text-gray-300 text-base leading-relaxed mb-4">
                              {service.description}
                            </p>
                            
                            <div className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-gray-300 text-sm">
                                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                                  {feature}
                                </div>
                              ))}
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
                  onClick={() => setServicesSlide(Math.max(0, servicesSlide - 1))}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all disabled:opacity-50"
                  disabled={servicesSlide === 0}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(blockchainServices.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setServicesSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === servicesSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setServicesSlide(Math.min(Math.ceil(blockchainServices.length / 3) - 1, servicesSlide + 1))}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all disabled:opacity-50"
                  disabled={servicesSlide === Math.ceil(blockchainServices.length / 3) - 1}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - 3D Carousel */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Blockchain <span className="text-blue-600">Benefits</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of blockchain technology for your business
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${benefitsSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(benefits.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                        {benefits.slice(slideIndex * 2, (slideIndex + 1) * 2).map((benefit, index) => (
                          <motion.div
                            key={index}
                            className="bg-gray-100 rounded-xl p-6 text-center"
                            style={{
                              boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'
                            }}
                            initial={{ opacity: 0, rotateY: -20 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            transition={{ delay: index * 0.2 }}
                          >
                            <div 
                              className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4 text-blue-600"
                              style={{
                                boxShadow: 'inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff'
                              }}
                            >
                              {benefit.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 text-base mb-4">{benefit.description}</p>
                            
                            <div className="text-3xl font-bold text-blue-600">{benefit.metric}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center mt-10 gap-4">
                <button
                  onClick={() => setBenefitsSlide(Math.max(0, benefitsSlide - 1))}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  disabled={benefitsSlide === 0}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                
                <div className="flex gap-3">
                  {Array.from({ length: Math.ceil(benefits.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setBenefitsSlide(index)}
                      className={`h-3 rounded-full transition-all ${
                        index === benefitsSlide ? 'w-10 bg-blue-600' : 'w-3 bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setBenefitsSlide(Math.min(Math.ceil(benefits.length / 2) - 1, benefitsSlide + 1))}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  disabled={benefitsSlide === Math.ceil(benefits.length / 2) - 1}
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-blue-600">Our Blockchain Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Industry-leading expertise and proven track record in blockchain development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Expert Team",
                  description: "Certified blockchain developers with 5+ years of experience in smart contracts, DApps, and enterprise blockchain solutions.",
                  icon: "👥"
                },
                {
                  title: "Security First",
                  description: "All smart contracts undergo rigorous security audits and testing to ensure your blockchain applications are secure and reliable.",
                  icon: "🔒"
                },
                {
                  title: "Multi-Chain Support",
                  description: "We work with Ethereum, Binance Smart Chain, Polygon, Solana, Hyperledger, and other leading blockchain platforms.",
                  icon: "⛓️"
                },
                {
                  title: "End-to-End Solutions",
                  description: "From consultation and architecture design to development, deployment, and maintenance - we handle everything.",
                  icon: "🎯"
                },
                {
                  title: "Agile Development",
                  description: "Fast and iterative development process with regular updates and transparent communication throughout the project.",
                  icon: "⚡"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock technical support and maintenance to ensure your blockchain applications run smoothly.",
                  icon: "🛟"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Blockchain <span className="text-blue-600">Technologies We Use</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge blockchain platforms and tools
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Ethereum", icon: "⟠" },
                { name: "Solidity", icon: "◆" },
                { name: "Web3.js", icon: "🌐" },
                { name: "Hardhat", icon: "⚒️" },
                { name: "IPFS", icon: "📦" },
                { name: "MetaMask", icon: "🦊" },
                { name: "Truffle", icon: "🍫" },
                { name: "Polygon", icon: "⬡" },
                { name: "BSC", icon: "🔶" },
                { name: "Hyperledger", icon: "🔗" },
                { name: "Corda", icon: "🔵" },
                { name: "Solana", icon: "◎" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="text-base font-medium text-gray-700">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development <span className="text-blue-600">Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology for successful blockchain projects
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We analyze your requirements, define project scope, and create a detailed roadmap for your blockchain solution."
                },
                {
                  step: "02",
                  title: "Architecture Design",
                  description: "Our experts design the blockchain architecture, select appropriate platforms, and plan smart contract structure."
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "We develop smart contracts, DApps, and integrate with blockchain networks while conducting thorough testing."
                },
                {
                  step: "04",
                  title: "Security Audit",
                  description: "Comprehensive security audits and code reviews to ensure your blockchain application is secure and bug-free."
                },
                {
                  step: "05",
                  title: "Deployment & Launch",
                  description: "We deploy your blockchain solution to mainnet and ensure smooth launch with monitoring and support."
                },
                {
                  step: "06",
                  title: "Maintenance & Support",
                  description: "Ongoing maintenance, updates, and 24/7 technical support to keep your blockchain application running optimally."
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-base text-gray-600">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="bg-white">
          <ContactSection />
        </section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default BlockchainPage;