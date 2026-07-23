import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';

const SimpleHirePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tech = searchParams.get('tech') || 'none';

  return (
    <div className="bg-white min-h-screen">
      <SleekHeader />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hire {tech.charAt(0).toUpperCase() + tech.slice(1)} Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This is a working page for: <span className="text-blue-600 font-bold">{tech}</span>
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-700">
              ✅ If you can see this page, the routing is working correctly!
            </p>
            <p className="text-gray-600 mt-2 text-sm">
              URL: /hire-developer/simple?tech={tech}
            </p>
          </div>
        </div>
      </div>
      
      <ElegantFooter />
    </div>
  );
};

export default SimpleHirePage;
