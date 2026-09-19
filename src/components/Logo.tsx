import type React from "react";
import { cn } from "../utils/cn";

/**
 * Geometric M / inverted M construction.
 * Two mirrored forms meeting at a shared horizon — the point of connection.
 */
export function Mark({
  className,
  stroke = 14,
  style,
}: {
  className?: string;
  stroke?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 160" className={cn("block", className)} style={style} fill="none" aria-hidden="true">
      {/* Upper M */}
      <path
        d="M7 80 V7 L50 52 L93 7 V80"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="miter"
        strokeMiterlimit={10}
      />
      {/* Inverted M */}
      <path
        d="M7 80 V153 L50 108 L93 153 V80"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="miter"
        strokeMiterlimit={10}
      />
    </svg>
  );
}

export function Wordmark({ className, stacked = false }: { className?: string; stacked?: boolean }) {
  return (
    <span
      className={cn(
        "font-sans font-semibold uppercase tracking-[0.18em] leading-none",
        stacked && "flex flex-col gap-1",
        className
      )}
    >
      <span>Mpho</span>
      {!stacked && " "}
      <span>Madikwane</span>
    </span>
  );
}

export function Lockup({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", dark ? "text-paper" : "text-ink", className)}>
      <Mark className="h-8 w-auto" />
      <Wordmark className="text-[0.7rem]" />
    </div>
  );
}
