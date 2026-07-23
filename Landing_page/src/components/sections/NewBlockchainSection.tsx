import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NewBlockchainSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heroImages = [
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
        'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
        'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
        'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <>
            {/* BLOCKCHAIN HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                {/* Background Image with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img 
                            src={heroImages[currentImageIndex]}
                            alt="Blockchain Technology"
                            className="w-full h-full object-cover"
                            style={{ filter: 'brightness(0.3) contrast(1.2)' }}
                        />
                    </motion.div>
                </AnimatePresence>
                
                {/* Strong Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90" />
                
                {/* Animated Floating Elements */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-60"
                            style={{
                                left: `${10 + (i * 6)}%`,
                                top: `${20 + (i * 4)}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center bg-blue-500/30 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border-2 border-blue-400/50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-blue-200 font-bold text-xl">🔗 Revolutionary Blockchain Solutions</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-6xl md:text-7xl lg:text-9xl font-black text-white mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Build the Future with
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Blockchain Technology
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Secure, transparent, and decentralized solutions that revolutionize how businesses operate. 
                            From smart contracts to DeFi platforms, we build tomorrow's infrastructure today.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.button
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                🚀 Start Your Blockchain Project
                            </motion.button>
                            <motion.button
                                className="border-3 border-white/50 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                📺 View Live Demo
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            {[
                                { number: '500+', label: 'Blockchain Projects', icon: '🚀' },
                                { number: '99.9%', label: 'Network Uptime', icon: '⚡' },
                                { number: '50+', label: 'Smart Contracts', icon: '📋' },
                                { number: '$2M+', label: 'Transaction Volume', icon: '💰' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                                >
                                    <div className="text-4xl mb-3">{stat.icon}</div>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
                                    <div className="text-blue-200 text-lg font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Image Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                index === currentImageIndex 
                                    ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-400/50' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* BLOCKCHAIN FEATURES SECTION */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose Our Blockchain Solutions?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Experience the power of next-generation blockchain technology with enterprise-grade security, 
                            lightning-fast performance, and complete transparency.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🔐',
                                title: 'Immutable Security',
                                description: 'Cryptographically secured with 256-bit encryption',
                                color: 'from-blue-500 to-cyan-500'
                            },
                            {
                                icon: '🌐',
                                title: 'Decentralized Network',
                                description: 'No single point of failure or control',
                                color: 'from-purple-500 to-pink-500'
                            },
                            {
                                icon: '⚡',
                                title: 'Lightning Fast',
                                description: 'Process thousands of transactions per second',
                                color: 'from-yellow-500 to-orange-500'
                            },
                            {
                                icon: '📊',
                                title: 'Complete Transparency',
                                description: 'Fully auditable transaction history',
                                color: 'from-green-500 to-emerald-500'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                
                                <div className="relative z-10 text-center">
                                    <div className="text-5xl mb-6">{feature.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOCKCHAIN SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Comprehensive Blockchain Services
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            From concept to deployment, we provide end-to-end blockchain development services 
                            that transform your business processes and create new revenue opportunities.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Smart Contract Development',
                                icon: '📋',
                                description: 'Custom smart contracts for automated business processes',
                                features: ['Solidity Development', 'Contract Auditing', 'Gas Optimization', 'Multi-chain Support'],
                                price: 'Starting at $5,000'
                            },
                            {
                                title: 'DeFi Platform Development',
                                icon: '💰',
                                description: 'Build decentralized finance applications',
                                features: ['DEX Development', 'Lending Protocols', 'Yield Farming', 'Liquidity Pools'],
                                price: 'Starting at $15,000'
                            },
                            {
                                title: 'NFT Marketplace',
                                icon: '🎨',
                                description: 'Create and manage NFT ecosystems',
                                features: ['Minting Platform', 'Royalty System', 'Cross-chain Support', 'Metadata Management'],
                                price: 'Starting at $10,000'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="text-center">
                                    <div className="text-5xl mb-6">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                    
                                    <div className="mb-6">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                            {service.price}
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center justify-center text-gray-600">
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get Started
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Ready to Transform Your Business with
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Blockchain Technology?
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed">
                            Join the decentralized revolution and unlock new possibilities for your business. 
                            Our blockchain experts are ready to guide you through every step of your digital transformation journey.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                            <motion.button
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Blockchain Project
                            </motion.button>
                            <motion.button
                                className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Schedule Free Consultation
                            </motion.button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            >
                                <div className="text-4xl mb-4">📧</div>
                                <h3 className="text-white font-bold text-xl mb-3">Email Us</h3>
                                <p className="text-blue-200 text-lg">info@exytex.com</p>
                            </motion.div>
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            >
                                <div className="text-4xl mb-4">📞</div>
                                <h3 className="text-white font-bold text-xl mb-3">Call Us</h3>
                                <p className="text-blue-200 text-lg">+1 (555) 123-4567</p>
                            </motion.div>
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            >
                                <div className="text-4xl mb-4">💬</div>
                                <h3 className="text-white font-bold text-xl mb-3">Live Chat</h3>
                                <p className="text-blue-200 text-lg">Available 24/7</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};