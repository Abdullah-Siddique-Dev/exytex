import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Globe, ArrowRight, Sparkles } from 'lucide-react';

export const InsuranceDigitalSolutions: React.FC = () => {
  const solutions = [
    {
      title: "Advanced Products",
      description: "Modern insurance technology platforms to accelerate innovation and integration while ensuring successful digital transformation.",
      icon: Zap,
      features: ["Digital Transformation", "Innovation Acceleration", "Seamless Integration", "Scalable Platforms"],
      gradient: "from-blue-600 to-cyan-500",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
    },
    {
      title: "Technology Services",
      description: "Wide range of transformative services to help improve core operations model while developing new sources of revenue stream.",
      icon: BarChart3,
      features: ["Process Optimization", "Revenue Growth", "Operational Excellence", "Strategic Consulting"],
      gradient: "from-gray-700 to-gray-800",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
    },
    {
      title: "Platform Accelerators",
      description: "Modernize your mission critical systems with our versatile technology stack and third-party platform aggregators.",
      icon: Globe,
      features: ["System Modernization", "Third-Party Integration", "Rapid Deployment", "Technology Stack"],
      gradient: "from-gray-800 to-gray-700",
      bgImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-4">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            End-to-End Digital Solutions
          </h2>
          <p className="text-base md:text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Empowering insurance enterprises to keep pace with the evolving marketplace, 
            deal with new regulations, digitalize customer experience, and deliver innovative products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div 
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{
                    backgroundImage: `url('${solution.bgImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-10 h-full shadow-2xl">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/80">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => window.location.href = '/#contact-form'}
                    className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all"
                  >
                    Explore More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
