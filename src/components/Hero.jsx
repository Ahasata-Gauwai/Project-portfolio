import { motion } from 'framer-motion';
import { ArrowRight, Code, Map } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-center"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-charcoal/80 via-forest/60 to-charcoal" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex justify-center space-x-4"
        >
          <Map className="text-sand w-12 h-12" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl"
        >
          Safari <span className="text-sand">Booking System</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          A Smart Digital Platform for Booking Safari Adventures in Belihuloya
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#about" className="group flex items-center justify-center px-8 py-4 text-white bg-forest hover:bg-forest rounded-full transition-all duration-300 font-medium text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-1">
            Explore Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#architecture" className="group flex items-center justify-center px-8 py-4 text-white bg-charcoal hover:bg-jungle rounded-full transition-all duration-300 font-medium text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-1">
            View System Design
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-4 text-jungle bg-sand hover:bg-white rounded-full transition-all duration-300 font-medium text-lg hover:-translate-y-1">
            <Code className="mr-2 w-5 h-5" />
            GitHub Repo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-sand rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
