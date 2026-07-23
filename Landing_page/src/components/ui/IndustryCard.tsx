import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  industry: {
    icon: LucideIcon;
    name: string;
    description: string;
    color: string;
    image: string;
    link: string;
    stats: string;
    features: string[];
  };
  index: number;
  hoveredIndex: number | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  index,
  hoveredIndex,
  onHoverStart,
  onHoverEnd
}) => {
  return (
    <Link to={industry.link}>
      <motion.div
        className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img 
            src={industry.image} 
            alt={industry.name}
            className="w-full h-full object-cover"
            animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Gradient overlay - only visible on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon */}
          <div className="absolute top-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 p-3 rounded-xl text-gray-700 group-hover:text-white shadow-lg transition-all duration-300">
              <industry.icon className="w-6 h-6" />
            </div>
          </div>

          {/* Stats Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-xs font-semibold">{industry.stats}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
              {industry.name}
            </h3>
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {industry.description}
          </p>
          
          {/* Key Features */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Solutions</h4>
            <div className="grid grid-cols-2 gap-1">
              {industry.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-center text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 font-medium text-sm transition-all">
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};