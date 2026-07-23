import React from 'react';
import { motion } from 'framer-motion';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { ScrollProgress } from '../../components/ui/ScrollProgress';
import { ArrowLeft, BarChart3, TrendingUp, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dynamics365Page: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <ScrollProgress />
            <SleekHeader />

            <div className="min-h-screen bg-white pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <motion.button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
                            whileHover={{ x: -5 }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back</span>
                        </motion.button>

                        {/* Hero Image */}
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-lg mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format&q=80"
                                alt="Dynamics 365"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.article
                            className="prose prose-lg max-w-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Navigating Success: How Dynamics 365 is Redefining Data-driven Revolution
                            </h1>

                            <div className="flex items-center gap-4 text-gray-600 mb-8">
                                <BarChart3 className="w-5 h-5" />
                                <span>Business Intelligence</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                In today's rapidly evolving business landscape, organizations need powerful tools to harness their data and drive informed decision-making. Microsoft Dynamics 365 has emerged as a game-changing platform that's revolutionizing how businesses operate.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                The Power of Unified Data
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dynamics 365 brings together CRM and ERP capabilities in a single, cloud-based platform. This integration eliminates data silos and provides a 360-degree view of your business operations, from sales and marketing to finance and operations.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                                <p className="text-gray-800 italic">
                                    "Organizations using Dynamics 365 report up to 40% improvement in operational efficiency and 35% increase in customer satisfaction."
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Key Benefits for Modern Businesses
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                                    <p className="text-gray-600">
                                        Access real-time insights and predictive analytics to make data-driven decisions faster.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <Database className="w-8 h-8 text-blue-600 mb-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                                    <p className="text-gray-600">
                                        Connect with existing Microsoft tools and third-party applications effortlessly.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Transforming Business Operations
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                From automating routine tasks to providing AI-powered insights, Dynamics 365 empowers organizations to work smarter, not harder. The platform's flexibility allows businesses to start with the modules they need and scale as they grow.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you're looking to improve customer relationships, streamline operations, or gain deeper insights into your business performance, Dynamics 365 provides the tools and capabilities to drive your digital transformation journey.
                            </p>

                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mt-12">
                                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                                <p className="mb-6">
                                    Discover how Dynamics 365 can help your organization achieve its goals and stay ahead of the competition.
                                </p>
                                <a
                                    href="https://calendly.com/saadinsides"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Schedule a Consultation
                                </a>
                            </div>
                        </motion.article>
                    </div>
                </div>
            </div>

            <ElegantFooter />
        </>
    );
};

export default Dynamics365Page;
