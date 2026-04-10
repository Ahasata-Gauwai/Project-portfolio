import { motion } from 'framer-motion';
import { Layers, Database, Lock, Globe, Server } from 'lucide-react';

const blocks = [
  { id: 'frontend', name: 'Frontend', tech: 'React.js', icon: <Globe />, color: 'from-blue-600 to-cyan-500', col: 'col-span-1 md:col-start-2' },
  { id: 'auth', name: 'Authentication', tech: 'JWT Auth', icon: <Lock />, color: 'from-sky-500 to-blue-500', col: 'col-span-1 md:col-start-3' },
  { id: 'backend', name: 'Backend server', tech: 'Node.js + Express', icon: <Server />, color: 'from-blue-600 to-jungle', col: 'col-span-1 md:col-start-2' },
  { id: 'database', name: 'Database', tech: 'MongoDB', icon: <Database />, color: 'from-purple-600 to-pink-500', col: 'col-span-1 md:col-start-3' },
  { id: 'hosting', name: 'Cloud Hosting', tech: 'AWS / Vercel', icon: <Layers />, color: 'from-gray-600 to-gray-400', col: 'col-span-1 md:col-span-2 md:col-start-2 lg:col-start-2' },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">System Architecture</h2>
          <div className="w-24 h-1 bg-sand mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Animated Connecting Lines Background (Abstract) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none hidden md:block">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 33% 20% L 33% 50% L 66% 50% L 66% 80%" stroke="white" strokeWidth="2" fill="none" strokeDasharray="10 10"/>
              <path d="M 66% 20% L 66% 50% L 33% 50% L 33% 80%" stroke="white" strokeWidth="2" fill="none" strokeDasharray="10 10"/>
            </svg>
          </div>

          {blocks.map((block, idx) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-1 rounded-2xl bg-gradient-to-br ${block.color} ${block.col} relative z-10 shadow-xl`}
            >
              <div className="bg-charcoal/90 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center justify-center h-full text-center hover:bg-transparent transition-colors duration-300">
                <div className="text-white mb-3">
                  {block.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{block.name}</h3>
                <p className="text-sand font-medium mt-1">{block.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
