import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, PlusCircle, CreditCard, MessageSquare, ShieldCheck, PieChart, ChevronDown, Server } from 'lucide-react';

const modules = [
  { id: 1, icon: <Users />, title: 'User Management', desc: 'Handles tourist and admin registration, authentication, profiles, and role-based access control using JWT.' },
  { id: 2, icon: <Briefcase />, title: 'Safari Booking', desc: 'Core module for browsing, selecting dates, adding visitors, and reserving jeeps with live availability checks.' },
  { id: 3, icon: <PlusCircle />, title: 'Tour Package Management', desc: 'Admin tools to create, edit, scale, and pause safari packages dynamically without code changes.' },
  { id: 4, icon: <MessageSquare />, title: 'Custom Request', desc: 'Allows tourists to make tailored itinerary requests which admins can review, quote, and approve.' },
  { id: 5, icon: <CreditCard />, title: 'Payment & Ticketing', desc: 'Stripe integration for secure transactions and automated generation of QR-coded digital safari tickets.' },
  { id: 6, icon: <MessageSquare />, title: 'Feedback & Review', desc: 'Post-safari experience collection system to rate drivers, jeeps, and overall satisfaction.' },
  { id: 7, icon: <PieChart />, title: 'Admin Control & Analytics', desc: 'Reporting tools providing insights on revenue, popular packages, and booking volumes through visual charts.' },
  { id: 8, icon: <ShieldCheck />, title: 'Data Security & Backup', desc: 'Routine CRON jobs for backing up MongoDB data and securing PII with encryption.' }
];

const ModulesSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="modules" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">System Modules</h2>
          <div className="w-24 h-1 bg-sand mx-auto mb-8 rounded-full" />
          <p className="text-gray-300 max-w-2xl mx-auto">The project is categorized into 8 distinct modules ensuring high cohesion and loose coupling.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card cursor-pointer overflow-hidden group hover:border-jungle transition-colors duration-300"
              onClick={() => setExpandedId(expandedId === mod.id ? null : mod.id)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-forest/30 rounded-lg text-sand group-hover:bg-jungle group-hover:text-white transition-colors duration-300">
                    {mod.icon}
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedId === mod.id ? 180 : 0 }}
                    className="text-gray-400 group-hover:text-white"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                
                <AnimatePresence>
                  {expandedId === mod.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-300 pt-3 border-t border-white/10 mt-3 leading-relaxed">
                        {mod.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
