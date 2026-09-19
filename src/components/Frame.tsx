import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Mark } from "./Logo";

type SlideProps = {
  n: string; // slide number e.g. "01"
  part: string; // "PART 01 — FOUNDATION"
  title: string; // running title
  dark?: boolean;
  earth?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
  grid?: boolean;
};

export function Slide({ n, part, title, dark, earth, className, children, id, grid }: SlideProps) {
  return (
    <section
      id={id}
      data-part={part}
      className={cn(
        "relative flex min-h-screen flex-col border-t",
        dark ? "bg-ink text-paper border-line-light" : "bg-paper text-ink border-line",
        earth && "bg-earth text-paper border-transparent",
        grid && (dark ? "grid-bg-dark" : "grid-bg"),
        className
      )}
    >
      <header className="flex items-center justify-between px-6 pt-5 md:px-12">
        <div className="eyebrow flex items-center gap-4 opacity-70">
          <span>{part}</span>
          <span className="hidden h-px w-8 bg-current md:block" />
          <span className="hidden md:inline">{title}</span>
        </div>
        <div className="eyebrow mono-num flex items-center gap-3 opacity-70">
          <Mark className="h-4 w-auto" stroke={16} />
          <span>{n}</span>
        </div>
      </header>
      <div className="flex flex-1 flex-col px-6 pb-16 pt-10 md:px-12 md:pt-14">{children}</div>
    </section>
  );
}

export function PartDivider({
  n,
  title,
  sub,
  image,
  id,
}: {
  n: string;
  title: string;
  sub: string;
  image?: string;
  id?: string;
}) {
  return (
    <section id={id} className="relative flex min-h-screen flex-col overflow-hidden bg-ink text-paper">
      {image && (
        <img
          src={image}
          alt=""
          className="img-mono absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="relative flex flex-1 flex-col justify-between px-6 py-8 md:px-12">
        <div className="flex items-start justify-between">
          <span className="eyebrow opacity-70">Part {n} of 06</span>
          <Mark className="h-6 w-auto" />
        </div>
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <span className="display-wide block text-[38vw] leading-[0.75] text-paper md:text-[26vw]">
              {n}
            </span>
          </div>
          <div className="col-span-12 md:col-span-5 md:pb-8">
            <h2 className="display text-5xl md:text-7xl">{title}</h2>
            <p className="serif-i mt-6 max-w-md text-2xl text-paper/80 md:text-3xl">{sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow opacity-60", className)}>{children}</p>;
}

export function Arrow({ className, down }: { className?: string; down?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", down && "rotate-90", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      aria-hidden="true"
    >
      <path d="M2 12h19M14 5l7 7-7 7" />
    </svg>
  );
}

/** Vertical step flow with connecting hairline */
export function Flow({
  steps,
  className,
  big,
  dark,
}: {
  steps: { k: string; v?: string }[];
  className?: string;
  big?: boolean;
  dark?: boolean;
}) {
  return (
    <ol className={cn("relative", className)}>
      <span className="absolute left-[7px] top-2 bottom-2 w-px bg-current opacity-30" />
      {steps.map((s, i) => (
        <li key={s.k} className="relative flex gap-6 pb-6 last:pb-0">
          <span
            className={cn(
              "relative z-10 mt-[0.35em] block h-[15px] w-[15px] shrink-0 border border-current",
              dark ? "bg-ink" : "bg-paper"
            )}
          >
            {i === steps.length - 1 && <span className="absolute inset-[3px] bg-current" />}
          </span>
          <div>
            <p className={cn("display", big ? "text-3xl md:text-5xl" : "text-xl md:text-2xl")}>{s.k}</p>
            {s.v && <p className="serif-i mt-1 text-lg opacity-70 md:text-xl">{s.v}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Horizontal step chain */
export function Chain({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-3", className)}>
      {items.map((it, i) => (
        <span key={it} className="flex items-center gap-4">
          <span className="display text-2xl md:text-4xl">{it}</span>
          {i < items.length - 1 && <Arrow className="h-6 w-6 opacity-50 md:h-8 md:w-8" />}
        </span>
      ))}
    </div>
  );
}

export function NumRow({
  n,
  title,
  body,
  className,
}: {
  n: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-12 gap-4 border-t border-current/20 py-6", className)}>
      <span className="mono-num col-span-2 text-sm opacity-50 md:col-span-1">{n}</span>
      <h4 className="display col-span-10 text-2xl md:col-span-5 md:text-4xl">{title}</h4>
      {body && <p className="serif col-span-10 col-start-3 text-xl opacity-80 md:col-span-6 md:col-start-auto md:text-2xl">{body}</p>}
    </div>
  );
}

export function Folio({ children }: { children: ReactNode }) {
  return <p className="eyebrow mt-auto pt-10 opacity-50">{children}</p>;
}
