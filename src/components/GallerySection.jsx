import { motion } from 'framer-motion';
import SafariJeep from '../assets/images/jeep.jpg';
import Bakersbend from '../assets/images/bakers-bend.jpg';
import Leopard from '../assets/images/leopard.jpg';
import Hartonplains from '../assets/images/HartonPlains.jpg';
import samanalawewa from '../assets/images/samanala wewa.jpg';
import Idalgashinna from '../assets/images/Idalgashinna.jpg';
import LiptonsSeat from '../assets/images/liptons-seat.jpg';

const images = [
  { id: 1, src: SafariJeep, alt: 'Safari Jeep', size: 'col-span-1 row-span-2' },
  { id: 2, src: LiptonsSeat, alt: 'Liptons-Seat' },
  { id: 3, src: Hartonplains, alt: 'Harton Plains' },
  { id: 7, src: Leopard, alt: 'Leopard' },
  { id: 4, src: Bakersbend, alt: 'Bakers bend', size: 'col-span-2 row-span-2' },
  { id: 5, src: Idalgashinna, alt: 'Idalgashinna', size: 'col-span-1 row-span-2' },
  { id: 6, src: samanalawewa, alt: 'Samanala Wewa' },

];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Project Gallery</h2>
          <div className="w-24 h-1 bg-sand mx-auto mb-8 rounded-full" />
          <p className="text-gray-300 max-w-2xl mx-auto">Visual inspiration from the wild landscapes of Belihuloya.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${img.size || ''} cursor-pointer`}
            >
              <div className="absolute inset-0 bg-jungle/20 group-hover:bg-transparent transition-all z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 blur-[1px] group-hover:blur-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <p className="text-white font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
