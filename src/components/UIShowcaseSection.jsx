import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, ChevronRight, ChevronLeft } from 'lucide-react';

const mockups = [
  { id: 1, title: 'Homepage', img: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, title: 'Safari Packages', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, title: 'Booking Wizard', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200' },
  { id: 4, title: 'User Dashboard', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200' },
  { id: 5, title: 'Admin Dashboard', img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200' },
];

const UIShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === mockups.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? mockups.length - 1 : prev - 1));

  return (
    <section id="uishowcase" className="py-24 bg-forest/10 relative">
      <div className="absolute inset-0 bg-charcoal/80 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex gap-4 mb-4 text-jungle">
            <Monitor size={32} />
            <Smartphone size={32} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">UI / UX Showcase</h2>
          <div className="w-24 h-1 bg-sunset mx-auto mb-8 rounded-full" />
          <p className="text-gray-300 max-w-2xl mx-auto">Sleek, modern, and purely responsive interfaces crafted with React and Tailwind CSS.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto glass-card p-4 md:p-8">
          
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/10 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={mockups[currentIndex].img}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                alt={mockups[currentIndex].title}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
               <h3 className="text-3xl font-bold text-white tracking-wide">{mockups[currentIndex].title}</h3>
            </div>
            
            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-jungle text-white p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-jungle text-white p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-3 flex-wrap">
            {mockups.map((mockup, idx) => (
              <button
                key={mockup.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  idx === currentIndex ? 'bg-sunset text-white' : 'glass-panel text-gray-300 hover:text-white'
                }`}
              >
                {mockup.title}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default UIShowcaseSection;
