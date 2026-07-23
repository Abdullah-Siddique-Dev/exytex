import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, ArrowRight } from 'lucide-react';

export const InsuranceReadings: React.FC = () => {
  const readings = [
    {
      type: "Workshop",
      title: "Insurance Advisory Workshop",
      description: "Comprehensive workshop on insurance digital transformation strategies",
      icon: BookOpen,
      gradient: "from-blue-600 to-cyan-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
    },
    {
      type: "Webinar",
      title: "Improving Claims Processing with Digital FNOL",
      description: "Learn how digital first notice of loss transforms claims management",
      icon: Video,
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070"
    },
    {
      type: "Webinar",
      title: "Insurance Claims Process Automation with AI",
      description: "Discover AI-enabled ecosystem for automated claims processing",
      icon: FileText,
      gradient: "from-blue-700 to-blue-600",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069')`,
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full p-4">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Recommended Readings
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights and resources on insurance technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {readings.map((reading, index) => {
            const Icon = reading.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${reading.image}')` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${reading.gradient} opacity-80`}></div>
                  </div>
                  
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold">
                      {reading.type}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {reading.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {reading.description}
                  </p>
                  <button 
                    onClick={() => window.location.href = '/#contact-form'}
                    className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all"
                  >
                    Learn More
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
