import { useEffect, useState } from "react";
import { Menu, Moon, Sun, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import resume from "@/assets/resume.pdf.asset.json";
import { NAV } from "./data";

export function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return { dark, toggle };
}

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-2xl font-extrabold tracking-tight">
          UG<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${active === n.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
                {active === n.id && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={resume.url} download="Ushasri-Garimella-Resume.pdf">
              <Download /> Download Resume
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="glass border-x-0 lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={`block rounded-md px-3 py-2.5 text-sm ${active === n.id ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <Button asChild className="w-full">
                <a href={resume.url} download="Ushasri-Garimella-Resume.pdf"><Download /> Download Resume</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
