import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { Code, Zap, Shield, Globe, Server, Database, CheckCircle, ArrowRight, Layers, Box, Cpu } from 'lucide-react';

const DotNetPage: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'ASP.NET Core Web Apps',
      description: 'Build modern, cloud-based web applications with ASP.NET Core MVC and Razor Pages',
      features: ['RESTful APIs', 'Real-time with SignalR', 'Microservices Architecture']
    },
    {
      icon: Server,
      title: 'Enterprise Applications',
      description: 'Robust desktop and server applications using .NET Framework and .NET Core',
      features: ['WPF Applications', 'Windows Services', 'Console Applications']
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'Scalable RESTful APIs and GraphQL services with Entity Framework Core',
      features: ['Web API', 'gRPC Services', 'OData Services']
    },
    {
      icon: Layers,
      title: 'Microservices',
      description: 'Design and implement microservices architecture with Docker and Kubernetes',
      features: ['Service Mesh', 'API Gateway', 'Event-Driven Architecture']
    },
    {
      icon: Zap,
      title: 'Azure Integration',
      description: 'Seamless integration with Azure services including App Service, Functions, and SQL',
      features: ['Azure Functions', 'App Service', 'Azure SQL']
    },
    {
      icon: Shield,
      title: 'Security & Identity',
      description: 'Implement OAuth 2.0, JWT, and Azure AD authentication and authorization',
      features: ['Identity Server', 'Azure AD B2C', 'Role-Based Access']
    }
  ];

  const technologies = [
    { name: 'ASP.NET Core', level: 95 },
    { name: 'Entity Framework', level: 90 },
    { name: 'Blazor', level: 85 },
    { name: 'Azure Services', level: 88 },
    { name: 'Docker & Kubernetes', level: 82 },
    { name: 'SignalR', level: 87 }
  ];

  const benefits = [
    {
      icon: Cpu,
      title: 'High Performance',
      description: '.NET Core offers exceptional performance with minimal memory footprint'
    },
    {
      icon: Box,
      title: 'Cross-Platform',
      description: 'Build once, run anywhere - Windows, Linux, macOS, and containers'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security features and regular security updates from Microsoft'
    },
    {
      icon: Layers,
      title: 'Scalability',
      description: 'Scale from small apps to enterprise solutions handling millions of requests'
    }
  ];

  const process = [
    { step: '01', title: 'Discovery & Planning', description: 'Understand requirements and define architecture' },
    { step: '02', title: 'Design & Prototyping', description: 'Create wireframes and technical specifications' },
    { step: '03', title: 'Development', description: 'Agile development with continuous integration' },
    { step: '04', title: 'Testing & QA', description: 'Comprehensive testing including unit and integration tests' },
    { step: '05', title: 'Deployment', description: 'Deploy to Azure or on-premises infrastructure' },
    { step: '06', title: 'Support & Maintenance', description: 'Ongoing support and feature enhancements' }
  ];

  return (
    <>
      <Helmet>
        <title>.NET Development Services - Expert ASP.NET Core Solutions | Exytex</title>
        <meta name="description" content="Professional .NET development services. Build high-performance web applications, APIs, and enterprise solutions with ASP.NET Core. Microsoft Gold Partner with 150+ projects delivered." />
        <meta name="keywords" content=".NET development, ASP.NET Core, C# programming, .NET Core, web API development, microservices, Azure integration, enterprise applications" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/dotnet" />
        <meta property="og:title" content=".NET Development Services - Expert ASP.NET Core Solutions | Exytex" />
        <meta property="og:description" content="Professional .NET development services. Build high-performance web applications, APIs, and enterprise solutions with ASP.NET Core." />
        <meta property="og:image" content="https://exytex.com/images/services/web-development.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/dotnet" />
        <meta property="twitter:title" content=".NET Development Services - Expert ASP.NET Core Solutions" />
        <meta property="twitter:description" content="Professional .NET development services. Build high-performance web applications, APIs, and enterprise solutions with ASP.NET Core." />
        <meta property="twitter:image" content="https://exytex.com/images/services/web-development.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <link rel="canonical" href="https://exytex.com/dotnet" />
      </Helmet>

      <div className="bg-white min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
                >
                  <Code className="w-4 h-4 text-blue-300" />
                  <span className="text-white text-sm font-medium">Microsoft Gold Partner</span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  .NET Development Services
                </h1>

                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Build high-performance, scalable applications with ASP.NET Core. From web apps to microservices, we deliver enterprise-grade solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                  >
                    View Services
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-16 flex items-center justify-center">
                    <img 
                      src="/Microsoft .net.png"
                      alt=".NET Development"
                      className="w-full max-w-md h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                .NET Development Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive .NET solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Technology Stack
                </h2>
                <p className="text-xl text-gray-600">
                  Expertise in the latest .NET technologies and frameworks
                </p>
              </motion.div>

              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-900">{tech.name}</span>
                      <span className="text-blue-600 font-bold">{tech.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose .NET?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-purple-200">
                A proven methodology for delivering exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
                >
                  <div className="text-6xl font-bold text-blue-300 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Build Your .NET Application?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss your project and create a solution that drives your business forward
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default DotNetPage;
