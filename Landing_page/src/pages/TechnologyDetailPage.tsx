import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Code, Zap, Shield, Users, ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';
import { scrollToContactForm } from '../utils/scrollUtils';

const technologyData: Record<string, {
  title: string;
  description: string;
  features: string[];
  useCases: string[];
}> = {
  java: {
    title: 'Java Development',
    description: 'Enterprise-grade Java development services for scalable, secure, and high-performance applications.',
    features: ['Spring Boot', 'Microservices', 'Enterprise Applications', 'Cloud-Native Development'],
    useCases: ['Enterprise Software', 'Web Applications', 'Android Apps', 'Big Data Solutions']
  },
  python: {
    title: 'Python Development',
    description: 'Professional Python development for web applications, data science, AI/ML, and automation.',
    features: ['Django/Flask', 'Data Science', 'Machine Learning', 'Automation Scripts'],
    useCases: ['Web Development', 'AI/ML Solutions', 'Data Analytics', 'Automation']
  },
  php: {
    title: 'PHP Development',
    description: 'Custom PHP development services for dynamic websites and web applications.',
    features: ['Laravel', 'Symfony', 'WordPress', 'Custom CMS'],
    useCases: ['Web Applications', 'E-commerce', 'CMS Development', 'API Development']
  },
  angular: {
    title: 'Angular Development',
    description: 'Modern Angular development for dynamic single-page applications and enterprise solutions.',
    features: ['SPA Development', 'Progressive Web Apps', 'Enterprise Applications', 'Real-time Apps'],
    useCases: ['Enterprise Portals', 'Dashboard Applications', 'E-commerce Platforms', 'Social Networks']
  },
  react: {
    title: 'React Development',
    description: 'Professional React development for fast, interactive user interfaces and web applications.',
    features: ['React.js', 'Next.js', 'React Native', 'Redux'],
    useCases: ['Web Applications', 'Mobile Apps', 'E-commerce', 'Social Platforms']
  },
  nodejs: {
    title: 'Node.js Development',
    description: 'Scalable Node.js development for real-time applications and microservices.',
    features: ['Express.js', 'Real-time Apps', 'Microservices', 'API Development'],
    useCases: ['Real-time Applications', 'REST APIs', 'Chat Applications', 'Streaming Services']
  },
  mean: {
    title: 'MEAN Stack Development',
    description: 'Full-stack MEAN (MongoDB, Express, Angular, Node.js) development services.',
    features: ['Full-Stack Development', 'Real-time Applications', 'Scalable Architecture', 'Cloud Deployment'],
    useCases: ['Web Applications', 'Enterprise Solutions', 'E-commerce', 'Social Networks']
  },
  drupal: {
    title: 'Drupal Development',
    description: 'Professional Drupal CMS development for enterprise content management solutions.',
    features: ['Custom Modules', 'Theme Development', 'Migration Services', 'API Integration'],
    useCases: ['Corporate Websites', 'Government Portals', 'Educational Platforms', 'Media Sites']
  },
  wordpress: {
    title: 'WordPress Development',
    description: 'Custom WordPress development for websites, blogs, and e-commerce solutions.',
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Performance Optimization'],
    useCases: ['Business Websites', 'Blogs', 'E-commerce', 'Portfolio Sites']
  },
  sitecore: {
    title: 'Sitecore Development',
    description: 'Enterprise Sitecore CMS development for personalized digital experiences.',
    features: ['Personalization', 'Marketing Automation', 'Multi-site Management', 'Analytics'],
    useCases: ['Enterprise Websites', 'Marketing Platforms', 'E-commerce', 'Customer Portals']
  },
  as400: {
    title: 'AS/400 Development',
    description: 'Legacy AS/400 (IBM i) development and modernization services.',
    features: ['RPG Development', 'System Modernization', 'Integration Services', 'Migration'],
    useCases: ['Enterprise Systems', 'Legacy Modernization', 'ERP Systems', 'Business Applications']
  },
  rpg: {
    title: 'RPG Development',
    description: 'IBM RPG programming services for business applications and system integration.',
    features: ['RPG IV', 'ILE RPG', 'System Integration', 'Modernization'],
    useCases: ['Business Applications', 'ERP Systems', 'Legacy Systems', 'Data Processing']
  },
  cobol: {
    title: 'COBOL Development',
    description: 'COBOL programming and modernization services for enterprise systems.',
    features: ['Legacy Maintenance', 'Modernization', 'Migration', 'Integration'],
    useCases: ['Banking Systems', 'Insurance', 'Government', 'Enterprise Applications']
  },
  db2: {
    title: 'DB2 Development',
    description: 'IBM DB2 database development and optimization services.',
    features: ['Database Design', 'Performance Tuning', 'Migration', 'Administration'],
    useCases: ['Enterprise Databases', 'Data Warehousing', 'Business Intelligence', 'Analytics']
  }
};

