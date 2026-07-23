import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Headphones, RotateCcw, AlertTriangle, Calendar, DollarSign, Tag, Database, CheckCircle, XCircle } from 'lucide-react';

export const AmazonFBAProsConsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pros' | 'cons'>('pros');

  const pros = [
    {
      title: "Access to Prime Customers",
      description: "When a product enters FBA, it automatically becomes eligible for the Prime loyalty program with free shipping.",
      details: "Prime customers spend almost 3 times more than regular Amazon shoppers. The Prime seal eliminates the #1 reason for cart abandonment: shipping costs.",
      icon: Star,
      stats: "3x more spending",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Greater Visibility in Buy Box",
      description: "FBA sellers receive more prominence in Amazon's Buy Box feature compared to non-FBA sellers.",
      details: "82% of Amazon sales are generated directly by the Buy Box. Any advantage in winning the Buy Box is crucial for success.",
      icon: TrendingUp,
      stats: "82% of sales",
      color: "from-purple-500 to-blue-600"
    },
    {
      title: "Professional Customer Service",
      description: "Amazon's renowned customer service handles all buyer inquiries and issues for your products.",
      details: "Amazon customer service is revered for its quality. You benefit from their reputation and expertise without additional effort.",
      icon: Headphones,
      stats: "24/7 support",
      color: "from-blue-600 to-purple-500"
    },
    {
      title: "Returns Management",
      description: "Amazon handles the entire returns process, which can be cumbersome for individual sellers.",
      details: "Complete returns processing including inspection, restocking, and customer communication. Note: return management fees apply.",
      icon: RotateCcw,
      stats: "Automated process",
      color: "from-purple-600 to-blue-500"
    }
  ];

  const cons = [
    {
      title: "Strict Reception Rules",
      description: "Products must be prepared according to Amazon's highly strict receiving standards before shipping.",
      details: "No flexibility in packaging and labeling requirements. Non-compliance results in fines, rejection, or account deactivation.",
      icon: AlertTriangle,
      impact: "Account risk",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Long-term Storage Fees",
      description: "Units in FBA stock for more than 6 months face significant additional charges.",
      details: "€500.00/m³ fee for long-term storage - almost 20 times the regular storage fee. Requires careful inventory management.",
      icon: Calendar,
      impact: "20x higher costs",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Higher Costs for Other Channels",
      description: "FBA logistics for sales outside Amazon are significantly more expensive.",
      details: "50% more expensive on average for non-Amazon sales, plus €1.80/unit flat rate. Amazon prioritizes their own platform.",
      icon: DollarSign,
      impact: "50% higher fees",
      color: "from-red-600 to-orange-500"
    },
    {
      title: "Limited Brand Building",
      description: "Selling through Amazon reduces your ability to build direct customer relationships and brand loyalty.",
      details: "Customers may not remember your brand after purchase. Limited customization options for product presentation and packaging.",
      icon: Tag,
      impact: "Reduced brand control",
      color: "from-orange-600 to-red-500"
    },
    {
      title: "Loss of Customer Data",
      description: "You don't have direct access to customer information and purchase data.",
      details: "Miss opportunities for direct marketing, customer retention, and building your own customer database for future growth.",
      icon: Database,
      impact: "No customer insights",
      color: "from-red-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&auto=format&q=80" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Analysis
            </div>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            Amazon FBA: Pros & Cons
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Evaluate different factors when considering whether FBA is the best option for your business.
          </p>
        </motion.div>

        {/* Tab Navigation - Glassmorphism */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-1.5 flex shadow-lg border border-gray-200">
            <motion.button
              onClick={() => setActiveTab('pros')}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'pros'
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === 'pros' && (
                <motion.div
                  className="absolute inset-0 bg-blue-600 rounded-lg shadow-lg"
                  layoutId="activeTab"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <CheckCircle className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Advantages</span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('cons')}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'cons'
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === 'cons' && (
                <motion.div
                  className="absolute inset-0 bg-red-600 rounded-lg shadow-lg"
                  layoutId="activeTab"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <XCircle className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Disadvantages</span>
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'pros' && (
            <motion.div
              key="pros"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {pros.map((pro, index) => {
                  const Icon = pro.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Gradient Background */}
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${pro.color} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start mb-6">
                          <div className={`w-14 h-14 bg-gradient-to-br ${pro.color} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-black mb-2">{pro.title}</h3>
                            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                              {pro.stats}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-4">{pro.description}</p>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
                          <p className="text-gray-600 text-sm leading-relaxed">{pro.details}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'cons' && (
            <motion.div
              key="cons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cons.map((con, index) => {
                  const Icon = con.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Gradient Background */}
                      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${con.color} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${con.color} rounded-xl flex items-center justify-center mr-3 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-black mb-2">{con.title}</h3>
                            <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {con.impact}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-3 text-sm">{con.description}</p>
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-3 border border-red-100">
                          <p className="text-gray-600 text-xs leading-relaxed">{con.details}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary - Neumorphism Card */}
        <motion.div
          className="mt-16 relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            boxShadow: '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff'
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
              Making the Right Decision
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              The decision to use Amazon FBA depends on your business model, product characteristics, and growth strategy. 
              Consider your priorities: immediate access to Prime customers vs. long-term brand building, 
              operational simplicity vs. cost control, and market reach vs. customer relationship ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/saadinsides"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 inline-block text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Expert Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
