import { useState, type FormEvent } from "react";
import { ArrowUp, Github, Linkedin, Mail, Send, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, Section, SectionHeader } from "./ui";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, NAV } from "./data";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

export function validateContact(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Please add a short subject.";
  if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  if (f.message.length > 2000) e.message = "Message must be under 2000 characters.";
  return e;
}

export function Contact() {
  const [f, setF] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateContact(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = `${f.message}\n\n— ${f.name} (${f.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const field = (k: keyof Fields, label: string, el: "input" | "textarea" = "input", type = "text") => (
    <div className="space-y-1.5">
      <Label htmlFor={k}>{label}</Label>
      {el === "input" ? (
        <Input id={k} type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
      ) : (
        <Textarea id={k} rows={5} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
      )}
      {errors[k] && <p id={`${k}-err`} role="alert" className="text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <Section id="contact">
      <SectionHeader eyebrow="contact" title="Let's Build Something Reliable Together" subtitle="Open to meaningful conversations about DevOps, automation, cloud engineering, and enterprise technology." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          <a href={`mailto:${EMAIL}`} className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <Mail className="h-5 w-5 text-primary" />
            <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium">{EMAIL}</p></div>
          </a>
          {[{ l: "LinkedIn", u: LINKEDIN_URL, I: Linkedin }, { l: "GitHub", u: GITHUB_URL, I: Github }].map(({ l, u, I }) => (
            <div key={l} className="flex items-center gap-4 rounded-2xl border border-dashed border-border p-5 text-muted-foreground">
              <I className="h-5 w-5" />
              <div><p className="text-sm">{l}</p><p className="text-sm">{u ?? "Profile link coming soon"}</p></div>
            </div>
          ))}
          <Button asChild size="lg" className="w-full"><a href={`mailto:${EMAIL}`}><Mail /> Email Me</a></Button>
        </Reveal>
        <Reveal>
          <form onSubmit={submit} noValidate className="glass space-y-4 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">{field("name", "Name")}{field("email", "Email", "input", "email")}</div>
            {field("subject", "Subject")}
            {field("message", "Message", "textarea")}
            <Button type="submit" size="lg"><Send /> Compose Email</Button>
            <p className="flex gap-2 text-xs text-muted-foreground">
              <Info className="h-4 w-4 shrink-0" />
              This form opens your email app with the message pre-filled — it doesn't send automatically.
            </p>
            {opened && <p role="status" className="text-sm text-primary">Your email app should now be open. Just press send there.</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="font-display text-2xl font-extrabold">UG<span className="text-primary">.</span></a>
          <p className="mt-2 text-sm text-muted-foreground">© 2026 Ushasri Garimella. All rights reserved.</p>
          <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-primary">{EMAIL}</a>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-primary">{n.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground/50" title="LinkedIn — coming soon"><Linkedin className="h-4 w-4" /></span>
          <span className="text-muted-foreground/50" title="GitHub — coming soon"><Github className="h-4 w-4" /></span>
          <Button asChild variant="outline" size="sm"><a href="#home"><ArrowUp /> Back to Top</a></Button>
        </div>
      </div>
    </footer>
  );
}
