import { motion } from 'framer-motion';
import { GitBranch, Network, MapPin } from 'lucide-react';

const team = [
  { name: 'D.M.L.C.B. Nadungamuwa', role: 'Full Stack Developer', github: 'https://github.com/LavinduNadungamuwa', linkedin: 'https://www.linkedin.com/in/lavindu-nadungamuwa-007855263/', img: 'https://avatars.githubusercontent.com/u/166277337?v=4' },
  { name: 'M.P.D. Samaranayake', role: 'Backend Developer', github: 'https://github.com/MPDSamaranayake', linkedin: 'https://www.linkedin.com/in/prasad-samaranayake-7b461b2ba/', img: 'https://avatars.githubusercontent.com/u/200643139?v=4' },
  { name: 'G.A.N. Fernando', role: 'UI/UX Designer', github: 'https://github.com/ashmikan', linkedin: 'https://www.linkedin.com/in/ashmika-nathali/', img: 'https://avatars.githubusercontent.com/u/166277400?v=4' },
  { name: 'H.M.B.B. Welivita', role: 'Frontend Developer', github: 'https://github.com/Bhagi2001', linkedin: 'https://www.linkedin.com/in/bhagya-welivita-550966302/', img: 'https://avatars.githubusercontent.com/u/166277461?v=4' },
];

const AnimatedFooter = () => {
  return (
    <footer id="team" className="bg-charcoal pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      
      {/* Team Section embedded in footer top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
              className="glass-card p-6 text-center group border border-transparent hover:border-jungle transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto bg-gray-700 rounded-full mb-4 overflow-hidden border-4 border-jungle/50 group-hover:border-sunset transition-colors">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sand text-sm mb-4">{member.role}</p>
              
              {/* Socials - Appears on Hover */}
              <div className="flex justify-center space-x-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 text-white transition-colors">
                  <GitBranch size={18} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#0077b5] text-white transition-colors">
                  <Network size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 text-center md:text-left">
          
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-sand tracking-wider mb-4">SAFARI BOOKING</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              A smart, modern digital platform empowering the Ahasata Gauwai Adventure Safari with real-time operations and immersive user experiences.
            </p>
          </div>
          
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-400">
              <a href="#home" className="hover:text-sunset transition-colors">Home</a>
              <a href="#about" className="hover:text-sunset transition-colors">About</a>
              <a href="#architecture" className="hover:text-sunset transition-colors">System Design</a>
              <a href="#diagrams" className="hover:text-sunset transition-colors">Diagrams</a>
              <a href="#uishowcase" className="hover:text-sunset transition-colors">UI Showcase</a>
              <a href="#contact" className="hover:text-sunset transition-colors">Contact</a>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center md:items-end">
             <h4 className="text-white font-bold mb-4">University</h4>
             <div className="flex items-center text-gray-400 text-sm mb-2 justify-center md:justify-end">
                <MapPin className="w-4 h-4 mr-2" />
                Sabaragamuwa University
             </div>
             <p className="text-gray-500 text-sm text-center md:text-right">Faculty of Computing</p>
          </div>
        </div>

        <div className="text-center border-t border-white/5 pt-8 text-gray-500 text-xs">
          <p>© 2026 Safari Booking System Project. Sabaragamuwa University of Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
