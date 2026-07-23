import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    Rocket, Code, Smartphone, Palette, Search, Users, TrendingUp, 
    Award, Star, ChevronRight, Play, CheckCircle, ArrowRight,
    Globe, Zap, Target, BarChart3, Layers, Shield, Clock, 
    MousePointer, Sparkles, Eye, Cpu, Database, Settings
} from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

// 3D Carousel Component
const Carousel3D: React.FC<{ items: any[]; activeIndex: number; onItemClick: (index: number) => void }> = ({ 
    items, 
    activeIndex, 
    onItemClick 
}) => {
    return (
        <div className="relative h-96 flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full preserve-3d">
                {items.map((item, index) => {
                    const angle = (index - activeIndex) * (360 / items.length);
                    const isActive = index === activeIndex;
                    const distance = Math.abs(index - activeIndex);
                    const scale = isActive ? 1 : Math.max(0.7, 1 - distance * 0.1);
                    const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.2);
                    
                    return (
                        <motion.div
                            key={index}
                            className="absolute inset-0 cursor-pointer"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(200px) scale(${scale})`,
                                opacity,
                                zIndex: isActive ? 10 : 5 - distance
                            }}
                            animate={{
                                transform: `rotateY(${angle}deg) translateZ(200px) scale(${scale})`,
                                opacity
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            onClick={() => onItemClick(index)}
                            whileHover={{ scale: scale * 1.05 }}
                        >
                            <div className={`
                                h-full glass-card p-8 
                                ${isActive ? 'pulse-glow' : ''}
                                transition-all duration-500
                            `}>
                                <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6"
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

// Floating Elements Component
const FloatingElements: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

const DigitalAgencyPage: React.FC = () => {
    useSmoothScroll();
    
    const [activeService, setActiveService] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const services = [
        {
            title: "Web & Mobile Development",
            icon: <Code className="w-8 h-8" />,
            color: "from-blue-600 to-blue-700",
            description: "Complete digital solutions from concept to deployment",
            features: [
                "Tech Consulting & Strategy",
                "Frontend Development",
                "JavaScript Frameworks",
                "Landing Page Development",
                "Email Development",
                "Enterprise Mobility Apps",
                "iOS & Android Development",
                "Hybrid Applications",
                "RIA Development",
                "UI/UX Design",
                "Responsive Web Design",
                "Performance Optimization"
            ],
            stats: { value: "500+", label: "Projects Delivered" },
            link: "/services"
        },
        {
            title: "Search Engine Optimization",
            icon: <Search className="w-8 h-8" />,
            color: "from-purple-600 to-purple-700",
            description: "Drive organic traffic and improve search rankings",
            features: [
                "SEO Audit & Analysis",
                "Keyword Research",
                "Competitive Analysis",
                "Backlinking Strategies",
                "Technical SEO",
                "Content Optimization",
                "Local SEO",
                "Google Analytics Setup",
                "GA4 Migration",
                "Performance Tracking"
            ],
            stats: { value: "300%", label: "Average Traffic Increase" },
            link: "/services"
        },
        {
            title: "CRM Strategy & Implementation",
            icon: <Users className="w-8 h-8" />,
            color: "from-blue-700 to-purple-700",
            description: "Streamline customer relationships and boost sales",
            features: [
                "CRM Launch & Setup",
                "Data Migration",
                "System Consolidation",
                "Salesforce Implementation",
                "MS Dynamics Integration",
                "Custom CRM Solutions",
                "Workflow Automation",
                "Training & Support"
            ],
            stats: { value: "85%", label: "Client Retention Rate" },
            link: "/#contact-form"
        },
        {
            title: "Marketing Technology",
            icon: <TrendingUp className="w-8 h-8" />,
            color: "from-purple-700 to-blue-700",
            description: "Advanced marketing automation and lead generation",
            features: [
                "Pardot Implementation",
                "HubSpot Setup",
                "Marketo Integration",
                "Marketing Automation",
                "Inbound Marketing",
                "Landing Page Design",
                "Persona Development",
                "Content Marketing",
                "Sales Funnel Development",
                "Lead Nurturing"
            ],
            stats: { value: "250%", label: "Lead Generation Boost" },
            link: "/services"
        }
    ];

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "On-Demand Resources",
            description: "Access skilled technology resources whenever you need them"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Domain Expertise",
            description: "Highly skilled professionals with specialized knowledge"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Cost Efficiency",
            description: "Reduce costs while maintaining high-quality deliverables"
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Expand Portfolio",
            description: "Add advanced services without increasing headcount"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Credibility Assured",
            description: "Maintain your agency's reputation with reliable delivery"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Faster Delivery",
            description: "Accelerate project timelines with expert resources"
        }
    ];

    const successStories = [
        {
            type: "Digital Agency",
            title: "Superior E-commerce Platform",
            description: "Delivered a cutting-edge e-commerce solution for a digital agency's retailer client, resulting in better engagement, visibility, and high conversion rates.",
            results: ["40% increase in conversion rates", "60% improvement in page load speed", "Enhanced user experience"],
            color: "from-blue-600 to-blue-700"
        },
        {
            type: "Creative Design Agency",
            title: "Integrated Business Systems",
            description: "Successfully integrated CRM, accounting, inventory, and project management systems for an agency serving a freight company.",
            results: ["Streamlined operations", "Reduced manual work by 70%", "Improved data accuracy"],
            color: "from-purple-600 to-purple-700"
        },
        {
            type: "Marketing Agency",
            title: "B2B Web Portal",
            description: "Built a cutting-edge B2B web portal for a wealth management company with comprehensive technical support.",
            results: ["Enhanced client engagement", "Automated reporting", "Scalable architecture"],
            color: "from-blue-700 to-purple-700"
        },
        {
            type: "MarTech Agency",
            title: "HIPAA Compliant Mobile App",
            description: "Developed and deployed a HIPAA & SEPA compliant mobile app for a healthcare provider's digital transformation.",
            results: ["100% compliance achieved", "Improved patient experience", "Secure data handling"],
            color: "from-purple-700 to-blue-700"
        }
    ];

    const partners = [
        { name: "Salesforce", logo: "🏆", status: "Gold Partner" },
        { name: "Microsoft", logo: "💎", status: "Gold Partner" },
        { name: "HubSpot", logo: "🚀", status: "Certified Partner" },
        { name: "Google", logo: "⭐", status: "Premier Partner" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
            <CursorFollower />
            <ScrollProgress />
            <SleekHeader />
            <FloatingElements />
            
            {/* Glassmorphism cursor follower */}
            <motion.div
                className="fixed w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-50 mix-blend-screen"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]" />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-transparent to-purple-900/80" />
                    </div>
                    
                    <div className="container mx-auto px-6 relative z-10 py-20">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <motion.div 
                                        className="inline-flex items-center gap-2 glass-button text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-8"
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
                                        <Rocket className="w-5 h-5" />
                                        Technology Partner for Digital Agencies
                                        <Sparkles className="w-4 h-4" />
                                    </motion.div>
                                    
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                                        The Go-To{' '}
                                        <span className="animated-gradient-text">
                                            Technology Partner
                                        </span>{' '}
                                        for Digital Agencies
                                    </h1>
                                    
                                    <div className="space-y-6 mb-10 text-gray-300">
                                        <motion.p 
                                            className="text-xl leading-relaxed"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            Looking to <span className="text-blue-400 font-semibold">accelerate your project deliveries</span>? 
                                            Want to expand your technology skills for new opportunities?
                                        </motion.p>
                                        <motion.p 
                                            className="text-xl leading-relaxed"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            Overcome your tech challenges with <span className="text-purple-400 font-semibold">Damco Digital</span> as your technology backbone.
                                        </motion.p>
                                    </div>
                                    
                                    <motion.div 
                                        className="flex flex-col sm:flex-row gap-6 mb-10"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    >
                                        <motion.button 
                                            onClick={() => window.location.href = '/#contact-form'}
                                            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden"
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <span className="relative flex items-center gap-2">
                                                Request a Free Quote
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </motion.button>
                                        <motion.button 
                                            onClick={() => window.location.href = '/our-work'}
                                            className="group glass-button text-white px-10 py-5 rounded-2xl font-semibold text-lg"
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="flex items-center gap-2">
                                                <Play className="w-5 h-5" />
                                                View Our Work
                                            </span>
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                                
                                {/* 3D Benefits Showcase */}
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <GlassCard className="p-10">
                                        <div className="grid grid-cols-2 gap-8">
                                            {benefits.slice(0, 4).map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="text-center group"
                                                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                                    transition={{ 
                                                        duration: 0.6, 
                                                        delay: 0.8 + index * 0.1,
                                                        type: "spring",
                                                        stiffness: 100
                                                    }}
                                                    whileHover={{ scale: 1.1, rotateY: 10 }}
                                                >
                                                    <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:pulse-glow transition-all duration-300">
                                                        <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
                                                            {benefit.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3D Services Carousel Section */}
                <section className="py-32 relative">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2 
                                className="text-4xl md:text-5xl font-bold text-white mb-6"
                                animate={{ 
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            >
                                Our Services <span className="animated-gradient-text">Offerings</span>
                            </motion.h2>
                            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
                                We deliver comprehensive technology-enabled solutions for your now and tomorrow.
                            </p>
                        </motion.div>

                        <div className="max-w-6xl mx-auto">
                            <Carousel3D 
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
                                                    <h3 className="text-2xl font-bold text-white">{services[activeService].title}</h3>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <span className={`text-4xl font-bold bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}>
                                                            {services[activeService].stats.value}
                                                        </span>
                                                        <span className="text-gray-400">{services[activeService].stats.label}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                                {services[activeService].description}
                                            </p>
                                            <motion.button 
                                                onClick={() => window.location.href = services[activeService].link}
                                                className={`bg-gradient-to-r ${services[activeService].color} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <span className="flex items-center gap-2">
                                                    Learn More About This Service
                                                    <ArrowRight className="w-5 h-5" />
                                                </span>
                                            </motion.button>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            {services[activeService].features.slice(0, 8).map((feature, idx) => (
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
                    </div>
                </section>  
              {/* Partners Section */}
                <section className="py-16 relative bg-slate-900/50">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Trusted Technology Partner for <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Brands</span>
                            </h2>
                            <p className="text-gray-300 text-lg">
                                We partner with the leading MarTech and Sales Enablement platforms to meet your client needs
                            </p>
                        </motion.div>

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
                                        <div className="text-6xl mb-4">{partner.logo}</div>
                                        <h3 className="text-white font-bold text-xl mb-2">{partner.name}</h3>
                                        <p className="text-blue-400 text-sm font-semibold mb-3">{partner.status}</p>
                                        <div className="mt-6">
                                            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50" />
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Why Agencies Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DAMCO</span> as their Technology Partner
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: <Zap className="w-8 h-8" />,
                                    title: "Agile Approach",
                                    description: "We understand the agency culture and recognize the need to be nimble and agile. Hence, we build quality solutions with speed and accuracy.",
                                    color: "from-blue-600 to-blue-700"
                                },
                                {
                                    icon: <TrendingUp className="w-8 h-8" />,
                                    title: "Drive Digital Maturity",
                                    description: "Our emerging tech prowess will help you refine your client's front-end digital experience and transform customer journeys.",
                                    color: "from-purple-600 to-purple-700"
                                },
                                {
                                    icon: <Award className="w-8 h-8" />,
                                    title: "We're Gold",
                                    description: "We are certified Salesforce and Microsoft Gold Partners offering dedicated integrations, solutions & services.",
                                    color: "from-blue-700 to-purple-700"
                                },
                                {
                                    icon: <Users className="w-8 h-8" />,
                                    title: "Onsite Project Management Support",
                                    description: "Our technical people work with you in real time to ensure delivery of short-term, quick turnaround projects.",
                                    color: "from-purple-700 to-blue-700"
                                },
                                {
                                    icon: <Star className="w-8 h-8" />,
                                    title: "Certified Specialists",
                                    description: "We have a team of 30+ certified experts who successfully delivered 100+ projects.",
                                    color: "from-blue-600 to-purple-600"
                                },
                                {
                                    icon: <Globe className="w-8 h-8" />,
                                    title: "Industry Recognition",
                                    description: "We attract top talent. This year, we have been recognized as a Great Place To Work® Certified.",
                                    color: "from-purple-600 to-blue-600"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                >
                                    <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories Section */}
                <section className="py-20 relative bg-slate-900/30">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Our Customer <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Real results for real agencies across different industries
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {successStories.map((story, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-500"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    <div className={`h-2 bg-gradient-to-r ${story.color}`} />
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`bg-gradient-to-r ${story.color} px-3 py-1 rounded-full text-white text-sm font-semibold`}>
                                                {story.type}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">{story.title}</h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{story.description}</p>
                                        <div className="space-y-2">
                                            {story.results.map((result, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-green-400 text-sm">
                                                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                                    <span>{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="max-w-5xl mx-auto relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20" />
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 text-center">
                                <motion.div 
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Rocket className="w-4 h-4" />
                                    Ready to Scale Your Agency?
                                </motion.div>
                                
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Transform Your Agency's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Capabilities</span>
                                </h2>
                                
                                <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Join hundreds of successful agencies who have accelerated their growth with our technology expertise. 
                                    Get access to on-demand resources, expand your service portfolio, and deliver exceptional results to your clients.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                    <motion.button 
                                        onClick={() => window.location.href = '/#contact-form'}
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
                                        onClick={() => window.location.href = '/#contact-form'}
                                        className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Schedule a Consultation
                                    </motion.button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                    {[
                                        { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", desc: "Round-the-clock assistance" },
                                        { icon: <Shield className="w-6 h-6" />, title: "Quality Assured", desc: "Maintain your reputation" },
                                        { icon: <Zap className="w-6 h-6" />, title: "Fast Delivery", desc: "Accelerated project timelines" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white/5 rounded-xl p-6 border border-white/10"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Footer */}
                <section className="py-16 relative border-t border-white/10">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                { value: "30+", label: "Certified Experts" },
                                { value: "100+", label: "Projects Completed" },
                                { value: "95%", label: "Client Satisfaction" },
                                { value: "24/7", label: "Support Available" }
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
                                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            
            <ElegantFooter />
            <FloatingActionButton />
        </div>
    );
};

export default DigitalAgencyPage;