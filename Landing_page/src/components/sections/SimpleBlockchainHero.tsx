import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const SimpleBlockchainHero: React.FC = () => {
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{ 
                    backgroundImage: `url(${heroImages[currentImageIndex]})`,
                    filter: 'brightness(0.4)'
                }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90" />
            
            {/* Animated Particles */}
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
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
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
                        className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-blue-400/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-blue-300 font-bold text-xl">🔗 Revolutionary Blockchain Solutions</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
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
                        className="text-2xl md:text-3xl text-blue-200 mb-12 max-w-5xl mx-auto leading-relaxed font-medium"
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
                            className="border-3 border-white/40 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
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
                                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
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
    );
};