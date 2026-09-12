import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Mail, Sparkles } from "lucide-react";

const UpworkIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo only – connect an email service)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Contact Me
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Interested in working together? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/10"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="p-5 rounded-2xl border border-border bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-70" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald" />
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Availability
                  </p>
                </div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Currently open to:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2"><Sparkles size={12} className="text-brand-indigo" /> DevOps Engineer</li>
                  <li className="flex items-center gap-2"><Sparkles size={12} className="text-brand-teal" /> Cloud Engineer</li>
                  <li className="flex items-center gap-2"><Sparkles size={12} className="text-brand-amber" /> Site Reliability Engineer</li>
                </ul>
              </div>
            </div>
            <a
              href="mailto:necheokeke@gmail.com"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:shadow-md hover:border-foreground/20 transition-all group"
            >
              <Mail size={20} className="text-brand-rose" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">necheokeke@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/chinecherem-okeke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:shadow-md hover:border-foreground/20 transition-all group"
            >
              <Linkedin size={20} className="text-brand-indigo" />
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium text-foreground">linkedin.com/in/chinecherem-okeke</p>
              </div>
            </a>
            <a
              href="https://github.com/Nechy-Okeke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:shadow-md hover:border-foreground/20 transition-all group"
            >
              <Github size={20} className="text-brand-teal" />
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium text-foreground">github.com/Nechy-Okeke</p>
              </div>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01f2d02c30dbcf15cd?s=1110580753140797440"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:shadow-md hover:border-foreground/20 transition-all group"
            >
              <span className="text-brand-emerald">
                <UpworkIcon size={20} />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Upwork</p>
                <p className="text-sm font-medium text-foreground">upwork.com/freelancers/marycynthia-okeke</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
