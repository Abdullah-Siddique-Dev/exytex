import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

export const AmazonFBAContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@exytex.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+92 309 5930315",
      color: "from-purple-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Minaar Rd, Lala Rukh St, Wah Cantt, 47040, Pakistan",
      color: "from-blue-600 to-purple-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&auto=format&q=80" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-50/90" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Get In Touch
              </div>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to Start with Amazon FBA?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Get in touch with our team to learn how Amazon FBA can transform your e-commerce business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Contact Info Cards */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-3">Contact Information</h3>
                <p className="text-sm text-gray-600">We'll help you get started with a customized solution.</p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.color} opacity-5 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-black text-lg mb-1">{info.title}</div>
                        <div className="text-gray-600 text-sm">{info.value}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Additional Info Card - Glassmorphism */}
              <motion.div
                className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-lg mb-2">Business Hours</h4>
                  <p className="text-white/90 text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-white/90 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form - Material Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-black mb-4">Request Consultation</h3>
                
                <form className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'name' ? 'text-purple-600' : 'text-gray-400'
                      }`} />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-purple-600 bg-purple-50/50' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-blue-600 bg-blue-50/50' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Phone Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'phone' ? 'text-purple-600' : 'text-gray-400'
                      }`} />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 ${
                          focusedField === 'phone' 
                            ? 'border-purple-600 bg-purple-50/50' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="+92 309 5930315"
                      />
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-4 top-6 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'message' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl outline-none transition-all duration-300 resize-none ${
                          focusedField === 'message' 
                            ? 'border-blue-600 bg-blue-50/50' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        placeholder="Tell us about your business and requirements..."
                      />
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
