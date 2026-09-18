import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";

const ITEMS = [
  { icon: Mail, label: "Email", value: "mdasifjpu@gmail.com", href: "mailto:mdasifjpu@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 95763 86428", href: "tel:+919576386428" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/imdasif", href: "https://www.linkedin.com/in/imdasif/" },
  { icon: Github, label: "GitHub", value: "github.com/imdasif786", href: "https://github.com/imdasif786/" },
  { icon: Globe, label: "Portfolio", value: "asifansari-portfolio.netlify.app", href: "https://asifansari-portfolio.netlify.app" },
  { icon: MapPin, label: "Location", value: "I.P Extension, New Delhi", href: "https://maps.google.com/?q=I.P+Extension+New+Delhi" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-10 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--brand-blue)] opacity-20 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/50 p-8 backdrop-blur shadow-elegant sm:p-14">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)] to-transparent" />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">Contact</p>
                <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>
                  Let's build <span className="text-gradient">something great</span>
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  I'm open to Frontend / React roles and freelance collaborations.
                  The fastest way to reach me is email or LinkedIn.
                </p>
                <a
                  href="mailto:mdasifjpu@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
                >
                  <Mail className="h-4 w-4" /> Say Hello
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ITEMS.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-background/50 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background/80 hover:shadow-elegant"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand/15 text-[var(--brand-blue)] transition-all group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                      <it.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                      <div className="truncate text-sm font-medium">{it.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}