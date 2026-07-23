import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, Users, Award, Zap, Globe, HeartHandshake } from 'lucide-react';

export const HireDeveloperBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Pre-vetted Talent',
      description: 'All developers go through rigorous screening including technical assessments and background checks.',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126'
    },
    {
      icon: Clock,
      title: 'Quick Matching',
      description: 'Get matched with qualified developers within 48 hours of submitting your requirements.',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Save up to 60% on hiring costs compared to traditional recruitment methods.',
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070'
    },
    {
      icon: Users,
      title: 'Flexible Teams',
      description: 'Scale your team up or down based on project needs with flexible engagement models.',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Ongoing performance monitoring and quality assurance throughout the project lifecycle.',
      gradient: 'from-indigo-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070'
    },
    {
      icon: Zap,
      title: 'Fast Onboarding',
      description: 'Streamlined onboarding process gets your developer productive from day one.',
      gradient: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070'
    },
    {
      icon: Globe,
      title: 'Global Talent Pool',
      description: 'Access developers from around the world with diverse skills and experience.',
      gradient: 'from-teal-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084'
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Support',
      description: '24/7 support from our team to ensure smooth collaboration and project success.',
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-indigo-50/95 to-purple-50/95"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4">
              <Award className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Our Developers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of working with our carefully curated network of professional developers
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Neumorphism Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff] hover:shadow-[25px_25px_75px_#d1d9e6,-25px_-25px_75px_#ffffff] transition-all duration-500">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url('${benefit.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 rounded-3xl overflow-hidden"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '500+', label: 'Expert Developers', icon: Users },
                { value: '98%', label: 'Success Rate', icon: Award },
                { value: '48hrs', label: 'Avg. Match Time', icon: Clock },
                { value: '60%', label: 'Cost Savings', icon: DollarSign },
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <StatIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};