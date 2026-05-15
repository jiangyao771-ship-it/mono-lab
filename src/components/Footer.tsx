import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-4 tracking-tighter">MONO Lab</h2>
            <p className="text-neon text-lg font-display mb-8">Minimal. Bold. Timeless.</p>
            <p className="text-text-muted text-sm max-w-sm">
              We design visual systems that stand the test of time. 
              Built for forward-thinking brands.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-text-muted mb-8 font-mono">Navigation</h3>
            <ul className="space-y-4">
              {["Works", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm hover:text-neon transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-text-muted mb-8 font-mono">Connect</h3>
            <div className="flex gap-6">
              {["Instagram", "Behance", "Twitter"].map((item) => (
                <a key={item} href="#" className="text-sm hover:text-neon transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest text-text-muted font-mono">
          <p>© {currentYear} MONO Lab. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-text">Privacy Policy</a>
            <a href="#" className="hover:text-text">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
