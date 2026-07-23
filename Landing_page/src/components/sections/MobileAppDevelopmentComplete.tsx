import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
    ChevronLeft, 
    ChevronRight, 
    ArrowRight, 
    Play, 
    Pause, 
    Check, 
    Zap, 
    Shield, 
    Globe, 
    Users, 
    TrendingUp, 
    Award, 
    Clock, 
    Target, 
    Code, 
    Layers, 
    Settings,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

export const MobileAppDevelopmentComplete: React.FC = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [offeringsSlide, setOfferingsSlide] = useState(0);
    const [benefitsSlide, setBenefitsSlide] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Mobile App Development',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const heroSlides = [
        {
            title: "Mobile Application Development Services",
            subtitle: "Enhance Business Efficiency With Enterprise Mobility Solutions",
            description: "Transform your business with cutting-edge mobile solutions that deliver exceptional user experiences and drive growth.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop&auto=format&q=80" // Mobile app development
        },
        {
            title: "Agile, New-Age Mobile Solutions",
            subtitle: "High-End Development for Your Business",
            description: "Delivering impeccable solutions that serve their purpose and provide seamless user experiences across all platforms.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&auto=format&q=80" // Mobile development workspace
        },
        {
            title: "Future-Ready Mobile Applications",
            subtitle: "Explore Newer Opportunities",
            description: "Our Mobile Centre of Excellence provides robust roadmap and strategy to develop applications across platforms.",
            image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1920&h=1080&fit=crop&auto=format&q=80" // Mobile app on phone
        }
    ];

    // Typewriter effects for current slide
    const heading = useTypewriter({ 
        text: heroSlides[currentSlide].title, 
        speed: 50 
    });
    const subtitle = useTypewriter({ 
        text: heroSlides[currentSlide].subtitle, 
        speed: 30,
        delay: heading.isComplete ? 200 : 0 
    });

    const offerings = [
        {
            title: "Mobile Application Consulting",
            description: "Our Center of Excellence brings years of experience in understanding requirements and providing strategic consultation to deliver market-winning mobile applications.",
            icon: <Users className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            features: ["Strategic Planning", "Market Analysis", "Technology Selection", "ROI Assessment"]
        },
        {
            title: "Mobile UI & UX Design",
            description: "Dedicated design experts create engaging and interactive application interfaces and user experiences to increase conversion, adoption, and engagement.",
            icon: <Layers className="w-8 h-8" />,
            color: "from-purple-500 to-pink-500",
            features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
        },
        {
            title: "Mobile Application Development",
            description: "As a trusted mobile application development company, we empower businesses with native and hybrid mobile applications, progressive web apps, and wearable software development.",
            icon: <Code className="w-8 h-8" />,
            color: "from-green-500 to-emerald-500",
            features: ["Native Development", "Hybrid Solutions", "PWA Development", "Cross-Platform"]
        },
        {
            title: "Mobile Application Modernization",
            description: "Revitalize outdated applications with our custom mobile development services that redesign, re-architect, and refactor code with modern features and technologies.",
            icon: <Settings className="w-8 h-8" />,
            color: "from-orange-500 to-red-500",
            features: ["Legacy Migration", "Code Refactoring", "Performance Optimization", "Feature Enhancement"]
        },
        {
            title: "Backend Development",
            description: "Strategic backend development services ensure quick and smooth data transfer and synchronization with secure mobile application infrastructure.",
            icon: <Shield className="w-8 h-8" />,
            color: "from-indigo-500 to-purple-500",
            features: ["API Development", "Database Design", "Cloud Integration", "Security Implementation"]
        },
        {
            title: "Web Companion Development",
            description: "Deliver seamless user experiences across platforms and operating systems by complementing mobile applications with responsive web applications and portals.",
            icon: <Globe className="w-8 h-8" />,
            color: "from-teal-500 to-blue-500",
            features: ["Responsive Design", "Cross-Platform Sync", "Web Portals", "Admin Dashboards"]
        },
        {
            title: "Mobile Application Integration",
            description: "Enable seamless integration with mobile backends, servers, and third-party software to ensure perfect synchronization and smooth functionality.",
            icon: <Zap className="w-8 h-8" />,
            color: "from-yellow-500 to-orange-500",
            features: ["API Integration", "Third-party Services", "Payment Gateways", "Analytics Tools"]
        },
        {
            title: "Mobile Application QA & Testing",
            description: "ISTQB-certified testing including functional, accessibility, load, performance, UX, and security testing to ensure mobile applications work perfectly under all conditions.",
            icon: <Target className="w-8 h-8" />,
            color: "from-pink-500 to-rose-500",
            features: ["Automated Testing", "Performance Testing", "Security Audits", "User Acceptance Testing"]
        },
        {
            title: "Maintenance and Support",
            description: "As a renowned custom mobile app development company, we keep business mobile applications running smoothly with routine maintenance and dedicated assistance.",
            icon: <Clock className="w-8 h-8" />,
            color: "from-cyan-500 to-blue-500",
            features: ["24/7 Support", "Regular Updates", "Bug Fixes", "Performance Monitoring"]
        }
    ];

    const benefits = [
        {
            title: "Efficiency",
            description: "Enterprise applications and mobile analytics significantly enhance employee productivity and operational efficiency.",
            icon: <TrendingUp className="w-12 h-12" />,
            metric: "85%",
            metricLabel: "Efficiency Increase"
        },
        {
            title: "Opportunities",
            description: "Leveraging mobility opens doors to next-generation m-commerce capabilities and new business opportunities.",
            icon: <Globe className="w-12 h-12" />,
            metric: "300%",
            metricLabel: "Revenue Growth"
        },
        {
            title: "Engagement",
            description: "Smart design-based digital experiences boost customer engagement and significantly enhance user retention.",
            icon: <Users className="w-12 h-12" />,
            metric: "92%",
            metricLabel: "User Retention"
        },
        {
            title: "Accuracy",
            description: "Mobile applications deliver enhanced data accuracy and reliability, strengthening business intelligence capabilities.",
            icon: <Target className="w-12 h-12" />,
            metric: "99.9%",
            metricLabel: "Data Accuracy"
        }
    ];

    const useCases = [
        {
            industry: "Hi-Tech",
            title: "Technology Solutions",
            description: "Supporting mobile application projects with our comprehensive resources, mobile center of excellence, time-tested frameworks, and proven accelerators.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            results: ["50% faster development", "Cross-platform compatibility", "Scalable architecture"],
            slug: "hi-tech"
        },
        {
            industry: "Insurance",
            title: "Policy Management Platform",
            description: "Developed a comprehensive mobile and web-based solution for a leading insurance firm to boost profitability by streamlining policy processes across platforms.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80", // Data analytics
            technologies: ["Native iOS", "Android", "Cloud Backend", "AI/ML"],
            results: ["40% process improvement", "Enhanced user experience", "Increased profitability"],
            slug: "insurance"
        },
        {
            industry: "Healthcare",
            title: "Telemedicine Application",
            description: "Built a comprehensive mobile application for a renowned healthcare chain, enabling patients to book appointments and consult directly with doctors via secure video conferencing.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format&q=80", // Medical technology
            technologies: ["WebRTC", "HIPAA Compliance", "Real-time Chat", "Payment Integration"],
            results: ["200% appointment increase", "Improved patient satisfaction", "Reduced wait times"],
            slug: "healthcare"
        },
        {
            industry: "e-Commerce",
            title: "Shopping Platform",
            description: "Developed a feature-rich mobile application and complementary web portal for an e-commerce company to streamline product ordering and enhance customer experience.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80", // E-commerce technology
            technologies: ["Progressive Web App", "Payment Gateway", "Inventory Management", "Analytics"],
            results: ["150% sales increase", "Better user engagement", "Streamlined operations"],
            slug: "ecommerce"
        },
        {
            industry: "Logistics",
            title: "Delivery Tracking System",
            description: "Created a sophisticated mobile solution for a delivery chain to track shipments throughout transit, featuring precise GPS location tracking and real-time updates.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&auto=format&q=80",
            technologies: ["GPS Tracking", "Real-time Updates", "Route Optimization", "IoT Integration"],
            results: ["30% delivery efficiency", "Real-time tracking", "Customer satisfaction"],
            slug: "logistics"
        },
        {
            industry: "OTT",
            title: "Media Streaming Platform",
            description: "Built an interactive media streaming application for an OTT platform to distribute content across their user base, featuring multiple user accounts and offline download capabilities.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format&q=80", // Server technology
            technologies: ["Video Streaming", "CDN Integration", "Offline Viewing", "Multi-device Sync"],
            results: ["500K+ active users", "High-quality streaming", "Multi-platform support"],
            slug: "ott"
        }
    ];

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

    const differentiators = [
        {
            title: "Full-Stack Development",
            description: "Experienced cross-functional teams skilled in diverse technologies that accelerate mobile application development and reduce time-to-market.",
            icon: <Code className="w-8 h-8" />,
            highlight: "End-to-end solutions"
        },
        {
            title: "24/7 Client Assistance",
            description: "Round-the-clock assistance aligned with client time zones, plus comprehensive post-deployment support with dedicated project management.",
            icon: <Clock className="w-8 h-8" />,
            highlight: "Round-the-clock support"
        },
        {
            title: "Flexible Engagement Options",
            description: "Customized engagement plans designed to meet diverse project needs with 100% scalable technology resources and flexible team structures.",
            icon: <Settings className="w-8 h-8" />,
            highlight: "Scalable solutions"
        },
        {
            title: "Center of Excellence Delivery Model",
            description: "Specialized Centers of Excellence across multiple technologies facilitate custom application development using industry best practices.",
            icon: <Award className="w-8 h-8" />,
            highlight: "Excellence-driven approach"
        },
        {
            title: "Agile Development Approach",
            description: "Rapid project delivery through seamless stakeholder communication, iterative development, and comprehensive documentation for training and support.",
            icon: <Zap className="w-8 h-8" />,
            highlight: "Agile methodology"
        },
        {
            title: "27+ Years of Experience",
            description: "Over two decades of proven expertise in delivering bespoke IT services and innovative solutions across diverse industries and business scales.",
            icon: <Award className="w-8 h-8" />,
            highlight: "Proven expertise"
        }
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, heroSlides.length]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success feedback
            setFormData({ name: '', email: '', phone: '', company: '', service: 'Mobile App Development', message: '' });
            
            // Show success message with better UX
            const successDiv = document.createElement('div');
            successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse';
            successDiv.textContent = '✅ Thank you! We will contact you soon.';
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                document.body.removeChild(successDiv);
            }, 5000);
            
        } catch (error) {
            // Error feedback
            const errorDiv = document.createElement('div');
            errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
            errorDiv.textContent = '❌ Something went wrong. Please try again.';
            document.body.appendChild(errorDiv);
            
            setTimeout(() => {
                document.body.removeChild(errorDiv);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="relative min-h-screen bg-gray-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-24 pb-20" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={heroSlides[currentSlide].image}
                            alt="Mobile Development"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/80" />
                    </motion.div>
                </AnimatePresence>

                <div className="container mx-auto px-6 relative z-10 mt-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center pt-8">
                        {/* Left Side - Text Content */}
                        <motion.div
                            key={currentSlide}
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1 
                                className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Professional Mobile App Development Services - iOS, Android & Cross-Platform Solutions
                            </motion.h1>
                            
                            <motion.h2 
                                className="text-sm md:text-base text-gray-200 mb-4 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {subtitle.displayText}
                                {heading.isComplete && !subtitle.isComplete && <span className="animate-pulse">|</span>}
                            </motion.h2>
                            
                            <motion.p 
                                className="text-sm text-gray-300 leading-relaxed mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                {heroSlides[currentSlide].description}
                            </motion.p>

                            <motion.div 
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <motion.button 
                                    className="group relative bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg hover:bg-blue-700 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact-form');
                                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <span className="flex items-center gap-2">
                                        Speak to Us
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </motion.button>

                                <motion.button 
                                    className="border-2 border-gray-400 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        const servicesSection = document.getElementById('offerings-section');
                                        servicesSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Explore Services
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Image Slideshow */}
                        <motion.div
                            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <img
                                        src={heroSlides[currentSlide].image}
                                        alt={`Mobile Development ${currentSlide + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {heroSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentSlide ? 'bg-blue-600 w-8' : 'bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Slider Controls - Bottom Center */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                    
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                        {isAutoPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                    </button>
                </div>
            </section>

            {/* Our Offerings Section - Carousel */}
            <section id="offerings-section" className="py-8 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Our <span className="text-blue-500">Offerings</span>
                        </h2>
                        <p className="text-base text-gray-300 max-w-3xl mx-auto">
                            Move Faster With the Trusted Mobile Application Development Company
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="overflow-hidden rounded-2xl">
                            <motion.div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${offeringsSlide * 100}%)` }}
                            >
                                {Array.from({ length: Math.ceil(offerings.length / 3) }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                                            {offerings.slice(slideIndex * 3, (slideIndex + 1) * 3).map((offering, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full cursor-pointer group"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    whileHover={{ 
                                                        scale: 1.05, 
                                                        y: -5,
                                                        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                                                    }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => {
                                                        // Add click handler for more details
                                                        console.log(`Clicked on ${offering.title}`);
                                                    }}
                                                >
                                                    <div className="flex items-center mb-4">
                                                        <motion.div 
                                                            className="p-2 bg-blue-600 rounded-lg mr-3 text-white group-hover:bg-blue-500 transition-colors"
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.5 }}
                                                        >
                                                            {offering.icon}
                                                        </motion.div>
                                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{offering.title}</h3>
                                                    </div>
                                                    
                                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                        {offering.description}
                                                    </p>
                                                    
                                                    <div className="space-y-2">
                                                        {offering.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-center text-gray-300 text-xs">
                                                                <Check className="w-3 h-3 mr-2 text-blue-400" />
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
                                onClick={() => setOfferingsSlide(Math.max(0, offeringsSlide - 1))}
                                className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all disabled:opacity-50"
                                disabled={offeringsSlide === 0}
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            
                            <div className="flex gap-2">
                                {Array.from({ length: Math.ceil(offerings.length / 3) }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setOfferingsSlide(index)}
                                        className={`h-2 rounded-full transition-all ${
                                            index === offeringsSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/40'
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            <button
                                onClick={() => setOfferingsSlide(Math.min(Math.ceil(offerings.length / 3) - 1, offeringsSlide + 1))}
                                className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all disabled:opacity-50"
                                disabled={offeringsSlide === Math.ceil(offerings.length / 3) - 1}
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Benefits Section - 3D Carousel */}
            <section id="benefits-section" className="py-8 relative bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                            Business <span className="text-blue-600">Benefits</span>
                        </h2>
                        <p className="text-base text-gray-600 max-w-3xl mx-auto">
                            Applications with effective strategy bring in a host of benefits for the business
                        </p>
                    </div>

                    {/* 3D Carousel */}
                    <div className="relative max-w-5xl mx-auto perspective-1000">
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
                                                    className="bg-gray-100 rounded-xl p-6 hover:scale-105 transition-all duration-300"
                                                    style={{
                                                        boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'
                                                    }}
                                                    initial={{ opacity: 0, rotateY: -20 }}
                                                    animate={{ opacity: 1, rotateY: 0 }}
                                                    transition={{ delay: index * 0.2 }}
                                                >
                                                    <div className="text-center">
                                                        <div 
                                                            className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-4 text-blue-600"
                                                            style={{
                                                                boxShadow: 'inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff'
                                                            }}
                                                        >
                                                            {benefit.icon}
                                                        </div>
                                                        
                                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                                        
                                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                            {benefit.description}
                                                        </p>
                                                        
                                                        <div className="border-t border-gray-300 pt-4">
                                                            <div className="text-2xl font-bold text-blue-600 mb-1">
                                                                {benefit.metric}
                                                            </div>
                                                            <p className="text-gray-500 text-xs">{benefit.metricLabel}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* 3D Carousel Controls */}
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

            {/* Industry Use Cases */}
            <section id="use-cases-section" className="py-8 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Industry <span className="text-blue-500">Use Cases</span>
                        </h2>
                        <p className="text-base text-gray-300 max-w-3xl mx-auto">
                            Exytex's mobile application development services have enabled countless businesses to gain the required exposure, awareness and returns
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-transform duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative h-48">
                                    <img
                                        src={useCase.image}
                                        alt={useCase.industry}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
                                            {useCase.industry}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h4 className="text-white font-bold text-lg mb-3">{useCase.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{useCase.description}</p>
                                    
                                    <div className="mb-4">
                                        <h5 className="text-white font-semibold mb-2 text-sm">Technologies:</h5>
                                        <div className="flex flex-wrap gap-1">
                                            {useCase.technologies.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h5 className="text-white font-semibold mb-2 text-sm">Results:</h5>
                                        <div className="space-y-1">
                                            {useCase.results.map((result, idx) => (
                                                <div key={idx} className="flex items-center text-gray-300 text-xs">
                                                    <Check className="w-3 h-3 mr-2 text-blue-500" />
                                                    {result}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <motion.button
                                        onClick={() => navigate(`/case-study/${useCase.slug}`)}
                                        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Read More
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-8 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Tech <span className="text-blue-500">Stack</span>
                        </h2>
                        <p className="text-base text-gray-300 max-w-3xl mx-auto">
                            Cutting-edge technologies powering our mobile solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:scale-110 transition-transform duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-4">{tech.icon}</div>
                                <h4 className="text-white font-semibold text-sm mb-2">{tech.name}</h4>
                                <p className="text-gray-400 text-xs">{tech.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Damco Differentiators Section */}
            <section className="py-8 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                            Exytex <span className="text-blue-500">Differentiators</span>
                        </h2>
                        <p className="text-base text-gray-300 max-w-3xl mx-auto">
                            Enabling businesses to excel with our time-tested custom mobile application development services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {differentiators.map((diff, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="p-4 bg-blue-600 rounded-xl mr-6 text-white">
                                        {diff.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{diff.title}</h3>
                                        <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                                            {diff.highlight}
                                        </span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {diff.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-8 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                            Ready to Transform Your Business with 
                            <span className="text-blue-500"> Mobile Innovation</span>?
                        </h2>
                        
                        <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
                            Let's design the perfect mobile solution for your business needs. 
                            Our experts are ready to bring your vision to life with cutting-edge technology and exceptional user experiences.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                            <motion.button 
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg hover:bg-blue-700 transition-all group"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const contactSection = document.getElementById('contact-form');
                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>

                            <motion.a 
                                className="border-2 border-gray-400 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 inline-block"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://calendly.com/saadinsides"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule Consultation
                            </motion.a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-8 border-t border-white/20">
                            {[
                                { number: "27+", label: "Years Experience" },
                                { number: "500+", label: "Projects Delivered" },
                                { number: "50+", label: "Countries Served" },
                                { number: "99%", label: "Client Satisfaction" }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-2xl font-bold text-blue-500 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Division Line */}
            <div className="relative py-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                    <motion.div 
                        className="bg-gray-900 px-8 py-3 rounded-full border border-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-400 text-sm font-semibold flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            Get In Touch
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-8 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                                Let's Build Something <span className="text-blue-500">Amazing Together</span>
                            </h2>
                            <p className="text-base text-gray-300">
                                Ready to start your mobile app project? Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <motion.div
                                className="bg-white rounded-xl p-6 shadow-lg"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-5">Send us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option>Mobile App Development</option>
                                            <option>iOS Development</option>
                                            <option>Android Development</option>
                                            <option>Cross-Platform Development</option>
                                            <option>App Modernization</option>
                                            <option>UI/UX Design</option>
                                            <option>Consultation</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 text-white py-2.5 text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </motion.div>

                            {/* Contact Information */}
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="p-2 bg-blue-600 rounded-lg mr-3">
                                                <Mail className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                                                <p className="text-gray-300 text-sm">info@exytex.com</p>
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
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Office</h4>
                                                <p className="text-gray-300">Minaar Rd, Lala Rukh St, Wah Cantt, 47040</p>
                                                <p className="text-gray-300">Punjab, Pakistan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-3">Why Choose Us?</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-300 text-sm">
                                            <Check className="w-4 h-4 mr-2 text-blue-500" />
                                            27+ Years of Experience
                                        </li>
                                        <li className="flex items-center text-gray-300 text-sm">
                                            <Check className="w-4 h-4 mr-2 text-blue-500" />
                                            500+ Projects Delivered
                                        </li>
                                        <li className="flex items-center text-gray-300 text-sm">
                                            <Check className="w-4 h-4 mr-2 text-blue-500" />
                                            24/7 Support Available
                                        </li>
                                        <li className="flex items-center text-gray-300 text-sm">
                                            <Check className="w-4 h-4 mr-2 text-blue-500" />
                                            Agile Development Process
                                        </li>
                                        <li className="flex items-center text-gray-300 text-sm">
                                            <Check className="w-4 h-4 mr-2 text-blue-500" />
                                            Dedicated Project Manager
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 relative bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                                Frequently Asked <span className="text-blue-500">Questions</span>
                            </h2>
                            <p className="text-sm text-gray-300">
                                Get answers to common questions about our mobile app development services
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    question: "What platforms do you develop mobile apps for?",
                                    answer: "We develop native apps for iOS and Android, as well as cross-platform solutions using React Native and Flutter. We help you choose the best approach based on your requirements, budget, and timeline."
                                },
                                {
                                    question: "How long does it take to develop a mobile app?",
                                    answer: "Development time varies based on complexity. Simple apps take 2-3 months, medium complexity apps take 4-6 months, and complex enterprise apps can take 6-12 months. We provide detailed timelines during project planning."
                                },
                                {
                                    question: "Do you provide app store submission and approval support?",
                                    answer: "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store, including preparing app descriptions, screenshots, and ensuring compliance with store guidelines."
                                },
                                {
                                    question: "What is included in your mobile app development service?",
                                    answer: "Our service includes UI/UX design, native/cross-platform development, backend development, API integration, testing, deployment, and post-launch support. We also provide app store optimization and maintenance services."
                                },
                                {
                                    question: "Do you provide ongoing maintenance and support?",
                                    answer: "Yes, we offer comprehensive maintenance packages including bug fixes, performance optimization, security updates, feature enhancements, and compatibility updates for new OS versions."
                                },
                                {
                                    question: "Can you integrate third-party services and APIs?",
                                    answer: "Absolutely! We have extensive experience integrating payment gateways, social media APIs, mapping services, push notifications, analytics tools, and various third-party services to enhance app functionality."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <motion.button
                                        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg hover:bg-white/5 transition-colors"
                                        onClick={() => {
                                            const element = document.getElementById(`faq-${index}`);
                                            const icon = document.getElementById(`faq-icon-${index}`);
                                            if (element && icon) {
                                                const isHidden = element.style.display === 'none' || !element.style.display;
                                                element.style.display = isHidden ? 'block' : 'none';
                                                icon.style.transform = isHidden ? 'rotate(90deg)' : 'rotate(0deg)';
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                e.currentTarget.click();
                                            }
                                        }}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-sm font-medium text-white pr-4">
                                                {faq.question}
                                            </h3>
                                            <ChevronRight 
                                                id={`faq-icon-${index}`}
                                                className="w-4 h-4 text-blue-500 transform transition-transform duration-200" 
                                            />
                                        </div>
                                    </motion.button>
                                    <div id={`faq-${index}`} className="hidden px-6 pb-6">
                                        <p className="text-xs text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};