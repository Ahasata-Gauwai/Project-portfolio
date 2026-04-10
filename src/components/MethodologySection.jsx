import { motion } from 'framer-motion';
import { RefreshCcw, LayoutList, Code2, CheckCircle2 } from 'lucide-react';

const phases = [
  { icon: <LayoutList />, title: 'Sprint Planning', desc: 'Requirement breakdown and backlog creation.' },
  { icon: <Code2 />, title: 'Development Cycles', desc: 'Iterative coding and feature implementation in 2-week sprints.' },
  { icon: <RefreshCcw />, title: 'Continuous Testing', desc: 'Automated and manual testing to ensure reliability.' },
  { icon: <CheckCircle2 />, title: 'Iterative Review', desc: 'Feedback incorporation and continuous deployment.' }
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Development Methodology</h2>
            <div className="w-24 h-1 bg-sunset mb-8 rounded-full" />
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We adopted the <span className="text-sand font-semibold">Agile Scrum Framework</span> to manage the Safari Booking System project. 
              This iterative approach allowed us to adapt to changing requirements swiftly, ensuring high-quality module delivery within deadlines.
            </p>

            <div className="space-y-6 mt-8">
              {phases.map((phase, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-forest/30 flex items-center justify-center text-sunset">
                    {phase.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-lg">{phase.title}</h4>
                    <p className="text-gray-400">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto glass-card flex items-center justify-center relative overflow-hidden border-2 border-jungle/30">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,theme(colors.jungle)_0,transparent_70%)]"
              />
              <div className="relative z-10 p-8 text-center">
                <RefreshCcw size={80} className="text-sand mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-2">AGILE</h3>
                <p className="text-gray-300 font-medium">Iterative & Incremental</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
