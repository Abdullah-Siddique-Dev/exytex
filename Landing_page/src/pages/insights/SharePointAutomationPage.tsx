import React from 'react';
import { motion } from 'framer-motion';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { ScrollProgress } from '../../components/ui/ScrollProgress';
import { ArrowLeft, Settings, Workflow, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SharePointAutomationPage: React.FC = () => {
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
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format&q=80"
                                alt="SharePoint Automation"
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
                                Mastering Workflow Automation With SharePoint to Achieve Unparalleled Efficiency
                            </h1>

                            <div className="flex items-center gap-4 text-gray-600 mb-8">
                                <Settings className="w-5 h-5" />
                                <span>Workflow Automation</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                In the modern workplace, efficiency is everything. SharePoint's powerful automation capabilities enable organizations to streamline processes, reduce manual work, and boost productivity across teams.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                The Power of SharePoint Automation
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                SharePoint, combined with Power Automate, transforms how organizations handle routine tasks and complex workflows. From document approvals to data synchronization, automation eliminates bottlenecks and ensures consistency.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
                                <p className="text-gray-800 italic">
                                    "Organizations implementing SharePoint automation report up to 60% reduction in manual processing time and 45% improvement in workflow accuracy."
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Key Automation Capabilities
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <Workflow className="w-8 h-8 text-green-600 mb-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Workflows</h3>
                                    <p className="text-gray-600">
                                        Create intelligent workflows that adapt to your business processes and requirements.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Approval Processes</h3>
                                    <p className="text-gray-600">
                                        Automate document approvals and routing with customizable approval chains.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Real-World Applications
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                From HR onboarding to invoice processing, SharePoint automation handles diverse business scenarios. Organizations can automate notifications, data collection, report generation, and much more without writing complex code.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Integration with Microsoft 365
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                SharePoint's seamless integration with Microsoft 365 apps like Teams, Outlook, and OneDrive creates a unified automation ecosystem. This connectivity enables end-to-end process automation across your entire digital workplace.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Getting Started with Automation
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                The key to successful SharePoint automation is starting with high-impact, repetitive processes. Identify bottlenecks in your workflows, then gradually expand automation to other areas as you build expertise and confidence.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                With the right strategy and implementation, SharePoint automation can transform your organization's efficiency, freeing your team to focus on strategic work that drives business value.
                            </p>

                            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl mt-12">
                                <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
                                <p className="mb-6">
                                    Discover how SharePoint automation can streamline your processes and boost productivity across your organization.
                                </p>
                                <a
                                    href="https://calendly.com/saadinsides"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default SharePointAutomationPage;
