import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Zap, Shield, Users, Cpu, Building2 } from 'lucide-react';

// Partner Logo Components with realistic logos
const MicrosoftLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" 
    alt="Microsoft Logo" 
    className="w-12 h-12 object-contain"
  />
);

const GoogleCloudLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png" 
    alt="Google Cloud Logo" 
    className="w-12 h-12 object-contain"
  />
);

const AWSLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" 
    alt="AWS Logo" 
    className="w-12 h-12 object-contain"
  />
);

const NividousLogo = () => (
  <img 
    src="https://www.nividous.com/wp-content/uploads/2021/03/nividous-logo.png" 
    alt="Nividous Logo" 
    className="w-12 h-12 object-contain"
    onError={(e) => {
      // Fallback to a generic automation icon if image fails to load
      e.currentTarget.style.display = 'none';
      (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'block');
    }}
  />
);

const SalesforceLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png" 
    alt="Salesforce Logo" 
    className="w-12 h-12 object-contain"
  />
);

const OutSystemsLogo = () => (
  <img 
    src="https://www.outsystems.com/-/media/outsystems/brand/logos/outsystems-logo.png" 
    alt="OutSystems Logo" 
    className="w-12 h-12 object-contain"
    onError={(e) => {
      // Fallback to a generic low-code icon if image fails to load
      e.currentTarget.style.display = 'none';
      (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'block');
    }}
  />
);

const UiPathLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/UiPath-logo.svg/512px-UiPath-logo.svg.png" 
    alt="UiPath Logo" 
    className="w-12 h-12 object-contain"
  />
);

const ConsenSysLogo = () => (
  <img 
    src="https://consensys.net/wp-content/uploads/2020/03/consensys-logo-horizontal-blue.png" 
    alt="ConsenSys Logo" 
    className="w-12 h-12 object-contain"
    onError={(e) => {
      // Fallback to a generic blockchain icon if image fails to load
      e.currentTarget.style.display = 'none';
      (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'block');
    }}
  />
);

interface Partner {
  name: string;
  logo: React.ReactNode;
  description: string;
  expertise: string[];
  certifications?: string;
  projects?: string;
  consultants?: string;
  color: string;
  icon: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: 'Microsoft',
    logo: <MicrosoftLogo />,
    description: 'Damco is a Microsoft Gold Certified Partner, with a large pool of trained and certified consultants in our Microsoft Centre of Excellence, we blend the efficiency of Microsoft technologies into various customer-facing solutions.',
    expertise: ['Application Development', 'Implementation', 'Integration', 'Support Services'],
    certifications: 'Gold Certified Partner',
    color: 'from-blue-600 to-blue-800',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    name: 'Google Cloud',
    logo: <GoogleCloudLogo />,
    description: 'As a Google Partner, we provide value by leveraging leading-edge services in various areas such as modernization, API management, data analytics, and AI/ML. We leverage Google\'s infrastructure and application services.',
    expertise: ['Modernization', 'API Management', 'Data Analytics', 'AI/ML'],
    color: 'from-red-500 to-yellow-500',
    icon: <Globe className="w-6 h-6" />
  },
  {
    name: 'Amazon Web Services',
    logo: <AWSLogo />,
    description: 'Damco is an AWS Consulting Partner. With over 60 AWS practitioners, 20+ certified AWS experts, we help you decide, migrate, operate and accelerate your cloud journey.',
    expertise: ['Cloud Migration', 'Data Lakes', 'Deep Learning', 'Modernization'],
    consultants: '60+ AWS Practitioners, 20+ Certified Experts',
    color: 'from-orange-500 to-orange-700',
    icon: <Shield className="w-6 h-6" />
  },
  {
    name: 'Nividous',
    logo: <NividousLogo />,
    description: 'Damco is a partner to Nividous—a global intelligent automation company. We aim to leverage Nividous\' hyperautomation capabilities to deliver optimal business value across industry verticals, especially Insurance and Finance.',
    expertise: ['Hyperautomation', 'Process Automation', 'Compliance', 'Cost Reduction'],
    color: 'from-purple-600 to-purple-800',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'Salesforce',
    logo: <SalesforceLogo />,
    description: 'Damco is a Salesforce Gold Partner, with a successful track record in delivering complex Salesforce projects including Business and Process Consulting, Implementation, Customizations, Migration, Integrations.',
    expertise: ['Business Consulting', 'Implementation', 'Customizations', 'Migration'],
    certifications: 'Gold Partner',
    consultants: '30+ Certified Consultants',
    projects: '60+ Delivered Projects',
    color: 'from-blue-500 to-cyan-600',
    icon: <Users className="w-6 h-6" />
  },
  {
    name: 'OutSystems',
    logo: <OutSystemsLogo />,
    description: 'Damco is an official OutSystems partner. Our strategic alliance with OutSystems enables us to meet the ever-changing demands of our digital-first customers through end-to-end automation and low-code development.',
    expertise: ['Low-Code Development', 'Enterprise Applications', 'Digital Transformation', 'Automation'],
    color: 'from-red-600 to-pink-600',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    name: 'UiPath',
    logo: <UiPathLogo />,
    description: 'We are a UiPath partner offering a wide range of services on Robotic Process Automation (RPA) covering—consulting, implementation, integration with cognitive technologies, machine learning, and artificial intelligence.',
    expertise: ['Robotic Process Automation', 'Machine Learning', 'Artificial Intelligence', 'Process Efficiency'],
    color: 'from-orange-600 to-red-600',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'ConsenSys',
    logo: <ConsenSysLogo />,
    description: 'Damco is a partner to ConsenSys—a market-leading blockchain technology company. Our Blockchain solutions are supported by their platforms that help us accelerate growth for our customers.',
    expertise: ['Blockchain Development', 'Ethereum Infrastructure', 'Enterprise Solutions', 'Secure Applications'],
    color: 'from-indigo-600 to-purple-700',
    icon: <Shield className="w-6 h-6" />
  }
];

