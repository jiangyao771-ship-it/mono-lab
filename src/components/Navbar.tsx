import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "首页", href: "#hero" },
  { name: "关于我们", href: "#about" },
  { name: "服务内容", href: "#services" },
  { name: "案例展示", href: "#works" },
  { name: "理念", href: "#philosophy" },
  { name: "联系", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionChange = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleSectionChange);
    handleSectionChange();
    return () => window.removeEventListener("scroll", handleSectionChange);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter text-white"
          >
            MONO Lab
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm uppercase tracking-widest transition-colors relative ${
                    isActive ? "text-neon" : "text-white hover:text-neon"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neon"
                    />
                  )}
                </motion.a>
              );
            })}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm uppercase tracking-widest text-neon border border-neon px-4 py-2 hover:bg-neon hover:text-bg transition-colors"
            >
              EN
            </motion.a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="切换菜单"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg md:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={handleLinkClick}
                    className={`text-2xl uppercase tracking-widest transition-colors ${
                      isActive ? "text-neon" : "text-white hover:text-neon"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={handleLinkClick}
                className="text-2xl uppercase tracking-widest text-neon border border-neon px-8 py-3"
              >
                EN
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}