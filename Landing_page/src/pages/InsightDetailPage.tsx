import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, TrendingUp, FileText, Sparkles } from 'lucide-react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';

const insightsData: Record<string, {
  icon: any;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string[];
  keyPoints: string[];
}> = {
  'blockchain-market-trends': {
    icon: TrendingUp,
    title: 'Blockchain Technology Market Trends',
    description: 'Explore the latest trends shaping the blockchain industry in 2024',
    date: 'February 14, 2026',
    readTime: '5 min read',
    content: [
      'The blockchain technology market continues to evolve at a rapid pace, transforming industries and creating new opportunities for businesses worldwide. As we move through 2024, several key trends are emerging that will shape the future of this revolutionary technology.',
      'Decentralized Finance (DeFi) has matured significantly, with institutional adoption reaching new heights. Major financial institutions are now integrating blockchain solutions into their core operations, recognizing the efficiency and transparency benefits.',
      'Enterprise blockchain solutions are becoming more sophisticated, with improved scalability and interoperability. Companies are moving beyond proof-of-concept projects to full-scale implementations that deliver measurable business value.',
      'The integration of artificial intelligence with blockchain technology is opening new possibilities for smart contracts and automated decision-making systems. This convergence is creating more intelligent and adaptive blockchain networks.',
    ],
    keyPoints: [
      'Institutional DeFi adoption accelerating',
      'Enterprise blockchain reaching maturity',
      'AI-blockchain integration expanding',
      'Regulatory frameworks becoming clearer',
      'Sustainability focus driving innovation',
    ],
  },
  'smart-contracts-blockchain': {
    icon: FileText,
    title: 'Smart Contracts in Blockchain: Why They Matter',
    description: 'Understanding the role of smart contracts in modern blockchain applications',
    date: 'February 14, 2026',
    readTime: '6 min read',
    content: [
      'Smart contracts represent one of the most transformative applications of blockchain technology. These self-executing contracts with terms directly written into code are revolutionizing how agreements are made and enforced across industries.',
      'The automation capabilities of smart contracts eliminate intermediaries, reduce costs, and increase transaction speed. From supply chain management to real estate transactions, smart contracts are streamlining processes that traditionally required multiple parties and extensive paperwork.',
      'Security and transparency are fundamental advantages of smart contracts. Once deployed on a blockchain, these contracts are immutable and transparent, providing all parties with confidence in the execution and outcome of agreements.',
      'Modern smart contract platforms are becoming more sophisticated, offering enhanced functionality, better gas optimization, and improved security features. Developers now have access to robust tools and frameworks that make smart contract development more accessible and reliable.',
    ],
    keyPoints: [
      'Automated execution reduces costs',
      'Eliminates need for intermediaries',
      'Immutable and transparent operations',
      'Cross-industry applications expanding',
      'Enhanced security and reliability',
    ],
  },
  'nft-trends-2024': {
    icon: Sparkles,
    title: 'Top NFT Trends to Watch in 2024 and Beyond',
    description: 'Discover emerging NFT trends and opportunities for businesses',
    date: 'February 14, 2026',
    readTime: '7 min read',
    content: [
      'The NFT landscape is evolving beyond digital art and collectibles, with new use cases emerging across various industries. As we look ahead, several trends are positioning NFTs as essential tools for digital ownership and authentication.',
      'Utility-focused NFTs are gaining traction, offering real-world benefits beyond mere ownership. From exclusive access to events and communities to tangible product redemptions, NFTs are becoming more practical and valuable.',
      'The integration of NFTs with physical assets is creating new opportunities in real estate, luxury goods, and intellectual property. This bridge between digital and physical worlds is expanding the NFT market significantly.',
      'Gaming and metaverse applications continue to drive NFT adoption, with play-to-earn models and virtual real estate creating new economic opportunities. Major gaming companies are now embracing NFT technology to enhance player experiences and ownership.',
    ],
    keyPoints: [
      'Utility-focused NFTs gaining momentum',
      'Physical-digital asset integration',
      'Gaming and metaverse expansion',
      'Brand engagement opportunities',
      'Fractional ownership models emerging',
    ],
  },
};

const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const insight = slug ? insightsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!insight) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B3D91] to-[#1a1a3e] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Insight Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white rounded-full font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const Icon = insight.icon;

  return (
    <>
      <Helmet>
        <title>{insight.title} | Exytex Technologies</title>
        <meta name="description" content={insight.description} />
      </Helmet>

      <div className="bg-gradient-to-br from-[#0B3D91] to-[#1a1a3e] min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#6C63FF] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <motion.button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back</span>
            </motion.button>

            {/* Icon and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#3E00FF] flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {insight.title}
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                {insight.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm sm:text-base">{insight.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm sm:text-base">{insight.readTime}</span>
                </div>
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/20 hover:bg-[#6C63FF]/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm sm:text-base">Share</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#0B3D91]/60 to-[#1a1a3e]/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#6C63FF]/20"
              >
                {/* Content Paragraphs */}
                <div className="prose prose-invert max-w-none mb-12">
                  {insight.content.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Key Points */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-[#6C63FF]/10 to-[#3E00FF]/10 rounded-2xl p-6 sm:p-8 border border-[#6C63FF]/30"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Key Takeaways</h2>
                  <ul className="space-y-4">
                    {insight.keyPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-base sm:text-lg">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-12 text-center"
                >
                  <p className="text-gray-300 text-lg mb-6">
                    Ready to leverage these insights for your business?
                  </p>
                  <motion.button
                    onClick={() => (window.location.href = '/#contact')}
                    className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#3E00FF] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-[#6C63FF]/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default InsightDetailPage;
