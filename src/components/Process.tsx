import { motion } from "motion/react";

const steps = [
  { id: "01", title: "Research", desc: "需求调研与分析" },
  { id: "02", title: "Strategy", desc: "策略制定" },
  { id: "03", title: "Design", desc: "设计创作与优化" },
  { id: "04", title: "Delivery", desc: "文件交付与售后" },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-white/5">
      <div className="mb-24 text-center">
        <span className="text-neon text-[10px] uppercase tracking-[0.3em] font-mono mb-4 block">Step by Step</span>
        <h2 className="text-4xl md:text-6xl font-bold">我们的服务流程</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="text-[120px] font-bold text-white/5 leading-none block mb-[-40px] tracking-tighter">
              {step.id}
            </span>
            <div className="relative z-10 pl-6 border-l border-neon/30">
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{step.title}</h3>
              <p className="text-text-muted font-mono text-sm tracking-widest">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
