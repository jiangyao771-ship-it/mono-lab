import { motion } from "motion/react";
import { ShieldCheck, Eye, Sparkles } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "品牌视觉设计",
    items: ["Logo 设计", "品牌视觉系统", "品牌规范", "VI 设计"],
  },
  {
    icon: Eye,
    title: "视觉设计",
    items: ["海报设计", "社媒视觉", "Campaign 视觉", "包装设计"],
  },
  {
    icon: Sparkles,
    title: "AI 创意视觉",
    items: ["AI 视觉生成", "AI 品牌概念", "AI 动态创意", "未来感视觉设计"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-surface/30">
      <div className="mb-16">
        <span className="text-neon text-[10px] uppercase tracking-[0.3em] font-mono mb-4 block">Services</span>
        <h2 className="text-4xl md:text-5xl font-bold">我们能做什么</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-bg p-12 relative group overflow-hidden"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-neon scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            
            <service.icon className="text-neon mb-8 w-12 h-12 stroke-[1px]" />
            <h3 className="text-2xl font-bold mb-8">{service.title}</h3>
            
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li key={item} className="text-text-muted text-sm font-mono tracking-wider group-hover:text-text transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
