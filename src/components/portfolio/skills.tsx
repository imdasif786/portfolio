import { useState } from "react";
import { Reveal } from "./reveal";
import {
  Code,
  Boxes,
  Palette,
  Plug,
  Wrench,
  Layers,
} from "lucide-react";

const FILTERS = [
  { key: "all", label: "All", icon: Layers },
  { key: "frontend", label: "Frontend", icon: Code },
  { key: "react", label: "React Ecosystem", icon: Boxes },
  { key: "ui", label: "UI Development", icon: Palette },
  { key: "api", label: "API & Integration", icon: Plug },
  { key: "extra", label: "Additional", icon: Wrench },
];

const CATEGORIES = [
  {
    key: "frontend",
    name: "Frontend",
    icon: Code,
    items: [
      { name: "React.js", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logo: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "SCSS/SASS", logo: "https://cdn.simpleicons.org/sass/CC6699" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    ],
  },
  {
    key: "react",
    name: "React Ecosystem",
    icon: Boxes,
    items: [
      { name: "React Hooks", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "React Router", logo: "https://cdn.simpleicons.org/reactrouter/CA4245" },
      { name: "Redux Toolkit", logo: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Context API", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "JSX", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TSX", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
  },
  {
    key: "ui",
    name: "UI Development",
    icon: Palette,
    items: [
      { name: "Shadcn/ui", logo: "https://cdn.simpleicons.org/shadcnui/1572B6" },
      { name: "Responsive Design", logo: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "Figma to Code", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Cross-browser", logo: "https://cdn.simpleicons.org/googlechrome/4285F4" },
      { name: "BEM", logo: "https://cdn.simpleicons.org/sass/CC6699" },
      { name: "Pixel-perfect UI", logo: "https://cdn.simpleicons.org/target/31A8FF" },
    ],
  },
  {
    key: "api",
    name: "API & Integration",
    icon: Plug,
    items: [
      { name: "REST APIs", logo: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "AJAX", logo: "https://cdn.simpleicons.org/jquery/0769AD" },
      { name: "JSON", logo: "https://cdn.simpleicons.org/json/ffffff" },
      { name: "Local Storage", logo: "https://cdn.simpleicons.org/googlechrome/4285F4" },
    ],
  },
  {
    key: "extra",
    name: "Additional",
    icon: Wrench,
    items: [
      { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B" },
      { name: "Elementor", logo: "https://cdn.simpleicons.org/elementor/92003B" },
      { name: "WooCommerce", logo: "https://cdn.simpleicons.org/woocommerce/96588A" },
      { name: "PHP (Basic)", logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "MySQL (Basic)", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "cPanel", logo: "https://cdn.simpleicons.org/cpanel/FF6C2C" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/ffffff" },
    ],
  },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleCategories =
    activeFilter === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.key === activeFilter);

  return (
    <section id="skills" className="relative py-10 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-cyan)]">
              Skills
            </p>
            <h2
              className="mt-2 text-4xl font-black tracking-tight sm:text-5xl"
              style={{ fontFamily: "Manrope, Inter, sans-serif" }}
            >
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Technologies, frameworks, and tools I use to bring ideas to life.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {FILTERS.map((f) => {
              const Icon = f.icon;
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`group relative flex items-center gap-2 rounded-full px-2 py-1.5 md:px-5 md:py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                      ? "bg-gradient-brand text-primary-foreground shadow-elegant"
                      : "border border-border/60 bg-card/50 text-foreground/80 backdrop-blur hover:border-primary/60 hover:bg-card hover:text-foreground"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{f.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visibleCategories.map((category, i) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.key} delay={i * 80}>
                <div
                  className="
            group h-full
            rounded-2xl
            border border-border/50
            bg-card/50
            p-3
            md:p-5
            transition-all duration-300
            hover:border-primary/30
            hover:bg-card
            hover:shadow-elegant
          "
                >
                  {/* Category Header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="
                grid h-9 w-9 shrink-0 place-items-center
                rounded-xl
                bg-primary/10
                text-primary
                transition-transform duration-300
                group-hover:scale-105
              "
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold uppercase tracking-wide">
                        {category.name}
                      </h3>

                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {category.items.length} technologies
                      </p>
                    </div>

                    <span
                      className="
                ml-auto
                grid h-7 min-w-7 shrink-0 place-items-center
                rounded-full
                bg-muted
                px-2
                text-xs font-semibold
                text-muted-foreground
              "
                    >
                      {category.items.length}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="mb-4 h-px bg-border/50" />

                  {/* Skills */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="
                  group/skill
                  flex items-center gap-2.5
                  rounded-xl
                  border border-border/40
                  bg-background/50
                  px-2 py-1.5
                  md:px-3 md:py-2.5
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/30
                  hover:bg-background
                "
                      >
                        {/* Logo */}
                        <div
                          className="
                    grid h-9 w-9 shrink-0 place-items-center
                    rounded-lg
                    bg-muted/50
                    transition-all duration-300
                    group-hover/skill:bg-primary/10
                    group-hover/skill:scale-105
                  "
                        >
                          <img
                            src={item.logo}
                            alt={`${item.name} logo`}
                            loading="lazy"
                            className="
                      h-5 w-5
                      object-contain
                      transition-transform duration-300
                      group-hover/skill:scale-110
                    "
                          />
                        </div>

                        {/* Skill Name */}
                        <span
                          className="
                    min-w-0 truncate
                    text-sm font-medium
                    text-foreground/90
                  "
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
