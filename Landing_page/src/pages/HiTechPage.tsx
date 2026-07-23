import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { 
    Cpu, Smartphone, Cloud, Database, Zap, Shield, CheckCircle, ArrowRight, 
    Sparkles, Users, TrendingUp, Mail, Phone, User, Award, Settings, Code,
    Rocket, Target, Layers, GitBranch, Box, Briefcase, ChevronRight, ChevronLeft, Clock
} from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';

const HiTechPage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [activeTab, setActiveTab] = useState(0);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    const heroTexts = ["Innovative Technology Solutions", "Digital Transformation", "Future-Ready Systems"];
    
    const backgroundImages = [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&auto=format&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&auto=format&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&auto=format&q=80'
    ];

    const services = [
        {
            title: "Product Engineering Services",
            icon: <Code className="w-8 h-8" />,
            description: "Optimize R&D costs, speed up time-to-market, and boost revenue through increased agility and efficiency.",
            features: [
                "Product Engineering Consulting",
                "Product/Platform Development", 
                "Product Modernization",
                "Product Testing",
                "Software Maintenance",
                "DevOps Services"
            ],
            color: "from-blue-600 to-cyan-600",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&auto=format&q=80",
            link: "#contact-form"
        },
        {
            title: "Cloud Migration",
            icon: <Cloud className="w-8 h-8" />,
            description: "Rapid migration of applications to hybrid/public/private cloud with deep experience in AWS, Azure, Google Cloud.",
            features: [
                "Cloud Migration Consulting",
                "AWS & Azure Expertise",
                "Hybrid Cloud Solutions",
                "Cloud Application Support",
                "Zero Business Impact",
                "Complete Implementation"
            ],
            color: "from-purple-600 to-pink-600",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/services"
        },
        {
            title: "Mobility Solutions",
            icon: <Smartphone className="w-8 h-8" />,
            description: "Mobility solutions for seamless information access, cloud computing, and enhanced user experience.",
            features: [
                "iOS & Android Development",
                "Cross-Platform Apps",
                "Mobile-First Design",
                "Cloud Integration",
                "Enterprise Mobility",
                "App Modernization"
            ],
            color: "from-indigo-600 to-blue-600",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/services"
        },
        {
            title: "Digital Services",
            icon: <TrendingUp className="w-8 h-8" />,
            description: "Interactive user experience, analytics that transforms data into actions, and omni-channel integrations.",
            features: [
                "Marketing Automation",
                "Website/App Development",
                "UI/UX Design",
                "CRM Solutions",
                "Data Analytics",
                "Customer Experience"
            ],
            color: "from-cyan-600 to-teal-600",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/services"
        },
        {
            title: "Emerging Technologies",
            icon: <Zap className="w-8 h-8" />,
            description: "Strategy, architecture design, and implementation for AI, Blockchain, RPA, and IoT solutions.",
            features: [
                "AI & Machine Learning",
                "Blockchain Development",
                "RPA Automation",
                "IoT Solutions",
                "NLP & Image Analytics",
                "Virtual Assistants"
            ],
            color: "from-orange-600 to-red-600",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format&q=80",
            link: "#contact-form"
        },
        {
            title: "Virtual CTO & On-Demand Developers",
            icon: <Users className="w-8 h-8" />,
            description: "CTO consultation and on-demand resources across wide range of technologies for critical project phases.",
            features: [
                "CTO as a Service",
                "Technology Consulting",
                "On-Demand Developers",
                "Team Augmentation",
                "MVP Development",
                "Sprint Zero Workshop"
            ],
            color: "from-violet-600 to-purple-600",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=80",
            link: "/hire-developers"
        }
    ];

    const successStories = [
        {
            title: "Optimized Operational Expense",
            description: "Dynamic resource pool that could be scaled up or down with tactical forecasting strategy for a Fintech client.",
            results: ["Cost Optimization", "Scalable Resources", "Repeatable Results"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80",
            gradient: "from-blue-600 to-purple-600"
        },
        {
            title: "Accelerated Platform Development",
            description: "Asset manager selection platform with proprietary skill and factor analysis model for high-performance.",
            results: ["Fast Development", "Risk Minimization", "High Performance"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
            gradient: "from-purple-600 to-pink-600"
        },
        {
            title: "Mobile App Development",
            description: "Custom mobile app within weeks utilizing on-demand framework for logistics with AI-powered field service.",
            results: ["Rapid Development", "AI Integration", "Automation"],
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=80",
            gradient: "from-cyan-600 to-blue-600"
        },
        {
            title: "Rapid App Modernization",
            description: "Accelerated cloud development with 'follow-the-sun' approach, rolled out 6-weeks earlier than anticipated.",
            results: ["6 Weeks Early", "Follow-the-Sun", "Cloud Migration"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80",
            gradient: "from-indigo-600 to-purple-600"
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
        const bgInterval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(bgInterval);
    }, []);

    useEffect(() => {
        const serviceInterval = setInterval(() => {
            setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        }, 6000);
        return () => clearInterval(serviceInterval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <SEO
                title="Hi-Tech Solutions | Technology Innovation & Digital Transformation"
                description="Cutting-edge technology solutions for hi-tech companies. Software development, cloud solutions, AI/ML, and digital transformation services."
                keywords="hi-tech solutions, technology innovation, software development, cloud computing, AI ML, digital transformation, tech consulting"
                canonicalUrl="/industries/hi-tech"
            />
            <SleekHeader />

            <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">

                {/* Hero Section - Glassmorphism with Changing Background */}
                <section className="relative h-screen flex items-center pt-20 overflow-hidden">
                    {/* Animated Background Images */}
                    <div className="absolute inset-0">
                        {backgroundImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    opacity: index === currentBgIndex ? 1 : 0,
                                    scale: index === currentBgIndex ? 1.05 : 1
                                }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        ))}
                        
                        {/* Gradient Overlay - Lighter for better image visibility */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/35 to-indigo-900/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        
                        {/* Animated Floating Elements - Reduced opacity */}
                        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Glassmorphism Badge */}
                                <motion.div 
                                    className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xl border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-6 shadow-lg"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                                >
                                    <Sparkles className="w-4 h-4 animate-pulse" />
                                    Hi-Tech Solutions
                                </motion.div>

                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                                    {displayedText}
                                    <span className="animate-pulse text-blue-400">|</span>
                                </h1>

                                <motion.p 
                                    className="text-sm md:text-base text-white/90 leading-relaxed mb-4 max-w-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Empowering hi-tech companies with cutting-edge software solutions and cloud infrastructure.
                                </motion.p>

                                <motion.div 
                                    className="flex flex-wrap gap-4 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <motion.button 
                                        onClick={() => window.location.href = '#contact-form'}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="flex items-center gap-2">
                                            Get Started
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </motion.button>
                                </motion.div>

                                {/* Stats Cards - Glassmorphism */}
                                <motion.div 
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    {[
                                        { icon: <Rocket className="w-5 h-5" />, value: "300+", label: "Tech Projects" },
                                        { icon: <Users className="w-5 h-5" />, value: "150+", label: "Tech Clients" },
                                        { icon: <Award className="w-5 h-5" />, value: "6+", label: "Years Experience" },
                                        { icon: <Target className="w-5 h-5" />, value: "98%", label: "Success Rate" }
                                    ].map((stat, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/50 transition-all"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1 + index * 0.1 }}
                                            whileHover={{ y: -3 }}
                                        >
                                            <div className="text-blue-300 mb-2">{stat.icon}</div>
                                            <div className="text-xl font-bold text-white">{stat.value}</div>
                                            <div className="text-xs text-blue-200/80">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Right Side - Floating Glassmorphism Cards */}
                            <motion.div
                                className="hidden lg:block relative"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <Code className="w-8 h-8" />, title: "Product Engineering", color: "from-blue-600 to-blue-500" },
                                        { icon: <Cloud className="w-8 h-8" />, title: "Cloud Migration", color: "from-purple-600 to-purple-500" },
                                        { icon: <Smartphone className="w-8 h-8" />, title: "Mobility Solutions", color: "from-blue-700 to-purple-600" },
                                        { icon: <Zap className="w-8 h-8" />, title: "Emerging Tech", color: "from-purple-700 to-blue-600" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-2xl"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + index * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                        >
                                            <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg text-white inline-block mb-3`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* About Section - Minimal White Professional */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            className="max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Technology services tailored for{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Hi-Tech Players
                                </span>
                            </h2>
                            
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Hi-Tech players are witnessing massive transformation, attributed to advances in technology that are reimagining business models and opening clients to several new providers each day. Compounded by speeding technology churn, competition in the Hi-Tech industry is only adding up, making continuous innovation a survival strategy.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    With our customized solutions, we help the Hi-Tech segment to deliver business value, gain a sustainable advantage and increase operational efficiency. Our comprehensive solutions have been developed by distilling decades of industry experience across a variety of sectors.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Catalysed by the Centre of Excellence delivery model, we follow a holistic approach to let clients ace novel opportunities, tap diverse markets, and deliver a consistent user experience.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section - 3D Carousel with Glassmorphism */}
                <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Digital Offerings for{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Hi-Tech Industry
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Technology solutions and services to support innovation
                            </p>
                        </motion.div>

                        {/* 3D Carousel */}
                        <div className="relative max-w-6xl mx-auto">
                            <div className="flex items-center justify-center gap-6">
                                <button 
                                    onClick={() => setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length)}
                                    className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl z-20"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                </button>

                                <div className="relative w-full max-w-4xl h-[550px] perspective-1000">
                                    <AnimatePresence mode="wait">
                                        {services.map((service, index) => {
                                            const offset = (index - currentServiceIndex + services.length) % services.length;
                                            const isActive = offset === 0;
                                            const isNext = offset === 1;
                                            const isPrev = offset === services.length - 1;

                                            if (!isActive && !isNext && !isPrev) return null;

                                            return (
                                                <motion.div
                                                    key={index}
                                                    className="absolute inset-0"
                                                    initial={false}
                                                    animate={{
                                                        x: isActive ? 0 : isNext ? 300 : -300,
                                                        scale: isActive ? 1 : 0.85,
                                                        opacity: isActive ? 1 : 0.4,
                                                        rotateY: isActive ? 0 : isNext ? 25 : -25,
                                                        zIndex: isActive ? 10 : 0
                                                    }}
                                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                                    style={{ transformStyle: 'preserve-3d' }}
                                                >
                                                    {/* Glassmorphism Card */}
                                                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-full">
                                                        {/* Header with Image - No gradient overlay */}
                                                        <div className="relative h-56">
                                                            <img 
                                                                src={service.image} 
                                                                alt={service.title} 
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-black/20" />
                                                            
                                                            {/* Icon */}
                                                            <div className="absolute top-6 left-6">
                                                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-gray-200">
                                                                    <div className="text-blue-600">
                                                                        {service.icon}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Title */}
                                                            <div className="absolute bottom-6 left-6 right-6">
                                                                <h3 className="text-3xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                                                            </div>
                                                        </div>

                                                        {/* Content */}
                                                        <div className="p-8">
                                                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                                                {service.description}
                                                            </p>

                                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                                {service.features.map((feature, idx) => (
                                                                    <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                                                                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                                        <span>{feature}</span>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            <div className="flex justify-center">
                                                                <button 
                                                                    onClick={() => window.location.href = service.link}
                                                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg"
                                                                >
                                                                    Learn More
                                                                    <ChevronRight className="w-5 h-5" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </AnimatePresence>
                                </div>

                                <button 
                                    onClick={() => setCurrentServiceIndex((prev) => (prev + 1) % services.length)}
                                    className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl z-20"
                                >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                </button>
                            </div>

                            {/* Carousel Indicators */}
                            <div className="flex justify-center gap-2 mt-8">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentServiceIndex(index)}
                                        className={`h-2 rounded-full transition-all ${
                                            index === currentServiceIndex ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600' : 'w-2 bg-blue-200'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories - Image Overlay Cards */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Success Stories
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {successStories.map((story, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-white border border-gray-200"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {/* Background Image */}
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Dark Overlay - No gradient colors */}
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all" />
                                    
                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <h3 className="text-2xl font-bold text-white mb-3">{story.title}</h3>
                                        <p className="text-white/90 text-sm mb-4 leading-relaxed">
                                            {story.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {story.results.map((result, idx) => (
                                                <span key={idx} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/30">
                                                    {result}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Differentiators - Neumorphism Style */}
                <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Damco{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Differentiators
                                </span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { icon: <Layers className="w-6 h-6" />, title: "Full-stack Development", desc: "Deep expertise in cloud platforms, web technologies, and diverse industry operations" },
                                { icon: <Clock className="w-6 h-6" />, title: "Uninterrupted Delivery", desc: "100% operational processes meeting highest quality standards on time" },
                                { icon: <Users className="w-6 h-6" />, title: "24*7 Client Assistance", desc: "Availability as per client time zone with dedicated project manager" },
                                { icon: <Zap className="w-6 h-6" />, title: "Agile Development", desc: "Rapid delivery with seamless communication and solid documentation" },
                                { icon: <Settings className="w-6 h-6" />, title: "Flexible Engagement", desc: "Tailor-made plans with 100% scalability of technology resources" },
                                { icon: <Target className="w-6 h-6" />, title: "CoE Delivery Model", desc: "Centres of Excellence in assorted technologies with best practices" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl text-white inline-block mb-4 shadow-lg">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Experience Highlight - Material Design */}
                        <motion.div
                            className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Award className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    6+ Years
                                </h3>
                                <p className="text-gray-600">
                                    of Experience in delivering cutting-edge IT services and technology solutions to the Hi-Tech industry
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Section - Clean White Design */}
                <section id="contact-form" className="py-16 relative bg-gray-900">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Ready to Start Your <span className="text-blue-500">Project</span>?
                                </h2>
                                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                                    Let's discuss your requirements and create something amazing together.
                                </p>
                            </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="bg-white rounded-2xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+1 (555) 123-4567"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                                            <option>Product Engineering</option>
                                            <option>Cloud Migration</option>
                                            <option>Mobility Solutions</option>
                                            <option>Digital Services</option>
                                            <option>Emerging Technologies</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                                        <textarea
                                            placeholder="Tell us about your project..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="p-3 bg-blue-600 rounded-lg mr-4">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Email</h4>
                                                <p className="text-gray-300">info@exytex.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="p-3 bg-blue-600 rounded-lg mr-4">
                                                <Phone className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Phone</h4>
                                                <p className="text-gray-300">+92 309 5930315</p>
                                                <p className="text-gray-300">+44 7466 109725</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="p-3 bg-blue-600 rounded-lg mr-4">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Office</h4>
                                                <p className="text-gray-300">Minaar Rd, Lala Rukh St, Wah Cantt, 47040</p>
                                                <p className="text-gray-300">Punjab, Pakistan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                    <h3 className="text-2xl font-bold text-white mb-4">Why Choose Exytex?</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "6+ Years Technology Experience",
                                            "Expert Development Team",
                                            "Agile Development Process",
                                            "24/7 Support Available",
                                            "Proven Track Record",
                                            "Flexible Engagement Models"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center text-gray-300">
                                                <CheckCircle className="w-5 h-5 mr-3 text-blue-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>

            <ElegantFooter />
        </>
    );
};

export default HiTechPage;
