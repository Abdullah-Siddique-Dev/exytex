import React from 'react';
import { motion } from 'framer-motion';
import { Shield, DollarSign, Factory, Heart, Truck, ShoppingCart } from 'lucide-react';

export const GoogleCloudIndustries: React.FC = () => {
  const industries = [
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Modernized the legacy claim management app of an insurance provider into a Google Cloud-based mobile-ready platform with integrated analytics. The solution gave real-time insights into claim processing, improved end-user experience, and optimized operational costs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Fintech',
      description: 'Migrated SharePoint farm to Microsoft Azure and re-engineered critical parts of the main application, without any impact on the operations. We improved employee experience and application uptime by modernizing data centers and related applications.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Modernized nesting and Computer Numerical Control (CNC) programming software, using Python and Angular, AWS, and UiPath, to create SaaS applications with multi-tenant structure, preserving all the features of desktop-based CNC product.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Migrated hospital management ERP to AWS cloud along with related applications such as lab management app and image management app. All the app user interfaces were refreshed for improving user experience, tech-adoption, and encouraging self-service.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Revamp of a legacy enterprise-scale inventory management platform through cloud migration. The application was modernized to a SaaS product with superior UI and multi-tenant capability fully deployed on Google Cloud stack, reducing installation and licensing costs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Cloud migration of the POS software along with the integration of business intelligence capabilities—created GUI front end, ensured real-time data access in a relational database across all stores, and developed a lean application accessible over web or mobile.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world success stories across diverse industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
              <p className="text-gray-300 leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
