import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SleekHeader } from '../components/layout/SleekHeader';
import { ElegantFooter } from '../components/layout/ElegantFooter';
import { ServicesHeroSection } from '../components/sections/ServicesHeroSection';
import { ModernAboutSection } from '../components/sections/ModernAboutSection';
import { ServicesListSection } from '../components/sections/ServicesListSection';
import { ClientsSliderSection } from '../components/sections/ClientsSliderSection';
import { FloatingActionButton } from '../components/ui/FloatingActionButton';
import { CursorFollower } from '../components/ui/CursorFollower';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const ServicesPage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Services | Software House in Pakistan | Exytex Technologies</title>
        <meta name="description" content="Overview of all services including iOS & Android app development, web development, SEO, support & maintenance, and custom digital project solutions." />
        <meta name="keywords" content="software house services, iOS app development, Android app development, web development Pakistan, SEO services, maintenance support, custom digital solutions, Exytex Technologies" />
        <meta property="og:title" content="Services | Software House in Pakistan | Exytex Technologies" />
        <meta property="og:description" content="Overview of all services including iOS & Android app development, web development, SEO, support & maintenance, and custom digital project solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exytex.com/services/" />
        <link rel="canonical" href="https://www.exytex.com/services/" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <CursorFollower />
        <SleekHeader />
      
      <section id="services-hero">
        <ServicesHeroSection />
      </section>
      
      <section id="modern-about">
        <ModernAboutSection />
      </section>
      
      <section id="services-list">
        <ServicesListSection />
      </section>
      
      <section id="clients-testimonials">
        <ClientsSliderSection />
      </section>

      {/* FAQ Section */}
      <section className="py-10 relative bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our services and development process
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What services does Exytex Technologies offer?",
                  answer: "We offer comprehensive software development services including web development, mobile app development, digital marketing, SEO services, graphic design, cloud solutions, AI & ML services, blockchain development, and IT staffing solutions."
                },
                {
                  question: "How long does it take to complete a project?",
                  answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, mobile apps take 2-6 months, and enterprise solutions can take 6-12 months. We provide detailed timelines during project planning."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Yes, we offer comprehensive support and maintenance packages including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support to ensure your solutions run smoothly."
                },
                {
                  question: "What technologies do you work with?",
                  answer: "We work with modern technologies including React, Node.js, Python, PHP, Swift, Kotlin, Flutter, React Native, AWS, Azure, Google Cloud, and many more. We choose the best technology stack based on your project requirements."
                },
                {
                  question: "How do you ensure project quality?",
                  answer: "We follow industry best practices including agile development methodology, code reviews, automated testing, continuous integration, and quality assurance processes. Each project is assigned a dedicated project manager to ensure quality delivery."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely! We offer flexible engagement models including team augmentation, dedicated teams, and project-based collaboration. We can seamlessly integrate with your existing development processes and teams."
                },
                {
                  question: "What are your pricing models?",
                  answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team models. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote tailored to your needs."
                },
                {
                  question: "Do you sign NDAs and ensure data security?",
                  answer: "Yes, we take data security very seriously. We sign NDAs, follow strict security protocols, use secure development practices, and comply with international data protection standards to ensure your information is safe."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <button
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 transition-colors"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling as HTMLElement;
                      const icon = e.currentTarget.querySelector('.faq-icon') as HTMLElement;
                      if (content && icon) {
                        const isHidden = content.style.display === 'none' || !content.style.display;
                        content.style.display = isHidden ? 'block' : 'none';
                        icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                      }
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <svg 
                        className="faq-icon w-5 h-5 text-blue-600 transform transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className="hidden px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 relative bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your <span className="text-blue-500">Project</span>?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Let's discuss your requirements and create something amazing together. Our team is ready to bring your vision to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Digital Marketing</option>
                      <option>SEO Services</option>
                      <option>Graphic Design</option>
                      <option>Cloud Solutions</option>
                      <option>AI & ML Services</option>
                      <option>Blockchain Development</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-blue-600 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email</h4>
                        <p className="text-gray-300">info@exytex.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-blue-600 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Phone</h4>
                        <p className="text-gray-300">+92 309 5930315</p>
                        <p className="text-gray-300">+44 7466 109725</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-blue-600 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Office</h4>
                        <p className="text-gray-300">Minaar Rd, Lala Rukh St, Wah Cantt, 47040</p>
                        <p className="text-gray-300">Punjab, Pakistan</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Exytex?</h3>
                  <ul className="space-y-3">
                    {[
                      "6+ Years of Experience",
                      "100+ Projects Delivered",
                      "24/7 Support Available",
                      "Agile Development Process",
                      "Dedicated Project Manager",
                      "100% Client Satisfaction"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <ElegantFooter />
        <FloatingActionButton />
      </div>
    </>
  );
};

export default ServicesPage;