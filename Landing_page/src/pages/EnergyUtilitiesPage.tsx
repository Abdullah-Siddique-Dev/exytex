import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import {
    Zap, Wind, Users, Gauge, TrendingUp, Shield,
    CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Sparkles,
    BarChart3, Settings, Activity, Power, Star
} from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CursorFollower } from '../components/ui/CursorFollower';
import { scrollToContactForm } from '../utils/scrollUtils';
import { ContactFormSection } from '../components/sections/ContactFormSection';

const EnergyUtilitiesPage: React.FC = () => {
    const [currentSolution, setCurrentSolution] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const heroTexts = [
        "Energy & Utilities Solutions",
        "Smart Energy Solutions", 
        "Sustainable Utility Management"
    ];

    // Single static hero image - no slider
    const heroImage = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format&q=80";

    const energySolutions = [
        {
            title: "Smart Grid Solutions",
            description: "Advanced smart grid technology for real-time monitoring, predictive maintenance, and optimized energy distribution.",
            icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
            color: "from-blue-600 to-purple-600",
            stats: "40%",
            label: "Efficiency Gain",
            features: ["Real-time Monitoring", "Predictive Analytics", "Load Balancing", "Automated Control"],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/#contact-form"
        },
        {
            title: "Renewable Energy Management",
            description: "Comprehensive solutions for solar, wind, and hydro energy management with AI-powered forecasting.",
            icon: <Wind className="w-6 h-6 sm:w-8 sm:h-8" />,
            color: "from-purple-600 to-blue-600",
            stats: "60%",
            label: "Cost Reduction",
            features: ["Energy Forecasting", "Asset Management", "Performance Optimization", "Integration Platform"],
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/#contact-form"
        },
        {
            title: "Utility Customer Portal",
            description: "Modern customer engagement platforms with self-service capabilities and real-time usage tracking.",
            icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
            color: "from-blue-500 to-purple-500",
            stats: "85%",
            label: "Customer Satisfaction",
            features: ["Self-Service Portal", "Mobile Apps", "Usage Analytics", "Payment Integration"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/services"
        },
        {
            title: "IoT & Smart Metering",
            description: "IoT-enabled smart metering solutions for accurate consumption tracking and automated billing.",
            icon: <Gauge className="w-6 h-6 sm:w-8 sm:h-8" />,
            color: "from-purple-500 to-blue-500",
            stats: "99.9%",
            label: "Accuracy Rate",
            features: ["Smart Meters", "IoT Sensors", "Data Analytics", "Remote Management"],
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/#contact-form"
        }
    ];

    const services = [
        {
            title: "Energy Trading Platform",
            description: "Advanced trading platforms with real-time market data and automated trading capabilities.",
            icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: "from-blue-600 to-purple-600"
        },
        {
            title: "Asset Performance",
            description: "Optimize asset lifecycle with predictive maintenance and performance monitoring.",
            icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: "from-purple-600 to-blue-600"
        },
        {
            title: "Demand Response",
            description: "Intelligent solutions to balance supply and demand, reduce peak loads.",
            icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: "from-blue-500 to-purple-500"
        },
        {
            title: "Energy Analytics",
            description: "Big data analytics and AI/ML solutions for energy forecasting and insights.",
            icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: "from-purple-500 to-blue-500"
        }
    ];

    const benefits = [
        { icon: <Zap className="w-5 h-5" />, title: "Operational Efficiency", stat: "45%", label: "Cost Savings" },
        { icon: <Shield className="w-5 h-5" />, title: "Enhanced Security", stat: "99.9%", label: "Uptime" },
        { icon: <TrendingUp className="w-5 h-5" />, title: "Revenue Growth", stat: "30%", label: "Revenue Increase" },
        { icon: <Users className="w-5 h-5" />, title: "Customer Experience", stat: "85%", label: "Satisfaction Rate" }
    ];

    const testimonials = [
        {
            quote: "The smart grid solution has transformed our operations. We've achieved 40% reduction in operational costs and significantly improved our service reliability.",
            author: "Chief Technology Officer",
            company: "Major Utility Provider",
            rating: 5
        },
        {
            quote: "Their renewable energy management platform has helped us optimize our solar and wind assets. The AI-powered forecasting is incredibly accurate.",
            author: "Director of Operations",
            company: "Renewable Energy Company",
            rating: 5
        }
    ];

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

    useEffect(() => {
        const solutionInterval = setInterval(() => {
            setCurrentSolution((prev) => (prev + 1) % energySolutions.length);
        }, 5000);
        return () => clearInterval(solutionInterval);
    }, []);

    return (
        <>
            <SEO
                title="Energy & Utilities Solutions | Smart Grid & Renewable Energy Technology"
                description="Transform your energy and utilities operations with smart grid solutions, renewable energy management, IoT metering, and advanced analytics. Reduce costs by 40% and improve efficiency."
                keywords="energy solutions, utility management, smart grid, renewable energy, IoT metering, energy analytics, grid modernization, demand response, energy trading platform, utility software"
                canonicalUrl="/industries/energy-utilities"
            />
            <CursorFollower />
            <ScrollProgress />
            <SleekHeader />

            {/* Hero Section */}
            <section className="relative min-h-screen bg-slate-900 overflow-hidden font-['Poppins',_'Inter',_sans-serif]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                        {/* Left Content */}
                        <div className="text-left">
                            <motion.div 
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Zap className="w-4 h-4" />
                                <span>Energy & Utilities Solutions</span>
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
                                Empower your energy operations with cutting-edge technology solutions. 
                                From smart grids to renewable energy management, we help you achieve operational excellence.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 mb-8"
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
                            </motion.div>

                            {/* Stats */}
                            <motion.div 
                                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.4 }}
                            >
                                {[
                                    { stat: "45%", label: "Cost Savings" },
                                    { stat: "99.9%", label: "Uptime" },
                                    { stat: "30%", label: "Revenue Increase" },
                                    { stat: "85%", label: "Satisfaction Rate" }
                                ].map((item, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="text-2xl font-bold text-blue-400 mb-1">{item.stat}</div>
                                        <div className="text-sm text-gray-400">{item.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Image - Static, No Slider */}
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ delay: 0.4 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src={heroImage} 
                                    alt="Energy Solutions" 
                                    className="w-full h-[400px] sm:h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div 
                                className="absolute -top-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Zap className="w-8 h-8 text-white" />
                            </motion.div>

                            <motion.div 
                                className="absolute -bottom-4 -left-4 bg-green-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                <Wind className="w-8 h-8 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

                {/* 3D Glass Carousel */}
                <section className="py-12 sm:py-16 lg:py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            className="text-center mb-8 sm:mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 px-2">
                                Our Energy <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto px-2">
                                Comprehensive technology solutions for the energy and utilities sector
                            </p>
                        </motion.div>

                        <div className="relative max-w-5xl mx-auto">
                            <div className="flex items-center justify-center gap-2 sm:gap-4">
                                <button
                                    onClick={() => setCurrentSolution((prev) => (prev - 1 + energySolutions.length) % energySolutions.length)}
                                    className="p-3 sm:p-4 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl border-2 border-gray-200 hover:border-blue-500 z-10 flex-shrink-0"
                                >
                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                                </button>

                                <div className="relative w-full max-w-3xl h-[450px] sm:h-[500px]" style={{ perspective: '1000px' }}>
                                    <AnimatePresence mode="wait">
                                        {energySolutions.map((solution, index) => {
                                            const offset = (index - currentSolution + energySolutions.length) % energySolutions.length;
                                            const isActive = offset === 0;
                                            const isPrev = offset === energySolutions.length - 1;
                                            const isNext = offset === 1;

                                            return (
                                                <motion.div
                                                    key={index}
                                                    className="absolute inset-0"
                                                    initial={false}
                                                    animate={{
                                                        x: isActive ? 0 : isPrev ? -300 : isNext ? 300 : 0,
                                                        scale: isActive ? 1 : 0.75,
                                                        opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                                                        rotateY: isActive ? 0 : isPrev ? 45 : isNext ? -45 : 0,
                                                        z: isActive ? 0 : -300,
                                                        zIndex: isActive ? 10 : 0
                                                    }}
                                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                                    style={{ transformStyle: "preserve-3d" }}
                                                >
                                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 h-full shadow-2xl">
                                                        <div className="relative h-32 sm:h-40 overflow-hidden">
                                                            <motion.img
                                                                src={solution.image}
                                                                alt={solution.title}
                                                                className="w-full h-full object-cover"
                                                                animate={{ scale: isActive ? 1.1 : 1 }}
                                                                transition={{ duration: 0.6 }}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                                                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                                                <div className={`bg-gradient-to-r ${solution.color} p-2 sm:p-3 rounded-lg sm:rounded-xl text-white shadow-lg`}>
                                                                    {solution.icon}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="p-4 sm:p-6">
                                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{solution.title}</h3>
                                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{solution.description}</p>

                                                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                                                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                                                                    {solution.stats}
                                                                </div>
                                                                <div className="text-gray-400 text-xs sm:text-sm">{solution.label}</div>
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-2 mb-4">
                                                                {solution.features.map((feature, idx) => (
                                                                    <motion.div
                                                                        key={idx}
                                                                        className="flex items-center gap-2 text-gray-300 text-xs bg-white/5 p-2 rounded-lg"
                                                                        initial={{ opacity: 0, x: -20 }}
                                                                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                                                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                                    >
                                                                        <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                                                                        <span className="text-xs">{feature}</span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </AnimatePresence>
                                </div>

                                <button
                                    onClick={() => setCurrentSolution((prev) => (prev + 1) % energySolutions.length)}
                                    className="p-3 sm:p-4 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl border-2 border-gray-200 hover:border-blue-500 z-10 flex-shrink-0"
                                >
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                                </button>
                            </div>

                            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                                {energySolutions.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSolution(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === currentSolution ? 'w-8 bg-blue-400' : 'w-2 bg-white/30'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid with Glass Effect */}
                <section className="py-12 sm:py-16 lg:py-20 relative bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            className="text-center mb-8 sm:mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
                                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto px-2">
                                End-to-end solutions for your energy and utilities operations
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onHoverStart={() => setHoveredCard(index)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                >
                                    <motion.div
                                        className="relative bg-white backdrop-blur-xl rounded-xl p-5 sm:p-6 border border-gray-200 h-full shadow-lg"
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className={`bg-gradient-to-r ${service.color} p-3 rounded-lg text-white inline-block mb-4`}
                                            animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {service.icon}
                                        </motion.div>

                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>

                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-xl`}
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-12 sm:py-16 lg:py-20 relative bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            className="text-center mb-8 sm:mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
                                Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
                            </h2>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg"
                                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="absolute top-4 left-4 text-blue-600/10 text-5xl sm:text-6xl font-serif">"</div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex justify-center mb-4">
                                            {[...Array(testimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                >
                                                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 fill-current" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        <blockquote className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-5 sm:mb-6 text-center italic px-2">
                                            {testimonials[currentTestimonial]?.quote || ""}
                                        </blockquote>

                                        <div className="text-center">
                                            <div className="inline-flex items-center gap-3 bg-gray-50 px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-200">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-blue-600 font-semibold text-xs sm:text-sm">
                                                        {testimonials[currentTestimonial]?.author || ""}
                                                    </div>
                                                    <div className="text-gray-600 text-xs">
                                                        {testimonials[currentTestimonial]?.company || ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {testimonials.length > 1 && (
                                <div className="flex justify-center mt-6 gap-3">
                                    <button
                                        onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors border border-gray-200 shadow-md"
                                    >
                                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                    </button>
                                    <button
                                        onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors border border-gray-200 shadow-md"
                                    >
                                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 lg:py-20 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                            transition={{ duration: 20, repeat: Infinity }}
                            className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                            transition={{ duration: 25, repeat: Infinity }}
                            className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48"
                        />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            className="max-w-4xl mx-auto relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-white/20 shadow-2xl">
                                <div className="text-center">
                                    <motion.div
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        Transform Your Energy Operations
                                    </motion.div>

                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
                                        Ready to Modernize Your
                                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            Energy & Utilities Infrastructure?
                                        </span>
                                    </h2>

                                    <p className="text-xs sm:text-sm text-gray-300 mb-5 sm:mb-6 leading-relaxed max-w-2xl mx-auto px-2">
                                        Join leading energy companies that have transformed their operations with our innovative solutions. 
                                        Reduce costs, improve efficiency, and deliver better customer experiences.
                                    </p>

                                    <motion.div
                                        className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 sm:mb-8 px-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.a
                                            href="https://calendly.com/saadinsides"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-xl inline-block"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Schedule Consultation
                                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </span>
                                        </motion.a>
                                    </motion.div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <motion.div
                                            className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                                                <Zap className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-sm sm:text-base font-bold text-blue-400 mb-2">Smart Grid Solutions</h4>
                                            <p className="text-gray-300 text-xs">Modernize your grid infrastructure</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                                                <Wind className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-sm sm:text-base font-bold text-purple-400 mb-2">Renewable Energy</h4>
                                            <p className="text-gray-300 text-xs">Optimize renewable assets</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0">
                                                <BarChart3 className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-sm sm:text-base font-bold text-blue-400 mb-2">Advanced Analytics</h4>
                                            <p className="text-gray-300 text-xs">Data-driven insights</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Footer */}
                <section className="py-8 sm:py-12 relative bg-white border-t border-gray-200">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            {[
                                { value: "6+", label: "Years Experience" },
                                { value: "100+", label: "Projects Delivered" },
                                { value: "50+", label: "Energy Clients" },
                                { value: "40%", label: "Avg Cost Reduction" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            <ContactFormSection
                title="Power Your Energy Transformation"
                description="Ready to modernize your energy and utilities operations with smart technology solutions? Let's discuss how we can help you build a more efficient and sustainable future."
            />

            <ElegantFooter />
            
            {/* Scroll to Top Button */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 10l7-7m0 0l7 7m-7-7v18" 
                    />
                </svg>
            </motion.button>
        </>
    );
};

export default EnergyUtilitiesPage;
