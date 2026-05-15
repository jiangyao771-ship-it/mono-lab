import { motion } from "motion/react";

const notes = [
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518005020480-1a74284729f1?q=80&w=1965&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510519133411-cdd01ad036f0?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop",
];

export default function SocialNotes() {
  return (
    <section id="social" className="py-32 px-6 md:px-12">
      <div className="mb-16">
        <span className="text-neon text-[10px] uppercase tracking-[0.3em] font-mono mb-4 block">Insights</span>
        <h2 className="text-4xl md:text-5xl font-bold">Visual Notes</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {notes.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="aspect-square bg-surface overflow-hidden cursor-pointer group"
          >
            <img 
              src={img} 
              alt={`Note ${i}`} 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
