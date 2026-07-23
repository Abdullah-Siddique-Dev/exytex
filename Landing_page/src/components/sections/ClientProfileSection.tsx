import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Users2 } from 'lucide-react';

export const ClientProfileSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Client Profile
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-6"></div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              The client is a Pittsburgh-based non-profit organization working to improve the lives of people with physical disabilities. Working with a network of over 500 local groups, the organization supports over 10,000 people and their families across Delaware, Ohio, New Jersey, and Maryland.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: MapPin, title: 'Location', value: 'Pittsburgh, USA' },
                { icon: Heart, title: 'Mission', value: 'Supporting People with Disabilities' },
                { icon: Users2, title: 'Network', value: '500+ Local Groups' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{item.title}</div>
                    <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80"
                alt="Technology Dashboard"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-2xl font-bold text-blue-600">10,000+</div>
              <div className="text-xs text-gray-600">People & Families Supported</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
