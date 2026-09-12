import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, ShieldCheck, Container, GitBranch, Activity, Database, Gauge, Workflow, Lock } from "lucide-react";

type Tool = { name: string; slug: string };

const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const skills: Array<{
  icon: typeof Cloud;
  title: string;
  color: string;
  tone: string;
  items: Tool[];
}> = [
  {
    icon: Cloud, title: "Cloud Platforms", color: "text-brand-indigo", tone: "indigo",
    items: [
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Azure", slug: "microsoftazure" },
      { name: "GCP", slug: "googlecloud" },
      { name: "Alibaba Cloud", slug: "alibabacloud" },
    ],
  },
  {
    icon: ShieldCheck, title: "Security & DevOps", color: "text-brand-emerald", tone: "emerald",
    items: [
      { name: "SonarQube", slug: "sonarqube" },
      { name: "OWASP ZAP", slug: "owasp" },
      { name: "Snyk", slug: "snyk" },
      { name: "Trivy", slug: "aquasecurity" },
      { name: "Cosign", slug: "sigstore" },
      { name: "IAM", slug: "auth0" },
    ],
  },
  {
    icon: Container, title: "Containers & IaC", color: "text-brand-teal", tone: "teal",
    items: [
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Docker", slug: "docker" },
      { name: "Terraform (AWS, Azure & GCP)", slug: "terraform" },
      { name: "CloudFormation", slug: "amazonwebservices" },
      { name: "Crossplane", slug: "crossplane" },
    ],
  },
  {
    icon: GitBranch, title: "CI/CD & Automation", color: "text-brand-amber", tone: "amber",
    items: [
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "GitLab CI", slug: "gitlab" },
      { name: "Azure DevOps", slug: "azuredevops" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Ansible", slug: "ansible" },
    ],
  },
  {
    icon: Activity, title: "Site Reliability Engineering", color: "text-brand-violet", tone: "violet",
    items: [
      { name: "Prometheus", slug: "prometheus" },
      { name: "Grafana", slug: "grafana" },
      { name: "Alertmanager", slug: "prometheus" },
      { name: "Loki", slug: "grafana" },
      { name: "OpenTelemetry", slug: "opentelemetry" },
      { name: "PagerDuty", slug: "pagerduty" },
    ],
  },
  {
    icon: Database, title: "Scripting & Data", color: "text-brand-rose", tone: "rose",
    items: [
      { name: "Python", slug: "python" },
      { name: "Bash", slug: "gnubash" },
      { name: "PowerShell", slug: "powershell" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "ElasticSearch", slug: "elasticsearch" },
    ],
  },
];

const solutions = [
  {
    icon: Workflow,
    title: "Ship faster, safely",
    desc: "I design GitOps-driven delivery pipelines with policy gates, automated testing, container scanning and signed artifacts so releases are fast without sacrificing control.",
    color: "text-brand-amber",
    tone: "amber",
  },
  {
    icon: Cloud,
    title: "Resilient platform engineering",
    desc: "I build Terraform and Kubernetes platforms across AWS, Azure and GCP that are reproducible, cost-aware and self-healing, reducing downtime while improving operability.",
    color: "text-brand-indigo",
    tone: "indigo",
  },
  {
    icon: Lock,
    title: "Security by design",
    desc: "I embed Zero Trust, IAM hardening, supply-chain security and policy-as-code from day one so security becomes part of the operating model rather than a late-stage gate.",
    color: "text-brand-emerald",
    tone: "emerald",
  },
  {
    icon: Gauge,
    title: "Observability you can act on",
    desc: "I instrument systems with Prometheus, Grafana and OpenTelemetry to surface real signals, cutting MTTR and turning alerts into clear, actionable runbooks.",
    color: "text-brand-violet",
    tone: "violet",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-2">Meet me</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
            I help companies build <span className="text-gradient-vibrant">reliable, secure, and scalable platforms</span> that move faster without breaking.
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-6">
            I’m a Senior DevOps &amp; Site Reliability Engineer with 8+ years of experience across AWS, Azure, and Google Cloud, focused on turning complex environments into dependable systems. I combine strong delivery discipline with production reliability thinking to build automation, observability, and operating models that teams can trust.
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-16">
            My work is about solving the real problems that slow delivery: brittle deployments, unclear infrastructure, inconsistent security, and poor visibility. I bring a calm, practical approach to platform engineering that is production-ready, cost-aware, and built to scale.
          </p>
        </motion.div>

        {/* What I deliver, solution-led positioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-background border border-border rounded-2xl p-6 hover:shadow-xl hover:border-foreground/20 transition-all duration-300 group"
            >
              <div className={`flex items-start gap-4 accent-${s.tone}`}>
                <div className="relative shrink-0">
                  <span className="icon-aura" aria-hidden="true" />
                  <div className="icon-tile w-12 h-12">
                    <s.icon size={24} className={s.color} strokeWidth={1.75} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1.5">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-2">Toolbox</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            The stack I deliver with
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-background border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`flex items-center gap-3 mb-4 accent-${skill.tone}`}>
                <div className="relative">
                  <span className="icon-aura" aria-hidden="true" />
                  <div className="icon-tile w-11 h-11">
                    <skill.icon size={22} className={skill.color} strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item.name} className="tag-chip inline-flex items-center gap-1.5">
                    <img
                      src={logo(item.slug)}
                      alt=""
                      loading="lazy"
                      className="w-3.5 h-3.5 object-contain opacity-90"
                      onError={(e) => ((e.currentTarget.style.display = "none"))}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
