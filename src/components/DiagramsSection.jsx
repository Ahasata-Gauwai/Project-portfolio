import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import useCaseImage from '../assets/images/usecase.png';
import erImage from '../assets/images/ER.png';
import activityImage from '../assets/images/activity.png';
import dfdLevel0Image from '../assets/images/DFD-L0.png';
import dfdLevel1Image from '../assets/images/DFD-L1.png';

const diagrams = [
  { id: 'usecase', title: 'Use Case Diagram', image: useCaseImage },
  { id: 'er', title: 'ER Diagram', image: erImage },
  { id: 'activity', title: 'Activity Diagram', image: activityImage },
  { id: 'dfd0', title: 'DFD Level 0', image: dfdLevel0Image },
  { id: 'dfd1', title: 'DFD Level 1', image: dfdLevel1Image },
];

const DiagramsSection = () => {
  const [selectedDiagram, setSelectedDiagram] = useState(null);

  return (
    <section id="diagrams" className="py-24 bg-charcoal/95 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">UML & System Diagrams</h2>
          <div className="w-24 h-1 bg-sand mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diagrams.map((diag, idx) => (
            <motion.div
              key={diag.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer relative"
              onClick={() => setSelectedDiagram(diag)}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-jungle/40 group-hover:bg-none transition-all z-10 mix-blend-multiply" />
                <img 
                  src={diag.image} 
                  alt={diag.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity bg-black/40 backdrop-blur-sm">
                  <Maximize2 className="text-white w-10 h-10" />
                </div>
              </div>
              <div className="p-4 bg-forest/20 group-hover:bg-forest/50 transition-colors">
                <h3 className="text-white text-lg font-semibold text-center">{diag.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedDiagram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDiagram(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-charcoal p-2 rounded-xl shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedDiagram(null)}
                  className="absolute -top-12 right-0 text-white hover:text-sunset bg-forest/50 hover:bg-forest p-2 rounded-full transition-colors"
                >
                  <X />
                </button>
                <img src={selectedDiagram.image} alt={selectedDiagram.title} className="w-full h-auto rounded-lg" />
                <h3 className="text-white text-2xl font-bold mt-4 mb-2 text-center">{selectedDiagram.title}</h3>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DiagramsSection;
