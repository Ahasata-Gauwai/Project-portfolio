import { motion } from 'framer-motion';
import { User, Search, Map, CalendarSync, FileText, CreditCard, Ticket, CarFront } from 'lucide-react';

const steps = [
  { id: 1, name: 'Tourist', icon: <User className="w-8 h-8" /> },
  { id: 2, name: 'Browse Packages', icon: <Search className="w-8 h-8" /> },
  { id: 3, name: 'Select Safari', icon: <Map className="w-8 h-8" /> },
  { id: 4, name: 'Choose Date', icon: <CalendarSync className="w-8 h-8" /> },
  { id: 5, name: 'Visitor Details', icon: <FileText className="w-8 h-8" /> },
  { id: 6, name: 'Payment', icon: <CreditCard className="w-8 h-8" /> },
  { id: 7, name: 'Ticket Gen', icon: <Ticket className="w-8 h-8" /> },
  { id: 8, name: 'Safari Exp', icon: <CarFront className="w-8 h-8" /> },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 bg-charcoal/95 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">System Workflow</h2>
          <div className="w-24 h-1 bg-sand mx-auto mb-8 rounded-full" />
          <p className="text-gray-300 max-w-2xl mx-auto">Seamless, end-to-end booking process designed to provide a hassle-free start to wild adventures.</p>
        </motion.div>

        <div className="relative py-10">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-1 bg-forest/30 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
               initial={{ x: '-100%' }}
               whileInView={{ x: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="h-full w-full bg-gradient-to-r from-transparent via-sand to-transparent"
             />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-2 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center group relative cursor-default"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass-panel flex items-center justify-center text-white mb-4 group-hover:bg-jungle group-hover:scale-110 transition-all duration-300 shadow-lg relative z-20">
                  {step.icon}
                </div>
                <p className="text-sm md:text-xs lg:text-sm font-medium text-gray-300 text-center group-hover:text-sand transition-colors">
                  {step.name}
                </p>
                {/* Mobile Arrows */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden mt-2 text-forest">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
