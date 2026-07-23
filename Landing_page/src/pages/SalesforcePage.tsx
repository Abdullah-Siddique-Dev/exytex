import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ContactFormModal } from '../components/ui/ContactFormModal';
import { 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Globe,
  Clock,
  Target,
  Briefcase,
  Code,
  Settings,
  BarChart,
  Smartphone,
  RefreshCw,
  MessageSquare,
  ShoppingCart,
  DollarSign,
  Heart,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const SalesforcePage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      icon: Lightbulb,
      title: 'Salesforce Consulting',
      description: 'We are a Salesforce Gold Partner company that offers 360-degree consulting services that focus on solution feasibility, readiness assessment, onboarding, strategy & roadmap, and change management.',
      features: ['CRM Strategy & Assessment', 'CRM Onboarding', 'Salesforce Roadmap'],
      gradient: 'from-blue-500 to-blue-600',
      link: '/contact'
    },
    {
      icon: Settings,
      title: 'Salesforce Implementation',
      description: 'We are a globally-ranked Salesforce Gold Partner delivering implementation services to help organizations realize accelerated performance by implementing diverse Salesforce Cloud platforms.',
      features: ['Sales Cloud', 'Marketing Cloud', 'Service Cloud', 'Analytics Cloud'],
      gradient: 'from-cyan-500 to-cyan-600',
      link: '/contact'
    },
    {
      icon: Code,
      title: 'Salesforce Development',
      description: 'Catering to distinct business needs, we help businesses scale their CRM capabilities with the power of the Salesforce platform developed by certified Salesforce developers and architects.',
      features: ['Custom App Cloud Development', 'Mobile-First Solution Rollout', 'AppExchange Product Development'],
      gradient: 'from-purple-500 to-purple-600',
      link: '/contact'
    },
    {
      icon: Zap,
      title: 'Salesforce Customization',
      description: 'Tailored Salesforce solutions designed to meet your unique business requirements with custom workflows, objects, and automation.',
      features: ['Custom Objects', 'Workflow Automation', 'Process Builder'],
      gradient: 'from-indigo-500 to-indigo-600',
      link: '/contact'
    },
    {
      icon: RefreshCw,
      title: 'Salesforce Integration',
      description: 'We are one of the most preferred Salesforce partner companies and as Salesforce Integrators, we ensure seamless integration with varied tools and platforms to streamline processes and workflows.',
      features: ['Third-party Systems Integration', 'API Development', 'Data Synchronization'],
      gradient: 'from-green-500 to-emerald-600',
      link: '/contact'
    },
    {
      icon: Database,
      title: 'Migration Services',
      description: 'From identifying the functionality gaps to rolling out transitions, our Salesforce experts eradicate challenges like security, data loss, and interrupted business operations with strategic migration services.',
      features: ['Classic to Lightning Migration', 'Third-Party to Salesforce Migration', 'Data Migration'],
      gradient: 'from-orange-500 to-red-500',
      link: '/contact'
    },
    {
      icon: Shield,
      title: 'Salesforce Support',
      description: 'As a Salesforce Gold Consulting Partner, we provide extensive monitoring, maintenance, and management services with round-the-clock technical support to ensure high end-user adoption.',
      features: ['Managed Services', 'Remote Administrator', 'Production Support'],
      gradient: 'from-pink-500 to-rose-600',
      link: '/contact'
    },
    {
      icon: Users,
      title: 'Training Services',
      description: 'Comprehensive training programs for users, administrators, and management to maximize Salesforce adoption and ROI.',
      features: ['User Training', 'Admin Training', 'Management Training'],
      gradient: 'from-yellow-500 to-orange-500',
      link: '/contact'
    }
  ];

  const clouds = [
    { name: 'Sales Cloud', icon: TrendingUp, description: 'Accelerate sales performance' },
    { name: 'Marketing Cloud', icon: MessageSquare, description: 'Personalized customer journeys' },
    { name: 'Service Cloud', icon: Users, description: 'Exceptional customer service' },
    { name: 'Analytics Cloud', icon: BarChart, description: 'Data-driven insights' },
    { name: 'Experience Cloud', icon: Globe, description: 'Connected experiences' },
    { name: 'Financial Services Cloud', icon: DollarSign, description: 'Financial services solutions' },
    { name: 'Nonprofit Cloud', icon: Heart, description: 'Nonprofit management' },
    { name: 'Salesforce Pardot', icon: Target, description: 'B2B marketing automation' },
    { name: 'App Cloud', icon: Smartphone, description: 'Custom app development' }
  ];

  const differentiators = [
    {
      icon: Award,
      title: 'Salesforce Gold Consulting Partner',
      description: 'Highly efficient team of certified Salesforce Developers, Product Consultants, Administrators, and Architects that has delivered over 75 projects'
    },
    {
      icon: Globe,
      title: 'Multi-Industry Experience',
      description: 'Great experience in Salesforce implementations across Financial Services, Education, Hi-Tech, Professional Services, Healthcare, Engineering & Real Estate, Manufacturing, Retail, Logistics, and Non-Profit'
    },
    {
      icon: Code,
      title: 'Custom Development Expertise',
      description: 'Strong expertise in developing heavily customized applications on the Salesforce platform to achieve the highest degree of business process automation'
    },
    {
      icon: Zap,
      title: 'Comprehensive Technology Stack',
      description: 'Part of a larger technology services company to support customers with needs outside the Salesforce system like Web Apps, Mobile Apps, IoT, RPA, etc.'
    },
    {
      icon: ShoppingCart,
      title: 'ISV Partner',
      description: 'Unique combination as a Salesforce Consulting and ISV partner with 7+ Apps/Products on AppExchange'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Competency',
      description: 'Technical competencies in multiple Salesforce clouds like Sales Cloud, Service Cloud, App Cloud, Marketing Cloud, Experience Cloud, Pardot, CPQ, Field Service Lightning, MuleSoft, and Einstein Analytics'
    },
    {
      icon: Clock,
      title: 'Accelerators & Assets',
      description: 'Wide range of accelerators and assets to reduce the go-live time and better assessment through a system close enough to the final system expectations'
    },
    {
      icon: Target,
      title: 'Global Delivery',
      description: 'Global delivery experience with customers across multiple geographies including the USA, UK, Europe, Australia, and India'
    }
  ];

  const accelerators = [
    {
      title: 'Loan Management Solution',
      description: 'A unified loan management solution that empowers Non-Banking Financial Companies (NBFCs) to expedite and streamline loan processes for better business performance and enhanced customer acquisition.',
      icon: DollarSign,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Field Service Solution',
      description: 'All-round field service solution for effective management of work orders, warranties, service contracts, field service scheduling, spare parts inventory, and service requests.',
      icon: Settings,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Workforce Management',
      description: 'An intuitive workforce management solution that enables organizations to manage employees remotely by monitoring workflows and analyzing time spent on tasks curbing inefficiencies at reduced operational costs.',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Field Sales Management',
      description: 'End-to-end solution to manage field sales operations with automated field sales activities and more qualified leads driving enhanced lead nurturing and return on spending.',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Non-Profit Management',
      description: 'Salesforce-based solution for Non-Profit organizations that facilitates donors, funds, and projects management with accelerated donor acquisition, event performance, and fundraising campaign performance.',
      icon: Heart,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Event Calendar App',
      description: 'Salesforce-powered app accessible through mobile devices that allows creating event calendars on Salesforce objects to manage events, campaigns, tasks, etc., bolstering overall productivity.',
      icon: Smartphone,
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Salesforce Services & Solutions - Salesforce Gold Partner | Exytex</title>
        <meta name="description" content="Drive business success with Salesforce. Damco is a Salesforce Gold Consulting Partner with 20+ years of experience in Sales Cloud, Marketing Cloud, Service Cloud, and more." />
        <meta name="keywords" content="Salesforce services, Salesforce Gold Partner, Sales Cloud, Marketing Cloud, Service Cloud, Salesforce consulting, Salesforce implementation, Salesforce development" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/salesforce" />
        <meta property="og:title" content="Salesforce Services & Solutions - Salesforce Gold Partner | Exytex" />
        <meta property="og:description" content="Drive business success with Salesforce. Salesforce Gold Consulting Partner with 20+ years of experience." />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <link rel="canonical" href="https://exytex.com/salesforce" />
      </Helmet>

      <div className="bg-white min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/50 to-blue-900"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
                >
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">Salesforce Gold Consulting Partner</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  Driving Success with <span className="text-cyan-300">Salesforce</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed"
                >
                  Innovate Business Processes With a Trusted Salesforce Partner Company
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base text-blue-200 mb-8 leading-relaxed"
                >
                  Salesforce helps businesses innovate and bring a digital future to their customers. Damco is a Salesforce Gold Consulting Partner with over two decades of experience in developing and maintaining IT solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-6 mb-8"
                >
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">75+</div>
                    <div className="text-blue-200 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">20+</div>
                    <div className="text-blue-200 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">7+</div>
                    <div className="text-blue-200 text-sm">AppExchange Apps</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-blue-200 text-sm">Certified Experts</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <motion.button
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Side - Salesforce Logo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl scale-150"></div>
                  
                  {/* Logo Container */}
                  <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-12 shadow-2xl">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    
                    {/* Logo */}
                    <div className="relative">
                      <motion.img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png"
                        alt="Salesforce Logo"
                        className="w-80 h-auto drop-shadow-2xl"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"%3E%3Ctext x="50%25" y="50%25" font-size="32" font-weight="bold" text-anchor="middle" dy=".3em" fill="%23ffffff"%3ESalesforce%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    
                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-50 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40 blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>

                  {/* Floating Icons */}
                  <motion.div
                    className="absolute -top-8 -left-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Cloud className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Zap className="w-8 h-8 text-cyan-300" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-12 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30"
                    animate={{
                      x: [0, 10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <TrendingUp className="w-7 h-7 text-green-300" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a strong team of Developers, Administrators, Product Consultants, and Architects who are well-versed in Salesforce products, platforms, and related ecosystem. Our Salesforce implementation expertise spans Sales Cloud, Marketing Cloud, Service Cloud, Analytics Cloud, Financial Services Cloud, and Nonprofit Cloud.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                To implement these solutions, we use agile methodologies that focus on iterative and phased development. Our Salesforce deployment experience runs across different industries such as Healthcare, Finance, Professional Services, Engineering & Real Estate, Insurance, Logistics, Manufacturing, Hi-Tech, and Non-Profits.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Settings className="w-4 h-4" />
                Comprehensive Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                End-to-end Salesforce solutions tailored to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[80px]">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={service.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Salesforce Clouds */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                Cloud Platforms
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Salesforce <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Cloud Expertise</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expert implementation and customization across all major Salesforce cloud platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {clouds.map((cloud, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <cloud.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{cloud.name}</h3>
                    <p className="text-sm text-gray-600">{cloud.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Makes Us Different from Other Salesforce Partners?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accelerators & Solutions */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Ready-to-Deploy Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Salesforce <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Accelerators & Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pre-built solutions and accelerators to fast-track your Salesforce implementation and maximize ROI
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {accelerators.map((accelerator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${accelerator.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${accelerator.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${accelerator.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <accelerator.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {accelerator.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {accelerator.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-200">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">7+ Apps Available on AppExchange</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 2, 1],
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-8 border-2 border-white/30"
              >
                <Zap className="w-10 h-10 text-cyan-300" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with Salesforce?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Let's discuss how our Salesforce expertise can drive your business success and accelerate digital transformation
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">75+</div>
                  <div className="text-blue-200 text-sm">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-blue-200 text-sm">Experts</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-blue-200 text-sm">Years</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">7+</div>
                  <div className="text-blue-200 text-sm">Apps</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <motion.button
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.a
                  href="https://calendly.com/exytex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </motion.a>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center justify-center gap-3 text-blue-200"
              >
                <Shield className="w-5 h-5" />
                <span className="text-sm">Trusted by leading enterprises worldwide</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </section>

        <ElegantFooter />
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default SalesforcePage;
