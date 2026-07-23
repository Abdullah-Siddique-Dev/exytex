import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      country: 'Pakistan',
      flag: '🇵🇰',
      address: 'Minaar Rd, Lala Rukh St, Wah Cantt, 47040, Pakistan',
      phone: '+92 309 5930315',
      email: 'info@exytex.com'
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      address: '27 Hollybank Gardens, Bradford BD7 4QR, UK',
      phone: '+44 7466 109725',
      email: 'info@exytex.com'
    },
    {
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      address: 'Dubai, UAE – France Cluster Pavilion Mall P-05, Intl City',
      phone: '+92 309 5930315',
      email: 'info@exytex.com'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Get in Touch
            </h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
              initial={{ opacity: 0, scale: 0.5, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 95,
                damping: 17,
                bounce: 0.3
              }}
            >
              Ready to start your next project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  Send us a Message
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="company" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label 
                    htmlFor="service" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">SEO Services</option>
                    <option value="support">Support & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Quick Contact */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 
                  className="text-xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@exytex.com" className="text-blue-600 hover:text-blue-700">
                        info@exytex.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+923095930315" className="text-green-600 hover:text-green-700">
                        +92 309 5930315
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">Minaar Rd, Lala Rukh St, Wah Cantt, 47040, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 
                  className="text-xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  Our Global Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <motion.div
                      key={office.country}
                      className="border-l-4 border-blue-500 pl-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-lg mr-2">{office.flag}</span>
                        <h4 className="font-semibold text-gray-900">{office.country}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{office.address}</p>
                      <p className="text-sm text-blue-600">{office.phone}</p>
                      <p className="text-sm text-blue-600">{office.email}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
