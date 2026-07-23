import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Play, Pause, Check, Zap, Shield, Globe, Smartphone, Tablet, Monitor, Code, Layers, Settings, Users, TrendingUp, Award, Clock, Target } from 'lucide-react';

export const MobileAppDevelopmentSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentOfferingIndex, setCurrentOfferingIndex] = useState(0);
    const [currentUseCaseIndex, setCurrentUseCaseIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState(0);
    
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // Hero carousel data
    const heroSlides = [
        {
            title: "Mobile Application Development Services",
            subtitle: "Enhance Business Efficiency With Enterprise Mobility Solutions",
            description: "Transform your business with cutting-edge mobile solutions that deliver exceptional user experiences and drive growth.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop&auto=format&q=80",
            gradient: "from-blue-600 via-purple-600 to-pink-600"
        },
        {
            title: "Agile, New-Age Mobile Solutions",
            subtitle: "High-End Development for Your Business",
            description: "Delivering impeccable solutions that serve their purpose and provide seamless user experiences across all platforms.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&auto=format&q=80",
            gradient: "from-purple-600 via-pink-600 to-orange-600"
        },
        {
            title: "Future-Ready Mobile Applications",
            subtitle: "Explore Newer Opportunities",
            description: "Our Mobile Centre of Excellence provides robust roadmap and strategy to develop applications across platforms.",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&h=1080&fit=crop&auto=format&q=80",
            gradient: "from-orange-600 via-red-600 to-purple-600"
        }
    ];

    // Offerings data with 3D carousel
    const offerings = [
        {
            title: "Mobile Application Consulting",
            description: "Centre of Excellence with years of experience in understanding requirements for providing the right consultation and strategy to deliver market winning mobile applications.",
            icon: <Users className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            features: ["Strategic Planning", "Market Analysis", "Technology Selection", "ROI Assessment"]
        },
        {
            title: "Mobile UI & UX Design",
            description: "Dedicated design veterans to create engaging and interactive Application User Interface and User Experience to increase conversion, adoption and engagement.",
            icon: <Layers className="w-8 h-8" />,
            color: "from-purple-500 to-pink-500",
            features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
        },
        {
            title: "Mobile Application Development",
            description: "Trusted mobile application development company empowering businesses with Native and Hybrid Mobile Applications, Progressive Web Applications, Wearable and Embedded Software Development.",
            icon: <Code className="w-8 h-8" />,
            color: "from-green-500 to-emerald-500",
            features: ["Native Development", "Hybrid Solutions", "PWA Development", "Cross-Platform"]
        },
        {
            title: "Mobile Application Modernization",
            description: "Revive outdated applications with our custom mobile application development services that redesign, re architect and refactor codes with the blend of rich features and technologies.",
            icon: <Settings className="w-8 h-8" />,
            color: "from-orange-500 to-red-500",
            features: ["Legacy Migration", "Code Refactoring", "Performance Optimization", "Feature Enhancement"]
        },
        {
            title: "Backend Development",
            description: "Strategic backend development under mobile application development services to ensure quick and smooth data transfer and synchronization with secure mobile application backend.",
            icon: <Shield className="w-8 h-8" />,
            color: "from-indigo-500 to-purple-500",
            features: ["API Development", "Database Design", "Cloud Integration", "Security Implementation"]
        },
        {
            title: "Web Companion Development",
            description: "For delivering a seamless user experience to the audience across the platforms and operating systems, complementing the business mobile applications with web applications and portals.",
            icon: <Globe className="w-8 h-8" />,
            color: "from-teal-500 to-blue-500",
            features: ["Responsive Design", "Cross-Platform Sync", "Web Portals", "Admin Dashboards"]
        },
        {
            title: "Mobile Application Integration",
            description: "Enabling seamless integration with the mobile backend, server and 3rd party software to ensure perfect synchronization and smooth functionality.",
            icon: <Zap className="w-8 h-8" />,
            color: "from-yellow-500 to-orange-500",
            features: ["API Integration", "Third-party Services", "Payment Gateways", "Analytics Tools"]
        },
        {
            title: "Mobile Application QA & Testing",
            description: "ISTQB certified testing including, functional, accessibility, load, performance, UX and security testing to make sure the mobile application works perfectly under all conditions.",
            icon: <Target className="w-8 h-8" />,
            color: "from-pink-500 to-rose-500",
            features: ["Automated Testing", "Performance Testing", "Security Audits", "User Acceptance Testing"]
        },
        {
            title: "Maintenance and Support",
            description: "Renowned custom mobile app development company that keeps business mobile applications up and running without any glitch, with routine check-ups and assistance.",
            icon: <Clock className="w-8 h-8" />,
            color: "from-cyan-500 to-blue-500",
            features: ["24/7 Support", "Regular Updates", "Bug Fixes", "Performance Monitoring"]
        }
    ];

    // Business benefits with animated counters
    const benefits = [
        {
            title: "Efficiency",
            description: "Use of enterprise applications and mobile analytics add to the employee efficiency.",
            icon: <TrendingUp className="w-12 h-12" />,
            metric: "85%",
            metricLabel: "Efficiency Increase"
        },
        {
            title: "Opportunities",
            description: "Tapping mobility opens doors to the next generation of m-commerce capabilities and opportunities.",
            icon: <Globe className="w-12 h-12" />,
            metric: "300%",
            metricLabel: "Revenue Growth"
        },
        {
            title: "Engagement",
            description: "Smart design based digital experience boosts customer engagement and enhances retention.",
            icon: <Users className="w-12 h-12" />,
            metric: "92%",
            metricLabel: "User Retention"
        },
        {
            title: "Accuracy",
            description: "Use of mobile applications brings enhanced accuracy of data, strengthening business intelligence.",
            icon: <Target className="w-12 h-12" />,
            metric: "99.9%",
            metricLabel: "Data Accuracy"
        }
    ];

    // Industry use cases with interactive cards
    const useCases = [
        {
            industry: "Hi-Tech",
            title: "Technology Solutions",
            description: "Assist in supporting your mobile application projects with our resources, mobile centre of excellence, time tested frameworks and accelerators.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            results: ["50% faster development", "Cross-platform compatibility", "Scalable architecture"]
        },
        {
            industry: "Insurance",
            title: "Policy Management Platform",
            description: "Developed a mobile and web-based solution for a leading Insurance firm to boost their profitability by simplifying their policy process over the platforms.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["Native iOS", "Android", "Cloud Backend", "AI/ML"],
            results: ["40% process improvement", "Enhanced user experience", "Increased profitability"]
        },
        {
            industry: "Healthcare",
            title: "Telemedicine Application",
            description: "Built a mobile application for a renowned healthcare chain enabling patients to book appointments and consult directly with the doctor via video conferencing.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["WebRTC", "HIPAA Compliance", "Real-time Chat", "Payment Integration"],
            results: ["200% appointment increase", "Improved patient satisfaction", "Reduced wait times"]
        },
        {
            industry: "e-Commerce",
            title: "Shopping Platform",
            description: "Developed a mobile application and a complementing web-based portal for an e-commerce company to assist users in the easy ordering of their product line.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["Progressive Web App", "Payment Gateway", "Inventory Management", "Analytics"],
            results: ["150% sales increase", "Better user engagement", "Streamlined operations"]
        },
        {
            industry: "Logistics",
            title: "Delivery Tracking System",
            description: "Created a mobile-based client for a delivery chain to help them keep track of their shipments across the transit, including precise location-based tags.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["GPS Tracking", "Real-time Updates", "Route Optimization", "IoT Integration"],
            results: ["30% delivery efficiency", "Real-time tracking", "Customer satisfaction"]
        },
        {
            industry: "OTT",
            title: "Media Streaming Platform",
            description: "Built an interactive media application for an OTT platform to release their content across the user base, with multiple user accounts and download features.",
            image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["Video Streaming", "CDN Integration", "Offline Viewing", "Multi-device Sync"],
            results: ["500K+ active users", "High-quality streaming", "Multi-platform support"]
        }
    ];

    // Tech stack with animated icons
    const techStack = [
        { name: "React Native", icon: "⚛️", category: "Cross-Platform" },
        { name: "Flutter", icon: "🦋", category: "Cross-Platform" },
        { name: "Swift", icon: "🍎", category: "iOS" },
        { name: "Kotlin", icon: "🤖", category: "Android" },
        { name: "Node.js", icon: "🟢", category: "Backend" },
        { name: "MongoDB", icon: "🍃", category: "Database" },
        { name: "AWS", icon: "☁️", category: "Cloud" },
        { name: "Firebase", icon: "🔥", category: "Backend" }
    ];

    // Damco differentiators
    const differentiators = [
        {
            title: "Full-stack development",
            description: "Experienced cross-functional resources skilled in various technologies that strive to accelerate mobile application development and shorten time to market",
            icon: <Code className="w-8 h-8" />,
            highlight: "End-to-end solutions"
        },
        {
            title: "24*7 Client Assistance",
            description: "Availability of assistance as per the client's time zone and post-deployment support with a dedicated project manager",
            icon: <Clock className="w-8 h-8" />,
            highlight: "Round-the-clock support"
        },
        {
            title: "Flexible Engagement Options",
            description: "Tailor-made engagement plans to fit every small or big need with 100% scalability of technology resources",
            icon: <Settings className="w-8 h-8" />,
            highlight: "Scalable solutions"
        },
        {
            title: "CoE Delivery Model",
            description: "Centers of Excellence in assorted technologies to facilitate the delivery of custom application development with best practices",
            icon: <Award className="w-8 h-8" />,
            highlight: "Excellence-driven approach"
        },
        {
            title: "Agile Development Approach",
            description: "Rapid project delivery with seamless communication between all stakeholders and solid documentation for training and support",
            icon: <Zap className="w-8 h-8" />,
            highlight: "Agile methodology"
        },
        {
            title: "27+ years of Experience",
            description: "Two decades plus experience in delivering bespoke IT services and solutions across industries and business sizes",
            icon: <Star className="w-8 h-8" />,
            highlight: "Proven expertise"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, heroSlides.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOfferingIndex((prev) => (prev + 1) % offerings.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [offerings.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentUseCaseIndex((prev) => (prev + 1) % useCases.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [useCases.length]);

    return (
        <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.1)_50%,transparent_75%)]" />
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* Hero Section with Advanced Slider */}
            <section className="relative min-h-screen flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img
                            src={heroSlides[currentSlide].image}
                            alt="Mobile Development"
                            className="w-full h-full object-cover"
                            style={{ filter: 'brightness(0.4) contrast(1.2)' }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient} opacity-60`} />
                    </motion.div>
                </AnimatePresence>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, y: -50, rotateX: 30 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.h1 
                                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {heroSlides[currentSlide].title}
                                </motion.h1>
                                
                                <motion.h2 
                                    className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {heroSlides[currentSlide].subtitle}
                                </motion.h2>
                                
                                <motion.p 
                                    className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-4xl mx-auto"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    {heroSlides[currentSlide].description}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>

                        {/* CTA Buttons */}
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.button
                                className="group relative bg-gradient-to-r from-orange-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Speak to Us
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <motion.button
                                className="group border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Services
                                <motion.span
                                    className="inline-block ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Slider Controls */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    
                    <div className="flex space-x-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'bg-orange-400 scale-125' : 'bg-white/40 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                    
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                    
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all ml-4"
                    >
                        {isAutoPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                    </button>
                </div>
            </section> 
           {/* Our Offerings Section with 3D Carousel */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Offerings</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Move Faster With the Trusted Mobile Application Development Company
                        </p>
                    </motion.div>

                    {/* 3D Carousel for Offerings */}
                    <div className="relative h-[600px] perspective-1000">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {offerings.map((offering, index) => {
                                const angle = (index - currentOfferingIndex) * (360 / offerings.length);
                                const isActive = index === currentOfferingIndex;
                                const isVisible = Math.abs(index - currentOfferingIndex) <= 2 || 
                                                Math.abs(index - currentOfferingIndex) >= offerings.length - 2;

                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute w-80 h-96 ${isVisible ? 'block' : 'hidden'}`}
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(400px)`,
                                            transformStyle: 'preserve-3d'
                                        }}
                                        animate={{
                                            rotateY: angle,
                                            scale: isActive ? 1.1 : 0.8,
                                            opacity: isActive ? 1 : 0.6
                                        }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                    >
                                        <div className={`w-full h-full bg-gradient-to-br ${offering.color} rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/20 transform-gpu`}>
                                            <div className="flex flex-col h-full">
                                                <div className="flex items-center mb-6">
                                                    <div className="p-3 bg-white/20 rounded-2xl mr-4">
                                                        {offering.icon}
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white">{offering.title}</h3>
                                                </div>
                                                
                                                <p className="text-white/90 text-sm leading-relaxed mb-6 flex-grow">
                                                    {offering.description}
                                                </p>
                                                
                                                <div className="space-y-2">
                                                    {offering.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center text-white/80 text-sm">
                                                            <Check className="w-4 h-4 mr-2 text-green-300" />
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Carousel Controls */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                            <button
                                onClick={() => setCurrentOfferingIndex((prev) => (prev - 1 + offerings.length) % offerings.length)}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            
                            <div className="flex space-x-2">
                                {offerings.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentOfferingIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentOfferingIndex ? 'bg-orange-400 scale-125' : 'bg-white/40 hover:bg-white/70'
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            <button
                                onClick={() => setCurrentOfferingIndex((prev) => (prev + 1) % offerings.length)}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Benefits Section with Animated Metrics */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Business <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Benefits</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Applications with effective strategy bring in a host of benefits for the business
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -10,
                                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                                }}
                                onHoverStart={() => setHoveredCard(index)}
                                onHoverEnd={() => setHoveredCard(null)}
                            >
                                <div className="text-center">
                                    <motion.div 
                                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl mb-6 text-white"
                                        animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {benefit.icon}
                                    </motion.div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                        {benefit.description}
                                    </p>
                                    
                                    <div className="border-t border-white/20 pt-6">
                                        <motion.div 
                                            className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            {benefit.metric}
                                        </motion.div>
                                        <p className="text-gray-400 text-sm">{benefit.metricLabel}</p>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Use Cases with Interactive Cards */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Industry <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Use Cases</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Damco's mobile application development services have enabled countless businesses to gain the required exposure, awareness and returns
                        </p>
                    </motion.div>

                    {/* Featured Use Case */}
                    <div className="mb-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentUseCaseIndex}
                                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
                                initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="relative h-80 lg:h-auto">
                                        <img
                                            src={useCases[currentUseCaseIndex].image}
                                            alt={useCases[currentUseCaseIndex].industry}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-transparent" />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                                                {useCases[currentUseCaseIndex].industry}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                            {useCases[currentUseCaseIndex].title}
                                        </h3>
                                        
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                            {useCases[currentUseCaseIndex].description}
                                        </p>
                                        
                                        <div className="mb-8">
                                            <h4 className="text-white font-semibold mb-4">Technologies Used:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {useCases[currentUseCaseIndex].technologies.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm rounded-full">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-white font-semibold mb-4">Key Results:</h4>
                                            <div className="space-y-2">
                                                {useCases[currentUseCaseIndex].results.map((result, idx) => (
                                                    <div key={idx} className="flex items-center text-gray-300">
                                                        <Check className="w-5 h-5 mr-3 text-green-400" />
                                                        {result}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                                    index === currentUseCaseIndex ? 'border-orange-400 scale-105' : 'border-white/20 hover:border-white/40'
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                onClick={() => setCurrentUseCaseIndex(index)}
                            >
                                <div className="relative h-48">
                                    <img
                                        src={useCase.image}
                                        alt={useCase.industry}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <h4 className="text-white font-bold text-lg">{useCase.industry}</h4>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h5 className="text-white font-semibold mb-2">{useCase.title}</h5>
                                    <p className="text-gray-400 text-sm line-clamp-3">{useCase.description}</p>
                                </div>

                                {index === currentUseCaseIndex && (
                                    <motion.div
                                        className="absolute inset-0 border-2 border-orange-400 rounded-2xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section with Animated Icons */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stack</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Cutting-edge technologies powering our mobile solutions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 text-center"
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.1, 
                                    y: -10,
                                    rotateY: 10
                                }}
                            >
                                <motion.div 
                                    className="text-4xl mb-4"
                                    animate={{ 
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.2
                                    }}
                                >
                                    {tech.icon}
                                </motion.div>
                                
                                <h4 className="text-white font-semibold text-sm mb-2">{tech.name}</h4>
                                <p className="text-gray-400 text-xs">{tech.category}</p>

                                {/* Hover Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>    
        {/* Damco Differentiators Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Damco <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Differentiators</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Enabling businesses to excel with our time-tested custom mobile application development services
                        </p>
                    </motion.div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center mb-12">
                        {differentiators.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all duration-300 ${
                                    activeTab === index
                                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}
                            >
                                {differentiators[index].title.split(' ')[0]}
                            </button>
                        ))}
                    </div>

                    {/* Active Differentiator Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="max-w-4xl mx-auto"
                            initial={{ opacity: 0, x: 100, rotateY: -30 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            exit={{ opacity: 0, x: -100, rotateY: 30 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center mb-6">
                                            <div className="p-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl mr-6">
                                                {differentiators[activeTab].icon}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-white mb-2">
                                                    {differentiators[activeTab].title}
                                                </h3>
                                                <span className="px-4 py-1 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-sm rounded-full">
                                                    {differentiators[activeTab].highlight}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {differentiators[activeTab].description}
                                        </p>
                                    </div>
                                    
                                    <div className="relative">
                                        <motion.div
                                            className="w-full h-64 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center"
                                            animate={{ 
                                                scale: [1, 1.05, 1],
                                                rotate: [0, 2, -2, 0]
                                            }}
                                            transition={{ 
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <motion.div
                                                className="text-8xl"
                                                animate={{ 
                                                    rotateY: [0, 360],
                                                    scale: [1, 1.2, 1]
                                                }}
                                                transition={{ 
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                {differentiators[activeTab].icon}
                                            </motion.div>
                                        </motion.div>
                                        
                                        {/* Floating Elements */}
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-2 h-2 bg-orange-400 rounded-full"
                                                style={{
                                                    left: `${20 + i * 15}%`,
                                                    top: `${20 + (i % 2) * 60}%`
                                                }}
                                                animate={{
                                                    y: [0, -20, 0],
                                                    opacity: [0.3, 1, 0.3]
                                                }}
                                                transition={{
                                                    duration: 2 + i * 0.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.3
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* All Differentiators Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {differentiators.map((diff, index) => (
                            <motion.div
                                key={index}
                                className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 cursor-pointer ${
                                    activeTab === index ? 'border-orange-400 scale-105' : 'border-white/20 hover:border-white/40'
                                }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl mr-4">
                                        {diff.icon}
                                    </div>
                                    <h4 className="text-white font-bold text-lg">{diff.title}</h4>
                                </div>
                                
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {diff.description.substring(0, 100)}...
                                </p>
                                
                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-pink-400/20 text-orange-300 text-xs rounded-full">
                                    {diff.highlight}
                                </span>

                                {activeTab === index && (
                                    <motion.div
                                        className="absolute inset-0 border-2 border-orange-400 rounded-2xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Ready to Transform Your Business with 
                            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"> Mobile Innovation</span>?
                        </motion.h2>
                        
                        <motion.p 
                            className="text-xl text-gray-300 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Let's design the perfect mobile solution for your business needs. 
                            Our experts are ready to bring your vision to life with cutting-edge technology and exceptional user experiences.
                        </motion.p>
                        
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                className="group relative bg-gradient-to-r from-orange-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <motion.button
                                className="group border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Schedule Consultation
                                <motion.span
                                    className="inline-block ml-2"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div 
                            className="mt-12 pt-8 border-t border-white/20"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                {[
                                    { number: "27+", label: "Years Experience" },
                                    { number: "500+", label: "Projects Delivered" },
                                    { number: "50+", label: "Countries Served" },
                                    { number: "99%", label: "Client Satisfaction" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <motion.button
                className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-2xl z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <ArrowRight className="w-6 h-6 transform -rotate-90" />
            </motion.button>
        </div>
    );
};