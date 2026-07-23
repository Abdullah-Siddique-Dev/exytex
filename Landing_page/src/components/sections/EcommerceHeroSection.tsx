import React from 'react';
import { motion } from 'framer-motion';
import { HoverArrowButton } from '../ui/HoverArrowButton';
import { ShoppingCart, CreditCard, Package, TrendingUp, Shield, Truck } from 'lucide-react';

export const EcommerceHeroSection: React.FC = () => {
  const floatingIcons = [
    { Icon: ShoppingCart, delay: 0, x: 20, y: 30 },
    { Icon: CreditCard, delay: 0.2, x: 80, y: 15 },
    { Icon: Package, delay: 0.4, x: 65, y: 70 },
    { Icon: TrendingUp, delay: 0.6, x: 15, y: 75 },
    { Icon: Shield, delay: 0.8, x: 85, y: 55 },
    { Icon: Truck, delay: 1, x: 40, y: 85 },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91] via-[#1e40af] to-[#3b82f6]" />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-30 flex items-center min-h-[calc(100vh-8rem)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">
                  Trusted by 500+ Online Stores
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="block text-white">E-commerce</span>
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed font-light max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Build powerful online stores that drive sales and deliver exceptional shopping
                experiences. From startups to enterprise, we create scalable e-commerce solutions.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                className="flex flex-wrap gap-8 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { value: '$50M+', label: 'Revenue Generated' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '150+', label: 'Stores Built' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <HoverArrowButton text="Start Your Store" variant="primary" size="lg" />
                <HoverArrowButton text="View Examples" variant="secondary" size="lg" />
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Element */}
            <motion.div
              className="relative hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Main Store Card */}
              <motion.div
                className="relative w-full max-w-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {/* Store Mockup */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white/10 rounded-lg px-4 py-1.5 text-center">
                      <span className="text-white/60 text-xs">yourstore.com</span>
                    </div>
                  </div>

                  {/* Store Content */}
                  <div className="space-y-4">
                    {/* Product Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((item) => (
                        <motion.div
                          key={item}
                          className="bg-white/5 rounded-xl p-3 border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + item * 0.1, duration: 0.4 }}
                        >
                          <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-lg mb-2" />
                          <div className="h-2 bg-white/20 rounded w-3/4 mb-1" />
                          <div className="h-2 bg-cyan-400/40 rounded w-1/2" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Cart Bar */}
                    <motion.div
                      className="flex items-center justify-between bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-400/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingCart className="w-5 h-5 text-cyan-300" />
                        <span className="text-white/80 text-sm">3 items</span>
                      </div>
                      <div className="bg-cyan-400 text-gray-900 px-4 py-1.5 rounded-lg text-sm font-semibold">
                        Checkout
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating notification cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Sales Today</div>
                      <div className="text-sm font-bold text-gray-900">+124%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl"
                  initial={{ opacity: 0, scale: 0, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">New Order</div>
                      <div className="text-sm font-bold text-gray-900">#1234</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay: delay + 1,
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <Icon className="w-5 h-5 text-white/60" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
};
