import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
    Heart, Users, DollarSign, Globe, Smartphone, BarChart3, CheckCircle, ArrowRight, 
    Sparkles, Target, Zap, Shield, Award, Calendar, Database, Mail, Phone, 
    FileText, CreditCard, UserCheck, Settings, TrendingUp, MessageCircle,
    Headphones, MapPin, Edit, Search, Clock, Star
} from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CursorFollower } from '../components/ui/CursorFollower';
import { scrollToContactForm } from '../utils/scrollUtils';
import { ContactFormSection } from '../components/sections/ContactFormSection';

const NonProfitsPage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const heroTexts = ["Technology Solutions for Non-profit Organizations", "Enabling Non-profits to Maximize Social Impact", "Amplify Your Mission"];

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
                title="Technology Solutions for Non-profit Organizations | Damco"
                description="Empowering Non-profits With Cutting-Edge Technology Services. Comprehensive, customized technology solutions to help maximize social impact and optimize operations."
                keywords="nonprofit technology, donor management, fundraising platform, volunteer management, charity software, social impact, nonprofit CRM, digital services"
                canonicalUrl="/industries/non-profits"
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
                                <Heart className="w-4 h-4" />
                                <span>Non-Profit Technology Solutions</span>
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
                                Empowering Non-profits With Cutting-Edge Technology Services
                            </motion.p>

                            <motion.a
                                href="https://calendly.com/saadinsides"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base shadow-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer" 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.3 }}
                            >
                                <span className="flex items-center gap-2">
                                    Schedule a Call
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </motion.a>
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
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format&q=80" 
                                    alt="Non-Profit Technology Solutions" 
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
                                <Users className="w-8 h-8 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                The importance of technology for non-profit organizations cannot be understated
                            </h2>
                            <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    Technology holds the key to optimizing operations, fostering deeper connections with donors, and boosting the impact of their mission. Most non-profits, however, fail to effectively leverage technology due to limited resources, complex platforms, and the need for customization.
                                </p>
                                <p>
                                    Damco understands the unique challenges faced by non-profits and offers comprehensive, customized technology solutions to help you overcome them. With our expertise, holistic approach, and commitment to empowering non-profit missions, we are the ideal partner to drive your organization's success.
                                </p>
                                <p className="text-xl font-semibold text-blue-600">
                                    At Damco, we unleash the untapped potential of your non-profit organization through fit-for-purpose technologies, paving the way for greater social impact.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Offerings Section */}
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
                                Our Offerings
                            </h2>
                            <p className="text-xl text-gray-600">
                                Improve Agility and Reimagine Possibilities With Our Suite of Services
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Globe className="w-12 h-12" />,
                                    title: "Digital Services",
                                    description: "Enhance your social impact with our non-profit digital services",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: <Settings className="w-12 h-12" />,
                                    title: "Technology Services", 
                                    description: "Amplify impact with our fit-for-purpose technology solutions",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: <Headphones className="w-12 h-12" />,
                                    title: "Backend Support Services",
                                    description: "Optimize operations to drive process efficiency",
                                    gradient: "from-green-500 to-teal-500"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl text-white inline-block mb-6`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Services Detail Section */}
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
                                    Digital Services
                                </h2>
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                                    Leverage the Potential of Digital to Scale Your Outreach
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    To stay relevant and succeed in their missions, non-profits must embrace a faster and more agile approach to adapt to the evolving needs and preferences of their target audiences. It entails staying abreast of emerging trends, leveraging new technologies, and adopting innovative strategies to effectively engage and connect with supporters.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <span className="text-lg text-gray-700">Website Development, Campaign Sites & Apps</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <span className="text-lg text-gray-700">Content Management & Distribution</span>
                                    </div>
                                </div>
                                <motion.a
                                    href="https://calendly.com/saadinsides"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base shadow-lg hover:bg-blue-700 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Want to Accelerate Your Impact? Schedule a Call
                                </motion.a>
                            </motion.div>
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format&q=80" 
                                    alt="Digital Services for Non-profits" 
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Services Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Technology Services
                            </h2>
                            <h3 className="text-2xl font-semibold text-purple-600 mb-6">
                                Enhance Reach and Social Impact by Leveraging Technology
                            </h3>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                From automating administrative tasks to providing online donation platforms and data analytics, technology enables non-profits to operate more efficiently, connect with supporters effectively, and reach wider audiences.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: <Users className="w-8 h-8" />, title: "Constituent Management", color: "blue" },
                                { icon: <DollarSign className="w-8 h-8" />, title: "Donations/Grant Management", color: "green" },
                                { icon: <UserCheck className="w-8 h-8" />, title: "Volunteer Mobilization & Management", color: "purple" },
                                { icon: <Calendar className="w-8 h-8" />, title: "Project Management", color: "orange" },
                                { icon: <TrendingUp className="w-8 h-8" />, title: "Legacy System Modernization", color: "red" },
                                { icon: <MessageCircle className="w-8 h-8" />, title: "AI-based Chatbots", color: "indigo" }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`bg-${service.color}-100 p-3 rounded-lg text-${service.color}-600 inline-block mb-4`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Backend Support Services Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Backend Support Services
                            </h2>
                            <h3 className="text-2xl font-semibold text-green-600 mb-6">
                                Optimize Operations to Gain Efficiency
                            </h3>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                                Given the constraints of limited funding and resources, non-profits can greatly benefit from outsourcing tasks such as Data Management, Donor/Volunteer Management, and Process Automation. As a comprehensive solution provider, we offer state-of-the-art capabilities to handle these routine operational tasks. By entrusting us with these responsibilities, non-profits can remain fully dedicated to their mission and core activities, allowing us to handle the day-to-day transactions efficiently and effectively.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Donor/Volunteer Management Services",
                                    services: [
                                        "Donor Form Processing",
                                        "Donor Data Verification", 
                                        "Address Verification"
                                    ]
                                },
                                {
                                    title: "Data Management Services",
                                    services: [
                                        "Collection of Checks, Mandate/Pledge Forms",
                                        "Data Capturing from the Forms",
                                        "Data Reconciliation"
                                    ]
                                },
                                {
                                    title: "Fundraising Process Fulfilment Services",
                                    services: [
                                        "Direct Mail Fulfilment",
                                        "Sending Thank-You Letters",
                                        "Fundraising & Event Records"
                                    ]
                                }
                            ].map((category, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                                    <ul className="space-y-3">
                                        {category.services.map((service, serviceIndex) => (
                                            <li key={serviceIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Support Services</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Helpdesk Services</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-gray-700">Customer Support to Donors</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-gray-700">Updating Banking & Address Details</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-gray-700">Enrollment Documentation</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Damco Differentiators Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                Damco Differentiators
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Award className="w-8 h-8" />,
                                    title: "Expertise in Non-profit",
                                    description: "Extensive experience in partnering with charities, fundraising organizations, and non-profits in the USA"
                                },
                                {
                                    icon: <Target className="w-8 h-8" />,
                                    title: "Tailored Technology Solutions",
                                    description: "Custom development and marketing support aligned with your unique goals and requirements"
                                },
                                {
                                    icon: <Zap className="w-8 h-8" />,
                                    title: "Holistic Approach",
                                    description: "Comprehensive solutions to enhance online presence, donor engagement, and operational efficiency"
                                },
                                {
                                    icon: <Heart className="w-8 h-8" />,
                                    title: "No-Margin/CSR Supporting Offering",
                                    description: "Focus on empowering the missions of non-profits rather than simply generating profits"
                                },
                                {
                                    icon: <Users className="w-8 h-8" />,
                                    title: "Long-Term Relationship Building",
                                    description: "Commitment to understanding and addressing the specific challenges of every non-profit organization"
                                },
                                {
                                    icon: <Shield className="w-8 h-8" />,
                                    title: "Strategic Partnerships",
                                    description: "Officially certified partners with major technology vendors, including Microsoft, Salesforce, Google Cloud, AWS, and more"
                                }
                            ].map((differentiator, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg text-white inline-block mb-4">
                                        {differentiator.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{differentiator.title}</h3>
                                    <p className="text-gray-300">{differentiator.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Insights
                            </h2>
                            <p className="text-xl text-gray-600">
                                Dive deeper to our subject matter expertise for exploring new possibilities
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Navigating Success: How Dynamics 365 is Redefining Data-driven Revolution",
                                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format&q=80",
                                    link: "/insights/dynamics-365"
                                },
                                {
                                    title: "Orchestrating Brilliance in Application Development With Python",
                                    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop&auto=format&q=80",
                                    link: "/insights/python-development"
                                },
                                {
                                    title: "Mastering Workflow Automation With SharePoint to Achieve Unparalleled Efficiency",
                                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format&q=80",
                                    link: "/insights/sharepoint-automation"
                                }
                            ].map((insight, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <img 
                                        src={insight.image} 
                                        alt={insight.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                                            {insight.title}
                                        </h3>
                                        <a 
                                            href={insight.link}
                                            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2"
                                        >
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection
                title="Amplify Your Social Impact"
                description="Ready to leverage technology for greater social impact? Let's discuss how we can help your non-profit organization reach more people and achieve your mission."
            />

            <ElegantFooter />
        </>
    );
};

export default NonProfitsPage;
