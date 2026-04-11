import { motion } from 'framer-motion';

const techs = [
  { category: 'Frontend', name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'hover:shadow-cyan-500/50' },
  { category: 'Styling', name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'hover:shadow-cyan-400/50' },
  { category: 'Backend', name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'hover:shadow-jungle/50' },
  { category: 'Framework', name: 'Express.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'hover:shadow-white/50' },
  { category: 'Database', name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'hover:shadow-green-500/50' },
  { category: 'Auth', name: 'JWT Auth', img: 'https://jwt.io/img/pic_logo.svg', color: 'hover:shadow-purple-500/50' },
  { category: 'Hosting', name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: 'hover:shadow-blue-500/50 bg-white rounded-md p-1' },
  { category: 'VCS', name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'hover:shadow-gray-500/50' },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="py-24 bg-charcoal/95 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
          <div className="w-24 h-1 bg-jungle mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
              className={`flex flex-col items-center justify-center p-6 glass-panel rounded-2xl transition-all duration-300 ${tech.color} shadow-lg group`}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img src={tech.img} alt={tech.name} className="max-w-full max-h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-bold text-lg">{tech.name}</h3>
              <p className="text-sand text-sm uppercase tracking-wider mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