const TechnologyDetailPage: React.FC = () => {
  useSmoothScroll();
  const { tech } = useParams<{ tech: string }>();
  const techInfo = tech ? technologyData[tech] : null;
  
  // Technology-specific images
  const getTechImage = () => {
    const techImages: Record<string, string> = {
      java: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
      python: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1920&q=80',
      php: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=1920&q=80',
      angular: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
      react: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&q=80',
      nodejs: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1920&q=80',
      mean: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80',
      drupal: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80',
      wordpress: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80',
      sitecore: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
      as400: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      rpg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      cobol: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      db2: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1920&q=80'
    };
    return techImages[tech || 'java'] || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80';
  };

  const [displayText, setDisplayText] = useState('');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const backgrounds = [
    'linear-gradient(135deg, #0B3D91 0%, #6C63FF 100%)',
    'linear-gradient(135deg, #6C63FF 0%, #3E00FF 100%)',
    'linear-gradient(135deg, #4B0082 0%, #0B3D91 100%)',
  ];

  // Form submission handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  // Typewriter effect
  useEffect(() => {
    if (!techInfo) return;
    let index = 0;
    const fullText = techInfo.title;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [techInfo]);

  // Background rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 61, 145, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(108, 99, 255, 0.6)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  if (!techInfo) {
    return <Navigate to="/technologies" replace />;
  }

  const faqs = [
    { q: 'What is the typical project timeline?', a: 'Project timelines vary based on complexity, typically ranging from 4-12 weeks for standard implementations.' },
    { q: 'Do you provide ongoing support?', a: 'Yes, we offer 24/7 support and maintenance services to ensure your application runs smoothly.' },
    { q: 'Can you integrate with existing systems?', a: 'Absolutely! We specialize in seamless integration with existing infrastructure and third-party services.' },
    { q: 'What is your development process?', a: 'We follow an agile methodology with regular sprints, continuous feedback, and iterative improvements.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3D91] via-[#4B0082] to-[#0B3D91]">
      <CursorFollower />
      <ScrollProgress />
      <SleekHeader />

      {/* Hero Section - Text Left, Visual Right */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${getTechImage()}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/95 via-[#0B3D91]/80 to-transparent" />
        
        {/* Subtle Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#6C63FF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Small Badge */}
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 backdrop-blur-sm mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[#6C63FF] text-sm font-semibold tracking-wide">Professional Development</span>
              </motion.div>

              {/* Title with Typewriter - Better Font */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-['Inter']">
                {displayText}
                <motion.span
                  className="text-[#6C63FF]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </h1>
              
              <motion.p
                className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-['Inter']"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {techInfo.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  onClick={scrollToContactForm}
                  className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white font-medium text-base overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(108, 99, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#3E00FF] to-[#6C63FF]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-6 md:gap-8 mt-10 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { label: 'Projects Delivered', value: '150+' },
                  { label: 'Happy Clients', value: '85+' },
                  { label: 'Success Rate', value: '96%' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              className="relative h-[500px] hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Floating Code Blocks */}
              <div className="relative w-full h-full">
                {[
                  { size: 'w-64 h-48', pos: 'top-0 right-0', delay: 0 },
                  { size: 'w-56 h-40', pos: 'top-32 left-0', delay: 0.2 },
                  { size: 'w-60 h-44', pos: 'bottom-20 right-12', delay: 0.4 },
                ].map((block, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${block.size} ${block.pos} rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-2xl`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -15, 0],
                    }}
                    transition={{
                      opacity: { delay: block.delay },
                      y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="space-y-2">
                        {[...Array(4)].map((_, j) => (
                          <div key={j} className="h-2 bg-white/20 rounded" style={{ width: `${60 + Math.random() * 40}%` }} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Central Icon */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center shadow-2xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                  }}
                >
                  <Code className="w-16 h-16 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section - Left Fixed, Right Scrolls */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 py-12">
            {/* Left Side - Sticky */}
            <div className="lg:sticky lg:top-24 lg:h-screen flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#6C63FF] font-semibold text-xs md:text-sm uppercase tracking-wider">Why Choose {tech}</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  Build Better with {techInfo.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Discover the powerful features and capabilities that make {tech} the perfect choice for your next project. Our expert team delivers enterprise-grade solutions.
                </p>
                
                <div className="mt-8 space-y-4">
                  {['Fast Development', 'Scalable Architecture', 'Expert Support'].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#6C63FF]/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#6C63FF]" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Scrolling Cards */}
            <div className="space-y-6">
              {techInfo.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(108, 99, 255, 0.15)' }}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#6C63FF]/50 transition-all cursor-pointer group shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#6C63FF] transition-colors">
                        {feature}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        Professional {feature.toLowerCase()} implementation with industry best practices and scalable architecture.
                      </p>
                    </div>

                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#6C63FF] group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Glassmorphism Cards with Expand */}
      <section className="py-12 bg-gradient-to-b from-[#0B3D91] to-[#4B0082] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-16"
          >
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">Features</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techInfo.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#6C63FF]/30 text-center cursor-pointer group"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(108, 99, 255, 0.2), transparent 70%)',
                  }}
                />
                
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{feature}</h3>
                <p className="text-gray-400 text-xs md:text-sm">Click to learn more</p>

                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(108, 99, 255, 0.3)',
                      '0 0 40px rgba(62, 0, 255, 0.5)',
                      '0 0 20px rgba(108, 99, 255, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expanded Card Modal - Improved */}
        <AnimatePresence>
          {expandedCard !== null && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedCard(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 md:p-10 max-w-2xl w-full shadow-2xl"
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center mb-4">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{techInfo.features[expandedCard]}</h3>
                  </div>
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Comprehensive {techInfo.features[expandedCard].toLowerCase()} solutions tailored to your business needs. Our expert team delivers high-quality, scalable implementations with industry-leading practices.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {['Industry-leading practices', 'Scalable architecture', 'Expert support', 'Fast delivery'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <CheckCircle className="w-5 h-5 text-[#6C63FF] flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    onClick={scrollToContactForm}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setExpandedCard(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Use Cases - 3D Carousel */}
      <section className="py-12 bg-[#0B3D91] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-16"
          >
            Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">Cases</span>
          </motion.h2>

          <div className="relative h-96 flex items-center justify-center perspective-1000">
            {techInfo.useCases.map((useCase, index) => {
              const angle = (index * 360) / techInfo.useCases.length;
              const radius = 250;
              
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    x: Math.cos((angle * Math.PI) / 180) * radius - 100,
                    y: Math.sin((angle * Math.PI) / 180) * (radius * 0.5) - 100,
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-48 h-48 p-6 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] text-center flex flex-col items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: { duration: 2 + index * 0.3, repeat: Infinity },
                    }}
                  >
                    <Zap className="w-12 h-12 text-white mb-3" />
                    <h3 className="text-lg font-bold text-white">{useCase}</h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Flip Cards */}
      <section className="py-12 bg-gradient-to-b from-[#4B0082] to-[#0B3D91]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-16"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security and reliability', details: 'We implement industry-leading security practices and ensure 99.9% uptime for all our solutions.' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Agile development with quick turnaround', details: 'Our agile methodology ensures rapid development cycles with continuous delivery and integration.' },
              { icon: Users, title: 'Expert Team', desc: 'Certified developers with years of experience', details: 'Our team consists of certified professionals with an average of 8+ years of industry experience.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="perspective-1000 h-80"
                onMouseEnter={() => setFlippedCards([...flippedCards, index])}
                onMouseLeave={() => setFlippedCards(flippedCards.filter(i => i !== index))}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d"
                  animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#4B0082]/80 backdrop-blur-sm border border-[#6C63FF]/30 text-center flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-16 h-16 text-[#6C63FF] mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 backface-hidden p-8 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] text-center flex flex-col items-center justify-center"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-sm md:text-base text-white/90 mb-6">{item.details}</p>
                    <motion.button
                      onClick={scrollToContactForm}
                      className="px-6 py-2 rounded-full bg-white text-[#6C63FF] font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-12 bg-[#0B3D91]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-16"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">Questions</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className="rounded-2xl overflow-hidden cursor-pointer bg-white/10 backdrop-blur-md border border-[#6C63FF]/30"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-base md:text-lg font-semibold text-white pr-8">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-6 h-6 ${openFAQ === index ? 'text-[#6C63FF]' : 'text-gray-400'}`} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px bg-gradient-to-r from-transparent via-[#6C63FF]/50 to-transparent mb-4" />
                          <p className="text-sm md:text-base text-gray-300">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {openFAQ === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl -z-10"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(108, 99, 255, 0.5)',
                        '0 0 40px rgba(62, 0, 255, 0.5)',
                        '0 0 20px rgba(108, 99, 255, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get Started with <span className="text-[#6C63FF]">{techInfo?.title}</span>
              </motion.h2>
              <motion.p
                className="text-sm md:text-base text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Ready to build your next project? Contact our experts for a free consultation.
              </motion.p>
            </div>

            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {showSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent">
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="enterprise">Enterprise Solution</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white mb-2">Project Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white px-6 py-3 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </div>
              </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <ElegantFooter />
      <FloatingActionButton />
    </div>
  );
};

export default TechnologyDetailPage;
