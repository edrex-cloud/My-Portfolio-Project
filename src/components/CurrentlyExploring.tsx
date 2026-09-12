import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Telescope, Activity, ShieldCheck, Bot, GitBranch, Wallet, Layers } from "lucide-react";

const items = [
  { icon: Activity, title: "OpenTelemetry", note: "Unified traces, metrics and logs across services.", tone: "violet", color: "text-brand-violet" },
  { icon: ShieldCheck, title: "Supply chain security", note: "SLSA, SBOMs, signed artifacts with Cosign.", tone: "emerald", color: "text-brand-emerald" },
  { icon: Bot, title: "AI-assisted DevOps", note: "LLMs for triage, IaC review and runbook drafting.", tone: "indigo", color: "text-brand-indigo" },
  { icon: GitBranch, title: "GitOps automation", note: "ArgoCD, Flux and progressive delivery patterns.", tone: "amber", color: "text-brand-amber" },
  { icon: Wallet, title: "FinOps optimization", note: "Tagging, rightsizing and cost guardrails.", tone: "rose", color: "text-brand-rose" },
  { icon: Layers, title: "Crossplane", note: "Kubernetes-native control planes for multi-cloud.", tone: "teal", color: "text-brand-teal" },
];

const CurrentlyExploring = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="exploring" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-2 inline-flex items-center gap-2">
            <Telescope size={14} /> Currently Exploring
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What I&apos;m <span className="text-gradient-vibrant">learning</span> right now
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl">
            A running list of tools and ideas I&apos;m digging into between projects, sometimes
            in a homelab, sometimes in production, always to figure out where they actually
            earn their keep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              whileHover={{ y: -3 }}
              className={`group bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:border-foreground/20 transition-all accent-${it.tone}`}
            >
              <div className="flex items-start gap-3">
                <div className="relative shrink-0">
                  <span className="icon-aura" aria-hidden="true" />
                  <div className="icon-tile w-10 h-10">
                    <it.icon size={18} className={it.color} strokeWidth={1.75} />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted-foreground mb-1">$ learning --now</p>
                  <h3 className="text-base font-semibold text-foreground leading-tight">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{it.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyExploring;