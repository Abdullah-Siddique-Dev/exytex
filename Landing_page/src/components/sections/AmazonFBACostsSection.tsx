import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Warehouse, Tag, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

export const AmazonFBACostsSection: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<'low' | 'high'>('low');

  const costTypes = [
    {
      title: "Logistics Management Fee",
      description: "Covers packing, handling, packaging, shipping, customer service, and product returns",
      icon: DollarSign,
      details: [
        "Charged per unit sold",
        "Varies by product dimensions and weight",
        "Different rates for low/high season in US",
        "No seasonal difference in Europe currently"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Storage Fee",
      description: "Monthly fee calculated based on cubic meters used per product",
      icon: Warehouse,
      details: [
        "€26.00/m³/month (Jan-Sep)",
        "€36.00/m³/month (Oct-Dec)",
        "Charged monthly based on space used",
        "Updated rates as of April 2018"
      ],
      color: "from-purple-500 to-blue-600"
    }
  ];

  const additionalServices = [
    { name: "Product Labeling", icon: "🏷️", color: "blue" },
    { name: "Bagging Services", icon: "👜", color: "purple" },
    { name: "Bubble Wrap", icon: "🫧", color: "blue" },
    { name: "Opaque Bag", icon: "📦", color: "purple" },
    { name: "Product Sealing", icon: "🔒", color: "blue" },
    { name: "Long-term Storage", icon: "📅", color: "purple" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=80" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

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
              Pricing
            </div>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Amazon FBA Costs & Pricing
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FBA costs depend on product size and time of year, divided into logistics management fees and warehousing fees.
          </p>
        </motion.div>

        {/* Main Cost Types - Split Dual-Color Gradient Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {costTypes.map((cost, index) => {
            const Icon = cost.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cost.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cost.color} rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cost.title}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{cost.description}</p>
                  
                  <div className="space-y-3">
                    {cost.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${cost.color} rounded-full mt-2 flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Seasonal Rates - Interactive Toggle */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">
            Seasonal Storage Rates
          </h3>
          
          {/* Toggle Switch */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-1 flex border border-white/20">
              <button
                onClick={() => setSelectedSeason('low')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedSeason === 'low'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Low Season
              </button>
              <button
                onClick={() => setSelectedSeason('high')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedSeason === 'high'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                High Season
              </button>
            </div>
          </div>

          {/* Season Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                selectedSeason === 'low' 
                  ? 'border-blue-500 shadow-xl shadow-blue-500/20' 
                  : 'border-white/10'
              }`}
              animate={{ scale: selectedSeason === 'low' ? 1.03 : 1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-blue-400">Low Season</h4>
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-300 mb-3">January - September</p>
              <div className="text-2xl font-bold text-blue-400">
                €26.00/m³
              </div>
              <p className="text-gray-400 text-xs mt-1">per month</p>
            </motion.div>

            <motion.div
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                selectedSeason === 'high' 
                  ? 'border-purple-500 shadow-xl shadow-purple-500/20' 
                  : 'border-white/10'
              }`}
              animate={{ scale: selectedSeason === 'high' ? 1.03 : 1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-purple-400">High Season</h4>
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-sm text-gray-300 mb-3">October - December</p>
              <div className="text-2xl font-bold text-blue-400">
                €36.00/m³
              </div>
              <p className="text-gray-400 text-xs mt-1">per month</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Services - Minimal White Professional Cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">
            Optional Additional Services
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {service.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost Calculator CTA - Glassmorphism */}
        <motion.div
          className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 text-center border border-white/20 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Calculate Your FBA Costs
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Want an estimate of costs for your products? Use Amazon's official calculator to get accurate pricing.
            </p>
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Use Amazon Calculator
            </motion.button>
          </div>
        </motion.div>

        {/* Important Notice - Neumorphism Warning */}
        <motion.div
          className="mt-12 relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border-l-4 border-yellow-500 rounded-r-3xl p-6 sm:p-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h4 className="font-bold text-yellow-400 text-lg mb-2">Long-term Storage Fees</h4>
              <p className="text-gray-300 leading-relaxed">
                Units in FBA stock for more than 6 months are subject to a long-term storage fee of <span className="font-bold text-yellow-400">€500.00/m³</span> - 
                almost 20 times the regular storage fee. Manage your inventory carefully to avoid these charges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
