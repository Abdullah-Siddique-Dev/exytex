import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceDetail {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    overview: string;
    benefits: string[];
    features: {
        title: string;
        description: string;
        image: string;
    }[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    technologies: string[];
    cta: string;
}

const servicesData: Record<string, ServiceDetail> = {
    'product-engineering': {
        id: 'product-engineering',
        title: 'Product Engineering Services',
        description: 'Optimize R&D costs, speed up time-to-market, and boost revenue through increased agility and efficiency.',
        heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80',
        overview: 'Our Product Engineering Services help you transform ideas into market-ready products. We combine technical expertise with business acumen to deliver solutions that drive growth and innovation.',
        benefits: [
            'Reduced time-to-market by up to 40%',
            'Lower development costs through optimized processes',
            'Scalable architecture for future growth',
            'Enhanced product quality and reliability',
            'Continuous innovation and improvement',
            'Expert technical guidance and support'
        ],
        features: [
            {
                title: 'Product Development',
                description: 'End-to-end product development from concept to launch, ensuring quality and market fit.',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80'
            },
            {
                title: 'Platform Engineering',
                description: 'Build robust, scalable platforms that serve as the foundation for your digital products.',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
            },
            {
                title: 'Product Modernization',
                description: 'Upgrade legacy systems with modern technologies to improve performance and user experience.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
            }
        ],
        process: [
            { step: 1, title: 'Discovery & Planning', description: 'Understand requirements, define scope, and create roadmap' },
            { step: 2, title: 'Design & Architecture', description: 'Create technical architecture and user experience design' },
            { step: 3, title: 'Development & Testing', description: 'Build product with agile methodology and continuous testing' },
            { step: 4, title: 'Deployment & Support', description: 'Launch product and provide ongoing maintenance and updates' }
        ],
        technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'],
        cta: 'Ready to build your next product? Let\'s discuss your requirements.'
    },
    'cloud-migration': {
        id: 'cloud-migration',
        title: 'Cloud Migration Services',
        description: 'Rapid migration of applications to hybrid/public/private cloud with deep experience in AWS, Azure, Google Cloud.',
        heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
        overview: 'Seamlessly migrate your applications and infrastructure to the cloud with minimal disruption. Our experts ensure a smooth transition while optimizing costs and performance.',
        benefits: [
            'Zero business impact during migration',
            'Reduced infrastructure costs by up to 60%',
            'Improved scalability and flexibility',
            'Enhanced security and compliance',
            '24/7 monitoring and support',
            'Optimized cloud resource utilization'
        ],
        features: [
            {
                title: 'Cloud Strategy Consulting',
                description: 'Develop comprehensive cloud adoption strategy aligned with business goals.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
            },
            {
                title: 'Migration Execution',
                description: 'Execute seamless migration with minimal downtime using proven methodologies.',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
            },
            {
                title: 'Cloud Optimization',
                description: 'Continuously optimize cloud resources for cost efficiency and performance.',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
            }
        ],
        process: [
            { step: 1, title: 'Assessment', description: 'Analyze current infrastructure and define migration strategy' },
            { step: 2, title: 'Planning', description: 'Create detailed migration plan with timelines and resources' },
            { step: 3, title: 'Migration', description: 'Execute migration in phases with continuous monitoring' },
            { step: 4, title: 'Optimization', description: 'Fine-tune cloud environment for optimal performance' }
        ],
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'CloudFormation', 'Ansible'],
        cta: 'Ready to move to the cloud? Get a free migration assessment.'
    },
    'mobility-solutions': {
        id: 'mobility-solutions',
        title: 'Mobility Solutions',
        description: 'Mobility solutions for seamless information access, cloud computing, and enhanced user experience.',
        heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80',
        overview: 'Create powerful mobile experiences that engage users and drive business growth. Our mobile solutions combine cutting-edge technology with intuitive design.',
        benefits: [
            'Native and cross-platform development',
            'Seamless cloud integration',
            'Enhanced user engagement',
            'Offline functionality support',
            'Regular updates and maintenance',
            'App store optimization'
        ],
        features: [
            {
                title: 'iOS Development',
                description: 'Build high-performa