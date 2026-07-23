import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Building2, 
  Settings, 
  Home,
  Target
} from 'lucide-react';

export const WhyChooseDamcoSection: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: '27+ Years of Expertise',
      description: 'We are industry leaders with 27+ years of experience in delivering technology services and solutions to customers around the globe.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Customer-First Mindset',
      description: 'We are customer-focused and work towards delivering user-friendly solutions. We prioritize customer experience in our processes, behavior, and attitude.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Building2,
      title: 'A Big Small Company',
      description: 'We go big when it comes to capturing technology space; we keep it small when it\'s about hierarchy and rules that hinder creativity.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'With expertise in emerging as well as legacy technologies, we deliver best-suited and customized solutions to meet your modern business needs.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Home,
      title: 'Under One Roof',
      description: 'From implementing CRMs to developing e-commerce solutions, we have a team of industry experts to understand your every business need.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Ensuring Success. Always',
      description: 'We are highly focused on designing partner-centric business models, nurturing existing relationships, and ensuring outright success.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-12 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Damco?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enabling Businesses to Excel with Our Time-Tested Superior Services
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
