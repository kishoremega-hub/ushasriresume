import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Linkedin, Github, CheckCircle2, Loader2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import resume from "@/assets/resume.pdf.asset.json";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, ROLES, STATS } from "./data";

function TypedRole() {
  const [i, setI] = useState(0);
  const [text, setText] = useState(ROLES[0]);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const word = ROLES[i];
    if (text === word) {
      const t = setTimeout(() => { setText(""); setI((i + 1) % ROLES.length); }, 1800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 60);
    return () => clearTimeout(t);
  }, [text, i, reduce]);
  return (
    <p className="font-mono text-lg text-primary sm:text-xl" aria-label={ROLES.join(" | ")}>
      <span aria-hidden>&gt; {reduce ? ROLES.join(" | ") : text}</span>
      <span aria-hidden className="caret">▍</span>
    </p>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let k = 0;
    const id = setInterval(() => { k++; setN(k); if (k >= value) clearInterval(id); }, 900 / value);
    return () => clearInterval(id);
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const STEPS = ["git fetch origin", "mvn clean install", "sonar-scanner", "deploy → env"];

function TerminalVisual() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % (STEPS.length + 2)), 1100);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="glass glow relative overflow-hidden rounded-2xl"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-destructive/70" />
          <span className="h-3 w-3 rounded-full bg-warning/70" />
          <span className="h-3 w-3 rounded-full bg-primary/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">jenkins — pipeline #108</span>
        </div>
        <div className="space-y-2.5 p-5 font-mono text-sm">
          {STEPS.map((s, idx) => {
            const done = step > idx;
            const running = step === idx;
            return (
              <div key={s} className="flex items-center gap-3">
                {done ? <CheckCircle2 className="h-4 w-4 text-primary" /> : running ? <Loader2 className="h-4 w-4 animate-spin text-warning" /> : <span className="h-4 w-4 rounded-full border border-border" />}
                <span className={done || running ? "text-foreground" : "text-muted-foreground/60"}>$ {s}</span>
              </div>
            );
          })}
          <div className={`pt-2 text-primary transition-opacity ${step >= STEPS.length ? "opacity-100" : "opacity-0"}`}>
            ✔ BUILD SUCCESS — deployed
          </div>
        </div>
        <div className="h-1 w-full bg-muted">
          <div className="h-full bg-primary transition-all duration-700" style={{ width: `${Math.min(step, STEPS.length) / STEPS.length * 100}%` }} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
        className="glass absolute -bottom-10 -left-6 flex items-center gap-3 rounded-xl p-3 sm:-left-10"
      >
        {/* Headshot placeholder: replace with a real <img> when a photo is provided */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/60 bg-muted" role="img" aria-label="Headshot placeholder for Ushasri Garimella">
          <User className="h-6 w-6 text-muted-foreground" />
        </div>
        <div>
          <p className="text-sm font-semibold">Ushasri Garimella</p>
          <p className="font-mono text-xs text-primary">● IT Analyst @ TCS</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
        className="glass absolute -right-4 -top-8 hidden rounded-xl px-4 py-3 font-mono text-xs sm:block"
        aria-hidden
      >
        <p className="text-muted-foreground">branch</p>
        <p className="text-primary">main ← feature/tr-fix</p>
      </motion.div>
    </div>
  );
}

function Social({ href, label, children }: { href: string | null; label: string; children: React.ReactNode }) {
  const cls = "flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary";
  if (!href) return <span className={`${cls} cursor-not-allowed opacity-50`} title={`${label} — coming soon`} aria-label={`${label} (coming soon)`}>{children}</span>;
  return <a href={href} className={cls} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{children}</a>;
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:min-h-screen md:pt-36">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="bg-radial-glow absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Hello, I'm</p>
          <h1 className="mt-3 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            Ushasri <span className="glow-text text-primary">Garimella</span>
          </h1>
          <div className="mt-4 min-h-8"><TypedRole /></div>
          <p className="mt-6 font-display text-xl font-semibold leading-snug sm:text-2xl">
            Engineering Reliable Systems. Automating Delivery. Enabling Innovation.
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">
            IT professional with 9+ years of experience spanning DevOps engineering, CI/CD automation, cloud infrastructure, software quality assurance, and cross-functional collaboration. Experienced in delivering reliable enterprise solutions, optimizing development workflows, and supporting complex telecom and insurance applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects">Explore My Work <ArrowRight /></a></Button>
            <Button asChild size="lg" variant="outline">
              <a href={resume.url} download="Ushasri-Garimella-Resume.pdf"><Download /> Download Resume</a>
            </Button>
          </div>
          <div className="mt-8 flex gap-3">
            <Social href={`mailto:${EMAIL}`} label="Email"><Mail className="h-4 w-4" /></Social>
            <Social href={LINKEDIN_URL} label="LinkedIn"><Linkedin className="h-4 w-4" /></Social>
            <Social href={GITHUB_URL} label="GitHub"><Github className="h-4 w-4" /></Social>
          </div>
        </motion.div>
        <div className="mx-auto w-full max-w-md lg:max-w-none"><TerminalVisual /></div>
      </div>

      <div className="relative mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass card-hover rounded-xl p-5">
            <p className="font-display text-4xl font-extrabold text-primary"><Counter value={s.value} suffix={s.suffix} /></p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
      <p className="relative mx-auto mt-4 max-w-6xl px-5 font-mono text-xs text-muted-foreground sm:px-8">
        * The eight projects were delivered through Jenkins CI/CD pipelines over a four-year period.
      </p>
    </section>
  );
}
