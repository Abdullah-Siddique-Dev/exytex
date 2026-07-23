/**
 * Seed script - imports all existing blog posts and projects into MongoDB
 * Run with: node scripts/seedData.js
 */

require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const Project = require('../models/Project');

// ─── BLOG DATA ────────────────────────────────────────────────────────────────
const blogs = [
  {
    title: 'Top 20 Software Development Companies in New York',
    slug: 'top-20-software-development-companies-in-new-york',
    excerpt: 'This blog highlights the leading software development companies in New York, focusing on their services, expertise, and reputation.',
    content: `<p class="lead">New York City is one of the world's premier technology hubs, home to innovative software development companies serving businesses across diverse industries. This guide highlights leading software development firms in New York, focusing on their services, expertise, and reputation.</p><p>When selecting a software development company, look for proven experience in your required technologies—whether mobile apps, web applications, cloud solutions, AI integration, or blockchain development. Ensure the company has a strong portfolio demonstrating their capabilities and client testimonials showing successful project delivery.</p><p>New York's software development landscape offers world-class companies capable of delivering exceptional solutions for businesses of all sizes. By carefully evaluating technical expertise, industry experience, and service offerings, you can find the perfect partner to bring your vision to life.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format&q=80',
    category: 'Software Development',
    tags: ['software-development', 'bespoke-software', 'companies-in-new-york'],
    author: 'Exytex Team',
    status: 'published',
    views: 245,
    likes: 18,
    createdAt: new Date('2022-01-21')
  },
  {
    title: '5 Soft Skills Every Developer Should Develop',
    slug: '5-soft-skills-every-developer-should-develop',
    excerpt: 'Focuses on essential soft skills developers should cultivate alongside technical abilities.',
    content: `<p class="lead">While technical expertise is crucial in software development, soft skills are equally important for career growth and professional success. In today's collaborative work environment, developers who possess strong soft skills stand out and advance faster in their careers.</p><p>The five essential soft skills every developer should cultivate are communication, problem-solving, time management, teamwork, and adaptability. These skills complement technical abilities and create well-rounded professionals.</p><p>Developing soft skills is an ongoing journey. Start by identifying areas for improvement, set specific goals, and practice consistently. Seek feedback from colleagues, learn from experiences, and remain committed to growth.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&auto=format&q=80',
    category: 'Software Development',
    tags: ['software-development', 'developer-skills', 'soft-skills'],
    author: 'Exytex Team',
    status: 'published',
    views: 189,
    likes: 24,
    createdAt: new Date('2022-02-23')
  },
  {
    title: 'Top 10 Software Companies with the Best Salaries in the UK',
    slug: 'top-10-companies-with-the-best-salaries-in-the-uk',
    excerpt: 'This post presents UK-based software companies that offer the highest salaries.',
    content: `<p class="lead">The United Kingdom's technology sector has experienced remarkable growth, with software companies offering increasingly competitive salaries to attract top talent. This guide explores UK-based companies that offer the highest salaries.</p><p>Salaries vary considerably across UK regions. London commands the highest salaries due to concentration of major tech companies, while cities like Manchester, Edinburgh, and Cambridge offer competitive salaries with lower living expenses.</p><p>The UK's top software companies offer world-class compensation packages combining competitive salaries, equity, bonuses, and comprehensive benefits.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format&q=80',
    category: 'Software Development',
    tags: ['best-salaries-in-the-uk', 'software-companies', 'uk-tech'],
    author: 'Exytex Team',
    status: 'published',
    views: 312,
    likes: 31,
    createdAt: new Date('2022-01-11')
  },
  {
    title: 'The Best Ways to Promote Your Company',
    slug: 'best-ways-to-promote-your-company',
    excerpt: 'Covers strategies to effectively promote a company, including online advertising, social media, and branding tips.',
    content: `<p class="lead">In today's competitive business landscape, effective company promotion is essential for growth and success. Whether you're a startup or established business, the right promotional strategies can significantly increase your visibility.</p><p>Building a strong online presence is fundamental—invest in a professional website optimized for search engines, leverage social media platforms where your target audience is active, and create valuable content that positions you as an industry authority.</p><p>Beyond digital channels, focus on building genuine relationships through networking, strategic partnerships, and exceptional customer experiences.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&auto=format&q=80',
    category: 'Digital Marketing',
    tags: ['company-promotion', 'marketing', 'branding'],
    author: 'Exytex Team',
    status: 'published',
    views: 156,
    likes: 12,
    createdAt: new Date('2022-01-03')
  },
  {
    title: '8 Things to Know About Twitter Trends',
    slug: '8-things-to-know-about-twitter-trend',
    excerpt: 'Explains the key aspects of Twitter trends, including how they form, why they matter.',
    content: `<p class="lead">Twitter trends have become a powerful tool for understanding real-time conversations, cultural moments, and breaking news. Whether you're a marketer, business owner, or casual user, understanding how Twitter trends work can help you stay informed.</p><p>Twitter's algorithm identifies trends based on sudden spikes in conversation volume rather than total tweet count, meaning trends reflect what's happening right now. Trends are personalized to your location and interests.</p><p>Timing matters significantly—trends gain more traction during peak hours. While you can't force a trend, you can encourage one through compelling content, influencer partnerships, and strategic timing.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&h=800&fit=crop&auto=format&q=80',
    category: 'Social Media',
    tags: ['twitter-trends', 'social-media', 'marketing'],
    author: 'Exytex Team',
    status: 'published',
    views: 98,
    likes: 8,
    createdAt: new Date('2021-12-24')
  },
  {
    title: 'How to Generate More Leads in Your SaaS Company?',
    slug: 'generate-more-leads-in-your-saas-company',
    excerpt: 'This blog explains practical strategies for SaaS companies to generate more leads.',
    content: `<p class="lead">Lead generation is the lifeblood of any SaaS company. The SaaS business model's unique characteristics require specialized lead generation strategies that prioritize education, trust-building, and demonstrating ongoing value.</p><p>Effective SaaS lead generation combines multiple approaches: content marketing and SEO to attract organic traffic, product-led growth through free trials and freemium models, optimized landing pages with clear value propositions, and targeted email nurture campaigns.</p><p>Success requires focusing on lead quality over quantity, implementing lead scoring to prioritize high-value prospects, and continuously optimizing conversion rates at each funnel stage.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80',
    category: 'Digital Marketing',
    tags: ['saas', 'lead-generation', 'digital-marketing'],
    author: 'Exytex Team',
    status: 'published',
    views: 203,
    likes: 19,
    createdAt: new Date('2021-12-21')
  },
  {
    title: 'How Can Inbound Marketing Help Your Software Business Grow?',
    slug: 'inbound-marketing-help-your-software-business-grow',
    excerpt: 'Discover how inbound marketing drives sustainable growth for software companies.',
    content: `<p class="lead">Inbound marketing has revolutionized how software companies attract, engage, and delight customers. Unlike traditional outbound marketing that interrupts potential customers, inbound marketing draws people to your business by providing valuable content.</p><p>The inbound methodology follows four stages: Attract, Convert, Close, and Delight. This approach works particularly well for software companies because buyers conduct extensive research before purchasing and value education over pressure.</p><p>Inbound marketing delivers significant benefits including 62% lower cost per lead than outbound methods, higher quality self-qualified leads, established trust and authority, and sustainable growth through evergreen content assets.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop&auto=format&q=80',
    category: 'Digital Marketing',
    tags: ['inbound-marketing', 'software-business', 'growth'],
    author: 'Exytex Team',
    status: 'published',
    views: 134,
    likes: 15,
    createdAt: new Date('2021-12-07')
  },
  {
    title: 'Optimize Your Company\'s Website SEO in 20 Minutes',
    slug: 'optimize-your-companys-website-seo-in-20-minutes',
    excerpt: 'Learn how to optimize your website SEO in just 20 minutes with these high-impact techniques.',
    content: `<p class="lead">Search Engine Optimization (SEO) is crucial for online visibility, but you don't need to be an expert or spend hours to make meaningful improvements. This quick-start guide focuses on high-impact optimizations that deliver immediate results.</p><p>Focus your 20 minutes on these high-impact tasks: optimize title tags and meta descriptions, improve header tags structure, optimize images, add internal links, verify mobile-friendliness, and submit your sitemap to Google Search Console.</p><p>Make these 20-minute optimization sessions a regular weekly practice for sustained results. Track organic traffic, keyword rankings, and click-through rates to measure improvement.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop&auto=format&q=80',
    category: 'SEO',
    tags: ['seo', 'website-optimization', 'search-engine'],
    author: 'Exytex Team',
    status: 'published',
    views: 278,
    likes: 33,
    createdAt: new Date('2021-11-24')
  },
  {
    title: 'How to Boost Video Marketing on LinkedIn',
    slug: 'software-company-boost-video-marketing-on-linkedin',
    excerpt: 'Master LinkedIn video marketing for your software company with these proven strategies.',
    content: `<p class="lead">Video marketing on LinkedIn has become one of the most powerful tools for software companies to reach decision-makers and showcase products. With over 900 million professionals on the platform, LinkedIn offers unparalleled access to B2B audiences.</p><p>Create compelling content types including product demonstrations, customer success stories, thought leadership insights, and educational how-to videos. Always upload native videos directly to LinkedIn rather than sharing YouTube links.</p><p>Engage your audience by asking questions, responding to comments promptly, and including clear calls-to-action. Track key metrics including views, completion rate, engagement rate, and lead generation to measure success.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop&auto=format&q=80',
    category: 'Digital Marketing',
    tags: ['linkedin', 'video-marketing', 'social-media'],
    author: 'Exytex Team',
    status: 'published',
    views: 167,
    likes: 21,
    createdAt: new Date('2021-11-09')
  }
];

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Donate Anything',
    subtitle: 'Native E-Donation App',
    slug: 'donate-anything-native-e-donation-app',
    category: 'Mobile App Development',
    date: '07 June 2021',
    author: 'Exytex Team',
    client: 'Wahaj',
    description: 'The Native E-Donation App is designed to make donations simple and accessible. Users can donate items or support people in their neighborhood and surrounding areas through a smooth and user-friendly mobile application.',
    challenge: 'Creating a seamless donation experience that connects donors with recipients in local communities while ensuring trust, security, and ease of use.',
    solution: 'Built a native mobile application with real-time location services, secure authentication, and intuitive UI that makes donating as simple as a few taps.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Push Notifications'],
    features: ['Easy item donation with photo upload', 'Location-based donation discovery', 'Real-time push notifications', 'Secure user authentication'],
    results: ['1000+ active donors in first 6 months', '60% increase in community engagement', '95% user satisfaction rate'],
    tags: ['donation app', 'native app', 'charity'],
    status: 'published',
    featured: true
  },
  {
    title: 'Play Ground',
    subtitle: 'E-Sport Website Design',
    slug: 'playground-esport-website-design',
    category: 'Design',
    date: '16 July 2021',
    author: 'Exytex Team',
    client: 'William Blake',
    description: 'A modern and visually appealing eSports website design created for gaming communities. The design focuses on engagement, competitive visuals, and a clean layout for esports tournaments and teams.',
    challenge: 'Designing an immersive gaming platform that captures the energy of competitive esports while maintaining usability and performance.',
    solution: 'Created a bold, dynamic design with high-contrast colors, animated elements, and intuitive navigation.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Prototyping'],
    features: ['Modern gaming aesthetics', 'Tournament brackets display', 'Team profiles and stats', 'Responsive mobile design'],
    results: ['High engagement design', 'Mobile-responsive layouts', 'Professional gaming aesthetics'],
    tags: ['esport', 'gaming', 'design'],
    status: 'published',
    featured: true
  },
  {
    title: 'Exytex Website',
    subtitle: 'Corporate Website Redesign',
    slug: 'exytex-corporate-website',
    category: 'Web Development',
    date: '01 March 2022',
    author: 'Exytex Team',
    client: 'Exytex Technologies',
    description: 'Complete redesign and development of the Exytex Technologies corporate website with modern UI/UX, animations, and full CMS integration.',
    challenge: 'Creating a modern, fast, and SEO-optimized website that showcases all services and builds trust with potential clients.',
    solution: 'Built with React, TypeScript, and Tailwind CSS with smooth animations, responsive design, and integrated admin panel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: ['Responsive design', 'Admin panel', 'Blog system', 'Contact forms', 'SEO optimized'],
    results: ['300% increase in leads', 'Top 3 Google rankings', '99% uptime'],
    tags: ['web development', 'react', 'corporate'],
    status: 'published',
    featured: true
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Online Store',
    slug: 'ecommerce-platform-full-stack',
    category: 'Web Development',
    date: '15 August 2022',
    author: 'Exytex Team',
    client: 'RetailMax',
    description: 'A complete e-commerce solution with product management, payment integration, order tracking, and customer management system.',
    challenge: 'Building a scalable e-commerce platform that handles high traffic, secure payments, and complex inventory management.',
    solution: 'Developed a full-stack solution with React frontend, Node.js backend, Stripe payments, and real-time inventory tracking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
    features: ['Product catalog', 'Shopping cart', 'Secure checkout', 'Order tracking', 'Admin dashboard'],
    results: ['50% increase in conversions', '10,000+ active users', '$2M+ in transactions'],
    tags: ['ecommerce', 'react', 'nodejs'],
    status: 'published',
    featured: false
  },
  {
    title: 'Healthcare Management System',
    subtitle: 'Hospital Management Platform',
    slug: 'healthcare-management-system',
    category: 'Software Development',
    date: '20 November 2022',
    author: 'Exytex Team',
    client: 'MedCare Hospital',
    description: 'A comprehensive hospital management system covering patient records, appointment scheduling, billing, and staff management.',
    challenge: 'Digitizing a 500-bed hospital\'s operations while ensuring HIPAA compliance and seamless integration with existing systems.',
    solution: 'Built a secure, cloud-based platform with role-based access control, real-time data sync, and comprehensive reporting.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'HL7 FHIR'],
    features: ['Patient records', 'Appointment scheduling', 'Billing system', 'Staff management', 'Reports & analytics'],
    results: ['40% reduction in admin time', '99.9% uptime', 'HIPAA compliant'],
    tags: ['healthcare', 'hospital', 'management'],
    status: 'published',
    featured: false
  },
  {
    title: 'Food Delivery App',
    subtitle: 'On-Demand Food Ordering Platform',
    slug: 'food-delivery-mobile-app',
    category: 'Mobile App Development',
    date: '10 January 2023',
    author: 'Exytex Team',
    client: 'QuickBite',
    description: 'A full-featured food delivery application with real-time order tracking, restaurant management, and driver dispatch system.',
    challenge: 'Building a reliable real-time system that handles thousands of concurrent orders with accurate GPS tracking.',
    solution: 'Developed native iOS and Android apps with WebSocket-based real-time updates, Google Maps integration, and automated dispatch.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop&auto=format&q=80',
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&h=800&fit=crop&auto=format&q=80'
    ],
    technologies: ['React Native', 'Node.js', 'Socket.io', 'Google Maps', 'Stripe'],
    features: ['Real-time order tracking', 'Restaurant dashboard', 'Driver app', 'Push notifications', 'Payment integration'],
    results: ['50,000+ downloads', '4.8 App Store rating', '30% faster delivery'],
    tags: ['food delivery', 'mobile app', 'react native'],
    status: 'published',
    featured: true
  }
];

// ─── SEED FUNCTION ────────────────────────────────────────────────────────────
async function seed() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000
    });
    console.log('✅ Connected to MongoDB');

    // Seed Blogs
    console.log('\n📝 Seeding blogs...');
    let blogsAdded = 0;
    for (const blog of blogs) {
      const exists = await Blog.findOne({ slug: blog.slug });
      if (!exists) {
        await Blog.create(blog);
        console.log(`  ✅ Added: ${blog.title}`);
        blogsAdded++;
      } else {
        console.log(`  ⏭️  Skipped (exists): ${blog.title}`);
      }
    }
    console.log(`\n✅ Blogs: ${blogsAdded} added, ${blogs.length - blogsAdded} already existed`);

    // Seed Projects
    console.log('\n🗂️  Seeding projects...');
    let projectsAdded = 0;
    for (const project of projects) {
      const exists = await Project.findOne({ slug: project.slug });
      if (!exists) {
        await Project.create(project);
        console.log(`  ✅ Added: ${project.title}`);
        projectsAdded++;
      } else {
        console.log(`  ⏭️  Skipped (exists): ${project.title}`);
      }
    }
    console.log(`\n✅ Projects: ${projectsAdded} added, ${projects.length - projectsAdded} already existed`);

    console.log('\n🎉 Seed complete!');
    console.log(`   Total blogs in DB: ${await Blog.countDocuments()}`);
    console.log(`   Total projects in DB: ${await Project.countDocuments()}`);

  } catch (err) {
    console.error('❌ Seed failed:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('\n🔌 Disconnected from MongoDB');
    process.exit(0);
  }
}

seed();
