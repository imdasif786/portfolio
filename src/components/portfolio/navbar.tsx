import { useEffect, useRef, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import resumeAsset from "@/assets/Md_Asif_Resume.pdf";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 140;
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(item.id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const btn = itemRefs.current[active];
    const list = listRef.current;
    if (!btn || !list) return;
    const listRect = list.getBoundingClientRect();
    const rect = btn.getBoundingClientRect();
    setIndicator({ left: rect.left - listRect.left, width: rect.width, visible: true });
  }, [active, scrolled]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/40 bg-background/60 backdrop-blur-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <button onClick={() => go("home")} className="group flex items-center gap-2">

          <span className="text-lg font-bold tracking-wide sm:block">
            <span className="text-gradient">MD</span> Asif
          </span>
        </button>

        <ul
          ref={listRef}
          className="relative hidden items-center gap-0.5 rounded-full border border-border/50 bg-background/40 p-1 backdrop-blur-xl lg:flex"
        >
          {/* sliding indicator */}
          <span
            className="pointer-events-none absolute top-1 bottom-1 rounded-full bg-gradient-brand opacity-90 shadow-[var(--glow-blue)] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.visible ? 0.95 : 0,
            }}
            aria-hidden="true"
          />
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.id} className="relative">
                <button
                  ref={(el) => { itemRefs.current[n.id] = el; }}
                  onClick={() => go(n.id)}
                  className={`group relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{n.label}</span>
                  {/* hover underline */}
                  <span
                    className={`pointer-events-none absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 rounded-full bg-gradient-brand transition-transform duration-300 ease-out ${
                      isActive ? "" : "group-hover:scale-x-100"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resumeAsset}
            download="Md_Asif_Resume.pdf"
            className="group relative hidden overflow-hidden rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex md:items-center md:gap-1.5"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-card/60 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {NAV.map((n, i) => (
            <li
              key={n.id}
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                transform: open ? "translateX(0)" : "translateX(-12px)",
                opacity: open ? 1 : 0,
                transition: "transform 400ms ease, opacity 400ms ease",
              }}
            >
              <button
                onClick={() => go(n.id)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active === n.id
                    ? "bg-gradient-brand/10 text-foreground"
                    : "text-muted-foreground hover:bg-muted/60"
                }`}
              >
                <span>{n.label}</span>
                {active === n.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                )}
              </button>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={resumeAsset.url}
              download="Md_Asif_Resume.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}