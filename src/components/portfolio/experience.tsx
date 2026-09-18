import { Reveal } from "./reveal";
import { Briefcase, MapPin, Calendar, Sparkles, Trophy, CheckCircle2, ArrowRight } from "lucide-react";

type Job = {
  company: string;
  companyShort: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  responsibilities: string[];
  contributions: string[];
  achievements: string[];
  current?: boolean;
};

const JOBS: Job[] = [
  {
    company: "Acsius Technologies Pvt Ltd",
    companyShort: "AT",
    role: "Frontend Developer (React.js)",
    period: "Jan 2025 – Present",
    location: "New Delhi, India",
    description:
      "IT services company delivering scalable web platforms and product engineering for global clients.",
    tech: [
      "React.js", "JavaScript", "HTML5", "SCSS", "Tailwind CSS",
      "Bootstrap", "Redux Toolkit", "REST APIs",
    ],
    responsibilities: [
      "Build responsive React.js applications with modern JavaScript (ES6+).",
      "Design and maintain reusable component libraries and design tokens.",
      "Integrate REST APIs and manage async data flow across the app.",
    ],
    contributions: [
      "Introduced Redux Toolkit patterns and Context API for predictable state.",
      "Set up React Router, Hooks and lazy loading across multiple modules.",
    ],
    achievements: [
      "Improved perceived performance via code splitting and debouncing.",
      "Shipped production-ready features in tight release cycles.",
    ],
    current: true,
  },
  {
    company: "Acsius Technologies Pvt Ltd",
    companyShort: "AT",
    role: "Frontend Developer (WordPress · HTML/CSS · JavaScript)",
    period: "Jul 2022 – Jan 2025",
    location: "New Delhi, India",
    description:
      "Delivered business websites, landing pages and e-commerce stores for a variety of clients.",
    tech: [
      "WordPress", "Elementor", "WooCommerce", "HTML5",
      "CSS3", "SCSS", "JavaScript", "Bootstrap", "PHP",
    ],
    responsibilities: [
      "Develop and maintain responsive WordPress sites with Elementor.",
      "Convert Figma / PSD designs into pixel-perfect interfaces.",
      "Ensure cross-browser compatibility across every build.",
    ],
    contributions: [
      "Built and customized WooCommerce stores and landing pages.",
      "Standardized SCSS structure and reusable UI patterns.",
    ],
    achievements: [
      "Optimized page-load performance across production sites.",
      "Consistently delivered pixel-accurate handoffs on schedule.",
    ],
  },
];


export function Experience() {
  return (
    <section id="experience" className="relative py-10 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-80 max-w-4xl bg-[var(--gradient-soft)] blur-3xl opacity-50" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
            Professional Experience
          </p>
          <h2
            className="mt-2 text-4xl font-black tracking-tight sm:text-5xl"
            style={{ fontFamily: "Manrope, Inter, sans-serif" }}
          >
            My <span className="text-gradient">career</span> progression
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Three years of growth — from WordPress builds to production-grade React applications.
          </p>
        </Reveal>


        {/* Company cards */}
        <div className="mt-12 space-y-8">
          {JOBS.map((j, i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="group relative rounded-[24px] p-[1.5px] transition-transform duration-500 hover:-translate-y-1.5">
                {/* gradient border */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-brand opacity-40 blur-[2px] transition-opacity duration-500 group-hover:opacity-90" />
                <div className="relative rounded-[24px] glass p-6 shadow-elegant sm:p-8">
                  <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                    {/* LEFT: logo + meta */}
                    <div className="flex flex-col gap-4">
                      <div className="relative">
                        <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-elegant">
                          <span className="text-2xl font-black tracking-tight">{j.companyShort}</span>
                        </div>
                        {j.current && (
                          <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-cyan)] opacity-75" />
                            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[var(--brand-cyan)]" />
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold text-[var(--brand-cyan)]">
                          <Calendar className="h-3.5 w-3.5" />
                          {j.period}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 flex-none" />
                          <span>{j.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4 flex-none" />
                          <span>Full-time</span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: content */}
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">{j.role}</h3>
                      <p className="mt-1 text-sm font-medium text-[var(--brand-cyan)]">{j.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {j.description}
                      </p>

                      {/* Tech badges */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {j.tech.map((t, k) => (
                          <span
                            key={t}
                            className="group/badge relative rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] font-semibold text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-brand hover:text-primary-foreground hover:shadow-[var(--glow-blue)]"
                            style={{ animationDelay: `${k * 50}ms` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Sections */}
                      <div className="mt-6 grid gap-5 sm:grid-cols-3">
                        <SubList icon={<CheckCircle2 className="h-4 w-4 text-[var(--brand-cyan)]" />} title="Responsibilities" items={j.responsibilities} />
                        <SubList icon={<Sparkles className="h-4 w-4 text-[var(--brand-blue)]" />} title="Contributions" items={j.contributions} />
                        <SubList icon={<Trophy className="h-4 w-4 text-[var(--brand-purple)]" />} title="Achievements" items={j.achievements} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubList({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground/90">
        {icon}
        {title}
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
            <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-gradient-brand" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}