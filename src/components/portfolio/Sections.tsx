import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, GraduationCap, Award, MapPin, CheckCircle2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Reveal, Section, SectionHeader, Tag } from "./ui";
import { ABOUT_CARDS, ACADEMICS, CERTS, ENGAGEMENTS, PIPELINE, PROJECTS, SKILLS, STRENGTHS, TCS_HIGHLIGHTS } from "./data";

export function About() {
  return (
    <Section id="about" alt>
      <SectionHeader eyebrow="about" title="About Me" subtitle="A Passion for Automation, Quality, and Continuous Improvement" />
      <Reveal className="mx-auto max-w-3xl space-y-5 text-muted-foreground md:text-lg">
        <p>I am an IT Analyst with extensive experience in DevOps practices, build and deployment automation, AWS cloud environments, software testing, and enterprise application support.</p>
        <p>My professional journey includes working on telecommunications and insurance solutions, collaborating with international stakeholders, and implementing automation practices that support reliable software delivery.</p>
        <p>I have hands-on experience with Jenkins, Git, Maven, SonarQube, Gerrit, AWS, Linux, and enterprise testing tools. I enjoy solving technical problems, improving team workflows, and exploring new technologies.</p>
        <p>I have also represented my team during an onsite engagement in <span className="text-foreground">Pagani, Italy</span>, to understand client requirements and strengthen technical collaboration.</p>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {ABOUT_CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeader eyebrow="expertise" title="Technical Expertise" subtitle="Tools and Technologies Behind Reliable Software Delivery" />
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="card-hover group h-full rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-transform group-hover:rotate-6"><s.icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">{s.items.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Pipeline() {
  const [active, setActive] = useState(2);
  const cur = PIPELINE[active] ?? PIPELINE[0]!;
  return (
    <Section id="pipeline" alt>
      <SectionHeader eyebrow="ci/cd" title="From Code to Deployment" subtitle="Building Reliable Delivery Through Automation" />
      <TooltipProvider delayDuration={100}>
        <Reveal>
          <ol className="flex flex-col items-stretch lg:flex-row lg:items-start">
            {PIPELINE.map((p, i) => (
              <li key={p.stage} className="flex flex-col items-center lg:flex-1 lg:flex-row lg:items-start">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={active === i}
                      className={`group flex w-full max-w-xs flex-col items-center rounded-xl p-3 text-center transition-colors focus-visible:outline-2 focus-visible:outline-ring lg:w-auto ${active === i ? "bg-accent" : ""}`}
                    >
                      <span className={`relative flex h-14 w-14 items-center justify-center rounded-xl border transition-all ${active === i ? "glow border-primary bg-card text-primary" : "border-border bg-card text-muted-foreground"}`}>
                        <p.icon className="h-6 w-6" />
                        <span className="absolute -right-1 -top-1 flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" style={{ animationDelay: `${i * 0.25}s` }} />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                        </span>
                      </span>
                      <span className="mt-3 text-sm font-semibold">{p.stage}</span>
                      <span className="font-mono text-xs text-primary">{p.tools}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>{p.text}</TooltipContent>
                </Tooltip>
                {i < PIPELINE.length - 1 && (
                  <span aria-hidden className="flow-line-y my-1 h-8 w-0.5 opacity-60 lg:flow-line lg:mx-0 lg:mt-10 lg:h-0.5 lg:w-full lg:min-w-4" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </TooltipProvider>
      <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto mt-10 max-w-2xl rounded-2xl p-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">stage {active + 1}/{PIPELINE.length}</p>
        <h3 className="mt-1 text-xl font-semibold">{cur.stage} — <span className="text-primary">{cur.tools}</span></h3>
        <p className="mt-2 text-muted-foreground">{cur.text}</p>
        {active === PIPELINE.length - 1 && (
          <p className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-primary"><CheckCircle2 className="h-4 w-4" /> Deployment successful</p>
        )}
      </motion.div>
      <p className="mt-6 text-center font-mono text-xs text-muted-foreground">
        Illustrative representation of CI/CD expertise — not a verified architecture of any specific client project.
      </p>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="experience" title="Professional Journey" subtitle="9+ years at Tata Consultancy Services across telecom and insurance" />
      <div className="relative mx-auto max-w-4xl">
        <span aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" />
        <Reveal className="relative mb-12 pl-12 md:pl-0">
          <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary bg-background text-primary md:left-1/2 md:-translate-x-1/2"><Briefcase className="h-4 w-4" /></span>
          <div className="glass glow rounded-2xl p-6 md:mx-auto md:mt-14 md:max-w-2xl">
            <p className="font-mono text-xs text-primary">December 2014 onward (per resume)</p>
            <h3 className="mt-1 text-2xl font-bold">Tata Consultancy Services (TCS)</h3>
            <p className="text-muted-foreground">IT Analyst / DevOps and Software Testing Professional</p>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {TCS_HIGHLIGHTS.map((h) => <li key={h} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{h}</li>)}
            </ul>
          </div>
        </Reveal>
        {ENGAGEMENTS.map((e, i) => (
          <Reveal key={e.client} className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}>
            <span className={`absolute left-2.5 top-6 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background ${i % 2 === 0 ? "md:left-auto md:-right-[7px]" : "md:-left-[7px]"}`} />
            <div className="card-hover rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs text-primary">{e.period}</p>
              <h3 className="mt-1 text-xl font-bold">{e.client} <span className="text-sm font-normal text-muted-foreground">— {e.domain}</span></h3>
              <p className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">{e.role} <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{e.location}</span></p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.points.map((p) => <li key={p} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{p}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 0.08}>
      <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground"><p.icon className="h-5 w-5" /></div>
          <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-primary">{p.category}</p>
        <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="overflow-hidden" id={`proj-${i}`}>
          <div className="mt-5 space-y-4 border-t border-border pt-5 text-sm">
            <div><p className="font-semibold">Role & contributions</p><p className="mt-1 text-muted-foreground">{p.role}</p></div>
            <div>
              <p className="font-semibold">Key highlights</p>
              <ul className="mt-2 space-y-1.5 text-muted-foreground">{p.highlights.map((h) => <li key={h} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{h}</li>)}</ul>
            </div>
          </div>
        </motion.div>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`proj-${i}`} className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-primary hover:underline">
          {open ? "Hide details" : "View details"} <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects" alt>
      <SectionHeader eyebrow="projects" title="Selected Work & Project Highlights" subtitle="Enterprise delivery across DevOps, telecom, internal tooling and quality engineering" />
      <div className="grid gap-5 md:grid-cols-2">{PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}</div>
    </Section>
  );
}

export function Education() {
  const [more, setMore] = useState(false);
  return (
    <Section id="education">
      <SectionHeader eyebrow="education" title="Education & Professional Credentials" subtitle="Engineering foundation and testing credentials" />
      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="card-hover h-full rounded-2xl border border-border bg-card p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground"><GraduationCap className="h-5 w-5" /></div>
            <p className="mt-4 font-mono text-xs text-primary">Graduated 2014 · 79.41%</p>
            <h3 className="mt-1 text-2xl font-bold">Bachelor of Technology</h3>
            <p className="text-muted-foreground">Electronics and Communication Engineering</p>
            <p className="mt-3 text-sm text-muted-foreground">M.V.G.R. College of Engineering, Vizianagaram · JNTUK</p>
            <button onClick={() => setMore(!more)} aria-expanded={more} className="mt-5 flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Academic history <ChevronDown className={`h-4 w-4 transition-transform ${more ? "rotate-180" : ""}`} />
            </button>
            {more && (
              <ul className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
                {ACADEMICS.map((a) => (
                  <li key={a.level} className="flex justify-between gap-4">
                    <span><span className="font-semibold">{a.level}</span> <span className="text-muted-foreground">— {a.school}</span></span>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">{a.year} · {a.score}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
        <div className="grid gap-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground"><Award className="h-5 w-5" /></div>
                <div><p className="font-semibold">{c.name}</p><p className="font-mono text-xs text-muted-foreground">{c.note}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Strengths() {
  return (
    <Section id="strengths" alt>
      <SectionHeader eyebrow="strengths" title="Beyond the Technology" subtitle="How I work with teams and solve problems" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STRENGTHS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
