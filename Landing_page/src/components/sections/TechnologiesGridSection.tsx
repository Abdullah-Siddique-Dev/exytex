import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, Smartphone, Database, Cloud, Blocks, Cpu } from 'lucide-react';

export const TechnologiesGridSection: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Blockchain',
      icon: Blocks,
      color: 'from-purple-500 to-purple-600',
      technologies: [
        { name: 'Ethereum', route: '/services/ethereum' },
        { name: 'Smart Contracts', route: '/services/smart-contracts' },
        { name: 'Quorum', route: '/services/quorum' },
        { name: 'Corda', route: '/services/corda' },
        { name: 'Stellar', route: '/services/stellar' },
        { name: 'Hyperledger', route: '/services/hyperledger' },
        { name: 'NFT Development', route: '/services/nft' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-blue-500 to-blue-600',
      technologies: [
        { name: 'Android', route: '/services/android' },
        { name: 'iOS', route: '/services/ios' },
        { name: 'React Native', route: '/services/mobile-app-development' },
        { name: 'Flutter', route: '/services/mobile-app-development' },
        { name: 'Xamarin', route: '/services/mobile-app-development' },
        { name: 'Ionic', route: '/services/mobile-app-development' }
      ]
    },
    {
      title: 'Web Development',
      icon: Code,
      color: 'from-green-500 to-green-600',
      technologies: [
        { name: 'React', route: '/services/web-development' },
        { name: 'Angular', route: '/services/web-development' },
        { name: 'Vue.js', route: '/services/web-development' },
        { name: 'Node.js', route: '/services/web-development' },
        { name: 'Next.js', route: '/services/web-development' },
        { name: 'TypeScript', route: '/services/web-development' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-orange-500 to-orange-600',
      technologies: [
        { name: 'Python', route: '/services' },
        { name: 'Java', route: '/services' },
        { name: 'PHP', route: '/services' },
        { name: 'MongoDB', route: '/services' },
        { name: 'PostgreSQL', route: '/services' },
        { name: 'MySQL', route: '/services' }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-cyan-500 to-cyan-600',
      technologies: [
        { name: 'AWS', route: '/services/cloud-solutions' },
        { name: 'Azure', route: '/services/cloud-solutions' },
        { name: 'Google Cloud', route: '/services/cloud-solutions' },
        { name: 'Docker', route: '/services/cloud-solutions' },
        { name: 'Kubernetes', route: '/services/cloud-solutions' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Cpu,
      color: 'from-pink-500 to-pink-600',
      technologies: [
        { name: 'TensorFlow', route: '/services' },
        { name: 'PyTorch', route: '/services' },
        { name: 'OpenAI', route: '/services' },
        { name: 'Computer Vision', route: '/services' },
        { name: 'NLP', route: '/services' }
      ]
    }
  ];

  return (
    <section className="py-12 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-full">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technologies We Master
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: '"Inter", sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore our comprehensive technology stack across different platforms and frameworks
            </motion.p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Technologies List */}
                <div className="space-y-2">
                  {category.technologies.map((tech) => (
                    <button
                      key={tech.name}
                      onClick={() => navigate(tech.route)}
                      className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
