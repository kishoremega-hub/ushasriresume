import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">// {eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>
    </Reveal>
  );
}

export function Section({ id, children, alt }: { id: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${alt ? "bg-surface" : ""}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
      {children}
    </span>
  );
}
