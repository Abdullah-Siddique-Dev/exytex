import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FileText, Video, Mic, Image, Globe, Smartphone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CursorFollower } from '../components/ui/CursorFollower';
import { scrollToContactForm } from '../utils/scrollUtils';
import { ContactFormSection } from '../components/sections/ContactFormSection';

const PublishingMediaPage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const heroTexts = ["Publishing & Media", "Media Technology Innovation", "Digital Content Solutions"];

    const heroImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&auto=format&q=80";

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
                title="Publishing & Media Solutions | Digital Content Platforms"
                description="Transform publishing and media with content management systems, digital publishing platforms, streaming solutions, and audience engagement tools."
                keywords="publishing solutions, media technology, content management, digital publishing, streaming platform, media CMS, content distribution"
                canonicalUrl="/industries/publishing-media"
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
                                <FileText className="w-4 h-4" />
                                <span>Publishing & Media Solutions</span>
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
                                Innovative digital solutions for publishers, media companies, and content creators. Streamline content creation, distribution, and monetization with cutting-edge technology platforms.
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
                                    { stat: "500+", label: "Content Pieces" },
                                    { stat: "99.9%", label: "Uptime" },
                                    { stat: "50%", label: "Faster Publishing" },
                                    { stat: "90%", label: "User Engagement" }
                                ].map((item, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="text-2xl font-bold text-blue-400 mb-1">{item.stat}</div>
                                        <div className="text-sm text-gray-400">{item.label}</div>
                                    </div>
                                ))}
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
                                    src={heroImage} 
                                    alt="Publishing & Media Solutions" 
                                    className="w-full h-[400px] sm:h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div 
                                className="absolute -top-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <FileText className="w-8 h-8 text-white" />
                            </motion.div>

                            <motion.div 
                                className="absolute -bottom-4 -left-4 bg-purple-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                <Video className="w-8 h-8 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Our Publishing & Media Solutions
                            </h2>
                            <p className="text-xl text-gray-600">
                                Comprehensive digital solutions for modern media companies
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: <FileText className="w-8 h-8" />, title: "Content Management Systems", description: "Advanced CMS platforms for seamless content creation and management", color: "blue" },
                                { icon: <Video className="w-8 h-8" />, title: "Video Streaming Platforms", description: "OTT platforms and video delivery solutions for global audiences", color: "red" },
                                { icon: <Mic className="w-8 h-8" />, title: "Podcast & Audio Platforms", description: "Complete audio content delivery and podcast management systems", color: "green" },
                                { icon: <Image className="w-8 h-8" />, title: "Digital Publishing", description: "E-books, magazines, and digital publication platforms", color: "purple" },
                                { icon: <Globe className="w-8 h-8" />, title: "News & Media Portals", description: "Real-time news delivery and media distribution platforms", color: "orange" },
                                { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Content Apps", description: "Cross-platform mobile applications for content consumption", color: "indigo" }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    onClick={scrollToContactForm}
                                >
                                    <div className={`bg-${service.color}-100 p-3 rounded-lg text-${service.color}-600 inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-blue-600 font-medium text-sm flex items-center gap-2">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection
                title="Transform Your Media Platform"
                description="Ready to revolutionize your publishing and media operations with cutting-edge digital solutions? Let's discuss how we can help you engage your audience better."
            />

            <ElegantFooter />
        </>
    );
};

export default PublishingMediaPage;
