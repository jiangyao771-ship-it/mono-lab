import { motion } from "motion/react";

export default function Navbar() {
  const navLinks = [
    { name: "首页", href: "#hero" },
    { name: "关于我们", href: "#about" },
    { name: "服务内容", href: "#services" },
    { name: "案例展示", href: "#works" },
    { name: "理念", href: "#philosophy" },
    { name: "联系", href: "#contact" },
    { name: "EN·", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-display font-bold tracking-tighter text-white"
      >
        MONO Lab
      </motion.div>
      
      <div className="flex gap-4 md:gap-8 items-center">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-sm uppercase tracking-widest hover:text-neon transition-colors text-white"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
