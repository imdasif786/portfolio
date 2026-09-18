import { Download, MessageCircle, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import photoAsset from "@/assets/mdasif.jpeg";
import resumeAsset from "@/assets/Md_Asif_Resume.pdf";

const ROLES = ["React.js Developer", "WordPress Developer"];

function useTypingEffect(
  words: string[],
  typeMs = 90,
  holdMs = 1600,
  eraseMs = 45,
) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => (v + 1) % words.length);
    } else {
      t = setTimeout(
        () =>
          setText(
            deleting
              ? word.slice(0, text.length - 1)
              : word.slice(0, text.length + 1),
          ),
        deleting ? eraseMs : typeMs,
      );
    }

    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeMs, holdMs, eraseMs]);

  return text;
}

export function Hero() {
  const typed = useTypingEffect(ROLES);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    el.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;

    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-28"
    >
      {/* Minimal background — blurred circles only */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--brand-blue)] opacity-[0.12] blur-[130px]" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-[var(--brand-purple)] opacity-[0.14] blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          {/* Certification */}
          <a
            href="#certificates"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("certificates")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="View Md Asif's React.js Developer certification"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3.5 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_24px_-6px_var(--brand-blue)]"
          >
            <Trophy
              className="h-3.5 w-3.5 text-[var(--brand-cyan)]"
              aria-hidden="true"
            />
            Certified React.js Developer · Ducat
          </a>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="mt-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "Manrope, Inter, sans-serif" }}
          >
            Hi, I'm <span className="text-gradient">Md Asif</span>
          </h1>

          {/* Primary role */}
          <p className="mt-4 text-xl font-semibold text-foreground/90 sm:text-2xl">
            Frontend Developer (React.js)
          </p>

          {/* Typing roles */}
          <p
            className="mt-1 text-lg text-muted-foreground sm:text-xl"
            aria-label="React.js Developer and WordPress Developer"
          >
            <span className="text-gradient font-semibold" aria-hidden="true">
              {typed}
            </span>

            <span
              className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-foreground/70 align-middle animate-pulse"
              aria-hidden="true"
            />
          </p>

          {/* SEO-friendly introduction */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Frontend Developer with 3+ years of experience crafting responsive, scalable web applications using React.js, JavaScript (ES6+), Tailwind CSS, Redux Toolkit, and REST APIs — turning pixel-perfect designs into performant, user-friendly experiences.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={resumeAsset}
              download="Md_Asif_Resume.pdf"
              aria-label="Download Md Asif's resume"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_var(--brand-blue)]"
            >
              <Download
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              Download Resume
            </a>

            <a
              href="https://wa.me/919576386428"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Md Asif on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right — clean glass portrait */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div
            className="relative w-full max-w-[550px]"
            style={{ perspective: "1200px" }}
          >
            {/* Elegant gradient wash behind card */}
            <div className="pointer-events-none absolute -inset-10 -z-10 opacity-60">
              <div className="absolute inset-0 rounded-[40%] bg-gradient-brand blur-3xl opacity-30" />
            </div>

            {/* Thin gradient border wrapper */}
            <div
              ref={cardRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="group relative aspect-[4/3] w-full rounded-[28px] p-[1.5px] shadow-elegant transition-transform duration-500 ease-out will-change-transform animate-floaty"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--brand-cyan) 55%, transparent), color-mix(in oklab, var(--brand-purple) 55%, transparent))",
                transform:
                  "perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[27px] glass">
                <img
                  src={photoAsset}
                  alt="Md Asif, Frontend Developer and React.js Developer"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
