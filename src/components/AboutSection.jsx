import { motion } from 'framer-motion';
import { CalendarCheck, Clock, CreditCard, QrCode, LayoutDashboard, Compass, Star, BedDouble } from 'lucide-react';

const features = [
  { icon: <CalendarCheck size={28} />, title: "Online Booking", desc: "Seamless safari reservations from anywhere." },
  { icon: <Clock size={28} />, title: "Real-Time Availability", desc: "Live tracking of available jeeps and tours." },
  { icon: <CreditCard size={28} />, title: "Secure Payments", desc: "Integrated payment gateways for hassle-free checkout." },
  { icon: <QrCode size={28} />, title: "QR Code Tickets", desc: "Instant digital ticket generation upon booking." },
  { icon: <BedDouble size={28} />, title: "Accommodation Control", desc: "Monitor and update availability for 'Tour + Accommodation' packages." },
  { icon: <LayoutDashboard size={28} />, title: "Admin Dashboard", desc: "Comprehensive control panel for system management." },
  { icon: <Compass size={28} />, title: "Custom Requests", desc: "Tailored safari experiences for unique needs." },
  { icon: <Star size={28} />, title: "Review System", desc: "Feedback loop from tourists for constant improvement." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About The Project</h2>
          <div className="w-24 h-1 bg-sand mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Safari Booking System for Ahasata Gauwai Adventure Safari addresses the critical need for digital transformation in local tourism. 
            Replacing manual booking logs, this system ensures tourists can easily secure jeeps, make secure online payments, and receive immediate confirmations, 
            while operators enjoy an organized, highly scalable management platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 border-t-4 border-t-jungle group hover:border-t-sunset transition-all duration-300"
            >
              <div className="text-jungle mb-4 group-hover:text-sunset transition-colors duration-300 bg-forest/20 w-14 h-14 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
