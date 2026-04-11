import { motion } from 'framer-motion';

const timeline = [
  { title: 'Research & Proposal', month: 'Month 1', desc: 'Problem definition, literature review, and project proposal submission.' },
  { title: 'Requirement Gathering', month: 'Month 2', desc: 'Stakeholder interviews, SRS creation, and feasibility analysis.' },
  { title: 'System Design', month: 'Month 3', desc: 'UML diagramming, database schema, and UI/UX prototyping.' },
  { title: 'Implementation', month: 'Month 4-5', desc: 'Frontend and backend development, API integration.' },
  { title: 'Testing & QA', month: 'Month 6', desc: 'Unit testing, integration testing, and bug fixing.' },
  { title: 'Deployment & Report', month: 'Month 7', desc: 'Cloud deployment, documentation, and final presentation.' },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 bg-forest/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Project Timeline</h2>
          <div className="w-24 h-1 bg-jungle mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-jungle via-sunset to-transparent -translate-x-1/2 rounded-full" />

          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative flex items-center justify-between mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-5/12" />
              
              <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-sand border-4 border-charcoal -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(147,197,253,0.5)]" />
              
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="glass-panel p-6 rounded-2xl hover:border-jungle transition-colors duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-jungle group-hover:bg-sunset transition-colors" />
                  <span className="text-sunset font-bold text-sm tracking-widest uppercase mb-1 block">{item.month}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
