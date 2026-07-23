import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight,
    Globe, Shield, Zap, Award, Phone, Mail, Calendar, MessageSquare,
    ChevronLeft, ChevronRight, Sparkles, Building, User, MapPin
} from 'lucide-react';

export const DeveloperHiringSection: React.FC = () => {
    const [currentDeveloper, setCurrentDeveloper] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const heroTexts = [
        "Hire Top Mobile Developers",
        "Access Pre-vetted Talent",
        "Build Amazing Products"
    ];

    const developers = [
        {
            title: "Kotlin Developer",
            description: "Expert Kotlin developers for Android apps and cross-platform solutions",
            rating: 4.9,
            available: 45,
            skills: ["Android Development", "Cross-platform", "JVM", "Coroutines"],
            color: "from-orange-500 to-orange-600",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80"
        },
        {
            title: "Next.js Developer",
            description: "Skilled Next.js developers for modern React applications and SSR",
            rating: 4.8,
            available: 38,
            skills: ["React", "SSR/SSG", "API Routes", "Performance"],
            color: "from-blue-500 to-blue-600",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80"
        },
        {
            title: "Vue.js Developer",
            description: "Professional Vue.js developers for interactive web applications",
            rating: 4.7,
            available: 32,
            skills: ["Vue 3", "Composition API", "Vuex", "Nuxt.js"],
            color: "from-green-500 to-green-600",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format&q=80"
        },
        {
            title: "Ajax Developer",
            description: "Expert Ajax developers for dynamic and responsive web experiences",
            rating: 4.6,
            available: 28,
            skills: ["JavaScript", "XMLHttpRequest", "Fetch API", "JSON"],
            color: "from-yellow-500 to-yellow-600",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format&q=80"
        },
        {
            title: "Swift Developer",
            description: "Talented Swift developers for iOS and macOS applications",
            rating: 4.9,
            available: 41,
            skills: ["iOS Development", "SwiftUI", "UIKit", "Core Data"],
            color: "from-purple-500 to-purple-600",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format&q=80"
        },
        {
            title: "Backend Developer",
            description: "Experienced backend developers for scalable server-side solutions",
            rating: 4.8,
            available: 52,
            skills: ["API Development", "Database Design", "Microservices", "DevOps"],
            color: "from-red-500 to-red-600",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format&q=80"
        },
        {
            title: "Golang Developer",
            description: "Skilled Go developers for high-performance backend systems",
            rating: 4.7,
            available: 29,
            skills: ["Concurrency", "Microservices", "Docker", "Kubernetes"],
            color: "from-cyan-500 to-cyan-600",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80"
        },
        {
            title: ".Net Developer",
            description: "Professional .NET developers for enterprise applications",
            rating: 4.8,
            available: 36,
            skills: [".NET Core", "C#", "ASP.NET", "Entity Framework"],
            color: "from-indigo-500 to-indigo-600",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80"
        }
    ];

    const howItWorks = [
        {
            step: "1",
            title: "Tell Us Your Needs",
            description: "Share your project requirements, timeline, and preferred skills. Our team will understand your exact needs.",
            icon: <MessageSquare className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600"
        },
        {
            step: "2",
            title: "Get Matched",
            description: "We match you with pre-vetted developers from our talent pool based on your specific requirements.",
            icon: <Users className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600"
        },
        {
            step: "3",
            title: "Interview & Select",
            description: "Interview shortlisted candidates and select the perfect developer for your project with our support.",
            icon: <User className="w-8 h-8" />,
            color: "from-green-500 to-green-600"
        },
        {
            step: "4",
            title: "Start Building",
            description: "Onboard your developer and start building amazing products with ongoing support from our team.",
            icon: <Code className="w-8 h-8" />,
            color: "from-orange-500 to-orange-600"
        }
    ];

    const benefits = [
        {
            title: "Pre-vetted Talent",
            description: "All developers go through rigorous screening including technical assessments and background checks.",
            icon: <Shield className="w-6 h-6" />,
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Quick Matching",
            description: "Get matched with qualified developers within 48 hours of submitting your requirements.",
            icon: <Clock className="w-6 h-6" />,
            color: "from-green-500 to-green-600"
        },
        {
            title: "Cost Effective",
            description: "Save up to 60% on hiring costs compared to traditional recruitment methods.",
            icon: <DollarSign className="w-6 h-6" />,
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Flexible Teams",
            description: "Scale your team up or down based on project needs with flexible engagement models.",
            icon: <Users className="w-6 h-6" />,
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Quality Assurance",
            description: "Ongoing performance monitoring and quality assurance throughout the project lifecycle.",
            icon: <Award className="w-6 h-6" />,
            color: "from-red-500 to-red-600"
        },
        {
            title: "Fast Onboarding",
            description: "Streamlined onboarding process gets your developer productive from day one.",
            icon: <Zap className="w-6 h-6" />,
            color: "from-cyan-500 to-cyan-600"
        },
        {
            title: "Global Talent Pool",
            description: "Access developers from around the world with diverse skills and experience.",
            icon: <Globe className="w-6 h-6" />,
            color: "from-indigo-500 to-indigo-600"
        },
        {
            title: "Dedicated Support",
            description: "24/7 support from our team to ensure smooth collaboration and project success.",
            icon: <Phone className="w-6 h-6" />,
            color: "from-pink-500 to-pink-600"
        }
    ];

    const testimonials = [
        {
            quote: "We needed a Swift developer urgently, and they delivered! The developer was skilled, professional, and helped us launch our iOS app ahead of schedule.",
            author: "Emily Rodriguez",
            position: "Founder",
            company: "GreenTech Solutions",
            project: "Sustainability Tracker",
            technology: "Swift",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format&q=80"
        },
        {
            quote: "The quality of developers is exceptional. Our Next.js project was completed faster than expected with clean, maintainable code.",
            author: "Michael Chen",
            position: "CTO",
            company: "TechFlow Inc",
            project: "E-commerce Platform",
            technology: "Next.js",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format&q=80"
        }
    ];

    const stats = [
        { value: "500+", label: "Expert Developers" },
        { value: "98%", label: "Success Rate" },
        { value: "48hrs", label: "Avg. Match Time" },
        { value: "60%", label: "Cost Savings" }
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
    }, [currentTextIndex, heroTexts]);

    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(testimonialInterval);
    }, [testimonials.length]);

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&auto=format&q=80" 
                        alt="Developer Team" 
                        className="w-full h-full object-cover opacity-20" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
                </div>
                
                <div className="container mx-auto px-6 relative z-10 py-16">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div 
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6 }}
                        >
                            <Sparkles className="w-4 h-4" />
                            Access pre-vetted remote developers ready to join your team
                        </motion.div>
                        
                        <motion.h1 
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8 }}
                            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                        >
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {displayedText}<span className="animate-pulse">|</span>
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            From startups to enterprises, find the perfect match in 48 hours with our streamlined hiring process.
                        </motion.p>
                        
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.button 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl"
                                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center gap-3">
                                    Start Hiring Now
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </motion.button>
                            <motion.button 
                                className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                Watch Demo
                            </motion.button>
                        </motion.div>
                        
                        <motion.div 
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>       
            {/* Developer Cards Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }} 
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Hire Top <span className="text-blue-600">Developers</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Get access to skilled developers for your projects
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};