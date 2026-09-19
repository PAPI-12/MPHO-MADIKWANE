import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const PARTS = [
  { id: "part-01", n: "01", label: "Foundation" },
  { id: "part-02", n: "02", label: "Positioning" },
  { id: "part-03", n: "03", label: "Brand Strategy" },
  { id: "part-04", n: "04", label: "Corporate Identity" },
  { id: "part-05", n: "05", label: "Brand Experience" },
  { id: "part-06", n: "06", label: "Partnership & Funding" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);

      let current = "";
      for (const p of PARTS) {
        const el = document.getElementById(p.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = p.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* progress hairline */}
      <div className="no-print fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
        <div className="h-full bg-earth transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>

      {/* chapter rail */}
      <nav className="no-print fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 mix-blend-difference lg:flex">
        {PARTS.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className={cn(
              "group flex items-center justify-end gap-3 text-paper transition-opacity",
              active === p.id ? "opacity-100" : "opacity-40 hover:opacity-80"
            )}
          >
            <span className="eyebrow max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[200px]">
              {p.label}
            </span>
            <span className="mono-num text-[0.65rem] font-medium tracking-widest">{p.n}</span>
            <span className={cn("block h-px bg-paper transition-all", active === p.id ? "w-8" : "w-4")} />
          </a>
        ))}
      </nav>
    </>
  );
}
