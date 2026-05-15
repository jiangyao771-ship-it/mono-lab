import { motion } from "motion/react";
import { ArrowRight, Mail, Instagram, Binary } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-48 px-6 md:px-12 bg-neon text-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8"
          >
            Let's Build <br /> Something <br /> Timeless.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-x-12 gap-y-6"
          >
            <a href="mailto:hello@monolab.studio" className="flex items-center gap-2 group">
              <Mail size={16} />
              <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-bg transition-all">hello@monolab.studio</span>
            </a>
            <a href="#" className="flex items-center gap-2 group">
              <Instagram size={16} />
              <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-bg transition-all">@monolab</span>
            </a>
            <a href="#" className="flex items-center gap-2 group">
              <Binary size={16} />
              <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-bg transition-all">Behance</span>
            </a>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-bg text-neon px-10 py-8 rounded-full font-bold uppercase tracking-widest text-base flex flex-col items-center justify-center gap-3 hover:shadow-2xl transition-shadow"
        >
          <span>Start a Project</span>
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </section>
  );
}
