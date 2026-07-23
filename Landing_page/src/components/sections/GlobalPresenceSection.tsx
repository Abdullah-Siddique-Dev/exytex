import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';

const offices = [
  {
    id: 1,
    country: 'Pakistan',
    city: 'Wah Cantt',
    flag: '🇵🇰',
    position: { x: 72, y: 35 }, // Approximate position on world map
    address: 'Minaar Rd, Lala Rukh St, Wah Cantt, 47040, Pakistan',
    phone: '+92 309 5930315',
    email: 'info@exytex.com'
  },
  {
    id: 2,
    country: 'United Kingdom',
    city: 'Bradford',
    flag: '🇬🇧',
    position: { x: 50, y: 25 },
    address: '27 Hollybank Gardens, Bradford BD7 4QR, UK',
    phone: '+44 7466 109725',
    email: 'info@exytex.com'
  },
  {
    id: 3,
    country: 'United Arab Emirates',
    city: 'Dubai',
    flag: '🇦🇪',
    position: { x: 68, y: 40 },
    address: 'Dubai, UAE – France Cluster Pavilion Mall P-05, Intl City',
    phone: '+92 309 5930315',
    email: 'info@exytex.com'
  }
];

export const GlobalPresenceSection: React.FC = () => {
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Global Presence
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Serving Clients
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With offices across three continents, we provide 24/7 support and local expertise 
            to deliver exceptional digital solutions globally.
          </p>
        </AnimatedSection>

        {/* World Map with Pins */}
        <motion.div
          className="relative max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Simplified World Map SVG */}
          <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl border border-blue-200">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
              style={{ maxHeight: '400px' }}
            >
              {/* Simplified world map paths */}
              <g fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1">
                {/* North America */}
                <path d="M150 100 L300 80 L320 150 L280 200 L200 180 L150 150 Z" />
                {/* South America */}
                <path d="M250 250 L300 240 L320 350 L280 400 L250 380 L240 300 Z" />
                {/* Europe */}
                <path d="M450 80 L550 70 L560 150 L500 160 L450 140 Z" />
                {/* Africa */}
                <path d="M480 180 L580 170 L590 350 L520 380 L480 320 Z" />
                {/* Asia */}
                <path d="M600 60 L850 50 L880 200 L750 220 L600 180 Z" />
                {/* Australia */}
                <path d="M750 300 L850 290 L860 350 L780 360 Z" />
              </g>
            </svg>

            {/* Office Pins */}
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${office.position.x}%`,
                  top: `${office.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                onHoverStart={() => setHoveredOffice(office.id)}
                onHoverEnd={() => setHoveredOffice(null)}
              >
                {/* Animated Pin */}
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {/* Glowing Ring */}
                  <motion.div
                    className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full opacity-30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Pin */}
                  <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-xs">{office.flag}</span>
                  </div>
                </motion.div>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredOffice === office.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      className="absolute top-12 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-20"
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{office.flag}</div>
                        <h3 className="font-bold text-gray-900 mb-1">{office.city}</h3>
                        <p className="text-sm text-gray-600 mb-4">{office.country}</p>
                        
                        <div className="space-y-2 text-left">
                          <div className="flex items-start space-x-2">
                            <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span className="text-xs text-gray-600">{office.address}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-xs text-gray-600">{office.phone}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs text-gray-600">{office.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)"
                }}
              >
                <div className="text-4xl mb-4">{office.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600 mb-4">{office.country}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <p>{office.address}</p>
                  <p className="text-blue-600 font-medium">{office.phone}</p>
                  <p className="text-blue-600 font-medium">{office.email}</p>
                </div>

                <motion.button
                  className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Office
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
