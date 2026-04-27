import { motion } from 'framer-motion';
import { Mail, MapPin, Send, GitBranch } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-forest/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-jungle mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-charcoal/80 glass-panel rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="w-full lg:w-5/12 p-10 bg-forest relative overflow-hidden">
             <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-sand/10 rounded-full blur-3xl pointer-events-none" />
             <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Get In Touch</h3>
             <p className="text-blue-100 mb-10 relative z-10">Have questions about the Safari Booking System? Reach out to our university project team.</p>
             
             <div className="space-y-6 relative z-10">
               <div className="flex items-center text-white">
                 <Mail className="w-6 h-6 mr-4 text-sand" />
                 <span>team.safari@sabaragamuwa.ac.lk</span>
               </div>
               <div className="flex items-center text-white">
                 <MapPin className="w-6 h-6 mr-4 text-sand" />
                 <span>Faculty of Computing, Sabaragamuwa University of Sri Lanka</span>
               </div>
               <div className="flex items-center text-white">
                 <GitBranch className="w-6 h-6 mr-4 text-sand" />
                 <a href="https://github.com/org/safaribooking" className="hover:text-sand transition-colors">github.com/org/safaribooking</a>
               </div>
             </div>
          </div>

          <div className="w-full lg:w-7/12 p-10">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                   <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-colors" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                   <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-colors" placeholder="Doe" />
                 </div>
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                 <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-colors" placeholder="johndoe@example.com" />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                 <textarea rows="4" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset transition-colors" placeholder="Your message here..."></textarea>
               </div>

               <button type="submit" className="flex items-center justify-center w-full bg-forest hover:bg-jungle text-white font-bold py-4 rounded-lg transition-colors group">
                 Send Message
                 <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
             </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;