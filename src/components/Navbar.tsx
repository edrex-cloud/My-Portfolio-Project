import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, UserRound, FolderKanban, FileText, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Resume", href: "#cv", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold font-mono tracking-wider">
          <span className="w-7 h-7 rounded-lg ring-gradient flex items-center justify-center text-white text-xs">
            MO
          </span>
          <span className="text-foreground hidden sm:inline">Marycynthia</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center rounded-full border border-border/60 bg-card/80 p-1.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <ul className="flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-foreground"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/12 via-transparent to-accent/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-muted/80 text-foreground/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 group-hover:text-primary">
                      <Icon size={15} />
                    </span>
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-3 py-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href} className="w-full max-w-[220px]">
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-full border border-border/50 bg-card/80 px-4 py-2.5 text-base font-medium text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/80 text-foreground/80">
                        <Icon size={15} />
                      </span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
