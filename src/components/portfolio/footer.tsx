import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/imdasif786/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/imdasif/" },
  { icon: Mail, href: "mailto:mdasifjpu@gmail.com" },
  { icon: Instagram, href: "https://www.instagram.com/imdasif786/" },
];

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-border/60 bg-background/50 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold"> <span className="text-gradient">MD</span> Asif</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Frontend Developer & React.js specialist crafting premium interfaces for the modern web.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => go(l.id)} className="transition-colors hover:text-foreground">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Connect</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-card/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground hover:shadow-elegant"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <div>© {new Date().getFullYear()} Md Asif. All rights reserved.</div>
          <div>Designed & Developed by <span className="text-gradient font-semibold">Md Asif</span></div>
        </div>
      </div>
    </footer>
  );
}