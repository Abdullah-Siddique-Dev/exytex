import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
    Heart, Shield, Users, Smartphone, Database, Clock, FileText, Activity, 
    ArrowRight, CheckCircle, Video, Calendar, BarChart3, Settings, 
    Monitor, Stethoscope, Tablet, Cloud, Award, Zap, Target
} from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CursorFollower } from '../components/ui/CursorFollower';
import { scrollToContactForm } from '../utils/scrollUtils';
import { ContactFormSection } from '../components/sections/ContactFormSection';

const HealthcarePage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const heroTexts = [
        "Healthcare Industry Solutions",
        "Digitally Delighting Patient with Exceptional Care",
        "Connected Health to Improve Outcomes"
    ];

    // Single static hero image - no slider
    const heroImage = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&auto=format&q=80";

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
                title="Healthcare Industry Solutions | Exytex Technologies"
                description="Technology & Digital Services for Health and Social Care. Connected Health to Improve the Outcomes of Health and Social Care with HIPAA compliant solutions."
                keywords="healthcare technology, telemedicine, EHR, EMR, patient portal, healthcare analytics, digital health, HIPAA compliance, healthcare app development"
                canonicalUrl="/industries/healthcare"
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
                                <Heart className="w-4 h-4" />
                                <span>Healthcare Solutions</span>
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
                                Technology & Digital Services for Health and Social Care. Connected Health to Improve the Outcomes of Health and Social Care with secure, HIPAA-compliant solutions.
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
                                        Connect with Us
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
                                    { stat: "6+", label: "Years Experience" },
                                    { stat: "100%", label: "HIPAA Compliant" },
                                    { stat: "24/7", label: "Client Support" },
                                    { stat: "500+", label: "Healthcare Projects" }
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
                                    alt="Healthcare Solutions" 
                                    className="w-full h-[400px] sm:h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div 
                                className="absolute -top-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Heart className="w-8 h-8 text-white" />
                            </motion.div>

                            <motion.div 
                                className="absolute -bottom-4 -left-4 bg-green-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                <Stethoscope className="w-8 h-8 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Exytex has strong experience in developing customized, robust, and secure technology and digital solutions for physicians, healthcare ISVs, hospitals, and provider networks. We offer technology solutions keeping in consideration accountability, affordability, regulatory reforms, and structural changes in the Health Industry. We focus on the technology trends reshaping the health care industries comprising of digitalization, mobility, big data, cloud computing, data security, and predictive analysis and reporting.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Full Suite of Services Section */}
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
                                Full Suite of Services for Healthcare & Social Care
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Video className="w-12 h-12" />,
                                    title: "Telemedicine Solution",
                                    subtitle: "Digitize Your Healthcare Practice",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: <Settings className="w-12 h-12" />,
                                    title: "Technology Services", 
                                    subtitle: "Healthcare Technology Solutions for Improved Patient Care",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: <Monitor className="w-12 h-12" />,
                                    title: "Digital Services",
                                    subtitle: "Drive Digital Growth For Your Healthcare Organizations",
                                    gradient: "from-green-500 to-teal-500"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    onClick={scrollToContactForm}
                                >
                                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl text-white inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-lg text-gray-600 mb-6">{service.subtitle}</p>
                                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>   
         {/* Telemedicine Solution Detail Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                    Telemedicine Solution
                                </h2>
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                                    Digitize Your Healthcare Practice
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Exytex's HIPAA Compliant telemedicine solution helps healthcare providers deliver reliable and secure telehealth services that provide better alternatives to traditional healthcare models. Our solution involves making medical services accessible remotely to patients by using the web and mobile devices to connect with the doctors—leveraging video conferencing or audio/voice call communication, booking online appointments, getting real-time consultation, and more.
                                </p>
                                
                                <div className="mb-8">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Built for Ease</h4>
                                    <div className="space-y-3">
                                        {[
                                            "Easy Appointment Booking",
                                            "Video Conferencing / Chat",
                                            "Administration & Billing Tools",
                                            "Built-in Support"
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format&q=80" 
                                    alt="Telemedicine Solutions" 
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Services Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                                Technology Services
                            </h2>
                            <p className="text-base text-gray-600 max-w-3xl mx-auto">
                                Healthcare technology solutions for improved patient care and operational efficiency
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { 
                                    icon: <Smartphone className="w-6 h-6" />, 
                                    title: "Healthcare App Development", 
                                    description: "Digital healthcare solutions for seamless patient-provider interactions",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                { 
                                    icon: <Users className="w-6 h-6" />, 
                                    title: "Patient Portal Development", 
                                    description: "Secure patient access to health information and appointment scheduling",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                { 
                                    icon: <Activity className="w-6 h-6" />, 
                                    title: "Healthcare IOT Solutions", 
                                    description: "Connected devices for remote monitoring and real-time data collection",
                                    gradient: "from-green-500 to-teal-500"
                                },
                                { 
                                    icon: <Tablet className="w-6 h-6" />, 
                                    title: "Mobile App Development", 
                                    description: "Cross-platform healthcare apps with intuitive user experiences",
                                    gradient: "from-orange-500 to-red-500"
                                },
                                { 
                                    icon: <Settings className="w-6 h-6" />, 
                                    title: "Integration Services", 
                                    description: "Seamless integration with EHRs and healthcare systems",
                                    gradient: "from-indigo-500 to-purple-500"
                                },
                                { 
                                    icon: <BarChart3 className="w-6 h-6" />, 
                                    title: "Data & Analytics", 
                                    description: "Advanced analytics for data-driven healthcare decisions",
                                    gradient: "from-pink-500 to-rose-500"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="group bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -4 }}
                                    onClick={scrollToContactForm}
                                >
                                    <div className={`bg-gradient-to-r ${service.gradient} p-2.5 rounded-lg text-white inline-block mb-3`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Our Success Stories
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Health Information Exchange System",
                                    description: "Developed a highly customized Health Information Exchange System to make healthcare data available across the healthcare providers to help in strategic decisions and meet the health care industry standards.",
                                    icon: <Database className="w-12 h-12" />,
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    title: "Medical Reporting Solution",
                                    description: "Product Engineering Partner for a large Healthcare Provider for the development of Medical Reporting Solution to gather information from various Cerner database tables according to the specifications and also to optimize the report performance.",
                                    icon: <FileText className="w-12 h-12" />,
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    title: "Electronic Medical Record (EMR) Database",
                                    description: "Developed an EMR Database to make fast and accurate medical charts required for documenting patient visits and to use Dragon Naturally Speaking voice dictation software for making patient information entry using voice recognition.",
                                    icon: <Activity className="w-12 h-12" />,
                                    gradient: "from-green-500 to-teal-500"
                                },
                                {
                                    title: "Fitness Collaboration Platform",
                                    description: "Developed a Fitness Collaboration Platform, with both web interface as well as mobile apps, wherein various health professionals and customers can connect and share their experiences.",
                                    icon: <Heart className="w-12 h-12" />,
                                    gradient: "from-orange-500 to-red-500"
                                }
                            ].map((story, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    onClick={scrollToContactForm}
                                >
                                    <div className={`bg-gradient-to-r ${story.gradient} p-4 rounded-xl text-white inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {story.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{story.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Exytex Differentiators Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                Exytex Differentiators
                            </h2>
                            <p className="text-gray-300 text-base">
                                What sets us apart in healthcare technology
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                {
                                    icon: <Shield className="w-6 h-6" />,
                                    title: "Regulatory Compliance",
                                    description: "Deep understanding of FDA, HIPAA, HITECH Acts, and CARES Act compliance",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: <Clock className="w-6 h-6" />,
                                    title: "Uninterrupted Delivery",
                                    description: "100% operational processes ensuring on-time project completion",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: <Users className="w-6 h-6" />,
                                    title: "24/7 Client Assistance",
                                    description: "Round-the-clock support with dedicated project managers",
                                    gradient: "from-green-500 to-teal-500"
                                },
                                {
                                    icon: <Zap className="w-6 h-6" />,
                                    title: "Agile Development",
                                    description: "Rapid delivery with seamless communication and documentation",
                                    gradient: "from-orange-500 to-red-500"
                                },
                                {
                                    icon: <Settings className="w-6 h-6" />,
                                    title: "Flexible Engagement",
                                    description: "Tailor-made plans with 100% scalability of resources",
                                    gradient: "from-indigo-500 to-purple-500"
                                },
                                {
                                    icon: <Award className="w-6 h-6" />,
                                    title: "CoE Delivery Model",
                                    description: "Centers of Excellence delivering cutting-edge solutions",
                                    gradient: "from-pink-500 to-rose-500"
                                }
                            ].map((differentiator, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:border-white/40 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className={`bg-gradient-to-r ${differentiator.gradient} p-2.5 rounded-lg text-white inline-block mb-3`}>
                                        {differentiator.icon}
                                    </div>
                                    <h3 className="text-base font-bold mb-2 text-white">
                                        {differentiator.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {differentiator.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection
                title="Transform Your Healthcare Operations"
                description="Ready to revolutionize your healthcare delivery with cutting-edge technology solutions? Let's discuss how we can help you improve patient outcomes and streamline operations."
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

export default HealthcarePage;