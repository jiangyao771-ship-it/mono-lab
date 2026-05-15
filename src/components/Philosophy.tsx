import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-48 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5 select-none pointer-events-none">
        <span className="text-[20vw] font-bold text-white whitespace-nowrap leading-none tracking-tighter">PHILOSOPHY</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <span className="text-neon text-[10px] uppercase tracking-[0.3em] font-mono mb-4 block">Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-4">
              设计不仅是装饰。<br />
              而是：<br />
              品牌的身份与价值。
            </h2>
          </div>
          
          <div className="space-y-6 max-w-md">
            <p className="text-xl text-text leading-relaxed">
              我们相信：<br />
              极简视觉，能够让品牌<br />
              更加清晰、持久、有力量。
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-[3/4] bg-surface overflow-hidden grayscale"
        >
          <img 
          src="/img/Visual Notes/5.jpg" 
          alt="Minimalist design" 
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
          <div className="absolute inset-0 border-[20px] border-bg" />
        </motion.div>
      </div>
    </section>
  );
}
