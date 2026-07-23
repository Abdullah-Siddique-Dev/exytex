import React from 'react';
import { Rocket, LockKeyhole, LayoutTemplate, RefreshCcw, BarChart3, Globe2 } from 'lucide-react';

export const MobileAppFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Cross-Platform Performance',
      description: 'Lightning-fast apps optimized for both iOS and Android with native performance and smooth animations.',
      stats: '60 FPS',
      color: 'blue'
    },
    {
      icon: LockKeyhole,
      title: 'Security First',
      description: 'Enterprise-grade security with data encryption, biometric authentication, and privacy protection.',
      stats: '100% Secure',
      color: 'purple'
    },
    {
      icon: LayoutTemplate,
      title: 'Platform-Native Design',
      description: 'Beautiful interfaces following Material Design and Human Interface Guidelines for each platform.',
      stats: 'Pixel Perfect',
      color: 'blue'
    },
    {
      icon: RefreshCcw,
      title: 'Real-time Sync',
      description: 'Seamless data synchronization across devices with offline support and conflict resolution.',
      stats: 'Live Updates',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics, crash reporting, and performance monitoring for data-driven improvements.',
      stats: '99.9% Uptime',
      color: 'blue'
    },
    {
      icon: Globe2,
      title: 'Backend Integration',
      description: 'Robust integration with APIs, cloud services, and third-party platforms for scalable solutions.',
      stats: 'Scalable',
      color: 'purple'
    }
  ];

  const stats = [
    { number: '500+', label: 'Apps Delivered', icon: '📱' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🛠️' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            Why Choose Our Mobile Apps?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            We build mobile applications that deliver exceptional user experiences across all platforms
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 ${
                  feature.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'
                } rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`inline-block ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                } px-4 py-2 rounded-full text-xs font-semibold`}>
                  {feature.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-blue-50 rounded-xl p-6 border border-blue-100"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
