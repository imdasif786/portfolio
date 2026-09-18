import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export function Reveal({ children, delay = 0, className = "", as: As = "div" }: { children: ReactNode; delay?: number; className?: string; as?: any }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties = { animationDelay: `${delay}ms` };
  return (
    <As ref={ref as any} style={style} className={`reveal ${seen ? "in-view" : ""} ${className}`}>
      {children}
    </As>
  );
}