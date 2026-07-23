import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ContactSection } from '../components/sections/ContactSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { Palette, Layers, Image, FileText, CheckCircle, ChevronLeft, ChevronRight, Sparkles, Award, Users, Zap, Target, TrendingUp, Star, Clock, DollarSign, Lightbulb, Pencil, Eye, MessageSquare, Plus, Minus } from 'lucide-react';

const GraphicDesignPage: React.FC = () => {
  useSmoothScroll();
  const [servicesSlide, setServicesSlide] = useState(0);
  const [portfolioSlide, setPortfolioSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What graphic design services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive graphic design services including logo design, brand identity, print design (brochures, business cards, packaging), digital graphics (social media, web banners, email templates), UI/UX design, and custom illustrations. Our team can handle projects of any size and complexity."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical design project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on complexity. Simple logo designs typically take 5-7 days, while complete brand identity packages may take 2-3 weeks. We offer rush delivery options for urgent projects. During our initial consultation, we'll provide you with a detailed timeline specific to your project."
        }
      },
      {
        "@type": "Question",
        "name": "What file formats will I receive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll receive all necessary file formats for both print and digital use, including AI, EPS, PDF, PNG, JPG, and SVG files. For logo designs, we provide vector files that can be scaled to any size without losing quality. We also include source files so you have complete ownership of your designs."
        }
      },
      {
        "@type": "Question",
        "name": "How many revisions are included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our packages include multiple revision rounds to ensure you're completely satisfied. Starter packages include 2-3 revisions, while Professional and Enterprise packages offer unlimited revisions. We work closely with you throughout the design process to incorporate your feedback and refine the designs."
        }
      },
      {
        "@type": "Question",
        "name": "How much do your services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing varies based on project scope and complexity. We offer flexible packages starting from $299 for basic logo design to custom enterprise solutions. Contact us for a free consultation and detailed quote tailored to your specific needs. We're committed to providing excellent value and transparent pricing."
        }
      }
    ]
  };

  const heroBackgrounds = [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&h=1080&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1920&h=1080&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1920&h=1080&fit=crop&auto=format&q=80"
  ];

  // Auto-change background every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  // Keyboard navigation for carousels
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setServicesSlide((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setServicesSlide((prev) => Math.min(Math.ceil(6 / 3) - 1, prev + 1)); // 6 is the number of services
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Touch swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (type: 'services' | 'portfolio') => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (type === 'services') {
      if (isLeftSwipe) {
        setServicesSlide((prev) => Math.min(Math.ceil(designServices.length / 3) - 1, prev + 1));
      }
      if (isRightSwipe) {
        setServicesSlide((prev) => Math.max(0, prev - 1));
      }
    } else if (type === 'portfolio') {
      if (isLeftSwipe) {
        setPortfolioSlide((prev) => Math.min(Math.ceil(portfolio.length / 2) - 1, prev + 1));
      }
      if (isRightSwipe) {
        setPortfolioSlide((prev) => Math.max(0, prev - 1));
      }
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const designServices = [
    {
      title: "Logo Design",
      description: "Create memorable and impactful logos that represent your brand identity and values.",
      icon: <Sparkles className="w-6 h-6" />,
      features: ["Custom Logo Design", "Multiple Concepts", "Vector Files", "Brand Guidelines"]
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding solutions including color schemes, typography, and visual guidelines.",
      icon: <Palette className="w-6 h-6" />,
      features: ["Brand Strategy", "Visual Identity", "Style Guide", "Brand Collateral"]
    },
    {
      title: "Print Design",
      description: "Professional print materials including brochures, flyers, business cards, and packaging.",
      icon: <FileText className="w-6 h-6" />,
      features: ["Brochure Design", "Business Cards", "Packaging Design", "Print Ready Files"]
    },
    {
      title: "Digital Graphics",
      description: "Eye-catching digital designs for social media, websites, and online marketing campaigns.",
      icon: <Image className="w-6 h-6" />,
      features: ["Social Media Graphics", "Web Banners", "Email Templates", "Digital Ads"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered interface designs that enhance user experience and engagement.",
      icon: <Layers className="w-6 h-6" />,
      features: ["Interface Design", "User Experience", "Wireframing", "Prototyping"]
    },
    {
      title: "Illustration",
      description: "Custom illustrations and artwork for various applications and marketing materials.",
      icon: <Award className="w-6 h-6" />,
      features: ["Custom Illustrations", "Icon Design", "Infographics", "Character Design"]
    }
  ];

  const portfolio = [
    {
      category: "Branding",
      title: "Tech Startup Identity",
      description: "Complete brand identity for a technology startup",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop&auto=format&q=80"
    },
    {
      category: "Logo Design",
      title: "E-commerce Brand",
      description: "Modern logo design for online retail business",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&auto=format&q=80"
    },
    {
      category: "Print Design",
      title: "Corporate Brochure",
      description: "Professional brochure for financial services",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&auto=format&q=80"
    },
    {
      category: "Digital",
      title: "Social Media Campaign",
      description: "Engaging social media graphics for marketing",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop&auto=format&q=80"
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We start by understanding your brand, target audience, and design goals through detailed consultation.",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our designers create multiple design concepts based on your requirements and brand guidelines.",
      icon: <Pencil className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Design & Refinement",
      description: "We refine the chosen concept with your feedback, ensuring every detail aligns with your vision.",
      icon: <Eye className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final files delivered in all required formats with ongoing support for implementation.",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small businesses and startups",
      features: [
        "Logo Design (3 concepts)",
        "Business Card Design",
        "Social Media Kit",
        "2 Revisions",
        "Vector Files (AI, EPS)",
        "5-7 Days Delivery"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      description: "Ideal for growing businesses",
      features: [
        "Complete Brand Identity",
        "Logo Design (5 concepts)",
        "Business Stationery",
        "Social Media Templates",
        "Brand Guidelines",
        "Unlimited Revisions",
        "All File Formats",
        "3-5 Days Delivery",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Full Brand Strategy",
        "Custom Design Solutions",
        "Marketing Collateral",
        "Packaging Design",
        "Print & Digital Assets",
        "Dedicated Designer",
        "Unlimited Revisions",
        "24/7 Support",
        "Rush Delivery Available"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechVision Inc.",
      role: "Marketing Director",
      content: "The graphic design team transformed our brand identity completely. Their creativity and attention to detail exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Michael Chen",
      company: "GreenLeaf Organics",
      role: "Founder & CEO",
      content: "Outstanding work on our packaging design. The designs are not only beautiful but also helped increase our sales by 40%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      company: "Bloom Fashion",
      role: "Creative Director",
      content: "Professional, responsive, and incredibly talented. They brought our vision to life with stunning visual designs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "6+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const faqs = [
    {
      question: "What graphic design services do you offer?",
      answer: "We offer comprehensive graphic design services including logo design, brand identity, print design (brochures, business cards, packaging), digital graphics (social media, web banners, email templates), UI/UX design, and custom illustrations. Our team can handle projects of any size and complexity."
    },
    {
      question: "How long does a typical design project take?",
      answer: "Project timelines vary based on complexity. Simple logo designs typically take 5-7 days, while complete brand identity packages may take 2-3 weeks. We offer rush delivery options for urgent projects. During our initial consultation, we'll provide you with a detailed timeline specific to your project."
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll receive all necessary file formats for both print and digital use, including AI, EPS, PDF, PNG, JPG, and SVG files. For logo designs, we provide vector files that can be scaled to any size without losing quality. We also include source files so you have complete ownership of your designs."
    },
    {
      question: "How many revisions are included?",
      answer: "Our packages include multiple revision rounds to ensure you're completely satisfied. Starter packages include 2-3 revisions, while Professional and Enterprise packages offer unlimited revisions. We work closely with you throughout the design process to incorporate your feedback and refine the designs."
    },
    {
      question: "Do you provide brand guidelines?",
      answer: "Yes! Our Professional and Enterprise packages include comprehensive brand guidelines that document your logo usage, color palette, typography, spacing rules, and dos and don'ts. This ensures consistent brand application across all your marketing materials and helps maintain brand integrity."
    },
    {
      question: "Can you work with my existing brand?",
      answer: "Absolutely! We can work with your existing brand guidelines to create new designs that align with your established identity. Whether you need to refresh your brand or create new marketing materials, we'll ensure everything stays consistent with your current branding."
    },
    {
      question: "What information do you need to get started?",
      answer: "To begin, we'll need information about your business, target audience, design preferences, competitors, and any specific requirements. We'll schedule a discovery call to discuss your project in detail, understand your vision, and gather all necessary information to create designs that perfectly match your needs."
    },
    {
      question: "Do you offer print services?",
      answer: "While we specialize in design, we can coordinate with trusted printing partners to ensure your designs are printed to the highest quality. We'll provide print-ready files with proper specifications and can recommend reliable printing services based on your needs and budget."
    },
    {
      question: "What makes your design services different?",
      answer: "We combine creative excellence with strategic thinking. Our designers have 10+ years of experience and stay current with design trends. We focus on understanding your business goals and creating designs that not only look great but also drive results. Plus, we offer unlimited revisions on most packages and provide exceptional customer support."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on project scope and complexity. We offer flexible packages starting from $299 for basic logo design to custom enterprise solutions. Contact us for a free consultation and detailed quote tailored to your specific needs. We're committed to providing excellent value and transparent pricing."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Services | Creative Design Company | Exytex</title>
        <meta name="description" content="Creative graphic design services including logos, branding, social media designs, banners, and marketing visuals for businesses." />
        <meta name="keywords" content="graphic design services, logo design, branding design, social media designs, banners, marketing visuals, creative design, Exytex" />
        <meta property="og:title" content="Graphic Design Services | Creative Design Company | Exytex" />
        <meta property="og:description" content="Creative graphic design services including logos, branding, social media designs, banners, and marketing visuals for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/graphic-design/" />
        <meta property="og:image" content="https://www.exytex.com/images/graphic-design-og.jpg" />
        <link rel="canonical" href="https://www.exytex.com/graphic-design/" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="bg-white min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-gray-900">
          {/* Background Image Carousel */}
          <div className="absolute inset-0 z-0">
            {heroBackgrounds.map((bg, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentBgImage ? 'opacity-20' : 'opacity-0'
                }`}
              >
                <img 
                  src={bg} 
                  alt={`Graphic Design Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900"></div>
          </div>

          {/* Background Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {heroBackgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgImage(index)}
                className={`transition-all ${
                  index === currentBgImage 
                    ? 'w-8 h-2 bg-blue-600' 
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                } rounded-full`}
                aria-label={`Go to background ${index + 1}`}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.h1 
                  className="text-2xl md:text-3xl font-bold leading-tight mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Professional Graphic Design Services - Branding, UI/UX & Visual Identity Solutions
                </motion.h1>
                
                <motion.h2 
                  className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Creative Visual Solutions That Bring Your Brand to Life
                </motion.h2>
                
                <motion.p 
                  className="text-sm text-gray-300 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Professional graphic design services including logo design, brand identity, print design, and digital graphics. We create stunning visuals that elevate your brand.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <button 
                    onClick={scrollToContact}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-sm md:text-base shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
                    aria-label="Get started with our services"
                  >
                    Get Started
                  </button>
                  <button 
                    onClick={scrollToServices}
                    className="px-6 py-3 border-2 border-gray-400 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 hover:border-white hover:scale-105 active:scale-95 transition-all"
                    aria-label="View our services"
                  >
                    View Services
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {heroBackgrounds.map((bg, index) => (
                  <img
                    key={index}
                    src={bg}
                    alt={`Graphic Design Services ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentBgImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Carousel */}
        <section id="services-section" className="py-12 relative bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Design Services</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Comprehensive graphic design solutions for your business
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div 
                className="overflow-hidden rounded-2xl"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={() => onTouchEnd('services')}
              >
                <motion.div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${servicesSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(designServices.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                        {designServices.slice(slideIndex * 3, (slideIndex + 1) * 3).map((service, index) => (
                          <motion.div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-center mb-4">
                              <div className="p-2 bg-blue-600 rounded-lg mr-3 text-white">
                                {service.icon}
                              </div>
                              <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                            </div>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {service.description}
                            </p>
                            
                            <div className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-gray-700 text-xs">
                                  <CheckCircle className="w-3 h-3 mr-2 text-blue-600" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex items-center justify-center mt-8 gap-4">
                <button
                  onClick={() => setServicesSlide(Math.max(0, servicesSlide - 1))}
                  className="p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={servicesSlide === 0}
                  aria-label="Previous services"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(designServices.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setServicesSlide(index)}
                      className={`h-2 rounded-full transition-all hover:scale-110 ${
                        index === servicesSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to services slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setServicesSlide(Math.min(Math.ceil(designServices.length / 3) - 1, servicesSlide + 1))}
                  className="p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={servicesSlide === Math.ceil(designServices.length / 3) - 1}
                  aria-label="Next services"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Portfolio Section - Image Overlay Cards */}
        <section id="portfolio-section" className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Portfolio</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Recent design projects and creative work
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div 
                className="overflow-hidden rounded-2xl"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={() => onTouchEnd('portfolio')}
              >
                <motion.div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${portfolioSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(portfolio.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                        {portfolio.slice(slideIndex * 2, (slideIndex + 1) * 2).map((item, index) => (
                          <motion.div
                            key={index}
                            className="relative group overflow-hidden rounded-xl h-80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <span className="inline-block w-fit px-3 py-1 bg-blue-600 rounded-full text-white font-semibold text-xs mb-3">
                                {item.category}
                              </span>
                              <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                              <p className="text-gray-200 text-sm">{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex items-center justify-center mt-8 gap-4">
                <button
                  onClick={() => setPortfolioSlide(Math.max(0, portfolioSlide - 1))}
                  className="p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={portfolioSlide === 0}
                  aria-label="Previous portfolio items"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(portfolio.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPortfolioSlide(index)}
                      className={`h-2 rounded-full transition-all hover:scale-110 ${
                        index === portfolioSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to portfolio slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setPortfolioSlide(Math.min(Math.ceil(portfolio.length / 2) - 1, portfolioSlide + 1))}
                  className="p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={portfolioSlide === Math.ceil(portfolio.length / 2) - 1}
                  aria-label="Next portfolio items"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Design Process</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                A proven methodology that delivers exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {designProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 h-full border border-blue-100 hover:shadow-lg transition-all">
                    <div className="text-blue-600 mb-4">{process.icon}</div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{process.step}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  {index < designProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-8 h-8 text-blue-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our graphic design services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <button 
                onClick={scrollToContact}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Our <span className="text-blue-600">Clients Say</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Real feedback from satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-blue-600">Our Design Services</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Professional design expertise with proven results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Creative Excellence", description: "Award-winning designers with 10+ years of experience in creating stunning visuals.", icon: "🎨" },
                { title: "Fast Turnaround", description: "Quick delivery without compromising quality. Most projects completed within 3-5 days.", icon: "⚡" },
                { title: "Unlimited Revisions", description: "We work until you're 100% satisfied with the final design.", icon: "🔄" },
                { title: "Brand Consistency", description: "Maintain consistent visual identity across all your marketing materials.", icon: "🎯" },
                { title: "Affordable Pricing", description: "Competitive rates with flexible packages to suit your budget.", icon: "💰" },
                { title: "24/7 Support", description: "Round-the-clock support for all your design needs and queries.", icon: "🛟" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-left">
                  Ready to Transform Your Brand?
                </h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl text-left">
                  Let's create stunning visual designs that make your brand stand out. Get started with a free consultation today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-lg text-sm md:text-base"
                    aria-label="Start your project"
                  >
                    Start Your Project
                  </button>
                  <button 
                    onClick={scrollToPortfolio}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-sm md:text-base"
                    aria-label="View our work"
                  >
                    View Our Work
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="bg-white">
          <ContactSection />
        </section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default GraphicDesignPage;
