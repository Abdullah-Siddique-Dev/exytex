import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContactFormModal } from '../ui/ContactFormModal';
import { Logo } from '../ui/Logo';
import { scrollToContactForm } from '../../utils/scrollUtils';

const ServiceIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-5 h-5" }) => {
  const icons = {
    'mobile-apps': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    ),
    'web-development': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    'digital-marketing': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    'seo': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    'support': (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };
  
  return icons[type as keyof typeof icons] || icons['web-development'];
};

export const SleekHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleStartProject = () => {
    setActiveDropdown(null);
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToContactForm();
      }, 300);
    } else {
      scrollToContactForm();
    }
  };

  const navItems = [
    { 
      name: 'Services', 
      href: '/services',
      isRoute: true,
      dropdown: [
        { 
          name: 'Web Development', 
          href: '/web-development', 
          description: 'Modern responsive web applications', 
          icon: 'web-development'
        },
        { 
          name: 'Mobile App', 
          href: '/mobile-app-development', 
          description: 'iOS & Android applications', 
          icon: 'mobile-apps'
        },
        { 
          name: 'Blockchain', 
          href: '/blockchain', 
          description: 'Blockchain & cryptocurrency solutions', 
          icon: 'web-development'
        },
        { 
          name: 'Graphic Designing', 
          href: '/graphic-design', 
          description: 'Creative design solutions for your brand', 
          icon: 'web-development'
        },
        { 
          name: 'SEO Services', 
          href: '/seo-company-dubai', 
          description: 'Search engine optimization & ranking', 
          icon: 'seo'
        },
        { 
          name: 'Amazon Services', 
          href: '/amazon-fba', 
          description: 'Amazon FBA & marketplace solutions', 
          icon: 'support'
        },
        { 
          name: 'Cloud Solutions', 
          href: '/cloud-solutions', 
          description: 'Cloud infrastructure & migration', 
          icon: 'support'
        },
        { 
          name: 'Digital Marketing', 
          href: '/digital-marketing', 
          description: 'Growth marketing strategies', 
          icon: 'digital-marketing'
        },
        { 
          name: 'IT Staffing', 
          href: '/it-staffing', 
          description: 'Professional IT talent recruitment', 
          icon: 'support'
        }
      ]
    },
    { 
      name: 'Technologies', 
      href: '/technologies',
      isRoute: true,
      dropdown: [
        { 
          category: 'Blockchain',
          items: [
            { name: 'Ethereum', href: '/services/ethereum' },
            { name: 'Smart Contracts', href: '/services/smart-contracts' },
            { name: 'Quorum', href: '/services/quorum' },
            { name: 'Corda', href: '/services/corda' },
            { name: 'Stellar', href: '/services/stellar' },
            { name: 'Hyperledger', href: '/services/hyperledger' },
            { name: 'NFT Development', href: '/services/nft' }
          ]
        },
        { 
          category: 'Mobility',
          items: [
            { name: 'Android', href: '/services/android' },
            { name: 'iOS', href: '/services/ios' },
            { name: 'Xamarin', href: '/services/mobile-app-development' },
            { name: 'Ionic', href: '/services/mobile-app-development' },
            { name: 'React Native', href: '/services/mobile-app-development' },
            { name: 'Flutter', href: '/services/mobile-app-development' },
            { name: 'HTML5', href: '/services/web-development' },
            { name: 'Cordova', href: '/services/mobile-app-development' }
          ]
        },
        { 
          category: 'Open Source',
          items: [
            { name: 'Java', href: '/technologies/java' },
            { name: 'Python', href: '/technologies/python' },
            { name: 'PHP', href: '/technologies/php' },
            { name: 'Angular', href: '/technologies/angular' },
            { name: 'ReactJS', href: '/technologies/react' },
            { name: 'NodeJS', href: '/technologies/nodejs' },
            { name: 'MEAN', href: '/technologies/mean' }
          ]
        },
        { 
          category: 'CMS',
          items: [
            { name: 'Drupal', href: '/technologies/drupal' },
            { name: 'Wordpress', href: '/technologies/wordpress' },
            { name: 'Sitecore', href: '/technologies/sitecore' }
          ]
        },
        { 
          category: 'Cloud',
          items: [
            { name: 'AWS', href: '/cloud-solutions' },
            { name: 'Azure', href: '/cloud-solutions' },
            { name: 'Google Cloud', href: '/cloud-solutions' }
          ]
        },
        { 
          category: 'IBM iSeries',
          items: [
            { name: 'AS/400', href: '/technologies/as400' },
            { name: 'RPG', href: '/technologies/rpg' },
            { name: 'COBOL', href: '/technologies/cobol' },
            { name: 'DB2', href: '/technologies/db2' }
          ]
        }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      isRoute: true,
      dropdown: [
        { 
          name: 'Automotive', 
          href: '/industries/automotive', 
          description: 'Innovative solutions for automotive industry', 
          icon: 'web-development'
        },
        { 
          name: 'Hi-Tech', 
          href: '/industries/hi-tech', 
          description: 'Cutting-edge technology solutions', 
          icon: 'web-development'
        },
        { 
          name: 'Digital Agencies', 
          href: '/industries/digital-agencies', 
          description: 'Empowering digital transformation', 
          icon: 'digital-marketing'
        },
        { 
          name: 'Insurance', 
          href: '/industries/insurance', 
          description: 'Modern insurance technology solutions', 
          icon: 'support'
        },
        { 
          name: 'Education & eLearning', 
          href: '/industries/education', 
          description: 'Digital learning platforms & solutions', 
          icon: 'web-development'
        },
        { 
          name: 'Manufacturing', 
          href: '/industries/manufacturing', 
          description: 'Smart manufacturing & automation', 
          icon: 'web-development'
        },
        { 
          name: 'Energy & Utilities', 
          href: '/industries/energy-utilities', 
          description: 'Sustainable energy management systems', 
          icon: 'support'
        },
        { 
          name: 'Non-profits', 
          href: '/industries/non-profits', 
          description: 'Technology for social impact', 
          icon: 'support'
        },
        { 
          name: 'Financial Services', 
          href: '/industries/financial-services', 
          description: 'Secure fintech solutions', 
          icon: 'web-development'
        },
        { 
          name: 'Publishing & Media', 
          href: '/industries/publishing-media', 
          description: 'Digital content & media platforms', 
          icon: 'digital-marketing'
        },
        { 
          name: 'Healthcare', 
          href: '/industries/healthcare', 
          description: 'Healthcare technology & telemedicine', 
          icon: 'support'
        },
        { 
          name: 'Retail & Ecommerce', 
          href: '/industries/retail-ecommerce', 
          description: 'Modern retail & online shopping solutions', 
          icon: 'web-development'
        }
      ]
    },
    { 
      name: 'Hire Developer', 
      href: '/hire-developer',
      isRoute: true,
      dropdown: [
        { name: 'Hire Kotlin Developer', href: '/hire-developer/detail?tech=kotlin' },
        { name: 'Hire Next.js Developer', href: '/hire-developer/detail?tech=nextjs' },
        { name: 'Hire Vue.js Developer', href: '/hire-developer/detail?tech=vue' },
        { name: 'Hire Ajax Developer', href: '/hire-developer/detail?tech=ajax' },
        { name: 'Hire Swift Developer', href: '/hire-developer/detail?tech=swift' },
        { name: 'Hire Backend Developer', href: '/hire-developer/detail?tech=backend' },
        { name: 'Hire Golang Developer', href: '/hire-developer/detail?tech=golang' },
        { name: 'Hire .Net Developer', href: '/hire-developer/detail?tech=dotnet' }
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      isRoute: true
    },
    { 
      name: 'Our Work', 
      href: '/our-work',
      isRoute: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const renderMegaMenu = (item: any) => {
    if (item.name === 'Technologies') {
      return (
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-4 gap-6">
            {item.dropdown.map((tech: any, idx: number) => (
              <motion.div
                key={idx}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <h4 className="font-bold text-gray-900 text-sm mb-3 border-b border-gray-200 pb-2">
                  {tech.category}
                </h4>
                <div className="space-y-1">
                  {tech.items && tech.items.map((techItem: any, itemIdx: number) => {
                    const isLink = typeof techItem === 'object' && techItem.href;
                    const displayName = typeof techItem === 'string' ? techItem : techItem.name;
                    
                    if (isLink) {
                      return (
                        <Link key={itemIdx} to={techItem.href} onClick={() => setActiveDropdown(null)}>
                          <motion.div
                            className="text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 cursor-pointer py-1 font-medium"
                            whileHover={{ x: 4 }}
                          >
                            {displayName} →
                          </motion.div>
                        </Link>
                      );
                    }
                    
                    return (
                      <motion.div
                        key={itemIdx}
                        className="text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 cursor-pointer py-1"
                        whileHover={{ x: 4 }}
                      >
                        {displayName}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (item.name === 'Industries') {
      return (
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-3 gap-4">
                {item.dropdown.map((industry: any, idx: number) => (
                  <Link key={industry.name} to={industry.href} onClick={() => setActiveDropdown(null)}>
                    <motion.div
                      className="group p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -2, scale: 1.01 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <ServiceIcon type={industry.icon || 'web-development'} className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mb-1">
                            {industry.name}
                          </h4>
                          <p className="text-xs text-gray-600 group-hover:text-gray-900 line-clamp-2">
                            {industry.description}
                          </p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-80 shrink-0">
              <motion.div
                className="relative bg-linear-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-6 text-white shadow-2xl overflow-hidden h-full"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h4 className="text-lg font-bold">Industry Expertise</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-sm">Projects Delivered</span>
                      <span className="text-2xl font-bold">240+</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-sm">Happy Clients</span>
                      <span className="text-2xl font-bold">150+</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-sm">Industries Served</span>
                      <span className="text-2xl font-bold">12+</span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => {
                      setActiveDropdown(null);
                      setShowContactForm(true);
                    }}
                    className="w-full mt-6 px-4 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }

    if (item.name === 'Hire Developer') {
      return (
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Hire Expert Developers</h3>
              <div className="grid grid-cols-3 gap-4">
                {item.dropdown.map((dev: any, idx: number) => (
                  <Link key={idx} to={dev.href} onClick={() => setActiveDropdown(null)}>
                    <motion.div
                      className="group p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -2, scale: 1.01 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mb-1">
                            {dev.name}
                       </h4>
                          <p className="text-xs text-gray-600 group-hover:text-gray-900">
                            Expert developer available
                          </p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-80 shrink-0">
              <motion.div
                className="relative bg-linear-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-6 text-white shadow-2xl overflow-hidden h-full"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h4 className="text-lg font-bold">Developer Hiring</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-sm">Expert Developers</span>
                      <span className="text-2xl font-bold">50+</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-sm">Technologies</span>
                      <span className="text-2xl font-bold">25+</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-sm">Hiring Success</span>
                      <span className="text-2xl font-bold">98%</span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => {
                      setActiveDropdown(null);
                      setShowContactForm(true);
                    }}
                    className="w-full mt-6 px-4 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Hire Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }

    // Default Services menu
    return (
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Our Services</h3>
            <div className="grid grid-cols-3 gap-4">
              {item.dropdown.map((service: any, idx: number) => (
                <Link key={service.name} to={service.href} onClick={() => setActiveDropdown(null)}>
                  <motion.div
                    className="group p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <ServiceIcon type={service.icon || 'web-development'} className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mb-1">
                          {service.name}
                        </h4>
                        <p className="text-xs text-gray-600 group-hover:text-gray-900 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-80 shrink-0">
            <motion.div
              className="relative bg-linear-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-6 text-white shadow-2xl overflow-hidden h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h4 className="text-lg font-bold">Exytex Technologies</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <span className="text-sm">Projects Delivered</span>
                    <span className="text-2xl font-bold">240+</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <span className="text-sm">Happy Clients</span>
                    <span className="text-2xl font-bold">150+</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <span className="text-sm">Services Offered</span>
                    <span className="text-2xl font-bold">9+</span>
                  </div>
                </div>
                <motion.button
                  onClick={handleStartProject}
                  className="w-full mt-6 px-4 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-gray-200/80' 
          : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <Link to="/" className="cursor-pointer flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Logo />
            </motion.div>
          </Link>

          <div className="flex items-center space-x-1">
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.isRoute ? (
                    <Link to={item.href} className="cursor-pointer">
                      <div
                        className={`relative transition-all duration-300 flex items-center justify-between px-2 lg:px-3 xl:px-4 py-2 cursor-pointer group ${
                          isActiveRoute(item.href)
                            ? 'text-blue-600' 
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        <span className="text-[13px] lg:text-sm xl:text-[15px] font-medium whitespace-nowrap" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' } as React.CSSProperties}>
                          {item.name}
                        </span>
                        {item.dropdown && (
                          <motion.svg
                            className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 ml-0.5 lg:ml-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        )}
                        {/* Animated underline */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-600 to-blue-700 ${
                            isActiveRoute(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                          initial={false}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`relative transition-all duration-300 flex items-center px-5 py-2.5 cursor-pointer group text-gray-700 hover:text-blue-600`}
                    >
                      <span className="text-[15px] font-medium" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' } as React.CSSProperties}>{item.name}</span>
                      {item.dropdown && (
                        <motion.svg
                          className="w-4 h-4 ml-1.5 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-600 to-blue-700 w-0 group-hover:w-full"
                        initial={false}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </div>
                  )}

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 md:top-18 lg:top-20 left-0 right-0 w-full bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-gray-200/80 z-50"
                        style={{ 
                          boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3)'
                        } as React.CSSProperties}
                      >
                        {renderMegaMenu(item)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>

            <motion.button
              onClick={() => setShowContactForm(true)}
              className="hidden lg:flex items-center gap-1.5 xl:gap-2 ml-1 xl:ml-3 px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 xl:py-2.5 bg-linear-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-[13px] lg:text-sm xl:text-[15px] rounded-lg xl:rounded-xl cursor-pointer shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 whitespace-nowrap"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' } as React.CSSProperties}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Us
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
            >
              <div className="py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.isRoute ? (
                      <Link 
                        to={item.href}
                        className={`block px-4 py-3.5 transition-all duration-300 font-medium rounded-xl mx-2 text-base cursor-pointer relative group ${
                          isActiveRoute(item.href) ? 'text-blue-600' : 'text-gray-700'
                        }`}
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' } as React.CSSProperties}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        <div className={`absolute bottom-2 left-4 right-4 h-0.5 bg-linear-to-r from-blue-600 to-blue-700 ${
                          isActiveRoute(item.href) ? 'opacity-100' : 'opacity-0'
                        }`} />
                      </Link>
                    ) : (
                      <a 
                        href={item.href}
                        className="block px-4 py-3.5 text-gray-700 transition-all duration-300 font-medium rounded-xl mx-2 text-base cursor-pointer relative group"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' } as React.CSSProperties}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => {
                    setShowContactForm(true);
                    setIsOpen(false);
                  }}
                  className="w-full mt-4 mx-2 px-4 py-3.5 bg-linear-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 rounded-xl text-base cursor-pointer shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' } as React.CSSProperties}
                >
                  Hire Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ContactFormModal 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </motion.header>
  );
};