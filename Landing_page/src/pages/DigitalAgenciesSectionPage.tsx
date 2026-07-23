import React from 'react';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import DigitalAgenciesSection from '../components/sections/DigitalAgenciesSection';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const DigitalAgenciesSectionPage: React.FC = () => {
    useSmoothScroll();

    return (
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 min-h-screen">
            <CursorFollower />
            <ScrollProgress />
            <SleekHeader />
            
            <DigitalAgenciesSection />
            
            <ElegantFooter />
            <FloatingActionButton />
        </div>
    );
};

export default DigitalAgenciesSectionPage;