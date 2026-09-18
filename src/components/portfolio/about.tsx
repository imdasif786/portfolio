import { Code2, Rocket, Sparkles, Users } from "lucide-react";
import { Reveal } from "./reveal";
import { Counter } from "./counter";

const HIGHLIGHTS = [
  { icon: Code2, title: "Clean UI Development", text: "Pixel-perfect, accessible interfaces from Figma to production." },
  { icon: Rocket, title: "React Expertise", text: "Hooks, Router, Redux Toolkit, Context API and reusable architecture." },
  { icon: Sparkles, title: "Performance First", text: "Lazy loading, code splitting, debouncing, Lighthouse-driven tuning." },
  { icon: Users, title: "Team Player", text: "Close collaboration with designers and backend to ship production features." },
];

const STATS = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Projects Shipped" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 1, suffix: "+", label: "Year in React" },
];

export function About() {
  return (
    <section id="about" className="relative py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">About</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>
            Building the web with <span className="text-gradient">care & craft</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass relative rounded-3xl p-8 shadow-elegant">
              <div className="absolute -top-3 -right-3 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-primary-foreground">
                Frontend · React
              </div>
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a Frontend Developer with{" "}
                <span className="font-semibold text-foreground">3+ years</span> of
                professional experience — including{" "}
                <span className="font-semibold text-foreground">1.5+ year</span> hands-on
                with React.js.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I build responsive, scalable web apps using JavaScript (ES6+),
                component-based architecture, and RESTful API integration. I care
                about pixel accuracy, performance, and writing code teammates enjoy
                working with.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Currently pursuing <span className="font-semibold text-foreground">MCA at IGNOU</span> —
                and always learning something new.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-elegant">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand/15 text-[var(--brand-blue)] group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{h.text}</p>
                  <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-t from-[var(--brand-blue)]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:grid-cols-4 sm:p-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-gradient sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}