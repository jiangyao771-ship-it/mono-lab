import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background/Side Visual */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full -z-10 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full bg-[url('/img/Visual Notes/2.png')] bg-cover bg-center"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/img/开头.jpg')] bg-cover bg-center opacity-50"
        />
      </div>

      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl md:text-[140px] font-bold leading-[0.85] tracking-tighter mb-4">
            MONO <br /> Lab
          </h1>
          <p className="text-neon text-xl md:text-2xl font-display font-medium mb-8">
            极简 · 大胆 · 永恒
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-2 mb-12"
        >
          <p className="text-text font-mono text-sm tracking-widest uppercase">品牌视觉设计</p>
          <p className="text-text font-mono text-sm tracking-widest uppercase">视觉系统构建</p>
          <p className="text-text font-mono text-sm tracking-widest uppercase">AI 创意视觉</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-md text-text-muted text-sm mb-12 leading-relaxed"
        >
          我们为现代品牌打造具有长期价值的视觉系统。
          专注于数字时代的品牌表达与AI视觉探索。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button className="bg-neon text-bg px-8 py-3 font-display font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform">
            查看案例 <ArrowRight size={18} />
          </button>
          <button className="border border-white/20 hover:border-neon px-8 py-3 font-display font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group">
            开始合作 <ArrowRight size={18} className="rotate-[-45deg] group-hover:rotate-0 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Vertical Scroll Text */}
      <div className="absolute left-6 bottom-12 hidden md:flex items-center gap-4 rotate-[-90deg] origin-left">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-text-muted">Scroll</span>
        <div className="w-12 h-[1px] bg-neon" />
      </div>
    </section>
  );
}
