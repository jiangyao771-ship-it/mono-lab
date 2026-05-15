import { motion } from "motion/react";

export default function About() {
  const keywords = ["Minimal", "Precision", "Future", "System", "Identity"];

  return (
    <section id="about" className="py-32 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative aspect-video bg-surface overflow-hidden group"
      >
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop" 
          alt="Abstract Visual" 
          className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-40" />
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-neon text-[10px] uppercase tracking-[0.3em] font-mono mb-4 block">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About MONO Lab</h2>
          <p className="text-lg text-text-muted max-w-xl leading-relaxed">
            MONO Lab 是一家专注于品牌视觉、视觉系统、AI 创意方向的现代设计工作室。
            我们通过极简、理性与系统化设计，帮助品牌建立更清晰、更高级、更具有未来感的视觉形象。
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-x-8 gap-y-4 pt-12 border-t border-white/5"
        >
          {keywords.map((word, i) => (
            <div key={word} className="flex items-center gap-3">
              <span className="text-text-muted font-display text-lg italic opacity-50">/</span>
              <span className="font-display text-lg tracking-tight uppercase">{word}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
