import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { Server, Database, Shield, Zap, Cloud, Code } from 'lucide-react';

const AWSPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'EC2 & Compute',
      description: 'Scalable virtual servers and computing power for your applications'
    },
    {
      icon: Database,
      title: 'RDS & Databases',
      description: 'Managed relational databases with automated backups and scaling'
    },
    {
      icon: Shield,
      title: 'Security & IAM',
      description: 'Enterprise-grade security with identity and access management'
    },
    {
      icon: Zap,
      title: 'Lambda & Serverless',
      description: 'Run code without managing servers with AWS Lambda functions'
    },
    {
      icon: Cloud,
      title: 'S3 & Storage',
      description: 'Scalable object storage for data backup and archiving'
    },
    {
      icon: Code,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines with CodePipeline and CodeDeploy'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AWS Cloud Services - Amazon Web Services Solutions | Exytex</title>
        <meta name="description" content="Professional AWS cloud services including EC2, RDS, Lambda, S3, and DevOps solutions. Expert AWS consulting and implementation." />
      </Helmet>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <SleekHeader />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Cloud className="w-12 h-12 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Amazon Web Services (AWS)
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leverage the power of AWS cloud infrastructure to build, deploy, and scale your applications with industry-leading reliability and performance.
              </p>

              <motion.button
                onClick={() => window.location.href = '/#contact'}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-orange-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started with AWS
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AWS Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive AWS solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AWS Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose AWS?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Global Infrastructure', desc: 'Deploy applications across 30+ regions worldwide' },
                  { title: 'Scalability', desc: 'Scale resources up or down based on demand' },
                  { title: 'Cost-Effective', desc: 'Pay only for what you use with flexible pricing' },
                  { title: 'Security', desc: 'Enterprise-grade security and compliance certifications' },
                  { title: 'Reliability', desc: '99.99% uptime SLA for mission-critical applications' },
                  { title: 'Innovation', desc: 'Access to cutting-edge cloud technologies and services' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ElegantFooter />
      </div>
    </>
  );
};

export default AWSPage;
