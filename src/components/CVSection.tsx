import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Award, Briefcase, ExternalLink } from "lucide-react";
import vrCert from "@/assets/vr-superstore-certificate.png.asset.json";

const experience = [
  {
    period: "October 2025 – Present",
    role: "DevOps Engineer",
    company: "The VR Superstore Corp., Remote, USA",
    labels: ["Volunteer", "Remote"],
    description:
      "Designed reusable CI/CD pipelines in Azure DevOps and GitHub Actions, cutting deployment failures by 40%. Deployed a Prometheus, Loki and Grafana observability stack with alerting runbooks, and provisioned secure Azure infrastructure with Terraform for VR/AR workloads.",
    color: "bg-brand-indigo",
  },
  {
    period: "March 2025 – September 2025",
    role: "DevOps Engineer",
    company: "SWEN, AI Infrastructure Platform, Remote, UK",
    labels: ["Contract", "Remote"],
    description:
      "Automated multi-cloud provisioning across AWS and Alibaba Cloud using Terraform and Crossplane, managed through GitLab CI and ArgoCD. Built a Prometheus, Grafana and OpenTelemetry monitoring framework and applied FinOps rightsizing that reduced monthly cloud cost by 25%.",
    color: "bg-brand-teal",
  },
  {
    period: "July 2024 – December 2024",
    role: "Cloud Systems Engineer",
    company: "My Virtual Resources, Remote, USA",
    labels: ["Contract", "Remote"],
    description:
      "Managed Linux cloud servers, firewall rules and NordLayer VPN across client environments through proactive patching and configuration management. Deployed SentinelOne endpoint protection, DNS filtering and automated patch management, and administered Microsoft 365 tenants.",
    color: "bg-brand-emerald",
  },
  {
    period: "January 2025 – February 2025",
    role: "Cloud Engineer",
    company: "Independent Client, Remote",
    labels: ["Freelance", "Remote"],
    description:
      "Built a real-time event-driven webhook system on GCP using Pub/Sub, Cloud Functions and Cloud Run, ingesting email events, processing them and delivering webhooks through a fully automated serverless pipeline.",
    color: "bg-brand-violet",
  },
  {
    period: "January 2024 – May 2024",
    role: "DevOps Engineer",
    company: "Digital Witch, Remote, Nigeria",
    labels: ["Internship"],
    description:
      "Provisioned Kubernetes clusters on AWS (EKS), Azure (AKS) and GCP (GKE) with Terraform and Helm. Supported CI/CD across AWS CodePipeline, Azure DevOps and GitHub Actions, and built a GCP log analytics workflow with Log Router, BigQuery and Looker Studio.",
    color: "bg-brand-amber",
  },
  {
    period: "July 2023 – December 2023",
    role: "Junior DevOps Engineer",
    company: "Steghub, Remote, UK",
    labels: ["Internship", "Remote"],
    description:
      "Maintained Jenkins CI/CD pipelines and supported AWS deployments, improving pipeline throughput. Wrote Python and Bash automation for Linux configuration management and containerized supporting services with Docker for consistent environments.",
    color: "bg-brand-rose",
  },
];

const certifications: { name: string; date: string; url?: string }[] = [
  {
    name: "Google Cloud Certified – Professional Cloud Security Engineer",
    date: "May 2025",
    url: "https://drive.google.com/file/d/1gcAlmh8gLxzuInVmm97T9_vlIp1B_JzJ/view?usp=sharing",
  },
  {
    name: "LFS250",
    date: "April 2026",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/d2e9fad4-8d7c-4d95-abe6-cfe493af6b9d-marycynthia-okeke-cc01b6a7-0bf1-4651-a208-e7f20db0adbc-certificate.pdf",
  },
  {
    name: "Digital Technology Volunteering Program, Expert",
    date: "March 2026",
    url: vrCert.url,
  },
  { name: "Foundations of Cybersecurity", date: "August 2025" },
  { name: "Code Yourself! An Introduction to Programming", date: "August 2025" },
  {
    name: "Technical Support Fundamentals",
    date: "October 2023",
    url: "https://drive.google.com/file/d/1UjHmxNAKkzd46hiwjT0FTKaJljLXgyRi/view?usp=sharing",
  },
];

const CVSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cv" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-2">Resume</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-gradient-vibrant">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            A summary of my experience in DevOps and cloud engineering. Download the full PDF for the complete details.
          </p>

          <a
            href="/Marycynthia_Okeke_DevOps_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/10 mb-14"
          >
            <Download size={18} />
            Download Resume (PDF)
          </a>
        </motion.div>

        {/* Timeline */}
        <div className="flex items-center gap-3 mb-8">
          <Briefcase size={22} className="text-brand-indigo" />
          <h3 className="text-xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-indigo via-brand-teal to-brand-rose" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative pl-12 pb-10 last:pb-0"
            >
              <div className={`absolute left-2 top-1.5 w-4 h-4 rounded-full ${exp.color} ring-4 ring-card`} />
              <p className="font-mono text-xs text-muted-foreground mb-1">{exp.period}</p>
              <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
              <p className="text-sm text-foreground/70 mb-2 font-medium">{exp.company}</p>
              {exp.labels && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {exp.labels.map((l) => (
                    <span key={l} className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border bg-secondary text-secondary-foreground">
                      {l}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award size={22} className="text-brand-amber" />
            <h3 className="text-xl font-bold text-foreground">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert) => {
              const Wrapper: React.ElementType = cert.url ? "a" : "div";
              const wrapperProps = cert.url
                ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={cert.name}
                  {...wrapperProps}
                  className={`group flex items-start gap-3 p-4 bg-background border border-border rounded-xl transition-all ${
                    cert.url ? "hover:shadow-md hover:border-brand-amber/40 hover:-translate-y-0.5 cursor-pointer" : ""
                  }`}
                >
                  <Award size={18} className="text-brand-amber mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium leading-snug">{cert.name}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                  {cert.url && (
                    <ExternalLink
                      size={14}
                      className="text-muted-foreground group-hover:text-brand-amber shrink-0 mt-0.5 transition-colors"
                    />
                  )}
                </Wrapper>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
