import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Briefcase, CheckCircle2 } from 'lucide-react';

export const HiringModelsSection: React.FC = () => {
  const models = [
    {
      icon: Clock,
      title: 'Hourly Hiring',
      description: 'Flexible hourly engagement for short-term projects and specific tasks',
      price: 'From $25/hr',
      features: [
        'Pay only for hours worked',
        'Flexible scaling',
        'No long-term commitment',
        'Weekly billing'
      ],
      color: 'blue',
      popular: false
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Build your own remote team with full-time dedicated developers',
      price: 'From $3,500/mo',
      features: [
        'Full-time commitment',
        'Direct communication',
        'Team management',
        'Monthly billing'
      ],
      color: 'purple',
      popular: true
    },
    {
      icon: Briefcase,
      title: 'Fixed Price Project',
      description: 'Complete project delivery with defined scope and timeline',
      price: 'Custom Quote',
      features: [
        'Fixed scope & budget',
        'Milestone-based payment',
        'Project management',
        'Quality assurance'
      ],
      color: 'green',
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
            Flexible Hiring Models
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Choose the engagement model that best fits your project needs and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all ${
                model.popular ? 'ring-2 ring-purple-600' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {model.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-10 h-10 bg-${model.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                <model.icon className={`w-5 h-5 text-${model.color}-600`} />
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2">{model.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{model.description}</p>

              <div className="mb-4">
                <div className={`text-lg font-bold text-${model.color}-600`}>{model.price}</div>
              </div>

              <ul className="space-y-2 mb-5">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs text-gray-700">
                    <CheckCircle2 className={`w-4 h-4 text-${model.color}-600 mr-2 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-2 rounded-lg font-medium text-sm transition-all ${
                  model.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : `bg-${model.color}-50 text-${model.color}-600 hover:bg-${model.color}-100`
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
