import React from 'react';
import { motion } from 'framer-motion';

export const InsuranceBlockchainSection: React.FC = () => {
  const recognitions = [
    "Featured in Everest's Application and Digital Services (ADS) In Life and Annuities (L&A) Insurance Peak Matrix® Assessment 2022",
    "Recognized in Celent's Latin American P&C PAS Systems Report",
    "Featured in Everest's Insurance Platforms IT Services Peak Matrix® Assessment 2022",
    "Recognized in Celent's Global Health Policy Administration System Vendor Report",
    "Featured in Everest's Salesforce Services in Insurance Peak Matrix® Assessment 2022"
  ];

  const solutions = [
    {
      title: "Advanced Products",
      description: "Modern insurance technology platforms to accelerate innovation and integration while ensuring successful digital transformation.",
      icon: "🚀",
      color: "blue"
    },
    {
      title: "Technology Services", 
      description: "Wide range of transformative services to help improve core operations model while developing new sources of revenue stream.",
      icon: "⚙️",
      color: "green"
    },
    {
      title: "Platform Accelerators",
      description: "Modernize your mission critical systems with our versatile technology stack and third-party platform aggregators.",
      icon: "🔧",
      color: "purple"
    }
  ];

  const segments = [
    {
      title: "Insurers",
      description: "Damco has broad knowledge and extensive experience in serving both insurance and insurtech companies across all lines of business, including property & casualty, life, pension, and health insurance providers worldwide.",
      details: "Our comprehensive offerings help innovate new products, drive operational agility, adopt emerging technologies, and deliver superior analytics capabilities and process efficiency.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
    },
    {
      title: "Agents and Brokers",
      description: "Damco has a long history of working with agents, wholesale brokers, and consultants to help them digitize their businesses through a wide range of insurance technologies, services, and flagship products.",
      details: "Damco holds expertise in helping reinsurers, general, individual life, Individual health, and group health insurance service providers scale operations, streamline tasks, and deliver rapid innovation to customers faster.",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1521791136064-963d9e6e6b8e?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
    },
    {
      title: "Adjusters",
      description: "While most insurance companies have claims adjusters doing the heavy lifting alone on all types of claims, we at Damco believe in empowering them with the right insurance technologies and advanced capabilities.",
      details: "We help automate parts of the claims process, transforming their insurance business model with cutting-edge technology solutions.",
      icon: "⚖️",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Recognition Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry Recognition & Awards
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">★</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{recognition}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Outperform With Our Innovative Insurance Technology Offerings
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Backed with over two decades of insurance tech expertise and domain knowledge, Damco stands among the leading technology partners for the insurance space. We have successfully empowered insurers to improve their operational efficiency and drive digital transformation while strengthening business-customer relationships.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive insurance tech solutions and services are tailored to address the pain points of agents, brokers, carriers, and adjusters across multiple lines of business such as life, health, P&C, and general insurance. Experience in cutting-edge insurance technologies has helped us successfully work with customers globally.
              </p>
            </div>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 ${
                    solution.color === 'blue' ? 'bg-blue-100' :
                    solution.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                  } rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-4xl">{solution.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <button className={`${
                    solution.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    solution.color === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'
                  } text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300`}>
                    Explore More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Insurance Is Our Focus
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Being an insurance technology company, we understand and support the needs of various segments in the insurance industry via our comprehensive and rapidly deployable solutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">{segment.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {segment.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {segment.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {segment.details}
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-2xl"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              End-to-End Digital Solutions for Insurance Enterprises
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Damco, a premier technology insurance company, empowers insurance enterprises to keep pace with the evolving marketplace, deal with new regulations, digitalize customer experience, deliver innovative insurance products and service suites leading to business growth coupled with sustainability. We also assist our clients leverage leading third-party aggregator platforms to improve core operations while developing new sources of revenue stream.
            </p>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 shadow-xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-6xl text-blue-600 mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                We recognized the need to reimagine our insurance operations to keep pace with ever-evolving customer needs. Damco has helped us streamline our core process and leverage technology as a strategic asset. In a competitive market we are now in a much better position to deliver much more, at a faster pace.
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-lg">A Leading General Insurance Provider</p>
                  <p className="text-blue-600 font-medium">Trusted by Insurance Leaders</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recommended Readings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recommended Readings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  type: 'Workshop',
                  title: 'Insurance Advisory Workshop',
                  description: 'Comprehensive workshop on insurance technology trends and best practices'
                },
                {
                  type: 'Webinar',
                  title: 'Improving Claims Processing with Digital FNOL',
                  description: 'Learn how digital First Notice of Loss transforms claims processing'
                },
                {
                  type: 'Webinar',
                  title: 'Insurance Claims Process Automation with an AI-Enabled Ecosystem',
                  description: 'Discover AI-powered automation for streamlined claims management'
                }
              ].map((reading, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-sm text-blue-600 font-semibold mb-2">{reading.type}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{reading.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{reading.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partners Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Partners</h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Our network of Global Partners work with us very closely to deliver world-class technology solutions for better business productivity and unparalleled benefits.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">Partner {partner}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};