import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ShieldCheck, Cloud, Lock, PlayCircle, ServerCog } from "lucide-react";
import nexusArchitecture from "@/assets/nexus-architecture.png";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import cloudformationArchitecture from "@/assets/cloudformation-architecture.png";
import graf0Image from "@/assets/graf0.png";
import cfZapScanImage from "@/assets/cf-zap-scan.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  icon: typeof ShieldCheck;
  accent: string;
  bg: string;
  /** brand color key used for icon glow/gradient */
  tone: "indigo" | "teal" | "amber" | "rose" | "emerald" | "violet";
  image?: string;
  imageAlt?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string;
  outcome?: string;
}

const projects: Project[] = [
  {
    title: "Secure Serverless DevOps Pipeline",
    description:
      "A secure CI/CD pipeline deploying a serverless API on AWS using CloudFormation and GitHub Actions, with CodeQL (SAST) and OWASP ZAP (DAST) integrated for automated security scanning.",
    tags: ["AWS", "CloudFormation", "GitHub Actions", "CodeQL", "OWASP ZAP"],
    github: "https://github.com/Nechy-Okeke/OWASP-ZAP-CloudFormation",
    icon: ShieldCheck,
    accent: "text-brand-emerald",
    bg: "bg-brand-emerald/10",
    tone: "emerald",
    image: cfZapScanImage,
    imageAlt: "OWASP ZAP scan results integrated into a secure CI/CD workflow",
    problem:
      "A healthcare-style serverless application needed an automated deployment pipeline that could catch vulnerabilities before anything reached the production stage.",
    solution:
      "Designed a serverless DevOps pipeline using GitHub Actions, AWS CloudFormation, CodeQL and OWASP ZAP, with static and dynamic scans running on every pull request.",
    architecture:
      "GitHub Actions triggers CloudFormation to deploy a Lambda + API Gateway stack. CodeQL runs SAST on the codebase, OWASP ZAP performs DAST against a deployed test environment, and results are gated before promotion.",
    challenges:
      "Managing IAM permissions least-privilege for the pipeline role, keeping ZAP scans fast enough for PR feedback, and wiring SARIF output back into GitHub's security tab.",
    outcome:
      "Every merge is scanned end-to-end, vulnerable dependencies are caught before promotion, and the security review step no longer blocks the release path.",
  },
  {
    title: "Self-Healing Multi-Cloud GitOps + AIOps Platform",
    description:
      "Intelligent GitOps-driven infrastructure built with Terraform across multiple clouds, featuring an AI routing engine that optimizes workload placement based on cost, latency, and resource availability.",
    tags: ["Terraform", "GitOps", "AIOps", "Multi-Cloud", "AWS"],
    github: "https://github.com/Nechy-Okeke/Devops-prototype",
    demo: "https://www.loom.com/share/ddfdd200e22948cd903bfdfc9ffe8aa4",
    icon: Cloud,
    accent: "text-brand-indigo",
    bg: "bg-brand-indigo/10",
    tone: "indigo",
    image: graf0Image,
    imageAlt: "Grafana dashboard showing multi-cloud GitOps and AIOps monitoring",
    problem:
      "Workloads spread across multiple clouds were over-provisioned, hard to reason about, and slow to recover when a region or provider degraded.",
    solution:
      "Built a GitOps-driven platform using Terraform and an AI routing engine that picks target clouds based on cost, latency and available capacity, with self-healing controllers reconciling drift back to Git.",
    architecture:
      "Terraform modules provision Kubernetes clusters across AWS and Alibaba Cloud. A routing service scores workloads and writes desired-state manifests to Git, which Argo-style controllers reconcile onto the target cluster.",
    challenges:
      "Designing a cost/latency scoring model that generalized across clouds, handling partial failures during cross-cloud reconciliation, and keeping the routing decisions observable.",
    outcome:
      "Deployments became repeatable and Git-driven, and the platform automatically shifts and rebuilds workloads when a target degrades, instead of waiting for a human to react.",
  },
  {
    title: "Sonatype Nexus Supply Chain Security",
    description:
      "Hardened CI/CD pipeline using Sonatype Nexus Repository as a trusted artifact source, integrated with Trivy, Grype, and Cosign for container scanning and signing, plus a Flask + Grafana monitoring dashboard for supply chain visibility.",
    tags: ["Sonatype Nexus", "Trivy", "Grype", "Cosign", "Grafana"],
    github: "https://github.com/Nechy-Okeke/nexus-demo",
    demo: "https://www.loom.com/share/596f461e866b44389eff7348230fad36",
    icon: Lock,
    accent: "text-brand-rose",
    bg: "bg-brand-rose/10",
    tone: "rose",
    image: nexusArchitecture,
    imageAlt: "Sonatype Nexus Repository architecture in a DevOps CI/CD workflow",
    problem:
      "Builds were pulling dependencies from public registries with no single source of truth for artifacts and no signing, leaving supply-chain risk in every release.",
    solution:
      "Centralized artifacts in Sonatype Nexus, scanned every container with Trivy and Grype, signed images with Cosign, and exposed supply-chain visibility through a Flask API and Grafana dashboard.",
    architecture:
      "CI pipelines pull from Nexus as the trusted proxy, build images, run Trivy + Grype scans, sign passing images with Cosign, and push metadata to a Flask service that feeds Grafana panels.",
    challenges:
      "Fitting scan and sign steps into the pipeline budget, handling false positives from CVE databases, and modelling signature verification at deploy time.",
    outcome:
      "Every shipped image is scanned, signed and traceable back to a reviewed source, and supply-chain posture is visible on a single dashboard.",
  },
  {
    title: "Endpoint Security Hardening",
    description:
      "Endpoint security project focused on hardening, threat detection, and policy enforcement across managed devices, combining baseline configuration, monitoring, and automated response.",
    tags: ["Endpoint Security", "Hardening", "Threat Detection", "Automation"],
    github: "https://github.com/Nechy-Okeke/End-Point-Security",
    icon: ServerCog,
    accent: "text-brand-amber",
    bg: "bg-brand-amber/10",
    tone: "amber",
    image: cloudformationArchitecture,
    imageAlt: "Endpoint security architecture diagram with scanning, IAM roles, and logging",
    problem:
      "Managed endpoints across a distributed team had inconsistent baselines, patchy visibility, and no automated response for common detections.",
    solution:
      "Rolled out standardized hardening baselines, centralized logging, and automated response playbooks for the most common threat patterns.",
    architecture:
      "Baselines are enforced via configuration policies, endpoints ship logs to a central collector, and playbooks trigger on defined detections to isolate, alert or roll back automatically.",
    challenges:
      "Balancing user friction against control strength, keeping detection rules low-noise, and safely testing automated response actions before enabling them broadly.",
    outcome:
      "Endpoints now share a known-good baseline, routine alerts are handled by automation, and analysts focus their time on real incidents.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-2">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-foreground">
            Featured <span className="text-gradient-vibrant">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden bg-card/90 border border-border/70 rounded-[24px] p-6 hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)] hover:border-foreground/20 transition-all duration-300 flex flex-col"
            >
              <div className="mb-4 rounded-[20px] border border-border/70 bg-secondary/30 p-3 shadow-inner">
                <div className="mb-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-transparent" />
                <div className="overflow-hidden rounded-xl border border-border/60 bg-background/70 h-44">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center scale-[1.05] group-hover:scale-[1.12] transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground">
                      <span>Case study focused on architecture, security, and measurable outcomes.</span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`flex items-start justify-between mb-4 accent-${project.tone}`}>
                <div className="relative">
                  <span className="icon-aura" aria-hidden="true" />
                  <div className="icon-tile w-12 h-12">
                    <project.icon size={24} className={project.accent} strokeWidth={1.75} />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable case study */}
              {(project.problem || project.solution) && (
                <div className="mb-4 border-t border-border/60 pt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex w-full items-center justify-between rounded-full border border-border/60 bg-background/70 px-3 py-2 text-left font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                  >
                    <span>Open case study</span>
                    <span className="text-foreground/70">↗</span>
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2 pt-3 border-t border-border/60">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-foreground text-background text-xs font-mono font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github size={16} strokeWidth={2.25} />
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-card text-xs font-mono font-semibold text-foreground hover:border-brand-rose/50 hover:text-brand-rose hover:-translate-y-0.5 transition-all duration-300"
                    aria-label="Watch demo video"
                  >
                    <PlayCircle size={16} className="animate-pulse" />
                    Watch demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto rounded-[32px] border border-border/70 bg-background/95 p-0 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] backdrop-blur-xl">
          {selectedProject && (
            <div className="p-6 sm:p-8">
              <div className="mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-accent to-transparent" />
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-semibold text-foreground">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                {[
                  { k: "Problem", v: selectedProject.problem },
                  { k: "Solution", v: selectedProject.solution },
                  { k: "Architecture", v: selectedProject.architecture },
                  { k: "Challenges", v: selectedProject.challenges },
                  { k: "Outcome", v: selectedProject.outcome },
                ]
                  .filter((row) => row.v)
                  .map((row) => (
                    <div key={row.k} className="rounded-2xl border border-border/70 bg-card/70 p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/65 mb-2">
                        {row.k}
                      </div>
                      <div className="leading-relaxed">{row.v}</div>
                    </div>
                  ))}
              </div>

              {(selectedProject.github || selectedProject.demo) && (
                <div className="mt-6 flex flex-wrap gap-3 border-t border-border/60 pt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5"
                    >
                      <Github size={16} />
                      View repository
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-0.5"
                    >
                      <PlayCircle size={16} />
                      Watch demo
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
