import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, FileText, Sparkles } from 'lucide-react';

const insights = [
  { 
    icon: TrendingUp, 
    title: 'Blockchain Technology Market Trends', 
    description: 'Explore the latest trends shaping the blockchain industry in 2024',
    slug: 'blockchain-market-trends'
  },
  { 
    icon: FileText, 
    title: 'Smart Contracts in Blockchain: Why They Matter', 
    description: 'Understanding the role of smart contracts in modern blockchain applications',
    slug: 'smart-contracts-blockchain'
  },
  { 
    icon: Sparkles, 
    title: 'Top NFT Trends to Watch in 2024 and Beyond', 
    description: 'Discover emerging NFT trends and opportunities for businesses',
    slug: 'nft-trends-2024'
  },
];

const NFTInsightsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-20 bg-[#0B3D91] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3E00FF]">
              Industry Trends
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#0B3D91]/80 to-[#1a1a3e]/80 backdrop-blur-sm border border-[#6C63FF]/30 group">
                <motion.div
                  className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <insight.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">{insight.title}</h3>
                <p className="text-gray-400 mb-6">{insight.description}</p>

                <motion.button
                  onClick={() => navigate(`/insights/${insight.slug}`)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTInsightsSection;
