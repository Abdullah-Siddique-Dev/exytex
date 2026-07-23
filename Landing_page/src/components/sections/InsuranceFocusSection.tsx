import React from 'react';
import { motion } from 'framer-motion';

export const InsuranceFocusSection: React.FC = () => {
    const focusAreas = [
        {
            title: "Insurers",
            icon: "🏢",
            description: "Damco has broad knowledge and extensive experience in serving both insurance and insurtech companies across all lines of business, including property & casualty, life, pension, and health insurance providers worldwide.",
            features: [
                "Innovate new products",
                "Drive operational agility", 
                "Adopt emerging technologies",
                "Superior analytics capabilities",
                "Process efficiency optimization"
            ],
            gradient: "from-blue-600 to-cyan-600"
        },
        {
            title: "Agents and Brokers",
            icon: "🤝",
            description: "Damco has a long history of working with agents, wholesale brokers, and consultants to help them digitize their businesses through a wide range of insurance technologies, services, and flagship products.",
            features: [
                "Scale operations efficiently",
                "Streamline daily tasks",
                "Rapid innovation delivery",
                "Digital transformation",
                "Enhanced customer service"
            ],
            gradient: "from-purple-600 to-pink-600"
        },
        {
            title: "Adjusters",
            icon: "⚖️",
            description: "While most insurance companies have claims adjusters doing the heavy lifting alone on all types of claims, we at Damco believe in empowering them with the right insurance technologies and advanced capabilities.",
            features: [
                "Automate claims processes",
                "Advanced technology capabilities",
                "Transform business models",
                "Reduce manual workload",
                "Improve accuracy and speed"
            ],
            gradient: "from-orange-600 to-red-600"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Insurance Is Our Focus
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Being an insurance technology company, we understand and support the needs of various segments 
                        in the insurance industry via our comprehensive and rapidly deployable solutions.
                    </p>
                </motion.div>

                {/* Focus Areas Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Card */}
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:-translate-y-2">
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                {/* Icon */}
                                <motion.div
                                    className="text-6xl mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {area.icon}
                                </motion.div>

                                {/* Title */}
                                <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}>
                                    {area.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {area.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-3">
                                    {area.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            className="flex items-center text-gray-700"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                                            viewport={{ once: true }}
                                        >
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${area.gradient} mr-3 flex-shrink-0`} />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Hover Effect Border */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} 
                                     style={{ padding: '2px' }}>
                                    <div className="w-full h-full bg-white rounded-3xl" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Discover Our Insurance Solutions
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};