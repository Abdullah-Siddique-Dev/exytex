import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Lightbulb, 
  PenTool, 
  Code, 
  CheckCircle, 
  RotateCcw,
  Shield,
  Brain,
  Cloud,
  TestTube,
  Smartphone,
  Globe
} from 'lucide-react';

const SoftwareServicesSection: React.FC = () => {
  const developmentSteps = [
    { icon: Compass, label: "Planning" },
    { icon: Lightbulb, label: "Strategy" },
    { icon: PenTool, label: "Design" },
    { icon: Code, label: "Development" },
    { icon: CheckCircle, label: "Testing" },
    { icon: RotateCcw, label: "Maintenance" }
  ];

  const services = [
    { 
      icon: Globe, 
      label: "Custom Web Development", 
      desc: "Tailored web solutions built to your specifications",
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    },
    { 
      icon: Smartphone, 
      label: "E-commerce Development", 
      desc: "Powerful online stores with secure payment systems",
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    { 
      icon: Cloud, 
      label: "Cloud Solutions", 
      desc: "Scalable cloud infrastructure and migration services",
      bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
    },
    { 
      icon: Shield, 
      label: "Cyber Security", 
      desc: "Comprehensive security solutions for your applications",
      bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    { 
      icon: Brain, 
      label: "AI Integration", 
      desc: "Smart AI-powered features for modern applications",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    { 
      icon: TestTube, 
      label: "QA & Testing", 
      desc: "Rigorous testing to ensure quality and reliability",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Software Development Services
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional software development services designed to transform your ideas into powerful, scalable digital solutions that drive business growth
            </p>
          </motion.div>
        </div>

        {/* Development Process */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">Our Development Process</h3>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            A systematic approach to deliver high-quality software solutions
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {developmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6 text-center hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors shadow-lg">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{step.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-2xl transition-all duration-300 min-h-[280px] sm:min-h-[300px]"
              >
                {/* Background Image - Shows on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300">
                  <img 
                    src={service.bgImage} 
                    alt={service.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-700 transition-all shadow-lg">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.label}</h4>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed flex-grow">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SoftwareServicesSection };
