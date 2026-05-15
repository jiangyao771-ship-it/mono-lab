import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "ORBIT COFFEE",
    type: "Brand Identity",
    desc: "精品咖啡品牌视觉系统",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "AURORA",
    type: "Visual Identity",
    desc: "美妆品牌视觉系统",
    image: "https://images.unsplash.com/photo-1610940882244-59667fca851b?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-32 px-6 md:px-12">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-neon text-[10px] uppercase tracking-[0.3em] font-mono mb-4 block">Works</span>
          <h2 className="text-4xl md:text-5xl font-bold">精选案例</h2>
        </div>
        <button className="text-neon text-[10px] uppercase tracking-widest font-mono flex items-center gap-2 group border-b border-transparent hover:border-neon pb-1 transition-all">
          查看全部案例 <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden bg-surface mb-8">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold mb-2 tracking-tighter">{project.name}</h3>
                <p className="text-text-muted text-sm font-mono tracking-widest uppercase mb-2">{project.type}</p>
                <p className="text-text-muted text-sm">{project.desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-neon group-hover:border-neon group-hover:text-bg transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
