import React, { useState } from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { ContactFormModal } from '../components/ui/ContactFormModal';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Blocks,
  Palette,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const HireDeveloperPage: React.FC = () => {
  useSmoothScroll();
  const [showContactForm, setShowContactForm] = useState(false);

  const heading = useTypewriter({ text: 'Hire Expert Developers', speed: 50 });
  const subtitle = useTypewriter({ 
    text: 'Build your dream team with our skilled developers', 
    speed: 30,
    delay: heading.isComplete ? 200 : 0 
  });

  const developers = [
    {
      icon: Code2,
      title: 'Full Stack Developers',
      skills: ['React', 'Node.js', 'Python', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500',
      experience: '5+ Years'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Developers',
      skills: ['iOS', 'Android', 'React Native', 'Flutter'],
      color: 'from-purple-500 to-pink-500',
      experience: '4+ Years'
    },
    {
      icon: Blocks,
      title: 'Blockchain Developers',
      skills: ['Ethereum', 'Solidity', 'Web3', 'Smart Contracts'],
      color: 'from-orange-500 to-red-500',
      experience: '3+ Years'
    },
    {
      icon: Database,
      title: 'Backend Developers',
      skills: ['Java', 'Python', 'PostgreSQL', 'AWS'],
      color: 'from-green-500 to-emerald-500',
      experience: '5+ Years'
    },
    {
      icon: Palette,
      title: 'UI/UX Designers',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      color: 'from-pink-500 to-rose-500',
      experience: '4+ Years'
    },
    {
      icon: Cloud,
      title: 'DevOps Engineers',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
      color: 'from-indigo-500 to-blue-500',
      experience: '5+ Years'
    }
  ];

  const benefits = [
    'Pre-vetted talent pool',
    'Flexible engagement models',
    'Quick onboarding process',
    'Dedicated project manager',
    'NDA & IP protection',
    'Timezone compatibility'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {heading.displayText}
                {!heading.isComplete && <span className="animate-pulse">|</span>}
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {subtitle.displayText}
                {heading.isComplete && !subtitle.isComplete && <span className="animate-pulse">|</span>}
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.button
                onClick={() => setShowContactForm(true)}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="relative h-[350px] lg:h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex items-center justify-center"
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <Code2 className="w-16 h-16 text-blue-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-gray-300 text-base">Choose from our pool of talented developers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((dev, index) => (
              <motion.div
                key={dev.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${dev.color} mb-4`}>
                  <dev.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{dev.title}</h3>
                <p className="text-blue-400 text-sm mb-4">{dev.experience} Experience</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-gray-300 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all"
                >
                  Hire Developer
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ElegantFooter />
      <FloatingActionButton />
      <ContactFormModal isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </div>
  );
};

export default HireDeveloperPage;
