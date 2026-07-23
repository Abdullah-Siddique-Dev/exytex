import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Zap, Shield, CheckCircle, Star, ArrowRight, Users, Award, TrendingUp, Clock, DollarSign, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContactFormModal } from '../ui/ContactFormModal';

export const HireKotlinDeveloperSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const heroFeatures = [
        { icon: <Shield className="w-4 h-4" />, text: "Pre-vetted Experts" },
        { icon: <Clock className="w-4 h-4" />, text: "48hr Matching" },
        { icon: <DollarSign className="w-4 h-4" />, text: "Cost Effective" },
        { icon: <Globe className="w-4 h-4" />, text: "Global Talent" }
    ];

    const expertise = [
        { title: "Android Development", description: "Native Android apps with modern architecture patterns", image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop", skills: ["MVVM", "Jetpack Compose", "Material Design"] },
        { title: "Cross-Platform Solutions", description: "Kotlin Multiplatform for iOS, Android, and web", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop", skills: ["KMM", "Compose Multiplatform", "Shared Logic"] },
        { title: "Backend Development", description: "Scalable server-side applications with Kotlin", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop", skills: ["Ktor", "Spring Boot", "Microservices"] }
    ];

    const benefits = [
        { icon: <Code className="w-4 h-4" />, title: "Expert Developers", desc: "5+ years experience" },
        { icon: <Zap className="w-4 h-4" />, title: "Fast Onboarding", desc: "Start within 48 hours" },
        { icon: <Users className="w-4 h-4" />, title: "Flexible Engagement", desc: "Full-time or part-time" },
        { icon: <Award className="w-4 h-4" />, title: "Quality Assurance", desc: "Rigorous code reviews" },
        { icon: <TrendingUp className="w-4 h-4" />, title: "Scalable Teams", desc: "Grow as needed" },
        { icon: <Shield className="w-4 h-4" />, title: "IP Protection", desc: "NDA and security" }
    ];

    const process = [
        { title: "Discovery & Planning", desc: "Analyze requirements and create roadmap", gradient: "from-blue-600 to-blue-700", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" },
        { title: "Development & Testing", desc: "Agile development with continuous integration", gradient: "from-blue-700 to-blue-800", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop" },
        { title: "Deployment & Launch", desc: "Seamless deployment with monitoring", gradient: "from-blue-600 to-blue-800", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" },
        { title: "Support & Maintenance", desc: "Ongoing support and enhancements", gradient: "from-slate-700 to-slate-800", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" }
    ];

    useEffect(() => {
        const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % expertise.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white">
            {/* Hero with Background */}
            <section className="relative py-10 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/95" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
                            Hire Expert <span className="text-blue-200">Kotlin Developers</span>
                        </h1>
                        <p className="text-sm text-blue-50 mb-4 leading-relaxed max-w-2xl mx-auto">
                            Access pre-vetted Kotlin developers for Android, cross-platform, and backend development.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {heroFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                                    <div className="text-blue-200">{feature.icon}</div>
                                    <span className="text-xs text-white">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-600 flex items-center justify-center gap-2">
                                Hire Kotlin Developer <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-white/20">
                                View Portfolios
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3D Carousel */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-1">Kotlin Development Expertise</h2>
                        <p className="text-sm text-gray-600">Comprehensive solutions across platforms</p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative h-80 perspective-1000">
                            {expertise.map((item, index) => {
                                const offset = (index - currentSlide + expertise.length) % expertise.length;
                                const isActive = offset === 0;
                                const isPrev = offset === expertise.length - 1;
                                const isNext = offset === 1;
                                return (
                                    <motion.div key={index} className="absolute inset-0" animate={{ x: isActive ? 0 : isPrev ? -350 : isNext ? 350 : 0, scale: isActive ? 1 : 0.85, opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0, rotateY: isActive ? 0 : isPrev ? 25 : isNext ? -25 : 0, z: isActive ? 0 : -100, zIndex: isActive ? 10 : 0 }} transition={{ duration: 0.5 }} style={{ transformStyle: "preserve-3d" }}>
                                        <div className="h-full bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/40 shadow-2xl">
                                            <div className="relative h-40">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <div className="absolute bottom-3 left-3 right-3">
                                                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {item.skills.map((skill, idx) => (
                                                        <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="flex justify-center gap-3 mt-5">
                            <button onClick={() => setCurrentSlide((prev) => (prev - 1 + expertise.length) % expertise.length)} className="p-2 bg-white rounded-full shadow-md hover:shadow-lg">
                                <ChevronLeft className="w-4 h-4 text-gray-700" />
                            </button>
                            <div className="flex items-center gap-2">
                                {expertise.map((_, index) => (
                                    <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`} />
                                ))}
                            </div>
                            <button onClick={() => setCurrentSlide((prev) => (prev + 1) % expertise.length)} className="p-2 bg-white rounded-full shadow-md hover:shadow-lg">
                                <ChevronRight className="w-4 h-4 text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neumorphism Benefits */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-1">Why Hire from Us</h2>
                        <p className="text-sm text-gray-600">Excellence in every aspect</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -3 }}>
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-3">{benefit.icon}</div>
                                <h3 className="text-sm font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gradient Cards */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-1">Our Development Process</h2>
                        <p className="text-sm text-gray-600">Streamlined workflow for results</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                        {process.map((item, index) => (
                            <motion.div key={index} className="relative overflow-hidden rounded-xl h-48" initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" />
                                <div className="relative h-full p-5 flex flex-col justify-end text-white">
                                    <h3 className="text-base font-bold mb-1">{item.title}</h3>
                                    <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 bg-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-xl font-bold text-white mb-2">Ready to Build Your Team?</h2>
                    <p className="text-sm text-white/90 mb-4">Get matched with expert Kotlin developers in 48 hours</p>
                    <button onClick={() => setIsModalOpen(true)} className="bg-white text-blue-600 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Start Hiring Now
                    </button>
                </div>
            </section>

            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};
