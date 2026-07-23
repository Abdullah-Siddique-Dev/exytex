import React from 'react';
import { motion } from 'framer-motion';
import { SleekHeader } from '../../components/layout/SleekHeader';
import { ElegantFooter } from '../../components/layout/ElegantFooter';
import { ScrollProgress } from '../../components/ui/ScrollProgress';
import { ArrowLeft, Code, Zap, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PythonDevelopmentPage: React.FC = () => {
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
                                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=600&fit=crop&auto=format&q=80"
                                alt="Python Development"
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
                                Orchestrating Brilliance in Application Development With Python
                            </h1>

                            <div className="flex items-center gap-4 text-gray-600 mb-8">
                                <Code className="w-5 h-5" />
                                <span>Software Development</span>
                                <span>•</span>
                                <span>6 min read</span>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Python has become the language of choice for modern application development, powering everything from web applications to artificial intelligence systems. Its versatility and simplicity make it an ideal tool for building robust, scalable solutions.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Why Python Dominates Modern Development
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Python's clean syntax and extensive library ecosystem enable developers to build applications faster and more efficiently. From startups to enterprise organizations, Python has proven its worth across diverse use cases and industries.
                            </p>

                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-lg">
                                <p className="text-gray-800 italic">
                                    "Python developers can build applications 3-5 times faster compared to traditional languages, significantly reducing time-to-market."
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Key Advantages of Python Development
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <Zap className="w-8 h-8 text-purple-600 mb-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Development</h3>
                                    <p className="text-gray-600">
                                        Build and deploy applications quickly with Python's intuitive syntax and rich libraries.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <Layers className="w-8 h-8 text-purple-600 mb-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Versatile Framework</h3>
                                    <p className="text-gray-600">
                                        From Django to Flask, Python offers frameworks for every type of application.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                Python in Enterprise Applications
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Major companies like Google, Netflix, and Instagram rely on Python for their critical systems. The language's scalability and performance make it suitable for handling millions of users and processing vast amounts of data.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                AI and Machine Learning Integration
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Python's dominance in AI and machine learning is unmatched. Libraries like TensorFlow, PyTorch, and scikit-learn make it the go-to language for building intelligent applications that can learn and adapt.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you're building a web application, data analytics platform, or AI-powered solution, Python provides the tools and ecosystem to bring your vision to life efficiently and effectively.
                            </p>

                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl mt-12">
                                <h3 className="text-2xl font-bold mb-4">Ready to Build with Python?</h3>
                                <p className="mb-6">
                                    Let's discuss how Python can power your next application and accelerate your development timeline.
                                </p>
                                <a
                                    href="https://calendly.com/saadinsides"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default PythonDevelopmentPage;
