import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { HireKotlinDeveloperSection } from '../components/sections/HireKotlinDeveloperSection';

const HireKotlinDeveloperPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Hire Kotlin Developers | Expert Android & Backend Development | Exytex</title>
                <meta name="description" content="Hire expert Kotlin developers for Android, cross-platform, and backend development. Pre-vetted professionals ready to join your team in 48 hours." />
                <meta name="keywords" content="hire kotlin developer, kotlin android developer, kotlin backend developer, kotlin multiplatform, jetpack compose" />
            </Helmet>
            <SleekHeader />
            <HireKotlinDeveloperSection />
            <ElegantFooter />
        </>
    );
};

export default HireKotlinDeveloperPage;
