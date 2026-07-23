import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe2, Zap, ShieldCheck, Users2, Cpu } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  expertise: string[];
  certifications?: string;
  projects?: string;
  consultants?: string;
  color: string;
  icon: React.ReactNode;
  link?: string;
}

const partners: Partner[] = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
    description: 'Microsoft Gold Certified Partner with a large pool of trained consultants in our Microsoft Centre of Excellence, blending efficiency into customer-facing solutions.',
    expertise: ['Application Development', 'Implementation', 'Integration', 'Support Services'],
    certifications: 'Gold Certified Partner',
    color: 'from-blue-600 to-blue-700',
    icon: <Cpu className="w-6 h-6" />,
    link: '/microsoft'
  },
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png',
    description: 'Salesforce Partner since 2014 with successful track record in delivering complex projects including consulting, implementation, and customizations.',
    expertise: ['Business Consulting', 'Implementation', 'Customizations', 'Migration'],
    certifications: 'Partner Since 2014',
    consultants: '30+ Certified Consultants',
    projects: '60+ Delivered Projects',
    color: 'from-blue-600 to-blue-700',
    icon: <Users2 className="w-6 h-6" />,
    link: '/salesforce'
  },
  {
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png',
    description: 'Leveraging leading-edge services in modernization, API management, data analytics, and AI/ML with Google\'s infrastructure and application services.',
    expertise: ['Modernization', 'API Management', 'Data Analytics', 'AI/ML'],
    color: 'from-blue-600 to-blue-700',
    icon: <Globe2 className="w-6 h-6" />
  },
  {
    name: 'OutSystems',
    logo: '/outsystems.png',
    description: 'Official OutSystems Delivery Partner enabling end-to-end automation and low-code development for rapidly developing enterprise-grade applications.',
    expertise: ['Low-Code Development', 'Enterprise Applications', 'Digital Transformation', 'Automation'],
    certifications: 'Delivery Partner',
    color: 'from-blue-600 to-blue-700',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'Amazon Web Services',
    logo: '/amazon web services.png',
    description: 'AWS Technology Partner helping you migrate, operate and accelerate your cloud journey with certified experts and proven methodologies.',
    expertise: ['Cloud Migration', 'Data Lakes', 'Deep Learning', 'Modernization'],
    certifications: 'Technology Partner',
    consultants: '20+ Certified Experts',
    color: 'from-blue-600 to-blue-700',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    name: 'UiPath',
    logo: '/ui path.png',
    description: 'UiPath partner offering comprehensive RPA services including consulting, implementation, and integration with cognitive technologies and AI.',
    expertise: ['Robotic Process Automation', 'Machine Learning', 'Artificial Intelligence', 'Process Efficiency'],
    color: 'from-blue-600 to-blue-700',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'Nividous',
    logo: '/nividous.png',
    description: 'Partnership with global intelligent automation company delivering hyperautomation capabilities for optimal business value across Insurance and Finance.',
    expertise: ['Hyperautomation', 'Process Automation', 'Compliance', 'Cost Reduction'],
    color: 'from-blue-600 to-blue-700',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'ConsenSys',
    logo: '/consensys.png',
    description: 'ConsenSys Partner building Ethereum blockchain infrastructure and applications for secure enterprises with cutting-edge blockchain technology.',
    expertise: ['Blockchain Development', 'Ethereum Infrastructure', 'Enterprise Solutions', 'Secure Applications'],
    certifications: 'Partner',
    color: 'from-blue-600 to-blue-700',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
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
            Strategic Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Strategic Partnership Ecosystem Delivering Powerful Results. We broaden our technology, digital, and business capabilities through a diverse group of global technology leaders and market innovators.
          </p>
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
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Delivering future-ready technology solutions through strategic collaborations worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600">Next-gen tech solutions and end-to-end digital transformation for competitive advantage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Value</h3>
              <p className="text-gray-600">Creating unparalleled value through collaborative solutions addressing complex challenges</p>
            </div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 h-full flex flex-col">
                {/* Logo Section - Full width, touching corners */}
                <div className="w-full bg-white flex items-center justify-center p-8" style={{ minHeight: '180px' }}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    style={{ maxHeight: '120px' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="80"%3E%3Ctext x="50%25" y="50%25" font-size="16" text-anchor="middle" dy=".3em" fill="%23666"%3E' + partner.name + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                  
                  {partner.certifications && (
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium mb-3 w-fit">
                      <Award className="w-3 h-3" />
                      {partner.certifications}
                    </span>
                  )}

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">{partner.description}</p>

                  {/* Stats */}
                  {(partner.consultants || partner.projects) && (
                    <div className="space-y-2 mb-4">
                      {partner.consultants && (
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Users2 className="w-3 h-3 text-blue-500" />
                          <span>{partner.consultants}</span>
                        </div>
                      )}
                      {partner.projects && (
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Award className="w-3 h-3 text-blue-500" />
                          <span>{partner.projects}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Expertise Tags */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  {partner.link ? (
                    <a 
                      href={partner.link}
                      className="mt-4 group/btn flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <button className="mt-4 group/btn flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};