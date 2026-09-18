import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./reveal";

import clientPortalImage from "@/assets/projects/client-portal.png";
import touchScreenImage from "@/assets/projects/touch-screen-estertec.png";
import prestanImage from "@/assets/projects/prestan.png";
import acsiusImage from "@/assets/projects/acsius-technologies.png";
import perlesducielImage from "@/assets/projects/perlesduciel.png";
import reneetoumaImage from "@/assets/projects/reneetouma-makeup.png";


const PROJECTS = [
  {
    title: "Client Portal Dashboard",
    image: clientPortalImage,
    desc: "Responsive user dashboard portal for managing client/user information and dashboard activities. Reusable React components and dynamic UI with Hooks.",
    tech: ["React.js", "React Router", "Tailwind CSS", "HTML5", "CSS3", "Responsive"],
    live: "https://acsiusclientswork.com/portal-user-dashboard/",
    hue: "linear-gradient(135deg, oklch(0.85 0.15 200), oklch(0.72 0.19 245))",
    tag: "Dashboard",
  },
  {
    title: "Touch Screen Estertec",
    image: touchScreenImage,
    desc: "Responsive corporate website built with Next.js and reusable components. Optimized UI performance for a seamless cross-device experience.",
    tech: ["Next.js", "React.js", "JavaScript", "CSS3", "Bootstrap", "Responsive"],
    live: "https://ts.estertec.com/",
    hue: "linear-gradient(135deg, oklch(0.72 0.19 245), oklch(0.68 0.22 300))",
    tag: "React",
  },
  {
    title: "Prestan",
    // image: prestanImage,
    desc: "Responsive web pages built with HTML, SCSS and JavaScript. Pixel-perfect UI with optimized performance and cross-browser compatibility.",
    tech: ["HTML5", "CSS3", "SCSS", "JavaScript", "Bootstrap", "Responsive"],
    live: "https://1seoindia.com/html/prestan/",
    hue: "linear-gradient(135deg, oklch(0.75 0.18 145), oklch(0.85 0.15 200))",
    tag: "Frontend",
  },
  {
    title: "Acsius Technologies",
    // image: acsiusImage,
    desc: "Corporate WordPress website built with custom themes and Elementor. Fully responsive design and content management.",
    tech: ["WordPress", "Elementor", "Responsive"],
    live: "https://www.acsius.com/",
    hue: "linear-gradient(135deg, oklch(0.7 0.2 40), oklch(0.68 0.22 300))",
    tag: "WordPress",
  },
  {
    title: "Perlesduciel",
    // image: perlesducielImage,
    desc: "Multilingual WordPress site with WPML, custom themes and Elementor for a European client.",
    tech: ["WordPress", "Elementor", "WPML", "Responsive"],
    live: "https://perlesduciel.eu/",
    hue: "linear-gradient(135deg, oklch(0.68 0.22 300), oklch(0.72 0.19 245))",
    tag: "WordPress",
  },
  {
    title: "Reneetouma Makeup",
    // image: reneetoumaImage,
    desc: "E-commerce store built on WordPress with WooCommerce, custom themes and Elementor.",
    tech: ["WordPress", "WooCommerce", "Elementor", "Responsive"],
    live: "https://reneetoumamakeup.com/",
    hue: "linear-gradient(135deg, oklch(0.75 0.2 20), oklch(0.68 0.22 300))",
    tag: "eCommerce",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">Projects</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ fontFamily: 'Manrope, Inter, sans-serif' }}>
            Selected <span className="text-gradient">work</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A few products I've built and shipped for clients and teams.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/50 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-elegant">

                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.title} project screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Subtle bottom overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-80"
                    aria-hidden="true"
                  />

                  {/* Project Tag */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-background/70 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md">
                    {p.tag}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">
                    {p.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>

                    <a
                      href="https://github.com/imdasif786/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold transition-all hover:border-primary/60 hover:bg-primary/5"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
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