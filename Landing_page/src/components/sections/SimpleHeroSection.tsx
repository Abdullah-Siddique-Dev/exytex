import React from 'react';
import { scrollToContactForm } from '../../utils/scrollUtils';

export const SimpleHeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Exytex
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          We create amazing digital experiences with modern technology and innovative design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToContactForm}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};