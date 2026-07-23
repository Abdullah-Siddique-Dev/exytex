import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Shield, Zap, Globe, HeadphonesIcon, Star, MapPin, Mail, Phone } from 'lucide-react';

export const HireDevelopersSection: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const developers = [
        { name: "Kotlin Developer", rating: 4.9, available: 45, description: "Expert Kotlin developers for Android apps", skills: ["Android", "Cross-platform", "JVM"], link: "/hire-developer/detail?tech=kotlin" },
        { name: "Next.js Developer", rating: 4.8, available: 38, description: "Skilled Next.js developers for React apps", skills: ["React", "SSR/SSG", "API Routes"], link: "/hire-developer/detail?tech=nextjs" },
        { name: "Vue.js Developer", rating: 4.7, available: 32, description: "Professional Vue.js developers", skills: ["Vue 3", "Composition API", "Vuex"], link: "/hire-developer/detail?tech=vue" },
        { name: "Ajax Developer", rating: 4.6, available: 28, description: "Expert Ajax developers for dynamic web", skills: ["JavaScript", "Fetch API", "JSON"], link: "/hire-developer/detail?tech=ajax" },
        { name: "Swift Developer", rating: 4.9, available: 41, description: "Talented Swift developers for iOS", skills: ["iOS", "SwiftUI", "UIKit"], link: "/hire-developer/detail?tech=swift" },
        { name: "Backend Developer", rating: 4.8, available: 52, description: "Experienced backend developers", skills: ["API", "Database", "Microservices"], link: "/hire-developer/detail?tech=backend" },
        { name: "Golang Developer", rating: 4.7, available: 29, description: "Skilled Go developers", skills: ["Concurrency", "Docker", "Kubernetes"], link: "/hire-developer/detail?tech=golang" },
        { name: ".Net Developer", rating: 4.8, available: 36, description: "Professional .NET developers", skills: [".NET Core", "C#", "ASP.NET"], link: "/hire-developer/detail?tech=dotnet" }
    ];

    const steps = [
        { number: "1", title: "Tell Us Your Needs", description: "Share your project requirements and timeline." },
        { number: "2", title: "Get Matched", description: "We match you with pre-vetted developers." },
        { number: "3", title: "Interview & Select", description: "Interview and select the perfect developer." },
        { number: "4", title: "Start Building", description: "Onboard and start building products." }
    ];

    const benefits = [
        { icon: <Shield className="w-4 h-4" />, title: "Pre-vetted Talent", description: "Rigorous screening and technical assessments." },
        { icon: <Clock className="w-4 h-4" />, title: "Quick Matching", description: "Get matched within 48 hours." },
        { icon: <Users className="w-4 h-4" />, title: "Flexible Teams", description: "Scale your team based on needs." },
        { icon: <CheckCircle className="w-4 h-4" />, title: "Quality Assurance", description: "Ongoing performance monitoring." },
        { icon: <Zap className="w-4 h-4" />, title: "Fast Onboarding", description: "Streamlined onboarding process." },
        { icon: <Globe className="w-4 h-4" />, title: "Global Talent", description: "Access worldwide developers." },
        { icon: <HeadphonesIcon className="w-4 h-4" />, title: "24/7 Support", description: "Dedicated support team." },
        { icon: <CheckCircle className="w-4 h-4" />, title: "Cost Effective", description: "Save up to 60% on hiring." }
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gray-50 py-6 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div>
                                <h1 className="text-base font-bold text-gray-900 mb-2">
                                    Hire Top <span className="text-blue-600">Frontend</span> Developers
                                </h1>
                                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                                    Access pre-vetted remote developers ready to join your team. Find the perfect match in 48 hours.
                                </p>
                                <div className="flex flex-wrap gap-1 mb-2">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Pre-vetted Talent</span>
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">48hr Matching</span>
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Flexible Teams</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">Start Hiring Now</button>
                                    <button className="border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-50">Watch Demo</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-white p-2 rounded border text-center">
                                    <div className="text-sm font-bold">500+</div>
                                    <div className="text-xs text-gray-600">Developers</div>
                                </div>
                                <div className="bg-white p-2 rounded border text-center">
                                    <div className="text-sm font-bold">98%</div>
                                    <div className="text-xs text-gray-600">Success Rate</div>
                                </div>
                                <div className="bg-white p-2 rounded border text-center">
                                    <div className="text-sm font-bold">48hrs</div>
                                    <div className="text-xs text-gray-600">Avg. Match</div>
                                </div>
                                <div className="bg-white p-2 rounded border text-center">
                                    <div className="text-sm font-bold">60%</div>
                                    <div className="text-xs text-gray-600">Cost Savings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developers */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <h2 className="text-base font-bold mb-1">Choose Your Developer</h2>
                        <p className="text-xs text-gray-600">Browse our curated selection of expert developers</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                        {developers.map((dev, index) => (
                            <motion.div key={index} className="bg-white rounded border p-3 hover:border-blue-300 hover:shadow-sm transition-all"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true }}
                                onHoverStart={() => setHoveredCard(index)} onHoverEnd={() => setHoveredCard(null)}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                        <span className="text-sm font-semibold">{dev.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-500">{dev.available} available</span>
                                </div>
                                <h3 className="text-sm font-bold mb-2">Hire {dev.name}</h3>
                                <p className="text-xs text-gray-600 mb-2 leading-relaxed">{dev.description}</p>
                                <div className="flex flex-wrap gap-1 mb-2">
                                    {dev.skills.map((skill, idx) => (
                                        <span key={idx} className="bg-gray-100 px-2 py-0.5 rounded text-xs">{skill}</span>
                                    ))}
                                </div>
                                {dev.link ? (
                                    <Link to={dev.link} className="block w-full bg-gray-900 text-white py-1.5 rounded text-xs hover:bg-gray-800 text-center">
                                        View Profiles
                                    </Link>
                                ) : (
                                    <button className="w-full bg-gray-900 text-white py-1.5 rounded text-xs hover:bg-gray-800">View Profiles</button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-xs text-gray-600 mb-2">Can't find the right developer? We have more!</p>
                        <button className="border px-3 py-1 rounded text-xs hover:bg-gray-50">View All Developers</button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-6 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <h2 className="text-base font-bold mb-1">How It Works</h2>
                        <p className="text-xs text-gray-600">Our streamlined process makes hiring simple</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-3 max-w-5xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div key={index} className="bg-white rounded border p-3 text-center"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">{step.number}</div>
                                <h3 className="text-sm font-bold mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">Get Started Today</button>
                        <p className="text-xs text-gray-500 mt-1">No upfront costs • Free consultation</p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <h2 className="text-base font-bold mb-1">Why Choose Our Developers</h2>
                        <p className="text-xs text-gray-600">Experience the advantages of working with our network</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div key={index} className="bg-white rounded border p-3"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.03 }} viewport={{ once: true }}>
                                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mb-2">{benefit.icon}</div>
                                <h3 className="text-sm font-bold mb-1">{benefit.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-6 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <h2 className="text-base font-bold mb-1">What Our Clients Say</h2>
                        <p className="text-xs text-gray-600">Hear from companies who hired developers</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <motion.div className="bg-white rounded border p-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />))}
                            </div>
                            <blockquote className="text-xs text-gray-700 mb-2 text-center leading-relaxed">
                                "Outstanding service! Our Kotlin developer delivered high-quality code and was very communicative throughout the project."
                            </blockquote>
                            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                                <div>
                                    <div className="font-bold text-xs">Michael Chen</div>
                                    <div className="text-xs text-gray-600">Product Manager, InnovateLab</div>
                                </div>
                                <div className="text-xs text-gray-500">•</div>
                                <div className="text-xs text-gray-600">Mobile Banking App</div>
                                <div className="text-xs text-gray-500">•</div>
                                <div className="text-xs text-gray-600">Kotlin</div>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-4 gap-2 mt-3">
                            <div className="text-center"><div className="text-sm font-bold">4.9/5</div><div className="text-xs text-gray-600">Rating</div></div>
                            <div className="text-center"><div className="text-sm font-bold">200+</div><div className="text-xs text-gray-600">Clients</div></div>
                            <div className="text-center"><div className="text-sm font-bold">98%</div><div className="text-xs text-gray-600">Success</div></div>
                            <div className="text-center"><div className="text-sm font-bold">24/7</div><div className="text-xs text-gray-600">Support</div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="py-5 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-3">
                            <h3 className="text-base font-bold mb-1">Exytex</h3>
                            <p className="text-xs text-gray-400">Transforming businesses through innovative digital solutions.</p>
                        </div>
                        <div className="bg-gray-800 rounded p-3">
                            <div className="flex items-start gap-2 mb-2">
                                <MapPin className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-xs mb-0.5">🇵🇰 Pakistan Office</div>
                                    <div className="text-xs text-gray-400">Minaar Rd, Lala Rukh St, Wah Cantt, 47040, Pakistan</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-1 text-xs">
                                    <Phone className="w-3 h-3 text-blue-400" />
                                    <span className="text-gray-400">+92 309 5930315</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs">
                                    <Mail className="w-3 h-3 text-blue-400" />
                                    <span className="text-gray-400">info@exytex.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
