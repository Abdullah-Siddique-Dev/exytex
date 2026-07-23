import React from 'react';
import { motion } from 'framer-motion';

export const GraphicDesignAdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: '🎯',
      title: 'Consistent Brand Identity',
      description: 'One of the main advantages of working with us will be that you can always have multiple related design services when you need them, maintaining coherence in the general design line of your brand or business over time.',
      features: ['Brand Consistency', 'Professional Service', 'Long-term Partnership', 'Cost Effective']
    },
    {
      icon: '📈',
      title: 'Business Growth Focus',
      description: 'You can start by asking us to design a logo and later you may need to expand the corporate image to adapt it to new products or services or to new facilities. In all cases you can count on us.',
      features: ['Scalable Solutions', 'Business Expansion', 'Adaptable Designs', 'Future-Ready']
    },
    {
      icon: '💡',
      title: 'Creative Excellence',
      description: 'As professionals in advertising design, our creative team is capable of developing all the necessary pieces, working to meet the expectations of our clients, and make the designs useful sales tools.',
      features: ['Creative Team', 'Sales-Focused Design', 'Client Expectations', 'Professional Results']
    },
    {
      icon: '🌐',
      title: 'Digital & Print Expertise',
      description: 'We offer design solutions, both offline (logos, advertising posters, catalogs and brochures, business cards, corporate stationery) and online (web page design, banners, microsites, apps).',
      features: ['Offline Design', 'Online Graphics', 'Complete Solutions', 'Multi-Platform']
    }
  ];

  const designTypes = [
    {
      title: 'Advertising & Editorial Design',
      description: 'To carry out a launch, a promotion or a specific campaign, the graphic design of the advertising pieces is necessary. Flyers, catalogs, brochures, or digital graphic designs are useful tools to make the mentioned actions known to the target audience.',
      icon: '📢',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Social Media Graphics',
      description: 'Social media is one of the most valuable channels in today\'s landscape. The design of images for social networks is the service that we offer at Exytex with the aim of effectively communicating a message.',
      icon: '📱',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Web & App Design',
      description: 'In the design of a web page or the development of a mobile application, graphic design plays a leading role. It affects the brand image that the users configure and helps generate links with the target audience.',
      icon: '💻',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Creative Brand Design',
      description: 'Graphic design gives great opportunities for companies, brands, and institutions. We create and develop graphic designs that promote the memory of brands through deep knowledge of business communication.',
      icon: '🎨',
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-6">
        {/* Advantages Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-inter">
              Advantages of Working with Exytex
            </h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto font-inter">
              As your graphic design agency, we provide comprehensive solutions that grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 font-inter">{advantage.title}</h3>
                <p className="text-purple-200 mb-6 leading-relaxed font-inter">{advantage.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {advantage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-purple-300 font-inter">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>




      </div>
    </section>
  );
};