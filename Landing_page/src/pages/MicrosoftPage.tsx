import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
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
  Code
} from 'lucide-react';

const MicrosoftPage: React.FC = () => {
  const offerings = [
    {
      icon: Code,
      title: '.NET Development',
      description: 'Being a Microsoft Gold Partner, we have a proven track record of delivering high-performance websites, robust web, & desktop-based business applications with quick turnaround time.',
      gradient: 'from-purple-500 to-purple-600',
      link: '/dotnet'
    },
    {
      icon: Database,
      title: 'SharePoint Solutions',
      description: 'Our SharePoint experts have notable experience in successfully planning and deploying SharePoint solutions for SMBs and large organizations.',
      gradient: 'from-blue-500 to-blue-600',
      link: '/sharepoint'
    },
    {
      icon: Briefcase,
      title: 'Dynamics 365',
      description: 'We have established a dedicated CoE for Dynamics AX, NAV and CRM products for technology tracking, solution development, and delivery assurance.',
      gradient: 'from-indigo-500 to-indigo-600',
      link: '/insights/dynamics-365'
    },
    {
      icon: Cloud,
      title: 'Microsoft Azure',
      description: 'We can meet all your Microsoft Azure needs starting from initial review, planning to deployment. We enable our clients to, transform scale their business objectives by leveraging our Azure Services.',
      gradient: 'from-cyan-500 to-cyan-600',
      link: '/azure'
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      description: 'Our expertise in BI and Analytics empowers us to tap data from disparate sources to provide actionable insights and the right business metrics for informed decision making.',
      gradient: 'from-yellow-500 to-orange-500',
      link: '/contact'
    },
    {
      icon: Zap,
      title: 'BizTalk Services',
      description: 'Damco\'s BizTalk services effortlessly align enterprise systems and heterogeneous data to simplify processes and improve efficiencies',
      gradient: 'from-orange-500 to-red-500',
      link: '/contact'
    },
    {
      icon: Users,
      title: 'Office 365',
      description: 'Damco\'s Office 365 services offer an all-inclusive roadmap that helps organizations seamlessly adopt and integrate their IT environment in the cloud.',
      gradient: 'from-green-500 to-emerald-600',
      link: '/office-365'
    },
    {
      icon: Shield,
      title: 'PowerApps',
      description: 'Our PowerApps experts have worked with the clients to build out a wide range of functionality from scanning business cards, providing field agents with mobile capabilities, route',
      gradient: 'from-pink-500 to-rose-600',
      link: '/powerapps'
    }
  ];

  const stats = [
    { label: 'Dedicated Microsoft CoE', value: 'Since 1998' },
    { label: 'Person Years Of Experience', value: '1400+' },
    { label: 'Professionals Across Globe', value: '460+' },
    { label: 'Certified Professionals', value: '150+' },
    { label: 'Total Engagements', value: '570+' },
    { label: 'Ongoing Engagements', value: '80+' }
  ];

  const whyDamco = [
    {
      icon: Award,
      title: '27+ Years of Experience',
      description: 'Delivering IT services and solutions to customers worldwide'
    },
    {
      icon: Target,
      title: '360° Requirement Analysis',
      description: 'Bring out the best solution under your budget and timeline'
    },
    {
      icon: Clock,
      title: '24 x 7 x 365 Support',
      description: 'Support capabilities and operations round the clock'
    },
    {
      icon: CheckCircle,
      title: 'Commitment to Quality',
      description: 'Established Engineering Processes, ISO & CMMI certified organization'
    },
    {
      icon: Users,
      title: '1600+ Strong Team',
      description: 'Across US, UK, Luxembourg, and India'
    },
    {
      icon: Shield,
      title: 'Microsoft Gold Partner',
      description: 'Ensures full product support for implementations from Microsoft'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Microsoft Services & Solutions - Microsoft Gold Partner | Exytex</title>
        <meta name="description" content="Accelerate your business growth with our Microsoft Services & Solutions. Microsoft Gold Partner with 1400+ person-years of experience in .NET, SharePoint, Dynamics 365, Azure, Office 365, and PowerApps." />
        <meta name="keywords" content="Microsoft services, Microsoft Gold Partner, .NET development, SharePoint, Dynamics 365, Azure, Office 365, PowerApps, BizTalk, Microsoft consulting" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/microsoft" />
        <meta property="og:title" content="Microsoft Services & Solutions - Microsoft Gold Partner | Exytex" />
        <meta property="og:description" content="Accelerate your business growth with our Microsoft Services & Solutions. Microsoft Gold Partner with 1400+ person-years of experience." />
        <meta property="og:image" content="https://exytex.com/images/hero/modern-office.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/microsoft" />
        <meta property="twitter:title" content="Microsoft Services & Solutions - Microsoft Gold Partner" />
        <meta property="twitter:description" content="Comprehensive Microsoft ecosystem expertise with 1400+ person-years of experience." />
        <meta property="twitter:image" content="https://exytex.com/images/hero/modern-office.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <link rel="canonical" href="https://exytex.com/microsoft" />
      </Helmet>

      <div className="bg-white min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          {/* Animated Background Elements */}
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

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
                >
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">Microsoft Gold Partner</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  Microsoft Services & Solutions
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
                >
                  Accelerate your business growth with our comprehensive Microsoft ecosystem expertise
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
                >
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">1400+</div>
                    <div className="text-blue-200 text-sm">Person Years</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">460+</div>
                    <div className="text-blue-200 text-sm">Professionals</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">570+</div>
                    <div className="text-blue-200 text-sm">Engagements</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white">Since 1998</div>
                    <div className="text-blue-200 text-sm">Microsoft CoE</div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="/contact"
                    className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-block"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect with Us
                  </motion.a>
                  <motion.button
                    onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Side - Microsoft Logo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-2xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 shadow-xl">
                    <img 
                      src="/images/hero/modern-office.jpg"
                      alt="Microsoft Solutions"
                      className="w-full h-auto rounded-xl shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg";
                      }}
                    />
                  </div>
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

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Harness the potential of Microsoft Ecosystem to unlock value for your clients
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Damco's Microsoft Center of Excellence (CoE) leverages the latest Microsoft technologies to provide clients business solutions across verticals. As a globally recognized Microsoft Gold Partner, we deliver full lifecycle solutions and services, including consulting, application development, customization, integrations, implementation, maintenance, and support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 1400 person-years of experience, our Microsoft COE includes all the essential tools, frameworks, technologies, accelerators, processes, resources and locations to best address all the business needs and project requirements with quality and in a cost-effective manner. Our Microsoft Capabilities range from Consulting Services, Packaged Software Implementation and Custom Application Development, Maintenance, and more. With proven processes, methodologies and technological competence, we are recognized as one of the industry's most dependable and agile partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Microsoft CoE Snapshot
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                <Award className="w-6 h-6 text-yellow-300" />
                <span className="text-white font-semibold text-lg">Microsoft Gold Partner</span>
              </div>
              <p className="text-blue-100 mt-4">Ensures full product support for implementations from Microsoft</p>
            </motion.div>
          </div>
        </section>

        {/* Offerings Section */}
        <section id="offerings" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Microsoft CoE Offerings
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Being a Microsoft Gold Partner, we have a proven track record of delivering high-performance solutions with quick turnaround time
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {offerings.map((offering, index) => (
                <motion.a
                  key={index}
                  href={offering.link || '/contact'}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${offering.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <offering.icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                      {offering.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed text-center mb-6 min-h-[120px]">
                      {offering.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-base group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${offering.gradient} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-300`}></div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Damco Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Damco?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyDamco.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Microsoft Technologies We Work With
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Microsoft Azure', logo: '/azure.jpg' },
                { name: 'Dynamics 365', logo: '/microsoft dynamics.png' },
                { name: 'SharePoint', logo: '/share point.png' },
                { name: 'Office 365', logo: '/office 365.png' },
                { name: 'Business Analytics', logo: '/business analytics.png' },
                { name: 'PowerApps', logo: '/power apps.jpg' }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center min-h-[180px]"
                >
                  <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with Microsoft Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our Microsoft expertise can accelerate your digital transformation
              </p>
              <motion.button
                onClick={() => window.location.href = '/#contact'}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default MicrosoftPage;
