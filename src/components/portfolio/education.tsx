import { Reveal } from "./reveal";
import { GraduationCap, MapPin, Sparkles, School, Code2, BookOpen } from "lucide-react";

const EDU = [
  {
    period: "2025 – 2027",
    degree: "Master of Computer Applications (MCA)",
    institution: "IGNOU",
    location: "Delhi, India",
    status: "Currently Pursuing",
    current: true,
  },
  {
    period: "2019 – 2022",
    degree: "Bachelor of Arts (B.A.)",
    institution: "Jai Prakash University, Chapra",
    location: "Chapra, Bihar",
    status: "62.42%",
    current: false,
  },
];

const ROADMAP = [
  {
    icon: School,
    label: "Matriculation",
    sub: "BSEB Patna",
  },
  {
    icon: School,
    label: "Higher Secondary",
    sub: "BSEB Patna",
  },
  {
    icon: GraduationCap,
    label: "Bachelor of Arts (B.A.)",
    sub: "Jai Prakash University Chapara",
  },
  {
    icon: Code2,
    label: "React.js",
    sub: "Ducat, Noida Sector 16",
  },
  {
    icon: BookOpen,
    label: "MCA",
    sub: "2025 – 2027 • Pursuing",
    active: true,
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-10 sm:py-20">
      {/* soft ambient */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl bg-[var(--gradient-soft)] blur-3xl opacity-60" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">Education</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
            My <span className="text-gradient">academic</span> journey
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            My academic journey and continuous learning as a Frontend Developer.
          </p>
        </Reveal>

        {/* Education cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {EDU.map((e, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group relative rounded-3xl p-[1.5px] transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-40 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative h-full rounded-3xl glass p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-elegant">
                        <GraduationCap className="h-7 w-7" />
                      </div>
                      {e.current && (
                        <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center">
                          <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--brand-cyan)] opacity-70" />
                          <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--brand-cyan)]" />
                        </span>
                      )}
                    </div>
                    <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold text-[var(--brand-cyan)] backdrop-blur">
                      {e.period}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-tight">{e.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {e.location}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-brand/10 px-3 py-1.5 text-xs font-semibold">
                    <Sparkles className="h-3.5 w-3.5 text-[var(--brand-cyan)]" />
                    {e.status}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Learning roadmap */}
        <Reveal delay={200}>
          <div className="mt-16 rounded-3xl glass p-6 sm:p-10">
            <div className="mb-8 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[var(--brand-cyan)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Learning Roadmap</p>
            </div>

            <ol className="relative grid gap-6 md:grid-cols-5 md:gap-3">
              {/* horizontal connector (desktop) */}
              <div className="pointer-events-none absolute inset-x-8 top-8 hidden h-px bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-blue)] to-[var(--brand-purple)] opacity-40 md:block" />
              {ROADMAP.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={i} className="relative flex md:flex-col md:items-center md:text-center">
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:gap-3">
                      <div className={`relative grid h-16 w-16 flex-none place-items-center rounded-2xl border transition-all duration-500 ${
                        step.active
                          ? "border-transparent bg-gradient-brand text-primary-foreground shadow-[var(--glow-blue)]"
                          : "border-border/60 bg-background/60 text-foreground/80"
                      }`}>
                        <Icon className="h-6 w-6" />
                        {step.active && (
                          <span className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-40 blur-md" />
                        )}
                      </div>
                      <div className="pt-1 md:pt-0">
                        <div className="text-sm font-bold">{step.label}</div>
                        <div className="text-xs text-muted-foreground">{step.sub}</div>
                      </div>
                    </div>
                    {/* vertical connector (mobile) */}
                    {i < ROADMAP.length - 1 && (
                      <span className="absolute left-8 top-16 h-6 w-px bg-gradient-to-b from-[var(--brand-blue)] to-transparent md:hidden" />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}