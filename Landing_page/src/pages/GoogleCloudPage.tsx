import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { GoogleCloudHero } from '../components/googlecloud/GoogleCloudHero';
import { GoogleCloudOfferings } from '../components/googlecloud/GoogleCloudOfferings';
import { GoogleCloudCapabilities } from '../components/googlecloud/GoogleCloudCapabilities';
import { GoogleCloudWhyChoose } from '../components/googlecloud/GoogleCloudWhyChoose';
import { GoogleCloudTransformation } from '../components/googlecloud/GoogleCloudTransformation';
import { GoogleCloudIndustries } from '../components/googlecloud/GoogleCloudIndustries';
import { GoogleCloudFAQ } from '../components/googlecloud/GoogleCloudFAQ';

const GoogleCloudPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Google Cloud Platform (GCP) Services - Cloud Solutions & Migration | Exytex Technologies</title>
        <meta name="description" content="Professional Google Cloud Platform services including GCP consulting, development, migration, G Suite, integration, and managed services. Expert GCP solutions for infrastructure modernization and cloud transformation." />
        <meta name="keywords" content="Google Cloud Platform, GCP services, Google Cloud consulting, GCP development, cloud migration, G Suite, Google Cloud AI, Cloud SQL, GCP integration, cloud transformation, Google Cloud Partner, infrastructure modernization" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exytex.com/services/google-cloud" />
        <meta property="og:title" content="Google Cloud Platform (GCP) Services - Cloud Solutions & Migration | Exytex Technologies" />
        <meta property="og:description" content="Professional Google Cloud Platform services including GCP consulting, development, migration, and managed services." />
        <meta property="og:image" content="https://exytex.com/images/google-cloud-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exytex.com/services/google-cloud" />
        <meta property="twitter:title" content="Google Cloud Platform (GCP) Services - Cloud Solutions & Migration" />
        <meta property="twitter:description" content="Professional Google Cloud Platform services including GCP consulting, development, migration, and managed services." />
        <meta property="twitter:image" content="https://exytex.com/images/google-cloud-twitter.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Exytex Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://exytex.com/services/google-cloud" />
      </Helmet>

      <div className="bg-black min-h-screen">
        <CursorFollower />
        <ScrollProgress />
        <SleekHeader />

        <GoogleCloudHero />
        <GoogleCloudOfferings />
        <GoogleCloudCapabilities />
        <GoogleCloudWhyChoose />
        <GoogleCloudTransformation />
        <GoogleCloudIndustries />
        <GoogleCloudFAQ />

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default GoogleCloudPage;