export const MeetOurPartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-50 to-purple-50 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Strategic Partnership Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Strategic Partnership Ecosystem Delivering Powerful Results
          </p>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivering Business Value through Collaboration</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Damco, we broaden our technology, digital, and business capabilities through a diverse group of global technology leaders and market innovators. Our strategic collaborations and partnerships aim to deliver future-ready technology solutions to our clients that result in better business outcomes and create unparalleled values. We jointly deliver solutions that address clients' complex technology problems, challenges and requirements. Our unique partnership offers business growth opportunities, next-gen tech solutions, and end-to-end digital transformation that lead to massive competitive advantage.
            </p>
          </div>
        </motion.div>

        {/* Partnership Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Technology Leaders</h3>
              <p className="text-gray-600">Partnering with market innovators to deliver future-ready technology solutions worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Next-Gen Solutions</h3>
              <p className="text-gray-600">Business growth opportunities and end-to-end digital transformation for competitive advantage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unparalleled Value</h3>
              <p className="text-gray-600">Addressing complex technology problems and requirements through collaborative innovation</p>
            </div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                {/* Header with gradient and logo */}
                <div className={`bg-linear-to-r ${partner.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center p-2 relative">
                      {partner.logo}
                      {/* Fallback icon for partners that might not load */}
                      {partner.name === 'Nividous' && (
                        <div className="hidden">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {partner.name === 'OutSystems' && (
                        <div className="hidden">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {partner.name === 'ConsenSys' && (
                        <div className="hidden">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{partner.name}</h3>
                      {partner.certifications && (
                        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          <Award className="w-3 h-3" />
                          {partner.certifications}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>

                  {/* Stats */}
                  {(partner.consultants || partner.projects) && (
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {partner.consultants && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700 font-medium">{partner.consultants}</span>
                        </div>
                      )}
                      {partner.projects && (
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 font-medium">{partner.projects}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="group/btn flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Leverage Our Partnership Network?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's discuss how our strategic partnerships can accelerate your digital transformation and deliver exceptional business outcomes through collaborative innovation.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};