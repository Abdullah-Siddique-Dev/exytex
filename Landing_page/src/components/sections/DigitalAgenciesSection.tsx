import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket, Code, Search, Users, TrendingUp, Award, Star, 
    ChevronRight, CheckCircle, ArrowRight, Globe, Zap, 
    Target, BarChart3, Layers, Shield, Clock, Sparkles,
    ChevronLeft, ExternalLink, Briefcase, HeadphonesIcon,
    Play, MousePointer, Eye, Cpu, Database, Settings
} from 'lucide-react';

// 3D Carousel Component for Services
const ServicesCarousel3D: React.FC<{ 
    items: any[]; 
    activeIndex: number; 
    onItemClick: (index: number) => void 
}> = ({ items, activeIndex, onItemClick }) => {
    return (
        <div className="relative h-80 flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full preserve-3d">
                {items.map((item, index) => {
                    const angle = (index - activeIndex) * (360 / items.length);
                    const isActive = index === activeIndex;
                    const distance = Math.abs(index - activeIndex);
                    const scale = isActive ? 1 : Math.max(0.8, 1 - distance * 0.1);
                    const opacity = isActive ? 1 : Math.max(0.4, 1 - distance * 0.2);
                    
                    return (
                        <motion.div
                            key={index}
                            className="absolute inset-0 cursor-pointer"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(180px) scale(${scale})`,
                                opacity,
                                zIndex: isActive ? 10 : 5 - distance
                            }}
                            animate={{
                                transform: `rotateY(${angle}deg) translateZ(180px) scale(${scale})`,
                                opacity
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            onClick={() => onItemClick(index)}
                            whileHover={{ scale: scale * 1.05 }}
                        >
                            <div className={`
                                h-full glass-card p-6 
                                ${isActive ? 'pulse-glow border-blue-400/50' : 'border-white/20'}
                                transition-all duration-500
                            `}>
                                <div className={`bg-gradient-to-r ${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4"
                                    >
                                        <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                                            <span>{item.stats?.value}</span>
                                            <span className="text-gray-400">{item.stats?.label}</span>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

// Glassmorphism Card Component
const GlassCard: React.FC<{ 
    children: React.ReactNode; 
    className?: string; 
    hover?: boolean;
}> = ({ children, className = "", hover = true }) => {
    return (
        <motion.div
            className={`glass-card ${className}`}
            whileHover={hover ? { scale: 1.02, y: -5 } : {}}
        >
            {children}
        </motion.div>
    );
};

// Floating Particles Component
const FloatingParticles: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [-15, 15, -15],
                        x: [-8, 8, -8],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

const DigitalAgenciesSection: React.FC = () => {
    const [activeService, setActiveService] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const backgroundImages = [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80',
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&q=80'
    ];

    const services = [
        {
            title: "Web & Mobile Development",
            icon: <Code className="w-6 h-6" />,
            color: "from-blue-600 to-blue-700",
            description: "Complete digital solutions from concept to deployment with cutting-edge technologies",
            features: [
                "Tech Consulting & Strategy", "Frontend Development", "JavaScript Frameworks",
                "Landing Page Development", "Email Development", "Enterprise Mobility Apps",
                "iOS & Android Development", "Hybrid Applications"
            ],
            stats: { value: "500+", label: "Projects Delivered" }
        },
        {
            title: "Search Engine Optimization",
            icon: <Search className="w-6 h-6" />,
            color: "from-purple-600 to-purple-700",
            description: "Drive organic traffic and improve search rankings with advanced SEO strategies",
            features: [
                "SEO Audit & Analysis", "Keyword Research", "Competitive Analysis",
                "Backlinking Strategies", "Technical SEO", "Content Optimization",
                "Local SEO", "Google Analytics Setup"
            ],
            stats: { value: "300%", label: "Average Traffic Increase" }
        },
        {
            title: "CRM Strategy & Implementation",
            icon: <Users className="w-6 h-6" />,
            color: "from-blue-700 to-purple-700",
            description: "Streamline customer relationships and boost sales with intelligent CRM solutions",
            features: [
                "CRM Launch & Setup", "Data Migration", "System Consolidation",
                "Salesforce Implementation", "MS Dynamics Integration", "Custom CRM Solutions",
                "Workflow Automation", "Training & Support"
            ],
            stats: { value: "85%", label: "Client Retention Rate" }
        },
        {
            title: "Marketing Technology",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "from-purple-700 to-blue-700",
            description: "Advanced marketing automation and lead generation with AI-powered insights",
            features: [
                "Pardot Implementation", "HubSpot Setup", "Marketo Integration",
                "Marketing Automation", "Inbound Marketing", "Landing Page Design",
                "Persona Development", "Content Marketing"
            ],
            stats: { value: "250%", label: "Lead Generation Boost" }
        }
    ];

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "On-Demand Resources",
            description: "Access skilled technology resources whenever you need them",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Domain Expertise", 
            description: "Highly skilled professionals with specialized knowledge",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Cost Efficiency",
            description: "Reduce costs while maintaining high-quality deliverables",
            gradient: "from-green-500/20 to-blue-500/20"
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Expand Portfolio",
            description: "Add advanced services without increasing headcount",
            gradient: "from-orange-500/20 to-red-500/20"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Credibility Assured",
            description: "Maintain your agency's reputation with reliable delivery",
            gradient: "from-teal-500/20 to-cyan-500/20"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Faster Delivery",
            description: "Accelerate project timelines with expert resources",
            gradient: "from-indigo-500/20 to-purple-500/20"
        }
    ];

    const successStories = [
        {
            type: "Digital Agency",
            title: "Superior E-commerce Platform",
            description: "Delivered a cutting-edge e-commerce solution for a digital agency's retailer client, resulting in better engagement, visibility, and high conversion rates.",
            results: ["40% increase in conversion rates", "60% improvement in page load speed", "Enhanced user experience"],
            color: "from-blue-600 to-blue-700",
            image: "🛒"
        },
        {
            type: "Creative Design Agency", 
            title: "Integrated Business Systems",
            description: "Successfully integrated CRM, accounting, inventory, and project management systems for an agency serving a freight company.",
            results: ["Streamlined operations", "Reduced manual work by 70%", "Improved data accuracy"],
            color: "from-purple-600 to-purple-700",
            image: "🎨"
        },
        {
            type: "Marketing Agency",
            title: "B2B Web Portal",
            description: "Built a cutting-edge B2B web portal for a wealth management company with comprehensive technical support.",
            results: ["Enhanced client engagement", "Automated reporting", "Scalable architecture"],
            color: "from-blue-700 to-purple-700",
            image: "📊"
        },
        {
            type: "MarTech Agency",
            title: "HIPAA Compliant Mobile App",
            description: "Developed and deployed a HIPAA & SEPA compliant mobile app for a healthcare provider's digital transformation.",
            results: ["100% compliance achieved", "Improved patient experience", "Secure data handling"],
            color: "from-purple-700 to-blue-700",
            image: "🏥"
        }
    ];

    const partners = [
        { name: "Salesforce", logo: "🏆", status: "Gold Partner", description: "CRM & Sales Automation" },
        { name: "Microsoft", logo: "💎", status: "Gold Partner", description: "Cloud & Enterprise Solutions" },
        { name: "HubSpot", logo: "🚀", status: "Certified Partner", description: "Inbound Marketing" },
        { name: "Google", logo: "⭐", status: "Premier Partner", description: "Analytics & Advertising" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 4000);
        return () => clearInterval(bgInterval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden pt-20">
            {/* Changing Background Images */}
            <div className="absolute inset-0">
                {backgroundImages.map((image, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${image})` }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: index === currentBgIndex ? 0.3 : 0,
                            scale: index === currentBgIndex ? 1.1 : 1
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-purple-900/80" />
            </div>

            <FloatingParticles />
            
            {/* Glassmorphism cursor follower */}
            <motion.div
                className="fixed w-4 h-4 bg-blue-400/40 rounded-full pointer-events-none z-50 mix-blend-screen"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center py-20">
                {/* Hero Section - Left Aligned */}
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full mt-8">
                    <motion.div 
                        className="text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                            animate={{ 
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                    "0 0 20px rgba(59, 130, 246, 0.3)",
                                    "0 0 40px rgba(59, 130, 246, 0.5)",
                                    "0 0 20px rgba(59, 130, 246, 0.3)"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Rocket className="w-4 h-4" />
                            Technology Partner for Digital Agencies
                        </motion.div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            The Go-To{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Technology Partner
                            </span>{' '}
                            for Digital Agencies
                        </h1>
                        
                        <div className="space-y-4 mb-8 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                Looking to <span className="text-blue-400 font-semibold">accelerate your project deliveries</span>? 
                                Want to expand your technology skills for new opportunities?
                            </p>
                            <p className="text-lg leading-relaxed">
                                Overcome your tech challenges with <span className="text-purple-400 font-semibold">Damco Digital</span> as your technology backbone.
                            </p>
                        </div>
                        
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <motion.button 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request a Free Quote
                            </motion.button>
                            <motion.button 
                                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Our Work
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Benefits Cards */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-8">
                            <div className="grid grid-cols-2 gap-6">
                                {benefits.slice(0, 4).map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center group"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-white font-semibold text-sm mb-2">{benefit.title}</h3>
                                        <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="container mx-auto px-6 relative z-10 py-20">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Damco Digital</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Access on-demand resources, expand your service portfolio, and deliver exceptional results to your clients.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <GlassCard className="p-6 h-full text-center">
                                <div className={`bg-gradient-to-r ${benefit.gradient} backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-white/40 transition-all duration-300`}>
                                    <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-sm">{benefit.description}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-6 relative z-10 py-20 bg-slate-900/30">
                <motion.div 
                    className="mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Services <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Offerings</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            We deliver comprehensive technology-enabled solutions for your now and tomorrow.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <ServicesCarousel3D 
                            items={services}
                            activeIndex={activeService}
                            onItemClick={setActiveService}
                        />
                        
                        {/* Carousel Controls */}
                        <div className="flex justify-center items-center gap-6 mt-12">
                            <motion.button
                                className="glass-button p-3 rounded-full text-white"
                                onClick={() => setActiveService((prev) => (prev - 1 + services.length) % services.length)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.button>
                            
                            <div className="flex gap-3">
                                {services.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === activeService 
                                                ? 'bg-blue-400 pulse-glow' 
                                                : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                        onClick={() => setActiveService(index)}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    />
                                ))}
                            </div>
                            
                            <motion.button
                                className="glass-button p-3 rounded-full text-white"
                                onClick={() => setActiveService((prev) => (prev + 1) % services.length)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.button>
                        </div>

                        {/* Active Service Details */}
                        <motion.div
                            key={activeService}
                            className="mt-16"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <GlassCard className="p-10">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`bg-gradient-to-r ${services[activeService].color} p-4 rounded-2xl text-white`}>
                                                {services[activeService].icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{services[activeService].title}</h3>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className={`text-2xl font-bold bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}>
                                                        {services[activeService].stats.value}
                                                    </span>
                                                    <span className="text-gray-400 text-sm">{services[activeService].stats.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {services[activeService].description}
                                        </p>
                                        <motion.button 
                                            className={`bg-gradient-to-r ${services[activeService].color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Learn More About This Service
                                        </motion.button>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {services[activeService].features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="flex items-center gap-3 text-gray-300 text-sm glass-card p-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Partners Section */}
            <div className="container mx-auto px-6 relative z-10 py-20">
                <motion.div 
                    className="mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Trusted Technology Partner for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Brands</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            We partner with the leading MarTech and Sales Enablement platforms to meet your client needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, rotateY: -45 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -10,
                                    rotateY: 5,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                                }}
                            >
                                <GlassCard className="p-8 text-center h-full">
                                    <div className="text-4xl mb-3">{partner.logo}</div>
                                    <h3 className="text-white font-bold text-lg mb-2">{partner.name}</h3>
                                    <p className="text-blue-400 text-sm font-semibold mb-3">{partner.status}</p>
                                    <p className="text-gray-400 text-sm">{partner.description}</p>
                                    <div className="mt-6">
                                        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50" />
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Success Stories */}
            <div className="container mx-auto px-6 relative z-10 py-20 bg-slate-900/30">
                <motion.div 
                    className="mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Customer <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Real results for real agencies across different industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {successStories.map((story, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -10 }}
                            >
                                <GlassCard className="overflow-hidden h-full">
                                    <div className={`h-3 bg-gradient-to-r ${story.color}`} />
                                    <div className="p-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="text-4xl">{story.image}</div>
                                            <div className={`bg-gradient-to-r ${story.color} px-4 py-2 rounded-full text-white text-sm font-semibold`}>
                                                {story.type}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">{story.title}</h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{story.description}</p>
                                        <div className="space-y-4">
                                            {story.results.map((result, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    className="flex items-center gap-3 text-green-400"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                                    <span>{result}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <motion.button
                                            className={`mt-8 bg-gradient-to-r ${story.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Case Study
                                        </motion.button>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-6 relative z-10 py-20">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <GlassCard className="p-12 max-w-4xl mx-auto">
                        <motion.div 
                            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                            animate={{ 
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                    "0 0 20px rgba(59, 130, 246, 0.3)",
                                    "0 0 40px rgba(59, 130, 246, 0.5)",
                                    "0 0 20px rgba(59, 130, 246, 0.3)"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Rocket className="w-4 h-4" />
                            Ready to Scale Your Agency?
                        </motion.div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Transform Your Agency's{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Technology Capabilities
                            </span>
                        </h2>
                        
                        <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join hundreds of successful agencies who have accelerated their growth with our technology expertise. 
                            Get access to on-demand resources, expand your service portfolio, and deliver exceptional results to your clients.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center gap-2">
                                    Request a Free Quote
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </motion.button>
                            <motion.button 
                                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center gap-2">
                                    <HeadphonesIcon className="w-5 h-5" />
                                    Schedule a Consultation
                                </span>
                            </motion.button>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalAgenciesSection;