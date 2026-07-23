import React from 'react';
import { motion } from 'framer-motion';

export const ModernAboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 via-purple-50/30 to-blue-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            style={{ fontFamily: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover Exytex
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Card 1 - About Exytex */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full">
              {/* Glassmorphism Card */}
              <motion.div
                className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-500/10 h-full"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Light reflection effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                  initial={{ rotate: -45, scale: 0.8 }}
                  whileHover={{ 
                    rotate: -35,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-6"
                    style={{ fontFamily: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    About Exytex
                  </motion.h3>

                  {/* Content */}
                  <motion.p
                    className="text-slate-600 leading-relaxed text-base md:text-lg font-normal"
                    style={{ fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Exytex conceptualizes, designs, develops and promotes your idea into real, practical, feasible and easy to use solutions that help you maximize revenue. We have experience in managing all types of digital project design and development that can range from small business automation to web-compliant and large enterprise ERP systems. Same level of synergy and robust quality methods. We offer you customized solutions With more than three years of experience providing technological solutions. It allows us to meet the needs of our customers and provide solutions that help boost your business. We combine the talents of our highly skilled engineering staff with our top-notch marketing team, working from the Pakistan with a commitment to helping companies build great, reliable services in website, applications digital marketing and graphic design. fast and reliable way.
                  </motion.p>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40"
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2 - Why Choose Us */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full">
              {/* Glassmorphism Card */}
              <motion.div
                className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-500/10 h-full"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Light reflection effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-bl from-white/40 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                  initial={{ rotate: 45, scale: 0.8 }}
                  whileHover={{ 
                    rotate: 35,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: -5,
                      boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent mb-6"
                    style={{ fontFamily: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Why Choose Us
                  </motion.h3>

                  {/* Content */}
                  <motion.p
                    className="text-slate-600 leading-relaxed text-base md:text-lg font-normal"
                    style={{ fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    We have extensive experience in Android, integration with REST APIs, integrations with social networks (Facebook, Twitter, Instagram, Google+), push notifications, Google maps and geolocation, analytics, QR codes, video, audio, photos and camera As well as using Java and Kotlin, Android Studio, Material design, Gradle, Retrofit, and some other awesome tools. If you are looking to have a development team sharing the same time zone, close and integrated with yours.
                  </motion.p>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-6 right-8 w-2 h-2 bg-purple-400 rounded-full opacity-60"
                    animate={{
                      y: [0, -12, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40"
                    animate={{
                      y: [0, -6, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
