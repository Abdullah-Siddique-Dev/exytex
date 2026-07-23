import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Blocks, 
  Smartphone, 
  BarChart3, 
  Bot, 
  Code2, 
  Cloud,
  FileText,
  Server,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const TechPossibilitiesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    {
      icon: Blocks,
      title: 'Blockchain',
      description: 'Blockchain is no longer just a technology; it is a revolution that is picking up momentum. It is being implemented across an array of industries with outstanding results. Blockchain helps businesses simplify and streamline processes for keeping up with the speed of business, transparency, reduced costs, and the traceability of data shared across business networks.'
    },
    {
      icon: Smartphone,
      title: 'Mobility',
      description: 'With the mobile user base touching new peaks every day, businesses no longer wish to miss out on leveraging this medium and translating it into growth. As the end-customer turns more mobile, businesses will have to work on improving mobility-based accessibility. Develop engaging applications that operate on multiple operating systems and devices and integrate with your business\'s digital framework.'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Business Intelligence (BI) empowers businesses to stay a step ahead of their competition by retrieving, analyzing, transforming, and reporting business decisions against data. The meaningful insights obtained through this succession of actions must be available over a unified dashboard so that these critical decisions can be taken in real-time to maintain an edge or adapt to changing conditions.'
    },
    {
      icon: Bot,
      title: 'Robotic Process Automation',
      description: 'Modern-day robots are highly capable and can autonomously perform a wide range of actions, from capturing data to processing to derive useful insights. Robotic Process Automation (RPA) harnesses this quality and allows businesses to build and deploy solutions that can perform routine and rule-based activities without trading off the quality and the time required.'
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'Open source platforms are consolidating their presence in corporate enterprise-level IT infrastructure as an attractive alternative to proprietary software. The architecture enhances the quality, reliability, security, and functionality of the software while also cutting down the total cost of ownership. Get in control of your data and have technology solutions tailored to your requirements.'
    },
    {
      icon: FileText,
      title: 'Microsoft',
      description: 'The complete suite of Microsoft solutions, from Microsoft Dynamics 365, Microsoft Azure, etc., are driving business applications across various limbs of technology, be it Artificial Intelligence (AI) or the Internet of Things (IoT). Enabling to achieve desired effects, these solutions from Microsoft further assist businesses to explore, discover, innovate and develop newer possibilities.'
    },
    {
      icon: FileText,
      title: 'Content Management Systems',
      description: 'Content Management Systems (CMS) are empowering businesses to take the reign of establishing their digital presence. However, after a point, the scalability of the system and its data organization capabilities are bound to pose a limitation to growth. Develop a hands-on approach to managing data effectively and capitalize on customer engagement and business outcome opportunities.'
    },
    {
      icon: Cloud,
      title: 'Cloud',
      description: 'Cloud technology is offering a quicker, economical, and low-maintenance alternative to on-premise solutions. At the same time, it can scale in real-time and maintain performance, security, and reliability while handling enterprise data. Migrate your complete stack to the cloud and embrace an ecosystem of continuous development and continuous improvement. Pick a type and model that suits your business needs.'
    },
    {
      icon: Server,
      title: 'IBM iSeries',
      description: 'An OS created for enterprise servers and microcomputers to run IBM Power Systems and Pure Systems, IBM I series focuses on mid-size to enterprise level organizations to enable ease of use, deployment and maintenance. IBM defines its AS400 services as "a trusted combination of an interactive database, security, networking, web services, and storage management abilities".'
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(technologies.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleTechnologies = technologies.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentIndex((currentPage + 1) * itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentIndex((currentPage - 1) * itemsPerPage);
    }
  };

  return (
    <section className="py-12 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Maintain a Competitive Edge Leveraging the Possibilities
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive technology capabilities designed to transform your business
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {visibleTechnologies.map((tech, index) => (
                <motion.div
                  key={startIndex + index}
                  className="bg-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                disabled={currentPage === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Page Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * itemsPerPage)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentPage
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentPage === totalPages - 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
