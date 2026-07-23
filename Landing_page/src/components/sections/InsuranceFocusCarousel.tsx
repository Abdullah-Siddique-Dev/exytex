import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, UserCheck, ClipboardCheck, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export const InsuranceFocusCarousel: React.FC = () => {
  const [current3DSlide, setCurrent3DSlide] = useState(0);

  const segments = [
    {
      title: "Insurers",
      icon: Building2,
      description: "Broad knowledge and extensive experience in serving both insurance and insurtech companies across all lines of business.",
      details: "Our comprehensive offerings help innovate new products, drive operational agility, adopt emerging technologies, and deliver superior analytics capabilities and process efficiency.",
      features: [
        "Property & Casualty Insurance",
        "Life & Pension Solutions",
        "Health Insurance Providers",
        "Digital Transformation"
      ],
      color: "from-gray-700 via-gray-600 to-gray-700",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      title: "Agents and Brokers",
      icon: UserCheck,
      description: "Long history of working with agents, wholesale brokers, and consultants to help them digitize their businesses.",
      details: "Expertise in helping reinsurers, general, individual life, health, and group health insurance service providers scale operations and deliver rapid innovation.",
      features: [
        "Digital Business Solutions",
        "Wholesale Broker Tools",
        "Reinsurance Technology",
        "Rapid Innovation Platform"
      ],
      color: "from-gray-800 via-gray-700 to-gray-800",
      bgImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073"
    },
    {
      title: "Adjusters",
      icon: ClipboardCheck,
      description: "Empowering claims adjusters with the right insurance technologies and advanced capabilities.",
      details: "Automate parts of the claims process, transforming insurance business models with cutting-edge technology solutions and AI-powered workflows.",
      features: [
        "Claims Automation",
        "AI-Powered Processing",
        "Digital FNOL",
        "Workflow Optimization"
      ],
      color: "from-gray-700 via-gray-600 to-gray-700",
      bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
    }
  ];

  const nextSlide = () => {
    setCurrent3DSlide((prev) => (prev + 1) % segments.length);
  };

  const prevSlide = () => {
    setCurrent3DSlide((prev) => (prev - 1 + segments.length) % segments.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/95 to-indigo-50/95"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -top-48 -left-48"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -bottom-48 -right-48"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Insurance Is Our Focus
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand and support the needs of various segments in the insurance industry 
            via our comprehensive and rapidly deployable solutions.
          </p>
        </motion.div>

        <div className="relative h-[700px] flex items-center justify-center" style={{ perspective: '2000px' }}>
          <div className="relative w-full max-w-6xl">
            {segments.map((segment, index) => {
              const position = (index - current3DSlide + segments.length) % segments.length;
              const isCenter = position === 0;
              const isLeft = position === segments.length - 1;
              const isRight = position === 1;
              const Icon = segment.icon;
              
              return (
                <motion.div
                  key={index}
                  animate={{
                    x: isCenter ? '0%' : isLeft ? '-80%' : isRight ? '80%' : '200%',
                    scale: isCenter ? 1 : 0.7,
                    opacity: isCenter ? 1 : isLeft || isRight ? 0.4 : 0,
                    z: isCenter ? 0 : -200,
                    rotateY: isCenter ? 0 : isLeft ? 45 : isRight ? -45 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative group">
                    <div 
                      className="absolute inset-0 rounded-3xl overflow-hidden"
                      style={{
                        backgroundImage: `url('${segment.bgImage}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    </div>

                    <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-12 shadow-2xl">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{segment.title}</h3>
                      <p className="text-white/90 mb-4 text-base leading-relaxed">{segment.description}</p>
                      <p className="text-white/80 mb-6 text-sm leading-relaxed">{segment.details}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {segment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                            <span className="text-white text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-7 h-7 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {segments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent3DSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current3DSlide === index ? 'bg-gray-700 w-12' : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
