import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Zap, TrendingUp, Database, CheckCircle, ArrowRight,
    Users, Building, FileText, Award, Star, ChevronLeft, ChevronRight, Sparkles
} from 'lucide-react';

export const BlockchainBenefitsSection: React.FC = () => {
    const [currentService, setCurrentService] = useState(0);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const heroTexts = [
        "Empowering Insurance Industry",
        "Digital Transformation Solutions",
        "Insurance Technology Excellence"
    ];

    const insuranceServices = [
        {
            title: "Advanced Products",
            description: "Modern insurance technology platforms to accelerate innovation and integration while ensuring successful digital transformation.",
            icon: <Zap className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600",
            stats: "20+ Years",
            label: "Experience",
            features: ["Platform Integration", "Digital Innovation", "Rapid Deployment", "Scalable Solutions"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80"
        },
        {
            title: "Technology Services",
            description: "Wide range of transformative services to help improve core operations model while developing new sources of revenue stream.",
            icon: <Database className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600",
            stats: "Global",
            label: "Reach",
            features: ["Core Operations", "Revenue Optimization", "Process Automation", "Digital Transformation"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80"
        },
        {
            title: "Platform Accelerators",
            description: "Modernize your mission critical systems with our versatile technology stack and third-party platform aggregators.",
            icon: <TrendingUp className="w-8 h-8" />,
            color: "from-blue-600 to-purple-600",
            stats: "Faster",
            label: "Innovation",
            features: ["System Modernization", "Technology Stack", "Platform Integration", "Accelerated Delivery"],
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format&q=80"
        }
    ];

    const insuranceSegments = [
        {
            title: "Insurers",
            description: "Comprehensive solutions for insurance and insurtech companies across all lines of business including P&C, life, pension, and health insurance.",
            icon: <Building className="w-8 h-8" />,
            color: "from-blue-600 to-blue-700",
            services: ["Product Innovation", "Operational Agility", "Analytics Capabilities", "Process Efficiency"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80"
        },
        {
            title: "Agents and Brokers",
            description: "Digital transformation solutions for agents, wholesale brokers, and consultants to scale operations and deliver rapid innovation.",
            icon: <Users className="w-8 h-8" />,
            color: "from-purple-600 to-purple-700",
            services: ["Business Digitization", "Operation Scaling", "Task Streamlining", "Customer Innovation"],
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&auto=format&q=80"
        },
        {
            title: "Adjusters",
            description: "Advanced technologies and capabilities to automate claims processes and transform insurance business models.",
            icon: <FileText className="w-8 h-8" />,
            color: "from-blue-700 to-purple-700",
            services: ["Claims Automation", "Process Transformation", "Advanced Analytics", "Business Model Innovation"],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format&q=80"
        }
    ];

    const recognitions = [
        { title: "Everest's ADS Peak Matrix® 2022", description: "Featured in Application and Digital Services in Life and Annuities Insurance", icon: <Award className="w-5 h-5" /> },
        { title: "Celent's Latin American Report", description: "Recognized in P&C Policy Administration Systems Report", icon: <Award className="w-5 h-5" /> },
        { title: "Everest's Insurance Platforms 2022", description: "Featured in Insurance Platforms IT Services Peak Matrix® Assessment", icon: <Award className="w-5 h-5" /> },
        { title: "Celent's Global Health Report", description: "Recognized in Global Health Policy Administration System Vendor Report", icon: <Award className="w-5 h-5" /> },
        { title: "Everest's Salesforce Services 2022", description: "Featured in Salesforce Services in Insurance Peak Matrix® Assessment", icon: <Award className="w-5 h-5" /> }
    ];

    const testimonials = [
        {
            quote: "We recognized the need to reimagine our insurance operations to keep pace with ever-evolving customer needs. Damco has helped us streamline our core process and leverage technology as a strategic asset. In a competitive market we are now in a much better position to deliver much more, at a faster pace.",
            author: "Leading General Insurance Provider",
            rating: 5
        },
        {
            quote: "The digital transformation journey with Damco has been exceptional. Their deep understanding of insurance technology and commitment to innovation has enabled us to modernize our legacy systems and deliver superior customer experiences.",
            author: "Global Life Insurance Company",
            rating: 5
        },
        {
            quote: "Damco's platform accelerators have significantly reduced our time-to-market for new products. Their expertise in insurance technology has been instrumental in our digital transformation success.",
            author: "Regional P&C Insurance Provider",
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
    }, [currentTextIndex, heroTexts]);

    useEffect(() => {
        const serviceInterval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % insuranceServices.length);
        }, 5000);
        return () => clearInterval(serviceInterval);
    }, [insuranceServices.length]);

    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(testimonialInterval);
    }, [testimonials.length]);

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden font-['Inter',_sans-serif]">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-center justify-center pt-24">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&auto=format&q=80" alt="Insurance Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-blue-900/90" />
                </div>
                <div className="container mx-auto px-6 relative z-10 py-16">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-medium mb-5" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Sparkles className="w-3.5 h-3.5" />
                            On-Demand Workshop Available
                        </motion.div>
                        <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 min-h-[50px] tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {displayedText}<span className="animate-pulse">|</span>
                            </span>
                        </motion.h1>
                        <motion.h2 className="text-base md:text-lg font-medium text-gray-300 mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            With Our Digital Offerings
                        </motion.h2>
                        <motion.p className="text-sm md:text-base text-gray-300 leading-relaxed mb-5 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            Backed with over two decades of insurance tech expertise and domain knowledge, Damco stands among the leading technology partners for the insurance space.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            <motion.button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium text-sm shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <span className="flex items-center gap-2">Explore Solutions<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                            </motion.button>
                            <motion.button className="border-2 border-white/40 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-white/10 hover:border-white/60 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Book Workshop
                            </motion.button>
                        </motion.div>
                        <motion.div className="grid grid-cols-3 gap-4 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            <div className="text-center"><div className="text-xl md:text-2xl font-bold text-blue-400 mb-1">20+</div><div className="text-xs text-gray-400">Years Experience</div></div>
                            <div className="text-center"><div className="text-xl md:text-2xl font-bold text-purple-400 mb-1">500+</div><div className="text-xs text-gray-400">Projects Delivered</div></div>
                            <div className="text-center"><div className="text-xl md:text-2xl font-bold text-blue-300 mb-1">50+</div><div className="text-xs text-gray-400">Global Clients</div></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recognition Slider */}
            <section className="py-12 relative bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Industry <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Recognition</span></h2>
                        <p className="text-sm text-gray-400">Trusted and recognized by leading industry analysts</p>
                    </motion.div>
                    <div className="relative overflow-hidden py-4">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900/50 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900/50 to-transparent z-10" />
                        <motion.div className="flex gap-6" animate={{ x: [0, -100 * recognitions.length] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                            {[...recognitions, ...recognitions].map((recognition, index) => (
                                <motion.div key={index} className="min-w-[350px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300" whileHover={{ scale: 1.05, y: -5 }}>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg text-white flex-shrink-0">{recognition.icon}</div>
                                        <div><h3 className="text-base font-bold text-white mb-1">{recognition.title}</h3><p className="text-gray-300 text-sm">{recognition.description}</p></div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3D Services Carousel */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Innovative <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insurance Technology</span> Offerings</h2>
                        <p className="text-sm text-gray-300 max-w-3xl mx-auto">Comprehensive solutions tailored to address the pain points of agents, brokers, carriers, and adjusters</p>
                    </motion.div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="flex items-center justify-center gap-6">
                            <button onClick={() => setCurrentService((prev) => (prev - 1 + insuranceServices.length) % insuranceServices.length)} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-lg border border-white/20 z-10">
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <div className="relative w-full max-w-3xl h-[450px] perspective-1000">
                                <AnimatePresence mode="wait">
                                    {insuranceServices.map((service, index) => {
                                        const offset = (index - currentService + insuranceServices.length) % insuranceServices.length;
                                        const isActive = offset === 0;
                                        const isPrev = offset === insuranceServices.length - 1;
                                        const isNext = offset === 1;
                                        return (
                                            <motion.div key={index} className="absolute inset-0" initial={false} animate={{ x: isActive ? 0 : isPrev ? -350 : isNext ? 350 : 0, scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0, rotateY: isActive ? 0 : isPrev ? 45 : isNext ? -45 : 0, z: isActive ? 0 : -200, zIndex: isActive ? 10 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }} style={{ transformStyle: "preserve-3d" }}>
                                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 h-full shadow-2xl">
                                                    <div className="relative h-40 overflow-hidden">
                                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                                                        <div className="absolute top-4 left-4"><div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl text-white`}>{service.icon}</div></div>
                                                    </div>
                                                    <div className="p-5">
                                                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{service.stats}</div>
                                                            <div className="text-gray-400 text-sm">{service.label}</div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                                            {service.features.map((feature, idx) => (
                                                                <div key={idx} className="flex items-center gap-2 text-gray-300 text-xs">
                                                                    <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" /><span>{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <motion.button className={`w-full bg-gradient-to-r ${service.color} text-white px-5 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Explore More</motion.button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>
                            <button onClick={() => setCurrentService((prev) => (prev + 1) % insuranceServices.length)} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-lg border border-white/20 z-10">
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        <div className="flex justify-center gap-2 mt-6">
                            {insuranceServices.map((_, index) => (
                                <button key={index} onClick={() => setCurrentService(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentService ? 'w-8 bg-blue-400' : 'w-2 bg-white/30'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance Segments */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Insurance Is Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Focus</span></h2>
                        <p className="text-sm text-gray-300 max-w-3xl mx-auto">We understand and support the needs of various segments in the insurance industry</p>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {insuranceSegments.map((segment, index) => (
                            <motion.div key={index} className="group relative" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} onHoverStart={() => setHoveredCard(index)} onHoverEnd={() => setHoveredCard(null)}>
                                <motion.div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 h-full" whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    <div className="relative h-40 overflow-hidden">
                                        <motion.img src={segment.image} alt={segment.title} className="w-full h-full object-cover" animate={{ scale: hoveredCard === index ? 1.1 : 1 }} transition={{ duration: 0.6 }} />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${segment.color} opacity-70`} />
                                        <motion.div className={`absolute top-4 left-4 bg-gradient-to-br ${segment.color} p-3 rounded-xl text-white shadow-2xl`} animate={{ rotate: hoveredCard === index ? 360 : 0, scale: hoveredCard === index ? 1.1 : 1 }} transition={{ duration: 0.6 }}>{segment.icon}</motion.div>
                                        <div className="absolute bottom-4 left-4 right-4"><h3 className="text-xl font-bold text-white">{segment.title}</h3></div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{segment.description}</p>
                                        <div className="space-y-2">
                                            {segment.services.map((service, idx) => (
                                                <motion.div key={idx} className="flex items-center gap-2 text-gray-300 text-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: idx * 0.1 }} viewport={{ once: true }}>
                                                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" /><span>{service}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <motion.button className={`mt-4 w-full bg-gradient-to-r ${segment.color} text-white px-5 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Learn More</motion.button>
                                    </div>
                                    <motion.div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insurance Leaders</span></h2>
                    </motion.div>
                    <div className="max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentTestimonial} className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20" initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: -50 }} transition={{ duration: 0.6 }}>
                                <div className="absolute top-4 left-4 text-cyan-400/20 text-5xl font-serif">"</div>
                                <div className="relative z-10">
                                    <div className="flex justify-center mb-4">
                                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.1 }}>
                                                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <blockquote className="text-sm md:text-base text-gray-200 leading-relaxed mb-5 text-center italic">{testimonials[currentTestimonial].quote}</blockquote>
                                    <div className="text-center">
                                        <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"><Building className="w-5 h-5 text-white" /></div>
                                            <div className="text-left">
                                                <div className="text-blue-400 font-semibold text-sm">{testimonials[currentTestimonial].author}</div>
                                                <div className="text-gray-400 text-xs">Insurance Provider</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        {testimonials.length > 1 && (
                            <div className="flex justify-center mt-6 gap-3">
                                <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-lg border border-white/20"><ChevronLeft className="w-5 h-5 text-white" /></button>
                                <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-lg border border-white/20"><ChevronRight className="w-5 h-5 text-white" /></button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <motion.div className="max-w-5xl mx-auto relative" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20" />
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                            <div className="text-center mb-6">
                                <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                    <Sparkles className="w-3 h-3" />Let Our Experts Help You
                                </motion.div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Transform Your<span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insurance Operations?</span></h2>
                                <p className="text-sm text-gray-300 mb-5 leading-relaxed max-w-2xl mx-auto">Experience cutting-edge insurance technologies that have helped us successfully work with customers globally.</p>
                                <motion.div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                                    <motion.button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <span className="flex items-center gap-2">Start Your Digital Journey<ArrowRight className="w-4 h-4" /></span>
                                    </motion.button>
                                    <motion.button className="border-2 border-white/40 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Schedule Workshop</motion.button>
                                </motion.div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <motion.div className="group bg-white/5 rounded-xl p-5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer" whileHover={{ y: -5, scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                                    <motion.div className="bg-gradient-to-r from-blue-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}><Shield className="w-5 h-5 text-white" /></motion.div>
                                    <h4 className="text-lg font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">Insurance Advisory Workshop</h4>
                                    <p className="text-gray-300 text-sm">Strategic guidance for your transformation journey</p>
                                </motion.div>
                                <motion.div className="group bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer" whileHover={{ y: -5, scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
                                    <motion.div className="bg-gradient-to-r from-purple-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}><Zap className="w-5 h-5 text-white" /></motion.div>
                                    <h4 className="text-lg font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">Digital FNOL Solutions</h4>
                                    <p className="text-gray-300 text-sm">Improving claims processing efficiency</p>
                                </motion.div>
                                <motion.div className="group bg-white/5 rounded-xl p-5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer" whileHover={{ y: -5, scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
                                    <motion.div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}><Database className="w-5 h-5 text-white" /></motion.div>
                                    <h4 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">AI-Enabled Ecosystem</h4>
                                    <p className="text-gray-300 text-sm">Automated claims process solutions</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer Stats */}
            <section className="py-12 relative border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { value: "20+", label: "Years of Excellence" },
                            { value: "500+", label: "Projects Delivered" },
                            { value: "50+", label: "Global Clients" },
                            { value: "98%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div key={index} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                                <motion.div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1" whileHover={{ scale: 1.1 }}>{stat.value}</motion.div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
