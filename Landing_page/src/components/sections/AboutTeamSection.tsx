import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

export const AboutTeamSection: React.FC = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=1',
      bio: 'Visionary leader with 15+ years in tech industry'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=2',
      bio: 'Technology expert specializing in scalable solutions'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: 'https://i.pravatar.cc/300?img=3',
      bio: 'Full-stack developer with expertise in modern frameworks'
    },
    {
      name: 'Emily Davis',
      role: 'Design Director',
      image: 'https://i.pravatar.cc/300?img=4',
      bio: 'Creative designer focused on user-centered experiences'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[Linkedin, Twitter, Github].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};