import React, { useState } from 'react';
import { ContactFormModal } from '../ui/ContactFormModal';
import { Smartphone, Code, Zap, Shield } from 'lucide-react';

export const MobileAppHeroSection: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-white">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-blue-50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
              Mobile Apps
              <br />
              <span className="text-blue-600">That Inspire</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
              If you need to develop an app with custom functions, visit our company. Exytex is a top software house in Pakistan - we will study your case personally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                Start Your Project
              </button>
              <button
                onClick={() => {
                  const portfolioSection = document.getElementById('mobile-portfolio');
                  portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto"
              >
                View Our Apps
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "150+", label: "Apps Developed" },
                { number: "50+", label: "Technologies" },
                { number: "98%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Simple Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Simple Phone Mockups */}
              <div className="flex justify-center space-x-8">
                {/* iPhone */}
                <div className="w-32 h-64 bg-white rounded-3xl shadow-2xl border-4 border-gray-200 p-2">
                  <div className="w-full h-full bg-blue-600 rounded-2xl p-3">
                    <div className="w-16 h-1 bg-white/80 rounded-full mx-auto mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/80 rounded w-3/4"></div>
                      <div className="h-3 bg-white/60 rounded w-1/2"></div>
                      <div className="h-16 bg-white/40 rounded mt-4"></div>
                      <div className="h-3 bg-white/60 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>

                {/* Android */}
                <div className="w-32 h-64 bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-700 p-2">
                  <div className="w-full h-full bg-purple-600 rounded-2xl p-3">
                    <div className="flex space-x-1 justify-center mb-4">
                      <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/80 rounded w-4/5"></div>
                      <div className="h-3 bg-white/60 rounded w-2/3"></div>
                      <div className="h-16 bg-white/40 rounded mt-4"></div>
                      <div className="h-3 bg-white/60 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">iOS & Android</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <Code className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Clean Code</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Fast Performance</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </section>
  );
};
