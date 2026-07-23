import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { HireDeveloperHero } from '../components/sections/HireDeveloperHero';
import { DeveloperSkills } from '../components/sections/DeveloperSkills';
import { HireDeveloperProcess } from '../components/sections/HireDeveloperProcess';
import { HireDeveloperBenefits } from '../components/sections/HireDeveloperBenefits';
import { HireDeveloperTestimonials } from '../components/sections/HireDeveloperTestimonials';

const HireDeveloperDetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tech = searchParams.get('tech') || 'backend';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tech]);

  const developerData: Record<string, any> = {
    kotlin: {
      title: 'Kotlin Developer',
      description: 'Hire expert Kotlin developers for Android app development and backend services',
      skills: ['Android Development', 'Kotlin Multiplatform', 'Jetpack Compose', 'Coroutines', 'Spring Boot'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070'
    },
    nextjs: {
      title: 'Next.js Developer',
      description: 'Hire skilled Next.js developers for modern React applications with SSR and SSG',
      skills: ['Next.js 14', 'React', 'TypeScript', 'Server Components', 'API Routes', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070'
    },
    vue: {
      title: 'Vue.js Developer',
      description: 'Hire experienced Vue.js developers for progressive web applications',
      skills: ['Vue 3', 'Composition API', 'Vuex', 'Nuxt.js', 'Pinia', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072'
    },
    ajax: {
      title: 'Ajax Developer',
      description: 'Hire Ajax developers for dynamic and interactive web applications',
      skills: ['JavaScript', 'XMLHttpRequest', 'Fetch API', 'jQuery', 'REST APIs', 'JSON'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069'
    },
    swift: {
      title: 'Swift Developer',
      description: 'Hire professional Swift developers for iOS and macOS applications',
      skills: ['Swift 5', 'SwiftUI', 'UIKit', 'Combine', 'Core Data', 'Xcode'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070'
    },
    backend: {
      title: 'Backend Developer',
      description: 'Hire expert backend developers for scalable server-side applications',
      skills: ['Node.js', 'Python', 'Java', 'Database Design', 'API Development', 'Microservices'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034'
    },
    golang: {
      title: 'Golang Developer',
      description: 'Hire Golang developers for high-performance concurrent applications',
      skills: ['Go', 'Goroutines', 'Microservices', 'gRPC', 'Docker', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069'
    },
    dotnet: {
      title: '.NET Developer',
      description: 'Hire .NET developers for enterprise-grade applications',
      skills: ['.NET Core', 'C#', 'ASP.NET', 'Entity Framework', 'Azure', 'Blazor'],
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2032'
    }
  };

  const currentDev = developerData[tech] || developerData.backend;

  return (
    <>
      <Helmet>
        <title>Hire {currentDev.title} | Pre-Vetted Remote Developers | Exytex</title>
        <meta name="description" content={`${currentDev.description}. Get matched with expert ${tech} developers in 48 hours. Pre-vetted talent, flexible engagement, quality assurance. Start hiring today!`} />
        <meta name="keywords" content={`hire ${tech} developer, remote ${tech} developer, ${tech} development, ${currentDev.skills.join(', ')}, freelance ${tech} developer, ${tech} consultant`} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <SleekHeader />
        <HireDeveloperHero />
        <DeveloperSkills tech={tech} skills={currentDev.skills} />
        <HireDeveloperProcess />
        <HireDeveloperBenefits />
        <HireDeveloperTestimonials />
        <ElegantFooter />
      </div>
    </>
  );
};

export default HireDeveloperDetailPage;
