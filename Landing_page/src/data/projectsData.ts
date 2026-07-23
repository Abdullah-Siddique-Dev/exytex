export interface Project {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  client: string;
  website?: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  results: string[];
  featured: boolean;
}

export const projectsData: Project[] = [
  // Project 1: Native E-Donation App
  {
    id: 1,
    title: 'Donate Anything',
    subtitle: 'Native E-Donation App',
    slug: 'donate-anything-native-e-donation-app',
    category: 'Mobile App Development',
    date: '07 June 2021',
    author: 'Wahaj',
    client: 'Wahaj',
    tags: ['donation app', 'native app', 'charity', 'donate anything', 'mobile donation'],
    description: 'The Native E-Donation App is designed to make donations simple and accessible. Users can donate items or support people in their neighborhood and surrounding areas through a smooth and user-friendly mobile application.',
    challenge: 'Creating a seamless donation experience that connects donors with recipients in local communities while ensuring trust, security, and ease of use.',
    solution: 'Built a native mobile application with real-time location services, secure authentication, and intuitive UI that makes donating as simple as a few taps. Integrated push notifications to keep users engaged.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Push Notifications', 'Geolocation'],
    features: [
      'Easy item donation with photo upload',
      'Location-based donation discovery',
      'Real-time push notifications',
      'Secure user authentication',
      'In-app messaging between donors and recipients',
      'Donation history and tracking'
    ],
    results: [
      '1000+ active donors in first 6 months',
      '60% increase in community engagement',
      '24/7 donation availability',
      '95% user satisfaction rate'
    ],
    featured: true
  },

  // Project 2: Play Ground (ESPORT)
  {
    id: 2,
    title: 'Play Ground',
    subtitle: 'E-Sport Website Design | Professional Gaming Platform',
    slug: 'playground-esport-website-design',
    category: 'Design',
    date: '16 July 2021',
    author: 'William Blake',
    client: 'William Blake',
    tags: ['esport', 'gaming website', 'graphic design', 'UI design'],
    description: 'A modern and visually appealing eSports website design created for gaming communities. The design focuses on engagement, competitive visuals, and a clean layout for esports tournaments and teams.',
    challenge: 'Designing an immersive gaming platform that captures the energy of competitive esports while maintaining usability and performance.',
    solution: 'Created a bold, dynamic design with high-contrast colors, animated elements, and intuitive navigation. Focused on showcasing tournaments, teams, and live scores with engaging visuals.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Prototyping'],
    features: [
      'Modern gaming aesthetics',
      'Tournament brackets display',
      'Team profiles and stats',
      'Live score integration',
      'Responsive mobile design',
      'Dark mode optimization'
    ],
    results: [
      'High engagement design',
      'Mobile-responsive layouts',
      'Professional gaming aesthetics',
      'Improved user retention'
    ],
    featured: true
  },

  // Project 3: Ground Fitness App
  {
    id: 3,
    title: 'Ground Fitness App',
    subtitle: 'For Health & Wellness',
    slug: 'ground-fitness-app-health-wellness',
    category: 'Mobile App Development',
    date: '22 April 2021',
    author: 'Arismara',
    client: 'Arismara',
    tags: ['fitness app', 'health app', 'workout', 'gym application'],
    description: 'Ground Fitness App is a health-focused mobile application that helps users maintain fitness routines. It provides workout guidance and promotes a healthier lifestyle through digital solutions.',
    challenge: 'Creating an engaging fitness app that motivates users to stay consistent with their health goals while tracking progress effectively.',
    solution: 'Developed a comprehensive fitness platform with personalized workout plans, progress tracking, nutrition guidance, and social features to keep users motivated and accountable.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit API'],
    features: [
      'Personalized workout plans',
      'Progress tracking and analytics',
      'Nutrition and meal planning',
      'Video exercise demonstrations',
      'Social community features',
      'Wearable device integration'
    ],
    results: [
      '10K+ downloads in 3 months',
      '4.5/5 app rating',
      '80% user retention rate',
      'Featured in health app category'
    ],
    featured: true
  },

  // Project 4: Fastest White Hat SEO Results
  {
    id: 4,
    title: 'Fastest White Hat SEO Results',
    subtitle: 'Organic Growth & Search Rankings',
    slug: 'fastest-white-hat-seo-results',
    category: 'SEO',
    date: '15 November 2019',
    author: 'Hassan Khan',
    client: 'Hassan Khan',
    tags: ['SEO', 'white hat SEO', 'search ranking', 'organic traffic'],
    description: 'This project highlights the power of high-quality white-hat SEO strategies that improve website rankings organically while ensuring long-term growth and search engine compliance.',
    challenge: 'Achieving fast, sustainable SEO results without resorting to black-hat techniques that could harm long-term rankings.',
    solution: 'Implemented comprehensive white-hat SEO strategies including quality content creation, technical optimization, strategic link building, and user experience improvements.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Content Optimization'],
    features: [
      'Comprehensive keyword research',
      'Technical SEO optimization',
      'Quality content strategy',
      'Strategic link building',
      'Performance monitoring',
      'Competitor analysis'
    ],
    results: [
      '300% organic traffic increase',
      'Top 3 rankings for target keywords',
      'Improved domain authority',
      'Sustainable long-term growth'
    ],
    featured: false
  },

  // Project 5: Custom E-Commerce Hub
  {
    id: 5,
    title: 'Custom E-Commerce Hub',
    subtitle: 'Complete Online Shopping Solution',
    slug: 'custom-ecommerce-hub',
    category: 'Web Development',
    date: '01 March 2022',
    author: 'Soobz',
    client: 'Soobz',
    tags: ['ecommerce', 'online shopping', 'amazon fba', 'web store'],
    description: 'A complete eCommerce hub designed to help businesses sell products online efficiently. The platform focuses on performance, scalability, and user-friendly shopping experiences.',
    challenge: 'Building a scalable eCommerce platform that handles high traffic, secure payments, and provides excellent user experience across all devices.',
    solution: 'Developed a robust eCommerce solution with advanced features including inventory management, secure payment processing, and optimized checkout flow.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    features: [
      'Advanced product catalog',
      'Secure payment gateway',
      'Inventory management',
      'Order tracking system',
      'Customer reviews and ratings',
      'Multi-currency support'
    ],
    results: [
      '300% sales growth',
      '99.9% uptime',
      '5000+ products listed',
      'Seamless checkout experience'
    ],
    featured: true
  },

  // Project 6: Furniture Gallery App
  {
    id: 6,
    title: 'Furniture Gallery App',
    subtitle: 'Top UI/UX Designing',
    slug: 'furniture-gallery-app-ui-ux',
    category: 'Design',
    date: '14 November 2021',
    author: 'Katrina Kerim',
    client: 'Katrina Kerim',
    tags: ['UI design', 'UX design', 'furniture app', 'mobile UI'],
    description: 'A clean and elegant furniture gallery app design that enhances user interaction and product visibility through strong UI/UX principles.',
    challenge: 'Designing an intuitive furniture browsing experience that showcases products beautifully while maintaining easy navigation.',
    solution: 'Created a minimalist, elegant design with high-quality product imagery, smooth transitions, and AR preview capabilities for enhanced shopping experience.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Sketch', 'Figma', 'InVision', 'Principle'],
    features: [
      'Stunning visual design',
      'AR furniture preview',
      'Easy product filtering',
      'Wishlist functionality',
      'Room visualization',
      'Premium user experience'
    ],
    results: [
      'Award-winning design',
      'High user engagement',
      'Increased conversion rates',
      'Positive user feedback'
    ],
    featured: false
  },

  // Project 7: Car Booking Taxi App
  {
    id: 7,
    title: 'Car Booking Taxi App',
    subtitle: 'Ride Booking Solution',
    slug: 'car-booking-taxi-app',
    category: 'Mobile App Development',
    date: '02 January 2022',
    author: 'Bilal Khan',
    client: 'Bilal Khan',
    tags: ['taxi app', 'car booking', 'ride booking', 'transport app'],
    description: 'A modern taxi booking application that allows users to book rides quickly and safely. The app ensures ease of use for both drivers and passengers.',
    challenge: 'Creating a reliable ride-booking platform with real-time tracking, secure payments, and seamless communication between drivers and passengers.',
    solution: 'Developed a comprehensive taxi booking system with GPS tracking, instant notifications, multiple payment options, and driver-passenger rating system.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React Native', 'Node.js', 'Socket.io', 'Google Maps', 'Stripe'],
    features: [
      'Real-time GPS tracking',
      'Instant ride booking',
      'Multiple payment methods',
      'Driver-passenger chat',
      'Ride history and receipts',
      'Rating and review system'
    ],
    results: [
      '5000+ rides completed',
      '4.7/5 user rating',
      'Real-time tracking accuracy',
      'High customer satisfaction'
    ],
    featured: true
  },

  // Project 8: Save Sales Custom Admin Panel
  {
    id: 8,
    title: 'Save Sales',
    subtitle: 'Custom Admin Panel',
    slug: 'save-sales-custom-admin-panel',
    category: 'Web Development',
    date: '12 December 2021',
    author: 'Brijesh',
    client: 'Brijesh',
    tags: ['admin panel', 'backend system', 'custom software'],
    description: 'A powerful custom admin panel designed to manage business operations efficiently. It includes data handling, reporting, and backend control features.',
    challenge: 'Building a comprehensive admin system that handles complex business operations while remaining user-friendly and secure.',
    solution: 'Created a feature-rich admin panel with role-based access, advanced analytics, automated reporting, and intuitive dashboard for business management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'REST API'],
    features: [
      'Advanced analytics dashboard',
      'Role-based access control',
      'Automated reporting',
      'Data export functionality',
      'Real-time notifications',
      'Secure authentication'
    ],
    results: [
      'Streamlined operations',
      'Improved efficiency by 40%',
      'Automated reporting system',
      'Enhanced data security'
    ],
    featured: false
  },

  // Project 9: Soobz Online Clothing Brand
  {
    id: 9,
    title: 'Soobz',
    subtitle: 'Online Clothing Brand',
    slug: 'soobz-online-clothing-brand',
    category: 'Web Development',
    date: '15 February 2022',
    author: 'Soobz',
    client: 'Soobz',
    website: 'https://soobz.com/',
    tags: ['online clothing', 'fashion store', 'ecommerce brand'],
    description: 'Soobz is a fashion-focused eCommerce platform offering trendy clothing. The website emphasizes modern style, smooth navigation, and online shopping convenience.',
    challenge: 'Creating a fashion-forward eCommerce site that showcases products beautifully while providing seamless shopping experience.',
    solution: 'Developed a stylish, responsive eCommerce platform with high-quality product imagery, easy filtering, and smooth checkout process.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe', 'Cloudinary'],
    features: [
      'Modern fashion design',
      'Product quick view',
      'Size and color filters',
      'Wishlist functionality',
      'Secure checkout',
      'Order tracking'
    ],
    results: [
      '250% conversion increase',
      '1000+ products',
      'Mobile-first design',
      'Fast loading speed'
    ],
    featured: true
  },

  // Project 10: Trade Kitchen Suppliers
  {
    id: 10,
    title: 'Trade Kitchen Suppliers',
    subtitle: 'Online Franchise',
    slug: 'trade-kitchen-suppliers',
    category: 'Web Development',
    date: '20 November 2021',
    author: 'Azhar',
    client: 'Azhar',
    website: 'https://tradekitchensuppliers.co.uk/',
    tags: ['kitchen design', 'home renovation', 'cabinet suppliers'],
    description: 'A professional website for kitchen and bedroom suppliers, offering design solutions and high-quality materials for home improvement projects.',
    challenge: 'Creating a professional platform that showcases kitchen designs while providing easy quote requests and product information.',
    solution: 'Built a comprehensive website with product catalogs, design galleries, quote request system, and detailed product specifications.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'jQuery'],
    features: [
      'Product catalog system',
      'Design gallery showcase',
      'Quote request form',
      'SEO optimization',
      'Mobile responsive',
      'Contact integration'
    ],
    results: [
      'Professional UK presence',
      'SEO optimized',
      '200+ product listings',
      'Increased inquiries'
    ],
    featured: false
  },

  // Project 11: Quick Professional Movers
  {
    id: 11,
    title: 'Quick Professional Movers',
    subtitle: 'Moving Services',
    slug: 'quick-professional-movers',
    category: 'Web Development',
    date: '27 April 2022',
    author: 'Dubai Movers',
    client: 'Dubai Movers',
    website: 'https://www.quickprofessionalmovers.com/',
    tags: ['moving services', 'professional movers', 'logistics'],
    description: 'A service-based website for professional moving and relocation services, focusing on reliability, speed, and customer trust.',
    challenge: 'Building a trustworthy online presence for moving services with easy booking and transparent pricing.',
    solution: 'Created a professional service website with online booking system, service packages, customer testimonials, and real-time quote calculator.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600880292630-197b8f6f4c5f?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Twilio', 'Google Maps'],
    features: [
      'Online booking system',
      'Instant quote calculator',
      'Service packages',
      'Customer reviews',
      'Real-time tracking',
      'SMS notifications'
    ],
    results: [
      '500+ moves completed',
      '4.8/5 customer rating',
      'Streamlined booking',
      'Increased bookings by 60%'
    ],
    featured: false
  },

  // Project 12: Hair Salon Reviews
  {
    id: 12,
    title: 'Hair Salon Reviews',
    subtitle: 'Review Platform',
    slug: 'hair-salon-reviews',
    category: 'Web Development',
    date: '19 June 2022',
    author: 'Hair Salon Reviews',
    client: 'Hair Salon Reviews',
    website: 'http://hairsalonsreviews.com/',
    tags: ['hair salon', 'salon reviews', 'beauty services'],
    description: 'A review-based platform that helps users discover and compare hair salons. The website allows searching, rating, and reviewing salons easily.',
    challenge: 'Creating a comprehensive review platform with location-based search and verified user reviews.',
    solution: 'Developed a user-friendly review platform with advanced search filters, rating system, photo uploads, and salon owner response features.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Google Places API', 'AWS'],
    features: [
      'Location-based search',
      'User reviews and ratings',
      'Photo gallery uploads',
      'Salon owner responses',
      'Advanced filtering',
      'Verified reviews'
    ],
    results: [
      '1000+ salons listed',
      'Location-based search',
      'Verified reviews system',
      'Growing user base'
    ],
    featured: false
  },

  // Project 13: Al Hayyat Group Of Companies
  {
    id: 13,
    title: 'Al Hayyat Group',
    subtitle: 'Of Companies',
    slug: 'al-hayyat-group-of-companies',
    category: 'Web Development',
    date: '20 October 2022',
    author: 'Al Hayyat Group',
    client: 'Al Hayyat Group',
    website: 'https://alhayyatgroup.pk/',
    tags: ['real estate', 'construction', 'property development'],
    description: 'A corporate website representing a real estate and construction group, showcasing projects, services, and company credibility.',
    challenge: 'Creating a professional corporate website that showcases large-scale projects and establishes industry authority.',
    solution: 'Built a comprehensive corporate website with project portfolios, service pages, company history, and contact systems.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
    features: [
      'Project portfolio showcase',
      'Service pages',
      'Company history timeline',
      'Contact forms',
      'News and updates',
      'Professional branding'
    ],
    results: [
      'Corporate presence established',
      'Project showcase',
      'Professional branding',
      'Increased inquiries'
    ],
    featured: true
  },

  // Project 14: The Centrum International Peshawar
  {
    id: 14,
    title: 'The Centrum International',
    subtitle: 'Peshawar',
    slug: 'the-centrum-international-peshawar',
    category: 'Web Development',
    date: '04 October 2022',
    author: 'The Centrum International',
    client: 'The Centrum International',
    website: 'https://thecentruminternational.com/',
    tags: ['real estate company', 'commercial projects', 'property services'],
    description: 'A professional real estate website highlighting a premium commercial project with detailed information and investment opportunities.',
    challenge: 'Showcasing a premium commercial property with detailed information, 3D tours, and investment calculators.',
    solution: 'Developed an elegant real estate website with interactive features, investment calculators, virtual tours, and lead generation systems.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Three.js', 'Tailwind CSS', 'Netlify'],
    features: [
      '3D property tours',
      'Investment calculator',
      'Floor plans viewer',
      'Lead generation forms',
      'Location map',
      'Payment plans'
    ],
    results: [
      '3D property tours',
      'Investment calculator',
      'Lead generation system',
      'High conversion rate'
    ],
    featured: true
  },

  // Project 15: Elad Signs Printing
  {
    id: 15,
    title: 'Elad Signs Printing',
    subtitle: 'With Admin Panel',
    slug: 'elad-signs-printing-admin-panel',
    category: 'Software Development',
    date: '05 September 2022',
    author: 'Elad Signs',
    client: 'Elad Signs',
    website: 'https://eladsignsprinting.com/',
    tags: ['printing services', 'admin panel', 'custom software'],
    description: 'A complete business solution including a public website and admin panel for managing printing services, orders, and clients.',
    challenge: 'Building an integrated system for printing business with public website and comprehensive admin panel.',
    solution: 'Created a full-stack solution with customer-facing website and powerful admin panel for order management, production tracking, and client communication.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'AWS S3'],
    features: [
      'Order management system',
      'Production tracking',
      'Customer portal',
      'File upload system',
      'Automated notifications',
      'Invoice generation'
    ],
    results: [
      'Streamlined operations',
      'Order tracking',
      'Customer portal',
      'Improved efficiency'
    ],
    featured: false
  },

  // Project 16: Elad Boutique Ecommerce CRM
  {
    id: 16,
    title: 'Elad Boutique',
    subtitle: 'Ecommerce CRM',
    slug: 'elad-boutique-ecommerce-crm',
    category: 'Web Development',
    date: '16 August 2022',
    author: 'Elad Boutique',
    client: 'Elad Boutique',
    website: 'http://eladboutique.com/',
    tags: ['ecommerce CRM', 'customer management', 'online store'],
    description: 'An eCommerce CRM system designed to manage customers, orders, and sales efficiently while supporting online retail operations.',
    challenge: 'Creating an integrated eCommerce and CRM system for efficient customer and order management.',
    solution: 'Developed a comprehensive platform combining eCommerce functionality with CRM features for customer management, sales tracking, and automated marketing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'SendGrid'],
    features: [
      'CRM integration',
      'Customer management',
      'Order tracking',
      'Automated marketing',
      'Inventory management',
      'Sales analytics'
    ],
    results: [
      'CRM integration',
      'Automated marketing',
      'Inventory management',
      'Increased sales'
    ],
    featured: false
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(project => project.slug === slug);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(project => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project => project.category === category);
};

