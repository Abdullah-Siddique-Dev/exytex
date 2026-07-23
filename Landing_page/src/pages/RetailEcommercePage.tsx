import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ShoppingCart, Smartphone, TrendingUp, Users, Package, CreditCard, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CursorFollower } from '../components/ui/CursorFollower';
import { scrollToContactForm } from '../utils/scrollUtils';
import { ContactFormSection } from '../components/sections/ContactFormSection';

const RetailEcommercePage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const heroTexts = ["Modern Retail Solutions", "E-commerce Excellence", "Digital Shopping Experience"];

    useEffect(() => {
        const currentFullText = heroTexts[currentTextIndex];
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= currentFullText.length) {
                setDisplayedText(currentFullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length), 2000);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, [currentTextIndex]);

    return (
        <>
            <SEO
                title="Retail & E-commerce Solutions | Online Store Development"
                description="Transform your retail business with e-commerce platforms, mobile shopping apps, inventory management, and omnichannel solutions. Boost online sales and customer engagement."
                keywords="ecommerce solutions, online store, retail technology, mobile shopping, inventory management, omnichannel retail, shopify, magento"
                canonicalUrl="/industries/retail-ecommerce"
            />
            <CursorFollower />
            <ScrollProgress />
            <SleekHeader />

            {/* Hero Section */}
            <section className="relative min-h-screen bg-slate-900 overflow-hidden font-['Poppins',_'Inter',_sans-serif]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                        {/* Left Content */}
                        <div className="text-left">
                            <motion.div 
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <ShoppingCart className="w-4 h-4" />
                                <span>Retail & E-commerce</span>
                            </motion.div>

                            <motion.h1 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {displayedText}<span className="animate-pulse">|</span>
                            </motion.h1>

                            <motion.p 
                                className="text-lg text-gray-300 leading-relaxed mb-8" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.2 }}
                            >
                                Build powerful e-commerce platforms and retail solutions that drive sales, enhance customer experience, and streamline operations.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.3 }}
                            >
                                <motion.button 
                                    onClick={scrollToContactForm}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base shadow-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer" 
                                    whileHover={{ scale: 1.05 }} 
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Get Started
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </motion.button>

                                <motion.a
                                    href="https://calendly.com/saadinsides"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-medium text-base hover:bg-gray-800 hover:border-gray-300 transition-all duration-300 cursor-pointer inline-block"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Get Consultation
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Right Image */}
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ delay: 0.4 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80" 
                                    alt="Retail & E-commerce Technology Solutions" 
                                    className="w-full h-[400px] sm:h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div 
                                className="absolute -top-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ShoppingCart className="w-8 h-8 text-white" />
                            </motion.div>

                            <motion.div 
                                className="absolute -bottom-4 -left-4 bg-purple-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                <TrendingUp className="w-8 h-8 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                                Our E-commerce Solutions
                            </h2>
                            <p className="text-base text-gray-600 max-w-3xl mx-auto">
                                Comprehensive retail technology solutions for modern businesses
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { 
                                    icon: <ShoppingCart className="w-6 h-6" />, 
                                    title: "E-commerce Platforms", 
                                    desc: "Custom online stores with seamless shopping experiences",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                { 
                                    icon: <Smartphone className="w-6 h-6" />, 
                                    title: "Mobile Shopping", 
                                    desc: "iOS & Android apps for on-the-go shopping",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                { 
                                    icon: <Package className="w-6 h-6" />, 
                                    title: "Inventory Management", 
                                    desc: "Real-time tracking and stock management",
                                    gradient: "from-green-500 to-teal-500"
                                },
                                { 
                                    icon: <CreditCard className="w-6 h-6" />, 
                                    title: "Payment Integration", 
                                    desc: "Secure checkout with multiple payment options",
                                    gradient: "from-orange-500 to-red-500"
                                },
                                { 
                                    icon: <Users className="w-6 h-6" />, 
                                    title: "Customer Analytics", 
                                    desc: "Behavior insights and personalization",
                                    gradient: "from-indigo-500 to-purple-500"
                                },
                                { 
                                    icon: <TrendingUp className="w-6 h-6" />, 
                                    title: "Omnichannel", 
                                    desc: "Unified experience across all channels",
                                    gradient: "from-pink-500 to-rose-500"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -4 }}
                                    onClick={scrollToContactForm}
                                >
                                    <div className={`bg-gradient-to-r ${service.gradient} p-2.5 rounded-lg text-white inline-block mb-3`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection
                title="Transform Your Retail Business"
                description="Ready to revolutionize your retail operations with cutting-edge ecommerce solutions? Let's discuss how we can help you create exceptional shopping experiences."
            />

            <ElegantFooter />
        </>
    );
};

export default RetailEcommercePage;
