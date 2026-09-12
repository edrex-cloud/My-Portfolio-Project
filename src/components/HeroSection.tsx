import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Download, Github, Linkedin } from "lucide-react";
import profilePic from "@/assets/profile-new.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-24 pb-20"
    >
      {/* Warm ambient background */}
      <div className="absolute inset-0 -z-0 bg-mesh opacity-90 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-amber) / 0.45), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 w-[560px] h-[560px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-rose) / 0.4), transparent 70%)" }}
      />

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-10 lg:gap-16 items-center">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald" />
            </span>
            <span className="text-sm text-muted-foreground font-medium">Available for Senior DevOps &amp; SRE roles</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 text-foreground leading-[1.05] tracking-tight"
          >
            Marycynthia Okeke
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl font-semibold text-foreground/90 mb-5 leading-snug"
          >
            I build resilient cloud platforms and delivery systems that help teams ship faster without sacrificing stability, security, or control.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-foreground/75 max-w-xl mb-8 leading-relaxed"
          >
            With 8+ years of experience across AWS, Azure, and GCP, I bridge DevOps execution with site reliability engineering to build automation, operational discipline, and production-ready platforms that teams can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 max-w-xl mb-8"
          >
            {[
              { k: "40% fewer", v: "deployment failures" },
              { k: "25% lower", v: "cloud spend" },
              { k: "99.9% focus", v: "on reliability" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-border bg-card/60 backdrop-blur px-3 py-3 text-center">
                <div className="text-lg md:text-xl font-bold text-foreground leading-tight">{m.k}</div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-0.5 leading-snug">{m.v}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              <FolderOpen size={18} />
              View Projects
            </a>
            <a
              href="/Marycynthia_Okeke_DevOps_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/60 backdrop-blur text-foreground font-semibold rounded-xl hover:bg-accent transition-colors duration-200"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="https://github.com/Nechy-Okeke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/60 backdrop-blur text-foreground font-semibold rounded-xl hover:bg-accent transition-colors duration-200"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chinecherem-okeke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/60 backdrop-blur text-foreground font-semibold rounded-xl hover:bg-accent transition-colors duration-200"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-60"
            style={{ background: "linear-gradient(135deg, hsl(var(--accent-indigo) / 0.35), hsl(var(--accent-amber) / 0.3), hsl(var(--accent-rose) / 0.35))" }}
          />
          <img
            src={profilePic}
            alt="Marycynthia Okeke"
            className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
