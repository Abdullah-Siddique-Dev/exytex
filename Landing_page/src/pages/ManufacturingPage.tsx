import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
    Settings, Cpu, BarChart3, Shield, Zap, Database, CheckCircle, ArrowRight, 
    Sparkles, Users, TrendingUp, Mail, Phone, User, Award, Package, Factory,
    Cog, Truck, DollarSign, FileText, Calendar, Wrench, Target, Globe,
    ChevronDown, ChevronUp, HelpCircle, MessageSquare, Building, Cloud,
    Layers, Monitor, ShoppingCart, CreditCard, Warehouse, Radio
} from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { scrollToContactForm } from '../utils/scrollUtils';
import { CursorFollower } from '../components/ui/CursorFollower';
import { ContactFormSection } from '../components/sections/ContactFormSection';

const ManufacturingPage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const heroTexts = ["Manufacturing Industry Solutions", "Tackle production challenges by leveraging technology", "Connect with Us"];
    
    // Single static hero image - no slider
    const heroImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format&q=80";

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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            <SEO
                title="Manufacturing Industry Solutions | Damco Technology"
                description="Tackle production challenges by leveraging technology. Comprehensive manufacturing solutions including ERP, CRM, supply chain management, and Industry 4.0 technologies."
                keywords="manufacturing solutions, ERP, CRM, supply chain management, production planning, quality management, inventory control, manufacturing technology"
                canonicalUrl="/industries/manufacturing"
            />
            <CursorFollower />
            <SleekHeader />

            {/* Hero Section */}
            <section className="relative min-h-[85vh] bg-white overflow-hidden font-['Poppins',_'Inter',_sans-serif]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
                        {/* Left Content */}
                        <div className="text-left">
                            <motion.div 
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Factory className="w-4 h-4" />
                                <span>Manufacturing Solutions</span>
                            </motion.div>

                            <motion.h1 
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {displayedText}<span className="animate-pulse text-blue-600">|</span>
                            </motion.h1>

                            <motion.p 
                                className="text-lg text-gray-600 leading-relaxed mb-8" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.2 }}
                            >
                                Damco enables manufacturers by providing technology solutions and consulting services modernizing IT systems, the rapid and effective launching of new products, fast time-to-market strategies, and effective internal supply chain of raw materials.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.3 }}
                            >
                                <motion.button 
                                    onClick={scrollToContactForm}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 cursor-pointer" 
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} 
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Connect with Us
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </motion.button>
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
                                    alt="Manufacturing Solutions" 
                                    className="w-full h-[400px] sm:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                            </div>

                            {/* Floating Elements */}
                            <motion.div 
                                className="absolute -top-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Factory className="w-8 h-8 text-white" />
                            </motion.div>

                            <motion.div 
                                className="absolute -bottom-4 -left-4 bg-green-600 p-4 rounded-xl shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            >
                                <Settings className="w-8 h-8 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industry Overview Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                The entire manufacturing and supply chain ecosystem is undergoing an operational paradigm shift in response to growing consumer expectations, time to market, and global competition directed by technology disruptions. We are supporting the manufacturing clients to adjust their business models to meet customer demand and increase profits.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Manufacturing Solutions Section */}
            <section id="solutions-section" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Most Reliable and Significant Solutions
                            </h2>
                            <p className="text-xl text-gray-600">
                                Developed for the manufacturing industry
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[
                                { icon: <ShoppingCart className="w-8 h-8" />, title: "Sales Order Processing", color: "blue" },
                                { icon: <Calendar className="w-8 h-8" />, title: "Production Planning", color: "green" },
                                { icon: <BarChart3 className="w-8 h-8" />, title: "Enterprise Manufacturing Intelligence", color: "purple" },
                                { icon: <Cog className="w-8 h-8" />, title: "Manufacturing Executing System", color: "orange" },
                                { icon: <Users className="w-8 h-8" />, title: "CRM & ERP", color: "red" },
                                { icon: <Radio className="w-8 h-8" />, title: "Shop Floor Connectivity Services", color: "indigo" },
                                { icon: <Shield className="w-8 h-8" />, title: "Quality Management", color: "teal" },
                                { icon: <Truck className="w-8 h-8" />, title: "Supply Chain Management", color: "pink" },
                                { icon: <Package className="w-8 h-8" />, title: "Part Inventory Control", color: "cyan" },
                                { icon: <Building className="w-8 h-8" />, title: "Dealer Management", color: "yellow" },
                                { icon: <CreditCard className="w-8 h-8" />, title: "Invoicing/Payment", color: "emerald" },
                                { icon: <Award className="w-8 h-8" />, title: "Warranty Management", color: "violet" },
                                { icon: <Layers className="w-8 h-8" />, title: "Integration and EDI Services", color: "rose" },
                                { icon: <Cloud className="w-8 h-8" />, title: "Cloud services to optimize infrastructure", color: "sky" },
                                { icon: <Radio className="w-8 h-8" />, title: "RFID Solutions", color: "lime" },
                                { icon: <Monitor className="w-8 h-8" />, title: "BI and Dashboard providing solutions", color: "amber" }
                            ].map((solution, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ 
                                        y: -8, 
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        // Scroll to contact form when solution is clicked
                                        scrollToContactForm();
                                    }}
                                >
                                    <div className="bg-blue-600 p-3 rounded-lg text-white inline-block mb-4 group-hover:bg-blue-700 transition-all duration-300">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">{solution.title}</h3>
                                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-sm text-blue-600 font-medium">Learn More →</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Our Success Stories
                            </h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Below are some success stories from Damco's portfolio, where global leaders in manufacturing industry, project management services, supply chain management organizations, engaged Damco for various technology solutions for their distinct needs:
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Inventory Management Upgrade",
                                    description: "Upgradation of Inventory Management Product for a desktop device with tiered web solution on cloud platform and flexible architecture along with integration with multiple systems such as payment gateways and collaboration tools.",
                                    icon: <Warehouse className="w-12 h-12" />,
                                    color: "bg-blue-600"
                                },
                                {
                                    title: "Microsoft ERP & CRM Implementation",
                                    description: "Implementations of Microsoft ERP and CRM based upon the needs by analyzing existing business processes, help acquiring optimal ERP and CRM product licenses from Microsoft dependent on the functionality and load (number of users), robust implementations based on Microsoft Sure-Step methodology that adheres to global standards and processes, customizations of the Dynamics Suite based on gap analysis, integration with existing parent systems.",
                                    icon: <Settings className="w-12 h-12" />,
                                    color: "bg-green-600"
                                },
                                {
                                    title: "Comprehensive ERP System",
                                    description: "A comprehensive solution for ERP system was developed with Inventory, Warehousing, Customer Orders, Supplier Orders, AR, AP, Production Planning, Production, Capacity Planning, Fixed Assets and Human Resources Modules along with RF Solution for use within Warehouses.",
                                    icon: <Database className="w-12 h-12" />,
                                    color: "bg-purple-600"
                                }
                            ].map((story, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ 
                                        y: -8,
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        scrollToContactForm();
                                    }}
                                >
                                    <div className={`${story.color} p-4 rounded-xl text-white inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {story.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{story.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{story.description}</p>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-blue-600 font-medium text-sm flex items-center gap-2">
                                            Discuss This Solution <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-xl text-gray-600">
                                Get answers to common questions about our manufacturing solutions
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                {
                                    question: "What manufacturing industries do you serve?",
                                    answer: "We serve a wide range of manufacturing industries including automotive, electronics, pharmaceuticals, food & beverage, textiles, chemicals, and heavy machinery. Our solutions are customizable to meet the specific needs of any manufacturing sector."
                                },
                                {
                                    question: "How long does it take to implement an ERP system?",
                                    answer: "Implementation timelines vary based on the complexity and size of your organization. Typically, a standard ERP implementation takes 3-6 months, while more complex customizations may take 6-12 months. We follow Microsoft Sure-Step methodology to ensure timely delivery."
                                },
                                {
                                    question: "Do you provide training and support after implementation?",
                                    answer: "Yes, we provide comprehensive training programs for your team and ongoing support services. Our support includes 24/7 technical assistance, regular system updates, and continuous optimization to ensure your manufacturing operations run smoothly."
                                },
                                {
                                    question: "Can you integrate with our existing systems?",
                                    answer: "Absolutely. We specialize in system integration and can connect your new manufacturing solutions with existing ERP, CRM, accounting, and other business systems. We also provide EDI services for seamless data exchange with suppliers and customers."
                                },
                                {
                                    question: "What are the benefits of cloud-based manufacturing solutions?",
                                    answer: "Cloud-based solutions offer scalability, reduced IT infrastructure costs, automatic updates, enhanced security, and remote accessibility. They enable real-time collaboration, faster deployment, and better disaster recovery capabilities for your manufacturing operations."
                                },
                                {
                                    question: "How do you ensure data security in manufacturing systems?",
                                    answer: "We implement multi-layered security measures including encryption, access controls, regular security audits, and compliance with industry standards. Our cloud solutions are hosted on secure platforms with robust backup and disaster recovery mechanisms."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <motion.button
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                        onClick={() => toggleFaq(index)}
                                        whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                                        <motion.div
                                            animate={{ rotate: openFaq === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {openFaq === index ? (
                                                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            )}
                                        </motion.div>
                                    </motion.button>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: openFaq === index ? "auto" : 0,
                                            opacity: openFaq === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4">
                                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection
                title="Ready to Transform Your Manufacturing Operations?"
                description="Let's discuss how our manufacturing solutions can help you optimize production, reduce costs, and accelerate time-to-market. Contact us today for a free consultation."
            />

            <ElegantFooter />
        </>
    );
};

export default ManufacturingPage;
